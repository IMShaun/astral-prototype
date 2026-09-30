#!/usr/bin/env node
/**
 * Inventory Astral pieces from the named library and the live builders.
 * Compare prototype.js and app.js. Flag drift. Do not delete anything.
 *
 * Usage: node .cursor/skills/ux-patterns/scripts/check-library.mjs
 * Optional: --json
 *
 * Exit 0 if only suggestions. Exit 1 if the script cannot read the files.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../../../..");
const WANT_JSON = process.argv.includes("--json");

const HELPERS = new Set([
  "protoEsc",
  "protoIconNames",
  "protoChevronMark",
  "protoClearButton",
  "protoFlowIcon",
  "protoFlowMark",
  "protoStateIcon",
  "protoPlainSortText",
  "protoSortCompare",
  "protoSortIcon",
  "protoSortValue",
  "protoSortedRows",
  "protoTableSortMap",
  "protoTableSortState",
  "protoToggleTableSort",
]);

const BUILDER_TO_COMPONENT = {
  protoBtn: "button",
  protoGhost: "button",
  protoTextBtn: "button",
  protoIconBtn: "icon-button",
  protoIconMark: "icon",
  protoAvatarBtn: "avatar",
  protoField: "input",
  protoTextarea: "textarea",
  protoSearchField: "search",
  protoSelectFace: "select",
  protoTag: "tag",
  protoCountChip: "count",
  protoSwitch: "control",
  protoCheck: "control",
  protoTabs: "tabs",
  protoCard: "card",
  protoEmpty: "empty",
  protoPaneHead: "page-header",
  protoBreadcrumbs: "breadcrumbs",
  protoTable: "table",
  protoSortHead: "table",
  protoModalHead: "modal",
  protoBanner: "banner",
  protoFilterShell: "filter",
  protoStatePill: "state",
  protoFlowPill: "flow-pill",
  protoMeterFace: "meter-pill",
  protoTip: "tooltip",
  protoIconTip: "tooltip",
};

const PRODUCT_FILES = ["prototype.js", "astral-ui.js"];
const DESK_FILES = ["app.js"];
const CSS_FILE = "styles.css";

const CUSTOM_MARKS = [
  {
    id: "desk-status",
    re: /class="status"|className="status"/g,
    note: "Desk status pill. Product uses Tag. Status colour still waits.",
    where: "desk",
  },
  {
    id: "desk-chip",
    re: /class="chip"/g,
    note: "Desk chip. Product uses Tag or a ghost Button.",
    where: "desk",
  },
  {
    id: "product-status-class",
    re: /class="status"|className="status"/g,
    note: "Product painted a desk status class. Use Tag.",
    where: "product",
  },
];

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function loadLibrary() {
  const data = JSON.parse(read("data/design-systems.json"));
  const sys = data.systems?.imserv;
  if (!sys) throw new Error("No IMSERV system in data/design-systems.json");
  const components = (sys.components || []).map((item) => ({
    id: item.id,
    name: item.name || item.react || item.id,
    file: item.file || "",
  }));
  const tokens = (sys.tokens || []).map((item) => ({
    id: item.id,
    cssVar: item.cssVar || "",
    name: item.name || item.id,
  }));
  return { components, tokens };
}

function listBuilders(source) {
  const names = new Set();
  const re = /^function (proto[A-Z][A-Za-z0-9]*)\(/gm;
  let hit;
  while ((hit = re.exec(source))) names.add(hit[1]);
  return [...names].sort();
}

function countCalls(source, name) {
  const re = new RegExp(`\\b${name}\\s*\\(`, "g");
  return source.match(re)?.length || 0;
}

function lineHits(source, re) {
  const rows = [];
  const lines = source.split("\n");
  lines.forEach((line, i) => {
    const copy = new RegExp(re.source, re.flags.replace("g", ""));
    if (copy.test(line)) rows.push(i + 1);
  });
  return rows;
}

function hexHits(source) {
  const rows = [];
  const lines = source.split("\n");
  const re = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;
  lines.forEach((line, i) => {
    const trim = line.trim();
    if (trim.startsWith("//") || trim.startsWith("*") || trim.startsWith("/*")) return;
    const found = line.match(re);
    if (found) rows.push({ line: i + 1, values: found });
  });
  return rows;
}

function cardStackOk(css) {
  const block = css.match(/\.board-block\s*\{[^}]+\}/);
  if (!block) return { ok: false, reason: "No .board-block rule." };
  const hasGap = /gap:\s*var\(--space-16\)/.test(block[0]);
  const hasGrid = /display:\s*grid/.test(block[0]);
  if (hasGap && hasGrid) return { ok: true, reason: ".board-block is a 16px grid." };
  return { ok: false, reason: ".board-block is missing display grid or gap 16px." };
}

function main() {
  const lib = loadLibrary();
  const ui = read("astral-ui.js");
  const builders = listBuilders(ui);
  const product = PRODUCT_FILES.map((file) => ({ file, source: read(file) }));
  const desk = DESK_FILES.map((file) => ({ file, source: read(file) }));
  const css = read(CSS_FILE);

  const findings = [];
  const mapped = new Map();
  builders.forEach((name) => {
    const id = BUILDER_TO_COMPONENT[name];
    if (id) mapped.set(id, [...(mapped.get(id) || []), name]);
  });

  lib.components.forEach((item) => {
    if (!mapped.has(item.id) && !["status", "color-picker", "pagination", "button-group"].includes(item.id)) {
      findings.push({
        kind: "no-builder",
        id: item.id,
        name: item.name,
        note: "Named in the library. No proto builder mapped yet.",
      });
    }
  });

  builders.forEach((name) => {
    if (HELPERS.has(name)) return;
    const id = BUILDER_TO_COMPONENT[name];
    if (!id) {
      findings.push({
        kind: "unmapped-builder",
        id: name,
        note: "A builder with no named library piece.",
      });
      return;
    }
    if (!lib.components.some((item) => item.id === id)) {
      findings.push({
        kind: "builder-missing-component",
        id: name,
        note: `Builder maps to ${id}, which is not in the library list.`,
      });
    }
  });

  const usage = {};
  [...product, ...desk].forEach(({ file, source }) => {
    builders.forEach((name) => {
      const n = countCalls(source, name);
      if (!n) return;
      usage[name] = usage[name] || { total: 0, files: {} };
      usage[name].total += n;
      usage[name].files[file] = n;
    });
  });

  CUSTOM_MARKS.forEach((mark) => {
    const files = mark.where === "product" ? product : desk;
    files.forEach(({ file, source }) => {
      const lines = lineHits(source, mark.re);
      if (!lines.length) return;
      findings.push({
        kind: "custom-control",
        id: mark.id,
        file,
        lines: lines.slice(0, 12),
        count: lines.length,
        note: mark.note,
      });
    });
  });

  product.forEach(({ file, source }) => {
    const hex = hexHits(source);
    if (!hex.length) return;
    findings.push({
      kind: "raw-hex",
      file,
      count: hex.length,
      sample: hex.slice(0, 8),
      note: "Hex in product JS. Prefer a token or a builder.",
    });
  });

  const stack = cardStackOk(css);
  findings.push({
    kind: "card-stack",
    ok: stack.ok,
    note: stack.reason,
  });

  const report = {
    generated: new Date().toISOString().slice(0, 10),
    library: {
      components: lib.components.length,
      tokens: lib.tokens.length,
    },
    builders: builders.length,
    usage,
    mapped: Object.fromEntries(mapped),
    findings,
    waiting: [
      "Figma extract waits until they ask to connect Figma.",
      "Storybook waits.",
      "Chromatic and Percy wait.",
      "Do not auto-delete a duplicate. Human review first.",
    ],
  };

  if (WANT_JSON) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    return;
  }

  const lines = [];
  lines.push(`Library check  ${report.generated}`);
  lines.push(`${report.library.components} named pieces. ${report.builders} builders. ${report.library.tokens} tokens.`);
  lines.push("");
  lines.push("Usage");
  Object.entries(usage)
    .sort((a, b) => b[1].total - a[1].total)
    .forEach(([name, info]) => {
      const files = Object.entries(info.files)
        .map(([file, n]) => `${file} ${n}`)
        .join(", ");
      lines.push(`  ${name}  ${info.total}  (${files})`);
    });
  lines.push("");
  lines.push("Findings");
  if (!findings.length) lines.push("  None.");
  findings.forEach((item) => {
    const label = item.id || item.name || "";
    const where = item.file ? `  ${item.file}` : "";
    const extra = item.count ? `  ×${item.count}` : "";
    const ok = item.ok === true ? "  ok" : item.ok === false ? "  miss" : "";
    lines.push(`  ${item.kind}${ok}  ${label}${where}${extra}`);
    if (item.note) lines.push(`    ${item.note}`);
  });
  lines.push("");
  lines.push("Waiting");
  report.waiting.forEach((line) => lines.push(`  ${line}`));
  process.stdout.write(`${lines.join("\n")}\n`);
}

try {
  main();
} catch (err) {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
}
