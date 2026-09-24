#!/usr/bin/env node
/*
 * Builds the Astral look for the React export.
 * Reads styles.css, astral-ui.js, data/design-systems.json and docs/.
 * Rewrites library-site/astral-lib.js (tokensCss, themeTs, lookCss, components, icons, version).
 *
 *   node tools/build-library.js          write the library
 *   node tools/build-library.js --check  report only
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");
const CHECK = process.argv.includes("--check");

// Prototype chrome that never ships: the desk, the preview menu, the prototype export menu.
const CHROME = /\.astral-(preview|export|lib-host)\b|data-proto|#skills-list|\.ds-/;
const HOST = "#astral-fs";
const HOST_HOOK = ":is(#astral-fs, .astral-root)";

function parse(src) {
  const items = [];
  let i = 0;
  const n = src.length;
  const skipWs = () => {
    while (i < n) {
      if (/\s/.test(src[i])) i += 1;
      else if (src.startsWith("/*", i)) {
        const e = src.indexOf("*/", i + 2);
        i = e < 0 ? n : e + 2;
      } else break;
    }
  };
  const block = () => {
    let depth = 0;
    const start = i;
    for (; i < n; i += 1) {
      const c = src[i];
      if (src.startsWith("/*", i)) {
        i = src.indexOf("*/", i + 2) + 1;
        continue;
      }
      if (c === '"' || c === "'") {
        i += 1;
        while (i < n && src[i] !== c) {
          if (src[i] === "\\") i += 1;
          i += 1;
        }
        continue;
      }
      if (c === "{") depth += 1;
      else if (c === "}") {
        depth -= 1;
        if (depth === 0) {
          i += 1;
          return src.slice(start + 1, i - 1);
        }
      }
    }
    return src.slice(start + 1);
  };
  for (;;) {
    skipWs();
    if (i >= n) break;
    const s = i;
    while (i < n && src[i] !== "{" && src[i] !== ";") {
      if (src.startsWith("/*", i)) {
        i = src.indexOf("*/", i + 2) + 2;
        continue;
      }
      i += 1;
    }
    const pre = src.slice(s, i).replace(/\/\*[\s\S]*?\*\//g, "").trim();
    if (src[i] === ";") {
      i += 1;
      items.push({ type: "stmt", pre });
      continue;
    }
    const body = block();
    if (/^@(media|supports|container|layer)/.test(pre)) items.push({ type: "group", pre, items: parse(body) });
    else if (pre.startsWith("@")) items.push({ type: "at", pre, body });
    else items.push({ type: "rule", pre, body });
  }
  return items;
}

function splitSel(s) {
  const out = [];
  let depth = 0;
  let cur = "";
  for (const c of s) {
    if (c === "(" || c === "[") depth += 1;
    if (c === ")" || c === "]") depth -= 1;
    if (c === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += c;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

function tidyBody(body) {
  return body
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `  ${line}`)
    .join("\n");
}

function keepSelector(sel) {
  if (!/astral-/.test(sel)) return null;
  if (CHROME.test(sel)) return null;
  const foreign = [...sel.matchAll(/[.#]([A-Za-z_][\w-]*)/g)]
    .map((m) => m[1])
    .filter((t) => !/^(astral-|is-|has-)/.test(t));
  if (foreign.length) return null;
  // The bare host is the prototype's full-screen frame. The product mounts its own root.
  if (/^#astral-fs(\[hidden\])?$/.test(sel)) return null;
  return sel.split(HOST).join(HOST_HOOK);
}

function emitRules(items, indent, used) {
  const out = [];
  items.forEach((item) => {
    if (item.type === "rule") {
      const sels = splitSel(item.pre).map(keepSelector).filter(Boolean);
      if (!sels.length) return;
      for (const m of item.body.matchAll(/animation(?:-name)?\s*:\s*([^;]+)/g)) {
        m[1].split(/[\s,]+/).forEach((w) => used.add(w));
      }
      const body = tidyBody(item.body);
      if (!body) return;
      out.push(`${indent}${sels.join(`,\n${indent}`)} {\n${body.replace(/^/gm, indent)}\n${indent}}`);
    } else if (item.type === "group") {
      const inner = emitRules(item.items, `${indent}  `, used);
      if (inner.length) out.push(`${indent}${item.pre} {\n${inner.join("\n\n")}\n${indent}}`);
    }
  });
  return out;
}

function rootVars(items) {
  const vars = new Map();
  const root = items.find((it) => it.type === "rule" && it.pre === ":root");
  if (!root) return vars;
  root.body
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split(";")
    .forEach((decl) => {
      const m = decl.trim().match(/^(--[\w-]+)\s*:\s*([\s\S]+)$/);
      if (m) vars.set(m[1], m[2].trim().replace(/\s+/g, " "));
    });
  return vars;
}

function fontFaces(items) {
  return items
    .filter((it) => it.type === "at" && it.pre === "@font-face")
    .map((it) => `@font-face {\n${tidyBody(it.body.replace(/\/assets\/fonts\//g, "./fonts/"))}\n}`);
}

function readChangelog() {
  const text = read("docs/astral-look-changelog.md");
  const m = text.match(/^## (v\d+)\s+.\s+(\d{4}-\d{2}-\d{2})/m);
  if (!m) throw new Error("docs/astral-look-changelog.md needs a '## vN — YYYY-MM-DD' heading");
  return { version: m[1], date: m[2], text };
}

function buildTokens(styleItems, oldTokensCss, stamp) {
  const vars = rootVars(styleItems);
  const oldItems = parse(oldTokensCss);
  const oldVars = rootVars(oldItems);
  const merged = new Map();
  // Live values first, in source order. The type scale lives only in the export.
  vars.forEach((v, k) => merged.set(k, v));
  oldVars.forEach((v, k) => {
    if (!merged.has(k)) merged.set(k, v);
  });
  const typeStyles = oldItems.filter((it) => it.type === "rule" && it.pre.startsWith(".astral-type-"));
  const lines = [...merged].map(([k, v]) => `  ${k}: ${v};`);
  return {
    vars: merged,
    css:
      [
        `/* Astral tokens ${stamp}. Put this in src/theme/tokens.css and import it once. */`,
        "/* These variables match the live product :root. */",
        "/* Drop Roobert Regular, Medium, and SemiBold in src/theme/fonts. Aptos is the fallback. */",
        ...fontFaces(styleItems),
        `:root {\n${lines.join("\n")}\n}`,
        "/* Base type. Roobert Medium is the body weight. The heaviest weight is 600. */",
        "html {\n  font-family: var(--font-family-sans);\n  font-weight: var(--font-weight-medium);\n  color: var(--color-text-primary);\n}",
        "/* Named type styles. Use the class or copy the vars into the React piece. */",
        ...typeStyles.map((it) => `${it.pre} {\n${tidyBody(it.body)}\n}`),
      ].join("\n\n") + "\n",
  };
}

function loadTheme(themeTs) {
  const cut = themeTs.indexOf("export const typeStyles");
  const js = themeTs
    .slice(0, cut)
    .replace("export const theme =", "result =")
    .replace(/\}\s*as const;\s*$/, "}");
  const ctx = { result: null };
  vm.runInNewContext(js, ctx);
  return { theme: ctx.result, tail: themeTs.slice(cut) };
}

const THEME_VAR = {
  "size.control-sm": "--control-height-sm",
  "size.control": "--control-height",
  "size.control-field": "--control-height-field",
  "size.scrollbar": "--scrollbar-size",
  "motion.tip": "--tip-delay",
};

function themeVar(keys) {
  const key = keys.join(".");
  if (THEME_VAR[key]) return THEME_VAR[key];
  return `--${keys.map((p) => p.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)).join("-")}`;
}

function syncTheme(node, vars, trail, missing) {
  Object.keys(node).forEach((k) => {
    const next = [...trail, k];
    if (node[k] && typeof node[k] === "object") syncTheme(node[k], vars, next, missing);
    else {
      const name = themeVar(next);
      if (vars.has(name)) node[k] = vars.get(name);
      else missing.push(`${next.join(".")} (${name})`);
    }
  });
}

function tsLiteral(value, indent = "") {
  if (value && typeof value === "object") {
    const inner = `${indent}  `;
    const rows = Object.keys(value).map((k) => {
      const key = /^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k);
      return `${inner}${key}: ${tsLiteral(value[k], inner)}`;
    });
    return `{\n${rows.join(",\n")}\n${indent}}`;
  }
  return JSON.stringify(value);
}

function buildTheme(oldThemeTs, vars) {
  const { theme, tail } = loadTheme(oldThemeTs);
  theme.color.flow = { in: "", out: "" };
  theme.radius = { xs: "", ...theme.radius };
  theme.motion.slide = "";
  theme.ease = { slide: "" };
  const missing = [];
  syncTheme(theme, vars, [], missing);
  if (missing.length) throw new Error(`Theme keys with no token: ${missing.join(", ")}`);
  return `export const theme = ${tsLiteral(theme)} as const;\n\n${tail.trim()}\n`;
}

function iconMarks() {
  const src = read("astral-ui.js");
  const head = "const PROTO_ICON_MARKS = ";
  const start = src.indexOf(head);
  const end = src.indexOf("\n};", start);
  const ctx = {};
  vm.runInNewContext(`result = ${src.slice(start + head.length, end + 2)}`, ctx);
  return ctx.result;
}

function jsxMark(svg) {
  const jsx = svg
    .replace(/\s*\/>/g, " />")
    .replace(/\s([a-z]+)-([a-z][a-z-]*)=/g, (m, a, rest) => ` ${a}${rest.replace(/(^|-)([a-z])/g, (x, d, c) => c.toUpperCase())}=`)
    .trim();
  return (jsx.match(/<[a-z]/g) || []).length > 1 ? `<>${jsx}</>` : jsx;
}

function buildIconSource(marks) {
  const rows = Object.keys(marks).map(
    (name) =>
      `  ${/^[a-z]\w*$/.test(name) ? name : JSON.stringify(name)}: {\n    viewBox: "0 0 24 24",\n    node: ${jsxMark(marks[name])},\n  }`
  );
  return `import type { SVGProps } from "react";

const ICONS = {
${rows.join(",\n")}
} as const;

export type IconName = keyof typeof ICONS;

const COLOURS = {
  primary: "var(--color-text-primary)",
  inverse: "var(--color-text-inverse)",
  brand: "var(--color-brand-primary)",
  /** @deprecated Use brand. It paints Teal, not Cyan. */
  cyan: "var(--color-brand-primary)",
  muted: "var(--color-text-muted)",
} as const;

type Props = {
  name: IconName;
  size?: 16 | 18 | 24;
  colour?: keyof typeof COLOURS;
} & SVGProps<SVGSVGElement>;

export function Icon({ name, size = 18, colour = "primary", ...rest }: Props) {
  const mark = ICONS[name];
  if (!mark) return null;
  return (
    <svg
      viewBox={mark.viewBox}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      style={{ color: COLOURS[colour] }}
      {...rest}
    >
      {mark.node}
    </svg>
  );
}
`;
}

const COMPONENT_KEYS = ["id", "name", "react", "file", "summary", "usage", "variants", "states", "tokens", "props", "snippet", "family"];

function buildComponents(docs, oldComponents, iconSource) {
  const old = new Map(oldComponents.map((c) => [c.id, c]));
  return docs
    .filter((c) => c.id !== "figma")
    .map((c) => {
      const out = {};
      COMPONENT_KEYS.forEach((k) => {
        if (c[k] !== undefined) out[k] = c[k];
      });
      const prev = old.get(c.id);
      if (c.id === "icon") {
        out.source = iconSource;
        out.sourceName = "Icon.tsx";
      } else if (prev && prev.source) {
        out.source = prev.source;
        out.sourceName = prev.sourceName;
      }
      return out;
    });
}

function main() {
  const libPath = path.join(ROOT, "library-site", "astral-lib.js");
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(libPath, "utf8"), sandbox);
  const lib = sandbox.window.ASTRAL_LIB;
  const href = sandbox.window.ASTRAL_PROTOTYPE_HREF;

  const log = readChangelog();
  const stamp = `${log.version} (${log.date})`;
  const styleItems = parse(read("styles.css"));

  const tokens = buildTokens(styleItems, lib.tokensCss, stamp);
  const used = new Set();
  const rules = emitRules(styleItems, "", used);
  const frames = styleItems
    .filter((it) => it.type === "at" && /^@keyframes\s/.test(it.pre) && used.has(it.pre.split(/\s+/)[1]))
    .map((it) => {
      const steps = parse(it.body).map((r) => `  ${r.pre} {\n${tidyBody(r.body).replace(/^/gm, "  ")}\n  }`);
      return `${it.pre} {\n${steps.join("\n\n")}\n}`;
    });
  const lookCss =
    [
      `/* Astral look ${stamp}. Put this in src/theme/components.css and import it after tokens.css. */`,
      '/* Scope hook: put class="astral-root" on the app root. It stands in for the prototype\'s #astral-fs. */',
      ...rules,
      "/* Motion. Each animation has a prefers-reduced-motion rule above. */",
      ...frames,
    ].join("\n\n") + "\n";

  const defined = new Set(tokens.vars.keys());
  for (const m of lookCss.matchAll(/(--[\w-]+)\s*:/g)) defined.add(m[1]);
  const loose = [...new Set([...lookCss.matchAll(/var\((--[\w-]+)/g)].map((m) => m[1]))].filter((v) => !defined.has(v));

  const marks = iconMarks();
  const docs = JSON.parse(read("data/design-systems.json")).systems.imserv;
  const answersPath = path.join(ROOT, "docs", "astral-ui-answers.md");

  const next = {
    ...lib,
    version: log.version,
    versionDate: log.date,
    changelog: log.text,
    answers: fs.existsSync(answersPath) ? read("docs/astral-ui-answers.md") : "",
    tokensCss: tokens.css,
    themeTs: buildTheme(lib.themeTs, tokens.vars),
    lookCss,
    components: buildComponents(docs.components, lib.components, buildIconSource(marks)),
    icons: marks,
  };

  const media = rules.filter((r) => r.startsWith("@media")).length;
  console.log(
    [
      `Astral look ${stamp}`,
      `rules ${rules.length} (media ${media}), keyframes ${frames.length}, lookCss ${lookCss.length} chars`,
      `tokens ${tokens.vars.size}, icons ${Object.keys(marks).length}, components ${next.components.length}`,
      loose.length ? `vars with no token (set by JS or inline): ${loose.join(", ")}` : "every var() has a token",
    ].join("\n")
  );
  if (CHECK) return;
  fs.writeFileSync(
    libPath,
    `window.ASTRAL_PROTOTYPE_HREF = ${JSON.stringify(href)};\nwindow.ASTRAL_LIB = ${JSON.stringify(next)};\n`
  );
  console.log(`wrote ${path.relative(ROOT, libPath)}`);
}

main();
