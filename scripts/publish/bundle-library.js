// Build the single-file library page from the repo's library-site, so every script and style is current.
// Usage: node bundle-library.js <repo folder> <output file>. Needs sharp in %LOCALAPPDATA%\astral-publish-tools.
const fs = require("fs");
const os = require("os");
const crypto = require("crypto");
const path = require("path");
const [root, out] = process.argv.slice(2);
const libDir = path.join(root, "library-site");
const mime = { ".otf": "font/otf", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png" };
const lf = (t) => t.replace(/\r\n/g, "\n");
const inlineUrls = (css, base) =>
  css.replace(/url\((["']?)([^"')]+)\1\)/g, (m, q, u) => {
    if (/^(data:|https?:|#)/.test(u)) return m;
    const p = path.join(base, u);
    if (!fs.existsSync(p)) throw new Error("missing asset " + u);
    return `url("data:${mime[path.extname(u)]};base64,${fs.readFileSync(p).toString("base64")}")`;
  });
let html = lf(fs.readFileSync(path.join(libDir, "index.html"), "utf8"));
const rep = (a, b) => {
  if (!html.includes(a)) throw new Error("not found: " + a);
  html = html.replace(a, () => b);
};
const styles = inlineUrls(lf(fs.readFileSync(path.join(root, "styles.css"), "utf8")), root);
const libCss = inlineUrls(lf(fs.readFileSync(path.join(libDir, "library.css"), "utf8")), libDir);
rep('<link rel="stylesheet" href="../styles.css" />', "");
rep('<link rel="stylesheet" href="library.css" />', `<style>\n${styles}\n${libCss}\n</style>`);
const scripts = {
  "../astral-ui.js": path.join(root, "astral-ui.js"),
  "astral-lib.js": path.join(libDir, "astral-lib.js"),
  "library-pack.js": path.join(libDir, "library-pack.js"),
  "library.js": path.join(libDir, "library.js"),
};
for (const [src, file] of Object.entries(scripts)) {
  const js = lf(fs.readFileSync(file, "utf8"));
  if (js.includes("</script")) throw new Error(src + " contains </script");
  rep(`<script src="${src}"></script>`, `<script>\n${js}\n</script>`);
}
if (/<(script|link)[^>]+(src|href)="(?!https?:|data:|#)/.test(html)) throw new Error("a local file is still linked");

// The live site only has this one page, so features.json and its screenshots go inside it.
// Screenshots are made smaller first so the encrypted page stays a sensible size. A cache keeps repeat deploys quick.
const TOOLS = path.join(process.env.LOCALAPPDATA || os.tmpdir(), "astral-publish-tools");
const sharp = require(path.join(TOOLS, "node_modules", "sharp"));
const CACHE = path.join(TOOLS, "cache");
const WIDTH = 900;
const QUALITY = 45;

(async () => {
  fs.mkdirSync(CACHE, { recursive: true });
  const features = JSON.parse(fs.readFileSync(path.join(libDir, "features.json"), "utf8"));
  const paths = new Set();
  const collect = (node) => {
    if (Array.isArray(node)) node.forEach(collect);
    else if (node && typeof node === "object")
      for (const [key, value] of Object.entries(node)) {
        if (key === "image" && typeof value === "string" && value) paths.add(value);
        else collect(value);
      }
  };
  collect(features.items || []);
  const media = {};
  let bytes = 0;
  for (const rel of paths) {
    const file = path.join(libDir, rel);
    if (!fs.existsSync(file)) throw new Error("missing screenshot " + rel);
    const src = fs.readFileSync(file);
    const key = crypto.createHash("sha1").update(src).update(`${WIDTH}:${QUALITY}`).digest("hex");
    const cached = path.join(CACHE, key + ".webp");
    let buf;
    if (fs.existsSync(cached)) buf = fs.readFileSync(cached);
    else {
      buf = await sharp(src).resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: QUALITY, effort: 5 }).toBuffer();
      fs.writeFileSync(cached, buf);
    }
    bytes += buf.length;
    media[rel] = `data:image/webp;base64,${buf.toString("base64")}`;
  }
  features.media = media;
  features.bundled = true;
  const json = JSON.stringify(features).replace(/</g, "\\u003c");
  rep(`<script>\n${lf(fs.readFileSync(scripts["library.js"], "utf8"))}`, `<script>\nwindow.ASTRAL_LIB.features = ${json};\n</script>\n<script>\n${lf(fs.readFileSync(scripts["library.js"], "utf8"))}`);
  fs.writeFileSync(out, html);
  console.log("lib written", html.length, "stories", features.items.reduce((n, f) => n + (f.stories || []).length, 0), "screenshots", paths.size, (bytes / 1e6).toFixed(1) + " MB");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
