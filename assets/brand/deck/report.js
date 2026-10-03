/* Usability testing report: template example.
   Built on the IMSERV layouts (layouts.js) plus the severity and screenshot helpers (deck.js).
   To reuse: copy this file, change STUDY, TASKS, FINDINGS, SLIDES_OF_FINDINGS, TOP5, NEXT and TEAM. */
(function () {
  const { L, slide } = window.DeckLayouts;
  const { shot, badge } = window.Deck;

  const STUDY = {
    title: "Adding a Scheduled<br>Report in Astral",
    kicker: "Usability testing report<br>September 2026"
  };

  const SEV = {
    positive: { name: "Positive", def: "Something that works well. People got through it with ease or told us they liked it.", act: "Keep and protect it" },
    low: { name: "Low", def: "A small inconvenience. It may add a little time to the task.", act: "Fix when we are working nearby" },
    medium: { name: "Medium", def: "The person stops and is challenged, but can get round the issue with some friction.", act: "Plan into an upcoming sprint" },
    high: { name: "High", def: "The person cannot continue with their task, or needs help in order to continue.", act: "Fix before release" },
    critical: { name: "Critical", def: "More than the person's task is affected. It could hurt the company's finances, or put the person or their client at risk of something going very wrong.", act: "Stop and fix now" }
  };
  const ORDER = ["critical", "high", "medium", "low", "positive"];

  const TASKS = [
    ["<b>T1</b>&ensp;Find a report and check when it next sends", "6 of 6", "0:42", "4.5"],
    ["<b>T2</b>&ensp;Add a weekly interval data report for two sites", "4 of 6<br><span class='muted'>2 needed help</span>", "4:50", "2.8"],
    ["<b>T3</b>&ensp;Change the report to monthly", "6 of 6", "1:05", "4.2"],
    ["<b>T4</b>&ensp;Add a recipient and send yourself a test", "6 of 6", "1:40", "3.9"],
    ["<b>T5</b>&ensp;Find a file you downloaded last week", "5 of 6", "1:20", "3.6"]
  ];

  /* Each finding: sev, title, where, impact, why, fix, plus a highlight box in screenshot pixels (1600 x 1000). */
  const F = {
    1: { sev: "positive", title: "Report types make sense in plain words", where: "Add a report, the report type picker.", impact: "All six picked the right type first time, in under 20 seconds.", why: "It shows short, plain descriptions work. Other pickers in Astral can follow it.", fix: "Keep the one-line descriptions and use the same pattern for new types.", hl: { x: 536, y: 338, w: 520, h: 268 } },
    2: { sev: "low", title: "Coming soon competes with real choices", where: "Bottom of the report type picker.", impact: "Two people opened Coming soon looking for a missing data report, then came back.", why: "It adds a detour to the first step and offers things people cannot use yet.", fix: "Move coming soon types out of the picker, or grey them out under a clear heading.", hl: { x: 534, y: 626, w: 524, h: 46 } },
    3: { sev: "high", title: "Add report is blocked and the reason is hidden", where: "Footer of Add a report. The hint sits next to Cancel.", impact: "Four of six pressed Add report again and again. Two asked us what was wrong.", why: "People cannot finish the main task without help, so they give up or raise a query.", fix: "Show what is missing next to its field, and take people there when they press Add report.", hl: { x: 40, y: 842, w: 452, h: 48 } },
    4: { sev: "medium", title: "Required settings sit behind six tabs", where: "Settings tabs, from Details to File name.", impact: "Five people opened every tab to check they had not missed anything.", why: "It adds time and doubt to every new report, and Sites is easy to skip.", fix: "Mark the tabs that need input, and show a tick when each one is done.", hl: { x: 40, y: 265, w: 722, h: 42 } },
    5: { sev: "positive", title: "The summary sentence builds confidence", where: "Grey summary under the settings.", impact: "Five people read it aloud to check their set-up before saving.", why: "It is the one place that says what will happen, in their words.", fix: "Keep it, and add the sites and date range so it covers the whole report.", hl: { x: 40, y: 634, w: 713, h: 50 } },
    6: { sev: "critical", title: "New recipients can edit by default", where: "Recipients, Role column. Everyone added gets Can edit.", impact: "Four of six added an outside contact and left Can edit on. None of them noticed.", why: "Outside contacts could change sites and recipients and see other clients' data. That is a data protection and contract risk for us and the client.", fix: "Default new people to Gets a copy. Ask people to confirm before giving edit rights to anyone outside their company.", hl: { x: 1298, y: 406, w: 170, h: 46 } },
    7: { sev: "positive", title: "Send me a test is trusted", where: "Under the recipient list.", impact: "Five people used it before saving. Three said it would stop them sending the wrong file.", why: "People can check their work safely, which cuts support queries.", fix: "Keep it, and show when the test was sent and to which inbox.", hl: { x: 812, y: 552, w: 510, h: 44 } },
    8: { sev: "medium", title: "Send time is in UTC, not UK time", where: "Schedule, Send at and Time zone.", impact: "Three people set 09:00 and expected 9am UK time. In summer it lands at 10am.", why: "Reports arrive an hour late for half the year, after the meetings they are for.", fix: "Default to UK time and show the local send time in the summary.", hl: { x: 38, y: 608, w: 718, h: 44 } },
    9: { sev: "low", title: "Only one send day per report", where: "Schedule, the hint under How often.", impact: "Two people wanted Monday and Thursday sends and had to make two reports.", why: "Copies drift apart over time and double the work to keep them right.", fix: "Let people pick more than one day for weekly reports.", hl: { x: 36, y: 542, w: 402, h: 26 } },
    10: { sev: "medium", title: "Last week does not say which week", where: "Date range, the Range drop-down.", impact: "Four people were unsure if Last week meant Monday to Sunday or the last 7 days. The exact dates sit in the hint, but only one person read it.", why: "People may share the wrong days and make decisions on part of the data.", fix: "Show the dates in the choice itself, for example Last week, 31 Aug to 6 Sep.", hl: { x: 38, y: 496, w: 626, h: 72 } },
    11: { sev: "medium", title: "The toggle does not say what it does", where: "Report cards, the switch next to settings.", impact: "Three people thought it deleted the report. Two thought it sent it now.", why: "People avoid it, or pause reports others rely on by mistake.", fix: "Label it Sending or Paused, and confirm before pausing a shared report.", hl: { x: 330, y: 600, w: 58, h: 38, at: "right" } },
    12: { sev: "low", title: "Next send date has no label", where: "Report cards, the date next to the frequency.", impact: "Two people read Fri 11 Sep as the date the report was made.", why: "A small slow-down when checking when data will arrive.", fix: "Add a short label: Next send Fri 11 Sep.", hl: { x: 130, y: 605, w: 80, h: 30, at: "below" } }
  };

  const FINDING_SLIDES = [
    { title: "Choosing a Report Type", screen: "add-report-type", crop: { x: 500, y: 214, w: 600, h: 576 }, cap: "Add a report, step 1: pick a report type", ids: [1, 2] },
    { title: "Settings and Saving", screen: "add-report-details", crop: { x: 20, y: 212, w: 780, h: 700 }, cap: "Add a report: Details tab and footer", ids: [3, 4, 5] },
    { title: "Who Gets the Report", screen: "add-report-details", crop: { x: 800, y: 212, w: 772, h: 420 }, cap: "Add a report: Recipients", ids: [6, 7] },
    { title: "When It Sends", screen: "add-report-schedule", crop: { x: 20, y: 212, w: 780, h: 548 }, cap: "Add a report: Schedule tab", ids: [8, 9] },
    { title: "Which Dates It Covers", screen: "add-report-date-range", crop: { x: 20, y: 212, w: 780, h: 450 }, cap: "Add a report: Date range tab", ids: [10] },
    { title: "Managing Reports", screen: "reports", crop: { x: 36, y: 420, w: 750, h: 486 }, cap: "Reports and compliance: report cards", ids: [11, 12] }
  ];

  const TOP5 = [
    [6, "Default new recipients to Gets a copy"],
    [3, "Show what is blocking Add report next to the field"],
    [10, "Put the exact dates in each date range choice"],
    [8, "Default the send time to UK time"],
    [11, "Label the toggle Sending or Paused"]
  ];

  const TEAM = [
    { name: "Shaun Leishman", role: "Lead researcher and facilitator", initials: "SL", cyan: true },
    { name: "[Name]", role: "Note-taker", initials: "–" },
    { name: "[Name]", role: "Product designer", initials: "–" },
    { name: "[Name]", role: "Product owner", initials: "–" }
  ];

  /* ---------- report-only slides ---------- */
  const pad = n => String(n).padStart(2, "0");

  function findingCard(n, solo, tri) {
    const f = F[n], s = SEV[f.sev];
    return `<div class="card finding ${solo ? "solo" : ""}${tri ? " tri" : ""}" style="flex:1;padding:${solo ? "40px 44px" : tri ? "20px 28px" : "26px 30px"}">
      <div class="fhead">${badge(f.sev, n, "lg")}<div>
        <div class="sevtag" style="color:var(--sev-${f.sev === "critical" ? "high" : f.sev})">${s.name}<span class="muted" style="font-weight:400">&ensp;F${pad(n)}</span></div>
        <div class="ftitle">${f.title}</div></div></div>
      <div class="fgrid">
        <div><span class="label">Where we found it</span>${f.where}</div>
        <div><span class="label">How it affected people</span>${f.impact}</div>
        <div><span class="label">Why it is important to fix</span>${f.why}</div>
        <div class="fix"><span class="label">Our recommendation</span>${f.fix}</div>
      </div></div>`;
  }

  function findingSlide(d, page) {
    const c = d.crop, maxW = 900, maxH = 820;
    const scale = Math.min(maxW / c.w, maxH / c.h);
    const fit = scale === maxW / c.w ? "width" : "height";
    const box = { left: 40, top: 176, width: maxW, height: maxH };
    const img = shot({ src: `screens/${d.screen}.png`, crop: c, box, fit, highlights: d.ids.map(n => ({ n, sev: F[n].sev, ...F[n].hl })) });
    const h = Math.round(c.h * scale);
    const range = d.ids.length > 1 ? `Findings ${pad(d.ids[0])} to ${pad(d.ids[d.ids.length - 1])}` : `Finding ${pad(d.ids[0])}`;
    return slide("paper", `<div class="t-page" style="width:900px">${d.title}</div>
      <div class="label" style="left:40px;top:128px">${range}</div>
      ${img}<div class="shotcap" style="left:40px;top:${176 + h + 14}px">${d.cap}</div>
      <div style="left:980px;top:176px;width:900px;height:${d.ids.length === 1 ? 600 : 830}px;display:flex;flex-direction:column;gap:16px">${d.ids.map(n => findingCard(n, d.ids.length === 1, d.ids.length === 3)).join("")}</div>`, { page, layout: "finding" });
  }

  function severitySlide(page) {
    const order = ["positive", "low", "medium", "high", "critical"];
    const cards = order.map((k, i) => `<div class="card lined" style="left:${40 + i * 372}px;top:236px;width:352px;height:804px;padding:36px 30px">
      ${badge(k, "", "xl")}
      <div style="margin-top:36px;font-size:48px;line-height:52px;font-weight:500;color:${k === "positive" ? "var(--sev-positive)" : `var(--sev-${k === "critical" ? "high" : k})`}">${SEV[k].name}</div>
      <div style="margin-top:22px;font-size:24px;line-height:33px">${SEV[k].def}</div>
      <div style="position:absolute;left:30px;right:30px;bottom:30px;border-top:2px solid var(--rule);padding-top:18px">
        <div class="label" style="margin-bottom:6px">What we do</div><div style="font-size:24px;line-height:30px;font-weight:500">${SEV[k].act}</div></div></div>`).join("");
    return slide("paper", `<div class="t-page">How We Grade Each Finding</div>
      <div class="t-sub" style="left:40px;top:128px;width:1500px;font-weight:400;font-size:28px">From least to most serious. Each grade has its own shape and colour, so it still reads in black and white.</div>${cards}`, { page, layout: "severity-scale" });
  }

  function glanceSlide(page) {
    const counts = {};
    Object.values(F).forEach(f => counts[f.sev] = (counts[f.sev] || 0) + 1);
    const max = Math.max(...Object.values(counts));
    const rows = ORDER.map((k, i) => `<div style="left:40px;top:${236 + i * 150}px;width:880px;height:120px;display:flex;align-items:center;gap:28px;border-bottom:2px solid var(--rule)">
      ${badge(k, "", "lg")}<div style="width:190px;font-size:34px;font-weight:500">${SEV[k].name}</div>
      <div style="flex:1;height:22px;background:var(--grey-a);position:relative"><div style="position:absolute;inset:0 auto 0 0;width:${(counts[k] || 0) / max * 100}%;background:var(--sev-${k === "critical" ? "high" : k})"></div></div>
      <div style="width:90px;text-align:right;font-size:72px;line-height:1;font-weight:500">${counts[k] || 0}</div></div>`).join("");
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const top = TOP5.map(([n, fix], i) => `<div style="display:grid;grid-template-columns:70px 1fr;gap:20px;padding:24px 0;border-bottom:2px solid rgba(255,255,255,.18)">
      <div style="font-size:64px;line-height:58px;font-weight:500;color:var(--cyan)">${i + 1}</div>
      <div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">${badge(F[n].sev, n, "sm")}<span style="font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:#a3a3a3">${SEV[F[n].sev].name} · F${pad(n)}</span></div>
      <div style="font-size:27px;line-height:33px;font-weight:500">${F[n].title}</div><div style="margin-top:6px;font-size:19px;line-height:26px;color:#c8c8c8">${fix}</div></div></div>`).join("");
    return slide("paper", `<div class="t-page" style="width:900px">At a Glance</div>
      <div class="t-sub" style="left:40px;top:128px;width:880px;font-weight:400;font-size:28px">${total} findings from 6 sessions</div>${rows}
      <div class="card" style="left:980px;top:40px;width:900px;height:1000px;padding:40px 44px;background:#0e0e0e;color:#fff">
        <div style="font-size:48px;line-height:52px;font-weight:500;margin-bottom:12px">Top 5 to Fix First</div>
        <div style="font-size:20px;line-height:28px;color:#a3a3a3;margin-bottom:6px">Ordered by severity, then by how many people it affected.</div>${top}</div>`, { page, layout: "at-a-glance" });
  }

  /* ---------- assemble ---------- */
  const out = [];
  let p = 0;
  const P = () => ++p;

  out.push(L.title({ skin: "photo", img: "title-mountain", title: STUDY.title, kicker: STUDY.kicker, page: P() }));
  out.push(L.contents({ title: "Contents", page: P(), fs: 54, lh: 62, sections: [
    ["Why we did this research", "04"], ["How we ran it", "05-07"], ["Summary of findings", "09"], ["How we grade findings", "10"],
    ["Findings in detail", "11-16"], ["At a glance and top 5", "17"], ["Next steps", "19"]] }));
  out.push(L.divider({ skin: "photo", img: "divider-hill-road", title: "01&ensp;Why and How", page: P() }));
  out.push(L.threeColumns({ title: "Why We Did This Research", page: P(), cards: [
    { heading: "The problem", fs: 28, lh: 38, bullets: ["Setting up a scheduled report is one of the most common Reports queries.", "Account managers hear that it “takes a few goes” to get right.", "Add a report is about to open to every customer user."] },
    { heading: "What we wanted to learn", fs: 28, lh: 38, bullets: ["Can people add a scheduled report without help?", "Do they know when it sends and which dates it covers?", "Do they know who can see and change it?"] },
    { heading: "What it will inform", fs: 28, lh: 38, bullets: ["Fixes before Add a report goes to all customers.", "Default settings for recipients and schedules.", "Our next research activity on schedules."] }] }));
  out.push(L.statSplit({ title: "How We Ran It", sub: "Moderated remote usability test", page: P(), listTitle: "The set-up:", rows: [
    ["Format", "One to one on Teams, thinking aloud"], ["Sessions", "45 minutes each"], ["Dates", "1 to 4 September 2026"], ["Prototype", "Astral, Reports area"], ["Measures", "Completion, time on task, ease 1 to 5"]],
    statLabel: "People took part, across<br>customer, broker and admin roles:", stat: "6" }));
  out.push(L.peopleWave({ title: "Who We<br>Spoke To", page: P(), people: [
    ["P01", "Energy manager", "Customer, retail, 40 sites"], ["P02", "Finance analyst", "Customer, logistics, 12 sites"], ["P03", "Account lead", "Broker, 30 clients"],
    ["P04", "Facilities manager", "Customer, public sector, new to Astral"], ["P05", "Customer success", "IMSERV admin"], ["P06", "Sustainability lead", "Customer, manufacturing, 8 sites"]]
    .map(([id, name, role]) => ({ initials: id, name, role })) }));
  out.push(L.ruledTable({ title: "Tasks and How<br>People Got On", page: P(), top: 270, fs: 26, lh: 34, pad: 30,
    head: ["Task", "Completed", "Median time", "Ease, 1 to 5"], widths: ["52%", "18%", "15%", "auto"], rows: TASKS }));
  out.push(L.divider({ skin: "cyan", title: "02&ensp;What We Found", page: P() }));
  out.push(L.statementCards({ title: "Summary of Findings", page: P(), cards: [
    { photo: "engineer-silhouette", fs: 52, lh: 56, heading: "Plain words and the summary sentence work well.", bfs: 26, blh: 34, body: "All six understood the report types straight away. Five used the summary sentence to check their set-up before saving." },
    { cyan: true, fs: 52, lh: 56, heading: "One default could share data with the wrong people.", bfs: 26, blh: 34, body: "New recipients get Can edit. Four of six did not notice, so outside contacts could change what gets sent." },
    { fs: 52, lh: 56, heading: "Hidden reasons slow everyone down.", bfs: 26, blh: 34, body: "Add report was blocked with the reason in the footer, and settings sat behind six tabs. Median time for T2 was 4 min 50 s against a 2 minute target." }] }));
  out.push(severitySlide(P()));
  FINDING_SLIDES.forEach(d => out.push(findingSlide(d, P())));
  out.push(glanceSlide(P()));
  out.push(L.divider({ skin: "photo", img: "divider-turbine-cloud", title: "03&ensp;What Happens Next", page: P() }));
  out.push(L.numberedRows({ title: "Next Steps", tone: "white", img: "solar-panels", page: P(), rows: [
    { head: "1. Fix the edit default", hfs: 56, sub: "Surfaced: defaults carry real risk", sfs: 26, bfs: 21, blh: 29, body: "This sprint. New recipients get Gets a copy, with a check for outside emails. Re-test with three people before release." },
    { head: "2. Make blockers visible", hfs: 56, sub: "Surfaced: people cannot see what is missing", sfs: 26, bfs: 21, blh: 29, body: "Next sprint. Show what is missing next to each field, tick finished tabs and default to UK time. Aim for T2 in under 2 minutes." },
    { head: "3. Learn how people schedule", hfs: 56, sub: "Surfaced: real schedules are more varied than we built for", sfs: 26, bfs: 21, blh: 29, body: "Next research activity. A short survey of 30 report owners on the days, times and date ranges they need, then a quick follow-up test." }] }));
  out.push(L.titlePhoto({ title: "Thank You", photo: "van-sunset", page: P(), bodyTop: 170, bodyW: 820,
    body: "Thanks to the six customers, brokers and colleagues who gave us their time. Here is who worked on this study.", peopleTop: 340, people: TEAM }));

  document.querySelector(".deck").innerHTML = out.join("");
  const ready = () => { window.__ready = true; };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).then(ready);
})();
