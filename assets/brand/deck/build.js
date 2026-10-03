// Prints the deck pages to PDF with Edge.
// Serve the repo root first (any static server), then:
//   node assets/brand/deck/build.js [http://127.0.0.1:5190]
// Needs playwright-core on the module path (npm i -g playwright-core, or NODE_PATH).
const path = require("path");
const { chromium } = require("playwright-core");

const ROOT = path.resolve(__dirname, "..", "..", "..");
const BASE = (process.argv[2] || "http://127.0.0.1:5190").replace(/\/$/, "");
const JOBS = [
  { page: "usability-report.html", out: "docs/research/reports/usability-report-example.pdf" },
  { page: "presentation-templates.html", out: "docs/research/plans/presentation-templates.pdf" },
];

(async () => {
  const browser = await chromium.launch({ channel: "msedge" });
  for (const job of JOBS) {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    await page.goto(`${BASE}/assets/brand/deck/${job.page}`, { waitUntil: "networkidle" });
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
    await page.evaluate(() => document.documentElement.style.setProperty("--z", 1));
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: path.join(ROOT, job.out),
      width: "1920px",
      height: "1080px",
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log("wrote", job.out);
    await page.close();
  }
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
