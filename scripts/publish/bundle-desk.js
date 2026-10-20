// Build the single-file Work Desk and prototype page, with every script, style and data file inside it.
// Usage: node bundle-desk.js <repo folder> <output file>
const fs = require("fs");
const path = require("path");
const [root, out] = process.argv.slice(2);
const rd = (f) => fs.readFileSync(path.join(root, f), "utf8");
const mime = { ".otf": "font/otf", ".svg": "image/svg+xml", ".png": "image/png" };

const css = rd("styles.css").replace(/url\((["']?)([^"')]+)\1\)/g, (m, q, u) => {
  if (/^(data:|https?:|#)/.test(u)) return m;
  const p = path.join(root, u);
  if (!fs.existsSync(p)) {
    console.error("missing", u);
    return m;
  }
  return `url("data:${mime[path.extname(u)]};base64,${fs.readFileSync(p).toString("base64")}")`;
});
const inline = (s) =>
  s.replace(/"(assets\/[\w\-./]+\.(?:svg|png|otf))"/g, (m, u) => {
    const p = path.join(root, u);
    return fs.existsSync(p) ? `"data:${mime[path.extname(u)]};base64,${fs.readFileSync(p).toString("base64")}"` : m;
  });

const rj = (f) => JSON.parse(rd(f));
const board = rj("data/board.json");
const reports = {};
const files = {};
const refs = new Set();
JSON.stringify(board, (k, v) => {
  if (typeof v === "string" && /^\/?docs\/research\/.+\.(md|pdf)$/i.test(v)) refs.add(v);
  return v;
});
for (const ref of refs) {
  const p = path.join(root, ref.replace(/^\//, ""));
  if (!fs.existsSync(p)) {
    console.error("missing", ref);
    continue;
  }
  if (/\.md$/i.test(ref)) reports[ref] = fs.readFileSync(p, "utf8");
  else {
    const b = fs.readFileSync(p);
    if (b.length > 5e6) {
      console.error("skipped large file", ref, b.length);
      continue;
    }
    files[ref] = b.toString("base64");
  }
}
const boot = {
  board,
  systems: rj("data/design-systems.json"),
  roadmap: rj("data/roadmap.json"),
  skills: rj("data/skills.json"),
  resources: rj("data/resources.json"),
  experience: rj("docs/research/experience/keis.json"),
  reports,
  files,
};
console.log("boot", Object.keys(boot).map((k) => k + "=" + JSON.stringify(boot[k]).length).join(" "));

let html = rd("index.html");
const rep = (a, b) => {
  if (!html.includes(a)) throw new Error("not found: " + a);
  html = html.replace(a, () => b);
};
rep('<link rel="stylesheet" href="styles.css" />', "<style>\n" + css + "\n</style>");
rep(
  "<script>window.WORK_DESK_SHARE=true;</script>",
  "<script>window.WORK_DESK_SHARE=true;window.WORK_DESK_BOOT=" + JSON.stringify(boot).replace(/</g, "\\u003c") + ";</script>"
);
for (const f of ["astral-ui.js", "prototype.js", "app.js"]) rep(`<script src="${f}"></script>`, "<script>\n" + inline(rd(f)) + "\n</script>");
fs.writeFileSync(out, html);
console.log("wrote", out, html.length);
