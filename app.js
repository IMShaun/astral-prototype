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
  "journeys",
  "research",
  "strategy",
  "analytics",
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
  todayList: document.getElementById("today-list"),
  canList: document.getElementById("can-list"),
  cannotList: document.getElementById("cannot-list"),
  nextList: document.getElementById("next-list"),
  knowList: document.getElementById("know-list"),
  groupsCount: document.getElementById("groups-count"),
  groupsList: document.getElementById("groups-list"),
  groupForm: document.getElementById("group-form"),
  journeysCount: document.getElementById("journeys-count"),
  journeysList: document.getElementById("journeys-list"),
  researchCount: document.getElementById("research-count"),
  researchView: document.getElementById("research-view"),
  researchFilters: document.getElementById("research-filters"),
  researchInsights: document.getElementById("research-insights"),
  strategyCount: document.getElementById("strategy-count"),
  strategyNext: document.getElementById("strategy-next"),
  strategyKnow: document.getElementById("strategy-know"),
  strategyLimits: document.getElementById("strategy-limits"),
  strategyInsights: document.getElementById("strategy-insights"),
  strategyOpen: document.getElementById("strategy-open"),
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
  navJourneysCount: document.getElementById("nav-journeys-count"),
  navResearchCount: document.getElementById("nav-research-count"),
  navStrategyCount: document.getElementById("nav-strategy-count"),
  navAnalyticsCount: document.getElementById("nav-analytics-count"),
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
        body: "Pick the team in the side menu. Today, User groups, Journeys, Research, Strategy, Analytics, Access, UI library, and Branding stay with that team.",
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
  return { insights: [] };
}

function researchBoard() {
  const current = board();
  if (!current.research) current.research = emptyResearch();
  delete current.research.todos;
  if (!Array.isArray(current.research.insights)) current.research.insights = [];
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

function strategyPriorityInsights() {
  return (researchBoard().insights || [])
    .filter((item) => {
      const severity = insightSeverity(item);
      return severity === "critical" || severity === "high";
    })
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

function strategyOpenGroups() {
  return (board().groups || []).filter((group) =>
    String(group.open || "").trim()
  );
}

function strategyMoveCount(current) {
  return (
    (current.next || []).length +
    strategyOpenGroups().length +
    strategyPriorityInsights().length
  );
}

function strategyStepCard(text, index) {
  return `
    <article class="strategy-step">
      <span class="know-index">${index + 1}</span>
      <span class="card-title">${escapeHtml(text)}</span>
    </article>
  `;
}

function strategyOpenCard(group) {
  const status = group.status || "draft";
  return `
    <article class="brand-card insight-card">
      <span class="card-top">
        <span class="status" data-status="${escapeHtml(status)}">${escapeHtml(
          STATUS_LABEL[status] || "Draft"
        )}</span>
      </span>
      <button
        type="button"
        class="insight-open"
        data-open="group"
        data-id="${escapeHtml(group.id)}"
        aria-haspopup="dialog"
      >
        <span class="card-title">${escapeHtml(group.name || "")}</span>
        <span class="card-line">${escapeHtml(group.open || "")}</span>
      </button>
    </article>
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
  return `
    <article class="strategy-step">
      <span class="status" data-status="${status}">${label}</span>
      <span class="card-title">${escapeHtml(item.name)}</span>
      ${meta ? `<span class="analytics-how-meta">${escapeHtml(meta)}</span>` : ""}
      <span class="card-line">${escapeHtml(item.body)}</span>
    </article>
  `;
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
  return `
    <article class="brand-card insight-card analytics-card">
      <span class="card-top">
        <span class="status" data-status="${escapeHtml(maturity.status)}">${escapeHtml(
          maturity.name
        )}</span>
        ${
          role
            ? `<span class="status" data-status="scaffold">${escapeHtml(role)}</span>`
            : ""
        }
        <span class="status" data-status="${escapeHtml(change.status)}">${escapeHtml(
          change.name
        )}</span>
      </span>
      <button
        type="button"
        class="insight-open"
        data-open="kei"
        data-id="${escapeHtml(item.id)}"
        aria-haspopup="dialog"
      >
        <span class="card-title">${escapeHtml(item.name || "")}</span>
        <span class="analytics-value">${escapeHtml(value)}</span>
        <span class="analytics-spark">
          ${keiLineChart(rounds, { width: 280, height: 64, spark: true })}
        </span>
        <span class="card-line">${escapeHtml(item.question || item.feature || "")}</span>
      </button>
    </article>
  `;
}

function scoreField(item) {
  return `
    <span class="research-score">
      <span class="field-label">Score</span>
      <span class="score-value">${insightScore(item)}</span>
    </span>
  `;
}

function insightCard(item) {
  const severity = insightSeverity(item);
  return `
    <article class="brand-card insight-card">
      <span class="card-top">
        <span class="status" data-status="${escapeHtml(
          researchSeverityStatus(severity)
        )}">${escapeHtml(researchSeverityName(severity))}</span>
        ${scoreField(item)}
      </span>
      <button
        type="button"
        class="insight-open"
        data-open="insight"
        data-id="${escapeHtml(item.id)}"
        aria-haspopup="dialog"
      >
        <span class="card-title">${escapeHtml(item.title || "")}</span>
        <span class="card-line">${escapeHtml(item.problem || "")}</span>
      </button>
    </article>
  `;
}

function insightRow(item) {
  const severity = insightSeverity(item);
  return `
    <li class="research-row">
      ${scoreField(item)}
      <span class="status" data-status="${escapeHtml(
        researchSeverityStatus(severity)
      )}">${escapeHtml(researchSeverityName(severity))}</span>
      <button
        type="button"
        class="insight-open"
        data-open="insight"
        data-id="${escapeHtml(item.id)}"
        aria-haspopup="dialog"
      >
        <span class="card-title">${escapeHtml(item.title || "")}</span>
        <span class="card-line">${escapeHtml(item.problem || "")}</span>
      </button>
    </li>
  `;
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
      : ["in", "out"];
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
    data.prototypeScope = data.prototypeScope === "group" ? "group" : "site";
    data.prototypeGroup = data.prototypeGroup || "";
    data.prototypeGroupClosed = Array.isArray(data.prototypeGroupClosed)
      ? data.prototypeGroupClosed
      : [];
    delete data.prototypeAlertCallHidden;
    data.prototypePane = protoKnownPane(data.prototypePane);
    data.prototypeBreakdownOpen = Boolean(data.prototypeBreakdownOpen);
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
    data.prototypeSettingsSection = ["organisation", "profile", "billing"].includes(
      data.prototypeSettingsSection
    )
      ? data.prototypeSettingsSection
      : "organisation";
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
  return `<div class="empty-card">${escapeHtml(text)}</div>`;
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
    ? `<span class="chip">${escapeHtml(task.project)}</span>`
    : "";
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
        <span class="task-meta">${project}</span>
      </button>
    </li>
  `;
}

function groupItem(group) {
  const status = group.status || "draft";
  return `
    <button
      type="button"
      class="group"
      data-open="group"
      data-id="${escapeHtml(group.id)}"
      aria-haspopup="dialog"
    >
      <span class="group-top">
        <span class="avatar" aria-hidden="true">${escapeHtml(
          initials(group.name)
        )}</span>
        <span class="group-title">
          <span class="status" data-status="${escapeHtml(status)}">${
            STATUS_LABEL[status] || "Draft"
          }</span>
          <span class="card-title">${escapeHtml(group.name)}</span>
        </span>
      </span>
      <span class="card-line">${escapeHtml(group.who || "Open for the rest.")}</span>
    </button>
  `;
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
        <section class="group-cluster">
          <h3 class="group-cluster-head">${escapeHtml(group.name)}</h3>
          <div class="group-grid">${cards.map(itemFn).join("")}</div>
        </section>
      `;
    })
    .join("");
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

function journeyItem(group) {
  return `
    <button
      type="button"
      class="journey-card"
      data-open="journey"
      data-id="${escapeHtml(group.id)}"
      aria-haspopup="dialog"
    >
      <span class="group-top">
        <span class="avatar" aria-hidden="true">${escapeHtml(
          initials(group.name)
        )}</span>
        <span class="group-title">
          <span class="access-scope">${escapeHtml(
            STATUS_LABEL[group.status] || "Draft"
          )}</span>
          <span class="card-title">${escapeHtml(group.name)}</span>
        </span>
      </span>
      <span class="card-line">${escapeHtml(group.who || "Open for the map.")}</span>
    </button>
  `;
}

function accessItem(item, scope) {
  return `
    <button
      type="button"
      class="access-card"
      data-open="tool"
      data-id="${escapeHtml(item.id)}"
      data-scope="${escapeHtml(scope)}"
      aria-haspopup="dialog"
    >
      <span class="avatar avatar-tool" aria-hidden="true">${escapeHtml(
        initials(item.name)
      )}</span>
      <span class="card-copy">
        <span class="card-title">${escapeHtml(item.name)}</span>
        <span class="card-line">${escapeHtml(item.have || (scope === "team" ? "This team" : "Company"))}</span>
      </span>
    </button>
  `;
}

function personItem(person) {
  return `
    <button
      type="button"
      class="access-card person-card"
      data-open="person"
      data-id="${escapeHtml(person.id)}"
      aria-haspopup="dialog"
    >
      <span class="avatar" aria-hidden="true">${escapeHtml(
        initials(person.name)
      )}</span>
      <span class="card-copy">
        <span class="card-title">${escapeHtml(person.name)}</span>
        <span class="card-line">${escapeHtml(person.helps || "Can restore access")}</span>
      </span>
    </button>
  `;
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
    <div class="token-table-wrap">
      <table class="token-table">
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
    <button
      type="button"
      class="style-card"
      data-open="textstyle"
      data-id="${escapeHtml(style.id)}"
      aria-haspopup="dialog"
    >
      <span class="style-sample"${stylePreview(style)}>${escapeHtml(style.name)}</span>
      <span class="card-line">${escapeHtml(
        `${style.group || "Type"} · ${style.figma || style.name}`
      )}</span>
    </button>
  `;
}

function componentItem(item) {
  const path = item.figma?.componentKey
    ? `${item.figma.libraryName || "IMSERV Design System"} · ${item.figma.name || item.name}`
    : item.file || "";
  return `
    <button
      type="button"
      class="brand-card"
      data-library-component="${escapeHtml(item.id)}"
    >
      <span class="card-title">${escapeHtml(item.react || item.name)}</span>
      <span class="card-line">${escapeHtml(item.summary || "Waits until tokens are firm.")}</span>
      <span class="token-path">${escapeHtml(path)}</span>
    </button>
  `;
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
    <section class="board-block desk-fold token-group" data-library-fold="${escapeHtml(id)}">
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
          ${count ? `<span class="count">${escapeHtml(count)}</span>` : ""}
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
  const intro = `
    <section class="board-block">
      <div class="section-head">
        <div>
          <h2>Base Gallery depth</h2>
          <p class="section-help">${escapeHtml(setup.lead || "")}</p>
        </div>
        <p class="count">${counts.brand} named · ${counts.waiting} waiting</p>
      </div>
      <p>${escapeHtml(ref.have || "")}</p>
      <p class="token-path">${escapeHtml(ref.fileUrl || "")}</p>
    </section>
  `;
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
    ${listBackButton("library-back", "all components")}
    <div class="page-head">
      <section class="lead">
        <p class="hero-team">${escapeHtml(item.file || "React")}</p>
        <h2>${escapeHtml(item.react || item.name)}</h2>
        <p>${escapeHtml(item.summary || "")}</p>
        ${componentFigmaLine(item)}
      </section>
    </div>
    <section class="board-block">
      <div class="section-head">
        <div>
          <h2>Preview</h2>
          <p class="section-help">Live prototype. Quiet outlines are 1px Infra Grey B. Focus is a 2px black edge.</p>
        </div>
      </div>
      ${componentPreview(item)}
    </section>
    <section class="board-block">
      <h2>Use it</h2>
      <p>${escapeHtml(item.usage || "")}</p>
      <pre class="code"><code>${escapeHtml(item.snippet || "")}</code></pre>
    </section>
    <section class="board-block">
      <h2>Kinds</h2>
      ${chipList(item.variants, "No kinds yet.")}
      <h2 class="sub-head">States</h2>
      ${chipList(item.states, "No states yet.")}
    </section>
    <section class="board-block">
      <h2>Props</h2>
      <div class="token-table-wrap">
        <table class="token-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Note</th></tr></thead>
          <tbody>${props || "<tr><td colspan='3'>None listed.</td></tr>"}</tbody>
        </table>
      </div>
    </section>
    <section class="board-block">
      <h2>Tokens</h2>
      ${tokens.length ? tokenTable(tokens) : emptyCard("No tokens named yet.")}
    </section>
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
      <h3>Wordmark</h3>
      <div class="brand-assets">${(assets.wordmarks || []).map(brandAssetFigure).join("")}</div>
      <h3>Logomark</h3>
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
    <article class="board-block brand-article" id="brand-${escapeHtml(id)}">
      <p class="field-label">${escapeHtml(section.summary || "")}</p>
      <h2>${escapeHtml(section.title)}</h2>
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
  return `
    <button
      type="button"
      class="access-card"
      data-open="brand-source"
      data-id="${escapeHtml(item.id)}"
      aria-haspopup="dialog"
    >
      <span class="avatar avatar-tool" aria-hidden="true">${escapeHtml(
        initials(item.name)
      )}</span>
      <span class="card-copy">
        <span class="card-title">${escapeHtml(item.name)}</span>
        <span class="card-line">${escapeHtml(item.have || "Source")}</span>
      </span>
    </button>
  `;
}

function languageItem(item) {
  const status = item.status || "waiting";
  const line =
    item.say && item.say !== item.name ? item.say : item.note || "Waiting";
  return `
    <button
      type="button"
      class="brand-card"
      data-open="language"
      data-id="${escapeHtml(item.id)}"
      aria-haspopup="dialog"
    >
      <span class="card-top">
        <span class="status" data-status="${escapeHtml(status)}">${escapeHtml(
          STATUS_LABEL[status] || "Waiting"
        )}</span>
        <span class="card-title">${escapeHtml(item.name)}</span>
      </span>
      <span class="card-line">${escapeHtml(line)}</span>
    </button>
  `;
}

function patternItem(item) {
  const status = item.status || "waiting";
  return `
    <button
      type="button"
      class="brand-card"
      data-pattern="${escapeHtml(item.id)}"
    >
      <span class="card-top">
        <span class="status" data-status="${escapeHtml(status)}">${escapeHtml(
          STATUS_LABEL[status] || "Waiting"
        )}</span>
        <span class="card-title">${escapeHtml(item.name)}</span>
      </span>
      <span class="card-line">${escapeHtml(item.summary || "")}</span>
    </button>
  `;
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
    .map((id) => {
      return `<button type="button" class="chip" data-action="open-component" data-id="${escapeHtml(
        id
      )}">${escapeHtml(componentName(id))}</button>`;
    })
    .join("");
  const status = item.status || "waiting";
  return `
    ${listBackButton("pattern-back", "all patterns")}
    <div class="page-head">
      <section class="lead">
        <p class="hero-team">${escapeHtml(STATUS_LABEL[status] || "Waiting")}</p>
        <h2>${escapeHtml(item.name)}</h2>
        <p>${escapeHtml(item.summary || "")}</p>
      </section>
    </div>
    <section class="board-block">
      <div class="journey-now">
        <p class="field-label">Now</p>
        <p>${escapeHtml(item.now || "Not known yet.")}</p>
      </div>
      ${laterBlock}
    </section>
    <section class="board-block">
      <h2>Uses</h2>
      ${
        uses
          ? `<div class="pattern-uses">${uses}</div>`
          : `<p class="section-help">No pieces named yet.</p>`
      }
      <p class="section-help">${escapeHtml(item.note || "")}</p>
    </section>
  `;
}

const SKILL_FOLDS = ["desk", "yours", "cursor"];

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
  return `
    <section class="board-block">
      <h2>Uses</h2>
      <div class="pattern-uses">${chips}</div>
    </section>
  `;
}

function skillItem(item) {
  const status = item.status || "waiting";
  return `
    <button
      type="button"
      class="brand-card"
      data-skill="${escapeHtml(item.id)}"
    >
      <span class="card-top">
        ${protoTag(STATUS_LABEL[status] || "Waiting")}
        <span class="card-title">${escapeHtml(item.name)}</span>
      </span>
      <span class="card-line">${escapeHtml(item.summary || "")}</span>
    </button>
  `;
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
    ${skillBackButton()}
    <div class="page-head">
      <section class="lead">
        ${protoTag(STATUS_LABEL[status] || "Waiting")}
        <h2>${escapeHtml(item.name)}</h2>
        <p>${escapeHtml(item.summary || "")}</p>
      </section>
    </div>
    <section class="board-block">
      ${invoke}
      ${when}
      <div class="group-block">
        <p class="field-label">How it runs</p>
        ${how ? `<ul class="notes">${how}</ul>` : `<p>Not written yet.</p>`}
      </div>
      ${where}
      ${item.note ? `<p class="section-help">${escapeHtml(item.note)}</p>` : ""}
    </section>
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

function groupDetail(group) {
  const groups = board().groups || [];
  const parent = groups.find((item) => item.id === group.parent);
  const kids = groupChildren(groups, group.id);
  const notes = (group.notes || [])
    .map((note) => `<li>${escapeHtml(note.text)}</li>`)
    .join("");
  const notesBlock = notes
    ? `<div class="group-block">
         <p class="field-label">From talks</p>
         <ul class="notes">${notes}</ul>
       </div>`
    : "";
  const heard = group.heard
    ? `<blockquote class="heard">
         <p>${escapeHtml(group.heard)}</p>
         <footer>${escapeHtml(group.from || "From a talk")}</footer>
       </blockquote>`
    : "";
  const open = group.open
    ? `<div class="group-block is-open">
         <p class="field-label">Still open</p>
         <p>${escapeHtml(group.open)}</p>
       </div>`
    : "";
  const need = group.need
    ? `<div class="group-block">
         <p class="field-label">What they need</p>
         <p>${escapeHtml(group.need)}</p>
       </div>`
    : "";
  const sits = parent
    ? `<div class="group-block">
         <p class="field-label">Sits on</p>
         <p>${escapeHtml(parent.name)}</p>
       </div>`
    : kids.length
      ? `<div class="group-block">
         <p class="field-label">Hats inside</p>
         <p>${escapeHtml(
           kids.length === 1
             ? kids[0].name
             : kids.length === 2
               ? `${kids[0].name} and ${kids[1].name}`
               : `${kids
                   .slice(0, -1)
                   .map((item) => item.name)
                   .join(", ")}, and ${kids[kids.length - 1].name}`
         )}.</p>
       </div>`
      : "";
  const status = group.status || "draft";
  return `
    <p class="group-who">${escapeHtml(group.who || "")}</p>
    ${sits}
    <button
      type="button"
      class="status"
      data-status="${escapeHtml(status)}"
      data-action="status"
      data-id="${escapeHtml(group.id)}"
    >${STATUS_LABEL[status] || "Draft"}</button>
    ${need}
    ${heard}
    ${open}
    ${notesBlock}
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
      <button type="submit">Add note</button>
    </form>
  `;
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
  els.detailModal.dataset.wide = kind === "journey" ? "true" : "false";

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

  if (kind === "group") {
    const group = (board().groups || []).find((item) => item.id === id);
    if (!group) return false;
    els.detailKicker.textContent = STATUS_LABEL[group.status] || "Draft";
    els.detailTitle.textContent = group.name;
    els.detailBody.innerHTML = groupDetail(group);
    return true;
  }

  if (kind === "journey") {
    const group = (board().groups || []).find((item) => item.id === id);
    if (!group) return false;
    els.detailKicker.textContent = STATUS_LABEL[group.status] || "Draft";
    els.detailTitle.textContent = group.name;
    els.detailBody.innerHTML = `
      <p class="group-who">${escapeHtml(group.who || "")}</p>
      ${journeyPath(group)}
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
    els.detailKicker.textContent = found.list === "done" ? "Done" : "To do list";
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
  els.todayTabs.innerHTML = items
    .map((item) => {
      const on = item.id === tab;
      return `
      <button
        type="button"
        class="kind-tab"
        role="tab"
        data-kind="${escapeHtml(item.id)}"
        aria-selected="${on ? "true" : "false"}"
      >
        ${escapeHtml(item.name)}
        <span class="nav-count">${item.count}</span>
      </button>
    `;
    })
    .join("");
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
    els.libraryTabs.innerHTML = LIBRARY_TABS.map((item) => {
      const on = item.id === tab;
      return `
        <button
          type="button"
          class="kind-tab"
          role="tab"
          data-library-tab="${escapeHtml(item.id)}"
          aria-selected="${on ? "true" : "false"}"
        >
          ${escapeHtml(item.name)}
          <span class="nav-count">${counts[item.id] || 0}</span>
        </button>
      `;
    }).join("");
  }

  if (tab === "setup") {
    els.libraryList.innerHTML = setupPage(sys);
  } else if (tab === "styles") {
    const styles = sys.styles?.text || [];
    els.libraryList.innerHTML = styles.length
      ? `<div class="token-grid">${styles.map(styleItem).join("")}</div>`
      : emptyCard("No type styles yet.");
  } else if (tab === "components") {
    const items = sys.components || [];
    const open = items.find((item) => item.id === store.activeComponent);
    if (open) {
      els.libraryList.innerHTML = componentPage(open);
    } else {
      const how = sys.stack
        ? `<section class="board-block">
             <h2>React</h2>
             <p>${escapeHtml(sys.stack.handover || "")}</p>
             <p>${escapeHtml(sys.stack.tokens || "")}</p>
             <p class="token-path">${escapeHtml(sys.stack.file || "")}</p>
           </section>`
        : "";
      const boards = groupedComponents(items)
        .map(([family, list]) =>
          deskFoldBlock({
            id: `components:${family.id}`,
            title: family.name,
            help: escapeHtml("From the live prototype."),
            count: list.length === 1 ? "1 piece" : `${list.length} pieces`,
            inner: `<div class="token-grid">${list.map(componentItem).join("")}</div>`,
          })
        )
        .join("");
      els.libraryList.innerHTML = items.length
        ? `${how}${boards}`
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
    els.brandingTabs.innerHTML = sections
      .map((item) => {
        const on = item.id === current;
        return `
          <button
            type="button"
            class="kind-tab"
            role="tab"
            data-brand-tab="${escapeHtml(item.id)}"
            aria-selected="${on ? "true" : "false"}"
          >
            ${escapeHtml(item.title)}
          </button>
        `;
      })
      .join("");
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
  els.languageTabs.innerHTML = LANGUAGE_TABS.map((item) => {
    const count = entries.filter((entry) => entry.kind === item.id).length;
    const on = item.id === kind;
    return `
      <button
        type="button"
        class="kind-tab"
        role="tab"
        data-language-tab="${escapeHtml(item.id)}"
        aria-selected="${on ? "true" : "false"}"
      >
        ${escapeHtml(item.name)}
        <span class="nav-count">${count}</span>
      </button>
    `;
  }).join("");
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
  els.languageList.innerHTML = shown.length
    ? shown.map(languageItem).join("")
    : emptyCard("Nothing in this tab yet. Waiting copy is better than a guess.");
  setNavCount(els.navLanguageCount, entries.length);
}

function renderResearch() {
  const pack = researchBoard();
  const insights = pack.insights || [];
  const shown = sortedInsights();
  const view = activeResearchView();
  const filter = activeResearchSeverity();

  if (els.researchCount) {
    els.researchCount.textContent =
      insights.length === 1 ? "1 insight" : `${insights.length} insights`;
  }
  if (els.researchView) {
    els.researchView.innerHTML = RESEARCH_VIEWS.map((item) => {
      const on = item.id === view;
      return `
        <button
          type="button"
          class="research-pill${on ? " is-on" : ""}"
          role="tab"
          data-research-view="${escapeHtml(item.id)}"
          aria-selected="${on ? "true" : "false"}"
        >
          ${escapeHtml(item.name)}
        </button>
      `;
    }).join("");
  }
  if (els.researchFilters) {
    els.researchFilters.innerHTML = RESEARCH_SEVERITIES.map((item) => {
      const on = item.id === filter;
      const count =
        item.id === "all"
          ? insights.length
          : insights.filter((entry) => insightSeverity(entry) === item.id).length;
      return `
        <button
          type="button"
          class="research-pill${on ? " is-on" : ""}"
          data-research-severity="${escapeHtml(item.id)}"
          aria-pressed="${on ? "true" : "false"}"
        >
          ${escapeHtml(item.name)}
          <span class="nav-count">${count}</span>
        </button>
      `;
    }).join("");
  }
  if (els.researchInsights) {
    if (!shown.length) {
      els.researchInsights.className = "card-grid";
      els.researchInsights.innerHTML = emptyCard(
        insights.length
          ? "Nothing in this severity."
          : "No insights for this team yet."
      );
    } else if (view === "list") {
      els.researchInsights.className = "";
      els.researchInsights.innerHTML = `<ul class="research-list">${shown
        .map(insightRow)
        .join("")}</ul>`;
    } else {
      els.researchInsights.className = "card-grid";
      els.researchInsights.innerHTML = shown.map(insightCard).join("");
    }
  }

  setNavCount(els.navResearchCount, insights.length);
}

function renderStrategy() {
  const current = board();
  const next = current.next || [];
  const know = current.know || [];
  const cannot = current.cannot || [];
  const problems = strategyPriorityInsights();
  const opens = strategyOpenGroups();
  const moves = strategyMoveCount(current);

  if (els.strategyCount) {
    els.strategyCount.textContent =
      moves === 1 ? "1 play" : `${moves} plays`;
  }

  if (els.strategyNext) {
    els.strategyNext.innerHTML = next.length
      ? next.map(strategyStepCard).join("")
      : emptyCard("No next steps on the briefing yet.");
  }

  if (els.strategyKnow) {
    els.strategyKnow.innerHTML = know.length
      ? know
          .map(
            (card, index) => `
        <button
          type="button"
          class="know-card"
          data-open="know"
          data-id="${index}"
          aria-haspopup="dialog"
        >
          <span class="know-index">${index + 1}</span>
          <span class="card-title">${escapeHtml(card.title || "")}</span>
          <span class="card-line">${escapeHtml(card.body || "")}</span>
        </button>
      `
          )
          .join("")
      : emptyCard("No know cards on the briefing yet.");
  }

  if (els.strategyLimits) {
    els.strategyLimits.innerHTML = cannot.length
      ? `<article class="brief-card is-cannot">
          <h2>You cannot</h2>
          <ul>${cannot
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}</ul>
        </article>`
      : emptyCard("No hard limits named yet.");
  }

  if (els.strategyInsights) {
    els.strategyInsights.innerHTML = problems.length
      ? problems.map(insightCard).join("")
      : emptyCard("No Critical or High insights for this team yet.");
  }

  if (els.strategyOpen) {
    els.strategyOpen.innerHTML = opens.length
      ? opens.map(strategyOpenCard).join("")
      : emptyCard("No open questions on user groups yet.");
  }

  setNavCount(els.navStrategyCount, moves);
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
    els.analyticsKeis.innerHTML = list
      .map((item) => {
        const on = item.id === selected;
        return `
          <button
            type="button"
            class="research-pill${on ? " is-on" : ""}"
            role="tab"
            data-kei="${escapeHtml(item.id)}"
            aria-selected="${on ? "true" : "false"}"
          >
            ${escapeHtml(item.name || item.id)}
          </button>
        `;
      })
      .join("");
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
      <article class="analytics-plot">
        <div class="analytics-plot-head">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(note)}</p>
        </div>
        ${keiLineChart(rounds, {
          width: 640,
          height: 220,
          red: keiGuide(open?.red),
          target: keiGuide(open?.target),
        })}
        <p class="section-help">${escapeHtml(caption)}</p>
      </article>
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

  setNavCount(els.navAnalyticsCount, list.length);
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
  if (open) {
    els.patternsList.innerHTML = patternPage(open);
  } else {
    els.patternsList.innerHTML = items.length
      ? `<div class="card-grid">${items.map(patternItem).join("")}</div>`
      : emptyCard("No patterns named yet.");
  }
  setNavCount(els.navPatternsCount, items.length);
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
  if (open) {
    els.skillsList.innerHTML = skillPage(open);
  } else {
    els.skillsList.innerHTML = groups
      .map((group) => {
        const count = (group.items || []).length;
        const clipId = `skill-fold-${group.id}`;
        const cards = (group.items || []).map(skillItem).join("");
        return `
          <section class="board-block desk-fold" data-skill-fold="${escapeHtml(group.id)}">
            <button
              type="button"
              class="desk-fold-head"
              data-skill-fold-head
              aria-expanded="false"
              aria-controls="${escapeHtml(clipId)}"
            >
              <span class="desk-fold-copy">
                <span class="desk-fold-title">${escapeHtml(group.name)}</span>
                <p class="section-help">${escapeHtml(group.help || "")}</p>
              </span>
              <span class="desk-fold-meta">
                ${protoCountChip(count)}
                ${deskFoldChevron()}
              </span>
            </button>
            <div class="desk-fold-clip" id="${escapeHtml(clipId)}" aria-hidden="true" inert>
              <div class="card-grid">${cards || emptyCard("No skills in this group.")}</div>
            </div>
          </section>
        `;
      })
      .join("");
    applySkillFolds();
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
      : `<li class="empty-card">Nothing in ${escapeHtml(
          kindName(tab)
        )} yet. Add one below, or pick another tab.</li>`;
  }

  renderList(els.canList, current.can, false);
  renderList(els.cannotList, current.cannot, false);
  renderList(els.nextList, current.next, true);

  els.knowList.innerHTML = (current.know || [])
    .map(
      (card, index) => `
        <button
          type="button"
          class="know-card"
          data-open="know"
          data-id="${index}"
          aria-haspopup="dialog"
        >
          <span class="know-index">${index + 1}</span>
          <span class="card-title">${escapeHtml(card.title)}</span>
        </button>
      `
    )
    .join("");

  const groups = current.groups || [];
  const groupShown = groupCards(groups);
  els.groupsCount.textContent =
    groupShown.length === 1 ? "1 in play" : `${groupShown.length} in play`;
  els.groupsList.innerHTML = groups.length
    ? groupClusters(groups, groupItem)
    : emptyCard("No groups for this team yet. Add one from a discussion.");

  const mapped = groups.filter((group) => (group.journey || []).length);
  const journeyShown = groupCards(groups, (group) =>
    (group.journey || []).length
  );
  if (els.journeysCount) {
    els.journeysCount.textContent =
      journeyShown.length === 1 ? "1 map" : `${journeyShown.length} maps`;
  }
  if (els.journeysList) {
    els.journeysList.innerHTML = mapped.length
      ? groupClusters(groups, journeyItem, (group) =>
          (group.journey || []).length
        )
      : emptyCard(
          "No journeys for this team yet. They appear when a talk names how someone moves through the product."
        );
  }

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
  renderStrategy();
  renderAnalytics();
  renderLibrary();
  renderLanguage();
  renderPatterns();
  renderSkills();
  renderPrototype();
  renderBranding();

  setNavCount(els.navTodayCount, today.length);
  setNavCount(els.navGroupsCount, groupShown.length);
  setNavCount(els.navJourneysCount, journeyShown.length);
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
  "activeKei",
  "activeComponent",
  "activePattern",
  "activeSkill",
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
  "prototypePane",
  "prototypeMeterOpen",
  "prototypeMeterProfiles",
  "prototypeMeterDrafts",
  "prototypeBreakdownOpen",
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
  "prototypeExportNotice",
  "prototypeChartView",
  "prototypeChartStyle",
  "prototypeTreeOpen",
  "prototypeFullscreen",
  "prototypePreviewHidden",
  "prototypeLibraryOn",
  "prototypeFlow",
  "prototypeAskOpen",
  "prototypeWalkOpen",
  "prototypeAccountOpen",
  "prototypeNoticeOpen",
  "prototypeRailOpen",
  "prototypeSeeAsCompany",
  "prototypeSeeAsUser",
  "prototypeCompanyQuery",
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
  if (!sectionAllowed(store.activeSection)) store.activeSection = "prototype";
}

function applyPreviewQuery() {
  if (!store || sharePrototype()) return;
  let preview = "";
  try {
    preview = new URLSearchParams(location.search).get("preview") || "";
  } catch (err) {
    return;
  }
  if (preview !== "prototype" && preview !== "library") return;
  store.activeSection = "prototype";
  store.prototypeFullscreen = true;
  store.prototypeLibraryOn = preview === "library";
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
  store.researchSeverity = RESEARCH_SEVERITIES.some((item) => item.id === store.researchSeverity)
    ? store.researchSeverity
    : "all";
  store.activePrototypeView = protoViewId(store.activePrototypeView);
  store.prototypeScope = store.prototypeScope === "group" ? "group" : "site";
  store.prototypeGroup = store.prototypeGroup || "";
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
    : ["in", "out"];
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
  if (typeof protoSeedWalkUsers === "function") protoSeedWalkUsers();
  store.prototypeSignedOut = Boolean(store.prototypeSignedOut);
  store.prototypeLibraryOn = Boolean(store.prototypeLibraryOn);
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
      { ...found.task, doneOn: todayIso() },
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

function setSection(section) {
  if (!sectionAllowed(section)) return;
  if (section !== store.activeSection) {
    if (section === "access") store.accessFold = "";
    if (section === "skills") store.skillFold = store.skillFold || "";
    if (section === "library") store.libraryFold = "";
  }
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

async function loadExperience() {
  try {
    const res = await fetch("/docs/research/experience/keis.json", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("missing experience");
    const data = await res.json();
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
    const res = await fetch("/data/skills.json", { cache: "no-store" });
    if (!res.ok) throw new Error("missing skills");
    const data = await res.json();
    skillsCatalog = {
      lead: data.lead || "",
      groups: Array.isArray(data.groups) ? data.groups : [],
    };
  } catch {
    skillsCatalog = { lead: "", groups: [] };
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
  applyChrome();
  clampSection();
  applyPreviewQuery();
  await probeWrite();
  render();
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
if (els.analyticsKeis) els.analyticsKeis.addEventListener("click", onAnalyticsClick);
if (els.patternsList) els.patternsList.addEventListener("click", onPatternNav);
if (els.skillsList) els.skillsList.addEventListener("click", onSkillNav);
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
if (els.teamSelect) els.teamSelect.addEventListener("change", onTeamChange);
document.querySelector(".side").addEventListener("click", (event) => {
  const link = event.target.closest(".side-link");
  if (!link) return;
  setSection(link.dataset.section);
});
load();
