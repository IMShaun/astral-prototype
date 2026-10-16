const DAY_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const TEAMS = [
  { id: "imserv", name: "IMSERV" },
  { id: "off-axis", name: "Off Axis" },
  { id: "stagerise", name: "Stagerise" },
];

const SECTIONS = [
  "today",
  "groups",
  "research",
  "resources",
  "roadmap",
  "access",
  "library",
  "language",
  "patterns",
  "skills",
  "prototype",
  "branding",
  "workflow",
];

const TEAM_HIDDEN_SECTIONS = ["workflow", "access"];
const SHARE_SECTIONS = ["prototype"];

const els = {
  save: document.getElementById("save-state"),
  teamSelect: document.getElementById("team-select"),
  sideTeam: document.getElementById("side-team"),
  heroTeam: document.getElementById("hero-team"),
  headline: document.getElementById("headline"),
  situation: document.getElementById("situation"),
  todayCount: document.getElementById("today-count"),
  todaySheetTitle: document.getElementById("today-sheet-title"),
  todayList: document.getElementById("today-list"),
  canList: document.getElementById("can-list"),
  cannotList: document.getElementById("cannot-list"),
  nextList: document.getElementById("next-list"),
  knowList: document.getElementById("know-list"),
  groupsCount: document.getElementById("groups-count"),
  groupsList: document.getElementById("groups-list"),
  groupForm: document.getElementById("group-form"),
  researchCount: document.getElementById("research-count"),
  researchView: document.getElementById("research-view"),
  researchFilters: document.getElementById("research-filters"),
  researchInsights: document.getElementById("research-insights"),
  researchTabs: document.getElementById("research-tabs"),
  researchLead: document.getElementById("research-lead"),
  researchPlanning: document.getElementById("research-planning"),
  researchStrategy: document.getElementById("research-strategy"),
  researchAnalytics: document.getElementById("research-analytics"),
  researchReporting: document.getElementById("research-reporting"),
  researchDocuments: document.getElementById("research-documents"),
  analyticsCount: document.getElementById("analytics-count"),
  analyticsKeis: document.getElementById("analytics-keis"),
  analyticsChart: document.getElementById("analytics-chart"),
  analyticsList: document.getElementById("analytics-list"),
  analyticsHow: document.getElementById("analytics-how"),
  analyticsStructure: document.getElementById("analytics-structure"),
  analyticsCuts: document.getElementById("analytics-cuts"),
  peopleCount: document.getElementById("people-count"),
  peopleList: document.getElementById("people-list"),
  companyAccessCount: document.getElementById("company-access-count"),
  companyAccessList: document.getElementById("company-access-list"),
  teamAccessCount: document.getElementById("team-access-count"),
  teamAccessLead: document.getElementById("team-access-lead"),
  teamAccessList: document.getElementById("team-access-list"),
  accessAdd: document.getElementById("access-add"),
  accessPanel: document.getElementById("panel-access"),
  accessModal: document.getElementById("access-modal"),
  accessModalForm: document.getElementById("access-modal-form"),
  accessKind: document.getElementById("access-kind"),
  accessKindTeam: document.getElementById("access-kind-team"),
  modalPersonFields: document.getElementById("modal-person-fields"),
  modalToolFields: document.getElementById("modal-tool-fields"),
  accessModalCancel: document.getElementById("access-modal-cancel"),
  detailModal: document.getElementById("detail-modal"),
  detailKicker: document.getElementById("detail-kicker"),
  detailTitle: document.getElementById("detail-title"),
  detailBody: document.getElementById("detail-body"),
  detailClose: document.getElementById("detail-close"),
  todayHelp: document.getElementById("today-help"),
  todayTabs: document.getElementById("today-tabs"),
  todayDone: document.getElementById("today-done"),
  form: document.getElementById("add-form"),
  newKind: document.getElementById("new-kind"),
  navTodayCount: document.getElementById("nav-today-count"),
  navGroupsCount: document.getElementById("nav-groups-count"),
  navResearchCount: document.getElementById("nav-research-count"),
  navAccessCount: document.getElementById("nav-access-count"),
  navLibraryCount: document.getElementById("nav-library-count"),
  navLanguageCount: document.getElementById("nav-language-count"),
  navPatternsCount: document.getElementById("nav-patterns-count"),
  navSkillsCount: document.getElementById("nav-skills-count"),
  navPrototypeCount: document.getElementById("nav-prototype-count"),
  prototypeRoot: document.getElementById("prototype-root"),
  astralFs: document.getElementById("astral-fs"),
  navBrandingCount: document.getElementById("nav-branding-count"),
  libraryLead: document.getElementById("library-lead"),
  libraryCopy: document.getElementById("library-copy"),
  libraryTabs: document.getElementById("library-tabs"),
  libraryList: document.getElementById("library-list"),
  languageLead: document.getElementById("language-lead"),
  languageCount: document.getElementById("language-count"),
  languageTabs: document.getElementById("language-tabs"),
  languageList: document.getElementById("language-list"),
  patternsLead: document.getElementById("patterns-lead"),
  patternsCount: document.getElementById("patterns-count"),
  patternsList: document.getElementById("patterns-list"),
  skillsLead: document.getElementById("skills-lead"),
  skillsCount: document.getElementById("skills-count"),
  skillsList: document.getElementById("skills-list"),
  resourcesLead: document.getElementById("resources-lead"),
  resourcesCount: document.getElementById("resources-count"),
  resourcesList: document.getElementById("resources-list"),
  navResourcesCount: document.getElementById("nav-resources-count"),
  roadmapLead: document.getElementById("roadmap-lead"),
  roadmapCount: document.getElementById("roadmap-count"),
  roadmapList: document.getElementById("roadmap-list"),
  navRoadmapCount: document.getElementById("nav-roadmap-count"),
  brandingLead: document.getElementById("branding-lead"),
  brandingCount: document.getElementById("branding-count"),
  brandingTabs: document.getElementById("branding-tabs"),
  brandingPage: document.getElementById("branding-page"),
  brandingSources: document.getElementById("branding-sources"),
};

const STATUS_ORDER = ["draft", "working", "firm"];
const STATUS_LABEL = {
  waiting: "Waiting",
  draft: "Draft",
  working: "In play",
  firm: "Firm",
};

const TASK_KINDS = [
  { id: "admin", name: "Admin" },
  { id: "ui", name: "UI Design" },
  { id: "ux", name: "UX Design" },
  { id: "research", name: "Research" },
];

const KIND_LABEL = Object.fromEntries(TASK_KINDS.map((item) => [item.id, item.name]));

const LIBRARY_TABS = [
  { id: "setup", name: "Setup" },
  { id: "primitives", name: "Primitives" },
  { id: "semantic", name: "Semantic" },
  { id: "styles", name: "Styles" },
  { id: "components", name: "Components" },
];

const COMPONENT_FAMILIES = [
  { id: "core", name: "Core" },
  { id: "forms", name: "Forms" },
  { id: "indicators", name: "Indicators" },
  { id: "navigation", name: "Navigation" },
  { id: "messaging", name: "Messaging" },
];

const LANGUAGE_TABS = [
  { id: "words", name: "Words" },
  { id: "voice", name: "Voice" },
  { id: "labels", name: "Labels" },
  { id: "empty", name: "Empty" },
  { id: "errors", name: "Errors" },
  { id: "help", name: "Help" },
];

const RESEARCH_VIEWS = [
  { id: "cards", name: "Cards" },
  { id: "list", name: "List" },
];

const RESEARCH_SEVERITIES = [
  { id: "all", name: "All" },
  { id: "critical", name: "Critical" },
  { id: "high", name: "High" },
  { id: "medium-high", name: "Medium high" },
  { id: "medium", name: "Medium" },
];

const RESEARCH_SEVERITY_RANK = {
  critical: 0,
  high: 1,
  "medium-high": 2,
  medium: 3,
};

const RESEARCH_TABS = [
  {
    id: "strategy",
    name: "Strategy",
    lead: "Your next move from the research. Each move starts from what a study found, names the activity to run, and says what it should answer. The strongest finding goes first. Pick an activity type to filter, pick it again for everything.",
  },
  {
    id: "planning",
    name: "Projects",
    lead: "Research we are doing, have planned, or have done, and the templates to run the next one. Pick an activity type to filter, pick it again for everything. Open a card for the detail and the insights it named.",
  },
  {
    id: "insights",
    name: "Insights",
    lead: "Findings from walks. Open an insight for the rest. Pick a severity card to filter. Score ranks within a severity from what the walk named.",
  },
  {
    id: "analytics",
    name: "Analytics",
    lead: "How Key Experience Indicators are measured, and whether they improve or get worse over time. A KEI is a score of something specific, important, and actionable. A number waits until a study names it. A trend waits until two comparable rounds sit on the same measure.",
  },
  {
    id: "reporting",
    name: "Reporting",
    lead: "Reports written up from the research. Open one to read it here.",
  },
  {
    id: "documents",
    name: "Documents",
    lead: "Every PDF made for the research, in one place. Plans, scripts, one-pagers, reports, and templates. Project documents also stay on their project. Pick a card to filter, pick it again for everything.",
  },
];

const RESEARCH_STUDY_STATES = [
  { id: "all", name: "All" },
  { id: "doing", name: "Doing" },
  { id: "planned", name: "Planned" },
  { id: "done", name: "Done" },
  { id: "template", name: "Template" },
];

const RESEARCH_STUDY_STATUS = {
  doing: "working",
  planned: "waiting",
  done: "firm",
  template: "scaffold",
};

const RESEARCH_ACTIVITIES = [
  { id: "discovery", name: "Discovery" },
  { id: "usability", name: "Usability" },
  { id: "architecture", name: "Architecture" },
  { id: "workshopping", name: "Workshopping" },
  { id: "template", name: "Templates" },
];

const RESEARCH_STUDY_RANK = { doing: 0, planned: 1, done: 2, template: 3 };

const RESEARCH_REPORT_TEXT = new Map();

// Where an insight came from. Add a source here before you tag an insight with it.
const RESEARCH_SOURCES = {
  team: { name: "Team", long: "The team" },
};

const RESEARCH_SEVERITY_STATUS = {
  critical: "working",
  high: "firm",
  "medium-high": "scaffold",
  medium: "waiting",
};

const TOKEN_STATUS = {
  waiting: "Waiting",
  scaffold: "Scaffold",
  brand: "Brand",
};

const KEI_MATURITY = {
  "no-baseline": { name: "No baseline", status: "waiting" },
  provisional: { name: "Provisional", status: "scaffold" },
  benchmarked: { name: "Benchmarked", status: "working" },
  tracking: { name: "Tracking", status: "firm" },
  stale: { name: "Stale", status: "waiting" },
};

const KEI_DIMENSIONS = [
  {
    id: "effectiveness",
    name: "Effectiveness",
    family: "Facility",
    kind: "Behavioral",
    lead: "Leading",
    body: "Task success. Can they finish the job. A drop here can show later churn.",
  },
  {
    id: "ease",
    name: "Ease",
    family: "Facility",
    kind: "Attitudinal",
    lead: "Leading",
    body: "How easy the work feels. Customer Effort sits here. Low effort tends to hold people.",
  },
  {
    id: "efficiency",
    name: "Efficiency",
    family: "Facility",
    kind: "Behavioral",
    lead: "Leading",
    body: "Time, steps, rework, or assists. Use the median so one slow attempt does not skew it.",
  },
  {
    id: "confidence",
    name: "Confidence",
    family: "Facility",
    kind: "Attitudinal",
    lead: "Leading",
    body: "Do they understand and feel safe proceeding. Rechecking and hesitation sit here.",
  },
  {
    id: "usefulness",
    name: "Usefulness",
    family: "Engagement",
    kind: "Attitudinal",
    lead: "Leading",
    body: "Does it meet the need. A feature they ignore is a later churn risk.",
  },
  {
    id: "satisfaction",
    name: "Satisfaction",
    family: "Satisfaction",
    kind: "Attitudinal",
    lead: "Leading",
    body: "How they feel after the work. CSAT and SUS sit here. Company NPS stays too broad for one feature.",
  },
  {
    id: "engagement",
    name: "Engagement",
    family: "Engagement",
    kind: "Behavioral",
    lead: "Both",
    body: "How often they come back and what they use. Adoption and stickiness are leading. Retention and churn are lagging.",
  },
  {
    id: "operational",
    name: "Operational",
    family: "Operational",
    kind: "Operational",
    lead: "Leading",
    body: "Errors, tickets, and wait. High friction here drives churn. Track this with logs and support, not gut feel.",
  },
  {
    id: "accessibility",
    name: "Accessibility",
    family: "Constraint",
    kind: "Constraint",
    lead: "Leading",
    body: "Can they use it. Failures block the work. A high average cannot cancel them.",
  },
];

const KEI_STRUCTURE = [
  {
    id: "product",
    name: "Product-wide",
    body: "A small set for the whole product. Adoption, retention, CSAT or SUS, and help volume sit here.",
  },
  {
    id: "area",
    name: "Area",
    body: "Each product surface gets its own KEIs. Portfolio, Alerts, Queries, Reports, Users, and Finance. Do not invent an area the product does not have.",
    card: "Portfolio, Alerts, Queries, Reports, Users, and Finance each get their own KEIs. No other areas.",
  },
  {
    id: "primary",
    name: "Primary",
    body: "One headline per area. Task success is the usual thermometer.",
  },
  {
    id: "diagnostic",
    name: "Diagnostic",
    body: "Two to four supporting scores. Time, effort, errors, or abandon, to explain the headline.",
  },
];

const KEI_CUTS = [
  {
    id: "area",
    name: "Product area",
    body: "Portfolio, Alerts, Queries, Reports, Users, or Finance. Alerts and Queries cover faults. Meters sit in Portfolio.",
  },
  {
    id: "task",
    name: "Journey or task",
    body: "A named flow inside that area. Success and time are per task, not a blended average.",
  },
  {
    id: "test",
    name: "Test type",
    body: "Lab, live use, survey, or support. Do not mix them in one score.",
  },
  {
    id: "role",
    name: "User role",
    body: "A named group from User groups. Do not invent a hat.",
  },
  {
    id: "time",
    name: "Time",
    body: "A window with a sample. A wide band means wait for more data.",
  },
];

let store = null;
let systems = { updated: "", systems: {} };
let experience = { updated: "", keis: [], how: [], structure: [], cuts: [] };
let skillsCatalog = { lead: "", groups: [] };
let resourcesCatalog = { lead: "", themes: [], kinds: [] };
let roadmapCatalog = { lead: "", all: "", kinds: [], releases: [] };
let canWrite = false;
let openDetail = null;

function todayIso() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

function teamName(id) {
  const team = TEAMS.find((item) => item.id === id);
  return team ? team.name : id;
}

function emptyBoard() {
  return {
    headline: "No picture for this team yet.",
    situation: "Send talks for this team and this page will fill in.",
    can: [
      "Tick off today's work and add a task of your own.",
      "Open User groups and add anyone a talk has named.",
      "Look back at the Done tab once work is ticked.",
    ],
    cannot: [
      "See what this team needs until talks are in.",
      "Invent user groups to fill the page.",
      "Change the live product from this folder.",
    ],
    next: [
      "Send the first batch of talks for this team.",
      "Add anything you already know you need to do.",
      "Open User groups only after a talk names someone.",
    ],
    know: [
      {
        title: "Teams",
        body: "Pick the team in the side menu. Today, User groups, Research, Access, UI library, and Branding stay with that team.",
      },
      {
        title: "Access",
        body: "Company tools are shared. This team's tools sit on this page. People who can help sit at the top.",
      },
      {
        title: "How ticks stick",
        body: "Open the board with the preview script so checks save into the file.",
      },
    ],
    today: [],
    done: [],
    groups: [],
    research: emptyResearch(),
    access: [],
  };
}

function emptyAccess() {
  return { company: [], people: [] };
}

function emptyResearch() {
  return { insights: [], plans: [], reports: [], moves: [] };
}

function researchBoard() {
  const current = board();
  if (!current.research) current.research = emptyResearch();
  delete current.research.todos;
  if (!Array.isArray(current.research.insights)) current.research.insights = [];
  if (!Array.isArray(current.research.plans)) current.research.plans = [];
  if (!Array.isArray(current.research.reports)) current.research.reports = [];
  if (!Array.isArray(current.research.moves)) current.research.moves = [];
  if (!Array.isArray(current.research.documents)) current.research.documents = [];
  return current.research;
}

function researchSeverityName(id) {
  const item = RESEARCH_SEVERITIES.find((entry) => entry.id === id);
  return item ? item.name : "Medium";
}

function researchSeverityStatus(id) {
  return RESEARCH_SEVERITY_STATUS[id] || "waiting";
}

function clampScore(value) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return 1;
  return Math.min(99, Math.max(1, n));
}

function insightScore(item) {
  return clampScore(item?.score);
}

function insightSeverity(item) {
  return Object.prototype.hasOwnProperty.call(RESEARCH_SEVERITY_RANK, item?.severity)
    ? item.severity
    : "medium";
}

function activeResearchView() {
  return store?.researchView === "list" ? "list" : "cards";
}

function activeResearchTab() {
  return RESEARCH_TABS.some((item) => item.id === store?.researchTab) ? store.researchTab : "strategy";
}

function insightSource(item) {
  const id = String(item?.source || "").trim();
  if (!id) return null;
  return RESEARCH_SOURCES[id] || { name: id, long: id };
}

function insightSourceTag(item) {
  const source = insightSource(item);
  return source ? deskTag(source.name, "draft") : "";
}

function activeResearchSeverity() {
  const id = store?.researchSeverity;
  return RESEARCH_SEVERITIES.some((item) => item.id === id) ? id : "all";
}

function findInsight(id) {
  return (researchBoard().insights || []).find((item) => item.id === id) || null;
}

function sortedInsights() {
  const filter = activeResearchSeverity();
  return (researchBoard().insights || [])
    .filter((item) => filter === "all" || insightSeverity(item) === filter)
    .slice()
    .sort((a, b) => {
      const sev =
        (RESEARCH_SEVERITY_RANK[insightSeverity(a)] ?? 9) -
        (RESEARCH_SEVERITY_RANK[insightSeverity(b)] ?? 9);
      if (sev) return sev;
      const score = insightScore(b) - insightScore(a);
      if (score) return score;
      return String(a.title || "").localeCompare(String(b.title || ""));
    });
}

function knowCard(card, index, withBody) {
  return `
    <button
      type="button"
      class="astral-card astral-home-card desk-know-card"
      data-open="know"
      data-id="${index}"
      aria-haspopup="dialog"
    >
      <span class="desk-step-index" aria-hidden="true">${index + 1}</span>
      <span class="desk-know-title">${escapeHtml(card.title || "")}</span>
      ${withBody && card.body ? `<span class="astral-muted desk-know-body">${escapeHtml(card.body)}</span>` : ""}
    </button>
  `;
}

function keiListOr(list, fallback) {
  return Array.isArray(list) && list.length ? list : fallback;
}

function keiHow() {
  return keiListOr(experience?.how, KEI_DIMENSIONS);
}

function keiStructure() {
  return keiListOr(experience?.structure, KEI_STRUCTURE);
}

function keiCuts() {
  return keiListOr(experience?.cuts, KEI_CUTS);
}

function keiHowKind(item) {
  const family = String(item?.family || "").trim();
  const kind = String(item?.kind || "").trim();
  const lead = String(item?.lead || "").trim();
  const kindText =
    kind && kind.toLowerCase() !== family.toLowerCase() ? kind.toLowerCase() : "";
  const leadText = !lead
    ? ""
    : lead === "Both"
      ? "leading and lagging"
      : lead.toLowerCase();
  return [family, kindText, leadText].filter(Boolean).join(", ");
}

function keiTaxonomyCard(item, named, method) {
  const status = method ? "scaffold" : named ? "working" : "waiting";
  const label = method ? "Method" : named ? "In play" : "Waiting";
  const meta = keiHowKind(item);
  return deskCard({
    title: item.name,
    tags: deskTag(label, status),
    body: `${meta ? `<span class="desk-card-meta">${escapeHtml(meta)}</span>` : ""}${escapeHtml(
      cardLine(item, item.body)
    )}`,
  });
}

function keiStructureNamed(item, list) {
  if (item.id === "product") return list.some((kei) => kei.scope === "product");
  if (item.id === "area") {
    return list.some((kei) => kei.scope === "area" || kei.area);
  }
  if (item.id === "primary") return list.some((kei) => kei.role === "primary");
  if (item.id === "diagnostic") {
    return list.some((kei) => kei.role === "diagnostic");
  }
  return false;
}

function keiRoleName(item) {
  if (item?.role === "primary") return "Primary";
  if (item?.role === "diagnostic") return "Diagnostic";
  return "";
}

function teamKeis() {
  const team = store?.activeTeam;
  return (experience.keis || []).filter((item) => item.team === team);
}

function findKei(id) {
  return teamKeis().find((item) => item.id === id) || null;
}

function keiMaturity(item) {
  return KEI_MATURITY[item?.maturity] || KEI_MATURITY["no-baseline"];
}

function keiRounds(item) {
  return (item?.rounds || [])
    .map((round) => ({
      ...round,
      value: Number(round.value),
    }))
    .filter((round) => Number.isFinite(round.value))
    .sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
}

function keiGuide(value) {
  if (value === null || value === undefined || value === "") return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function keiFormat(value) {
  if (!Number.isFinite(value)) return "";
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function keiChange(item) {
  const rounds = keiRounds(item);
  if (rounds.length < 2) {
    return { id: "wait", status: "waiting", name: "Waiting on a second round" };
  }
  const earlier = rounds[rounds.length - 2].value;
  const later = rounds[rounds.length - 1].value;
  const better = item?.higherIsBetter === false ? later < earlier : later > earlier;
  const directional = rounds[rounds.length - 1].directional || item?.maturity === "provisional";
  if (later === earlier) {
    return { id: "steady", status: "waiting", name: "Steady" };
  }
  if (directional) {
    return better
      ? { id: "up", status: "scaffold", name: "Directional lift" }
      : { id: "down", status: "scaffold", name: "Directional drop" };
  }
  return better
    ? { id: "up", status: "firm", name: "Improved" }
    : { id: "down", status: "working", name: "Worse" };
}

function keiCurrent(item) {
  const rounds = keiRounds(item);
  return rounds.length ? rounds[rounds.length - 1] : null;
}

function activeKeiId() {
  const list = teamKeis();
  const id = store?.activeKei;
  if (id && list.some((item) => item.id === id)) return id;
  return list[0]?.id || "";
}

function keiLineChart(rounds, options = {}) {
  const width = options.width || 640;
  const height = options.height || 220;
  const spark = Boolean(options.spark);
  const padL = spark ? 6 : 12;
  const padR = spark ? 6 : 12;
  const padT = spark ? 8 : 16;
  const padB = spark ? 8 : 28;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const values = rounds.map((round) => round.value);
  const extras = [];
  if (Number.isFinite(options.red)) extras.push(options.red);
  if (Number.isFinite(options.target)) extras.push(options.target);
  const all = values.concat(extras);
  let min = all.length ? Math.min(...all) : 0;
  let max = all.length ? Math.max(...all) : 1;
  if (min === max) {
    min -= 1;
    max += 1;
  }
  const span = max - min || 1;
  const xAt = (index, count) =>
    padL + (count <= 1 ? innerW / 2 : (index / (count - 1)) * innerW);
  const yAt = (value) => padT + (1 - (value - min) / span) * innerH;
  const grid = [0, 0.5, 1]
    .map((step) => {
      const y = padT + step * innerH;
      return `<line class="analytics-grid" x1="${padL}" y1="${y}" x2="${
        width - padR
      }" y2="${y}" />`;
    })
    .join("");
  const guide = (value, extra) =>
    Number.isFinite(value)
      ? `<line class="analytics-guide${extra ? ` ${extra}` : ""}" x1="${padL}" y1="${yAt(
          value
        )}" x2="${width - padR}" y2="${yAt(value)}" />`
      : "";
  if (!rounds.length) {
    return `
      <svg class="analytics-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Waiting on a measured round">
        ${grid}
      </svg>
    `;
  }
  const points = rounds
    .map((round, index) => `${xAt(index, rounds.length)},${yAt(round.value)}`)
    .join(" ");
  const dots = rounds
    .map(
      (round, index) =>
        `<circle class="analytics-dot" cx="${xAt(index, rounds.length)}" cy="${yAt(
          round.value
        )}" r="${spark ? 2.5 : 4}" />`
    )
    .join("");
  const labels = spark
    ? ""
    : rounds
        .map((round, index) => {
          const label = round.label || round.date || "";
          return `<text class="analytics-x" x="${xAt(
            index,
            rounds.length
          )}" y="${height - 8}" text-anchor="middle">${escapeHtml(label)}</text>`;
        })
        .join("");
  return `
    <svg class="analytics-svg" viewBox="0 0 ${width} ${height}" role="img">
      ${grid}
      ${guide(options.red)}
      ${guide(options.target, "is-target")}
      <polyline class="analytics-line" points="${points}" />
      ${dots}
      ${labels}
    </svg>
  `;
}

function keiCard(item) {
  const maturity = keiMaturity(item);
  const change = keiChange(item);
  const current = keiCurrent(item);
  const unit = item.unit ? ` ${item.unit}` : "";
  const value = current
    ? `${keiFormat(current.value)}${escapeHtml(unit)}`
    : "Not measured";
  const rounds = keiRounds(item);
  const role = keiRoleName(item);
  return deskCard({
    open: { "data-open": "kei", "data-id": item.id },
    title: item.name || "",
    className: "desk-kei-card",
    tags: `<span class="desk-card-tags">${deskTag(maturity.name, maturity.status)}${
      role ? deskTag(role, "scaffold") : ""
    }</span>`,
    body: `<span class="desk-kei-value">${escapeHtml(value)}</span><span class="analytics-spark">${keiLineChart(
      rounds,
      { width: 280, height: 64, spark: true }
    )}</span>${escapeHtml(item.question || item.feature || "")}`,
    foot: deskTag(change.name, change.status),
  });
}

function scoreField(item) {
  return `<span class="desk-score"><span class="astral-muted">Score</span> <b>${insightScore(
    item
  )}</b></span>`;
}

function insightCard(item) {
  const severity = insightSeverity(item);
  return deskCard({
    open: { "data-open": "insight", "data-id": item.id },
    title: item.title || "",
    tags: `<span class="desk-card-tags">${deskTag(
      researchSeverityName(severity),
      researchSeverityStatus(severity)
    )}${insightSourceTag(item)}</span>`,
    body: escapeHtml(cardLine(item, item.problem)),
    foot: scoreField(item),
  });
}

function insightRow(item) {
  const severity = insightSeverity(item);
  return deskRow({
    open: { "data-open": "insight", "data-id": item.id },
    title: item.title || "",
    cells: [
      deskTag(researchSeverityName(severity), researchSeverityStatus(severity)),
      insightSourceTag(item) || `<span class="astral-muted">Not named</span>`,
      escapeHtml(String(insightScore(item))),
      `<span class="desk-cell-line">${escapeHtml(cardLine(item, item.problem))}</span>`,
    ],
  });
}

function board() {
  if (!store.boards[store.activeTeam]) {
    store.boards[store.activeTeam] = emptyBoard();
  }
  return store.boards[store.activeTeam];
}

function nextStatus(status) {
  const i = STATUS_ORDER.indexOf(status);
  return STATUS_ORDER[(i + 1) % STATUS_ORDER.length];
}

function taskKind(task) {
  return KIND_LABEL[task?.kind] ? task.kind : "admin";
}

function kindName(id) {
  if (id === "done") return "Done";
  return KIND_LABEL[id] || KIND_LABEL.admin;
}

function tasksOfKind(list, kind) {
  return (list || []).filter((task) => taskKind(task) === kind);
}

function activeKind() {
  const id = store.activeKind;
  return KIND_LABEL[id] ? id : "admin";
}

function activeTodayTab() {
  if (store?.activeKind === "done") return "done";
  return activeKind();
}

function activeLibraryTab() {
  const id = store?.activeLibraryTab;
  return LIBRARY_TABS.some((tab) => tab.id === id) ? id : "primitives";
}

function activeLanguageKind() {
  const id = store?.activeLanguageKind;
  return LANGUAGE_TABS.some((tab) => tab.id === id) ? id : "words";
}

function languageEntries() {
  return teamSystem()?.language?.entries || [];
}

function patternItems() {
  return teamSystem()?.patterns?.items || [];
}

function componentName(id) {
  const item = (teamSystem()?.components || []).find((entry) => entry.id === id);
  return item ? item.react || item.name : id;
}

function teamSystem() {
  return systems?.systems?.[store.activeTeam] || null;
}

function tokenById(id) {
  if (!id) return null;
  return (teamSystem()?.tokens || []).find((token) => token.id === id) || null;
}

function tokenIn(sys, id) {
  if (!id) return null;
  return (sys?.tokens || []).find((token) => token.id === id) || null;
}

function resolvedIn(sys, token, seen = new Set()) {
  if (!token) return "";
  if (seen.has(token.id)) return "";
  seen.add(token.id);
  if (token.alias) return resolvedIn(sys, tokenIn(sys, token.alias), seen);
  return token.value || "";
}

function applyDeskTheme() {
  const sys = systems?.systems?.imserv;
  const root = document.documentElement;
  if (!sys) {
    root.removeAttribute("data-theme");
    return;
  }
  (sys.tokens || []).forEach((token) => {
    const name = tokenCssVar(token);
    const value = resolvedIn(sys, token);
    if (name && value) root.style.setProperty(name, value);
  });
  const sans = resolvedIn(sys, tokenIn(sys, "primitive.font.family.sans"));
  if (sans) root.style.setProperty("--font-family-sans", sans);
  root.dataset.theme = "astral";
}

function resolvedValue(token, seen = new Set()) {
  if (!token) return "";
  if (seen.has(token.id)) return "";
  seen.add(token.id);
  if (token.alias) return resolvedValue(tokenById(token.alias), seen);
  return token.value || "";
}

function resolvedColor(token) {
  if (!token) return "";
  const value = resolvedValue(token);
  return token.type === "color" || String(value).startsWith("#") ? value : "";
}

function tokenStatus(token) {
  return TOKEN_STATUS[token?.status] || "Scaffold";
}

function tokenCssVar(token) {
  if (token?.cssVar) return token.cssVar;
  const path = String(token?.figma || "").replaceAll("/", "-");
  return path ? `--${path}` : "";
}

function tokenTheme(token) {
  if (token?.theme) return token.theme;
  const path = String(token?.figma || "").replaceAll("/", ".");
  return path ? `theme.${path}` : "";
}

function previewVars() {
  return (teamSystem()?.tokens || [])
    .map((token) => {
      const value = resolvedValue(token);
      const name = tokenCssVar(token);
      return value && name ? `${name}:${value}` : "";
    })
    .filter(Boolean)
    .join(";");
}

function libraryLayer(tab) {
  if (tab === "semantic") return "semantic";
  return "primitive";
}

function groupedTokens(list) {
  const map = new Map();
  (list || []).forEach((token) => {
    const group = token.group || "Other";
    if (!map.has(group)) map.set(group, []);
    map.get(group).push(token);
  });
  return [...map.entries()];
}

function setNested(root, parts, leaf) {
  let cursor = root;
  parts.forEach((part, index) => {
    if (index === parts.length - 1) {
      cursor[part] = leaf;
      return;
    }
    cursor[part] = cursor[part] || {};
    cursor = cursor[part];
  });
}

function dtcgType(type) {
  if (type === "color") return "color";
  if (type === "dimension") return "dimension";
  if (type === "fontFamily") return "fontFamily";
  if (type === "fontWeight") return "fontWeight";
  if (type === "number") return "number";
  return "string";
}

function dtcgLeaf(token) {
  const leaf = { $type: dtcgType(token.type) };
  if (token.alias) {
    const target = tokenById(token.alias);
    const path = target?.figma || token.alias.replace(/^primitive\.|^semantic\./, "").replaceAll(".", "/");
    leaf.$value = `{${path.replaceAll("/", ".")}}`;
  } else {
    leaf.$value = token.value || "";
  }
  if (token.note) leaf.$description = token.note;
  if (token.cssVar) {
    leaf.$extensions = {
      "com.astral.cssVar": token.cssVar,
      "com.astral.theme": token.theme,
    };
  }
  return leaf;
}

function dtcgDump(sys) {
  const primitive = {};
  const semantic = {};
  (sys.tokens || []).forEach((token) => {
    const parts = String(token.figma || "").split("/").filter(Boolean);
    if (!parts.length) return;
    setNested(token.layer === "semantic" ? semantic : primitive, parts, dtcgLeaf(token));
  });
  return {
    $description: `${sys.product} tokens for React. Primitive and semantic stay in separate Figma collections.`,
    stack: sys.stack || { framework: "React" },
    collections: {
      [sys.figma?.primitiveCollection || "Primitives"]: primitive,
      [sys.figma?.semanticCollection || "Semantic"]: semantic,
    },
    styles: {
      text: (sys.styles?.text || []).map((style) => ({
        name: style.figma || style.name,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing,
        status: style.status,
      })),
    },
    components: (sys.components || []).map((item) => ({
      name: item.react || item.name,
      file: item.file,
      tokens: item.tokens,
    })),
  };
}

function setSave(state, text) {
  if (!els.save) return;
  els.save.dataset.state = state;
  els.save.textContent = text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalize(data) {
  if (data && data.teams && data.boards) {
    data.activeTeam = data.activeTeam || "imserv";
    if (data.activeSection === "journeys") data.activeSection = "groups";
    if (data.activeSection === "done") {
      data.activeSection = "today";
      data.activeKind = "done";
    } else {
      data.activeSection = SECTIONS.includes(data.activeSection)
        ? data.activeSection
        : "today";
    }
    data.access = data.access || emptyAccess();
    data.access.company = data.access.company || [];
    data.access.people = data.access.people || [];
    data.activeKind =
      data.activeKind === "done" || KIND_LABEL[data.activeKind]
        ? data.activeKind
        : "admin";
    data.activeLibraryTab = LIBRARY_TABS.some((tab) => tab.id === data.activeLibraryTab)
      ? data.activeLibraryTab
      : "setup";
    data.activeLanguageKind = LANGUAGE_TABS.some((tab) => tab.id === data.activeLanguageKind)
      ? data.activeLanguageKind
      : "words";
    data.activeBrandSection = data.activeBrandSection || "overview";
    data.researchView = data.researchView === "list" ? "list" : "cards";
    data.researchSeverity = RESEARCH_SEVERITIES.some((item) => item.id === data.researchSeverity)
      ? data.researchSeverity
      : "all";
    data.activeComponent = data.activeComponent || "";
    data.activePattern = data.activePattern || "";
    data.activeSkill = data.activeSkill || "";
    data.skillFold = data.skillFold || "";
    data.activeResource = data.activeResource || "";
    data.resourceKind = data.resourceKind || "all";
    data.roadmapRelease = data.roadmapRelease || "all";
    if (!store) store = data;
    data.activePrototypeView = protoViewId(data.activePrototypeView);
    data.activePrototypeMeter = data.activePrototypeMeter || "";
    data.activePrototypeQuery = data.activePrototypeQuery || "";
    data.prototypeTreeFilters = Array.isArray(data.prototypeTreeFilters)
      ? data.prototypeTreeFilters.filter((id) =>
          ["odd", "gaps", "stale", "electricity", "gas", "water", "in", "out", "tenant", "hours-on", "hours-non", "hours-off", "tou-on", "tou-off"].includes(id)
        )
      : [];
    data.prototypePaneFilters = Array.isArray(data.prototypePaneFilters)
      ? data.prototypePaneFilters.filter((id) =>
          ["odd", "gaps", "stale", "electricity", "gas", "water", "in", "out", "tenant", "hours-on", "hours-non", "hours-off", "tou-on", "tou-off"].includes(id)
        )
      : [];
    data.activePrototypeFacet = data.activePrototypeFacet || "all";
    data.prototypePaneAlertFacet = data.prototypePaneAlertFacet === "resolved" ? "resolved" : "unread";
    data.prototypeRange = data.prototypeRange || "day";
    data.prototypeChannel = data.prototypeChannel || "all";
    data.prototypeChartFlows = Array.isArray(data.prototypeChartFlows)
      ? data.prototypeChartFlows.filter((id) => id === "in" || id === "out")
      : [];
    if (data.prototypeChartFlows.length !== 1) data.prototypeChartFlows = null;
    data.prototypeChartSliceOff = Array.isArray(data.prototypeChartSliceOff)
      ? data.prototypeChartSliceOff.filter((id) => typeof id === "string")
      : [];
    data.prototypePaneMeterKinds = Array.isArray(data.prototypePaneMeterKinds)
      ? data.prototypePaneMeterKinds.filter(
          (id) => id === "electricity" || id === "gas" || id === "water"
        )
      : null;
    data.prototypeSiteMeter = data.prototypeSiteMeter || "all";
    data.prototypeSiteMeters = Array.isArray(data.prototypeSiteMeters) ? data.prototypeSiteMeters : [];
    data.prototypeCompareMeters = Array.isArray(data.prototypeCompareMeters)
      ? data.prototypeCompareMeters
      : [];
    data.prototypeCompareSites = Array.isArray(data.prototypeCompareSites)
      ? data.prototypeCompareSites
      : [];
    data.prototypeGroupSites = Array.isArray(data.prototypeGroupSites) ? data.prototypeGroupSites : [];
    data.prototypeScope = data.prototypeScope === "site" ? "site" : "group";
    data.prototypeGroup = data.prototypeGroup || (data.prototypeScope === "group" ? "all" : "");
    data.prototypeGroupClosed = Array.isArray(data.prototypeGroupClosed)
      ? data.prototypeGroupClosed
      : [];
    delete data.prototypeAlertCallHidden;
    data.prototypePane = protoKnownPane(data.prototypePane);
    data.prototypeBreakdownOpen = Boolean(data.prototypeBreakdownOpen);
    data.prototypeListOpen = Boolean(data.prototypeListOpen);
    data.prototypeCompareOpen = Boolean(data.prototypeCompareOpen);
    data.prototypeCompareQuery = data.prototypeCompareQuery || "";
    data.prototypeCompareFilters = Array.isArray(data.prototypeCompareFilters)
      ? data.prototypeCompareFilters.filter((id) =>
          ["odd", "gaps", "stale", "electricity", "gas", "water", "in", "out", "tenant", "hours-on", "hours-non", "hours-off", "tou-on", "tou-off"].includes(id)
        )
      : [];
    data.prototypeCompareSort =
      data.prototypeCompareSort === "action" || data.prototypeCompareSort === "count"
        ? data.prototypeCompareSort
        : "name";
    data.prototypeCompareIds = Array.isArray(data.prototypeCompareIds)
      ? data.prototypeCompareIds
      : [];
    data.prototypeCompareLevel = protoCompareLevelId(data.prototypeCompareLevel);
    data.prototypeDatePreset = "24h";
    data.prototypeDateFrom = "";
    data.prototypeDateTo = "";
    data.prototypeDateDraftFrom = data.prototypeDateDraftFrom || "";
    data.prototypeDateDraftTo = data.prototypeDateDraftTo || "";
    data.prototypeDateCal = data.prototypeDateCal || "";
    data.prototypeDateOpen = Boolean(data.prototypeDateOpen);
    data.prototypeDateCustomOpen = Boolean(data.prototypeDateCustomOpen);
    data.prototypeReportCalOpen = Boolean(data.prototypeReportCalOpen);
    data.prototypeReportCal = data.prototypeReportCal || "";
    data.prototypeDateHome = "";
    data.prototypeDateHomeFrom = "";
    data.prototypeDateHomeTo = "";
    data.prototypeExportOpen = Boolean(data.prototypeExportOpen);
    data.prototypeDownloads = protoDownloadsFrom(data.prototypeDownloads);
    data.prototypeDownloadQuery = String(data.prototypeDownloadQuery || "").slice(0, 120);
    data.prototypeDownloadFilters = protoDownloadFilterIds(data.prototypeDownloadFilters);
    data.prototypeDownloadFilterOpen = Boolean(data.prototypeDownloadFilterOpen);
    data.prototypeAlertQuery = String(data.prototypeAlertQuery || "").slice(0, 120);
    data.prototypeAlertFilters = protoAlertFilterIds(data.prototypeAlertFilters);
    data.prototypeAlertFilterOpen = Boolean(data.prototypeAlertFilterOpen);
    data.prototypeExportNotice = protoExportNoticeFrom(
      data.prototypeExportNotice,
      data.prototypeDownloads
    );
    data.prototypeChartView = data.prototypeChartView === "individual" ? "individual" : "total";
    data.prototypeChartStyle = data.prototypeChartStyle === "line" ? "line" : "bar";
    data.prototypeTreeOpen = data.prototypeTreeOpen !== false;
    data.prototypeFullscreen = Boolean(data.prototypeFullscreen);
    data.prototypePreviewHidden = Boolean(data.prototypePreviewHidden);
    data.prototypeLibraryOn = Boolean(data.prototypeLibraryOn);
    data.prototypeEmailsOn = Boolean(data.prototypeEmailsOn);
    data.prototypeFlow = [
      "product",
      "onboarding",
      "sign-up",
      "sign-in",
      "recovery",
      "invite",
    ].includes(data.prototypeFlow)
      ? data.prototypeFlow
      : data.prototypeSignedOut
        ? "sign-in"
        : "product";
    data.prototypeAskOpen = Boolean(data.prototypeAskOpen);
    data.prototypeWalkOpen = Boolean(data.prototypeWalkOpen);
    data.prototypeAccountOpen = Boolean(data.prototypeAccountOpen);
    data.prototypeNoticeOpen = Boolean(data.prototypeNoticeOpen);
    data.prototypeRailOpen = Boolean(data.prototypeRailOpen);
    data.prototypeSeeAsCompany =
      typeof protoKnownSeeAsCompany === "function"
        ? protoKnownSeeAsCompany(data.prototypeSeeAsCompany, data.prototypeAddedCompanies)
        : "";
    data.prototypeSeeAsUser = String(data.prototypeSeeAsUser || "");
    data.prototypeCompanyQuery = String(data.prototypeCompanyQuery || "").slice(0, 120);
    data.prototypeSignedOut = Boolean(data.prototypeSignedOut);
    data.prototypeAuthEmail = data.prototypeAuthEmail || "";
    data.prototypeAuthName = data.prototypeAuthName || "";
    data.prototypeAuthCompany = data.prototypeAuthCompany || "";
    data.prototypeAuthSent = Boolean(data.prototypeAuthSent);
    data.prototypeAuthResent = Boolean(data.prototypeAuthResent);
    data.prototypeSignUpStep = data.prototypeSignUpStep === "verify" ? "verify" : "";
    data.prototypeRecoveryStep = ["sent", "reset", "done"].includes(data.prototypeRecoveryStep)
      ? data.prototypeRecoveryStep
      : data.prototypeAuthSent
        ? "sent"
        : "";
    data.prototypeInviteStep = [
      "email",
      "review",
      "sign-in",
      "create",
      "done",
      "expired",
      "joined",
      "wrong",
    ].includes(data.prototypeInviteStep)
      ? data.prototypeInviteStep
      : "";
    data.prototypeInviteResume = Boolean(data.prototypeInviteResume);
    data.prototypeInviteAsked = Boolean(data.prototypeInviteAsked);
    data.prototypeInviteFirst = String(data.prototypeInviteFirst || "").slice(0, 80);
    data.prototypeInviteLast = String(data.prototypeInviteLast || "").slice(0, 80);
    data.prototypeReportForm = Boolean(data.prototypeReportForm);
    data.prototypeReportOff = Array.isArray(data.prototypeReportOff) ? data.prototypeReportOff : [];
    data.prototypeCustomReports = Array.isArray(data.prototypeCustomReports)
      ? data.prototypeCustomReports
      : [];
    data.prototypeQueryForm = Boolean(data.prototypeQueryForm);
    data.prototypeQuerySite = data.prototypeQuerySite || "";
    data.prototypeOpenQuery = data.prototypeOpenQuery || "";
    data.prototypeRaisedQueries = Array.isArray(data.prototypeRaisedQueries)
      ? data.prototypeRaisedQueries
      : [];
    data.prototypeChartPoint =
      data.prototypeChartPoint && typeof data.prototypeChartPoint === "object"
        ? data.prototypeChartPoint
        : null;
    data.prototypePointTags =
      typeof protoPointTagMap === "function" ? protoPointTagMap(data.prototypePointTags) : {};
    data.prototypePointTagPool =
      typeof protoPointTagList === "function" ? protoPointTagList(data.prototypePointTagPool) : [];
    data.prototypePointTagOpen = false;
    data.prototypePointTagQuery = "";
    data.prototypeAlertAck = Array.isArray(data.prototypeAlertAck) ? data.prototypeAlertAck : [];
    data.prototypeAlertUndo = Array.isArray(data.prototypeAlertUndo) ? data.prototypeAlertUndo : [];
    data.prototypeAlertRead = Array.isArray(data.prototypeAlertRead) ? data.prototypeAlertRead : [];
    data.prototypeQueryResolve =
      data.prototypeQueryResolve &&
      typeof data.prototypeQueryResolve === "object" &&
      !Array.isArray(data.prototypeQueryResolve)
        ? data.prototypeQueryResolve
        : {};
    data.prototypeAckOpen = "";
    data.prototypeReportRun = data.prototypeReportRun || "";
    data.prototypeBrandLogo = data.prototypeBrandLogo || "";
    data.prototypeOrgByCompany =
      data.prototypeOrgByCompany &&
      typeof data.prototypeOrgByCompany === "object" &&
      !Array.isArray(data.prototypeOrgByCompany)
        ? data.prototypeOrgByCompany
        : {};
    data.prototypeProfilePicture = data.prototypeProfilePicture || "";
    data.prototypeProfileName = data.prototypeProfileName || "";
    data.prototypeProfileDiscipline = data.prototypeProfileDiscipline || "";
    data.prototypeProfileJobTitle = data.prototypeProfileJobTitle || "";
    data.prototypeBrandPrimary = data.prototypeBrandPrimary || "";
    data.prototypeBrandSecondary = data.prototypeBrandSecondary || "";
    data.prototypeOrgName = String(data.prototypeOrgName || "").slice(0, 80);
    data.prototypeOrgCountry = data.prototypeOrgCountry || "";
    data.prototypeNotifyActivity = data.prototypeNotifyActivity !== false;
    data.prototypeNotifyRecurrence = data.prototypeNotifyRecurrence || "daily";
    data.prototypeNotifyPreviews = data.prototypeNotifyPreviews !== false;
    data.prototypeNotifyGrouping = data.prototypeNotifyGrouping || "auto";
    data.prototypeSettingsSection = ["organisation", "profile", "notifications", "billing"].includes(
      data.prototypeSettingsSection
    )
      ? data.prototypeSettingsSection
      : "organisation";
    data.prototypeSettingsFrom = String(data.prototypeSettingsFrom || "");
    data.prototypeSeeAsFrom = String(data.prototypeSeeAsFrom || "");
    data.prototypeSeeAsPerson = String(data.prototypeSeeAsPerson || "");
    data.prototypeUserForm = Boolean(data.prototypeUserForm);
    data.prototypeTeamDraftPeople = Array.isArray(data.prototypeTeamDraftPeople)
      ? data.prototypeTeamDraftPeople
      : [];
    data.prototypePersonSites =
      data.prototypePersonSites &&
      typeof data.prototypePersonSites === "object" &&
      !Array.isArray(data.prototypePersonSites)
        ? data.prototypePersonSites
        : {};
    data.prototypeRenewForm = Boolean(data.prototypeRenewForm);
    data.prototypeRenewPerson = data.prototypeRenewPerson || "";
    data.prototypeRenewFrom = data.prototypeRenewFrom || "";
    data.prototypeRenewTo = data.prototypeRenewTo || "";
    data.prototypeRenewFileName = data.prototypeRenewFileName || "";
    data.prototypeRenewCal = data.prototypeRenewCal || "";
    data.prototypeMeExpiresFrom = data.prototypeMeExpiresFrom || "";
    data.prototypeMeExpiresOn = data.prototypeMeExpiresOn || "";
    data.prototypeMeContractName = data.prototypeMeContractName || "";
    data.prototypeTableSort = protoTableSortMap(data.prototypeTableSort);
    data.prototypeUserQuery = data.prototypeUserQuery || "";
    data.prototypeCompanyQuery = String(data.prototypeCompanyQuery || "").slice(0, 120);
    data.prototypeTeamPeopleQuery = data.prototypeTeamPeopleQuery || "";
    data.prototypeUserDrafts = Array.isArray(data.prototypeUserDrafts) && data.prototypeUserDrafts.length
      ? data.prototypeUserDrafts.map((item) => String(item || ""))
      : [""];
    data.prototypeUserInviteRole = data.prototypeUserInviteRole || "contributor";
    data.prototypeMeRole = data.prototypeMeRole || "manager";
    data.prototypeUserGroup = data.prototypeUserGroup || "end-customer";
    data.prototypeAccess = data.prototypeAccess || "";
    data.prototypeTenure = data.prototypeTenure === "temporary" ? "temporary" : "permanent";
    data.prototypeSee = data.prototypeSee || "";
    data.prototypeUserRoleFilter = Array.isArray(data.prototypeUserRoleFilter)
      ? data.prototypeUserRoleFilter.filter((id) => typeof id === "string" && id && id !== "all")
      : !data.prototypeUserRoleFilter || data.prototypeUserRoleFilter === "all"
        ? []
        : [String(data.prototypeUserRoleFilter)];
    data.prototypeUserRoleFilterOpen = Boolean(data.prototypeUserRoleFilterOpen);
    data.prototypeUserMenu = data.prototypeUserMenu || "";
    data.prototypeUserOpen = data.prototypeUserOpen || "";
    data.prototypeSelectOpen = data.prototypeSelectOpen || "";
    data.prototypeInvitedUsers = Array.isArray(data.prototypeInvitedUsers)
      ? data.prototypeInvitedUsers
      : [];
    data.prototypeAddedCompanies = Array.isArray(data.prototypeAddedCompanies)
      ? data.prototypeAddedCompanies
      : [];
    data.prototypeCompanyForm = Boolean(data.prototypeCompanyForm);
    data.prototypeCompanyDraftName = String(data.prototypeCompanyDraftName || "").slice(0, 80);
    data.prototypeCompanyDraftType = ["customer", "supplier", "broker"].includes(
      data.prototypeCompanyDraftType
    )
      ? data.prototypeCompanyDraftType
      : "customer";
    data.prototypeCompanyNameError = Boolean(data.prototypeCompanyNameError);
    TEAMS.forEach((team) => {
      if (!data.boards[team.id]) data.boards[team.id] = emptyBoard();
      if (!data.boards[team.id].access) data.boards[team.id].access = [];
      if (!data.boards[team.id].research) data.boards[team.id].research = emptyResearch();
      delete data.boards[team.id].research.todos;
      if (!Array.isArray(data.boards[team.id].research.insights)) {
        data.boards[team.id].research.insights = [];
      }
      data.boards[team.id].research.insights.forEach((item) => {
        item.severity = insightSeverity(item);
        item.score = insightScore(item);
      });
      (data.boards[team.id].groups || []).forEach((group) => {
        if (!Array.isArray(group.journey)) group.journey = [];
      });
      ["today", "done"].forEach((list) => {
        (data.boards[team.id][list] || []).forEach((task) => {
          task.kind = taskKind(task);
        });
      });
    });
    return data;
  }
  const wrapped = {
    activeTeam: "imserv",
    activeSection: "today",
    activeLibraryTab: "setup",
    activeLanguageKind: "words",
    activeBrandSection: "overview",
    activeComponent: "",
    activePattern: "",
    activeSkill: "",
    skillFold: "",
    activeResource: "",
    resourceKind: "all",
    roadmapRelease: "all",
    teams: TEAMS,
    access: emptyAccess(),
    boards: {
      imserv: emptyBoard(),
      "off-axis": data || emptyBoard(),
      stagerise: emptyBoard(),
    },
  };
  return wrapped;
}

function initials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function emptyCard(text) {
  return `<div class="astral-empty desk-empty"><p class="astral-muted">${escapeHtml(text)}</p></div>`;
}

/* Desk pages reuse the prototype's pieces: summary stats as filters, a
   sheet with Search and the view switch, report-grid cards, and tables. */
const DESK_VIEWS = [
  { id: "cards", name: "Cards", icon: "grid" },
  { id: "list", name: "List", icon: "list" },
];

const DESK_SECTION_ICONS = {
  today: "home",
  groups: "users",
  research: "analyse",
  resources: "book",
  roadmap: "signpost",
  strategy: "outgoing",
  analytics: "chart-bar",
  access: "profile",
  library: "grid",
  language: "comment",
  patterns: "report",
  skills: "servicing",
  prototype: "expand",
  branding: "tag",
  workflow: "hours",
};

// Desk-only marks that the shared Astral icon set does not carry.
const DESK_ICON_MARKS = {
  book: `<path d="M5 5.5A1.5 1.5 0 0 1 6.5 4H19v13H6.5A1.5 1.5 0 0 0 5 18.5v-13z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><path d="M5 18.5A1.5 1.5 0 0 0 6.5 20H19v-3M9 8h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  layers: `<path d="M12 4 3.5 8.5 12 13l8.5-4.5L12 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><path d="M3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  signpost: `<path d="M12 21V3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /><path d="M12 5.5h6l2 2-2 2h-6M12 12H6l-2 2 2 2h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />`,
  compass: `<circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="2" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />`,
};

function deskIconMark(name) {
  const inner = DESK_ICON_MARKS[name];
  return inner
    ? `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${inner}</svg>`
    : protoIconMark(name);
}

function deskView(section) {
  if (section === "research" && typeof activeResearchView === "function") {
    return activeResearchView() === "list" ? "list" : "cards";
  }
  return store?.deskViews?.[section] === "list" ? "list" : "cards";
}

function deskQuery(section) {
  return String(store?.deskQueries?.[section] || "");
}

function deskMatch(section, ...fields) {
  const q = deskQuery(section).trim().toLowerCase();
  if (!q) return true;
  return fields.some((field) => String(field || "").toLowerCase().includes(q));
}

function deskTag(label, status) {
  return `<span class="astral-tag status" data-status="${escapeHtml(status || "draft")}">${escapeHtml(
    label
  )}</span>`;
}

function deskStats(items, active, attr, aria) {
  return `
    <div class="astral-summary-stats desk-stats" role="group" aria-label="${escapeHtml(aria)}">
      ${items
        .map((item) => {
          const on = item.id === active;
          const off = !on && Boolean(item.disabled);
          return `
        <button type="button" class="astral-stat astral-summary-stat${on ? " is-on" : ""}" aria-pressed="${
          on ? "true" : "false"
        }" ${attr}="${escapeHtml(item.id)}"${off ? " disabled" : ""}>
          <span class="astral-stat-value">${escapeHtml(String(item.count))}</span>
          <span>${escapeHtml(item.name)}</span>
        </button>`;
        })
        .join("")}
    </div>
  `;
}

function deskJumpStats(items, aria) {
  return `
    <div class="astral-summary-stats desk-stats" role="group" aria-label="${escapeHtml(aria)}">
      ${items
        .map(
          (item) => `
        <button type="button" class="astral-stat astral-summary-stat" data-desk-jump="${escapeHtml(
          item.target
        )}">
          <span class="astral-stat-value">${escapeHtml(String(item.count))}</span>
          <span>${escapeHtml(item.name)}</span>
        </button>`
        )
        .join("")}
    </div>
  `;
}

function deskTools(section, placeholder, label) {
  const views = DESK_VIEWS.map((item) => ({ ...item, id: `${section}:${item.id}` }));
  return `
    <div class="astral-sheet-head">
      <div class="astral-sheet-tools">
        ${protoSearchField({
          name: `desk-q:${section}`,
          value: deskQuery(section),
          placeholder,
          label,
        })}
        ${protoViewSwitch(views, `${section}:${deskView(section)}`, "data-desk-view", "View")}
      </div>
    </div>
  `;
}

function deskOpenAttrs(open) {
  return Object.entries(open || {})
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(" ");
}

// Card line rule (ux-writing style guide): one sentence, 120 characters or fewer, the one fact
// that helps someone pick this card. A long field keeps its detail page; "card" holds the short line.
const CARD_LINE_MAX = 120;
const cardLineWarned = new Set();

function cardLine(item, text) {
  const line = String(item?.card || text || "").trim();
  if (line.length > CARD_LINE_MAX && !cardLineWarned.has(line)) {
    cardLineWarned.add(line);
    console.warn(`Card line over ${CARD_LINE_MAX} characters. Add a short "card" line.`, item?.id || item?.name || "", line);
  }
  return line;
}

// A report-grid card. The title button stretches over the whole card.
function deskCard({ open, title, tags, body, foot, lead, className }) {
  const dialog = open && open["data-open"] ? ' aria-haspopup="dialog"' : "";
  const heading = open
    ? `<button type="button" class="desk-card-open" ${deskOpenAttrs(open)}${dialog}>${escapeHtml(
        title
      )}</button>`
    : escapeHtml(title);
  return `
    <article class="astral-card desk-card${open ? " is-link" : ""}${className ? ` ${className}` : ""}">
      <div class="astral-card-head">
        ${lead || ""}
        <h3>${heading}</h3>
        ${tags || ""}
      </div>
      ${body ? `<p>${body}</p>` : ""}
      ${foot ? `<div class="astral-actions desk-card-foot">${foot}</div>` : ""}
    </article>
  `;
}

function deskTable(cols, rows) {
  return `
    <div class="astral-table-wrap desk-table">
      <table class="astral-table">
        <thead><tr>${cols.map((col) => `<th scope="col">${escapeHtml(col)}</th>`).join("")}</tr></thead>
        <tbody>${rows.join("")}</tbody>
      </table>
    </div>
  `;
}

function deskRow({ open, title, cells, mark }) {
  const dialog = open && open["data-open"] ? ' aria-haspopup="dialog"' : "";
  const head = open
    ? `<button type="button" class="desk-row-open" ${deskOpenAttrs(open)}${dialog}>${escapeHtml(
        title
      )}</button>`
    : escapeHtml(title);
  return `
    <tr class="${open ? "is-link" : ""}">
      <th scope="row">${mark ? `<span class="desk-row-marked">${mark}${head}</span>` : head}</th>
      ${(cells || []).map((cell) => `<td>${cell}</td>`).join("")}
    </tr>
  `;
}

function deskSheet(section, { placeholder, label, cards, cols, rows, empty }) {
  const list = deskView(section) === "list";
  const count = list ? rows.length : cards.length;
  let inner = emptyCard(deskQuery(section) ? "Nothing matches that search." : empty);
  if (count) {
    inner = list
      ? deskTable(cols, rows)
      : `<div class="astral-report-grid desk-grid">${cards.join("")}</div>`;
  }
  return `
    <section class="astral-card astral-reports-sheet desk-sheet${list ? " is-list" : " is-cards"}">
      ${deskTools(section, placeholder, label)}
      ${inner}
    </section>
  `;
}

function deskDetailHead({ back, where, kicker, title, lead, extra, mark }) {
  return `
    ${listBackButton(back, where)}
    <header class="astral-page-head astral-page-tools desk-detail-head">
      <div>
        ${kicker ? `<div class="desk-detail-kicker">${kicker}</div>` : ""}
        ${
          mark
            ? `<h2 class="desk-detail-title">${mark}<span>${escapeHtml(title)}</span></h2>`
            : `<h2>${escapeHtml(title)}</h2>`
        }
      </div>
    </header>
    ${lead ? `<p class="astral-muted astral-home-lead desk-lead">${escapeHtml(lead)}</p>` : ""}
    ${extra || ""}
  `;
}

function deskSection(title, inner, help) {
  return `
    <section class="astral-card desk-block">
      <div class="desk-block-head">
        <h3>${escapeHtml(title)}</h3>
        ${help ? `<p class="astral-muted">${escapeHtml(help)}</p>` : ""}
      </div>
      ${inner}
    </section>
  `;
}

function setPanelDetail(section, on) {
  const panel = document.querySelector(`.panel[data-panel="${section}"]`);
  if (panel) panel.classList.toggle("is-detail", Boolean(on));
}

function factRow(label, value) {
  if (!value) return "";
  return `
    <div>
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `;
}

function removeButton(action, extra = "") {
  return `<button type="button" class="access-remove" data-action="${escapeHtml(
    action
  )}" ${extra}>Remove</button>`;
}

function taskItem(task, done) {
  const project = task.project
    ? `<span class="astral-tag">${escapeHtml(task.project)}</span>`
    : "";
  const doing = !done && task.doing ? deskTag("Doing", RESEARCH_STUDY_STATUS.doing) : "";
  return `
    <li class="task">
      <input type="checkbox" ${done ? "checked" : ""} data-id="${escapeHtml(task.id)}" />
      <button
        type="button"
        class="task-open"
        data-open="task"
        data-id="${escapeHtml(task.id)}"
        aria-haspopup="dialog"
      >
        <span class="task-title">${escapeHtml(task.title)}</span>
        <span class="task-meta">${doing}${project}</span>
      </button>
    </li>
  `;
}

function deskAvatar(name) {
  return `<span class="astral-avatar desk-avatar" aria-hidden="true">${escapeHtml(
    initials(name)
  )}</span>`;
}

// Desk-only marks for user groups. The shared icon set lives in astral-ui.js.
const GROUP_ICON_MARKS = {
  pound: `<path d="M16.2 7.4a3.7 3.7 0 0 0-6.9 1.9V13c0 2.6-.9 4.4-2.6 5.5h10.6M6.9 12.6h6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  data: `<ellipse cx="12" cy="6" rx="7" ry="2.5" fill="none" stroke="currentColor" stroke-width="2" /><path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" fill="none" stroke="currentColor" stroke-width="2" />`,
  briefcase: `<rect x="3.5" y="7.5" width="17" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2" /><path d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3.5 12.5h17" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />`,
  pylon: `<path d="M12 3 7.5 21M12 3l4.5 18M5 8h14M8 14h8M6 21h12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  streetlight: `<path d="M8 21V8a4 4 0 0 1 4-4h4.5M5 21h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M13 8.5a3.5 3.5 0 0 1 7 0z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><path d="M16.5 11.5v1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  archive: `<rect x="3.5" y="4.5" width="17" height="4.5" rx="1" fill="none" stroke="currentColor" stroke-width="2" /><path d="M5 9v9.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V9M10 13h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
};

const GROUP_MARKS = {
  "end-customer": { icon: "companies", hue: "teal" },
  "energy-manager": { icon: "electricity", hue: "amber" },
  "finance-user": { icon: "pound", hue: "green" },
  "asset-manager": { icon: "servicing", hue: "indigo" },
  "data-user": { icon: "data", hue: "blue" },
  broker: { icon: "briefcase", hue: "purple" },
  "portfolio-customer": { icon: "pylon", hue: "rose" },
  "admin-user": { icon: "settings", hue: "graphite" },
  "pda-unmetered": { icon: "streetlight", hue: "orange" },
  "legacy-portal": { icon: "archive", hue: "brown" },
};

const GROUP_HUES = ["teal", "amber", "green", "indigo", "blue", "purple", "rose", "graphite", "orange", "brown"];

function groupMarkOf(group) {
  const id = String(group?.id || "");
  if (GROUP_MARKS[id]) return GROUP_MARKS[id];
  let hash = 0;
  for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return { icon: "users", hue: GROUP_HUES[hash % GROUP_HUES.length] };
}

function groupMark(group, size) {
  const { icon, hue } = groupMarkOf(group);
  const inner = GROUP_ICON_MARKS[icon];
  const svg = inner
    ? `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${inner}</svg>`
    : protoIconMark(icon);
  return `<span class="astral-avatar desk-avatar desk-group-mark${size ? ` is-${size}` : ""}" data-hue="${hue}" aria-hidden="true">${svg}</span>`;
}

function groupStages(group) {
  const stages = (group.journey || []).length;
  return stages === 1 ? "1 journey stage" : `${stages} journey stages`;
}

function groupNoteCount(group) {
  const notes = (group.notes || []).length;
  return notes === 1 ? "1 note" : `${notes} notes`;
}

function groupItem(group) {
  const status = group.status || "draft";
  return deskCard({
    open: { "data-group-page": group.id },
    lead: groupMark(group),
    title: group.name,
    tags: deskTag(STATUS_LABEL[status] || "Draft", status),
    body: escapeHtml(cardLine(group, group.who) || "Open for the rest."),
    foot: `<span class="astral-muted">${escapeHtml(
      `${groupStages(group)} \u00b7 ${groupNoteCount(group)}`
    )}</span>`,
  });
}

function groupParentName(group) {
  const parent = (board().groups || []).find((item) => item.id === group.parent);
  return parent ? parent.name : "";
}

function groupRow(group) {
  const status = group.status || "draft";
  const stages = (group.journey || []).length;
  return deskRow({
    open: { "data-group-page": group.id },
    mark: groupMark(group, "sm"),
    title: group.name,
    cells: [
      escapeHtml(groupParentName(group) || "\u2014"),
      deskTag(STATUS_LABEL[status] || "Draft", status),
      escapeHtml(stages === 1 ? "1 stage" : `${stages} stages`),
      `<span class="desk-cell-line">${escapeHtml(cardLine(group, group.who))}</span>`,
    ],
  });
}

function groupChildren(groups, parentId) {
  return (groups || []).filter((group) => group.parent === parentId);
}

function groupCards(groups, include) {
  const list = Array.isArray(groups) ? groups : [];
  return list.filter((group) => {
    if (include && !include(group)) return false;
    return !groupChildren(list, group.id).length;
  });
}

function groupClusters(groups, itemFn, include) {
  const list = Array.isArray(groups) ? groups : [];
  const show = include ? list.filter(include) : list;
  const shown = new Set(show.map((group) => group.id));
  const top = list.filter((group) => !group.parent);
  return top
    .filter(
      (group) =>
        shown.has(group.id) ||
        groupChildren(list, group.id).some((child) => shown.has(child.id))
    )
    .map((group) => {
      const kids = groupChildren(list, group.id).filter((child) =>
        shown.has(child.id)
      );
      const cards = kids.length
        ? kids
        : shown.has(group.id)
          ? [group]
          : [];
      if (!cards.length) return "";
      return `
        <section class="desk-cluster">
          <h4 class="desk-cluster-title">${groupMark(group, "sm")}${escapeHtml(group.name)}</h4>
          <div class="astral-report-grid desk-grid">${cards.map(itemFn).join("")}</div>
        </section>
      `;
    })
    .join("");
}

function groupSheet(section, groups, itemFn, include, placeholder, cols) {
  const list = deskView(section) === "list";
  const leaves = groupCards(groups, include);
  let inner = emptyCard("Nothing matches that search.");
  if (leaves.length) {
    inner = list
      ? deskTable(cols, leaves.map(groupRow))
      : `<div class="desk-clusters">${groupClusters(groups, itemFn, include)}</div>`;
  }
  return `
    <section class="astral-card astral-reports-sheet desk-sheet${list ? " is-list" : " is-cards"}">
      ${deskTools(section, placeholder, placeholder)}
      ${inner}
    </section>
  `;
}

function journeyPath(group) {
  const stages = group.journey || [];
  if (!stages.length) return "";
  return `
    <ol class="journey-path">
      ${stages
        .map((step, index) => {
          const later = (step.later || "").trim();
          const laterBlock = later
            ? `<div class="journey-later">
                 <p class="field-label">Later</p>
                 <p class="suggest">${escapeHtml(later)}</p>
               </div>`
            : `<div class="journey-later is-empty">
                 <p class="field-label">Later</p>
                 <p>Not sketched yet.</p>
               </div>`;
          return `
            <li>
              <p class="journey-index">${index + 1}</p>
              <h4>${escapeHtml(step.stage || "")}</h4>
              <div class="journey-now">
                <p class="field-label">Now</p>
                <p>${escapeHtml(step.now || "Not known yet.")}</p>
              </div>
              ${laterBlock}
            </li>
          `;
        })
        .join("")}
    </ol>
  `;
}

const GROUP_TABS = [
  { id: "overview", name: "Overview" },
  { id: "journey", name: "Journey" },
  { id: "notes", name: "From talks" },
];

function activeGroupTab() {
  return GROUP_TABS.some((item) => item.id === store?.groupTab) ? store.groupTab : "overview";
}

function groupLink(group) {
  return `<button type="button" class="desk-group-link" data-group-page="${escapeHtml(group.id)}">${groupMark(
    group,
    "sm"
  )}<span>${escapeHtml(group.name)}</span></button>`;
}

function groupOverview(group) {
  const groups = board().groups || [];
  const parent = groups.find((item) => item.id === group.parent);
  const kids = groupChildren(groups, group.id);
  const moves = researchMoves().filter((move) => move.group === group.id);
  const need = deskSection(
    "What they need",
    `<p>${escapeHtml(group.need || "Not known yet.")}</p>`
  );
  const open = deskSection(
    "Still open",
    `<p>${escapeHtml(group.open || "Nothing open.")}</p>`
  ).replace('class="astral-card desk-block"', 'class="astral-card desk-block is-open"');
  const heard = group.heard
    ? deskSection(
        "In their words",
        `<blockquote class="heard">
          <p>${escapeHtml(group.heard)}</p>
          <footer>${escapeHtml(group.from || "From a talk")}</footer>
        </blockquote>`
      )
    : "";
  const sits = parent
    ? deskSection("Sits on", `<div class="desk-group-links">${groupLink(parent)}</div>`, "The company this hat belongs to.")
    : kids.length
      ? deskSection(
          "Hats inside",
          `<div class="astral-report-grid desk-grid">${kids.map(groupItem).join("")}</div>`,
          "Job hats on this company. Open one for its own page."
        )
      : "";
  const research = moves.length
    ? deskSection(
        "Research next",
        `<div class="astral-report-grid desk-grid">${moves.map(moveCard).join("")}</div>`,
        "Moves in Research › Strategy that name this group."
      )
    : "";
  return `
    <div class="desk-group-pair">${need}${open}</div>
    ${heard}
    ${sits}
    ${research}
  `;
}

function groupJourney(group) {
  const stages = group.journey || [];
  return deskSection(
    "How they move through it",
    stages.length
      ? journeyPath(group)
      : `<p class="astral-muted">No journey yet. It appears when a talk names how they move through the product.</p>`,
    "Now is what exists today. Later is a sketch, not a promise."
  );
}

function groupNotes(group) {
  const notes = (group.notes || [])
    .map((note, index) => ({ ...note, index }))
    .sort((a, b) => String(b.added || "").localeCompare(String(a.added || "")) || b.index - a.index);
  const days = [];
  notes.forEach((note) => {
    const key = note.added || "";
    let day = days.find((item) => item.key === key);
    if (!day) {
      day = { key, notes: [] };
      days.push(day);
    }
    day.notes.push(note);
  });
  const form = `
    <form class="note-form" data-id="${escapeHtml(group.id)}">
      <label class="sr-only" for="note-${escapeHtml(group.id)}">Add a note</label>
      <input
        id="note-${escapeHtml(group.id)}"
        name="note"
        type="text"
        maxlength="200"
        placeholder="Add a note from a talk"
        autocomplete="off"
        required
      />
      <button type="submit" class="astral-btn">Add note</button>
    </form>
  `;
  const list = days.length
    ? days
        .map(
          (day) => `
        <section class="desk-note-day">
          <h4 class="desk-sub-head">${escapeHtml(
            day.key ? DAY_FMT.format(new Date(`${day.key}T12:00:00`)) : "Undated"
          )}</h4>
          <ul class="notes">${day.notes.map((note) => `<li>${escapeHtml(note.text)}</li>`).join("")}</ul>
        </section>`
        )
        .join("")
    : `<p class="astral-muted">No notes yet. Add the first one above.</p>`;
  return deskSection(
    "Notes from talks",
    `${form}<div class="desk-note-days">${list}</div>`,
    "Newest first, grouped by the day they were heard."
  );
}

function groupBackWhere() {
  const from = store?.groupReturn;
  if (from && from !== "groups" && sectionAllowed(from)) {
    const link = document.querySelector(`.desk-rail .side-link[data-section="${CSS.escape(from)}"] .desk-rail-label`);
    return link?.textContent || "the last page";
  }
  return "all user groups";
}

function groupPage(group) {
  const tab = activeGroupTab();
  const status = group.status || "draft";
  const counts = {
    overview: "",
    journey: ` (${(group.journey || []).length})`,
    notes: ` (${(group.notes || []).length})`,
  };
  const body =
    tab === "journey" ? groupJourney(group) : tab === "notes" ? groupNotes(group) : groupOverview(group);
  const parent = groupParentName(group);
  return `
    ${deskDetailHead({
      back: "group-back",
      where: groupBackWhere(),
      kicker: `<span class="desk-card-tags"><button type="button" class="astral-tag status desk-status-toggle" data-status="${escapeHtml(
        status
      )}" data-action="status" data-id="${escapeHtml(group.id)}" aria-label="Status: ${escapeHtml(
        STATUS_LABEL[status] || "Draft"
      )}. Change status">${escapeHtml(STATUS_LABEL[status] || "Draft")}</button>${
        parent
          ? `<span class="astral-muted">A hat on ${escapeHtml(parent.charAt(0).toLowerCase() + parent.slice(1))}</span>`
          : ""
      }</span>`,
      title: group.name,
      mark: groupMark(group, "lg"),
      lead: group.who || "",
    })}
    <div class="desk-tabs-host">${protoTabs(
      GROUP_TABS.map((item) => ({ id: item.id, name: `${item.name}${counts[item.id]}` })),
      tab,
      "data-group-tab",
      "Group pages"
    )}</div>
    ${body}
  `;
}

let groupListScroll = null;

function deskScroller() {
  const stage = document.querySelector(".stage");
  return stage && stage.scrollHeight > stage.clientHeight ? stage : document.scrollingElement;
}

function openGroup(id) {
  const group = (board().groups || []).find((item) => item.id === id);
  if (!group) return;
  const scroller = deskScroller();
  if (store.activeSection !== "groups") store.groupReturn = store.activeSection;
  else if (!store.activeGroup) store.groupReturn = "";
  if (!store.activeGroup) groupListScroll = { section: store.activeSection, top: scroller?.scrollTop || 0 };
  store.activeSection = "groups";
  store.activeGroup = id;
  store.groupTab = "overview";
  render();
  persistChrome();
  if (scroller) scroller.scrollTop = 0;
}

function closeGroup() {
  const from = store.groupReturn;
  store.activeGroup = "";
  store.groupReturn = "";
  if (from && from !== "groups" && sectionAllowed(from)) store.activeSection = from;
  render();
  persistChrome();
  const scroller = deskScroller();
  const back = groupListScroll && groupListScroll.section === store.activeSection ? groupListScroll.top : 0;
  groupListScroll = null;
  if (scroller) scroller.scrollTop = back;
}

function accessItem(item, scope) {
  return deskCard({
    open: { "data-open": "tool", "data-id": item.id, "data-scope": scope },
    lead: deskAvatar(item.name),
    title: item.name,
    body: escapeHtml(cardLine(item, item.have) || (scope === "team" ? "This team" : "Company")),
  });
}

function personItem(person) {
  return deskCard({
    open: { "data-open": "person", "data-id": person.id },
    lead: deskAvatar(person.name),
    title: person.name,
    body: escapeHtml(person.helps || "Can restore access"),
  });
}

function tokenMark(token) {
  const color = resolvedColor(token);
  if (token.type === "color" || color) {
    const empty = color ? "" : " is-empty";
    const style = color ? ` style="background:${escapeHtml(color)}"` : "";
    return `<span class="token-swatch${empty}"${style} aria-hidden="true"></span>`;
  }
  const value = resolvedValue(token);
  return `<span class="token-measure" aria-hidden="true">${escapeHtml(
    value || "—"
  )}</span>`;
}

function tokenItem(token) {
  const shown = token.alias
    ? token.alias
    : resolvedValue(token) || "Waiting";
  return `
    <button
      type="button"
      class="token-card"
      data-open="token"
      data-id="${escapeHtml(token.id)}"
      aria-haspopup="dialog"
    >
      ${tokenMark(token)}
      <span class="card-copy">
        <span class="card-title">${escapeHtml(token.name)}</span>
        <span class="card-line">${escapeHtml(shown)}</span>
        <span class="token-path">${escapeHtml(token.figma)}</span>
      </span>
    </button>
  `;
}

function tokenRow(token) {
  const shown = token.alias
    ? `{${token.alias}}`
    : resolvedValue(token) || "Waiting";
  return `
    <tr>
      <td>
        <button
          type="button"
          class="token-name"
          data-open="token"
          data-id="${escapeHtml(token.id)}"
        >${escapeHtml(token.name)}</button>
      </td>
      <td><code>${escapeHtml(tokenCssVar(token))}</code></td>
      <td><code>${escapeHtml(tokenTheme(token))}</code></td>
      <td><code>${escapeHtml(shown)}</code></td>
      <td class="token-swatch-cell">${tokenMark(token)}</td>
    </tr>
  `;
}

function tokenTable(items) {
  return `
    <div class="astral-table-wrap token-table-wrap">
      <table class="astral-table token-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>CSS</th>
            <th>React theme</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>${items.map(tokenRow).join("")}</tbody>
      </table>
    </div>
  `;
}

function stylePreview(style) {
  const family = resolvedValue(tokenById(style.fontFamily));
  const size = resolvedValue(tokenById(style.fontSize));
  const weight = resolvedValue(tokenById(style.fontWeight));
  const line = resolvedValue(tokenById(style.lineHeight));
  const track = resolvedValue(tokenById(style.letterSpacing));
  const bits = [
    family ? `font-family:${family}` : "",
    size ? `font-size:${size}` : "",
    weight ? `font-weight:${weight}` : "",
    line ? `line-height:${line}` : "",
    track ? `letter-spacing:${track}` : "",
  ].filter(Boolean);
  return bits.length ? ` style="${escapeHtml(bits.join(";"))}"` : "";
}

function styleItem(style) {
  return `
    <article class="astral-card desk-card is-link desk-style-card">
      <div class="astral-card-head">
        <h3><button type="button" class="desk-card-open" data-open="textstyle" data-id="${escapeHtml(
          style.id
        )}" aria-haspopup="dialog"><span class="style-sample"${stylePreview(style)}>${escapeHtml(
          style.name
        )}</span></button></h3>
      </div>
      <p>${escapeHtml(`${style.group || "Type"} · ${style.figma || style.name}`)}</p>
    </article>
  `;
}

function componentPath(item) {
  return item.figma?.componentKey
    ? `${item.figma.libraryName || "IMSERV Design System"} · ${item.figma.name || item.name}`
    : item.file || "";
}

function componentItem(item) {
  return deskCard({
    open: { "data-library-component": item.id },
    title: item.react || item.name,
    body: escapeHtml(cardLine(item, item.summary) || "Waits until tokens are firm."),
    foot: `<span class="token-path">${escapeHtml(componentPath(item))}</span>`,
  });
}

function componentRow(item) {
  const family = COMPONENT_FAMILIES.find((fam) => fam.id === item.family);
  return deskRow({
    open: { "data-library-component": item.id },
    title: item.react || item.name,
    cells: [
      escapeHtml(family ? family.name : "Other"),
      `<span class="desk-cell-line">${escapeHtml(cardLine(item, item.summary))}</span>`,
    ],
  });
}

function componentFamilyId(item) {
  return COMPONENT_FAMILIES.some((fam) => fam.id === item.family) ? item.family : "other";
}

function activeComponentFamily(items) {
  const id = store?.componentFamily || "all";
  if (id === "all") return "all";
  return (items || []).some((item) => componentFamilyId(item) === id) ? id : "all";
}

function groupedComponents(items) {
  const known = new Set(COMPONENT_FAMILIES.map((item) => item.id));
  const groups = COMPONENT_FAMILIES.map((family) => [
    family,
    items.filter((item) => item.family === family.id),
  ]).filter(([, list]) => list.length);
  const other = items.filter((item) => !known.has(item.family));
  if (other.length) groups.push([{ id: "other", name: "Other" }, other]);
  return groups;
}

function foldSlug(value) {
  return (
    String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "group"
  );
}

function deskFoldChevron() {
  return `<svg class="desk-fold-chevron" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
}

function deskFoldBlock({ id, title, help, count, inner }) {
  const clipId = `library-fold-${foldSlug(id)}`;
  return `
    <section class="astral-card desk-fold token-group" data-library-fold="${escapeHtml(id)}">
      <button
        type="button"
        class="desk-fold-head"
        data-library-fold-head
        aria-expanded="false"
        aria-controls="${escapeHtml(clipId)}"
      >
        <span class="desk-fold-copy">
          <span class="desk-fold-title">${escapeHtml(title)}</span>
          ${help ? `<span class="section-help">${help}</span>` : ""}
        </span>
        <span class="desk-fold-meta">
          ${count ? `<span class="astral-tag">${escapeHtml(count)}</span>` : ""}
          ${deskFoldChevron()}
        </span>
      </button>
      <div class="desk-fold-clip" id="${escapeHtml(clipId)}" aria-hidden="true" inert>
        ${inner}
      </div>
    </section>
  `;
}

function libraryFoldOpen(ids) {
  const open = store.libraryFold;
  if (!ids.length) return "";
  if (!open || !ids.includes(open)) return "";
  return open;
}

function applyLibraryFolds() {
  const folds = [...(els.libraryList?.querySelectorAll("[data-library-fold]") || [])];
  if (!folds.length) return;
  const ids = folds.map((el) => el.dataset.libraryFold);
  const open = libraryFoldOpen(ids);
  folds.forEach((block) => {
    const on = block.dataset.libraryFold === open;
    block.classList.toggle("is-open", on);
    const head = block.querySelector("[data-library-fold-head]");
    if (head) head.setAttribute("aria-expanded", on ? "true" : "false");
    const clip = block.querySelector(":scope > .desk-fold-clip");
    if (!clip) return;
    clip.setAttribute("aria-hidden", on ? "false" : "true");
    clip.toggleAttribute("inert", !on);
  });
}

function setupCounts(groups) {
  const items = (groups || []).flatMap((group) => group.items || []);
  return {
    total: items.length,
    brand: items.filter((item) => item.status === "brand").length,
    waiting: items.filter((item) => item.status === "waiting").length,
    scaffold: items.filter((item) => item.status === "scaffold").length,
  };
}

function setupComponentId(item) {
  if ((item.status || "waiting") !== "brand") return "";
  const comps = teamSystem()?.components || [];
  const ids = new Set(comps.map((comp) => comp.id));
  if (item.component && ids.has(item.component)) return item.component;
  if (ids.has(item.id)) return item.id;
  return "";
}

function setupItem(item) {
  const status = TOKEN_STATUS[item.status] || "Waiting";
  const connected = setupComponentId(item);
  const inner = `
      <div class="setup-item-top">
        <span class="card-title">${escapeHtml(item.name)}</span>
        <span class="status" data-status="${escapeHtml(item.status || "waiting")}">${escapeHtml(
          status
        )}</span>
      </div>
      <p class="card-line">${escapeHtml(item.note || "")}</p>
  `;
  if (connected) {
    return `
    <li class="setup-item is-linked">
      <button type="button" class="setup-item-hit" data-library-component="${escapeHtml(
        connected
      )}">${inner}</button>
    </li>
  `;
  }
  return `
    <li class="setup-item">
      ${inner}
    </li>
  `;
}

function setupNeed(item) {
  return `
    <li class="setup-item">
      <div class="setup-item-top">
        <span class="card-title">${escapeHtml(item.name)}</span>
        <span class="status" data-status="waiting">Need</span>
      </div>
      <p class="card-line">${escapeHtml(item.note || "")}</p>
    </li>
  `;
}

function setupPage(sys) {
  const setup = sys.setup;
  if (!setup) return emptyCard("No setup map yet.");
  const ref = setup.reference || {};
  const groups = setup.groups || [];
  const needs = setup.needs || [];
  const counts = setupCounts(groups);
  const intro = deskSection(
    "Base Gallery depth",
    `
      <div class="desk-card-tags">
        ${deskTag(`${counts.brand} named`, "brand")}
        ${deskTag(`${counts.waiting} waiting`, "waiting")}
      </div>
      <p>${escapeHtml(ref.have || "")}</p>
      <p class="token-path">${escapeHtml(ref.fileUrl || "")}</p>
    `,
    setup.lead || ""
  );
  const needBlock = needs.length
    ? deskFoldBlock({
        id: "setup:needs",
        title: "Still needed",
        help: escapeHtml(
          "The Gallery file is in. These are the gaps that stop a full Astral library."
        ),
        count: String(needs.length),
        inner: `<ul class="setup-list">${needs.map(setupNeed).join("")}</ul>`,
      })
    : "";
  const boards = groups
    .map((group) => {
      const items = group.items || [];
      const named = items.filter((item) => item.status === "brand").length;
      return deskFoldBlock({
        id: `setup:${group.id || foldSlug(group.name)}`,
        title: group.name,
        help: escapeHtml(group.summary || ""),
        count: `${named} of ${items.length} named`,
        inner: `<ul class="setup-list">${items.map(setupItem).join("")}</ul>`,
      });
    })
    .join("");
  return `${intro}${needBlock}${boards}`;
}

function chipList(items, empty) {
  if (!items || !items.length) return `<p class="section-help">${escapeHtml(empty)}</p>`;
  return `<ul class="piece-row">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function componentPreview(item) {
  const vars = previewVars();
  const inner =
    typeof AstralUI !== "undefined" && AstralUI.preview
      ? AstralUI.preview(item.id)
      : "<p>No preview yet.</p>";
  return `
    <div class="ds-preview" style="${escapeHtml(vars)}">
      ${inner}
    </div>
  `;
}
function componentFigmaLine(item) {
  const fig = item.figma;
  if (!fig?.componentKey) {
    return `<p class="token-path">Live prototype. Figma key waits until this piece is published.</p>`;
  }
  const lib = fig.libraryName || "IMSERV Design System";
  const name = fig.name || item.name;
  return `<p class="token-path">${escapeHtml(lib)} · ${escapeHtml(name)} · ${escapeHtml(
    fig.componentKey
  )}</p>`;
}

function listBackButton(action, where) {
  return protoTextBtn(
    `${protoIconMark("prev")}<span>Back</span>`,
    `data-action="${escapeHtml(action)}" aria-label="Back to ${escapeHtml(where)}"`,
    { html: true, className: "text-back" }
  );
}

function componentPage(item) {
  const props = (item.props || [])
    .map(
      (prop) => `
        <tr>
          <td><code>${escapeHtml(prop.name)}</code></td>
          <td><code>${escapeHtml(prop.type)}</code></td>
          <td>${escapeHtml(prop.note || "")}</td>
        </tr>
      `
    )
    .join("");
  const tokens = (item.tokens || [])
    .map((id) => tokenById(id))
    .filter(Boolean);
  return `
    ${deskDetailHead({
      back: "library-back",
      where: "all components",
      kicker: `<p class="desk-kicker">${escapeHtml(item.file || "React")}</p>`,
      title: item.react || item.name,
      lead: item.summary || "",
      extra: componentFigmaLine(item),
    })}
    ${deskSection(
      "Preview",
      componentPreview(item),
      "Live prototype. Quiet outlines are 1px Infra Grey B. Focus is a 2px black edge."
    )}
    ${deskSection(
      "Use it",
      `<p>${escapeHtml(item.usage || "")}</p>
      <pre class="code"><code>${escapeHtml(item.snippet || "")}</code></pre>`
    )}
    ${deskSection(
      "Kinds and states",
      `<h4 class="desk-sub-head">Kinds</h4>
      ${chipList(item.variants, "No kinds yet.")}
      <h4 class="desk-sub-head">States</h4>
      ${chipList(item.states, "No states yet.")}`
    )}
    ${deskSection(
      "Props",
      `<div class="astral-table-wrap token-table-wrap">
        <table class="astral-table token-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Note</th></tr></thead>
          <tbody>${props || "<tr><td colspan='3'>None listed.</td></tr>"}</tbody>
        </table>
      </div>`
    )}
    ${deskSection("Tokens", tokens.length ? tokenTable(tokens) : emptyCard("No tokens named yet."))}
  `;
}

function brandDownload(src, label) {
  const name = String(src || "")
    .split("/")
    .filter(Boolean)
    .pop();
  const kind = String(name).toLowerCase().endsWith(".svg") ? "SVG" : "PNG";
  return `<a class="brand-download" href="${escapeHtml(src)}" download="${escapeHtml(
    name || "asset"
  )}">Download ${kind}</a>`;
}

function brandAssetFigure(item) {
  const key = `${item.src} ${item.label} ${item.frame || ""}`.toLowerCase();
  let frame = "";
  if (item.frame === "line") frame = " is-light is-line";
  else if (item.frame === "light") frame = " is-light";
  else if (item.frame === "cyan") frame = " is-cyan";
  else if (key.includes("on-white") || key.includes("on white")) frame = " is-light";
  else if (key.includes("on-cyan") || key.includes("on cyan")) frame = " is-cyan";
  return `
    <figure class="brand-asset">
      <div class="brand-asset-frame${frame}">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.label)}" />
      </div>
      <figcaption>
        <span>${escapeHtml(item.label)}</span>
        ${item.note ? `<span class="brand-note">${escapeHtml(item.note)}</span>` : ""}
        ${brandDownload(item.src, item.label)}
      </figcaption>
    </figure>
  `;
}

function brandPhotoFigure(item) {
  return `
    <figure class="brand-photo">
      <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.label)}" />
      <figcaption>
        <span>${escapeHtml(item.label)}</span>
        ${item.note ? `<span class="brand-note">${escapeHtml(item.note)}</span>` : ""}
        ${brandDownload(item.src, item.label)}
      </figcaption>
    </figure>
  `;
}

function brandSwatch(item) {
  const hex = String(item.hex || "").toUpperCase();
  const light = ["#FFFFFF", "#EFEFEF", "#DFDFDF", "#03F4E8"].includes(hex);
  return `
    <div class="brand-swatch">
      <span class="brand-swatch-chip${light ? " is-light" : ""}" style="background:${escapeHtml(
        hex
      )}"></span>
      <span class="brand-swatch-copy">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.group || "")}</span>
        <code>${escapeHtml(hex)}</code>
      </span>
    </div>
  `;
}

function brandPage(section, assets) {
  const notes = (section.notes || [])
    .map((note) => `<li>${escapeHtml(note)}</li>`)
    .join("");
  const id = section.id;
  let extras = "";
  if (id === "logo") {
    extras = `
      <h4 class="desk-sub-head">Wordmark</h4>
      <div class="brand-assets">${(assets.wordmarks || []).map(brandAssetFigure).join("")}</div>
      <h4 class="desk-sub-head">Logomark</h4>
      <div class="brand-assets">${(assets.logomarks || []).map(brandAssetFigure).join("")}</div>
    `;
  } else if (id === "colour") {
    extras = `
      <div class="brand-swatches">${(assets.swatches || []).map(brandSwatch).join("")}</div>
    `;
  } else if (id === "type") {
    extras = `
      <div class="brand-type">
        <p class="brand-type-display">Roobert Medium</p>
        <p class="brand-type-body">Body stays Medium and changes size, not weight.</p>
        <p class="brand-type-label">Semibold for small labels</p>
      </div>
    `;
  } else if (id === "imagery") {
    extras = `
      <div class="brand-photos">${(assets.photos || []).map(brandPhotoFigure).join("")}</div>
    `;
  } else if (id === "illustrations") {
    extras = `
      <div class="brand-assets is-line">${(assets.illustrations || [])
        .map(brandAssetFigure)
        .join("")}</div>
    `;
  } else if (id === "graphics") {
    extras = `
      <div class="brand-assets is-line">${(assets.graphics || [])
        .map(brandAssetFigure)
        .join("")}</div>
    `;
  } else if (id === "layouts") {
    const recipes = (assets.pages || [])
      .map(
        (item) => `
          <p class="brand-slide-line">
            <span>${escapeHtml(item.label)}${
              item.note ? ` · ${escapeHtml(item.note)}` : ""
            }</span>
            <a class="brand-download" href="/assets/brand/pages/?recipe=${encodeURIComponent(
              item.id
            )}" target="_blank" rel="noreferrer">Open</a>
          </p>
        `
      )
      .join("");
    extras = `
      <p><a class="brand-download" href="/assets/brand/pages/" target="_blank" rel="noreferrer">Open page maker</a></p>
      <div class="brand-photos">${(assets.layouts || []).map(brandPhotoFigure).join("")}</div>
      ${recipes ? `<div class="brand-slides">${recipes}</div>` : ""}
    `;
  } else if (id === "voice") {
    extras = `
      <ul class="brand-voice">
        <li>Direct, clear, uncomplicated</li>
        <li>Proactive and problem-solving</li>
        <li>Grounded in data and know-how</li>
        <li>Human, with an edge</li>
      </ul>
    `;
  } else if (id === "overview") {
    extras = `
      <dl class="fact-grid">
        ${factRow("Tagline", "From Metering To Data Intelligence")}
        ${factRow(
          "Values",
          "We Solve the Impossible. Fast Real-World Innovation. Trust Built on People and Proof. Proactive Always."
        )}
        ${factRow("Approvals", "Adrian Cox")}
      </dl>
    `;
  }
  const slides = (assets.slides || []).filter((item) => item.section === id);
  const slideBlock = slides.length
    ? `<div class="brand-slides">${slides
        .map(
          (item) => `
            <p class="brand-slide-line">
              <span>${escapeHtml(item.label)}</span>
              ${brandDownload(item.src, item.label)}
            </p>
          `
        )
        .join("")}</div>`
    : "";
  return `
    <article class="astral-card desk-block brand-article" id="brand-${escapeHtml(id)}">
      <div class="desk-block-head">
        ${section.summary ? `<p class="desk-kicker">${escapeHtml(section.summary)}</p>` : ""}
        <h3>${escapeHtml(section.title)}</h3>
      </div>
      <p>${escapeHtml(
        section.short ||
          section.body ||
          "This waits on the guidelines pack. Do not invent a look before it arrives."
      )}</p>
      ${extras}
      ${slideBlock}
      ${notes ? `<ul class="notes">${notes}</ul>` : ""}
    </article>
  `;
}

function activeBrandSection(sections) {
  const id = store?.activeBrandSection;
  if ((sections || []).some((item) => item.id === id)) return id;
  return (sections && sections[0] && sections[0].id) || "overview";
}

function brandSourceItem(item) {
  return deskCard({
    open: { "data-open": "brand-source", "data-id": item.id },
    lead: deskAvatar(item.name),
    title: item.name,
    body: escapeHtml(cardLine(item, item.have) || "Source"),
  });
}

// The card line is what to say, or the first sentence of the note. The full note stays in the dialog.
function languageLine(item) {
  if (item.say && item.say !== item.name) return item.say;
  const note = String(item.note || "").trim();
  return note.match(/^.*?[.!?](?=\s|$)/)?.[0] || note || "Waiting";
}

function languageItem(item) {
  const status = item.status || "waiting";
  return deskCard({
    open: { "data-open": "language", "data-id": item.id },
    title: item.name,
    tags: deskTag(STATUS_LABEL[status] || "Waiting", status),
    body: escapeHtml(cardLine(item, languageLine(item))),
  });
}

function languageRow(item) {
  const status = item.status || "waiting";
  return deskRow({
    open: { "data-open": "language", "data-id": item.id },
    title: item.name,
    cells: [
      deskTag(STATUS_LABEL[status] || "Waiting", status),
      `<span class="desk-cell-line">${escapeHtml(cardLine(item, languageLine(item)))}</span>`,
    ],
  });
}

function patternItem(item) {
  const status = item.status || "waiting";
  const uses = (item.uses || []).length;
  return deskCard({
    open: { "data-pattern": item.id },
    title: item.name,
    tags: deskTag(STATUS_LABEL[status] || "Waiting", status),
    body: escapeHtml(cardLine(item, item.summary)),
    foot: `<span class="astral-muted">${escapeHtml(
      uses === 1 ? "Uses 1 piece" : `Uses ${uses} pieces`
    )}</span>`,
  });
}

function patternRow(item) {
  const status = item.status || "waiting";
  return deskRow({
    open: { "data-pattern": item.id },
    title: item.name,
    cells: [
      deskTag(STATUS_LABEL[status] || "Waiting", status),
      `<span class="desk-cell-line">${escapeHtml(cardLine(item, item.summary))}</span>`,
    ],
  });
}

function patternPage(item) {
  const later = (item.later || "").trim();
  const laterBlock = later
    ? `<div class="journey-later">
         <p class="field-label">Later</p>
         <p class="suggest">${escapeHtml(later)}</p>
       </div>`
    : `<div class="journey-later is-empty">
         <p class="field-label">Later</p>
         <p>Not sketched yet.</p>
       </div>`;
  const uses = (item.uses || [])
    .map((id) =>
      protoGhost(componentName(id), `data-action="open-component" data-id="${escapeHtml(id)}"`)
    )
    .join("");
  const status = item.status || "waiting";
  return `
    ${deskDetailHead({
      back: "pattern-back",
      where: "all patterns",
      kicker: deskTag(STATUS_LABEL[status] || "Waiting", status),
      title: item.name,
      lead: item.summary || "",
    })}
    ${deskSection(
      "Now and later",
      `<div class="desk-now-later">
        <div class="journey-now">
          <p class="field-label">Now</p>
          <p>${escapeHtml(item.now || "Not known yet.")}</p>
        </div>
        ${laterBlock}
      </div>`
    )}
    ${deskSection(
      "Uses",
      `${
        uses
          ? `<div class="pattern-uses">${uses}</div>`
          : `<p class="astral-muted">No pieces named yet.</p>`
      }
      ${item.note ? `<p class="astral-muted">${escapeHtml(item.note)}</p>` : ""}`
    )}
  `;
}

const SKILL_FOLDS = ["desk", "yours"];

function skillItems() {
  return (skillsCatalog.groups || []).flatMap((group) =>
    (group.items || []).map((item) => ({ ...item, group: group.id, groupName: group.name }))
  );
}

function skillById(id) {
  return skillItems().find((item) => item.id === id) || null;
}

function skillName(id) {
  return skillById(id)?.name || id;
}

function skillBackButton() {
  return listBackButton("skill-back", "all skills");
}

function skillUseCard(item) {
  const skills = (item.uses || []).map((id) =>
    protoGhost(skillName(id), `data-action="open-skill" data-id="${escapeHtml(id)}"`)
  );
  const library = (item.library || []).map((id) =>
    protoGhost(componentName(id), `data-action="open-component" data-id="${escapeHtml(id)}"`)
  );
  const chips = [...skills, ...library].join("");
  if (!chips) return "";
  return deskSection("Uses", `<div class="pattern-uses">${chips}</div>`);
}

function skillItem(item) {
  const status = item.status || "waiting";
  const how = (item.how || []).length;
  return deskCard({
    open: { "data-skill": item.id },
    title: item.name,
    tags: deskTag(STATUS_LABEL[status] || "Waiting", status),
    body: escapeHtml(cardLine(item, item.summary)),
    foot: `<span class="astral-muted">${escapeHtml(item.groupName || "")}${
      how ? ` · ${how} ${how === 1 ? "step" : "steps"}` : ""
    }</span>`,
  });
}

function skillRow(item) {
  const status = item.status || "waiting";
  return deskRow({
    open: { "data-skill": item.id },
    title: item.name,
    cells: [
      escapeHtml(item.groupName || ""),
      deskTag(STATUS_LABEL[status] || "Waiting", status),
      `<span class="desk-cell-line">${escapeHtml(cardLine(item, item.summary))}</span>`,
    ],
  });
}

function skillPage(item) {
  const how = (item.how || [])
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join("");
  const status = item.status || "waiting";
  const invoke = item.invoke
    ? `<div class="group-block">
         <p class="field-label">Use</p>
         <p>${escapeHtml(item.invoke)}</p>
       </div>`
    : "";
  const when = item.when
    ? `<div class="group-block">
         <p class="field-label">When</p>
         <p>${escapeHtml(item.when)}</p>
       </div>`
    : "";
  const where = item.where
    ? `<p class="token-path">${escapeHtml(item.where)}</p>`
    : "";
  return `
    ${deskDetailHead({
      back: "skill-back",
      where: "all skills",
      kicker: deskTag(STATUS_LABEL[status] || "Waiting", status),
      title: item.name,
      lead: item.summary || "",
    })}
    ${deskSection(
      "How it runs",
      `${invoke}
      ${when}
      <div class="group-block">
        <p class="field-label">Steps</p>
        ${how ? `<ol class="notes">${how}</ol>` : `<p>Not written yet.</p>`}
      </div>
      ${where}
      ${item.note ? `<p class="astral-muted">${escapeHtml(item.note)}</p>` : ""}`
    )}
    ${skillUseCard(item)}
  `;
}

function skillFoldId() {
  const raw = store?.skillFold;
  return SKILL_FOLDS.includes(raw) ? raw : "";
}

function applySkillFolds() {
  const open = skillFoldId();
  document.querySelectorAll("[data-skill-fold]").forEach((block) => {
    const on = block.dataset.skillFold === open;
    block.classList.toggle("is-open", on);
    const head = block.querySelector("[data-skill-fold-head]");
    if (head) head.setAttribute("aria-expanded", on ? "true" : "false");
    const clip = block.querySelector(":scope > .desk-fold-clip");
    if (!clip) return;
    clip.setAttribute("aria-hidden", on ? "false" : "true");
    clip.toggleAttribute("inert", !on);
  });
}

function resourceKinds() {
  return resourcesCatalog.kinds || [];
}

function resourceItems() {
  return resourceKinds().flatMap((kind) =>
    (kind.items || []).map((item) => ({
      ...item,
      kind: kind.id,
      kindSingle: kind.single || kind.name,
    }))
  );
}

function resourceById(id) {
  return resourceItems().find((item) => item.id === id) || null;
}

function resourceTheme(item) {
  return (
    (resourcesCatalog.themes || []).find((theme) => theme.id === item?.theme) || {
      name: "",
      icon: "book",
      hue: "graphite",
    }
  );
}

function resourceMark(item, size) {
  const theme = resourceTheme(item);
  return `<span class="astral-avatar desk-avatar desk-group-mark${size ? ` is-${size}` : ""}" data-hue="${escapeHtml(
    theme.hue || "graphite"
  )}" aria-hidden="true">${deskIconMark(theme.icon || "book")}</span>`;
}

function activeResourceKind() {
  const id = store?.resourceKind || "all";
  return resourceKinds().some((kind) => kind.id === id && (kind.items || []).length) ? id : "all";
}

function resourceItem(item) {
  const theme = resourceTheme(item);
  return deskCard({
    open: { "data-resource": item.id },
    lead: resourceMark(item),
    title: item.name,
    body: escapeHtml(cardLine(item, item.summary)),
    foot: `<span class="astral-muted">${escapeHtml(
      [item.kindSingle, theme.name].filter(Boolean).join(" \u00b7 ")
    )}</span>`,
  });
}

function resourceRow(item) {
  return deskRow({
    open: { "data-resource": item.id },
    mark: resourceMark(item, "sm"),
    title: item.name,
    cells: [
      escapeHtml(item.kindSingle || ""),
      escapeHtml(resourceTheme(item).name || ""),
      `<span class="desk-cell-line">${escapeHtml(cardLine(item, item.summary))}</span>`,
    ],
  });
}

function resourceStep(item, dir) {
  if (!item) return "<span></span>";
  const label = dir === "next" ? "Next" : "Previous";
  return `
    <button type="button" class="desk-law-step${dir === "next" ? " is-next" : ""}" data-resource="${escapeHtml(item.id)}">
      ${dir === "next" ? "" : protoIconMark("prev")}
      <span class="desk-law-step-text">
        <span class="astral-muted">${label}</span>
        <strong>${escapeHtml(item.name)}</strong>
      </span>
      ${dir === "next" ? protoIconMark("next") : ""}
    </button>
  `;
}

function resourcePage(item) {
  const theme = resourceTheme(item);
  const siblings = resourceItems().filter((entry) => entry.kind === item.kind);
  const at = siblings.findIndex((entry) => entry.id === item.id);
  const related = (item.related || []).map(resourceById).filter(Boolean);
  const takeaways = (item.takeaways || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const reading = (item.reading || [])
    .map(
      (link) => `
      <li>
        <a class="desk-reading-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">
          <span class="desk-reading-title">${escapeHtml(link.title)}</span>
          <span class="astral-muted">${escapeHtml(link.by || "")}</span>
        </a>
      </li>`
    )
    .join("");
  const ask = item.ask
    ? deskSection(
        "Ask in a review",
        `<p>${escapeHtml(item.ask)}</p>`,
        "A question to bring to IMSERV design reviews."
      ).replace('class="astral-card desk-block"', 'class="astral-card desk-block is-ask"')
    : "";
  return `
    ${deskDetailHead({
      back: "resource-back",
      where: "all resources",
      kicker: `<span class="desk-card-tags"><span class="astral-tag">${escapeHtml(
        item.kindSingle || "Resource"
      )}</span>${theme.name ? `<span class="astral-muted">${escapeHtml(theme.name)}</span>` : ""}</span>`,
      title: item.name,
      mark: resourceMark(item, "lg"),
    })}
    <section class="astral-card desk-law-poster" data-hue="${escapeHtml(theme.hue || "graphite")}">
      <span class="desk-law-poster-mark" aria-hidden="true">${deskIconMark(theme.icon || "book")}</span>
      <p class="desk-law-statement">${escapeHtml(item.summary || "")}</p>
    </section>
    <div class="desk-group-pair">
      ${deskSection("Takeaways", takeaways ? `<ol class="desk-law-takeaways">${takeaways}</ol>` : "<p>Not written yet.</p>")}
      ${deskSection(
        "Origins",
        `<p>${escapeHtml(item.origins || "Not written yet.")}</p>${
          item.source
            ? `<p class="desk-law-source"><span class="field-label">Source</span><span>${escapeHtml(item.source)}</span></p>`
            : ""
        }`
      )}
    </div>
    ${ask}
    ${reading ? deskSection("Further reading", `<ul class="desk-reading">${reading}</ul>`, "Opens in a new tab.") : ""}
    ${
      related.length
        ? deskSection("Related", `<div class="astral-report-grid desk-grid">${related.map(resourceItem).join("")}</div>`)
        : ""
    }
    <nav class="desk-law-pager" aria-label="More ${escapeHtml((item.kindSingle || "resource").toLowerCase())}s">
      ${resourceStep(at > 0 ? siblings[at - 1] : null, "prev")}
      ${resourceStep(at >= 0 && at < siblings.length - 1 ? siblings[at + 1] : null, "next")}
    </nav>
  `;
}

let resourceListScroll = null;

function openResource(id) {
  if (!resourceById(id)) return;
  const scroller = deskScroller();
  if (!store.activeResource) resourceListScroll = scroller?.scrollTop || 0;
  store.activeSection = "resources";
  store.activeResource = id;
  render();
  persistChrome();
  if (scroller) scroller.scrollTop = 0;
}

function closeResource() {
  store.activeResource = "";
  render();
  persistChrome();
  const scroller = deskScroller();
  if (scroller) scroller.scrollTop = resourceListScroll || 0;
  resourceListScroll = null;
}

function onResourceNav(event) {
  if (event.target.closest("[data-action='resource-back']")) {
    closeResource();
    return;
  }
  const kind = event.target.closest("[data-resource-kind]");
  if (kind) {
    store.resourceKind = kind.dataset.resourceKind;
    render();
    persistChrome();
    deskRefocus(`[data-resource-kind="${CSS.escape(kind.dataset.resourceKind)}"]`);
    return;
  }
  const card = event.target.closest("[data-resource]");
  if (card) openResource(card.dataset.resource);
}

function renderResources() {
  if (!els.resourcesLead || !els.resourcesList) return;
  const kinds = resourceKinds();
  const items = resourceItems();
  const open = items.find((item) => item.id === store.activeResource) || null;
  if (!open) store.activeResource = "";
  els.resourcesLead.textContent = resourcesCatalog.lead || "";
  if (els.resourcesCount) {
    els.resourcesCount.textContent = items.length === 1 ? "1 resource" : `${items.length} resources`;
  }
  setPanelDetail("resources", Boolean(open));
  if (open) {
    els.resourcesList.innerHTML = resourcePage(open);
  } else {
    const kind = activeResourceKind();
    const help = kinds.find((entry) => entry.id === kind)?.help || "";
    const shown = items
      .filter((item) => kind === "all" || item.kind === kind)
      .filter((item) =>
        deskMatch("resources", item.name, item.summary, item.also, item.kindSingle, resourceTheme(item).name)
      );
    els.resourcesList.innerHTML = `
      ${deskStats(
        [
          { id: "all", name: "All resources", count: items.length },
          ...kinds.map((entry) => ({
            id: entry.id,
            name: entry.name,
            count: (entry.items || []).length,
            disabled: !(entry.items || []).length,
          })),
        ],
        kind,
        "data-resource-kind",
        "Resource type"
      )}
      ${help ? `<p class="astral-muted desk-sheet-help">${escapeHtml(help)}</p>` : ""}
      ${deskSheet("resources", {
        placeholder: "Search resources",
        label: "Search resources",
        cards: shown.map(resourceItem),
        cols: ["Resource", "Type", "Theme", "Summary"],
        rows: shown.map(resourceRow),
        empty: items.length ? "Nothing of this type yet." : "No resources yet.",
      })}
    `;
  }
  setNavCount(els.navResourcesCount, items.length);
}

function roadmapItems() {
  return (roadmapCatalog.releases || []).flatMap((release) =>
    (release.quarters || []).flatMap((quarter) =>
      (quarter.items || []).map((item) => ({ ...item, release: release.id, quarter: quarter.name }))
    )
  );
}

function roadmapKind(id) {
  return (roadmapCatalog.kinds || []).find((kind) => kind.id === id) || { id, name: "", legend: "" };
}

function activeRoadmapRelease() {
  const id = store?.roadmapRelease || "all";
  return (roadmapCatalog.releases || []).some((release) => release.id === id) ? id : "all";
}

function roadmapMatch(item) {
  return deskMatch("roadmap", item.name, item.summary, item.quarter, item.release, roadmapKind(item.kind).name);
}

function roadmapKindTag(item) {
  return `<span class="roadmap-kind" data-kind="${escapeHtml(item.kind)}">${escapeHtml(
    roadmapKind(item.kind).name
  )}</span>`;
}

function roadmapCard(item) {
  return `
    <li class="astral-card roadmap-card" data-kind="${escapeHtml(item.kind)}">
      <h5>${escapeHtml(item.name)}</h5>
      <p>${escapeHtml(cardLine(item, item.summary))}</p>
      ${roadmapKindTag(item)}
    </li>
  `;
}

function roadmapRow(item) {
  return deskRow({
    title: item.name,
    cells: [
      escapeHtml(item.release),
      escapeHtml(item.quarter),
      roadmapKindTag(item),
      `<span class="desk-cell-line">${escapeHtml(cardLine(item, item.summary))}</span>`,
    ],
  });
}

function roadmapLegend() {
  return `
    <ul class="roadmap-legend" aria-label="Key">
      ${(roadmapCatalog.kinds || [])
        .map(
          (kind) =>
            `<li><span class="roadmap-swatch" data-kind="${escapeHtml(kind.id)}" aria-hidden="true"></span>${escapeHtml(
              kind.legend || kind.name
            )}</li>`
        )
        .join("")}
    </ul>
  `;
}

function roadmapBoard(releases) {
  const lanes = releases
    .map((release) => {
      const quarters = (release.quarters || [])
        .map((quarter) => ({
          ...quarter,
          shown: (quarter.items || [])
            .map((item) => ({ ...item, release: release.id, quarter: quarter.name }))
            .filter(roadmapMatch),
        }))
        .filter((quarter) => quarter.shown.length);
      if (!quarters.length) return "";
      const head = `roadmap-${escapeHtml(release.id)}`;
      return `
        <section class="roadmap-release" aria-labelledby="${head}">
          <div class="roadmap-release-head">
            <h3 id="${head}">${escapeHtml(`${release.id}. ${release.name}`)}</h3>
            <p class="astral-muted">${escapeHtml(release.when)}</p>
          </div>
          <div class="roadmap-quarters">
            ${quarters
              .map((quarter) => {
                const n = quarter.shown.length;
                return `
              <div class="roadmap-quarter">
                <h4>${escapeHtml(quarter.name)}<span class="roadmap-count">${n}<span class="sr-only"> ${
                  n === 1 ? "capability" : "capabilities"
                }</span></span></h4>
                <ul class="roadmap-cards">${quarter.shown.map(roadmapCard).join("")}</ul>
              </div>`;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
  return `<div class="roadmap-board" role="region" aria-label="Roadmap board" tabindex="0">${lanes}</div>`;
}

function onRoadmapNav(event) {
  const release = event.target.closest("[data-roadmap-release]");
  if (!release) return;
  store.roadmapRelease = release.dataset.roadmapRelease;
  render();
  persistChrome();
  deskRefocus(`[data-roadmap-release="${CSS.escape(release.dataset.roadmapRelease)}"]`);
}

function renderRoadmap() {
  if (!els.roadmapLead || !els.roadmapList) return;
  const releases = roadmapCatalog.releases || [];
  const items = roadmapItems();
  const active = activeRoadmapRelease();
  const picked = active === "all" ? releases : releases.filter((release) => release.id === active);
  const current = releases.find((release) => release.id === active);
  const help = current ? `${current.when}. ${current.summary}` : roadmapCatalog.all || "";
  const shown = items.filter((item) => (active === "all" || item.release === active) && roadmapMatch(item));
  const list = deskView("roadmap") === "list";
  let inner = emptyCard(deskQuery("roadmap") ? "Nothing matches that search." : "Nothing on the roadmap yet.");
  if (shown.length) {
    inner = list
      ? deskTable(["Capability", "Release", "Quarter", "Kind", "Summary"], shown.map(roadmapRow))
      : `${roadmapLegend()}${roadmapBoard(picked)}`;
  }
  els.roadmapLead.textContent = roadmapCatalog.lead || "";
  if (els.roadmapCount) {
    els.roadmapCount.textContent = items.length === 1 ? "1 capability" : `${items.length} capabilities`;
  }
  els.roadmapList.innerHTML = `
    ${deskStats(
      [
        { id: "all", name: "All releases", count: items.length },
        ...releases.map((release) => {
          const count = items.filter((item) => item.release === release.id).length;
          return { id: release.id, name: release.id, count, disabled: !count };
        }),
      ],
      active,
      "data-roadmap-release",
      "Release"
    )}
    ${help ? `<p class="astral-muted desk-sheet-help">${escapeHtml(help)}</p>` : ""}
    <section class="astral-card astral-reports-sheet desk-sheet roadmap-sheet${list ? " is-list" : " is-cards"}">
      ${deskTools("roadmap", "Search the roadmap", "Search the roadmap")}
      ${inner}
    </section>
  `;
  setNavCount(els.navRoadmapCount, items.length);
}

function findTool(id, scope) {
  if (scope === "team") {
    return (board().access || []).find((item) => item.id === id) || null;
  }
  return (store.access.company || []).find((item) => item.id === id) || null;
}

function fillDetail() {
  if (!openDetail || !els.detailModal) return false;
  const { kind, id, scope } = openDetail;
  els.detailModal.dataset.wide = "false";

  if (kind === "person") {
    const person = (store.access.people || []).find((item) => item.id === id);
    if (!person) return false;
    els.detailKicker.textContent = "Can restore access";
    els.detailTitle.textContent = person.name;
    els.detailBody.innerHTML = `
      <dl class="fact-grid">
        ${factRow("They can help with", person.helps)}
        ${factRow("How to reach them", person.how)}
      </dl>
      ${removeButton("remove-person", `data-id="${escapeHtml(person.id)}"`)}
    `;
    return true;
  }

  if (kind === "tool") {
    const item = findTool(id, scope);
    if (!item) return false;
    els.detailKicker.textContent = scope === "team" ? "This team" : "Company";
    els.detailTitle.textContent = item.name;
    els.detailBody.innerHTML = `
      <dl class="fact-grid">
        ${factRow("What you have", item.have)}
        ${factRow("Who to ask", item.ask)}
        ${factRow("If you lose it", item.lost)}
      </dl>
      ${removeButton(
        "remove-access",
        `data-scope="${escapeHtml(scope)}" data-id="${escapeHtml(item.id)}"`
      )}
    `;
    return true;
  }

  if (kind === "know") {
    const card = (board().know || [])[Number(id)];
    if (!card) return false;
    els.detailKicker.textContent = "What to know";
    els.detailTitle.textContent = card.title;
    els.detailBody.innerHTML = `<p>${escapeHtml(card.body || "")}</p>`;
    return true;
  }

  if (kind === "task") {
    const found = findTask(id);
    if (!found) return false;
    const task = found.task;
    els.detailKicker.textContent = found.list === "done" ? "Done" : task.doing ? "Doing" : "To do list";
    els.detailTitle.textContent = task.title;
    const added = task.added
      ? DAY_FMT.format(new Date(`${task.added}T12:00:00`))
      : "";
    const doneOn = task.doneOn
      ? DAY_FMT.format(new Date(`${task.doneOn}T12:00:00`))
      : "";
    els.detailBody.innerHTML = `
      <dl class="fact-grid">
        ${factRow("Kind", kindName(taskKind(task)))}
        ${factRow("Project", task.project)}
        ${factRow("Note", task.note)}
        ${factRow("Added", added)}
        ${factRow("Finished", doneOn)}
      </dl>
    `;
    return true;
  }

  if (kind === "token") {
    const token = tokenById(id);
    if (!token) return false;
    els.detailKicker.textContent = token.layer === "semantic" ? "Semantic" : "Primitive";
    els.detailTitle.textContent = token.name;
    const resolved = resolvedValue(token);
    els.detailBody.innerHTML = `
      ${token.type === "color" || resolvedColor(token) ? tokenMark(token) : ""}
      <dl class="fact-grid">
        ${factRow("Group", token.group)}
        ${factRow("Type", token.type)}
        ${factRow("Figma", token.figma)}
        ${factRow("CSS", tokenCssVar(token))}
        ${factRow("React theme", tokenTheme(token))}
        ${factRow("Value", token.value)}
        ${factRow("Points at", token.alias)}
        ${factRow("Resolves to", token.alias ? resolved : "")}
        ${factRow("Status", tokenStatus(token))}
        ${factRow("Note", token.note)}
      </dl>
    `;
    return true;
  }

  if (kind === "textstyle") {
    const style = (teamSystem()?.styles?.text || []).find((item) => item.id === id);
    if (!style) return false;
    els.detailKicker.textContent = style.group || "Type";
    els.detailTitle.textContent = style.name;
    els.detailBody.innerHTML = `
      <p class="style-sample"${stylePreview(style)}>${escapeHtml(style.name)}</p>
      <dl class="fact-grid">
        ${factRow("Figma", style.figma)}
        ${factRow("Family", style.fontFamily)}
        ${factRow("Size", style.fontSize)}
        ${factRow("Weight", style.fontWeight)}
        ${factRow("Line height", style.lineHeight)}
        ${factRow("Tracking", style.letterSpacing)}
        ${factRow("Status", TOKEN_STATUS[style.status] || "Waiting")}
        ${factRow("Note", style.note)}
      </dl>
    `;
    return true;
  }

  if (kind === "component") {
    const item = (teamSystem()?.components || []).find((entry) => entry.id === id);
    if (!item) return false;
    els.detailKicker.textContent = item.file || "React";
    els.detailTitle.textContent = item.react || item.name;
    els.detailBody.innerHTML = `
      <p>${escapeHtml(item.summary || "")}</p>
      <p>${escapeHtml(item.usage || "")}</p>
      <pre class="code"><code>${escapeHtml(item.snippet || "")}</code></pre>
    `;
    return true;
  }

  if (kind === "brand") {
    const section = (teamSystem()?.branding?.sections || []).find(
      (item) => item.id === id
    );
    if (!section) return false;
    els.detailKicker.textContent = "Guidelines";
    els.detailTitle.textContent = section.title;
    const notes = (section.notes || [])
      .map((note) => `<li>${escapeHtml(note)}</li>`)
      .join("");
    const body = (section.body || "").trim();
    els.detailBody.innerHTML = `
      <p>${escapeHtml(section.summary || "")}</p>
      <p>${escapeHtml(
        body || "This waits on the guidelines pack. Do not invent a look before it arrives."
      )}</p>
      ${notes ? `<ul class="notes">${notes}</ul>` : ""}
    `;
    return true;
  }

  if (kind === "brand-source") {
    const item = (teamSystem()?.branding?.sources || []).find(
      (entry) => entry.id === id
    );
    if (!item) return false;
    els.detailKicker.textContent = "Source";
    els.detailTitle.textContent = item.name;
    els.detailBody.innerHTML = `
      <dl class="fact-grid">
        ${factRow("What you have", item.have)}
        ${factRow("Who to ask", item.ask)}
      </dl>
    `;
    return true;
  }

  if (kind === "language") {
    const item = languageEntries().find((entry) => entry.id === id);
    if (!item) return false;
    const tab = LANGUAGE_TABS.find((entry) => entry.id === item.kind);
    els.detailKicker.textContent = tab ? tab.name : "Language";
    els.detailTitle.textContent = item.name;
    els.detailBody.innerHTML = `
      ${item.say ? `<p class="heard">${escapeHtml(item.say)}</p>` : ""}
      <dl class="fact-grid">
        ${factRow("Status", STATUS_LABEL[item.status] || "Waiting")}
        ${factRow("Avoid", item.avoid)}
        ${factRow("Note", item.note)}
        ${factRow("From", item.from)}
      </dl>
    `;
    return true;
  }

  if (kind === "insight") {
    const item = findInsight(id);
    if (!item) return false;
    const severity = insightSeverity(item);
    els.detailKicker.textContent = researchSeverityName(severity);
    els.detailTitle.textContent = item.title || "";
    els.detailBody.innerHTML = `
      ${scoreField(item)}
      <dl class="fact-grid">
        ${factRow("Problem", item.problem)}
        ${factRow("Where", item.where)}
        ${factRow("Why it was raised", item.why)}
        ${factRow("Example", item.example)}
        ${factRow("What follows", item.note)}
        ${factRow("Source", insightSource(item)?.long)}
      </dl>
    `;
    return true;
  }

  if (kind === "kei") {
    const item = findKei(id);
    if (!item) return false;
    const maturity = keiMaturity(item);
    const change = keiChange(item);
    const rounds = keiRounds(item);
    els.detailKicker.textContent = maturity.name;
    els.detailTitle.textContent = item.name || "";
    const roundRows = rounds
      .map(
        (round) => `
          <li>
            ${escapeHtml(round.label || round.date || "Round")}
            ${escapeHtml(keiFormat(round.value))}${
              item.unit ? ` ${escapeHtml(item.unit)}` : ""
            }
            ${round.sample ? ` · ${escapeHtml(String(round.sample))} people` : ""}
            ${round.method ? ` · ${escapeHtml(round.method)}` : ""}
            ${round.directional ? " · Directional only" : ""}
          </li>
        `
      )
      .join("");
    els.detailBody.innerHTML = `
      <p>${escapeHtml(item.question || "")}</p>
      ${keiLineChart(rounds, {
        width: 560,
        height: 180,
        red: keiGuide(item.red),
        target: keiGuide(item.target),
      })}
      <dl class="fact-grid">
        ${factRow("Feature", item.feature)}
        ${factRow("Area", item.area)}
        ${factRow("Scope", item.scope === "product" ? "Product-wide" : item.scope === "area" ? "Area" : "")}
        ${factRow("Role", keiRoleName(item))}
        ${factRow("Maturity", maturity.name)}
        ${factRow("Change", change.name)}
        ${factRow("Target", Number.isFinite(Number(item.target)) ? String(item.target) : "")}
        ${factRow("Red threshold", Number.isFinite(Number(item.red)) ? String(item.red) : "")}
        ${factRow("Note", item.note)}
        ${factRow("From", item.from)}
      </dl>
      ${
        roundRows
          ? `<h3 class="detail-sub">Rounds</h3><ul class="notes">${roundRows}</ul>`
          : "<p>No measured rounds yet.</p>"
      }
    `;
    return true;
  }

  return false;
}

function showDetail(kind, id, scope) {
  openDetail = { kind, id, scope };
  if (!fillDetail()) {
    closeDetail();
    return;
  }
  if (!els.detailModal.open) els.detailModal.showModal();
}

function closeDetail() {
  openDetail = null;
  if (els.detailModal.open) els.detailModal.close();
}

function renderList(target, items, ordered) {
  target.innerHTML = (items || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  if (!items || !items.length) {
    target.innerHTML = `<li>${ordered ? "Nothing lined up yet." : "Nothing here yet."}</li>`;
  }
}

function renderNav() {
  const name = teamName(store.activeTeam);
  if (els.sideTeam) els.sideTeam.textContent = name;
  if (els.heroTeam) els.heroTeam.textContent = name;
  if (els.teamSelect) {
    els.teamSelect.innerHTML = TEAMS.map(
      (team) =>
        `<option value="${escapeHtml(team.id)}" ${
          team.id === store.activeTeam ? "selected" : ""
        }>${escapeHtml(team.name)}</option>`
    ).join("");
  }

  document.querySelectorAll(".side-link").forEach((link) => {
    const allowed = sectionAllowed(link.dataset.section);
    if (link.classList.contains("side-link")) link.hidden = !allowed;
    const on = allowed && link.dataset.section === store.activeSection;
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.querySelectorAll(".panel").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== store.activeSection;
  });

  const bar = document.getElementById("desk-bar-page");
  const current = document.querySelector(
    `.desk-rail .side-link[data-section="${CSS.escape(store.activeSection || "")}"]`
  );
  if (bar && current) {
    const label = current.querySelector(".desk-rail-label")?.textContent || "";
    bar.innerHTML = `${deskIconMark(DESK_SECTION_ICONS[store.activeSection] || "home")}<span>${escapeHtml(
      label
    )}</span>`;
  }
}

function deskShellIcons() {
  document.querySelectorAll(".desk-rail .side-link[data-icon]").forEach((link) => {
    if (link.querySelector("svg")) return;
    link.insertAdjacentHTML("afterbegin", deskIconMark(link.dataset.icon));
  });
  const menu = document.querySelector(".desk-menu");
  if (menu && !menu.querySelector("svg")) {
    menu.innerHTML = `${protoIconMark("menu")}<span class="sr-only">Menu</span>`;
  }
  const close = document.getElementById("detail-close");
  if (close && !close.querySelector("svg")) {
    close.innerHTML = `${protoIconMark("close")}<span class="sr-only">Close</span>`;
  }
}

function setDeskRail(open) {
  document.body.classList.toggle("is-desk-rail-open", Boolean(open));
  const menu = document.querySelector(".desk-menu");
  if (menu) menu.setAttribute("aria-expanded", open ? "true" : "false");
}

function setNavCount(el, value) {
  if (!el) return;
  el.textContent = value ? String(value) : "";
  el.hidden = !value;
}

function renderTodayTabs(today, done) {
  if (!els.todayTabs) return;
  const tab = activeTodayTab();
  const items = [
    ...TASK_KINDS.map((item) => ({
      id: item.id,
      name: item.name,
      count: tasksOfKind(today, item.id).length,
    })),
    { id: "done", name: "Done", count: (done || []).length },
  ];
  els.todayTabs.innerHTML = deskStats(items, tab, "data-kind", "Task kind");
  if (els.todaySheetTitle) {
    els.todaySheetTitle.textContent = tab === "done" ? "Done" : kindName(tab);
  }
}

function doneDaysHtml(done) {
  if (!done.length) {
    return emptyCard("Finished work will sit here so you can look back.");
  }
  const doneByDay = new Map();
  done.forEach((task) => {
    const key = task.doneOn || "Earlier";
    if (!doneByDay.has(key)) doneByDay.set(key, []);
    doneByDay.get(key).push(task);
  });
  return [...doneByDay.entries()]
    .map(([day, tasks]) => {
      const label =
        day === "Earlier" ? "Earlier" : DAY_FMT.format(new Date(`${day}T12:00:00`));
      return `
        <section class="done-day">
          <h3>${escapeHtml(label)}</h3>
          <ul>${tasks.map((task) => taskItem(task, true)).join("")}</ul>
        </section>
      `;
    })
    .join("");
}

function renderLibrary() {
  const sys = teamSystem();
  const tab = activeLibraryTab();
  setPanelDetail("library", false);
  if (els.libraryCopy) els.libraryCopy.hidden = !sys;
  if (!els.libraryLead || !els.libraryList) return;

  if (!sys) {
    els.libraryLead.textContent =
      "No UI library for this team yet. IMSERV holds Astral.";
    if (els.libraryTabs) els.libraryTabs.innerHTML = "";
    els.libraryList.innerHTML = emptyCard(
      `${teamName(store.activeTeam)} has no tokens in this desk yet.`
    );
    setNavCount(els.navLibraryCount, 0);
    return;
  }

  const waiting = (sys.tokens || []).filter((token) => token.status === "waiting").length;
  const stack = sys.stack?.framework || "React";
  const setupTotal = setupCounts(sys.setup?.groups || []).total;
  els.libraryLead.textContent = sys.setup?.lead
    ? sys.setup.lead
    : waiting
    ? `${sys.product} is a ${stack} library. Colour and type come from the IMSERV Brand Book. ${waiting} tokens still wait, mostly status colour the book did not name.`
    : `${sys.product} tokens sit in ${sys.figma?.primitiveCollection || "Primitives"} and ${sys.figma?.semanticCollection || "Semantic"}. Copy tokens when you want JSON for a Figma MCP later.`;

  const counts = {
    setup: setupTotal,
    primitives: (sys.tokens || []).filter((token) => token.layer === "primitive").length,
    semantic: (sys.tokens || []).filter((token) => token.layer === "semantic").length,
    styles: (sys.styles?.text || []).length,
    components: (sys.components || []).length,
  };

  if (els.libraryTabs) {
    els.libraryTabs.innerHTML = protoTabs(
      LIBRARY_TABS.map((item) => ({
        id: item.id,
        name: `${item.name} ${counts[item.id] || 0}`,
      })),
      tab,
      "data-library-tab",
      "Library"
    );
  }

  if (tab === "setup") {
    els.libraryList.innerHTML = setupPage(sys);
  } else if (tab === "styles") {
    const styles = sys.styles?.text || [];
    els.libraryList.innerHTML = styles.length
      ? `<div class="astral-report-grid desk-grid">${styles.map(styleItem).join("")}</div>`
      : emptyCard("No type styles yet.");
  } else if (tab === "components") {
    const items = sys.components || [];
    const open = items.find((item) => item.id === store.activeComponent);
    setPanelDetail("library", Boolean(open));
    if (open) {
      els.libraryList.innerHTML = componentPage(open);
    } else {
      const how = sys.stack
        ? deskSection(
            "React",
            `<p>${escapeHtml(sys.stack.handover || "")}</p>
             <p>${escapeHtml(sys.stack.tokens || "")}</p>
             <p class="token-path">${escapeHtml(sys.stack.file || "")}</p>`
          )
        : "";
      const family = activeComponentFamily(items);
      const famItems = groupedComponents(items).map(([fam, list]) => ({
        id: fam.id,
        name: fam.name,
        count: list.length,
      }));
      const stats = deskStats(
        [{ id: "all", name: "All pieces", count: items.length }, ...famItems],
        family,
        "data-component-family",
        "Component family"
      );
      const shown = items
        .filter((item) => family === "all" || componentFamilyId(item) === family)
        .filter((item) => deskMatch("components", item.name, item.react, item.summary));
      els.libraryList.innerHTML = items.length
        ? `${stats}${deskSheet("components", {
            placeholder: "Search components",
            label: "Search components",
            cards: shown.map(componentItem),
            cols: ["Component", "Family", "Summary"],
            rows: shown.map(componentRow),
            empty: "No pieces in this family.",
          })}${how}`
        : emptyCard("Components wait until tokens are firm.");
    }
  } else {
    const layer = libraryLayer(tab);
    const tokens = (sys.tokens || []).filter((token) => token.layer === layer);
    els.libraryList.innerHTML = groupedTokens(tokens)
      .map(([group, items]) =>
        deskFoldBlock({
          id: `${tab}:${foldSlug(group)}`,
          title: group,
          help: escapeHtml("CSS variables and theme paths match the Figma name."),
          count: items.length === 1 ? "1 token" : `${items.length} tokens`,
          inner: tokenTable(items),
        })
      )
      .join("");
  }

  setNavCount(els.navLibraryCount, (sys.tokens || []).length);
  applyLibraryFolds();
  libraryAfterRender();
}

function libraryAfterRender() {
  if (typeof protoSlideHost !== "function") return;
  const host = els.libraryList?.querySelector(".ds-preview .astral-tabs");
  if (host) protoSlideHost(host, "button.is-on", "library-tabs", true);
}

function renderBranding() {
  const sys = teamSystem();
  const branding = sys?.branding;
  if (!els.brandingLead || !els.brandingPage) return;

  if (!sys || !branding) {
    els.brandingLead.textContent = `No branding pack for ${teamName(
      store.activeTeam
    )} yet.`;
    if (els.brandingCount) els.brandingCount.textContent = "Waiting";
    if (els.brandingTabs) els.brandingTabs.innerHTML = "";
    els.brandingPage.innerHTML = emptyCard(
      "Send guidelines and this page will fill in."
    );
    if (els.brandingSources) {
      els.brandingSources.innerHTML = emptyCard("No sources named for this team.");
    }
    setNavCount(els.navBrandingCount, 0);
    return;
  }

  els.brandingLead.textContent = branding.lead || "";
  const sections = branding.sections || [];
  const filled = sections.filter((section) => (section.body || "").trim()).length;
  if (els.brandingCount) {
    els.brandingCount.textContent = filled
      ? `${filled} written`
      : "Waiting on the pack";
  }
  const current = activeBrandSection(sections);
  store.activeBrandSection = current;
  if (els.brandingTabs) {
    els.brandingTabs.innerHTML = protoTabs(
      sections.map((item) => ({ id: item.id, name: item.title })),
      current,
      "data-brand-tab",
      "Guideline sections"
    );
  }
  const open = sections.find((item) => item.id === current) || sections[0];
  els.brandingPage.innerHTML = open
    ? brandPage(open, branding.assets || {})
    : emptyCard("No guideline sections yet.");
  if (els.brandingSources) {
    els.brandingSources.innerHTML = (branding.sources || []).length
      ? branding.sources.map(brandSourceItem).join("")
      : emptyCard("No sources named yet.");
  }
  setNavCount(els.navBrandingCount, sections.length);
}

function renderLanguageTabs(entries) {
  if (!els.languageTabs) return;
  const kind = activeLanguageKind();
  els.languageTabs.innerHTML = deskStats(
    LANGUAGE_TABS.map((item) => ({
      id: item.id,
      name: item.name,
      count: entries.filter((entry) => entry.kind === item.id).length,
    })),
    kind,
    "data-language-tab",
    "Language kind"
  );
}

function renderLanguage() {
  const sys = teamSystem();
  const language = sys?.language;
  if (!els.languageLead || !els.languageList) return;

  if (!sys || !language) {
    els.languageLead.textContent = `No product language for ${teamName(
      store.activeTeam
    )} yet. IMSERV holds Astral.`;
    if (els.languageCount) els.languageCount.textContent = "Waiting";
    if (els.languageTabs) els.languageTabs.innerHTML = "";
    els.languageList.innerHTML = emptyCard(
      "Send talks or UAT notes and this page will fill in. Do not invent a line before it is named."
    );
    setNavCount(els.navLanguageCount, 0);
    return;
  }

  const entries = language.entries || [];
  const kind = activeLanguageKind();
  const shown = entries.filter((entry) => entry.kind === kind);
  els.languageLead.textContent = language.lead || "";
  if (els.languageCount) {
    els.languageCount.textContent =
      entries.length === 1 ? "1 line" : `${entries.length} lines`;
  }
  renderLanguageTabs(entries);
  const matched = shown.filter((item) =>
    deskMatch("language", item.name, item.say, item.note, item.avoid)
  );
  els.languageList.innerHTML = shown.length
    ? deskSheet("language", {
        placeholder: "Search language",
        label: "Search language",
        cards: matched.map(languageItem),
        cols: ["Line", "Status", "Say"],
        rows: matched.map(languageRow),
        empty: "Nothing in this tab yet.",
      })
    : emptyCard("Nothing in this tab yet. Waiting copy is better than a guess.");
  setNavCount(els.navLanguageCount, entries.length);
}

function researchDate(value) {
  const raw = String(value || "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  return new Date(`${raw}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// A study follows its task on Today: ticking the task done marks the study done.
function researchStudyState(item) {
  if (item?.template) return "template";
  const task = String(item?.task || "");
  if (task) {
    const current = board();
    if ((current.done || []).some((entry) => entry.id === task)) return "done";
    if ((current.today || []).some((entry) => entry.id === task)) {
      return item.status === "planned" ? "planned" : "doing";
    }
  }
  return RESEARCH_STUDY_STATUS[item?.status] && item.status !== "template" ? item.status : "doing";
}

function researchStudyName(id) {
  return RESEARCH_STUDY_STATES.find((item) => item.id === id)?.name || "Doing";
}

function researchStudyTag(item) {
  const id = researchStudyState(item);
  return deskTag(researchStudyName(id), RESEARCH_STUDY_STATUS[id]);
}

function researchActivity(item) {
  if (item?.template) return "template";
  const id = String(item?.activity || "");
  return RESEARCH_ACTIVITIES.some((entry) => entry.id === id) ? id : "discovery";
}

function researchActivityName(item) {
  return RESEARCH_ACTIVITIES.find((entry) => entry.id === researchActivity(item))?.name || "";
}

function activeResearchActivity() {
  const id = store?.researchActivity;
  const plans = researchBoard().plans || [];
  return plans.some((item) => researchActivity(item) === id) ? id : "all";
}

function studyInsights(item) {
  return (researchBoard().insights || [])
    .filter((entry) => entry.study === item.id)
    .sort((a, b) => insightScore(b) - insightScore(a));
}

function sortedStudies() {
  return [...(researchBoard().plans || [])].sort((a, b) => {
    const rank = RESEARCH_STUDY_RANK[researchStudyState(a)] - RESEARCH_STUDY_RANK[researchStudyState(b)];
    if (rank) return rank;
    return String(b.date || "").localeCompare(String(a.date || ""));
  });
}

function sortedReports() {
  return [...(researchBoard().reports || [])].sort((a, b) =>
    String(b.date || "").localeCompare(String(a.date || ""))
  );
}

function researchOpenItem() {
  const [kind, id] = String(store?.researchOpen || "").split(":");
  const pack = researchBoard();
  if (kind === "plan") {
    const item = (pack.plans || []).find((entry) => entry.id === id);
    return item ? { kind, item } : null;
  }
  if (kind === "report") {
    const item = (pack.reports || []).find((entry) => entry.id === id);
    return item ? { kind, item } : null;
  }
  if (kind === "move") {
    const item = (pack.moves || []).find((entry) => entry.id === id);
    return item ? { kind, item } : null;
  }
  if (kind === "file") {
    const item = researchDocuments().find((entry) => entry.key === id);
    return item ? { kind, item } : null;
  }
  // A project's document opens as "doc:<project id>/<document id>".
  if (kind === "doc") {
    const [planId, docId] = String(id || "").split("/");
    const plan = (pack.plans || []).find((entry) => entry.id === planId);
    const item = (plan?.documents || []).find((entry) => entry.id === docId);
    return item ? { kind, item, plan } : null;
  }
  return null;
}

function researchKindTag(item) {
  if (!item.kind || (item.template && item.kind === "Template")) return "";
  return deskTag(item.kind, "draft");
}

function pageCount(n) {
  if (!n) return "";
  return Number(n) === 1 ? "1 page" : `${n} pages`;
}

function researchStudyMeta(item) {
  const count = studyInsights(item).length;
  const docs = (item.documents || []).length;
  return [
    researchDate(item.date),
    docs ? (docs === 1 ? "1 document" : `${docs} documents`) : "",
    count ? (count === 1 ? "1 insight" : `${count} insights`) : "",
    pageCount(item.pages),
  ]
    .filter(Boolean)
    .join(" · ");
}

function researchStudyCard(item) {
  const meta = researchStudyMeta(item);
  return deskCard({
    open: { "data-action": "research-open", "data-id": `plan:${item.id}` },
    title: item.title || "",
    tags: `<span class="desk-card-tags">${researchStudyTag(item)}${researchKindTag(item)}</span>`,
    body: escapeHtml(cardLine(item, item.summary)),
    foot: meta ? `<span class="astral-muted">${escapeHtml(meta)}</span>` : "",
  });
}

function researchStudyRow(item) {
  const count = studyInsights(item).length;
  return deskRow({
    open: { "data-action": "research-open", "data-id": `plan:${item.id}` },
    title: item.title || "",
    cells: [
      researchStudyTag(item),
      escapeHtml(researchActivityName(item)),
      escapeHtml(item.kind || ""),
      escapeHtml(researchDate(item.date)),
      escapeHtml(count ? String(count) : ""),
    ],
  });
}

function researchExampleTag(item) {
  return item?.example ? deskTag("Example", "scaffold") : "";
}

function researchReportCard(item) {
  return deskCard({
    open: { "data-action": "research-open", "data-id": `report:${item.id}` },
    title: item.title || "",
    tags: `<span class="desk-card-tags">${researchExampleTag(item)}${researchKindTag(item)}</span>`,
    body: escapeHtml(cardLine(item, item.summary)),
    foot: item.date ? `<span class="astral-muted">${escapeHtml(researchDate(item.date))}</span>` : "",
  });
}

function researchReportRow(item) {
  const study = (researchBoard().plans || []).find((entry) => entry.id === item.study);
  return deskRow({
    open: { "data-action": "research-open", "data-id": `report:${item.id}` },
    title: item.title || "",
    cells: [
      escapeHtml(item.kind || ""),
      escapeHtml(researchDate(item.date)),
      escapeHtml(study?.title || ""),
    ],
  });
}

const BUNDLED_FILE_URLS = new Map();

// The published build carries PDFs as base64, so they open from a blob URL.
function deskFileUrl(file) {
  const raw = window.WORK_DESK_BOOT?.files?.[file];
  if (typeof raw !== "string") return file;
  if (!BUNDLED_FILE_URLS.has(file)) {
    const bytes = Uint8Array.from(atob(raw), (ch) => ch.charCodeAt(0));
    BUNDLED_FILE_URLS.set(file, URL.createObjectURL(new Blob([bytes], { type: "application/pdf" })));
  }
  return BUNDLED_FILE_URLS.get(file);
}

function researchFile(item) {
  const file = deskFileUrl(String(item.file || ""));
  if (!/\.pdf$/i.test(String(item.file || ""))) return "";
  const name = String(item.file).split("/").pop() || "plan.pdf";
  return deskSection(
    "File",
    `<div class="astral-actions desk-plan-actions">
      <a class="astral-btn" href="${escapeHtml(file)}" target="_blank" rel="noreferrer">Open PDF</a>
      <a class="brand-download" href="${escapeHtml(file)}" download="${escapeHtml(name)}">Download</a>
    </div>
    <iframe class="desk-plan-frame" src="${escapeHtml(file)}#view=FitH" title="${escapeHtml(
      item.title || "Plan"
    )} PDF" loading="lazy"></iframe>`
  );
}

function researchStudyPage(item) {
  const insights = studyInsights(item);
  const report = (researchBoard().reports || []).find((entry) => entry.id === item.report);
  const notes = (item.notes || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const format = [pageCount(item.pages), item.format || ""].filter(Boolean).join(" · ");
  return `
    ${deskDetailHead({
      back: "research-back",
      where: "Projects",
      kicker: `<span class="desk-card-tags">${researchStudyTag(item)}${researchKindTag(item)}</span>`,
      title: item.title || "",
      lead: item.summary || "",
    })}
    ${deskSection(
      "About",
      `<dl class="fact-grid">
        ${factRow("Activity", item.template ? "" : researchActivityName(item))}
        ${factRow("When", researchDate(item.date))}
        ${factRow("With", item.who)}
        ${factRow("Where", item.where)}
        ${factRow("Format", format)}
        ${factRow("Source", insightSource(item)?.long)}
      </dl>
      ${notes ? `<ul class="notes">${notes}</ul>` : ""}
      ${
        report
          ? `<div class="astral-actions"><button type="button" class="astral-btn" data-action="research-open" data-id="report:${escapeHtml(
              report.id
            )}">Read the report</button></div>`
          : ""
      }`
    )}
    ${researchDocumentsSection(item)}
    ${
      insights.length
        ? deskSection(
            `Insights it named (${insights.length})`,
            deskTable(["Insight", "Severity", "Source", "Score", "Problem"], insights.map(insightRow))
          )
        : ""
    }
    ${researchFile(item)}
  `;
}

function researchDocumentOpen(plan, doc) {
  return { "data-action": "research-open", "data-id": `doc:${plan.id}/${doc.id}` };
}

function researchDocumentsSection(plan) {
  const docs = plan.documents || [];
  if (!docs.length) return "";
  return deskSection(
    `Documents (${docs.length})`,
    deskTable(
      ["Document", "Status", "Pages"],
      docs.map((doc) =>
        deskRow({
          open: researchDocumentOpen(plan, doc),
          title: `${doc.n}. ${doc.title || ""}`,
          cells: [researchStudyTag(doc), escapeHtml(pageCount(doc.pages))],
        })
      )
    ),
    "Open a document to read it."
  );
}

function researchDocumentPage(plan, step) {
  const steps = plan.documents || [];
  const at = steps.indexOf(step);
  const prev = steps[at - 1];
  const next = steps[at + 1];
  const nav = (other, label) =>
    other
      ? `<button type="button" class="astral-btn" ${deskOpenAttrs(researchDocumentOpen(plan, other))}>${escapeHtml(
          `${label}: ${other.n}. ${other.title}`
        )}</button>`
      : "";
  const format = [pageCount(step.pages), step.format || ""].filter(Boolean).join(" · ");
  return `
    ${deskDetailHead({
      back: "research-back",
      where: plan.title || "Project",
      kicker: `<span class="desk-card-tags">${researchStudyTag(step)}${deskTag(
        `Document ${step.n} of ${steps.length}`,
        "draft"
      )}</span>`,
      title: step.title || "",
      lead: step.summary || "",
    })}
    ${deskSection(
      "About",
      `<dl class="fact-grid">
        ${factRow("Project", plan.title)}
        ${factRow("Format", format)}
      </dl>
      ${prev || next ? `<div class="astral-actions">${nav(prev, "Previous")}${nav(next, "Next")}</div>` : ""}`
    )}
    ${researchFile({ ...step, title: `${step.n}. ${step.title}` })}
  `;
}

function researchMarkdown(text) {
  const out = [];
  let para = [];
  let list = null;
  let table = null;
  const inline = (value) =>
    escapeHtml(value)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  const cells = (row) =>
    row
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
  const flush = () => {
    if (para.length) out.push(`<p>${inline(para.join(" "))}</p>`);
    para = [];
    if (list) {
      out.push(`<${list.tag} class="notes">${list.items.map((item) => `<li>${inline(item)}</li>`).join("")}</${list.tag}>`);
    }
    list = null;
    if (table) {
      const [head, ...body] = table.filter((row) => !/^\s*\|?\s*:?-{2,}/.test(row)).map(cells);
      out.push(`
        <div class="astral-table-wrap desk-table">
          <table class="astral-table">
            <thead><tr>${(head || []).map((cell) => `<th scope="col">${inline(cell)}</th>`).join("")}</tr></thead>
            <tbody>${body
              .map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`)
              .join("")}</tbody>
          </table>
        </div>`);
    }
    table = null;
  };
  let first = true;
  for (const line of String(text || "").replace(/\r\n/g, "\n").split("\n")) {
    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    const numbered = line.match(/^\s*\d+\.\s+(.*)$/);
    if (heading) {
      flush();
      // The page head already shows the title.
      if (!(first && heading[1].length === 1)) {
        out.push(`<h4>${inline(heading[2])}</h4>`);
      }
    } else if (/^\s*\|/.test(line)) {
      if (!table) flush();
      table = table || [];
      table.push(line);
    } else if (bullet || numbered) {
      const tag = numbered ? "ol" : "ul";
      if (!list || list.tag !== tag) flush();
      list = list || { tag, items: [] };
      list.items.push((bullet || numbered)[1]);
    } else if (!line.trim()) {
      flush();
    } else {
      if (list || table) flush();
      para.push(line.trim());
    }
    if (line.trim()) first = false;
  }
  flush();
  return out.join("");
}

function researchReportText(file) {
  if (!file) return false;
  if (RESEARCH_REPORT_TEXT.has(file)) return RESEARCH_REPORT_TEXT.get(file);
  const bundled = window.WORK_DESK_BOOT?.reports?.[file];
  if (typeof bundled === "string") {
    RESEARCH_REPORT_TEXT.set(file, bundled);
    return bundled;
  }
  RESEARCH_REPORT_TEXT.set(file, null);
  fetch(file, { cache: "no-store" })
    .then((response) => (response.ok ? response.text() : Promise.reject(new Error(String(response.status)))))
    .then((text) => RESEARCH_REPORT_TEXT.set(file, text))
    .catch(() => RESEARCH_REPORT_TEXT.set(file, false))
    .finally(() => {
      if (store?.activeSection === "research") render();
    });
  return null;
}

function researchReportPage(item) {
  const study = (researchBoard().plans || []).find((entry) => entry.id === item.study);
  const pdf = /\.pdf$/i.test(String(item.file || ""));
  const text = pdf ? "" : researchReportText(item.file);
  const notes = (item.notes || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const format = [pageCount(item.pages), item.format || ""].filter(Boolean).join(" · ");
  let body = `<p class="astral-muted">Loading the report.</p>`;
  if (text === false) body = emptyCard("Could not load this report.");
  if (text) body = `<div class="desk-prose">${researchMarkdown(text)}</div>`;
  return `
    ${deskDetailHead({
      back: "research-back",
      where: "Reporting",
      kicker: `<span class="desk-card-tags">${researchExampleTag(item)}${researchKindTag(item)}</span>`,
      title: item.title || "",
      lead: item.summary || "",
    })}
    ${deskSection(
      "About",
      `<dl class="fact-grid">
        ${factRow("Written", researchDate(item.date))}
        ${factRow("From", study?.title)}
        ${factRow("Format", format)}
        ${factRow("Source", insightSource(item)?.long)}
      </dl>
      ${notes ? `<ul class="notes">${notes}</ul>` : ""}
      ${
        study
          ? `<div class="astral-actions"><button type="button" class="astral-btn" data-action="research-open" data-id="plan:${escapeHtml(
              study.id
            )}">Open the research</button></div>`
          : ""
      }
      ${item.file ? `<p class="token-path">${escapeHtml(item.file.replace(/^\//, ""))}</p>` : ""}`
    )}
    ${pdf ? researchFile(item) : deskSection("Report", body)}
  `;
}

const RESEARCH_DOC_SOURCES = [
  { id: "project", name: "Projects" },
  { id: "report", name: "Reports" },
  { id: "template", name: "Templates" },
  { id: "own", name: "Not in a project" },
];

const isPdf = (file) => /\.pdf$/i.test(String(file || ""));

// Every PDF on the desk in one list: project documents, reports, templates, and research.documents.
function researchDocuments() {
  const pack = researchBoard();
  const plans = pack.plans || [];
  const list = [];
  plans.forEach((plan) => {
    (plan.documents || []).forEach((doc) => {
      if (!isPdf(doc.file)) return;
      list.push({ ...doc, key: `p/${plan.id}/${doc.id}`, source: "project", plan, date: doc.date || plan.date });
    });
    if (isPdf(plan.file)) {
      list.push({ ...plan, key: `p/${plan.id}`, source: plan.template ? "template" : "project", plan: plan.template ? null : plan });
    }
  });
  (pack.reports || []).forEach((report) => {
    if (!isPdf(report.file)) return;
    const plan = plans.find((entry) => entry.id === report.study) || null;
    list.push({ ...report, key: `r/${report.id}`, source: "report", plan, report });
  });
  (pack.documents || []).forEach((doc) => {
    if (!isPdf(doc.file)) return;
    const plan = plans.find((entry) => entry.id === doc.study) || null;
    const report = (pack.reports || []).find((entry) => entry.id === doc.report) || null;
    list.push({ ...doc, key: `d/${doc.id}`, source: plan ? "project" : "own", plan, report });
  });
  return list.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function researchDocSourceName(id) {
  return RESEARCH_DOC_SOURCES.find((item) => item.id === id)?.name || "";
}

function activeResearchDocSource() {
  const id = store?.researchDocSource;
  return RESEARCH_DOC_SOURCES.some((item) => item.id === id) ? id : "all";
}

function researchDocFrom(item) {
  if (item.plan) return item.plan.title || "";
  if (item.source === "own") return item.report?.title || "Not in a project";
  return "";
}

function researchDocMeta(item) {
  return [researchDocFrom(item), researchDate(item.date), pageCount(item.pages)]
    .filter(Boolean)
    .join(" · ");
}

function researchDocTags(item) {
  const source = item.source === "own" ? deskTag("Not in a project", "waiting") : deskTag(researchDocSourceName(item.source).replace(/s$/, ""), "draft");
  return `<span class="desk-card-tags">${source}${item.status ? researchStudyTag(item) : ""}</span>`;
}

function researchDocOpen(item) {
  return { "data-action": "research-open", "data-id": `file:${item.key}` };
}

function researchDocCard(item) {
  const meta = researchDocMeta(item);
  return deskCard({
    open: researchDocOpen(item),
    title: item.title || "",
    tags: researchDocTags(item),
    body: escapeHtml(cardLine(item, item.summary)),
    foot: meta ? `<span class="astral-muted">${escapeHtml(meta)}</span>` : "",
  });
}

function researchDocRow(item) {
  return deskRow({
    open: researchDocOpen(item),
    title: item.title || "",
    cells: [
      escapeHtml(researchDocFrom(item)),
      escapeHtml(item.kind || researchDocSourceName(item.source).replace(/s$/, "")),
      escapeHtml(researchDate(item.date)),
      escapeHtml(item.pages ? String(item.pages) : ""),
    ],
  });
}

function researchDocPage(item) {
  const format = [pageCount(item.pages), item.format || ""].filter(Boolean).join(" · ");
  const links = [
    item.plan
      ? `<button type="button" class="astral-btn" data-action="research-open" data-id="plan:${escapeHtml(item.plan.id)}">Open the project</button>`
      : "",
    item.report && item.source !== "report"
      ? `<button type="button" class="astral-btn is-secondary" data-action="research-open" data-id="report:${escapeHtml(item.report.id)}">Read the report</button>`
      : "",
  ].join("");
  return `
    ${deskDetailHead({
      back: "research-back",
      where: "Documents",
      kicker: researchDocTags(item),
      title: item.title || "",
      lead: item.summary || "",
    })}
    ${deskSection(
      "About",
      `<dl class="fact-grid">
        ${factRow("From", researchDocFrom(item))}
        ${factRow("When", researchDate(item.date))}
        ${factRow("Format", format)}
      </dl>
      ${links ? `<div class="astral-actions">${links}</div>` : ""}
      <p class="token-path">${escapeHtml(String(item.file).replace(/^\//, ""))}</p>`
    )}
    ${researchFile(item)}
  `;
}

function researchTabFor(id) {
  if (id.startsWith("report:")) return "reporting";
  if (id.startsWith("move:")) return "strategy";
  if (id.startsWith("file:")) return "documents";
  return "planning";
}

// Only rewrite a host when its markup changes, so an open PDF keeps its place.
const RESEARCH_SEVERITY_ORDER = (item) => RESEARCH_SEVERITY_RANK[insightSeverity(item)] ?? 9;

function researchMoves() {
  return researchBoard().moves || [];
}

function moveInsights(move) {
  const all = researchBoard().insights || [];
  return (move?.insights || [])
    .map((id) => all.find((item) => item.id === id))
    .filter(Boolean)
    .sort((a, b) => RESEARCH_SEVERITY_ORDER(a) - RESEARCH_SEVERITY_ORDER(b) || insightScore(b) - insightScore(a));
}

function moveProject(move) {
  return (researchBoard().plans || []).find((item) => item.id === move.project || item.move === move.id) || null;
}

// open: nothing started yet. Otherwise the project's own state.
function moveState(move) {
  const project = moveProject(move);
  return project ? researchStudyState(project) : "open";
}

const RESEARCH_MOVE_RANK = { open: 0, planned: 1, doing: 1, done: 3 };

// Strongest finding first: severity, then score, then how much evidence sits behind it.
function sortedMoves() {
  return researchMoves()
    .map((move, index) => ({ move, index, top: moveInsights(move)[0] }))
    .sort((a, b) => {
      const state = RESEARCH_MOVE_RANK[moveState(a.move)] - RESEARCH_MOVE_RANK[moveState(b.move)];
      if (state) return state;
      const sev = (a.top ? RESEARCH_SEVERITY_ORDER(a.top) : 9) - (b.top ? RESEARCH_SEVERITY_ORDER(b.top) : 9);
      if (sev) return sev;
      const score = (b.top ? insightScore(b.top) : 0) - (a.top ? insightScore(a.top) : 0);
      if (score) return score;
      return (b.move.insights || []).length - (a.move.insights || []).length || a.index - b.index;
    })
    .map((entry) => entry.move);
}

function activeMoveActivity() {
  const id = store?.researchMoveActivity;
  return researchMoves().some((item) => researchActivity(item) === id) ? id : "all";
}

function moveSentence(move, plain) {
  const strong = (text) => (plain ? text : `<strong>${escapeHtml(text)}</strong>`);
  const text = (value) => (plain ? value : escapeHtml(value));
  return `${text("Since you know ")}${strong(move.know || "")}${text(", I would suggest ")}${strong(
    move.run || ""
  )}${move.with ? text(` with ${move.with}`) : ""}${text(" so we can better understand ")}${strong(move.learn || "")}${text(".")}`;
}

function moveStudies(move) {
  const plans = researchBoard().plans || [];
  const ids = [...new Set(moveInsights(move).map((item) => item.study).filter(Boolean))];
  return ids.map((id) => plans.find((plan) => plan.id === id)?.title).filter(Boolean);
}

function moveMeta(move) {
  const count = moveInsights(move).length;
  return [count === 1 ? "1 insight" : `${count} insights`, ...moveStudies(move)].join(" \u00b7 ");
}

function moveTags(move) {
  const state = moveState(move);
  return `<span class="desk-card-tags">${deskTag(researchActivityName(move))}${
    state === "open" ? "" : deskTag(researchStudyName(state), RESEARCH_STUDY_STATUS[state])
  }</span>`;
}

function moveActions(move, withOpen) {
  const project = moveProject(move);
  const template = move.guide ? (researchBoard().plans || []).find((item) => item.id === move.guide) : null;
  const buttons = [
    project
      ? `<button type="button" class="astral-btn" data-action="research-open" data-id="plan:${escapeHtml(project.id)}">Open the project</button>`
      : `<button type="button" class="astral-btn" data-action="research-move-plan" data-id="${escapeHtml(move.id)}">Add to Projects</button>`,
    withOpen
      ? `<button type="button" class="astral-btn is-secondary" data-action="research-open" data-id="move:${escapeHtml(move.id)}">See the evidence</button>`
      : "",
    template
      ? `<button type="button" class="astral-btn is-secondary" data-action="research-open" data-id="plan:${escapeHtml(template.id)}">Open the ${escapeHtml(
          String(template.title || "template").toLowerCase()
        )}</button>`
      : "",
  ];
  return `<div class="astral-actions">${buttons.join("")}</div>`;
}

function moveHero(move) {
  return `
    <article class="astral-card desk-move-hero">
      <div class="astral-card-head">
        <h3>${escapeHtml(move.title || "")}</h3>
        ${moveTags(move)}
      </div>
      <p class="desk-move-sentence">${moveSentence(move)}</p>
      <p class="astral-muted">${escapeHtml(moveMeta(move))}</p>
      ${moveActions(move, true)}
    </article>
  `;
}

// The card keeps one line: what the move should answer. The hero and page keep the full sentence.
function moveFindOut(move) {
  const learn = String(move.learn || "").trim().replace(/\.$/, "");
  return learn ? `Find out ${learn}.` : "";
}

function moveCard(move) {
  return deskCard({
    open: { "data-action": "research-open", "data-id": `move:${move.id}` },
    title: move.title || "",
    tags: moveTags(move),
    body: escapeHtml(cardLine(move, moveFindOut(move))),
    foot: `<span class="astral-muted">${escapeHtml(moveMeta(move))}</span>`,
  });
}

function moveEvidenceRow(item) {
  const severity = insightSeverity(item);
  const study = (researchBoard().plans || []).find((plan) => plan.id === item.study);
  return deskRow({
    open: { "data-open": "insight", "data-id": item.id },
    title: item.title || "",
    cells: [
      deskTag(researchSeverityName(severity), researchSeverityStatus(severity)),
      escapeHtml(study?.title || ""),
      escapeHtml(String(insightScore(item))),
    ],
  });
}

function researchMovePage(move) {
  const insights = moveInsights(move);
  const group = (board().groups || []).find((item) => item.id === move.group);
  const project = moveProject(move);
  return `
    ${deskDetailHead({
      back: "research-back",
      where: "Strategy",
      kicker: moveTags(move),
      title: move.title || "",
    })}
    <p class="desk-move-sentence">${moveSentence(move)}</p>
    ${moveActions(move, false)}
    ${deskSection(
      "The move",
      `<dl class="fact-grid">
        ${factRow("Activity", researchActivityName(move))}
        ${factRow("Run", move.kind)}
        ${factRow("With", move.with)}
        ${factRow("Answers", move.learn)}
        ${factRow("Answers for", group?.name)}
        ${factRow("Project", project?.title)}
      </dl>`
    )}
    ${deskSection(
      `What you know (${insights.length})`,
      deskTable(["Insight", "Severity", "From", "Score"], insights.map(moveEvidenceRow)),
      "The insights behind this move. Open one for the rest."
    )}
  `;
}

// Activity types no project has covered yet, and user group questions nothing answers.
function researchGaps(moves) {
  const plans = (researchBoard().plans || []).filter((item) => !item.template);
  return RESEARCH_ACTIVITIES.filter((item) => item.id !== "template")
    .filter((item) => !plans.some((plan) => researchActivity(plan) === item.id))
    .map((item) => {
      const count = moves.filter((move) => researchActivity(move) === item.id).length;
      return `<li>No ${escapeHtml(item.name.toLowerCase())} research has run yet.${
        count ? ` ${count === 1 ? "One move here suggests" : `${count} moves here suggest`} it.` : ""
      }</li>`;
    });
}

function openGroupCard(group) {
  const status = group.status || "draft";
  return deskCard({
    open: { "data-group-page": group.id },
    lead: groupMark(group),
    title: group.name || "",
    tags: deskTag(STATUS_LABEL[status] || "Draft", status),
    body: escapeHtml(group.open || ""),
  });
}

function researchStrategyList() {
  const activity = activeMoveActivity();
  const all = sortedMoves();
  const moves = all.filter((move) => activity === "all" || researchActivity(move) === activity);
  if (!all.length) return emptyCard("No moves yet. Add research and the next move shows here.");
  const live = moves.filter((move) => moveState(move) !== "done");
  const hero = live.find((move) => moveState(move) === "open") || live[0] || null;
  const rest = moves.filter((move) => move !== hero);
  const gaps = researchGaps(all);
  const covered = new Set(all.map((move) => move.group).filter(Boolean));
  const opens = (board().groups || []).filter((group) => String(group.open || "").trim() && !covered.has(group.id));
  const section = (id, title, help, inner) => `
    <section class="astral-home-section" aria-labelledby="${id}">
      <div class="desk-section-head">
        <h3 id="${id}" class="astral-home-section-title">${escapeHtml(title)}</h3>
        <p class="astral-muted">${escapeHtml(help)}</p>
      </div>
      ${inner}
    </section>`;
  return [
    hero
      ? section(
          "strategy-move-heading",
          "Your next move",
          "The strongest finding nothing has started on yet.",
          moveHero(hero)
        )
      : "",
    rest.length
      ? section(
          "strategy-then-heading",
          "Then",
          "In order of the strongest finding behind each. Open one for the evidence.",
          `<div class="astral-report-grid desk-grid">${rest.map(moveCard).join("")}</div>`
        )
      : "",
    gaps.length
      ? section(
          "strategy-gaps-heading",
          "Gaps in the research",
          "Activity types no project has covered yet.",
          `<article class="astral-card desk-brief-card"><ul class="desk-bullets">${gaps.join("")}</ul></article>`
        )
      : "",
    opens.length
      ? section(
          "strategy-open-heading",
          "Still unanswered",
          "Questions on user groups that no move answers yet. A talk named them.",
          `<div class="astral-report-grid desk-grid">${opens.map(openGroupCard).join("")}</div>`
        )
      : "",
  ].join("");
}

function setResearchHost(host, html) {
  if (!host) return;
  if (host.deskHtml !== html) {
    host.innerHTML = html;
    host.deskHtml = html;
  }
}

function renderResearch() {
  const pack = researchBoard();
  const insights = pack.insights || [];
  const plans = pack.plans || [];
  const reports = pack.reports || [];
  const shown = sortedInsights();
  const filter = activeResearchSeverity();
  const tab = activeResearchTab();
  const open = researchOpenItem();
  const detail =
    Boolean(open) &&
    (((open.kind === "plan" || open.kind === "doc") && tab === "planning") ||
      (open.kind === "report" && tab === "reporting") ||
      (open.kind === "move" && tab === "strategy") ||
      (open.kind === "file" && tab === "documents"));
  if (!detail) store.researchOpen = "";
  setPanelDetail("research", detail);

  if (els.researchCount) {
    els.researchCount.textContent =
      insights.length === 1 ? "1 insight" : `${insights.length} insights`;
  }
  if (els.researchTabs) {
    const counts = {
      insights: insights.length,
      planning: plans.length,
      reporting: reports.length,
      documents: researchDocuments().length,
      strategy: researchMoves().filter((move) => moveState(move) !== "done").length,
      analytics: teamKeis().length,
    };
    els.researchTabs.innerHTML = protoTabs(
      RESEARCH_TABS.map((item) => ({ id: item.id, name: `${item.name} (${counts[item.id]})` })),
      tab,
      "data-research-tab",
      "Research pages"
    );
  }
  if (els.researchLead) {
    // Every lead sits in one grid cell, so the tabs below keep their place.
    const leads = RESEARCH_TABS.map(
      (item) =>
        `<span class="desk-lead-item"${item.id === tab ? "" : ' aria-hidden="true" data-off'}>${escapeHtml(
          item.lead || ""
        )}</span>`
    ).join("");
    if (els.researchLead.dataset.tab !== tab || !els.researchLead.querySelector(".desk-lead-item")) {
      els.researchLead.innerHTML = leads;
      els.researchLead.dataset.tab = tab;
    }
    els.researchLead.classList.add("desk-lead-stack");
  }
  if (els.researchFilters) {
    els.researchFilters.hidden = tab === "reporting" || tab === "analytics";
    if (tab === "insights") {
      els.researchFilters.innerHTML = deskStats(
        RESEARCH_SEVERITIES.map((item) => {
          const count =
            item.id === "all"
              ? insights.length
              : insights.filter((entry) => insightSeverity(entry) === item.id).length;
          return { id: item.id, name: item.name, count, disabled: !count };
        }),
        filter,
        "data-research-severity",
        "Severity"
      );
    } else if (tab === "planning") {
      els.researchFilters.innerHTML = deskStats(
        RESEARCH_ACTIVITIES.map((item) => {
          const count = plans.filter((entry) => researchActivity(entry) === item.id).length;
          return { id: item.id, name: item.name, count, disabled: !count };
        }),
        activeResearchActivity(),
        "data-research-activity",
        "Research activity"
      );
    } else if (tab === "documents") {
      const docs = researchDocuments();
      els.researchFilters.innerHTML = deskStats(
        RESEARCH_DOC_SOURCES.map((item) => {
          const count = docs.filter((entry) => entry.source === item.id).length;
          return { id: item.id, name: item.name, count, disabled: !count };
        }),
        activeResearchDocSource(),
        "data-research-doc-source",
        "Where the document sits"
      );
    } else if (tab === "strategy") {
      const moves = researchMoves();
      els.researchFilters.innerHTML = deskStats(
        RESEARCH_ACTIVITIES.filter((item) => item.id !== "template").map((item) => {
          const count = moves.filter((entry) => researchActivity(entry) === item.id).length;
          return { id: item.id, name: item.name, count, disabled: !count };
        }),
        activeMoveActivity(),
        "data-research-move-activity",
        "Move activity"
      );
    } else {
      els.researchFilters.innerHTML = "";
    }
  }
  if (els.researchView) {
    els.researchView.innerHTML = "";
    els.researchView.hidden = true;
  }

  if (els.researchInsights) {
    els.researchInsights.hidden = tab !== "insights";
    if (tab === "insights") {
      const matched = shown.filter((item) =>
        deskMatch("research", item.title, item.problem, item.where, item.why, insightSource(item)?.name)
      );
      els.researchInsights.className = "";
      els.researchInsights.innerHTML = insights.length
        ? deskSheet("research", {
            placeholder: "Search insights",
            label: "Search insights",
            cards: matched.map(insightCard),
            cols: ["Insight", "Severity", "Source", "Score", "Problem"],
            rows: matched.map(insightRow),
            empty: "Nothing in this severity.",
          })
        : emptyCard("No insights for this team yet.");
    }
  }

  if (els.researchPlanning) {
    els.researchPlanning.hidden = tab !== "planning";
    let html = "";
    if (tab === "planning" && detail) {
      html = open.kind === "doc" ? researchDocumentPage(open.plan, open.item) : researchStudyPage(open.item);
    } else if (tab === "planning") {
      const activity = activeResearchActivity();
      const matched = sortedStudies().filter(
        (item) =>
          (activity === "all" || researchActivity(item) === activity) &&
          deskMatch(
            "research-plans",
            item.title,
            item.kind,
            researchActivityName(item),
            item.summary,
            item.who,
            item.where,
            ...(item.documents || []).map((doc) => doc.title)
          )
      );
      html = plans.length
        ? deskSheet("research-plans", {
            placeholder: "Search research",
            label: "Search research",
            cards: matched.map(researchStudyCard),
            cols: ["Research", "Status", "Activity", "Kind", "When", "Insights"],
            rows: matched.map(researchStudyRow),
            empty: "Nothing in this activity yet.",
          })
        : emptyCard("No research yet. Build a plan with /ux-research once the evidence review says Build plan.");
    }
    setResearchHost(els.researchPlanning, html);
  }

  if (els.researchReporting) {
    els.researchReporting.hidden = tab !== "reporting";
    let html = "";
    if (tab === "reporting" && detail) {
      html = researchReportPage(open.item);
    } else if (tab === "reporting") {
      const matched = sortedReports().filter((item) =>
        deskMatch("research-reports", item.title, item.kind, item.summary)
      );
      html = reports.length
        ? deskSheet("research-reports", {
            placeholder: "Search reports",
            label: "Search reports",
            cards: matched.map(researchReportCard),
            cols: ["Report", "Kind", "Written", "From"],
            rows: matched.map(researchReportRow),
            empty: "Nothing matches that search.",
          })
        : emptyCard("No reports yet.");
    }
    setResearchHost(els.researchReporting, html);
  }

  if (els.researchDocuments) {
    els.researchDocuments.hidden = tab !== "documents";
    let html = "";
    if (tab === "documents" && detail) {
      html = researchDocPage(open.item);
    } else if (tab === "documents") {
      const docs = researchDocuments();
      const source = activeResearchDocSource();
      const matched = docs.filter(
        (item) =>
          (source === "all" || item.source === source) &&
          deskMatch("research-docs", item.title, item.kind, item.summary, researchDocFrom(item))
      );
      html = docs.length
        ? deskSheet("research-docs", {
            placeholder: "Search documents",
            label: "Search documents",
            cards: matched.map(researchDocCard),
            cols: ["Document", "From", "Kind", "When", "Pages"],
            rows: matched.map(researchDocRow),
            empty: "Nothing matches that search.",
          })
        : emptyCard("No documents yet.");
    }
    setResearchHost(els.researchDocuments, html);
  }

  if (els.researchAnalytics) els.researchAnalytics.hidden = tab !== "analytics";

  if (els.researchStrategy) {
    els.researchStrategy.hidden = tab !== "strategy";
    let html = "";
    if (tab === "strategy" && detail) html = researchMovePage(open.item);
    else if (tab === "strategy") html = researchStrategyList();
    setResearchHost(els.researchStrategy, html);
  }

  setNavCount(els.navResearchCount, insights.length);
}

function onResearchTab(event) {
  const tab = event.target.closest("[data-research-tab]");
  if (!tab) return;
  store.researchTab = tab.dataset.researchTab;
  store.researchOpen = "";
  render();
  persistChrome();
}

// A move becomes a planned project, linked back so the move shows it is in hand.
function planResearchMove(id) {
  const pack = researchBoard();
  const move = (pack.moves || []).find((item) => item.id === id);
  if (!move || moveProject(move)) return;
  const project = {
    id: `move-${move.id}`,
    title: move.title || "",
    kind: move.kind || "",
    activity: researchActivity(move),
    status: "planned",
    date: todayIso(),
    who: move.with || "",
    summary: moveSentence(move, true),
    card: moveFindOut(move),
    source: "team",
    move: move.id,
  };
  pack.plans.push(project);
  move.project = project.id;
  store.researchTab = "planning";
  store.researchOpen = `plan:${project.id}`;
  render();
  persist();
  window.scrollTo({ top: 0 });
}

function onResearchPage(event) {
  const back = event.target.closest("[data-action='research-back']");
  if (back) {
    // Back from a document returns to its project, not the list.
    const open = researchOpenItem();
    store.researchOpen = open?.kind === "doc" ? `plan:${open.plan.id}` : "";
    render();
    persistChrome();
    document.querySelector(".stage")?.scrollTo?.({ top: 0 });
    return;
  }
  const add = event.target.closest("[data-action='research-move-plan']");
  if (add) {
    planResearchMove(add.dataset.id);
    return;
  }
  const opener = event.target.closest("[data-action='research-open']");
  if (!opener) return;
  const id = String(opener.dataset.id || "");
  store.researchTab = researchTabFor(id);
  store.researchOpen = id;
  render();
  persistChrome();
  window.scrollTo({ top: 0 });
}

function renderAnalytics() {
  const list = teamKeis();
  const selected = activeKeiId();
  store.activeKei = selected;
  const open = findKei(selected);
  const rounds = open ? keiRounds(open) : [];
  const change = open ? keiChange(open) : null;

  if (els.analyticsCount) {
    els.analyticsCount.textContent = list.length
      ? list.length === 1
        ? "1 measure"
        : `${list.length} measures`
      : "Waiting";
  }

  if (els.analyticsKeis) {
    els.analyticsKeis.innerHTML = list.length
      ? protoTabs(
          list.map((item) => ({ id: item.id, name: item.name || item.id })),
          selected,
          "data-kei",
          "Measure"
        )
      : "";
  }

  if (els.analyticsChart) {
    const title = open ? open.name : "Key Experience Indicator";
    const note = open
      ? change?.name || ""
      : "Waiting on a measured round";
    const caption = open?.maturity === "provisional"
      ? "Directional only. Do not treat this as a precise lift."
      : open
        ? open.note || "A later round on the same measure shows whether this improved or got worse."
        : "A KEI is a score of something specific, important, and actionable. It appears when a study names a measure, a baseline, and a later round. Report the sample. A small round stays directional.";
    els.analyticsChart.innerHTML = `
      <div class="analytics-plot">
        <div class="astral-card-head analytics-plot-head">
          <h4>${escapeHtml(title)}</h4>
          ${note ? deskTag(note, change?.status || "waiting") : ""}
        </div>
        ${keiLineChart(rounds, {
          width: 640,
          height: 220,
          red: keiGuide(open?.red),
          target: keiGuide(open?.target),
        })}
        <p class="astral-muted">${escapeHtml(caption)}</p>
      </div>
    `;
  }

  if (els.analyticsList) {
    els.analyticsList.innerHTML = list.length
      ? list.map(keiCard).join("")
      : emptyCard(
          "No Key Experience Indicators for this team yet. They appear when a study names a measure. Do not invent a score."
        );
  }

  if (els.analyticsStructure) {
    els.analyticsStructure.innerHTML = keiStructure()
      .map((item) => keiTaxonomyCard(item, keiStructureNamed(item, list)))
      .join("");
  }

  if (els.analyticsCuts) {
    els.analyticsCuts.innerHTML = keiCuts()
      .map((item) => keiTaxonomyCard(item, false, true))
      .join("");
  }

  if (els.analyticsHow) {
    els.analyticsHow.innerHTML = keiHow()
      .map((item) =>
        keiTaxonomyCard(
          item,
          list.some((kei) => kei.dimension === item.id)
        )
      )
      .join("");
  }

}

function renderPatterns() {
  const sys = teamSystem();
  const patterns = sys?.patterns;
  if (!els.patternsLead || !els.patternsList) return;

  if (!sys || !patterns) {
    els.patternsLead.textContent = `No patterns for ${teamName(
      store.activeTeam
    )} yet. IMSERV holds Astral.`;
    if (els.patternsCount) els.patternsCount.textContent = "Waiting";
    els.patternsList.innerHTML = emptyCard(
      "Patterns appear when a talk names a recipe the new product will reuse."
    );
    setNavCount(els.navPatternsCount, 0);
    return;
  }

  const items = patterns.items || [];
  const open = items.find((item) => item.id === store.activePattern);
  els.patternsLead.textContent = patterns.lead || "";
  if (els.patternsCount) {
    els.patternsCount.textContent =
      items.length === 1 ? "1 recipe" : `${items.length} recipes`;
  }
  setPanelDetail("patterns", Boolean(open));
  if (open) {
    els.patternsList.innerHTML = patternPage(open);
  } else if (!items.length) {
    els.patternsList.innerHTML = emptyCard("No patterns named yet.");
  } else {
    const status = activePatternStatus(items);
    const statusItems = ["firm", "working", "draft", "waiting"]
      .map((id) => ({
        id,
        name: STATUS_LABEL[id] || id,
        count: items.filter((item) => (item.status || "waiting") === id).length,
      }))
      .filter((item) => item.count);
    const byStatus = items.filter(
      (item) => status === "all" || (item.status || "waiting") === status
    );
    const shown = byStatus.filter((item) =>
      deskMatch("patterns", item.name, item.summary, item.now, item.note)
    );
    els.patternsList.innerHTML = `
      ${deskStats(
        [{ id: "all", name: "All patterns", count: items.length }, ...statusItems],
        status,
        "data-pattern-status",
        "Pattern status"
      )}
      ${deskSheet("patterns", {
        placeholder: "Search patterns",
        label: "Search patterns",
        cards: shown.map(patternItem),
        cols: ["Pattern", "Status", "Summary"],
        rows: shown.map(patternRow),
        empty: "No patterns with this status.",
      })}
    `;
  }
  setNavCount(els.navPatternsCount, items.length);
}

function activePatternStatus(items) {
  const id = store?.patternStatus || "all";
  if (id === "all") return "all";
  return (items || []).some((item) => (item.status || "waiting") === id) ? id : "all";
}

function renderSkills() {
  if (!els.skillsLead || !els.skillsList) return;
  const groups = skillsCatalog.groups || [];
  const items = skillItems();
  const open = items.find((item) => item.id === store.activeSkill);
  els.skillsLead.textContent = skillsCatalog.lead || "";
  if (els.skillsCount) {
    els.skillsCount.textContent = items.length === 1 ? "1 skill" : `${items.length} skills`;
  }
  setPanelDetail("skills", Boolean(open));
  if (open) {
    els.skillsList.innerHTML = skillPage(open);
  } else {
    const group = skillFoldId() || "all";
    const shown = items
      .filter((item) => group === "all" || item.group === group)
      .filter((item) => deskMatch("skills", item.name, item.summary, item.when));
    const help = groups.find((entry) => entry.id === group)?.help || "";
    els.skillsList.innerHTML = `
      ${deskStats(
        [
          { id: "all", name: "All skills", count: items.length },
          ...groups.map((entry) => ({
            id: entry.id,
            name: entry.name,
            count: (entry.items || []).length,
            disabled: !(entry.items || []).length,
          })),
        ],
        group,
        "data-skill-group",
        "Skill group"
      )}
      ${help ? `<p class="astral-muted desk-sheet-help">${escapeHtml(help)}</p>` : ""}
      ${deskSheet("skills", {
        placeholder: "Search skills",
        label: "Search skills",
        cards: shown.map(skillItem),
        cols: ["Skill", "Group", "Status", "Summary"],
        rows: shown.map(skillRow),
        empty: "No skills in this group.",
      })}
    `;
  }
  setNavCount(els.navSkillsCount, items.length);
}

function render() {
  applyDeskTheme();
  const current = board();
  renderNav();
  els.headline.textContent = current.headline || "Work Desk";
  els.situation.textContent = current.situation || "";

  const today = current.today || [];
  const done = current.done || [];
  const tab = activeTodayTab();
  renderTodayTabs(today, done);
  if (tab === "done") {
    if (els.todayHelp) {
      els.todayHelp.textContent = "Finished work stays here. Open a task for the note.";
    }
    els.todayCount.textContent = done.length === 1 ? "1 kept" : `${done.length} kept`;
    els.todayList.hidden = true;
    els.todayList.innerHTML = "";
    if (els.todayDone) {
      els.todayDone.hidden = false;
      els.todayDone.innerHTML = doneDaysHtml(done);
    }
    if (els.form) els.form.hidden = true;
  } else {
    const todayShown = tasksOfKind(today, tab);
    if (els.todayHelp) {
      els.todayHelp.textContent =
        "Pick a tab. Tick what you will do. Open a task for the note.";
    }
    if (els.newKind && els.form && !els.form.title.value) els.newKind.value = tab;
    els.todayCount.textContent =
      todayShown.length === 1 ? "1 open" : `${todayShown.length} open`;
    els.todayList.hidden = false;
    if (els.todayDone) {
      els.todayDone.hidden = true;
      els.todayDone.innerHTML = "";
    }
    if (els.form) els.form.hidden = false;
    els.todayList.innerHTML = todayShown.length
      ? todayShown.map((task) => taskItem(task, false)).join("")
      : `<li class="desk-row-empty astral-muted">Nothing in ${escapeHtml(
          kindName(tab)
        )} yet. Add one below, or pick another card.</li>`;
  }

  renderList(els.canList, current.can, false);
  renderList(els.cannotList, current.cannot, false);
  renderList(els.nextList, current.next, true);

  els.knowList.innerHTML = (current.know || [])
    .map((card, index) => knowCard(card, index, false))
    .join("");

  const groups = current.groups || [];
  const groupShown = groupCards(groups);
  els.groupsCount.textContent =
    groupShown.length === 1 ? "1 in play" : `${groupShown.length} in play`;
  const openGroupItem = store.activeGroup
    ? groups.find((group) => group.id === store.activeGroup) || null
    : null;
  if (!openGroupItem) store.activeGroup = "";
  setPanelDetail("groups", Boolean(openGroupItem));
  const groupHit = (group) =>
    deskMatch(
      "groups",
      group.name,
      group.who,
      group.need,
      ...(group.journey || []).map((step) => `${step.stage} ${step.now} ${step.later}`)
    );
  els.groupsList.innerHTML = openGroupItem
    ? groupPage(openGroupItem)
    : groups.length
      ? groupSheet("groups", groups, groupItem, groupHit, "Search groups and journeys", [
          "Group",
          "Sits on",
          "Status",
          "Journey",
          "Who they are",
        ])
      : emptyCard("No groups for this team yet. Add one from a discussion.");

  const people = store.access.people || [];
  els.peopleCount.textContent =
    people.length === 1 ? "1 person" : `${people.length} people`;
  els.peopleList.innerHTML = people.length
    ? people.map(personItem).join("")
    : emptyCard("No names yet. Use Add, or send a talk that names someone.");

  const companyAccess = store.access.company || [];
  els.companyAccessCount.textContent =
    companyAccess.length === 1 ? "1 tool" : `${companyAccess.length} tools`;
  els.companyAccessList.innerHTML = companyAccess.length
    ? companyAccess.map((item) => accessItem(item, "company")).join("")
    : emptyCard("No company tools yet. Use Add when you have email, Slack, Figma, or Git.");

  const teamAccess = current.access || [];
  els.teamAccessCount.textContent =
    teamAccess.length === 1 ? "1 tool" : `${teamAccess.length} tools`;
  els.teamAccessLead.textContent = `Tools that belong to ${teamName(
    store.activeTeam
  )} only. Switch team in the side menu to see another list.`;
  els.teamAccessList.innerHTML = teamAccess.length
    ? teamAccess.map((item) => accessItem(item, "team")).join("")
    : emptyCard(
        `No ${teamName(
          store.activeTeam
        )} tools yet. Use Add for a repo, board, or login that is only for this team.`
      );

  applyAccessFolds();
  renderResearch();
  renderAnalytics();
  renderLibrary();
  renderLanguage();
  renderPatterns();
  renderSkills();
  renderResources();
  renderRoadmap();
  renderPrototype();
  renderBranding();

  setNavCount(els.navTodayCount, today.length);
  setNavCount(els.navGroupsCount, groupShown.length);
  setNavCount(
    els.navAccessCount,
    people.length + companyAccess.length + teamAccess.length
  );

  if (openDetail && !fillDetail()) closeDetail();
}

const CHROME_KEY = "work-desk-chrome";
const ACCESS_FOLDS = ["people", "company", "team"];
const CHROME_FIELDS = [
  "activeTeam",
  "activeSection",
  "accessFold",
  "skillFold",
  "libraryFold",
  "activeKind",
  "activeLibraryTab",
  "activeLanguageKind",
  "activeBrandSection",
  "researchView",
  "researchSeverity",
  "researchTab",
  "researchOpen",
  "researchActivity",
  "researchMoveActivity",
  "researchDocSource",
  "deskViews",
  "deskQueries",
  "patternStatus",
  "componentFamily",
  "activeKei",
  "activeComponent",
  "activePattern",
  "activeGroup",
  "groupTab",
  "groupReturn",
  "activeSkill",
  "activeResource",
  "resourceKind",
  "roadmapRelease",
  "activePrototypeView",
  "activePrototypeMeter",
  "activePrototypeQuery",
  "prototypeTreeFilters",
  "prototypePaneFilters",
  "activePrototypeFacet",
  "prototypePaneAlertFacet",
  "prototypeRange",
  "prototypeChannel",
  "prototypeChartFlows",
  "prototypeChartSliceOff",
  "prototypePaneMeterKinds",
  "prototypeSiteMeter",
  "prototypeSiteMeters",
  "prototypeCompareMeters",
  "prototypeCompareSites",
  "prototypeGroupSites",
  "prototypeScope",
  "prototypeGroup",
  "prototypeGroupClosed",
  "prototypeCompanyOpen",
  "prototypePane",
  "prototypeMeterOpen",
  "prototypeMeterProfiles",
  "prototypeMeterDrafts",
  "prototypeMeterOverrides",
  "prototypeCustomPresets",
  "prototypeCompanyPresets",
  "prototypeStandardPresets",
  "prototypePresetScope",
  "prototypePresetCompanyQuery",
  "prototypeMeterOwnDrafts",
  "prototypeBreakdownOpen",
  "prototypeListOpen",
  "prototypeChartPoint",
  "prototypePointTags",
  "prototypePointTagPool",
  "prototypeCompareOpen",
  "prototypeCompareQuery",
  "prototypeCompareFilters",
  "prototypeCompareSort",
  "prototypeCompareIds",
  "prototypeCompareLevel",
  "prototypeDatePreset",
  "prototypeDateFrom",
  "prototypeDateTo",
  "prototypeDateDraftFrom",
  "prototypeDateDraftTo",
  "prototypeDateCal",
  "prototypeDateOpen",
  "prototypeDateCustomOpen",
  "prototypeReportCalOpen",
  "prototypeReportCal",
  "prototypeDateHome",
  "prototypeDateHomeFrom",
  "prototypeDateHomeTo",
  "prototypeExportOpen",
  "prototypeDownloads",
  "prototypeDownloadQuery",
  "prototypeDownloadFilters",
  "prototypeDownloadFilterOpen",
  "prototypeAlertQuery",
  "prototypeAlertFilters",
  "prototypeAlertFilterOpen",
  "prototypeExportNotice",
  "prototypeChartView",
  "prototypeChartStyle",
  "prototypeChartShow",
  "prototypeChartSettingsOpen",
  "prototypeZoneFor",
  "prototypeZoneUtility",
  "prototypePillsOpen",
  "prototypeTreeOpen",
  "prototypeFullscreen",
  "prototypePreviewHidden",
  "prototypeLibraryOn",
  "prototypeEmailsOn",
  "prototypeFlow",
  "prototypeAskOpen",
  "prototypeWalkOpen",
  "prototypeAccountOpen",
  "prototypeNoticeOpen",
  "prototypeRailOpen",
  "prototypeSeeAsCompany",
  "prototypeSeeAsUser",
  "prototypeCompanyQuery",
  "prototypeServiceTab",
  "prototypeServiceQuery",
  "prototypeFindQuery",
  "prototypeUsageTab",
  "prototypeUsageQuery",
  "prototypeUsagePeriod",
  "prototypeUsageType",
  "prototypeUsageCompany",
  "prototypeUsageState",
  "prototypeInboxFacet",
  "prototypeInboxQuery",
  "prototypeInboxTicket",
  "prototypeInboxRead",
  "prototypeInboxResolve",
  "prototypeInboxReplies",
  "prototypeSignedOut",
  "prototypeAuthEmail",
  "prototypeAuthName",
  "prototypeAuthCompany",
  "prototypeAuthSent",
  "prototypeAuthResent",
  "prototypeSignUpStep",
  "prototypeRecoveryStep",
  "prototypeInviteStep",
  "prototypeInviteResume",
  "prototypeInviteAsked",
  "prototypeInviteFirst",
  "prototypeInviteLast",
  "prototypeReportForm",
  "prototypeReportOff",
  "prototypeCustomReports",
  "prototypeReportPeople",
  "prototypeReportSchedule",
  "prototypeReportDefs",
  "prototypeQueryForm",
  "prototypeQuerySite",
  "prototypeOpenQuery",
  "prototypeQueryCommentOpen",
  "prototypeQueryComments",
  "prototypeRaisedQueries",
  "prototypeAlertAck",
  "prototypeAlertUndo",
  "prototypeAlertRead",
  "prototypeQueryResolve",
  "prototypeReportRun",
  "prototypeBrandLogo",
  "prototypeOrgByCompany",
  "prototypeProfilePicture",
  "prototypeProfileName",
  "prototypeProfileDiscipline",
  "prototypeProfileJobTitle",
  "prototypeProfileDraftName",
  "prototypeProfileDraftDiscipline",
  "prototypeProfileDraftJobTitle",
  "prototypeBrandPrimary",
  "prototypeBrandSecondary",
  "prototypeOrgName",
  "prototypeOrgCountry",
  "prototypeSettingsSection",
  "prototypeSettingsFrom",
  "prototypeSeeAsFrom",
  "prototypeSeeAsPerson",
  "prototypeNotifyActivity",
  "prototypeNotifyRecurrence",
  "prototypeNotifyPreviews",
  "prototypeNotifyGrouping",
  "prototypeUserForm",
  "prototypeUserQuery",
  "prototypeUserDrafts",
  "prototypeUserInviteRole",
  "prototypeMeRole",
  "prototypeUserGroup",
  "prototypeAccess",
  "prototypeTenure",
  "prototypeSee",
  "prototypeUserRoleFilter",
  "prototypeUserRoleFilterOpen",
  "prototypeUserMenu",
  "prototypeUserOpen",
  "prototypeSelectOpen",
  "prototypeInvitedUsers",
  "prototypeAddedCompanies",
  "prototypeCompanyForm",
  "prototypeCompanyDraftName",
  "prototypeCompanyDraftType",
  "prototypeCompanyNameError",
  "prototypeCompanyRecord",
  "prototypeCompanyRecordTab",
  "prototypeCompanyMeterQuery",
  "prototypeCompanyTicketQuery",
  "prototypeCompanyLogQuery",
  "prototypeCompanyMeterFilters",
  "prototypeCompanyTicketFilters",
  "prototypeCompanyLogFilters",
  "prototypeCompanyLog",
  "prototypeCompanyMeters",
  "prototypeWalkUsers",
  "prototypeTeams",
  "prototypeTeam",
  "prototypeTeamQuery",
  "prototypeTeamPeopleQuery",
  "prototypeTeamForm",
  "prototypeTeamDraftName",
  "prototypeTeamDraftCompany",
  "prototypeTeamDraftDepartment",
  "prototypeTeamDraftPeople",
  "prototypePersonSites",
  "prototypeRenewForm",
  "prototypeRenewPerson",
  "prototypeRenewFrom",
  "prototypeRenewTo",
  "prototypeRenewFileName",
  "prototypeRenewCal",
  "prototypeMeExpiresFrom",
  "prototypeMeExpiresOn",
  "prototypeMeContractName",
  "prototypeTableSort",
  "prototypeTeam",
  "prototypeMeterSettings",
  "prototypeMeterOwn",
  "prototypeMeterFold",
  "prototypeMeterAttrTab",
  "prototypeMeterUpload",
  "prototypeReportEdit",
  "prototypeReportFrom",
  "prototypeReportDraft",
  "prototypeReportDraftStart",
  "prototypeReportDraftFrom",
  "prototypeReportDraftTo",
  "prototypeReportGroup",
  "prototypeReportQuery",
  "prototypeReportFilters",
  "prototypeReportLayout",
  "prototypeTemplates",
  "prototypeTemplateShow",
  "prototypeTemplateQuery",
  "prototypeTemplateEdit",
  "prototypeTemplateDraft",
  "prototypeTemplateNotice",
];

function persistChrome() {
  if (!store) return;
  const chrome = {};
  CHROME_FIELDS.forEach((key) => {
    chrome[key] = store[key];
  });
  localStorage.setItem(CHROME_KEY, JSON.stringify(chrome));
}

function sharePrototype() {
  return Boolean(window.WORK_DESK_SHARE);
}

function fullDesk() {
  return Boolean(window.WORK_DESK_FULL);
}

function sectionAllowed(section) {
  if (sharePrototype()) return SHARE_SECTIONS.includes(section);
  if (fullDesk()) return SECTIONS.includes(section);
  return SECTIONS.includes(section) && !TEAM_HIDDEN_SECTIONS.includes(section);
}

function clampSection() {
  if (!store) return;
  if (!fullDesk()) store.activeTeam = "imserv";
  if (sharePrototype()) {
    store.activeSection = "prototype";
    store.prototypeFullscreen = true;
    return;
  }
  if (store.activeSection === "strategy" || store.activeSection === "analytics") {
    store.researchTab = store.activeSection;
    store.activeSection = "research";
  }
  if (!sectionAllowed(store.activeSection)) store.activeSection = "prototype";
}

// A library story opens the prototype where the story starts. ?open= holds its steps as JSON.
function readOpenQuery() {
  try {
    const url = new URL(location.href);
    const raw = url.searchParams.get("open");
    if (!raw) return null;
    url.searchParams.delete("open");
    history.replaceState({}, "", url.pathname + url.search + url.hash);
    const steps = JSON.parse(raw);
    return Array.isArray(steps) ? steps : null;
  } catch (err) {
    return null;
  }
}

function openStepTarget(step) {
  const host = document.querySelector("#astral-fs");
  if (!host || !step) return null;
  if (step.pane) return host.querySelector(`[data-proto-pane="${CSS.escape(step.pane)}"]`);
  if (step.fold) return host.querySelector(`[data-proto-meter-fold="${CSS.escape(step.fold)}"]`);
  if (step.button) {
    return [...host.querySelectorAll("button, [role=tab]")].find((el) => el.innerText.trim() === step.button) || null;
  }
  if (step.row) {
    return [...host.querySelectorAll(".astral-profile-table tbody tr")].find((el) => el.innerText.startsWith(step.row)) || null;
  }
  if (step.click) return host.querySelector(step.click);
  return null;
}

async function runOpenSteps(steps) {
  if (!steps || typeof setProto !== "function") return;
  const wait = (ms) => new Promise((done) => setTimeout(done, ms));
  const home = typeof protoPortfolioHomePatch === "function" ? protoPortfolioHomePatch() : {};
  setProto({ ...home, activePrototypeView: "portfolio", prototypeFullscreen: true });
  for (const step of steps) {
    let target = null;
    for (let i = 0; i < 40 && !target; i++) {
      await wait(150);
      target = openStepTarget(step);
    }
    if (!target) return;
    target.click();
  }
}

function applyPreviewQuery() {
  if (!store || sharePrototype()) return;
  let preview = "";
  try {
    preview = new URLSearchParams(location.search).get("preview") || "";
  } catch (err) {
    return;
  }
  if (preview !== "prototype" && preview !== "library" && preview !== "emails") return;
  store.activeSection = "prototype";
  store.prototypeFullscreen = true;
  store.prototypeLibraryOn = preview === "library";
  store.prototypeEmailsOn = preview === "emails";
  store.prototypePreviewHidden = false;
  try {
    const url = new URL(location.href);
    url.searchParams.delete("preview");
    history.replaceState({}, "", url.pathname + url.search + url.hash);
  } catch (err) {
    /* Keep the query if history cannot change. */
  }
}

function applyChrome() {
  if (!store) return;
  let chrome = null;
  try {
    chrome = JSON.parse(localStorage.getItem(CHROME_KEY) || "null");
    if (!chrome) return;
    CHROME_FIELDS.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(chrome, key)) store[key] = chrome[key];
    });
  } catch {
    return;
  }
  store.activeTeam = store.activeTeam || "imserv";
  if (store.activeSection === "journeys") store.activeSection = "groups";
  if (store.activeSection === "done") {
    store.activeSection = "today";
    store.activeKind = "done";
  } else if (!SECTIONS.includes(store.activeSection)) {
    store.activeSection = "today";
  }
  store.accessFold = "";
  store.libraryFold = "";
  store.activeKind =
    store.activeKind === "done" || KIND_LABEL[store.activeKind]
      ? store.activeKind
      : "admin";
  store.activeLibraryTab = LIBRARY_TABS.some((tab) => tab.id === store.activeLibraryTab)
    ? store.activeLibraryTab
    : "setup";
  store.activeLanguageKind = LANGUAGE_TABS.some((tab) => tab.id === store.activeLanguageKind)
    ? store.activeLanguageKind
    : "words";
  store.activeBrandSection = store.activeBrandSection || "overview";
  store.researchView = store.researchView === "list" ? "list" : "cards";
  store.deskViews =
    store.deskViews && typeof store.deskViews === "object" && !Array.isArray(store.deskViews)
      ? store.deskViews
      : {};
  store.deskQueries =
    store.deskQueries && typeof store.deskQueries === "object" && !Array.isArray(store.deskQueries)
      ? store.deskQueries
      : {};
  store.patternStatus = String(store.patternStatus || "all");
  store.componentFamily = String(store.componentFamily || "all");
  store.researchSeverity = RESEARCH_SEVERITIES.some((item) => item.id === store.researchSeverity)
    ? store.researchSeverity
    : "all";
  store.researchTab = activeResearchTab();
  store.researchActivity = activeResearchActivity();
  store.researchMoveActivity = activeMoveActivity();
  store.researchDocSource = activeResearchDocSource();
  store.researchOpen = String(store.researchOpen || "");
  store.activePrototypeView = protoViewId(store.activePrototypeView);
  // A refresh keeps the place. Opening Portfolio from the rail still lands on All.
  store.prototypeScope = store.prototypeScope === "site" ? "site" : "group";
  store.prototypeGroup = String(store.prototypeGroup || (store.prototypeScope === "group" ? "all" : ""));
  store.prototypeMeterSettings = String(store.prototypeMeterSettings || "");
  store.prototypeMeterOwn = String(store.prototypeMeterOwn || "");
  if (store.prototypeMeterOverrides != null && (typeof store.prototypeMeterOverrides !== "object" || Array.isArray(store.prototypeMeterOverrides))) {
    delete store.prototypeMeterOverrides;
  }
  if (store.prototypeCustomPresets != null && (typeof store.prototypeCustomPresets !== "object" || Array.isArray(store.prototypeCustomPresets))) {
    delete store.prototypeCustomPresets;
  }
  ["prototypeCompanyPresets", "prototypeStandardPresets"].forEach((key) => {
    if (store[key] != null && (typeof store[key] !== "object" || Array.isArray(store[key]))) delete store[key];
  });
  store.prototypePresetScope = String(store.prototypePresetScope || "").slice(0, 120);
  store.prototypePresetCompanyQuery = String(store.prototypePresetCompanyQuery || "").slice(0, 120);
  store.prototypeMeterOwnDrafts =
    store.prototypeMeterOwnDrafts && typeof store.prototypeMeterOwnDrafts === "object" && !Array.isArray(store.prototypeMeterOwnDrafts)
      ? store.prototypeMeterOwnDrafts
      : {};
  store.prototypeMeterFold = String(store.prototypeMeterFold || "");
  store.prototypeTeam = String(store.prototypeTeam || "");
  store.prototypeReportEdit = String(store.prototypeReportEdit || "");
  store.prototypeReportFrom = String(store.prototypeReportFrom || "");
  store.prototypeReportDraft =
    store.prototypeReportDraft && typeof store.prototypeReportDraft === "object" && !Array.isArray(store.prototypeReportDraft)
      ? store.prototypeReportDraft
      : null;
  ["prototypeReportDraftStart", "prototypeReportDraftFrom", "prototypeReportDraftTo"].forEach((key) => {
    store[key] = String(store[key] || "");
  });
  store.prototypeReportGroup = String(store.prototypeReportGroup || "details");
  store.prototypeReportQuery = String(store.prototypeReportQuery || "").slice(0, 120);
  store.prototypeReportFilters = Array.isArray(store.prototypeReportFilters)
    ? store.prototypeReportFilters.filter((id) => typeof id === "string")
    : [];
  store.prototypeReportFilterOpen = false;
  store.prototypeReportLayout = store.prototypeReportLayout === "list" ? "list" : "cards";
  store.prototypeGroupClosed = Array.isArray(store.prototypeGroupClosed)
    ? store.prototypeGroupClosed
    : [];
  delete store.prototypeAlertCallHidden;
  store.prototypePane = protoKnownPane(store.prototypePane);
  if (store.prototypeMeterOpen == null) store.prototypeMeterOpen = undefined;
  else store.prototypeMeterOpen = String(store.prototypeMeterOpen);
  store.prototypeMeterProfiles =
    store.prototypeMeterProfiles &&
    typeof store.prototypeMeterProfiles === "object" &&
    !Array.isArray(store.prototypeMeterProfiles)
      ? store.prototypeMeterProfiles
      : {};
  store.prototypeMeterDrafts =
    store.prototypeMeterDrafts &&
    typeof store.prototypeMeterDrafts === "object" &&
    !Array.isArray(store.prototypeMeterDrafts)
      ? store.prototypeMeterDrafts
      : {};
  store.prototypeBreakdownOpen = Boolean(store.prototypeBreakdownOpen);
  store.prototypeListOpen = Boolean(store.prototypeListOpen);
  store.prototypeCompareOpen = Boolean(store.prototypeCompareOpen);
  store.prototypeCompareQuery = store.prototypeCompareQuery || "";
  store.prototypeCompareFilters = Array.isArray(store.prototypeCompareFilters)
    ? store.prototypeCompareFilters.filter((id) =>
        ["odd", "gaps", "stale", "electricity", "gas", "water", "in", "out", "tenant", "hours-on", "hours-non", "hours-off", "tou-on", "tou-off"].includes(id)
      )
    : [];
  store.prototypeCompareSort =
    store.prototypeCompareSort === "action" || store.prototypeCompareSort === "count"
      ? store.prototypeCompareSort
      : "name";
  store.prototypeCompareFilterOpen = Boolean(store.prototypeCompareFilterOpen);
  store.prototypeCompareIds = Array.isArray(store.prototypeCompareIds)
    ? store.prototypeCompareIds
    : [];
  store.prototypeSiteMeters = Array.isArray(store.prototypeSiteMeters) ? store.prototypeSiteMeters : [];
  store.prototypeChartFlows = Array.isArray(store.prototypeChartFlows)
    ? store.prototypeChartFlows.filter((id) => id === "in" || id === "out")
    : [];
  if (store.prototypeChartFlows.length !== 1) store.prototypeChartFlows = null;
  store.prototypeChartSliceOff = Array.isArray(store.prototypeChartSliceOff)
    ? store.prototypeChartSliceOff.filter((id) => typeof id === "string")
    : [];
  store.prototypePaneMeterKinds = Array.isArray(store.prototypePaneMeterKinds)
    ? store.prototypePaneMeterKinds.filter(
        (id) => id === "electricity" || id === "gas" || id === "water"
      )
    : null;
  store.prototypeCompareMeters = Array.isArray(store.prototypeCompareMeters)
    ? store.prototypeCompareMeters
    : [];
  store.prototypeCompareSites = Array.isArray(store.prototypeCompareSites)
    ? store.prototypeCompareSites
    : [];
  store.prototypeGroupSites = Array.isArray(store.prototypeGroupSites) ? store.prototypeGroupSites : [];
  store.prototypeCompareLevel = protoCompareLevelId(store.prototypeCompareLevel);
  store.prototypeReportOff = Array.isArray(store.prototypeReportOff) ? store.prototypeReportOff : [];
  store.prototypeCustomReports = Array.isArray(store.prototypeCustomReports)
    ? store.prototypeCustomReports
    : [];
  store.prototypeReportPeople =
    store.prototypeReportPeople &&
    typeof store.prototypeReportPeople === "object" &&
    !Array.isArray(store.prototypeReportPeople)
      ? store.prototypeReportPeople
      : {};
  store.prototypeReportSchedule =
    store.prototypeReportSchedule &&
    typeof store.prototypeReportSchedule === "object" &&
    !Array.isArray(store.prototypeReportSchedule)
      ? store.prototypeReportSchedule
      : {};
  store.prototypeReportDefs =
    store.prototypeReportDefs &&
    typeof store.prototypeReportDefs === "object" &&
    !Array.isArray(store.prototypeReportDefs)
      ? store.prototypeReportDefs
      : {};
  store.prototypeDownloads = protoDownloadsFrom(store.prototypeDownloads);
  store.prototypeDownloadQuery = String(store.prototypeDownloadQuery || "").slice(0, 120);
  store.prototypeDownloadFilters = protoDownloadFilterIds(store.prototypeDownloadFilters);
  store.prototypeDownloadFilterOpen = Boolean(store.prototypeDownloadFilterOpen);
  store.prototypeAlertQuery = String(store.prototypeAlertQuery || "").slice(0, 120);
  store.prototypeAlertFilters = protoAlertFilterIds(store.prototypeAlertFilters);
  store.prototypeAlertFilterOpen = Boolean(store.prototypeAlertFilterOpen);
  store.prototypeExportNotice = protoExportNoticeFrom(
    store.prototypeExportNotice,
    store.prototypeDownloads
  );
  store.prototypeTreeFilters = Array.isArray(store.prototypeTreeFilters)
    ? store.prototypeTreeFilters.filter((id) =>
        ["odd", "gaps", "stale", "electricity", "gas", "water", "in", "out", "tenant", "hours-on", "hours-non", "hours-off", "tou-on", "tou-off"].includes(id)
      )
    : [];
  store.prototypePaneFilters = Array.isArray(store.prototypePaneFilters)
    ? store.prototypePaneFilters.filter((id) =>
        ["odd", "gaps", "stale", "electricity", "gas", "water", "in", "out", "tenant", "hours-on", "hours-non", "hours-off", "tou-on", "tou-off"].includes(id)
      )
    : [];
  store.prototypeTreeFilterOpen = Boolean(store.prototypeTreeFilterOpen);
  store.prototypePaneFilterOpen = Boolean(store.prototypePaneFilterOpen);
  store.prototypeTreeFilterHost = store.prototypeTreeFilterHost === "pane" ? "pane" : "tree";
  store.prototypePaneAlertFacet = store.prototypePaneAlertFacet === "resolved" ? "resolved" : "unread";
  store.prototypeChartView = store.prototypeChartView === "individual" ? "individual" : "total";
  store.prototypeChartStyle = store.prototypeChartStyle === "line" ? "line" : "bar";
  store.prototypeChartShow = Array.isArray(store.prototypeChartShow)
    ? store.prototypeChartShow.filter((id) => id === "hours" || id === "tou")
    : [];
  store.prototypeZoneFor = String(store.prototypeZoneFor || "");
  store.prototypeZoneUtility = ["Electricity", "Gas", "Water"].includes(store.prototypeZoneUtility)
    ? store.prototypeZoneUtility
    : "";
  store.prototypeChartSettingsOpen = Boolean(store.prototypeChartSettingsOpen);
  store.prototypePillsOpen = Boolean(store.prototypePillsOpen);
  store.prototypeChartFilterOpen = Boolean(store.prototypeChartFilterOpen);
  store.prototypeReportForm = Boolean(store.prototypeReportForm);
  store.prototypeQueryForm = Boolean(store.prototypeQueryForm);
  store.prototypeQuerySite = store.prototypeQuerySite || "";
  store.prototypeOpenQuery = store.prototypeOpenQuery || "";
  store.prototypeQueryCommentOpen = Boolean(store.prototypeQueryCommentOpen);
  store.prototypeQueryComments =
    store.prototypeQueryComments &&
    typeof store.prototypeQueryComments === "object" &&
    !Array.isArray(store.prototypeQueryComments)
      ? store.prototypeQueryComments
      : {};
  store.prototypeRaisedQueries = Array.isArray(store.prototypeRaisedQueries)
    ? store.prototypeRaisedQueries
    : [];
  store.prototypeChartPoint =
    store.prototypeChartPoint && typeof store.prototypeChartPoint === "object"
      ? store.prototypeChartPoint
      : null;
  store.prototypePointTags =
    typeof protoPointTagMap === "function" ? protoPointTagMap(store.prototypePointTags) : {};
  store.prototypePointTagPool =
    typeof protoPointTagList === "function" ? protoPointTagList(store.prototypePointTagPool) : [];
  store.prototypePointTagOpen = Boolean(store.prototypePointTagOpen);
  store.prototypePointTagQuery = String(store.prototypePointTagQuery || "").slice(0, 32);
  store.prototypeAlertAck = Array.isArray(store.prototypeAlertAck) ? store.prototypeAlertAck : [];
  store.prototypeAlertUndo = Array.isArray(store.prototypeAlertUndo) ? store.prototypeAlertUndo : [];
  store.prototypeAlertRead = Array.isArray(store.prototypeAlertRead) ? store.prototypeAlertRead : [];
  store.prototypeQueryResolve =
    store.prototypeQueryResolve &&
    typeof store.prototypeQueryResolve === "object" &&
    !Array.isArray(store.prototypeQueryResolve)
      ? store.prototypeQueryResolve
      : {};
  store.prototypeAckOpen = "";
  store.prototypeReportRun = store.prototypeReportRun || "";
  store.prototypeUserForm = Boolean(store.prototypeUserForm);
  store.prototypeRenewForm = Boolean(store.prototypeRenewForm);
  store.prototypeRenewPerson = store.prototypeRenewPerson || "";
  store.prototypeRenewFrom = store.prototypeRenewFrom || "";
  store.prototypeRenewTo = store.prototypeRenewTo || "";
  store.prototypeRenewFileName = store.prototypeRenewFileName || "";
  store.prototypeRenewCal = store.prototypeRenewCal || "";
  store.prototypeMeExpiresFrom = store.prototypeMeExpiresFrom || "";
  store.prototypeMeExpiresOn = store.prototypeMeExpiresOn || "";
  store.prototypeMeContractName = store.prototypeMeContractName || "";
  store.prototypeTableSort = protoTableSortMap(store.prototypeTableSort);
  store.prototypePersonSites =
    store.prototypePersonSites &&
    typeof store.prototypePersonSites === "object" &&
    !Array.isArray(store.prototypePersonSites)
      ? store.prototypePersonSites
      : {};
  store.prototypeUserQuery = store.prototypeUserQuery || "";
  store.prototypeCompanyQuery = String(store.prototypeCompanyQuery || "").slice(0, 120);
  store.prototypeSeeAsCompany =
    typeof protoKnownSeeAsCompany === "function"
      ? protoKnownSeeAsCompany(store.prototypeSeeAsCompany, store.prototypeAddedCompanies)
      : "";
  store.prototypeSeeAsUser = String(store.prototypeSeeAsUser || "");
  store.prototypeOrgByCompany =
    store.prototypeOrgByCompany &&
    typeof store.prototypeOrgByCompany === "object" &&
    !Array.isArray(store.prototypeOrgByCompany)
      ? store.prototypeOrgByCompany
      : {};
  store.prototypeTeamPeopleQuery = store.prototypeTeamPeopleQuery || "";
  store.prototypeUserDrafts =
    Array.isArray(store.prototypeUserDrafts) && store.prototypeUserDrafts.length
      ? store.prototypeUserDrafts.map((item) => String(item || ""))
      : [""];
  store.prototypeUserInviteRole = store.prototypeUserInviteRole || "contributor";
  store.prototypeMeRole = store.prototypeMeRole || "manager";
  store.prototypeUserGroup = store.prototypeUserGroup || "end-customer";
  store.prototypeAccess = store.prototypeAccess || "";
  store.prototypeTenure = store.prototypeTenure === "temporary" ? "temporary" : "permanent";
  store.prototypeSee = store.prototypeSee || "";
  store.prototypeUserRoleFilter = Array.isArray(store.prototypeUserRoleFilter)
    ? store.prototypeUserRoleFilter.filter((id) => typeof id === "string" && id && id !== "all")
    : !store.prototypeUserRoleFilter || store.prototypeUserRoleFilter === "all"
      ? []
      : [String(store.prototypeUserRoleFilter)];
  store.prototypeUserRoleFilterOpen = Boolean(store.prototypeUserRoleFilterOpen);
  store.prototypeUserMenu = store.prototypeUserMenu || "";
  store.prototypeUserOpen = store.prototypeUserOpen || "";
  store.prototypeSelectOpen = store.prototypeSelectOpen || "";
  store.prototypeReportCalOpen = Boolean(store.prototypeReportCalOpen);
  store.prototypeReportCal = store.prototypeReportCal || "";
  store.prototypeInvitedUsers = Array.isArray(store.prototypeInvitedUsers)
    ? store.prototypeInvitedUsers
    : [];
  store.prototypeAddedCompanies = Array.isArray(store.prototypeAddedCompanies)
    ? store.prototypeAddedCompanies
    : [];
  store.prototypeCompanyForm = Boolean(store.prototypeCompanyForm);
  store.prototypeCompanyDraftName = String(store.prototypeCompanyDraftName || "").slice(0, 80);
  store.prototypeCompanyDraftType = ["customer", "supplier", "broker"].includes(
    store.prototypeCompanyDraftType
  )
    ? store.prototypeCompanyDraftType
    : "customer";
  store.prototypeCompanyNameError = Boolean(store.prototypeCompanyNameError);
  store.prototypeCompanyRecord = String(store.prototypeCompanyRecord || "");
  store.prototypeCompanyRecordTab = ["meters", "log"].includes(store.prototypeCompanyRecordTab)
    ? store.prototypeCompanyRecordTab
    : "queries";
  store.prototypeCompanyMeterQuery = String(store.prototypeCompanyMeterQuery || "").slice(0, 120);
  store.prototypeCompanyTicketQuery = String(store.prototypeCompanyTicketQuery || "").slice(0, 120);
  store.prototypeCompanyLogQuery = String(store.prototypeCompanyLogQuery || "").slice(0, 120);
  store.prototypeCompanyMeterFilters = Array.isArray(store.prototypeCompanyMeterFilters)
    ? store.prototypeCompanyMeterFilters.map(String)
    : [];
  store.prototypeCompanyTicketFilters = Array.isArray(store.prototypeCompanyTicketFilters)
    ? store.prototypeCompanyTicketFilters.map(String)
    : [];
  store.prototypeCompanyLogFilters = Array.isArray(store.prototypeCompanyLogFilters)
    ? store.prototypeCompanyLogFilters.map(String)
    : [];
  store.prototypeCompanyLog = Array.isArray(store.prototypeCompanyLog)
    ? store.prototypeCompanyLog
        .filter((event) => event && typeof event === "object" && event.company && event.text)
        .slice(-500)
    : [];
  store.prototypeCompanyMeters =
    store.prototypeCompanyMeters &&
    typeof store.prototypeCompanyMeters === "object" &&
    !Array.isArray(store.prototypeCompanyMeters)
      ? store.prototypeCompanyMeters
      : {};
  if (typeof protoSeedWalkUsers === "function") protoSeedWalkUsers();
  store.prototypeSignedOut = Boolean(store.prototypeSignedOut);
  store.prototypeLibraryOn = Boolean(store.prototypeLibraryOn);
  store.prototypeEmailsOn = Boolean(store.prototypeEmailsOn);
  if (!Object.prototype.hasOwnProperty.call(chrome, "prototypeProfileDraftName")) {
    store.prototypeProfileDraftName = store.prototypeProfileName || "";
  }
  if (!Object.prototype.hasOwnProperty.call(chrome, "prototypeProfileDraftDiscipline")) {
    store.prototypeProfileDraftDiscipline = store.prototypeProfileDiscipline || "";
  }
  if (!Object.prototype.hasOwnProperty.call(chrome, "prototypeProfileDraftJobTitle")) {
    store.prototypeProfileDraftJobTitle = store.prototypeProfileJobTitle || "";
  }
  clampSection();
}

async function persist() {
  if (sharePrototype()) {
    persistChrome();
    return;
  }
  persistChrome();
  store.updated = todayIso();
  store.revision = (Number(store.revision) || 0) + 1;
  const save = { ...store };
  delete save.prototypeBrandLogo;
  delete save.prototypeOrgByCompany;
  delete save.prototypeProfilePicture;
  delete save.prototypeProfileDraftName;
  delete save.prototypeProfileDraftDiscipline;
  delete save.prototypeProfileDraftJobTitle;
  delete save.prototypeMeterProfiles;
  delete save.prototypeMeterDrafts;
  delete save.prototypeMeterOwnDrafts;
  delete save.prototypeInvitedUsers;
  delete save.prototypeUserDrafts;
  const body = JSON.stringify(save, null, 2) + "\n";
  if (!canWrite) {
    localStorage.setItem("work-desk-board", body);
    setSave("warn", "Ticks stay in this browser only");
    return;
  }
  try {
    const res = await fetch("/data/board.json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (res.status === 409) {
      store = normalize(await res.json());
      applyChrome();
      render();
      setSave("warn", "Reloaded. Another tab had a newer board.");
      return;
    }
    if (!res.ok) throw new Error("save failed");
    setSave("ok", "Saved");
  } catch {
    store.revision = Math.max((Number(store.revision) || 1) - 1, 0);
    localStorage.setItem("work-desk-board", body);
    setSave("warn", "Could not save to the file");
  }
}

function findTask(id) {
  const current = board();
  const inToday = (current.today || []).find((task) => task.id === id);
  if (inToday) return { list: "today", task: inToday };
  const inDone = (current.done || []).find((task) => task.id === id);
  if (inDone) return { list: "done", task: inDone };
  return null;
}

function onCheck(event) {
  const box = event.target.closest("input[type='checkbox'][data-id]");
  if (!box) return;
  const found = findTask(box.dataset.id);
  if (!found) return;
  const current = board();

  if (box.checked && found.list === "today") {
    current.today = current.today.filter((task) => task.id !== found.task.id);
    current.done = [
      (({ doing, ...rest }) => ({ ...rest, doneOn: todayIso() }))(found.task),
      ...(current.done || []),
    ];
  } else if (!box.checked && found.list === "done") {
    current.done = current.done.filter((task) => task.id !== found.task.id);
    const restored = { ...found.task };
    delete restored.doneOn;
    current.today = [...(current.today || []), restored];
  }
  render();
  persist();
}

function onAdd(event) {
  event.preventDefault();
  const title = els.form.title.value.trim();
  if (!title) return;
  const project = els.form.project.value.trim();
  const kind = taskKind({ kind: els.form.kind.value });
  store.activeKind = kind;
  const current = board();
  current.today = [
    ...(current.today || []),
    {
      id: `local-${Date.now()}`,
      title,
      note: "Added on the board.",
      project: project || teamName(store.activeTeam),
      kind,
      added: todayIso(),
    },
  ];
  els.form.reset();
  render();
  persist();
}

function onAddGroup(event) {
  event.preventDefault();
  const name = els.groupForm.name.value.trim();
  const who = els.groupForm.who.value.trim();
  if (!name || !who) return;
  const current = board();
  current.groups = [
    ...(current.groups || []),
    {
      id: `group-${Date.now()}`,
      name,
      status: "draft",
      who,
      need: "",
      heard: "",
      from: "Added on the board",
      open: "",
      notes: [],
      journey: [],
    },
  ];
  els.groupForm.reset();
  render();
  persist();
}

function onGroupClick(event) {
  if (event.target.closest("[data-action='group-back']")) {
    closeGroup();
    return;
  }
  const tab = event.target.closest("[data-group-tab]");
  if (tab) {
    store.groupTab = tab.dataset.groupTab;
    render();
    persistChrome();
    return;
  }
  const research = event.target.closest("[data-action='research-open']");
  if (research && els.groupsList.contains(research)) {
    const id = String(research.dataset.id || "");
    store.activeSection = "research";
    store.activeGroup = "";
    store.groupReturn = "";
    store.researchTab = researchTabFor(id);
    store.researchOpen = id;
    render();
    persistChrome();
    window.scrollTo({ top: 0 });
    return;
  }
  const button = event.target.closest("[data-action='status']");
  if (!button) return;
  event.preventDefault();
  const group = (board().groups || []).find((item) => item.id === button.dataset.id);
  if (!group) return;
  group.status = nextStatus(group.status || "draft");
  render();
  persist();
}

function syncAccessKind() {
  const person = els.accessKind.value === "person";
  els.modalPersonFields.hidden = !person;
  els.modalPersonFields.disabled = !person;
  els.modalToolFields.hidden = person;
  els.modalToolFields.disabled = person;
}

function openAccessModal() {
  els.accessKindTeam.textContent = `This team (${teamName(store.activeTeam)})`;
  els.accessModalForm.reset();
  els.accessKind.value = "person";
  syncAccessKind();
  els.accessModal.showModal();
}

function closeAccessModal() {
  if (els.accessModal.open) els.accessModal.close();
}

function onAddAccessItem(event) {
  event.preventDefault();
  const kind = els.accessKind.value;
  if (kind === "person") {
    const name = els.accessModalForm.personName.value.trim();
    const helps = els.accessModalForm.helps.value.trim();
    const how = els.accessModalForm.how.value.trim();
    if (!name || !helps || !how) return;
    store.access.people = [
      ...(store.access.people || []),
      {
        id: `person-${Date.now()}`,
        name,
        helps,
        how,
      },
    ];
    store.accessFold = "people";
  } else {
    const name = els.accessModalForm.toolName.value.trim();
    const have = els.accessModalForm.have.value.trim();
    const ask = els.accessModalForm.ask.value.trim();
    const lost = els.accessModalForm.lost.value.trim();
    if (!name || !have || !ask || !lost) return;
    const item = {
      id: `access-${Date.now()}`,
      name,
      have,
      ask,
      lost,
    };
    if (kind === "team") {
      const current = board();
      current.access = [...(current.access || []), item];
      store.accessFold = "team";
    } else {
      store.access.company = [...(store.access.company || []), item];
      store.accessFold = "company";
    }
  }
  closeAccessModal();
  render();
  persist();
}

function accessFoldId() {
  const raw = store?.accessFold;
  return ACCESS_FOLDS.includes(raw) ? raw : "";
}

function applyAccessFolds() {
  const open = accessFoldId();
  document.querySelectorAll("[data-access-fold]").forEach((block) => {
    const on = block.dataset.accessFold === open;
    block.classList.toggle("is-open", on);
    const head = block.querySelector("[data-access-fold-head]");
    if (head) head.setAttribute("aria-expanded", on ? "true" : "false");
    const clip = block.querySelector(":scope > .desk-fold-clip");
    if (!clip) return;
    clip.setAttribute("aria-hidden", on ? "false" : "true");
    clip.toggleAttribute("inert", !on);
  });
}

function onAccessClick(event) {
  const foldHead = event.target.closest("[data-access-fold-head]");
  if (foldHead) {
    event.preventDefault();
    const id = foldHead.closest("[data-access-fold]")?.dataset.accessFold;
    if (!ACCESS_FOLDS.includes(id)) return;
    store.accessFold = accessFoldId() === id ? "" : id;
    applyAccessFolds();
    persistChrome();
    return;
  }
  const button = event.target.closest("[data-action]");
  if (!button) return;
  event.preventDefault();
  if (button.dataset.action === "remove-person") {
    store.access.people = (store.access.people || []).filter(
      (person) => person.id !== button.dataset.id
    );
    closeDetail();
    render();
    persist();
    return;
  }
  if (button.dataset.action === "remove-access") {
    if (button.dataset.scope === "team") {
      const current = board();
      current.access = (current.access || []).filter(
        (item) => item.id !== button.dataset.id
      );
    } else {
      store.access.company = (store.access.company || []).filter(
        (item) => item.id !== button.dataset.id
      );
    }
    closeDetail();
    render();
    persist();
  }
}

function onOpenCard(event) {
  const page = event.target.closest("[data-group-page]");
  if (page) {
    openGroup(page.dataset.groupPage);
    return;
  }
  const trigger = event.target.closest("[data-open]");
  if (!trigger) return;
  if (event.target.closest("input[type='checkbox']")) return;
  showDetail(trigger.dataset.open, trigger.dataset.id, trigger.dataset.scope);
}

function onAddNote(event) {
  const form = event.target.closest(".note-form");
  if (!form) return;
  event.preventDefault();
  const group = (board().groups || []).find((item) => item.id === form.dataset.id);
  if (!group) return;
  const text = form.note.value.trim();
  if (!text) return;
  group.notes = [...(group.notes || []), { text, added: todayIso() }];
  render();
  persist();
}

function setKind(kind) {
  if (kind !== "done" && !KIND_LABEL[kind]) return;
  store.activeKind = kind;
  render();
  persistChrome();
}

function onKindTab(event) {
  const tab = event.target.closest("[data-kind]");
  if (!tab) return;
  setKind(tab.dataset.kind);
}

function onLibraryTab(event) {
  const tab = event.target.closest("[data-library-tab]");
  if (!tab) return;
  store.activeLibraryTab = tab.dataset.libraryTab;
  store.activeComponent = "";
  render();
  persistChrome();
}

function onLibraryNav(event) {
  const foldHead = event.target.closest("[data-library-fold-head]");
  if (foldHead) {
    event.preventDefault();
    const id = foldHead.closest("[data-library-fold]")?.dataset.libraryFold;
    if (!id) return;
    const ids = [...els.libraryList.querySelectorAll("[data-library-fold]")].map(
      (el) => el.dataset.libraryFold
    );
    store.libraryFold = libraryFoldOpen(ids) === id ? "" : id;
    applyLibraryFolds();
    persistChrome();
    return;
  }
  const sortBtn = event.target.closest("[data-proto-sort]");
  if (sortBtn) {
    protoToggleTableSort(sortBtn.dataset.protoSort, sortBtn.dataset.protoSortKey);
    return;
  }
  const sw = event.target.closest(".astral-switch");
  if (sw) {
    const on = !sw.classList.contains("is-on");
    sw.classList.toggle("is-on", on);
    sw.setAttribute("aria-checked", on ? "true" : "false");
    return;
  }
  const back = event.target.closest("[data-action='library-back']");
  if (back) {
    store.activeComponent = "";
    render();
    persistChrome();
    return;
  }
  const card = event.target.closest("[data-library-component]");
  if (!card) return;
  store.activeLibraryTab = "components";
  store.activeComponent = card.dataset.libraryComponent;
  render();
  persistChrome();
}

function onResearchClick(event) {
  const view = event.target.closest("[data-research-view]");
  if (view) {
    store.researchView = view.dataset.researchView === "list" ? "list" : "cards";
    render();
    persistChrome();
    return;
  }
  const docSource = event.target.closest("[data-research-doc-source]");
  if (docSource) {
    const id = docSource.dataset.researchDocSource;
    store.researchDocSource = id !== activeResearchDocSource() ? id : "all";
    render();
    persistChrome();
    return;
  }
  const moveActivity = event.target.closest("[data-research-move-activity]");
  if (moveActivity) {
    const id = moveActivity.dataset.researchMoveActivity;
    store.researchMoveActivity = id !== activeMoveActivity() ? id : "all";
    render();
    persistChrome();
    return;
  }
  const activity = event.target.closest("[data-research-activity]");
  if (activity) {
    const id = activity.dataset.researchActivity;
    const known = RESEARCH_ACTIVITIES.some((item) => item.id === id);
    store.researchActivity = known && id !== activeResearchActivity() ? id : "all";
    render();
    persistChrome();
    return;
  }
  const filter = event.target.closest("[data-research-severity]");
  if (!filter) return;
  const id = filter.dataset.researchSeverity;
  store.researchSeverity = RESEARCH_SEVERITIES.some((item) => item.id === id) ? id : "all";
  render();
  persistChrome();
}

function onAnalyticsClick(event) {
  const tab = event.target.closest("[data-kei]");
  if (!tab) return;
  store.activeKei = tab.dataset.kei;
  render();
  persistChrome();
}

function onLanguageTab(event) {
  const tab = event.target.closest("[data-language-tab]");
  if (!tab) return;
  store.activeLanguageKind = tab.dataset.languageTab;
  render();
  persistChrome();
}

function onBrandTab(event) {
  const tab = event.target.closest("[data-brand-tab]");
  if (!tab) return;
  store.activeBrandSection = tab.dataset.brandTab;
  render();
  persistChrome();
}

function openComponent(id) {
  if (!id) return;
  store.activeSection = "library";
  store.activeLibraryTab = "components";
  store.activeComponent = id;
  render();
  persistChrome();
}

function onPatternNav(event) {
  const back = event.target.closest("[data-action='pattern-back']");
  if (back) {
    store.activePattern = "";
    render();
    persistChrome();
    return;
  }
  const piece = event.target.closest("[data-action='open-component']");
  if (piece) {
    openComponent(piece.dataset.id);
    return;
  }
  const card = event.target.closest("[data-pattern]");
  if (!card) return;
  store.activePattern = card.dataset.pattern;
  render();
  persistChrome();
}

function openSkill(id) {
  const item = skillById(id);
  if (!item) return;
  store.activeSection = "skills";
  store.activeSkill = id;
  store.skillFold = item.group || store.skillFold || "";
  render();
  persistChrome();
}

function onSkillNav(event) {
  const back = event.target.closest("[data-action='skill-back']");
  if (back) {
    store.activeSkill = "";
    render();
    persistChrome();
    return;
  }
  const piece = event.target.closest("[data-action='open-component']");
  if (piece) {
    openComponent(piece.dataset.id);
    return;
  }
  const sibling = event.target.closest("[data-action='open-skill']");
  if (sibling) {
    openSkill(sibling.dataset.id);
    return;
  }
  const foldHead = event.target.closest("[data-skill-fold-head]");
  if (foldHead) {
    const id = foldHead.closest("[data-skill-fold]")?.dataset.skillFold;
    if (!SKILL_FOLDS.includes(id)) return;
    store.skillFold = skillFoldId() === id ? "" : id;
    applySkillFolds();
    persistChrome();
    return;
  }
  const card = event.target.closest("[data-skill]");
  if (!card) return;
  store.activeSkill = card.dataset.skill;
  render();
  persistChrome();
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const found = [...document.scripts].some((script) => {
      const href = script.getAttribute("src") || "";
      return href.includes(src);
    });
    if (found) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load the starter."));
    document.head.appendChild(script);
  });
}

async function downloadAstralStarter(button) {
  try {
    if (!window.ASTRAL_LIB) await loadScriptOnce("library-site/astral-lib.js");
    if (!window.AstralLibPack) await loadScriptOnce("library-site/library-pack.js");
    if (!window.AstralLibPack || !window.ASTRAL_LIB) {
      throw new Error("missing pack");
    }
    await window.AstralLibPack.download(window.ASTRAL_LIB, button);
  } catch {
    setSave("warn", "Could not download the starter. Try again.");
  }
}

async function copyTokens() {
  const sys = teamSystem();
  if (!sys || !els.libraryCopy) return;
  const payload = JSON.stringify(dtcgDump(sys), null, 2);
  try {
    await navigator.clipboard.writeText(payload);
    els.libraryCopy.textContent = "Copied";
    els.libraryCopy.classList.add("is-copied");
    window.setTimeout(() => {
      els.libraryCopy.textContent = "Copy tokens";
      els.libraryCopy.classList.remove("is-copied");
    }, 1600);
  } catch {
    setSave("warn", "Could not copy tokens");
  }
}

function onDeskStageClick(event) {
  const viewBtn = event.target.closest("[data-desk-view]");
  if (viewBtn) {
    const [section, view] = viewBtn.dataset.deskView.split(":");
    const next = view === "list" ? "list" : "cards";
    if (section === "research") store.researchView = next;
    store.deskViews = { ...(store.deskViews || {}), [section]: next };
    render();
    persistChrome();
    deskRefocus(`[data-desk-view="${CSS.escape(viewBtn.dataset.deskView)}"]`);
    return;
  }
  const clear = event.target.closest("[data-proto-search-clear^='desk-q:']");
  if (clear) {
    const name = clear.dataset.protoSearchClear;
    setDeskQuery(name.slice(7), "");
    render();
    persistChrome();
    deskRefocus(`input[name="${CSS.escape(name)}"]`);
    return;
  }
  const jump = event.target.closest("[data-desk-jump]");
  if (jump) {
    document.getElementById(jump.dataset.deskJump)?.scrollIntoView({ block: "start", behavior: "smooth" });
    return;
  }
  const focus = event.target.closest("[data-desk-focus]");
  if (focus) {
    const field = document.getElementById(focus.dataset.deskFocus);
    if (field) {
      field.scrollIntoView({ block: "center", behavior: "smooth" });
      field.focus({ preventScroll: true });
    }
    return;
  }
  const status = event.target.closest("[data-pattern-status]");
  if (status) {
    store.patternStatus = status.dataset.patternStatus;
    render();
    persistChrome();
    deskRefocus(`[data-pattern-status="${CSS.escape(status.dataset.patternStatus)}"]`);
    return;
  }
  const family = event.target.closest("[data-component-family]");
  if (family) {
    store.componentFamily = family.dataset.componentFamily;
    render();
    persistChrome();
    deskRefocus(`[data-component-family="${CSS.escape(family.dataset.componentFamily)}"]`);
    return;
  }
  const group = event.target.closest("[data-skill-group]");
  if (group) {
    const id = group.dataset.skillGroup;
    store.skillFold = SKILL_FOLDS.includes(id) ? id : "";
    render();
    persistChrome();
    deskRefocus(`[data-skill-group="${CSS.escape(id)}"]`);
    return;
  }
  const row = event.target.closest("tr.is-link");
  if (row && !event.target.closest("button, a, input")) {
    row.querySelector(".desk-row-open")?.click();
  }
}

function setDeskQuery(section, value) {
  store.deskQueries = { ...(store.deskQueries || {}), [section]: String(value || "").slice(0, 120) };
}

function deskRefocus(selector) {
  const el = document.querySelector(`.stage ${selector}`);
  if (el) el.focus({ preventScroll: true });
}

function onDeskStageInput(event) {
  const input = event.target.closest("input[name^='desk-q:']");
  if (!input) return;
  const name = input.name;
  const caret = input.selectionStart;
  setDeskQuery(name.slice(7), input.value);
  render();
  persistChrome();
  const next = document.querySelector(`.stage input[name="${CSS.escape(name)}"]`);
  if (next) {
    next.focus({ preventScroll: true });
    try {
      next.setSelectionRange(caret, caret);
    } catch {
      /* Search inputs may not support selection in every browser. */
    }
  }
}

function setSection(section) {
  if (!sectionAllowed(section)) return;
  if (section !== store.activeSection) {
    if (section === "access") store.accessFold = "";
    if (section === "skills") store.skillFold = store.skillFold || "";
    if (section === "library") store.libraryFold = "";
  }
  if (section === "groups") {
    store.activeGroup = "";
    store.groupReturn = "";
  }
  if (section === "resources") store.activeResource = "";
  store.activeSection = section;
  if (sharePrototype()) store.prototypeFullscreen = true;
  render();
  persistChrome();
}

function onTeamChange() {
  if (sharePrototype() || !fullDesk() || !els.teamSelect) return;
  store.activeTeam = els.teamSelect.value;
  render();
  persistChrome();
}

async function probeWrite() {
  if (sharePrototype()) {
    canWrite = false;
    setSave("ok", "Share is read only");
    return;
  }
  try {
    const res = await fetch("/data/board.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Work-Desk-Probe": "1",
      },
      body: JSON.stringify(store, null, 2) + "\n",
    });
    canWrite = res.ok;
  } catch {
    canWrite = false;
  }
  if (canWrite) setSave("ok", "Saved to this folder");
  else setSave("warn", "Open with the preview script so ticks stick");
}

async function loadSystems() {
  if (window.WORK_DESK_BOOT?.systems) {
    systems = window.WORK_DESK_BOOT.systems;
    return;
  }
  try {
    const res = await fetch("/data/design-systems.json", { cache: "no-store" });
    if (!res.ok) throw new Error("missing systems");
    systems = await res.json();
  } catch {
    systems = { updated: "", systems: {} };
  }
}

// The published single-file build has no data folder, so it bundles these files in WORK_DESK_BOOT.
async function loadDeskJson(key, url) {
  const boot = window.WORK_DESK_BOOT?.[key];
  if (boot) return boot;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`missing ${key}`);
  return res.json();
}

async function loadExperience() {
  try {
    const data = await loadDeskJson("experience", "/docs/research/experience/keis.json");
    experience = {
      updated: data.updated || "",
      keis: Array.isArray(data.keis) ? data.keis : [],
      how: keiListOr(data.how, KEI_DIMENSIONS),
      structure: keiListOr(data.structure, KEI_STRUCTURE),
      cuts: keiListOr(data.cuts, KEI_CUTS),
    };
  } catch {
    experience = {
      updated: "",
      keis: [],
      how: KEI_DIMENSIONS,
      structure: KEI_STRUCTURE,
      cuts: KEI_CUTS,
    };
  }
}

async function loadSkills() {
  try {
    const data = await loadDeskJson("skills", "/data/skills.json");
    skillsCatalog = {
      lead: data.lead || "",
      groups: Array.isArray(data.groups) ? data.groups : [],
    };
  } catch {
    skillsCatalog = { lead: "", groups: [] };
  }
}

async function loadResources() {
  try {
    const data = await loadDeskJson("resources", "/data/resources.json");
    resourcesCatalog = {
      lead: data.lead || "",
      themes: Array.isArray(data.themes) ? data.themes : [],
      kinds: Array.isArray(data.kinds) ? data.kinds : [],
    };
  } catch {
    resourcesCatalog = { lead: "", themes: [], kinds: [] };
  }
}

async function loadRoadmap() {
  try {
    const data = await loadDeskJson("roadmap", "/data/roadmap.json");
    roadmapCatalog = {
      lead: data.lead || "",
      all: data.all || "",
      kinds: Array.isArray(data.kinds) ? data.kinds : [],
      releases: Array.isArray(data.releases) ? data.releases : [],
    };
  } catch {
    roadmapCatalog = { lead: "", all: "", kinds: [], releases: [] };
  }
}

async function load() {
  try {
    if (window.WORK_DESK_BOOT?.board) {
      store = normalize(window.WORK_DESK_BOOT.board);
    } else {
      const res = await fetch("/data/board.json", { cache: "no-store" });
      if (!res.ok) throw new Error("missing board");
      store = normalize(await res.json());
    }
  } catch {
    const cached = localStorage.getItem("work-desk-board");
    store = cached ? normalize(JSON.parse(cached)) : null;
  }
  if (!store) {
    setSave("warn", "Could not open the board");
    els.headline.textContent = "The board did not load";
    els.situation.textContent =
      "Start it with the preview script in this folder.";
    return;
  }
  await loadSystems();
  await loadExperience();
  await loadSkills();
  await loadResources();
  await loadRoadmap();
  applyChrome();
  clampSection();
  const openSteps = readOpenQuery();
  applyPreviewQuery();
  await probeWrite();
  render();
  runOpenSteps(openSteps);
}

document.body.addEventListener("change", onCheck);
els.form.addEventListener("submit", onAdd);
if (els.todayTabs) els.todayTabs.addEventListener("click", onKindTab);
if (els.libraryTabs) els.libraryTabs.addEventListener("click", onLibraryTab);
if (els.libraryList) els.libraryList.addEventListener("click", onLibraryNav);
if (els.libraryCopy) els.libraryCopy.addEventListener("click", copyTokens);
if (els.languageTabs) els.languageTabs.addEventListener("click", onLanguageTab);
if (els.brandingTabs) els.brandingTabs.addEventListener("click", onBrandTab);
if (els.researchView) els.researchView.addEventListener("click", onResearchClick);
if (els.researchFilters) els.researchFilters.addEventListener("click", onResearchClick);
if (els.researchTabs) els.researchTabs.addEventListener("click", onResearchTab);
if (els.researchPlanning) els.researchPlanning.addEventListener("click", onResearchPage);
if (els.researchStrategy) els.researchStrategy.addEventListener("click", onResearchPage);
if (els.researchReporting) els.researchReporting.addEventListener("click", onResearchPage);
if (els.researchDocuments) els.researchDocuments.addEventListener("click", onResearchPage);
if (els.analyticsKeis) els.analyticsKeis.addEventListener("click", onAnalyticsClick);
if (els.patternsList) els.patternsList.addEventListener("click", onPatternNav);
if (els.skillsList) els.skillsList.addEventListener("click", onSkillNav);
if (els.resourcesList) els.resourcesList.addEventListener("click", onResourceNav);
if (els.roadmapList) els.roadmapList.addEventListener("click", onRoadmapNav);
if (els.prototypeRoot) {
  els.prototypeRoot.addEventListener("click", onPrototype);
  els.prototypeRoot.addEventListener("input", onPrototypeInput);
}
if (els.astralFs) {
  els.astralFs.addEventListener("click", onPrototype);
  els.astralFs.addEventListener("pointerdown", onPrototypePointerDown);
  els.astralFs.addEventListener("beforeinput", onPrototypeBeforeInput);
  els.astralFs.addEventListener("input", onPrototypeInput);
  els.astralFs.addEventListener("change", onPrototypeInput);
  els.astralFs.addEventListener("pointerover", onPrototypeTip);
  els.astralFs.addEventListener("pointermove", onPrototypeTip);
  els.astralFs.addEventListener("pointerout", onPrototypeTip);
  els.astralFs.addEventListener("pointerleave", hideProtoTips);
  els.astralFs.addEventListener("scroll", protoClearIconTipPlace, true);
  els.astralFs.addEventListener("focusin", onPrototypeTip);
  els.astralFs.addEventListener("focusout", onPrototypeTip);
  els.astralFs.addEventListener("focusin", onPrototypeFocus);
  els.astralFs.addEventListener("focusout", onPrototypeFocus);
  els.astralFs.addEventListener("submit", onPrototypeSubmit);
}
els.groupForm.addEventListener("submit", onAddGroup);
els.groupsList.addEventListener("click", onGroupClick);
els.groupsList.addEventListener("submit", onAddNote);
els.accessAdd.addEventListener("click", openAccessModal);
els.accessKind.addEventListener("change", syncAccessKind);
els.accessModalForm.addEventListener("submit", onAddAccessItem);
els.accessModalCancel.addEventListener("click", closeAccessModal);
els.accessModal.addEventListener("click", (event) => {
  if (event.target === els.accessModal) closeAccessModal();
});
els.accessPanel.addEventListener("click", onAccessClick);
els.detailClose.addEventListener("click", closeDetail);
els.detailModal.addEventListener("click", (event) => {
  if (event.target === els.detailModal) closeDetail();
});
els.detailModal.addEventListener("close", () => {
  openDetail = null;
});
els.detailBody.addEventListener("click", (event) => {
  onGroupClick(event);
  onAccessClick(event);
});
els.detailBody.addEventListener("submit", onAddNote);
document.querySelector(".stage").addEventListener("click", onOpenCard);
document.querySelector(".stage").addEventListener("click", onDeskStageClick);
document.querySelector(".stage").addEventListener("input", onDeskStageInput);
if (els.teamSelect) els.teamSelect.addEventListener("change", onTeamChange);
document.querySelector(".side").addEventListener("click", (event) => {
  const link = event.target.closest(".side-link");
  if (!link) return;
  setSection(link.dataset.section);
  setDeskRail(false);
});
document.querySelectorAll("[data-desk-rail]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const open = !document.body.classList.contains("is-desk-rail-open");
    setDeskRail(btn.dataset.deskRail === "close" ? false : open);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!document.body.classList.contains("is-desk-rail-open")) return;
  setDeskRail(false);
  document.querySelector(".desk-menu")?.focus();
});
deskShellIcons();
load();
