// Prints the customer discovery documents (proposal, interview and survey plans) to A4 PDF with Edge.
// Serve the repo root first (any static server), then:
//   node assets/brand/plan/build.js [http://127.0.0.1:5190]
// Needs playwright-core on the module path (npm i -g playwright-core, or NODE_PATH).
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

const ROOT = path.resolve(__dirname, "..", "..", "..");
const BASE = (process.argv[2] || "http://127.0.0.1:5190").replace(/\/$/, "");
const OUT = "docs/research/plans/customer-discovery";

global.window = {};
require("./customer-discovery.js");
const JOBS = window.PLAN.documents.map((d) => ({ id: d.id, out: `${OUT}/${d.file}` }));

(async () => {
  fs.mkdirSync(path.join(ROOT, OUT), { recursive: true });
  const browser = await chromium.launch({ channel: "msedge" });
  for (const job of JOBS) {
    const page = await browser.newPage();
    await page.goto(`${BASE}/assets/brand/plan/document.html?d=${job.id}`, { waitUntil: "networkidle" });
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
    const count = await page.evaluate(() => document.querySelectorAll(".page").length);
    await page.pdf({ path: path.join(ROOT, job.out), printBackground: true, preferCSSPageSize: true });
    console.log("wrote", job.out, count, "pages");
    await page.close();
  }
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
