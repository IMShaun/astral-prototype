// Top Tasks simulation for the IMSERV admin portal.
// 60 days x 100 respondents a day. Each respondent picks the 1-3 tasks they came to do.
let seed = 20260928;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const pick = (w) => { let t = rnd() * w.reduce((a, [, v]) => a + v, 0); for (const [k, v] of w) if ((t -= v) <= 0) return k; return w[w.length - 1][0]; };

const T = {
  notSending: "Check meters not sending or with missing data",
  meterData: "Look into one meter's readings",
  fault: "Raise or update a meter fault",
  late: "Chase faults past their due date",
  risk: "Review meters at risk of stopping",
  estimated: "Check estimated against actual reads",
  reply: "Reply to a customer ticket",
  triage: "Sort and assign new tickets",
  loginAs: "Log in as a customer to see what they see",
  accessFix: "Fix a sign-in or access problem",
  invite: "Invite a new person",
  role: "Change someone's role",
  grant: "Give someone access to another company or sites",
  renew: "Renew access or upload a letter of authority",
  offboard: "Turn off access for a leaver",
  quiet: "Review people with no sign-in for 90 days",
  notJoined: "Chase people who haven't joined",
  onboard: "Set up a new company",
  company: "Update company or billing details",
  site: "Update site settings (hours, peak times, prices)",
  meters: "Add or move meters between sites",
  templates: "Build or change report templates",
  report: "Run or download a report for a customer",
  usage: "Check how customers use the platform",
  export: "Export usage data for an account review",
  growth: "Check new and registered user trends",
  alerts: "Set up or review alerts",
  downloads: "Get files from Downloads",
  overview: "Get a quick view of platform health",
  lookup: "Look up a company to answer a question",
};

// Base weights per archetype (relative likelihood a visit is for that task).
const A = {
  "Service desk": { share: 30, desc: "Answers tickets and calls. Lives in Inbox, often logs in as customers.",
    w: { reply: 30, triage: 18, loginAs: 16, accessFix: 14, lookup: 12, meterData: 6, notSending: 4, fault: 3, overview: 3, notJoined: 2, downloads: 2, report: 1 } },
  "Data and metering": { share: 25, desc: "Keeps meter data flowing. Works the not-sending and faults lists.",
    w: { notSending: 30, fault: 20, meterData: 16, risk: 12, late: 7, estimated: 7, meters: 4, loginAs: 2, overview: 2, alerts: 2 } },
  "Account manager": { share: 20, desc: "Owns customer relationships. Prepares reviews and chases adoption.",
    w: { usage: 16, loginAs: 14, report: 13, export: 11, lookup: 9, quiet: 7, notJoined: 6, growth: 5, overview: 5, reply: 4, alerts: 3, downloads: 3, company: 2, templates: 2 } },
  "Onboarding and access": { share: 15, desc: "Sets up companies, sites and people. Handles letters of authority.",
    w: { invite: 20, grant: 12, onboard: 10, renew: 10, site: 10, role: 8, offboard: 7, company: 6, meters: 6, notJoined: 5, accessFix: 4, lookup: 2 } },
  "Team lead": { share: 10, desc: "Runs the operation. Checks health, backlogs and trends, not single records.",
    w: { overview: 26, late: 14, triage: 10, usage: 9, growth: 8, notSending: 8, report: 6, templates: 5, quiet: 4, export: 3, risk: 3, alerts: 2, reply: 1, fault: 1 } },
};

const start = new Date(Date.UTC(2026, 6, 30)); // 30 Jul 2026 .. 27 Sep 2026
const DAYS = 60, PER_DAY = 100;
const count = {}, primary = {}, people = {}, total = {};
for (const a in A) { count[a] = {}; primary[a] = {}; people[a] = 0; }

for (let d = 0; d < DAYS; d++) {
  const date = new Date(start.getTime() + d * 864e5);
  const dow = date.getUTCDay(), dom = date.getUTCDate();
  const monday = dow === 1, weekend = dow === 0 || dow === 6;
  const monthStart = dom <= 4, monthEnd = dom >= 26;
  const outage = d >= 18 && d <= 20;            // comms outage, 17-19 Aug
  const onboardWave = d >= 33 && d <= 40;       // new customer rollout, 1-8 Sep
  const quarterEnd = d >= 52;                   // letters of authority due before 30 Sep

  // Who shows up shifts a little by day.
  const mix = Object.entries(A).map(([k, v]) => {
    let s = v.share;
    if (weekend && k !== "Service desk" && k !== "Data and metering") s *= 0.35;
    if (outage && (k === "Service desk" || k === "Data and metering")) s *= 1.5;
    if (onboardWave && k === "Onboarding and access") s *= 1.8;
    if (monthStart && (k === "Account manager" || k === "Team lead")) s *= 1.4;
    return [k, s];
  });

  for (let p = 0; p < PER_DAY; p++) {
    const a = pick(mix); people[a]++;
    const w = Object.entries(A[a].w).map(([t, v]) => {
      let x = v;
      if (monday && (t === "reply" || t === "triage")) x *= 1.5;
      if (outage && ["notSending", "reply", "triage", "risk", "fault"].includes(t)) x *= 2.2;
      if (monthStart && ["report", "export", "usage", "downloads", "growth"].includes(t)) x *= 1.8;
      if (monthEnd && ["export", "report"].includes(t)) x *= 1.3;
      if (onboardWave && ["onboard", "invite", "site", "meters", "notJoined"].includes(t)) x *= 2;
      if (quarterEnd && t === "renew") x *= 2.5;
      if (weekend && ["templates", "growth", "company"].includes(t)) x *= 0.3;
      return [t, x];
    });
    const n = pick([[1, 45], [2, 35], [3, 20]]);
    const chosen = [];
    while (chosen.length < n) { const t = pick(w.filter(([k]) => !chosen.includes(k))); chosen.push(t); }
    chosen.forEach((t, i) => {
      count[a][t] = (count[a][t] || 0) + 1;
      total[t] = (total[t] || 0) + 1;
      if (i === 0) primary[a][t] = (primary[a][t] || 0) + 1;
    });
  }
}

const N = DAYS * PER_DAY;
const pct = (x, of) => `${((100 * x) / of).toFixed(0)}%`;
const out = [];
out.push(`RESPONDENTS ${N}`);
out.push("ARCHETYPES");
for (const a in A) out.push([a, people[a], pct(people[a], N), A[a].desc].join(" | "));
out.push("TOP5");
for (const a in A) {
  const top = Object.entries(count[a]).sort((x, y) => y[1] - x[1]).slice(0, 5);
  top.forEach(([t, c], i) => out.push([a, i + 1, T[t], c, pct(c, people[a]), primary[a][t] || 0].join(" | ")));
}
out.push("OVERALL");
Object.entries(total).sort((x, y) => y[1] - x[1]).forEach(([t, c], i) => out.push([i + 1, T[t], c, pct(c, N)].join(" | ")));
const miss = Object.keys(T).filter((t) => !total[t]);
out.push("UNPICKED " + miss.map((t) => T[t]).join("; "));
console.log(out.join("\n"));
