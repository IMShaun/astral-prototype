const PROTO_VIEWS = [
  { id: "home", name: "Overview", kicker: "Estate", blurb: "The picture for the whole estate." },
  { id: "portfolio", name: "Portfolio", kicker: "Sites", blurb: "Pick a group or a site, then open consumption." },
  { id: "finance", name: "Finance", kicker: "Spend", blurb: "Highest spend first, then why, then what you can cut." },
  { id: "alerts", name: "Alerts", kicker: "Flags", blurb: "Odd use and missing data, before they hit a bill." },
  { id: "queries", name: "Queries", kicker: "Threads", blurb: "Raise it from a reading and keep the thread." },
  { id: "reports", name: "Reports", kicker: "Runs", blurb: "Run what you need now, or wait on what is not in yet." },
];

const PROTO_ALERT_FACETS = [
  { id: "all", name: "All" },
  { id: "gaps", name: "Missing data" },
  { id: "stale", name: "Not sending" },
  { id: "alerts", name: "Odd use" },
  { id: "resolved", name: "Resolved" },
];

const PROTO_TREE_FILTERS = [
  {
    id: "owned",
    name: "Ownership",
    items: [{ id: "tenant", name: "Tenant owned" }],
  },
  {
    id: "meter",
    name: "Utility type",
    items: [
      { id: "electricity", name: "Electricity" },
      { id: "gas", name: "Gas" },
      { id: "water", name: "Water" },
    ],
  },
  {
    id: "flow",
    name: "Incoming and outgoing",
    items: [
      { id: "in", name: "In" },
      { id: "out", name: "Out" },
    ],
  },
];
const PROTO_PANE_FILTERS = [
  ...PROTO_TREE_FILTERS.filter((group) => group.id !== "owned"),
  {
    id: "hours",
    name: "Hours",
    items: [
      { id: "hours-on", name: "Operational" },
      { id: "hours-non", name: "Non-operational" },
      { id: "hours-off", name: "Closed" },
    ],
  },
  {
    id: "tou",
    name: "Time of use",
    items: [
      { id: "tou-on", name: "On peak" },
      { id: "tou-off", name: "Off peak" },
    ],
  },
];
const PROTO_TREE_FILTER_IDS = PROTO_TREE_FILTERS.flatMap((group) => group.items.map((item) => item.id));
const PROTO_PANE_FILTER_IDS = PROTO_PANE_FILTERS.flatMap((group) => group.items.map((item) => item.id));
const PROTO_WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const PROTO_WEEKDAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const PROTO_HOUR_PROFILES = [
  { id: "all-day", name: "24 hour", status: "operational", from: "00.00", to: "24.00" },
  { id: "depot", name: "Weekday depot", status: "operational", from: "05.00", to: "21.00" },
  { id: "retail", name: "Retail day", status: "operational", from: "06.00", to: "22.00" },
  { id: "closed", name: "Closed", status: "closed", from: "", to: "" },
  { id: "off", name: "Non-operational", status: "off", from: "", to: "" },
];
const PROTO_TOU_PROFILES = [
  {
    id: "peak-off",
    name: "On peak and off peak",
    onFrom: "07.00",
    onTo: "19.00",
    offFrom: "19.00",
    offTo: "07.00",
  },
  {
    id: "weekday-peak",
    name: "Weekday peak",
    onFrom: "08.00",
    onTo: "20.00",
    offFrom: "20.00",
    offTo: "08.00",
  },
  {
    id: "night-day",
    name: "Night and day",
    onFrom: "06.00",
    onTo: "22.00",
    offFrom: "22.00",
    offTo: "06.00",
  },
];
const PROTO_DAY_STATUS = [
  { id: "operational", name: "Operational" },
  { id: "off", name: "Non-operational" },
  { id: "closed", name: "Closed" },
];
const PROTO_WATER_SUPPLY_KG = 0.1913;
const PROTO_WATER_WASTE_KG = 0.17088;
const PROTO_WATER_RETURN = 0.95;
const PROTO_WATER_PENCE = 185;

const PROTO_ACCOUNT_VIEWS = [
  { id: "profile", name: "Profile" },
  { id: "settings", name: "Settings" },
  { id: "users", name: "Users" },
];

const PROTO_USER_ROLES = [
  { id: "admin", name: "Admin" },
  { id: "manager", name: "Manager" },
  { id: "contributor", name: "Contributor" },
  { id: "viewer", name: "Viewer" },
];

const PROTO_ACCESS_ROLES = [
  {
    id: "super-admin",
    name: "Super admin",
    who: "Visibility on everything. Only on IMSERV admin.",
  },
  {
    id: "admin",
    name: "Admin",
    who: "Do and see everything in their company.",
  },
  {
    id: "manager",
    name: "Manager",
    who: "Work in the product and add others to the team.",
  },
  {
    id: "contributor",
    name: "Contributor",
    who: "Work in the product.",
  },
  {
    id: "viewer",
    name: "Viewer",
    who: "Look. They cannot change it.",
  },
];

const PROTO_TENURE = [
  { id: "permanent", name: "Permanent" },
  { id: "temporary", name: "Temporary" },
];

const PROTO_TEMP_FROM = "2026-06-01";
const PROTO_TEMP_TO = "2026-11-30";

const PROTO_SEE = [
  {
    id: "energy",
    name: "Energy",
    home: "estate",
    nav: ["home", "portfolio", "finance", "alerts", "queries", "reports"],
  },
  {
    id: "finance",
    name: "Finance",
    home: "finance",
    nav: ["home", "finance", "alerts", "queries", "reports"],
  },
  {
    id: "asset",
    name: "Asset",
    home: "asset",
    nav: ["home", "portfolio", "alerts", "queries"],
  },
  {
    id: "data",
    name: "Data",
    home: "data",
    nav: ["home", "reports", "portfolio"],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    home: "exceptions",
    nav: ["home", "portfolio", "finance", "alerts", "queries", "reports"],
  },
];

// IBM Carbon categorical, in their neighbour-contrast order.
// Skip Carbon cyan and near-black so they do not collide with Incoming or Outgoing.
const PROTO_LINE_CAT = [
  "#6929C4",
  "#FA4D56",
  "#198038",
  "#002D9C",
  "#8A3800",
  "#EE538B",
  "#B28600",
  "#9F1853",
  "#005D5D",
  "#A56EFF",
  "#009D9A",
];
const PROTO_LINE_EST_DASH = "2 3.5";

const PROTO_PROFILE_DISCIPLINES = [
  { id: "energy", name: "Energy" },
  { id: "finance", name: "Finance" },
  { id: "asset", name: "Asset" },
  { id: "data", name: "Data" },
];

const PROTO_COUNTRIES = [
  { id: "eng", name: "England" },
  { id: "sct", name: "Scotland" },
  { id: "wls", name: "Wales" },
  { id: "nir", name: "Northern Ireland" },
  { id: "ie", name: "Ireland" },
  { id: "fr", name: "France" },
  { id: "de", name: "Germany" },
  { id: "nl", name: "Netherlands" },
  { id: "be", name: "Belgium" },
  { id: "es", name: "Spain" },
  { id: "it", name: "Italy" },
];

const PROTO_COMPANIES = [
  {
    id: "admin-user",
    name: "IMSERV admin",
    home: "admin",
    nav: ["home", "companies", "users", "reports"],
    access: ["super-admin"],
    see: [],
  },
  {
    id: "end-customer",
    name: "Customer",
    home: "estate",
    nav: ["home", "portfolio", "finance", "alerts", "queries", "reports"],
    access: ["admin", "manager", "contributor", "viewer"],
    see: ["energy", "finance", "asset", "data", "portfolio"],
  },
  {
    id: "broker",
    name: "Broker / TPI",
    home: "broker",
    nav: ["home", "portfolio", "alerts", "queries", "reports"],
    access: ["viewer"],
    see: ["finance", "data", "portfolio"],
  },
  {
    id: "portfolio-customer",
    name: "Supplier",
    home: "supplier",
    nav: ["home", "portfolio", "alerts", "queries", "reports"],
    access: ["admin", "manager", "contributor", "viewer"],
    see: ["data", "asset", "portfolio"],
  },
];

const PROTO_OLD_GROUPS = {
  owner: { company: "admin-user" },
  "owner-super": { company: "end-customer", access: "admin" },
  "finance-user": { company: "end-customer", see: "finance" },
  "asset-manager": { company: "end-customer", see: "asset" },
  "energy-manager": { company: "end-customer", see: "energy" },
  "data-user": { company: "end-customer", see: "data" },
  "portfolio-manager": { company: "end-customer", see: "portfolio" },
  admin: { company: "admin-user" },
  "back-office": { company: "admin-user" },
  "tma-customer": { company: "end-customer" },
};

const PROTO_FLOWS = [
  { id: "product", name: "Main product" },
  { id: "onboarding", name: "Onboarding" },
  { id: "sign-up", name: "Sign-up" },
  { id: "sign-in", name: "Sign in" },
  { id: "recovery", name: "Password recovery" },
  { id: "invite", name: "Invite link (to join team)" },
];

const PROTO_LENSES = PROTO_COMPANIES;

const PROTO_LENS_EXTRA = {
  users: {
    id: "users",
    name: "Users",
    kicker: "People",
    blurb: "Invite people from this company.",
  },
  companies: {
    id: "companies",
    name: "Companies",
    kicker: "Platform",
    blurb: "Pick a company, then see as them.",
  },
};

function protoMigrateGroup(raw) {
  return PROTO_OLD_GROUPS[raw] || {};
}

function protoCompanyId() {
  const raw = store.prototypeUserGroup || "end-customer";
  const mapped = protoMigrateGroup(raw).company || raw;
  return PROTO_COMPANIES.some((item) => item.id === mapped) ? mapped : "end-customer";
}

function protoCompany() {
  return PROTO_COMPANIES.find((item) => item.id === protoCompanyId()) || PROTO_COMPANIES[1];
}

function protoSeeAsClear() {
  return { prototypeSeeAsCompany: "", prototypeSeeAsUser: "" };
}

function protoKnownSeeAsCompany(raw, extra) {
  const name = String(raw || "").trim();
  return protoTeamCompanyNames(extra).includes(name) ? name : "";
}

function protoSeeAs() {
  if (protoCompanyId() !== "admin-user") return null;
  if (protoFlowId() !== "product") return null;
  const userId = String(store.prototypeSeeAsUser || "");
  if (userId) {
    const person = protoUserPeople().find((item) => item.id === userId && !item.you);
    if (!person) return null;
    return {
      kind: "user",
      userId: person.id,
      name: person.name,
      company: protoKnownSeeAsCompany(person.company),
    };
  }
  const company = protoKnownSeeAsCompany(store.prototypeSeeAsCompany);
  if (company) {
    return { kind: "company", company, name: company };
  }
  return null;
}

function protoOpenCompany(raw) {
  const company = protoKnownSeeAsCompany(raw);
  if (!company) return;
  setProto({
    ...protoSeeAsClear(),
    prototypeSeeAsCompany: company,
    activePrototypeView: "home",
    prototypeCompanyQuery: "",
    prototypeFullscreen: true,
  });
}

function protoLoginAsUser(id) {
  if (!protoCanLoginAsUser()) return;
  const person = protoUserPeople().find((item) => item.id === id && !item.you);
  if (!person) return;
  const company = protoKnownSeeAsCompany(person.company);
  if (!company) return;
  setProto({
    prototypeSeeAsUser: person.id,
    prototypeSeeAsCompany: company,
    activePrototypeView: "home",
    prototypeUserOpen: "",
    prototypeUserMenu: "",
    prototypeFullscreen: true,
    ...protoRenewClear(),
  });
}

function protoBackToAdmin() {
  setProto({
    ...protoSeeAsClear(),
    activePrototypeView: "companies",
    prototypeCompanyQuery: "",
    prototypeFullscreen: true,
  });
}

function protoSetCompany(id) {
  const company = PROTO_COMPANIES.find((item) => item.id === id) || protoCompany();
  const access = company.access[0];
  setProto({
    prototypeUserGroup: company.id,
    prototypeAccess: access,
    prototypeMeRole: access,
    prototypeSee: "",
    activePrototypeView: "home",
    ...protoSeeAsClear(),
    prototypeCompanyQuery: "",
  });
  if (store.prototypeFullscreen) {
    protoRestoreFocus('#astral-fs [data-proto-select-toggle="preview-company"]');
    return;
  }
  protoFocusLens("data-proto-user-group", company.id);
}

function protoFlowId() {
  const allowed = PROTO_FLOWS.map((item) => item.id);
  const raw = store.prototypeFlow;
  if (allowed.includes(raw)) return raw;
  return store.prototypeSignedOut ? "sign-in" : "product";
}

function protoFlow() {
  return PROTO_FLOWS.find((item) => item.id === protoFlowId()) || PROTO_FLOWS[0];
}

function protoSetFlow(id) {
  const flow = PROTO_FLOWS.some((item) => item.id === id) ? id : "product";
  const patch = {
    prototypeFlow: flow,
    prototypeSignedOut: flow !== "product",
    prototypeAuthSent: false,
    prototypeRecoveryStep: "",
    prototypeAuthResent: false,
    prototypeInviteAsked: false,
    prototypeSignUpStep: "",
    ...protoSeeAsClear(),
  };
  if (flow === "invite") {
    patch.prototypeInviteStep = "email";
    patch.prototypeInviteResume = false;
  } else if (flow !== "recovery") {
    patch.prototypeInviteStep = "";
    patch.prototypeInviteResume = false;
  }
  setProto(patch);
  if (store.prototypeFullscreen) {
    protoRestoreFocus('#astral-fs [data-proto-select-toggle="preview-flow"]');
  }
}

function protoEnterProduct() {
  setProto({
    prototypeFlow: "product",
    prototypeSignedOut: false,
    activePrototypeView: "home",
    prototypeAuthSent: false,
    prototypeRecoveryStep: "",
    prototypeAuthResent: false,
    prototypeInviteStep: "",
    prototypeInviteResume: false,
    prototypeInviteAsked: false,
    prototypeSignUpStep: "",
    prototypeAccountOpen: false,
  });
}

function protoAccessId() {
  const company = protoCompany();
  const raw = store.prototypeAccess || protoMigrateGroup(store.prototypeUserGroup).access || "";
  return company.access.includes(raw) ? raw : company.access[0];
}

function protoAccess() {
  const id = protoAccessId();
  return PROTO_ACCESS_ROLES.find((item) => item.id === id) || PROTO_ACCESS_ROLES[1];
}

function protoTenureId() {
  return "temporary";
}

function protoTenure() {
  return PROTO_TENURE.find((item) => item.id === protoTenureId()) || PROTO_TENURE[0];
}

function protoSeeOptions() {
  const company = protoCompany();
  const extras = company.see
    .map((id) => PROTO_SEE.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => {
      if (company.id === "end-customer") return item;
      return {
        ...item,
        nav: item.nav.filter((id) => id !== "energy" && id !== "finance"),
        home: item.id === "portfolio" ? company.home : item.home,
      };
    });
  if (company.id === "broker") {
    return [
      { id: "company", name: "Customers", home: "broker", nav: company.nav.slice() },
      ...extras,
    ];
  }
  if (company.id === "portfolio-customer") {
    return [
      { id: "company", name: "Data health", home: "supplier", nav: company.nav.slice() },
      ...extras,
    ];
  }
  return extras;
}

function protoSeeId() {
  const options = protoSeeOptions();
  if (!options.length) return "";
  const raw = store.prototypeSee || protoMigrateGroup(store.prototypeUserGroup).see || "";
  return options.some((item) => item.id === raw) ? raw : options[0].id;
}

function protoSee() {
  const id = protoSeeId();
  return protoSeeOptions().find((item) => item.id === id) || null;
}

function protoLensId() {
  return protoCompanyId();
}

function protoLens() {
  const seeing = protoSeeAs();
  const company = seeing ? protoSeeAsLensCompany(seeing.company) : protoCompany();
  return {
    ...company,
    id: company.id,
    name: company.name,
    home: company.home,
    nav: company.nav.slice(),
    access: protoAccess(),
    tenure: protoTenure(),
  };
}

function protoShownViews() {
  return protoLens().nav
    .map((id) => PROTO_VIEWS.find((view) => view.id === id) || PROTO_LENS_EXTRA[id])
    .filter(Boolean);
}

const PROTO_RESOLVE = [
  { id: "expected", name: "Expected" },
  { id: "fixed", name: "Fixed" },
  { id: "duplicate", name: "Duplicate" },
];

function astralAccountIcon(id) {
  return protoIconMark(id);
}

const PROTO_OLD_VIEWS = {
  meters: "portfolio",
  interval: "portfolio",
  quality: "portfolio",
  energy: "finance",
};

function protoKnownView(id) {
  return (
    PROTO_VIEWS.some((view) => view.id === id) ||
    PROTO_ACCOUNT_VIEWS.some((view) => view.id === id) ||
    Boolean(PROTO_LENS_EXTRA[id]) ||
    id === "downloads"
  );
}

function protoViewId(raw) {
  const mapped = PROTO_OLD_VIEWS[raw] || raw;
  if (!protoKnownView(mapped)) return "home";
  if (mapped === "downloads") return mapped;
  if (mapped === "profile") return mapped;
  if (mapped === "settings") return protoCanOpenSettings() ? mapped : protoLens().nav[0] || "home";
  if (mapped === "users") return protoCanManagePeople() ? mapped : protoLens().nav[0] || "home";
  const nav = protoLens().nav;
  if (nav.includes(mapped)) return mapped;
  if (mapped === "portfolio" && nav.includes("finance")) return mapped;
  return nav[0] || "home";
}

function protoState() {
  return {
    view: protoViewId(store.activePrototypeView),
    meter: store.activePrototypeMeter || "",
    query: store.activePrototypeQuery || "",
    facet: protoAlertFacetId(store.activePrototypeFacet),
    range: store.prototypeRange || "day",
    full: Boolean(store.prototypeFullscreen),
    ask: Boolean(store.prototypeAskOpen),
    walk: Boolean(store.prototypeWalkOpen),
    account: Boolean(store.prototypeAccountOpen),
    notice: Boolean(store.prototypeNoticeOpen),
    signedOut: protoFlowId() !== "product",
    queryForm: Boolean(store.prototypeQueryForm),
    userForm: Boolean(store.prototypeUserForm),
    userQuery: store.prototypeUserQuery || "",
    userRole: protoUserRoleId(store.prototypeUserInviteRole),
    userMenu: store.prototypeUserMenu || "",
    querySite: store.prototypeQuerySite || "",
    reportRun: store.prototypeReportRun || "",
    channel: store.prototypeChannel || "all",
    scope: store.prototypeScope === "group" ? "group" : "site",
    group: store.prototypeGroup || "",
    dateOpen: Boolean(store.prototypeDateOpen),
    dateCustomOpen: Boolean(store.prototypeDateCustomOpen),
    colourOpen: store.prototypeColourOpen === "secondary" ? "secondary" : store.prototypeColourOpen === "primary" ? "primary" : "",
  };
}

function setProto(patch) {
  protoPatchStay(patch);
  render();
}

function protoPageFilterReset() {
  return {
    activePrototypeQuery: "",
    prototypeTreeFilters: [],
    prototypeTreeFilterOpen: false,
    prototypePaneFilters: [],
    prototypePaneFilterOpen: false,
    prototypeChartSliceOff: [],
    prototypeCompareQuery: "",
    prototypeCompareFilters: [],
    prototypeCompareFilterOpen: false,
    prototypeCompareSort: "name",
    prototypeCompareOpen: false,
    prototypeCompareIds: [],
    prototypeCompareMeters: [],
    prototypeCompareSites: [],
    prototypeDownloadQuery: "",
    prototypeDownloadFilters: [],
    prototypeDownloadFilterOpen: false,
    prototypeUserQuery: "",
    prototypeCompanyQuery: "",
    prototypeUserRoleFilter: [],
    prototypeUserRoleFilterOpen: false,
    prototypeTeam: "",
    prototypeTeamQuery: "",
    prototypeTeamForm: false,
    prototypeTeamDraftName: "",
    prototypeTeamDraftDepartment: "",
    prototypeTeamDraftPeople: [],
    prototypeTeamPeopleQuery: "",
    prototypeUserForm: false,
    prototypeUserDrafts: [""],
    prototypeCompanyForm: false,
    prototypeCompanyDraftName: "",
    prototypeCompanyDraftType: "customer",
    prototypeCompanyNameError: false,
    prototypeExportOpen: false,
    prototypeReportEdit: "",
    prototypeReportDraft: null,
    prototypeReportDraftStart: "",
    prototypeReportPeopleQuery: "",
    prototypeReportSiteQuery: "",
    prototypeReportCalOpen: false,
    prototypeReportCal: "",
    prototypeColourOpen: "",
    prototypeDateOpen: false,
    prototypeDateCustomOpen: false,
    prototypeMeterOpen: "none",
    prototypeMeterSettings: "",
    prototypeMeterFold: "",
    prototypeBreakdownOpen: false,
    prototypeChartPoint: null,
    prototypeChartView: "total",
    prototypeChartStyle: "bar",
    prototypeChartFlows: ["in", "out"],
    prototypeChartSliceOff: [],
    prototypePaneMeterKinds: null,
    prototypePillsOpen: false,
    prototypeOpenQuery: "",
    prototypeQueryForm: false,
    prototypeQuerySite: "",
    prototypeQueryCommentOpen: false,
    prototypeQueryEdit: "",
    prototypeQueryMore: "",
    prototypeAckOpen: "",
    prototypeTableSort: {},
    prototypeSiteMeters: [],
    prototypeGroupSites: [],
    activePrototypeFacet: "all",
    prototypePaneAlertFacet: "unread",
    prototypePointTagOpen: false,
    prototypePointTagQuery: "",
    ...protoClosePersonPatch(),
  };
}

function protoCompareModalReset() {
  return {
    prototypeCompareQuery: "",
    prototypeCompareFilters: [],
    prototypeCompareFilterOpen: false,
    prototypeCompareSort: "name",
  };
}

function protoShouldResetPageFilters(patch) {
  if (Object.prototype.hasOwnProperty.call(patch, "activePrototypeView")) {
    if (protoViewId(patch.activePrototypeView) !== protoViewId(store.activePrototypeView)) {
      return true;
    }
  }
  if (Object.prototype.hasOwnProperty.call(patch, "prototypeSettingsSection")) {
    if (String(patch.prototypeSettingsSection || "") !== String(store.prototypeSettingsSection || "")) {
      return true;
    }
  }
  if (Object.prototype.hasOwnProperty.call(patch, "prototypeFullscreen")) {
    if (Boolean(patch.prototypeFullscreen) !== Boolean(store.prototypeFullscreen)) {
      return true;
    }
  }
  return false;
}

function protoPatchStay(patch) {
  if (protoShouldResetPageFilters(patch)) {
    const reset = protoPageFilterReset();
    Object.keys(reset).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(patch, key)) patch[key] = reset[key];
    });
  }
  if (!Object.prototype.hasOwnProperty.call(patch, "prototypeAccountOpen")) {
    patch.prototypeAccountOpen = false;
  }
  if (!Object.prototype.hasOwnProperty.call(patch, "prototypeNoticeOpen")) {
    patch.prototypeNoticeOpen = false;
  }
  if (!Object.prototype.hasOwnProperty.call(patch, "prototypeRailOpen")) {
    patch.prototypeRailOpen = false;
  }
  if (!Object.prototype.hasOwnProperty.call(patch, "prototypeAckOpen")) {
    patch.prototypeAckOpen = "";
  }
  if (!Object.prototype.hasOwnProperty.call(patch, "prototypeSelectOpen")) {
    patch.prototypeSelectOpen = "";
  }
  if (!Object.prototype.hasOwnProperty.call(patch, "prototypeReportCalOpen")) {
    patch.prototypeReportCalOpen = false;
  }
  if (!Object.prototype.hasOwnProperty.call(patch, "prototypeQueryMore")) {
    if (
      Object.prototype.hasOwnProperty.call(patch, "prototypeAckOpen") ||
      Object.prototype.hasOwnProperty.call(patch, "prototypeQueryCommentOpen") ||
      Object.prototype.hasOwnProperty.call(patch, "prototypeQueryEdit")
    ) {
      patch.prototypeQueryMore = "";
    }
  }
  if (Object.prototype.hasOwnProperty.call(patch, "prototypeChartPoint")) {
    if (!Object.prototype.hasOwnProperty.call(patch, "prototypePointTagOpen")) {
      patch.prototypePointTagOpen = false;
    }
    if (!Object.prototype.hasOwnProperty.call(patch, "prototypePointTagQuery")) {
      patch.prototypePointTagQuery = "";
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(patch, "prototypeChartPoint") &&
    !patch.prototypeChartPoint
  ) {
    if (!Object.prototype.hasOwnProperty.call(patch, "prototypeOpenQuery")) {
      patch.prototypeOpenQuery = "";
    }
    if (!Object.prototype.hasOwnProperty.call(patch, "prototypeQueryCommentOpen")) {
      patch.prototypeQueryCommentOpen = false;
    }
    if (!Object.prototype.hasOwnProperty.call(patch, "prototypeQueryEdit")) {
      patch.prototypeQueryEdit = "";
    }
  }
  Object.assign(store, patch);
  persistChrome();
}

const PROTO_NAMED_METERS = {
  "nr-man-in": {
    id: "nr-man-in",
    name: "Incoming supply",
    mpan: "1600001234567",
    site: "Manchester Traction",
    commodity: "Electricity",
    direction: "Import",
    status: "online",
    lastReading: "2 min ago",
    use24h: "1.8 MWh",
    hours: "00.00 to 24.00",
    tou: "On peak and off peak",
    tariff: "HH electricity",
    base: 8,
    swing: 2,
    gaps: [],
    estimated: [],
  },
  "nr-man-ex": {
    id: "nr-man-ex",
    name: "Export",
    mpan: "1600001234568",
    site: "Manchester Traction",
    commodity: "Electricity",
    direction: "Export",
    status: "online",
    lastReading: "2 min ago",
    use24h: "0.4 MWh",
    hours: "00.00 to 24.00",
    tou: "On peak and off peak",
    tariff: "HH electricity",
    base: 2,
    swing: 0.8,
    gaps: [],
    estimated: [10, 11],
  },
  "nr-crewe-in": {
    id: "nr-crewe-in",
    name: "Incoming supply",
    mpan: "1600002234567",
    site: "Crewe depot",
    commodity: "Electricity",
    direction: "Import",
    status: "gaps",
    lastReading: "47 min ago",
    use24h: "Partial",
    hours: "05.00 to 21.00",
    tou: "Weekday peak",
    tariff: "HH electricity",
    base: 6,
    swing: 1.5,
    gaps: [1, 2, 3],
    estimated: [],
  },
  "nr-euston-in": {
    id: "nr-euston-in",
    name: "Incoming supply",
    mpan: "1600003234567",
    site: "Euston",
    commodity: "Electricity",
    direction: "Import",
    status: "stale",
    lastReading: "3 h ago",
    use24h: "0.9 MWh",
    hours: "04.00 to 23.00",
    tou: "Night and day",
    tariff: "HH electricity",
    base: 5,
    swing: 1.2,
    gaps: [],
    estimated: [],
  },
  "nr-york-in": {
    id: "nr-york-in",
    name: "Incoming supply",
    mpan: "1600004234567",
    site: "York Traction",
    commodity: "Electricity",
    direction: "Import",
    status: "online",
    lastReading: "4 min ago",
    use24h: "2.1 MWh",
    hours: "00.00 to 24.00",
    tou: "On peak and off peak",
    tariff: "HH electricity",
    base: 9,
    swing: 2.4,
    gaps: [],
    estimated: [],
  },
  "nr-bham-in": {
    id: "nr-bham-in",
    name: "Incoming supply",
    mpan: "1600005234567",
    site: "Birmingham",
    commodity: "Electricity",
    direction: "Import",
    status: "online",
    lastReading: "6 min ago",
    use24h: "1.3 MWh",
    hours: "06.00 to 22.00",
    tou: "Weekday peak",
    tariff: "HH electricity",
    base: 4.5,
    swing: 1.1,
    gaps: [],
    estimated: [8, 9],
  },
  "dummy-a1-in": {
    id: "dummy-a1-in",
    name: "Incoming supply",
    mpan: "1600006234567",
    site: "Euston retail",
    commodity: "Electricity",
    owned: "tenant",
    direction: "Import",
    status: "online",
    lastReading: "5 min ago",
    use24h: "1.1 MWh",
    hours: "00.00 to 24.00",
    tou: "On peak and off peak",
    tariff: "HH electricity",
    base: 5,
    swing: 1.2,
    gaps: [],
    estimated: [],
  },
  "dummy-a1-gas": {
    id: "dummy-a1-gas",
    name: "Incoming gas",
    mprn: "1234567890",
    site: "Euston retail",
    commodity: "Gas",
    owned: "tenant",
    direction: "Import",
    status: "online",
    lastReading: "5 min ago",
    use24h: "0.4 MWh",
    hours: "00.00 to 24.00",
    tou: "On peak and off peak",
    tariff: "Gas",
    base: 2.4,
    swing: 0.6,
    gaps: [],
    estimated: [],
  },
  "dummy-a1-water": {
    id: "dummy-a1-water",
    name: "Incoming water",
    serial: "81001234",
    site: "Euston retail",
    commodity: "Water",
    owned: "tenant",
    direction: "Import",
    status: "online",
    lastReading: "5 min ago",
    use24h: "12 m³",
    hours: "00.00 to 24.00",
    tou: "On peak and off peak",
    tariff: "Water",
    ratePence: 185,
    base: 2.4,
    swing: 0.6,
    gaps: [],
    estimated: [6, 7],
  },
  "dummy-a2-in": {
    id: "dummy-a2-in",
    name: "Incoming supply",
    mpan: "1600006234568",
    site: "Birmingham retail",
    commodity: "Electricity",
    owned: "tenant",
    direction: "Import",
    status: "online",
    lastReading: "8 min ago",
    use24h: "0.7 MWh",
    hours: "06.00 to 22.00",
    tou: "Weekday peak",
    tariff: "HH electricity",
    base: 3.5,
    swing: 0.9,
    gaps: [],
    estimated: [],
  },
  "dummy-a3-in": {
    id: "dummy-a3-in",
    name: "Incoming supply",
    mpan: "1600006234569",
    site: "Paddington retail",
    commodity: "Electricity",
    direction: "Import",
    status: "online",
    lastReading: "3 min ago",
    use24h: "1.4 MWh",
    hours: "00.00 to 24.00",
    tou: "Night and day",
    tariff: "HH electricity",
    base: 6.2,
    swing: 1.4,
    gaps: [],
    estimated: [],
  },
};

const PROTO_WALK_SITE_KIND = {
  traction: { base: 8.2, swing: 2.2, hours: "00.00 to 24.00", tou: "On peak and off peak" },
  depot: { base: 5.4, swing: 1.4, hours: "05.00 to 21.00", tou: "Weekday peak" },
  station: { base: 6.3, swing: 1.6, hours: "04.00 to 23.00", tou: "Night and day" },
  retail: { base: 2.9, swing: 0.7, hours: "06.00 to 22.00", tou: "Weekday peak" },
};

const PROTO_WALK_GROUPS = [
  {
    name: "London North Western",
    sites: [
      { name: "Crewe depot", keep: ["nr-crewe-in"], kind: "depot" },
      { name: "Euston", keep: ["nr-euston-in"] },
      { name: "Manchester Traction", keep: ["nr-man-in", "nr-man-ex"], kind: "traction" },
      { name: "Stafford", kind: "station" },
      { name: "Warrington depot", kind: "depot", meters: ["in", "gas"] },
      { name: "Liverpool Lime Street", kind: "station" },
      { name: "Preston", kind: "station" },
      { name: "Manchester Piccadilly", kind: "station" },
      { name: "Rugby", kind: "station" },
      { name: "Milton Keynes Central", kind: "station" },
      { name: "Chester", kind: "station" },
      { name: "Stoke-on-Trent", kind: "station" },
      { name: "Wolverhampton", kind: "station" },
      { name: "Lancaster", kind: "station" },
      { name: "Carlisle", kind: "station" },
      { name: "Blackpool North", kind: "station" },
      { name: "Bolton", kind: "station" },
      { name: "Stockport", kind: "station" },
      { name: "Coventry", kind: "station" },
      { name: "Nuneaton", kind: "station" },
      { name: "Wigan North Western", kind: "station" },
      { name: "Macclesfield", kind: "station" },
      { name: "Wilmslow", kind: "station" },
      { name: "Tamworth", kind: "station" },
    ],
  },
  {
    name: "Eastern",
    sites: [
      { name: "York Traction", keep: ["nr-york-in"], kind: "traction" },
      { name: "Doncaster depot", kind: "depot", status: "gaps", gaps: [2, 3], lastReading: "2 h ago", use24h: "Partial" },
      { name: "Newcastle", kind: "station" },
      { name: "Leeds", kind: "station" },
      { name: "Peterborough", kind: "station" },
      { name: "Hull", kind: "station" },
      { name: "King's Cross", kind: "station" },
      { name: "Cambridge", kind: "station" },
      { name: "Norwich", kind: "station" },
      { name: "Ipswich", kind: "station" },
      { name: "Sheffield", kind: "station" },
      { name: "Lincoln", kind: "station" },
      { name: "Darlington", kind: "station" },
      { name: "Durham", kind: "station" },
      { name: "Stevenage", kind: "station" },
      { name: "Grantham", kind: "station" },
      { name: "Newark North Gate", kind: "station" },
      { name: "Doncaster", kind: "station" },
      { name: "York station", kind: "station" },
      { name: "Harrogate", kind: "station" },
      { name: "Scarborough", kind: "station" },
    ],
  },
  {
    name: "Western",
    sites: [
      { name: "Birmingham", keep: ["nr-bham-in"] },
      { name: "Reading", kind: "station", status: "stale", lastReading: "3 h ago" },
      { name: "Oxford", kind: "station" },
      { name: "Bristol Temple Meads", kind: "station" },
      { name: "Cardiff Central", kind: "station" },
      { name: "Swindon depot", kind: "depot" },
      { name: "Exeter St Davids", kind: "station" },
      { name: "Plymouth", kind: "station" },
      { name: "Swansea", kind: "station" },
      { name: "Bath Spa", kind: "station" },
      { name: "Gloucester", kind: "station" },
      { name: "Newport", kind: "station" },
      { name: "Didcot Parkway", kind: "station" },
      { name: "Slough", kind: "station" },
      { name: "Taunton", kind: "station" },
      { name: "Worcester Foregate Street", kind: "station" },
      { name: "Hereford", kind: "station" },
      { name: "Penzance", kind: "station" },
      { name: "Truro", kind: "station" },
      { name: "Bristol Parkway", kind: "station" },
      { name: "Cheltenham Spa", kind: "station" },
    ],
  },
  {
    name: "Scotland",
    sites: [
      { name: "Glasgow Central", kind: "station", meters: ["in", "ex"] },
      { name: "Edinburgh Waverley", kind: "station" },
      { name: "Motherwell depot", kind: "depot", status: "stale", lastReading: "4 h ago" },
      { name: "Inverness", kind: "station" },
      { name: "Aberdeen", kind: "station" },
      { name: "Glasgow Queen Street", kind: "station" },
      { name: "Haymarket", kind: "station" },
      { name: "Stirling", kind: "station" },
      { name: "Perth", kind: "station" },
      { name: "Dundee", kind: "station" },
      { name: "Kirkcaldy", kind: "station" },
      { name: "Paisley Gilmour Street", kind: "station" },
      { name: "Fort William", kind: "station" },
      { name: "Aviemore", kind: "station" },
      { name: "Inverkeithing", kind: "station" },
      { name: "Falkirk High", kind: "station" },
      { name: "Ayr", kind: "station" },
    ],
  },
  {
    name: "Southern",
    sites: [
      { name: "Waterloo", kind: "station" },
      { name: "Clapham Junction", kind: "station" },
      { name: "Brighton", kind: "station" },
      { name: "East Croydon", kind: "station" },
      { name: "Wimbledon depot", kind: "depot", meters: ["in", "gas"] },
      { name: "London Victoria", kind: "station" },
      { name: "London Bridge", kind: "station" },
      { name: "Gatwick Airport", kind: "station" },
      { name: "Southampton Central", kind: "station" },
      { name: "Portsmouth Harbour", kind: "station" },
      { name: "Guildford", kind: "station" },
      { name: "Ashford International", kind: "station" },
      { name: "Hastings", kind: "station" },
      { name: "Chichester", kind: "station" },
      { name: "Basingstoke", kind: "station" },
      { name: "Woking", kind: "station" },
      { name: "Eastbourne", kind: "station" },
      { name: "Worthing", kind: "station" },
      { name: "Three Bridges", kind: "station" },
      { name: "Richmond", kind: "station" },
    ],
  },
  {
    id: "tenanted-retail",
    name: "Tenanted retail on the Network Rail estate",
    sites: [
      { name: "Euston retail", keep: ["dummy-a1-in", "dummy-a1-gas", "dummy-a1-water"], kind: "retail", owned: "tenant" },
      { name: "Birmingham retail", keep: ["dummy-a2-in"], kind: "retail", owned: "tenant" },
      { name: "Paddington retail", keep: ["dummy-a3-in"], kind: "retail" },
    ],
  },
];

let protoWalkPortfolioCache = null;

function protoWalkSiteSpread(name) {
  const key = String(name || "");
  let h = 0;
  for (let i = 0; i < key.length; i += 1) h = (h * 33 + key.charCodeAt(i)) >>> 0;
  return 0.45 + (h % 71) / 50;
}

function protoMeterSeed(meter) {
  const key = String(meter?.id || meter?.site || "");
  let h = 0;
  for (let i = 0; i < key.length; i += 1) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % 47;
}

function protoWalkMeterId(site, kind) {
  const slug = protoGroupId(site);
  if (kind === "ex") return `nr-${slug}-ex`;
  if (kind === "gas") return `nr-${slug}-gas`;
  if (kind === "water") return `nr-${slug}-water`;
  return `nr-${slug}-in`;
}

function protoWalkMeterKindKey(meter) {
  if (protoMeterKind(meter) === "water") return "water";
  if (protoMeterKind(meter) === "gas") return "gas";
  if (meter?.direction === "Export") return "ex";
  return "in";
}

function protoWalkSiteKinds(site) {
  const place = site.kind || "station";
  const kinds = new Set(site.meters && site.meters.length ? site.meters : ["in"]);
  kinds.add("water");
  if (place === "depot") kinds.add("gas");
  return ["in", "ex", "gas", "water"].filter((id) => kinds.has(id));
}

function protoWalkMakeMeter(group, site, kind, index, extra) {
  const named = extra.id ? PROTO_NAMED_METERS[extra.id] : null;
  if (named) {
    return { ...named, site: site.name, path: ["EDF", group, site.name] };
  }
  const profile = PROTO_WALK_SITE_KIND[site.kind || "station"];
  const gas = kind === "gas";
  const exp = kind === "ex";
  const water = kind === "water";
  const status = extra.status || site.status || "online";
  const meter = {
    id: extra.id || protoWalkMeterId(site.name, kind),
    name: water ? "Incoming water" : gas ? "Incoming gas" : exp ? "Export" : "Incoming supply",
    site: site.name,
    path: ["EDF", group, site.name],
    commodity: water ? "Water" : gas ? "Gas" : "Electricity",
    direction: exp ? "Export" : "Import",
    status,
    lastReading: extra.lastReading || site.lastReading || "4 min ago",
    use24h: water
      ? `${Math.max(4, Math.round(profile.base * 1.8 * protoWalkSiteSpread(site.name)))} m³`
      : extra.use24h || site.use24h || (status === "gaps" ? "Partial" : `${((profile.base * protoWalkSiteSpread(site.name)) / 4).toFixed(1)} MWh`),
    hours: profile.hours,
    tou: profile.tou,
    tariff: water ? "Water" : gas ? "Gas" : "HH electricity",
    base: water
      ? Math.max(0.8, profile.base * 0.32 * protoWalkSiteSpread(site.name))
      : exp
        ? Math.max(1.2, profile.base * 0.28 * protoWalkSiteSpread(site.name))
        : gas
          ? Math.max(1.6, profile.base * 0.45 * protoWalkSiteSpread(site.name))
          : Number((profile.base * protoWalkSiteSpread(site.name)).toFixed(2)),
    swing: water ? Math.max(0.2, profile.swing * 0.4) : exp ? 0.6 : profile.swing,
    gaps: extra.gaps || site.gaps || [],
    estimated: extra.estimated || [],
  };
  if (water) {
    meter.serial = String(81000000 + index);
    meter.ratePence = 185;
  } else if (gas) meter.mprn = String(2100000000 + index);
  else meter.mpan = String(1600009000000 + index);
  if (extra.owned || site.owned) meter.owned = extra.owned || site.owned;
  return meter;
}

function protoWalkPortfolio() {
  if (protoWalkPortfolioCache) return protoWalkPortfolioCache;
  const meters = [];
  let n = 0;
  const tree = PROTO_WALK_GROUPS.map((group) => ({
    id: group.id || protoGroupId(group.name),
    name: group.name,
    children: group.sites.map((site) => {
      const named = (site.keep || []).map((id) =>
        protoWalkMakeMeter(group.name, site, "in", (n += 1), { id })
      );
      const have = new Set(named.map((item) => protoWalkMeterKindKey(item)));
      const rest = protoWalkSiteKinds(site)
        .filter((kind) => !have.has(kind))
        .map((kind) => protoWalkMakeMeter(group.name, site, kind, (n += 1), {}));
      const siteMeters = [...named, ...rest];
      meters.push(...siteMeters);
      return {
        name: site.name,
        children: siteMeters.map((item) => ({
          name: item.name,
          meter: item.id,
        })),
      };
    }),
  }));
  const byId = (id) => meters.find((item) => item.id === id);
  const alerts = [
    byId("nr-doncaster-depot-in") && {
      id: "a-doncaster",
      kind: "Gap",
      age: "2 h",
      level: "High",
      meter: "Doncaster depot",
      meterId: "nr-doncaster-depot-in",
      point: "03.00",
      summary: "No readings arriving",
      status: "Unacknowledged",
    },
    byId("nr-reading-in") && {
      id: "a-reading",
      kind: "Stale",
      age: "3 h",
      level: "Medium",
      meter: "Reading",
      meterId: "nr-reading-in",
      point: "12.00",
      summary: "Last actual 3 h ago",
      status: "Active",
    },
    byId("nr-motherwell-depot-in") && {
      id: "a-motherwell",
      kind: "Stale",
      age: "4 h",
      level: "Medium",
      meter: "Motherwell depot",
      meterId: "nr-motherwell-depot-in",
      point: "11.00",
      summary: "Last actual 4 h ago",
      status: "Active",
    },
  ].filter(Boolean);
  const online = meters.filter((item) => item.status === "online").length;
  protoWalkPortfolioCache = {
    tree,
    meters,
    alerts,
    kpis: {
      use: "2.4 GWh",
      useHint: "3.1 percent below last year",
      peak: "86 MW",
      peakHint: "09 Sep 07.30",
      complete: "94 percent",
      reporting: `${online} of ${meters.length}`,
    },
  };
  return protoWalkPortfolioCache;
}

function protoData() {
  const raw = teamSystem()?.prototype || null;
  if (!raw) return null;
  const walk = protoWalkPortfolio();
  return {
    ...raw,
    tree: walk.tree,
    meters: walk.meters,
    alerts: [...(raw.alerts || []), ...walk.alerts],
    kpis: { ...raw.kpis, ...walk.kpis },
  };
}

const PROTO_BRAND_PRIMARY = "#00020B";
const PROTO_BRAND_SECONDARY = "#028178";
const PROTO_BRAND_EXTRA = "#02C2B7";
const PROTO_BRAND_EXTRA_2 = "#028178";
const PROTO_BRAND_SWATCHES = [
  "#000000",
  "#1A1A1A",
  "#4A4A4A",
  "#737373",
  "#DFDFDF",
  "#FFFFFF",
  "#03F4E8",
  "#02C2B7",
  "#028178",
  "#0EA5E9",
  "#2563EB",
  "#EA580C",
];

function protoHex(raw) {
  const value = String(raw || "").trim();
  if (/^#[0-9A-Fa-f]{6}$/.test(value)) return value.toUpperCase();
  if (/^#[0-9A-Fa-f]{3}$/.test(value)) {
    const r = value[1];
    const g = value[2];
    const b = value[3];
    return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
  }
  return "";
}

function protoRgbToHex(r, g, b) {
  const to = (n) =>
    Math.max(0, Math.min(255, Math.round(n)))
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();
  return `#${to(r)}${to(g)}${to(b)}`;
}

function protoHexToHsv(hex) {
  const clean = protoHex(hex) || "#000000";
  const r = parseInt(clean.slice(1, 3), 16) / 255;
  const g = parseInt(clean.slice(3, 5), 16) / 255;
  const b = parseInt(clean.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: max === 0 ? 0 : d / max, v: max };
}

function protoHsvToHex(h, s, v) {
  const hue = ((h % 360) + 360) % 360;
  const c = v * s;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = v - c;
  let r = 0;
  let g = 0;
  let b = 0;
  if (hue < 60) {
    r = c;
    g = x;
  } else if (hue < 120) {
    r = x;
    g = c;
  } else if (hue < 180) {
    g = c;
    b = x;
  } else if (hue < 240) {
    g = x;
    b = c;
  } else if (hue < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }
  return protoRgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}

function protoBrandKey(kind) {
  return kind === "secondary" ? "prototypeBrandSecondary" : "prototypeBrandPrimary";
}

function protoBrandName(kind) {
  return kind === "secondary" ? "Secondary colour" : "Primary colour";
}

function protoOrgScope() {
  const seeing = protoSeeAs();
  if (seeing?.company) return seeing.company;
  if (protoCompanyId() === "admin-user") return "IMSERV";
  if (protoCompanyId() === "portfolio-customer") return "EDF";
  return "Network Rail";
}

function protoOrgByCompany() {
  const raw = store.prototypeOrgByCompany;
  if (raw && typeof raw === "object" && !Array.isArray(raw)) return raw;
  store.prototypeOrgByCompany = {};
  return store.prototypeOrgByCompany;
}

function protoOrgBlank() {
  return { name: "", country: "", logo: "", primary: "", secondary: "" };
}

function protoSeedOrgScope(scope) {
  const map = protoOrgByCompany();
  const cur = map[scope];
  if (cur && typeof cur === "object" && !Array.isArray(cur)) return;
  const home =
    (scope === "IMSERV" && protoCompanyId() === "admin-user") ||
    (scope === "Network Rail" && protoCompanyId() === "end-customer") ||
    (scope === "EDF" && protoCompanyId() === "portfolio-customer");
  map[scope] = home
    ? {
        name: String(store.prototypeOrgName || "").slice(0, 80),
        country: String(store.prototypeOrgCountry || ""),
        logo: String(store.prototypeBrandLogo || ""),
        primary: protoHex(store.prototypeBrandPrimary) || "",
        secondary: protoHex(store.prototypeBrandSecondary) || "",
      }
    : protoOrgBlank();
}

function protoOrgState() {
  const scope = protoOrgScope();
  protoSeedOrgScope(scope);
  return protoOrgByCompany()[scope];
}

function protoPatchOrg(patch, persistNow = true) {
  const scope = protoOrgScope();
  protoSeedOrgScope(scope);
  const map = protoOrgByCompany();
  map[scope] = { ...map[scope], ...patch };
  store.prototypeOrgByCompany = map;
  if (persistNow && typeof persistChrome === "function") persistChrome();
}

function protoApplyBrand(kind, hex, persist) {
  const clean = protoHex(hex);
  if (!clean) return;
  protoPatchOrg({ [kind]: clean }, persist);
  protoPaintSkin();
  protoSyncBrandUi(kind, clean);
}

function protoSyncBrandUi(kind, hex) {
  const root = document.querySelector("#astral-fs");
  if (!root) return;
  root.querySelectorAll(`[data-proto-brand-hex="${kind}"]`).forEach((el) => {
    if (document.activeElement !== el) el.value = hex;
  });
  root.querySelectorAll(`[data-proto-brand-row="${kind}"] .astral-brand-swatch`).forEach((el) => {
    el.style.background = hex;
  });
  const picker = root.querySelector(`[data-proto-picker="${kind}"]`);
  if (picker) protoPaintPicker(picker, hex);
}

function protoPaintPicker(picker, hex) {
  const hsv = protoHexToHsv(hex);
  picker.style.setProperty("--picker-hue", protoHsvToHex(hsv.h, 1, 1));
  const svDot = picker.querySelector(".astral-picker-sv-dot");
  if (svDot) {
    svDot.style.left = `${hsv.s * 100}%`;
    svDot.style.top = `${(1 - hsv.v) * 100}%`;
  }
  const hueDot = picker.querySelector(".astral-picker-hue-dot");
  if (hueDot) hueDot.style.left = `${(hsv.h / 360) * 100}%`;
  picker.querySelectorAll("[data-proto-recent]").forEach((btn) => {
    btn.classList.toggle("is-on", protoHex(btn.dataset.protoRecent) === hex);
  });
  const field = picker.querySelector("[data-proto-brand-hex]");
  if (field && document.activeElement !== field) field.value = hex;
}

function protoLuminance(hex) {
  const clean = protoHex(hex) || "#000000";
  const chan = (slice) => {
    const n = parseInt(clean.slice(slice, slice + 2), 16) / 255;
    return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * chan(1) + 0.7152 * chan(3) + 0.0722 * chan(5);
}

function protoOnColour(hex) {
  const L = protoLuminance(hex);
  const white = 1.05 / (L + 0.05);
  const black = (L + 0.05) / 0.05;
  return black >= white ? "#000000" : "#FFFFFF";
}

function protoBrand() {
  const rec = protoOrgState();
  return {
    logo: String(rec.logo || ""),
    primary: protoHex(rec.primary) || PROTO_BRAND_PRIMARY,
    secondary: protoHex(rec.secondary) || PROTO_BRAND_SECONDARY,
  };
}

function protoLogoFileKind(file) {
  const name = String(file?.name || "").toLowerCase();
  const type = String(file?.type || "").toLowerCase();
  if (type === "image/svg+xml" || name.endsWith(".svg")) return "svg";
  if (type === "image/png" || name.endsWith(".png")) return "png";
  return "";
}

function protoLogoSrcOk(src) {
  const value = String(src || "");
  return value.startsWith("data:image/png") || value.startsWith("data:image/svg+xml");
}

const PROTO_IMSERV_MARK = "assets/imserv-logomark.svg";

function protoOrgLogoHtml(src, label) {
  if (!src) return "";
  const onDark = protoOnColour(protoBrand().primary) === "#FFFFFF";
  return `
    <span class="astral-org-logo${onDark ? " is-on-dark" : " is-on-light"}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" />
    </span>
  `;
}

function protoPictureFileKind(file) {
  const name = String(file?.name || "").toLowerCase();
  const type = String(file?.type || "").toLowerCase();
  if (
    type === "image/jpeg" ||
    type === "image/jpg" ||
    type === "image/pjpeg" ||
    name.endsWith(".jpg") ||
    name.endsWith(".jpeg")
  ) {
    return "jpeg";
  }
  if (type === "image/png" || name.endsWith(".png")) return "png";
  return "";
}

function protoPictureSrcOk(src) {
  const value = String(src || "");
  return (
    value.startsWith("data:image/jpeg") ||
    value.startsWith("data:image/jpg") ||
    value.startsWith("data:image/pjpeg") ||
    value.startsWith("data:image/png")
  );
}

function protoProfilePicture() {
  const src = String(store.prototypeProfilePicture || "");
  return protoPictureSrcOk(src) ? src : "";
}

function protoProfileName() {
  return String(store.prototypeProfileName || "").replace(/\s+/g, " ").trim();
}

function protoProfileEmail() {
  return "shaun.leishman@imserv.com";
}

function protoProfileJobTitle() {
  return String(store.prototypeProfileJobTitle || "").replace(/\s+/g, " ").trim();
}

function protoProfileLine(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function protoProfileDraftName() {
  return store.prototypeProfileDraftName != null
    ? String(store.prototypeProfileDraftName)
    : String(store.prototypeProfileName || "");
}

function protoProfileDraftJobTitle() {
  return store.prototypeProfileDraftJobTitle != null
    ? String(store.prototypeProfileDraftJobTitle)
    : String(store.prototypeProfileJobTitle || "");
}

function protoProfileDraftDiscipline() {
  return protoProfileDisciplineId(
    store.prototypeProfileDraftDiscipline != null
      ? store.prototypeProfileDraftDiscipline
      : store.prototypeProfileDiscipline
  );
}

function protoProfileDirty() {
  return (
    protoProfileLine(protoProfileDraftName()) !== protoProfileName() ||
    protoProfileLine(protoProfileDraftJobTitle()) !== protoProfileJobTitle() ||
    protoProfileDraftDiscipline() !== protoProfileDiscipline()
  );
}

function protoSaveProfile() {
  const name = protoProfileLine(protoProfileDraftName()).slice(0, 80);
  const title = protoProfileLine(protoProfileDraftJobTitle()).slice(0, 80);
  const discipline = protoProfileDraftDiscipline();
  setProto({
    prototypeProfileName: name,
    prototypeProfileJobTitle: title,
    prototypeProfileDiscipline: discipline,
    prototypeProfileDraftName: name,
    prototypeProfileDraftJobTitle: title,
    prototypeProfileDraftDiscipline: discipline,
  });
}

function protoProfileDisciplineId(raw) {
  return PROTO_PROFILE_DISCIPLINES.some((item) => item.id === raw) ? raw : "";
}

function protoProfileDiscipline() {
  return protoProfileDisciplineId(store.prototypeProfileDiscipline);
}

function protoProfileDisciplineName() {
  const id = protoProfileDiscipline();
  return PROTO_PROFILE_DISCIPLINES.find((item) => item.id === id)?.name || "";
}

function protoProfileInitials(source) {
  const name = String(source || protoProfileName()).trim();
  if (!name) return "ME";
  const local = name.split("@")[0] || name;
  const parts = local.split(/[.\s_-]+/).filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  return local.slice(0, 2).toUpperCase();
}

function protoAvatarMark(label, source) {
  const src = protoProfilePicture();
  if (!src) return escapeHtml(protoProfileInitials(source));
  return `<img class="astral-avatar-photo" src="${escapeHtml(src)}" alt="${escapeHtml(label)}" />`;
}

function protoMigrateImservColours() {
  let changed = false;
  const rec = protoOrgState();
  const primary = protoHex(rec.primary) || protoHex(store.prototypeBrandPrimary);
  const secondary = protoHex(rec.secondary) || protoHex(store.prototypeBrandSecondary);
  const next = {};
  if (primary === PROTO_BRAND_EXTRA || primary === PROTO_BRAND_EXTRA_2) {
    store.prototypeBrandPrimary = PROTO_BRAND_PRIMARY;
    next.primary = PROTO_BRAND_PRIMARY;
    changed = true;
  }
  if (secondary === "#03F4E8" || secondary === PROTO_BRAND_EXTRA) {
    store.prototypeBrandSecondary = PROTO_BRAND_SECONDARY;
    next.secondary = PROTO_BRAND_SECONDARY;
    changed = true;
  }
  if (changed) protoPatchOrg(next, typeof persistChrome === "function");
}

function protoSkinStyle() {
  const brand = protoBrand();
  const onNav = protoOnColour(brand.primary);
  const onFill = protoOnColour(brand.secondary);
  return [
    `--color-nav:${brand.primary}`,
    `--color-on-nav:${onNav}`,
    `--color-brand-primary:${brand.secondary}`,
    `--color-action-primary:${brand.secondary}`,
    `--color-action-on-primary:${onFill}`,
    `--color-action-primary-hover:color-mix(in srgb, ${brand.secondary} 78%, #000)`,
    `--color-focus-ring:#000000`,
  ].join(";");
}

function protoPaintSkin() {
  const app = document.querySelector("#astral-fs .astral-app");
  if (app) app.setAttribute("style", protoSkinStyle());
  protoSyncOrgLogoTone();
}

function protoSyncOrgLogoTone() {
  const onDark = protoOnColour(protoBrand().primary) === "#FFFFFF";
  document.querySelectorAll("#astral-fs .astral-org-logo").forEach((el) => {
    el.classList.toggle("is-on-dark", onDark);
    el.classList.toggle("is-on-light", !onDark);
  });
}

function protoMeters() {
  return protoData()?.meters || [];
}

function protoMeter(id) {
  const meters = protoMeters();
  return meters.find((item) => item.id === id) || meters[0] || null;
}

function protoGroupId(name) {
  return (
    String(name || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "group"
  );
}

function protoIsSiteNode(node) {
  return (node?.children || []).some((child) => child.meter);
}

function protoSiteFromNode(node) {
  const meters = protoMeters();
  const kids = (node.children || [])
    .map((child) => meters.find((item) => item.id === child.meter))
    .filter(Boolean);
  const status = kids.some((item) => item.status === "gaps")
    ? "gaps"
    : kids.some((item) => item.status === "stale")
    ? "stale"
    : "online";
  return {
    name: node.name,
    meters: kids,
    status,
    flag: kids.find((item) => item.status !== "online") || kids[0] || null,
  };
}

function protoGroups() {
  const tree = protoData()?.tree || [];
  const first = tree[0];
  if (first && !protoIsSiteNode(first)) {
    return tree.map((node) => ({
      id: node.id || protoGroupId(node.name),
      name: node.name,
      sites: (node.children || []).filter(protoIsSiteNode).map(protoSiteFromNode),
    }));
  }
  const sites = tree.filter(protoIsSiteNode).map(protoSiteFromNode);
  const name = protoMeters()[0]?.path?.[1] || "Sites";
  return [{ id: protoGroupId(name), name, sites }];
}

function protoSites() {
  return protoGroups().flatMap((group) => group.sites);
}

function protoIsDummySite(site) {
  if (String(site?.name || "").startsWith("Dummy site")) return true;
  return (site?.meters || []).some((item) => item.owned === "tenant");
}

function protoEstateSites() {
  return protoSites().filter((site) => !protoIsDummySite(site));
}

function protoPersonSitesStore() {
  const raw = store.prototypePersonSites;
  return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
}

function protoPersonSiteNames(personId) {
  const all = protoEstateSites().map((site) => site.name);
  const list = protoPersonSitesStore()[personId];
  if (!Array.isArray(list)) return all;
  return all.filter((name) => list.includes(name));
}

function protoSiteGranted(site) {
  if (protoIsDummySite(site)) return true;
  if (protoMeRole() === "admin" || protoMeRole() === "super-admin") return true;
  return protoPersonSiteNames("me").includes(site.name);
}

function protoIsAllGroup(id) {
  return id === "all";
}

function protoVisibleGroups() {
  const q = protoState().query.trim().toLowerCase();
  const picked = protoTreeFilterIds();
  return protoGroups()
    .map((group) => {
      const groupHit = !q || group.name.toLowerCase().includes(q);
      const sites = group.sites
        .filter(
          (site) =>
            (groupHit || protoSiteMatches(site, q)) &&
            protoSitePassesFilter(site, picked) &&
            protoSiteGranted(site)
        )
        .map((site) => ({
          ...site,
          meters: protoMetersVisible(site.meters, picked),
        }))
        .filter((site) => site.meters.length);
      return { ...group, sites };
    })
    .filter((group) => group.sites.length);
}

function protoAllGroup() {
  return {
    id: "all",
    name: "All",
    sites: protoVisibleGroups().flatMap((group) => group.sites),
  };
}

function protoGroup(id) {
  if (protoIsAllGroup(id)) return protoAllGroup();
  return protoGroups().find((group) => group.id === id) || null;
}

function protoGroupQueryIds(group) {
  if (protoIsAllGroup(group?.id)) return ["all", ...protoAllGroupIds()];
  return group?.id || "";
}

function protoGroupForSite(site) {
  if (!site) return null;
  return protoGroups().find((group) => group.sites.some((item) => item.name === site.name)) || null;
}

function protoSignedCompanyName() {
  return protoMeters()[0]?.path?.[0] || "EDF";
}

function protoPaneAbove(kind, item) {
  if (kind === "group" || kind === "all") return protoSignedCompanyName();
  if (kind === "site") return protoGroupForSite(item)?.name || protoSignedCompanyName();
  if (kind === "meter") return protoSiteByMeter(item?.id)?.name || protoSignedCompanyName();
  return protoSignedCompanyName();
}

function protoPaneKicker(name) {
  const word = String(name || "").trim();
  if (!word) return "";
  return `<p class="astral-kicker">${escapeHtml(word)}</p>`;
}

function protoCompareAbove(bundle) {
  if (bundle.level === "group") return protoSignedCompanyName();
  const site = protoSiteByMeter(store.activePrototypeMeter);
  if (bundle.level === "meter") return site?.name || protoSignedCompanyName();
  return protoGroupForSite(site)?.name || protoSignedCompanyName();
}

function protoCompareOriginName(bundle) {
  if (bundle?.level === "group") {
    return protoGroup(store.prototypeGroup)?.name || bundle.groups?.[0]?.name || "";
  }
  return protoSiteByMeter(store.activePrototypeMeter)?.name || bundle.sites?.[0]?.name || "";
}

function protoGroupClosed() {
  const ids = protoAllGroupIds();
  const raw = Array.isArray(store.prototypeGroupClosed) ? store.prototypeGroupClosed : [];
  const open = ids.filter((id) => !raw.includes(id));
  if (open.length <= 1) return raw.filter((id) => ids.includes(id));
  const selected =
    store.prototypeScope === "group"
      ? store.prototypeGroup
      : protoGroupForSite(protoSiteByMeter(store.activePrototypeMeter))?.id || "";
  const keep = open.includes(selected) ? selected : open[0];
  return ids.filter((id) => id !== keep);
}

function protoAllGroupIds() {
  return protoGroups().map((group) => group.id);
}

function protoClosedExcept(openId) {
  return protoAllGroupIds().filter((id) => id !== openId);
}

function protoClosedAll() {
  return protoAllGroupIds();
}

function protoGroupMeters(group) {
  return (group?.sites || []).flatMap((site) => site.meters);
}

function protoGroupSiteIds(group) {
  return (group?.sites || []).map((site) => protoSiteId(site)).filter(Boolean);
}

const PROTO_GRAPH_NONE = "__none__";

function protoStoreGraphIds(ids) {
  return ids.length ? ids : [PROTO_GRAPH_NONE];
}

function protoReadGraphIds(stored, allIds) {
  const ids = allIds || [];
  const raw = Array.isArray(stored) ? stored.filter((id) => ids.includes(id)) : [];
  if (!raw.length && Array.isArray(stored) && stored.includes(PROTO_GRAPH_NONE)) return [];
  return raw.length ? raw : ids;
}

function protoGroupViewSites(group) {
  const sites = protoSitesForPane(group?.sites || []);
  const ids = sites.map((site) => protoSiteId(site));
  const picked = new Set(protoReadGraphIds(store.prototypeGroupSites, ids));
  return sites.filter((site) => picked.has(protoSiteId(site)));
}

function protoGroupViewMeters(group) {
  return protoGroupViewSites(group).flatMap((site) => site.meters);
}

function protoGroupFlow(group) {
  return protoMetersFlow(protoGroupViewMeters(group));
}

function protoMetersFlow(meters) {
  const incoming = (meters || []).filter((item) => item.direction !== "Export");
  const outgoing = (meters || []).filter((item) => item.direction === "Export");
  let channel = store.prototypeChannel || "all";
  if (channel === "all" && !(incoming.length && outgoing.length)) {
    channel = outgoing.length && !incoming.length ? "out" : "in";
  }
  if (channel === "out" && !outgoing.length) channel = incoming.length ? "in" : "all";
  if (channel === "in" && !incoming.length) channel = outgoing.length ? "out" : "all";
  return {
    incoming,
    outgoing,
    both: Boolean(incoming.length && outgoing.length),
    channel,
  };
}

function protoCombineSeries(meters, build) {
  const make = build || ((item) => protoSeries(item, "day"));
  const series = (meters || []).map((item) => make(item));
  if (!series.length) return [];
  return series[0].map((point, i) => {
    let total = 0;
    let missing = 0;
    let estimated = 0;
    series.forEach((row) => {
      const cell = row[i];
      if (!cell || cell.value == null) {
        missing += 1;
        return;
      }
      total += cell.value;
      if (cell.quality === "estimated") estimated += 1;
    });
    const unit = point.unit || "kWh";
    return {
      label: point.label,
      value: missing === series.length ? null : protoRoundReading(total, 1),
      quality: missing === series.length ? "missing" : estimated ? "estimated" : "actual",
      unit,
    };
  });
}

function protoGroupSeries(group, channel) {
  return protoMetersSeries(protoGroupViewMeters(group), channel);
}

function protoMetersSeries(meters, channel) {
  const flow = protoMetersFlow(meters);
  if (channel === "out") return protoCombineSeries(flow.outgoing, protoSiteSeries);
  if (channel === "in" || !flow.both)
    return protoCombineSeries(flow.incoming.length ? flow.incoming : flow.outgoing, protoSiteSeries);
  const incoming = protoCombineSeries(flow.incoming, protoSiteSeries);
  const outgoing = protoCombineSeries(flow.outgoing, protoSiteSeries);
  return incoming.map((point, i) => {
    const other = outgoing[i] || { value: null, quality: "missing" };
    const missing = point.quality === "missing" || other.quality === "missing" || other.value == null;
    return {
      ...point,
      last: other.value,
      lastQuality: other.value == null ? "missing" : other.quality,
      nowLabel: "In",
      lastLabel: "Out",
      note: missing
        ? "Missing data. Not zero use."
        : point.quality === "estimated" || other.quality === "estimated"
        ? "Estimated reading."
        : "Actual reading.",
    };
  });
}

function protoGroupAlerts(group) {
  const ids = new Set(protoGroupMeters(group).map((item) => item.id));
  return (protoData()?.alerts || []).filter((item) => ids.has(item.meterId));
}

function protoGroupFlagWords(group) {
  const words = protoGroupAlerts(group).map((item) => protoAlertWord(item.kind));
  if (words.length) return [...new Set(words)];
  if ((group?.sites || []).some((site) => site.status === "gaps")) return ["Missing data"];
  if ((group?.sites || []).some((site) => site.status === "stale")) return ["Not sending"];
  return [];
}

function protoSiteByMeter(id) {
  return protoSites().find((site) => site.meters.some((item) => item.id === id)) || null;
}

function protoAlertWord(kind) {
  if (kind === "Gap") return "Missing data";
  if (kind === "Stale") return "Not sending";
  return "Odd use";
}

function protoSiteAlerts(site) {
  const ids = new Set((site?.meters || []).map((item) => item.id));
  return (protoData()?.alerts || []).filter((item) => ids.has(item.meterId));
}

function protoAlertsForMeters(meters) {
  const ids = new Set((meters || []).map((item) => item.id).filter(Boolean));
  if (!ids.size) return [];
  return (protoData()?.alerts || []).filter((item) => ids.has(item.meterId));
}

function protoQueriesForMeters(meters, sites, groupIds) {
  const ids = new Set((meters || []).map((item) => item.id).filter(Boolean));
  const names = new Set((sites || []).map((site) => site.name).filter(Boolean));
  const groups = new Set(protoQueryGroupIds(groupIds));
  return protoQueryRows().filter((row) => {
    const scope = protoQueryScope(row);
    if (scope === "compare") return false;
    if (scope === "group") return groups.has(row.groupId) && Boolean(ids.size || names.size);
    if (row.meterId) return ids.has(row.meterId);
    return names.has(row.site);
  });
}

function protoSiteFlagWords(site) {
  const words = protoSiteAlerts(site).map((item) => protoAlertWord(item.kind));
  if (words.length) return [...new Set(words)];
  if (site?.status === "gaps") return ["Missing data"];
  if (site?.status === "stale") return ["Not sending"];
  return [];
}

function protoMeterFlagWords(meter) {
  const words = (protoData()?.alerts || [])
    .filter((item) => item.meterId === meter?.id)
    .map((item) => protoAlertWord(item.kind));
  if (words.length) return [...new Set(words)];
  if (meter?.status === "gaps") return ["Missing data"];
  if (meter?.status === "stale") return ["Not sending"];
  return [];
}

function protoGroupFlagWords(group) {
  return [...new Set((group?.sites || []).flatMap((site) => protoSiteFlagWords(site)))];
}

function protoActionRank(words) {
  const list = words || [];
  if (list.includes("Odd use")) return 0;
  if (list.includes("Missing data")) return 1;
  if (list.includes("Not sending")) return 2;
  return 3;
}

function protoAlertSide(alert) {
  const meter = protoMeter(alert.meterId);
  return meter?.direction === "Export" ? "out" : "in";
}

function protoMatchMeter(meter, state) {
  const q = state.query.trim().toLowerCase();
  const hay = [meter.name, meter.mpan, meter.mprn, meter.serial, meter.site, meter.commodity, meter.direction]
    .join(" ")
    .toLowerCase();
  return !q || hay.includes(q);
}

function protoClock(hour, minute) {
  return `${String(hour).padStart(2, "0")}.${String(minute).padStart(2, "0")}`;
}

function protoSplitHours(value) {
  const match = String(value || "").match(/(\d{1,2}\.\d{2})\s+to\s+(\d{1,2}\.\d{2})/i);
  if (!match) return { from: "00.00", to: "24.00" };
  return { from: match[1], to: match[2] };
}

function protoMeterProfileDefault(meter) {
  const hours = protoSplitHours(meter?.hours);
  const tou = String(meter?.tou || "On peak and off peak");
  const touPreset =
    PROTO_TOU_PROFILES.find((item) => item.name === tou) || PROTO_TOU_PROFILES[0];
  const hourStatus = hours.from === hours.to ? "closed" : "operational";
  const hourPreset =
    PROTO_HOUR_PROFILES.find(
      (item) => item.from === hours.from && item.to === hours.to && item.status === hourStatus
    ) || "";
  return {
    hours: PROTO_WEEKDAYS.map((day) => ({
      day,
      status: day === "Sunday" && hourStatus === "operational" && hours.from !== "00.00" ? "closed" : hourStatus,
      from: day === "Sunday" && hours.from !== "00.00" ? "" : hours.from,
      to: day === "Sunday" && hours.from !== "00.00" ? "" : hours.to,
      profile: hourPreset?.id || "",
    })),
    tou: PROTO_WEEKDAYS.map((day) => ({
      day,
      onFrom: touPreset.onFrom,
      onTo: touPreset.onTo,
      offFrom: touPreset.offFrom,
      offTo: touPreset.offTo,
      profile: touPreset.id,
    })),
    attrs: protoMeterAttrDefaults(meter),
  };
}

function protoMeterAttrDefaults(meter) {
  const kind = protoMeterKind(meter);
  const pence = protoMeterRatePence(meter);
  const base = {
    area: "1200",
    employees: "18",
  };
  if (kind === "water") {
    return {
      ...base,
      standingWater: "1.20",
      unitWater: String(PROTO_WATER_PENCE),
      emissionsWater: String(
        Number((PROTO_WATER_SUPPLY_KG + PROTO_WATER_WASTE_KG * PROTO_WATER_RETURN).toFixed(3))
      ),
    };
  }
  if (kind === "gas") {
    return {
      ...base,
      standingGas: "0.28",
      emissionsGas: "0.183",
      onGas: String(pence),
      offGas: String(Math.max(1, pence - 2)),
    };
  }
  return {
    ...base,
    capacity: "200",
    standingElec: "0.45",
    emissionsElec: "0.193",
    onElec: String(pence),
    offElec: String(Math.max(1, pence - 6)),
  };
}

function protoMeterProfiles() {
  const raw = store.prototypeMeterProfiles;
  return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
}

function protoMeterDrafts() {
  const raw = store.prototypeMeterDrafts;
  return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
}

function protoCloneProfile(profile) {
  return JSON.parse(JSON.stringify(profile || {}));
}

function protoMeterProfile(id) {
  const meter = protoMeter(id);
  const saved = protoMeterProfiles()[id];
  const profile = protoCloneProfile(saved || protoMeterProfileDefault(meter));
  profile.attrs = { ...protoMeterAttrDefaults(meter), ...(profile.attrs || {}) };
  return profile;
}

function protoMeterDraft(id) {
  const draft = protoMeterDrafts()[id];
  if (!draft) return protoMeterProfile(id);
  const next = protoCloneProfile(draft);
  next.attrs = { ...protoMeterAttrDefaults(protoMeter(id)), ...(next.attrs || {}) };
  return next;
}

function protoMeterDirty(id) {
  return JSON.stringify(protoMeterDraft(id)) !== JSON.stringify(protoMeterProfile(id));
}

function protoClockShow(value) {
  return String(value || "").replace(/\b(\d{1,2})[.:](\d{2})\b/g, (_, hour, minute) => {
    return `${String(hour).padStart(2, "0")}:${minute}`;
  });
}

function protoClockSave(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) return String(value || "").replace(":", ".") || "";
  return `${digits.slice(0, 2).padStart(2, "0")}.${digits.slice(2).padEnd(2, "0")}`;
}

function protoMaskClock(raw) {
  const digits = String(raw || "").replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}:${digits.slice(2)}`;
}

function protoApplyClockInput(raw, caret) {
  const next = protoMaskClock(raw);
  const digitsBefore = String(raw || "")
    .slice(0, Math.max(0, Number(caret) || 0))
    .replace(/\D/g, "").length;
  if (!digitsBefore) return { next, caret: 0 };
  let seen = 0;
  for (let i = 0; i < next.length; i += 1) {
    if (/\d/.test(next[i])) {
      seen += 1;
      if (seen === digitsBefore) return { next, caret: i + 1 };
    }
  }
  return { next, caret: next.length };
}

function protoHoursSummary(profile) {
  const rows = profile?.hours || [];
  const open = rows.filter((row) => row.status === "operational" && row.from && row.to);
  if (open.length) {
    const first = `${open[0].from} to ${open[0].to}`;
    const same = open.every((row) => `${row.from} to ${row.to}` === first);
    return same ? protoClockShow(first) : "Varies by day";
  }
  if (rows.some((row) => row.status === "off")) return "Non-operational";
  return "Closed";
}

function protoTouSummary(profile) {
  const rows = profile?.tou || [];
  if (!rows.length) return "On peak and off peak";
  const named = PROTO_TOU_PROFILES.find((item) => rows.every((row) => row.profile === item.id));
  return named?.name || "Varies by day";
}

function protoPatchMeterDraft(id, patch) {
  const next = protoMeterDraft(id);
  patch(next);
  setProto({
    prototypeSelectOpen: "",
    prototypeMeterDrafts: { ...protoMeterDrafts(), [id]: next },
  });
}

function protoPickMeterProfileSelect(id, value) {
  const hoursStatus = String(id).match(/^meter-hours-status-(.+)-(\d+)$/);
  if (hoursStatus) {
    const meterId = hoursStatus[1];
    const index = Number(hoursStatus[2]);
    protoPatchMeterDraft(meterId, (draft) => {
      const row = draft.hours[index];
      if (!row) return;
      row.status = PROTO_DAY_STATUS.some((item) => item.id === value) ? value : row.status;
      if (row.status !== "operational") {
        row.from = "";
        row.to = "";
      } else if (!row.from || !row.to) {
        row.from = "00.00";
        row.to = "24.00";
      }
    });
    protoRestoreFocus(`#astral-fs [data-proto-select="${CSS.escape(id)}"] .astral-select-btn`);
    return;
  }
  const hoursProfile = String(id).match(/^meter-hours-profile-(.+)-(\d+)$/);
  if (hoursProfile) {
    const meterId = hoursProfile[1];
    const index = Number(hoursProfile[2]);
    const preset = PROTO_HOUR_PROFILES.find((item) => item.id === value);
    if (!preset) return;
    protoPatchMeterDraft(meterId, (draft) => {
      const row = draft.hours[index];
      if (!row) return;
      row.profile = preset.id;
      row.status = preset.status;
      row.from = preset.from;
      row.to = preset.to;
    });
    protoRestoreFocus(`#astral-fs [data-proto-select="${CSS.escape(id)}"] .astral-select-btn`);
    return;
  }
  const touProfile = String(id).match(/^meter-tou-profile-(.+)-(\d+)$/);
  if (touProfile) {
    const meterId = touProfile[1];
    const index = Number(touProfile[2]);
    const preset = PROTO_TOU_PROFILES.find((item) => item.id === value);
    if (!preset) return;
    protoPatchMeterDraft(meterId, (draft) => {
      const row = draft.tou[index];
      if (!row) return;
      row.profile = preset.id;
      row.onFrom = preset.onFrom;
      row.onTo = preset.onTo;
      row.offFrom = preset.offFrom;
      row.offTo = preset.offTo;
    });
    protoRestoreFocus(`#astral-fs [data-proto-select="${CSS.escape(id)}"] .astral-select-btn`);
  }
}

function protoReadMeterProfileForm(form, meter) {
  const draft = protoMeterDraft(meter.id);
  draft.hours = draft.hours.map((row, i) => ({
    ...row,
    from: protoClockSave(form.querySelector(`[name='hours-from-${i}']`)?.value || row.from),
    to: protoClockSave(form.querySelector(`[name='hours-to-${i}']`)?.value || row.to),
  }));
  draft.tou = draft.tou.map((row, i) => ({
    ...row,
    onFrom: protoClockSave(form.querySelector(`[name='tou-on-from-${i}']`)?.value || row.onFrom),
    onTo: protoClockSave(form.querySelector(`[name='tou-on-to-${i}']`)?.value || row.onTo),
    offFrom: protoClockSave(form.querySelector(`[name='tou-off-from-${i}']`)?.value || row.offFrom),
    offTo: protoClockSave(form.querySelector(`[name='tou-off-to-${i}']`)?.value || row.offTo),
  }));
  const attrs = { ...draft.attrs };
  form.querySelectorAll(".astral-meter-attrs input[name]").forEach((input) => {
    attrs[input.name] = String(input.value || "").trim();
  });
  draft.attrs = attrs;
  return draft;
}

function protoSaveMeterProfile(meter, draft) {
  const next = protoCloneProfile(draft);
  setProto({
    prototypeMeterProfiles: { ...protoMeterProfiles(), [meter.id]: next },
    prototypeMeterDrafts: { ...protoMeterDrafts(), [meter.id]: protoCloneProfile(next) },
    prototypeSelectOpen: "",
  });
}

const PROTO_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PROTO_DATE_PRESETS = [
  { id: "24h", name: "Last 24 hours" },
  { id: "7d", name: "Last 7 days" },
  { id: "28d", name: "Last month" },
  { id: "12m", name: "Last 12 months" },
  { id: "custom", name: "Custom" },
];

function protoToday() {
  return new Date(2026, 8, 4);
}

function protoAddDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function protoAddMonths(date, months) {
  const total = date.getMonth() + months;
  const year = date.getFullYear() + Math.floor(total / 12);
  let month = total % 12;
  if (month < 0) month += 12;
  const last = new Date(year, month + 1, 0).getDate();
  const day = Math.min(date.getDate(), last);
  return new Date(year, month, day);
}

function protoIso(date) {
  if (!date) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function protoFromIso(iso) {
  const match = String(iso || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function protoFormatUkDate(date) {
  if (!date) return "";
  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${date.getFullYear()}`;
}

function protoMaskUkDate(raw) {
  const iso = protoFromIso(raw);
  if (iso) return protoFormatUkDate(iso);
  const digits = String(raw || "").replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function protoUkDateCaret(raw, caret, next) {
  const digitsBefore = String(raw || "")
    .slice(0, Math.max(0, Number(caret) || 0))
    .replace(/\D/g, "").length;
  if (!digitsBefore) return 0;
  let seen = 0;
  for (let i = 0; i < next.length; i += 1) {
    if (/\d/.test(next[i])) {
      seen += 1;
      if (seen === digitsBefore) return i + 1;
    }
  }
  return next.length;
}

function protoUkDateField(node) {
  return node?.closest?.("input.astral-date-input") || null;
}

function protoUkDateStoreKey(field) {
  if (field?.name === "proto-renew-from") return "prototypeRenewFrom";
  if (field?.name === "proto-renew-to") return "prototypeRenewTo";
  if (field?.name === "proto-report-start") return "prototypeReportDraftStart";
  return "";
}

function protoStartUkDateField(field) {
  if (!field?.setSelectionRange) return;
  field.focus();
  field.setSelectionRange(0, 0);
}

function protoApplyUkDateInput(prev, raw, caret) {
  const prevDigits = String(protoMaskUkDate(prev) || "").replace(/\D/g, "").slice(0, 8);
  const rawDigits = String(raw || "").replace(/\D/g, "");
  const extra = rawDigits.length - prevDigits.length;
  const digitsBefore = String(raw || "")
    .slice(0, Math.max(0, Number(caret) || 0))
    .replace(/\D/g, "").length;
  if (extra > 0 && digitsBefore === extra) {
    const next = protoMaskUkDate(rawDigits.slice(0, extra));
    return { next, caret: next.length };
  }
  const next = protoMaskUkDate(raw);
  return { next, caret: protoUkDateCaret(raw, caret, next) };
}

function protoFromUkDate(text) {
  const match = String(text || "").trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  if (year < 1900 || year > 2100) return null;
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }
  return date;
}

function protoDatePreset() {
  const id = store.prototypeDatePreset || "7d";
  return PROTO_DATE_PRESETS.some((item) => item.id === id) ? id : "7d";
}

function protoSpanFromDates(from, to) {
  const start = from <= to ? from : to;
  const end = from <= to ? to : from;
  const days = Math.round((end - start) / 86400000) + 1;
  if (days <= 1) return { from: start, to: end, kind: "interval" };
  if (days <= 62) return { from: start, to: end, kind: "day" };
  return { from: start, to: end, kind: "month" };
}

function protoNamedSpan(id) {
  const today = protoToday();
  if (id === "24h") return { from: today, to: today, kind: "interval" };
  if (id === "7d") return { from: protoAddDays(today, -6), to: today, kind: "day" };
  if (id === "28d") return { from: protoAddMonths(today, -1), to: today, kind: "day" };
  if (id === "12m") {
    return { from: new Date(today.getFullYear(), today.getMonth() - 11, 1), to: today, kind: "month" };
  }
  return null;
}

function protoDateSpan() {
  const today = protoToday();
  const named = protoNamedSpan(protoDatePreset());
  if (named) return named;
  const from = protoFromIso(store.prototypeDateFrom) || protoAddDays(today, -14);
  const to = protoFromIso(store.prototypeDateTo) || today;
  return protoSpanFromDates(from, to);
}

function protoDateHomeState() {
  if (store.prototypeDateHome) {
    return {
      prototypeDateHome: store.prototypeDateHome,
      prototypeDateHomeFrom: store.prototypeDateHomeFrom || "",
      prototypeDateHomeTo: store.prototypeDateHomeTo || "",
    };
  }
  const preset = protoDatePreset();
  return {
    prototypeDateHome: preset,
    prototypeDateHomeFrom: preset === "custom" ? store.prototypeDateFrom || "" : "",
    prototypeDateHomeTo: preset === "custom" ? store.prototypeDateTo || "" : "",
  };
}

function protoRememberDateHome(preset, fromIso, toIso) {
  return {
    prototypeDateHome: preset,
    prototypeDateHomeFrom: preset === "custom" ? fromIso || "" : "",
    prototypeDateHomeTo: preset === "custom" ? toIso || "" : "",
  };
}

function protoHomeSpan() {
  const home = protoDateHomeState();
  if (home.prototypeDateHome === "custom") {
    const from = protoFromIso(home.prototypeDateHomeFrom);
    const to = protoFromIso(home.prototypeDateHomeTo);
    if (from && to) return protoSpanFromDates(from, to);
  }
  return protoNamedSpan(home.prototypeDateHome) || protoNamedSpan("24h");
}

function protoSameSpan(a, b) {
  return Boolean(a && b && protoIso(a.from) === protoIso(b.from) && protoIso(a.to) === protoIso(b.to));
}

function protoShiftSpan(span, dir) {
  if (span.kind === "month") {
    return protoSpanFromDates(protoAddMonths(span.from, dir), protoAddMonths(span.to, dir));
  }
  return protoSpanFromDates(protoAddDays(span.from, dir), protoAddDays(span.to, dir));
}

function protoChartAtLatest() {
  return protoIso(protoDateSpan().to) >= protoIso(protoToday());
}

function protoPanChart(dir) {
  const homeState = protoDateHomeState();
  const current = protoDateSpan();
  if (dir > 0 && protoChartAtLatest()) return;
  const next = protoShiftSpan(current, dir);
  if (dir > 0 && protoIso(next.to) > protoIso(protoToday())) return;
  const atHome = protoSameSpan(next, protoHomeSpan());
  const preset = atHome ? homeState.prototypeDateHome : "custom";
  setProto({
    ...homeState,
    prototypeDatePreset: preset,
    prototypeDateFrom: protoIso(next.from),
    prototypeDateTo: protoIso(next.to),
    prototypeDateOpen: false,
    prototypeChartPoint: null,
  });
}

function protoRangeWords(from, to) {
  const a = PROTO_MONTHS[from.getMonth()];
  const b = PROTO_MONTHS[to.getMonth()];
  const y1 = from.getFullYear();
  const y2 = to.getFullYear();
  const d1 = from.getDate();
  const d2 = to.getDate();
  if (y1 === y2 && from.getMonth() === to.getMonth() && d1 === d2) {
    return protoDayHeading(from);
  }
  if (y1 === y2 && from.getMonth() === to.getMonth()) {
    return `${d1}-${d2} ${a} ${y1}`;
  }
  if (y1 === y2) return `${d1} ${a} to ${d2} ${b} ${y1}`;
  return `${d1} ${a} ${y1} to ${d2} ${b} ${y2}`;
}

function protoCustomRangeLabel(from, to) {
  const a = PROTO_MONTHS[from.getMonth()];
  const b = PROTO_MONTHS[to.getMonth()];
  const y1 = from.getFullYear();
  const y2 = to.getFullYear();
  if (y1 === y2 && from.getMonth() === to.getMonth() && from.getDate() === to.getDate()) {
    return protoDayHeading(from);
  }
  if (y1 === y2 && from.getMonth() === to.getMonth()) {
    return `${a} ${from.getDate()}-${to.getDate()}, ${y1}`;
  }
  if (y1 === y2) return `${a} ${from.getDate()}-${b} ${to.getDate()}, ${y1}`;
  return `${a} ${from.getDate()}, ${y1}-${b} ${to.getDate()}, ${y2}`;
}

function protoChartWhen() {
  const preset = protoDatePreset();
  if (preset === "custom") {
    const span = protoDateSpan();
    return protoRangeWords(span.from, span.to);
  }
  return PROTO_DATE_PRESETS.find((item) => item.id === preset)?.name || "Last 7 days";
}

function protoChartZone() {
  return "UTC";
}

function protoChartTimeLabel(time) {
  const text = String(time || "").trim();
  if (!text) return "";
  if (/^\d{1,2}\.\d{2}$/.test(text)) return `${text} ${protoChartZone()}`;
  return text;
}

function protoChartAt(time) {
  const label = protoChartTimeLabel(time);
  return label ? `At ${label}` : "";
}

function protoDateButtonLabel() {
  const preset = protoDatePreset();
  if (preset === "custom") {
    const from = protoFromIso(store.prototypeDateFrom);
    const to = protoFromIso(store.prototypeDateTo);
    if (from && to) return protoCustomRangeLabel(from, to);
  }
  return PROTO_DATE_PRESETS.find((item) => item.id === preset)?.name || "Last 7 days";
}

function protoMonthIndex(name) {
  const key = String(name || "").slice(0, 3).toLowerCase();
  return PROTO_MONTHS.findIndex((item) => item.toLowerCase() === key);
}

function protoDateInSpan(day, month, span) {
  const fromYear = new Date(span.from.getFullYear(), month, day);
  const toYear = new Date(span.to.getFullYear(), month, day);
  if (fromYear >= span.from && fromYear <= span.to) return fromYear;
  if (toYear >= span.from && toYear <= span.to) return toYear;
  return null;
}

function protoAnalyseTarget(point) {
  const span = protoDateSpan();
  const text = String(point?.time || "").trim();
  if (!text || span.kind === "interval") return null;
  if (span.kind === "month") {
    const match = text.match(/^([A-Za-z]{3}) (\d{2})$/);
    if (!match) return null;
    const month = protoMonthIndex(match[1]);
    if (month < 0) return null;
    const year = 2000 + Number(match[2]);
    const from = new Date(year, month, 1);
    let to = new Date(year, month + 1, 0);
    const today = protoToday();
    if (from > today) return null;
    if (to > today) to = today;
    return { from, to };
  }
  const match = text.match(/^(\d{1,2}) ([A-Za-z]{3})$/);
  if (!match) return null;
  const day = Number(match[1]);
  const month = protoMonthIndex(match[2]);
  if (month < 0 || day < 1 || day > 31) return null;
  const date = protoDateInSpan(day, month, span);
  if (!date) return null;
  return { from: date, to: date };
}

function protoAnalysePoint() {
  const next = protoAnalyseTarget(protoChartPoint());
  if (!next) return;
  const today = protoToday();
  const sameDay =
    protoIso(next.from) === protoIso(next.to) && protoIso(next.from) === protoIso(today);
  const home = protoDateHomeState();
  setProto({
    ...home,
    prototypeDatePreset: sameDay ? "24h" : "custom",
    prototypeDateFrom: protoIso(next.from),
    prototypeDateTo: protoIso(next.to),
    prototypeDateOpen: false,
    prototypeDateCustomOpen: false,
    prototypeChartPoint: null,
    prototypePointTagOpen: false,
    prototypeOpenQuery: "",
    prototypeQueryForm: false,
    prototypeQuerySite: "",
    prototypeQueryCommentOpen: false,
  });
  protoRestoreFocus("#astral-fs [data-proto-date='toggle']");
}

function protoFormatDay(date) {
  return `${date.getDate()} ${PROTO_MONTHS[date.getMonth()]}`;
}

function protoFormatFullDay(date) {
  return `${protoFormatDay(date)} ${date.getFullYear()}`;
}

const PROTO_MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function protoCalMonth() {
  const raw = String(store.prototypeDateCal || "");
  const match = raw.match(/^(\d{4})-(\d{2})$/);
  if (match) return { year: Number(match[1]), month: Number(match[2]) - 1 };
  const from = protoFromIso(store.prototypeDateDraftFrom || store.prototypeDateFrom) || protoToday();
  return { year: from.getFullYear(), month: from.getMonth() };
}

function protoReadCalMonth(raw, fallback) {
  const match = String(raw || "").match(/^(\d{4})-(\d{2})$/);
  if (match) return { year: Number(match[1]), month: Number(match[2]) - 1 };
  const date = fallback || protoToday();
  return { year: date.getFullYear(), month: date.getMonth() };
}

function protoShiftCal(year, month, delta) {
  const next = new Date(year, month + delta, 1);
  return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
}

function protoCalWeekdays() {
  return ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => `<span>${day}</span>`).join("");
}

function protoCalDayCells({ year, month, selectedIso, allowFuture, pickAttr, fromIso, toIso }) {
  const today = protoToday();
  const todayIso = protoIso(today);
  const from = protoFromIso(fromIso);
  const to = protoFromIso(toIso);
  const first = new Date(year, month, 1);
  const startPad = (first.getDay() + 6) % 7;
  const lastDate = new Date(year, month + 1, 0).getDate();
  const blanks = Array.from({ length: startPad }, () => `<span></span>`).join("");
  const days = Array.from({ length: lastDate }, (_, i) => {
    const date = new Date(year, month, i + 1);
    const iso = protoIso(date);
    const future = date > today;
    const isFrom = Boolean(fromIso) && iso === fromIso;
    const isTo = Boolean(toIso) && iso === toIso;
    const inRange = Boolean(from && to && date >= from && date <= to);
    const selected = Boolean(selectedIso) && iso === selectedIso;
    const todayOn = iso === todayIso;
    const cls = [
      "astral-cal-day",
      selected || isFrom || isTo ? "is-end" : "",
      inRange && !isFrom && !isTo ? "is-in" : "",
      todayOn ? "is-today" : "",
    ]
      .filter(Boolean)
      .join(" ");
    const label = `${i + 1} ${PROTO_MONTHS_LONG[month]} ${year}${todayOn ? ", today" : ""}`;
    const current = todayOn ? ' aria-current="date"' : "";
    const pressed = selected || isFrom || isTo ? ' aria-pressed="true"' : ' aria-pressed="false"';
    if (!allowFuture && future) {
      return `<button type="button" class="${cls}" disabled aria-label="${escapeHtml(
        label
      )}"${current}>${i + 1}</button>`;
    }
    return `<button type="button" class="${cls}" ${pickAttr}="${iso}" aria-label="${escapeHtml(
      label
    )}"${current}${pressed}>${i + 1}</button>`;
  }).join("");
  return `${blanks}${days}`;
}

function protoDailySpanSeries(meter, span) {
  const dayKwh = protoDayKwh(meter);
  const unit = protoMeterUseUnit(meter);
  const places = protoMeterPlaces(meter);
  const count = Math.floor((span.to.getTime() - span.from.getTime()) / 86400000) + 1;
  const points = [];
  for (let stamp = span.from.getTime(); stamp <= span.to.getTime(); stamp += 86400000) {
    const date = new Date(stamp);
    const i = points.length;
    const quality = protoSpanQuality(meter, i, count);
    const wave = 0.86 + Math.sin((i + protoDaySeed(date) + protoMeterSeed(meter)) / 2.4) * 0.12 + (i % 6) * 0.01;
    points.push(
      quality === "missing"
        ? { label: protoFormatDay(date), value: null, quality, unit }
        : {
            label: protoFormatDay(date),
            value: Number((dayKwh * wave).toFixed(places)),
            quality,
            unit,
          }
    );
  }
  return points;
}

function protoMonthSpanSeries(meter, span) {
  const dayKwh = protoDayKwh(meter);
  const months = [];
  let year = span.from.getFullYear();
  let month = span.from.getMonth();
  while (year < span.to.getFullYear() || (year === span.to.getFullYear() && month <= span.to.getMonth())) {
    months.push({ year, month });
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }
  const unit = protoMeterUseUnit(meter);
  const places = protoMeterKind(meter) === "water" ? 1 : 0;
  return months.map((item, i) => {
    const quality = protoSpanQuality(meter, i, months.length);
    const wave = 0.86 + Math.sin((i + item.month + item.year + protoMeterSeed(meter)) / 2.4) * 0.12;
    if (quality === "missing") {
      return {
        label: `${PROTO_MONTHS[item.month]} ${String(item.year).slice(2)}`,
        value: null,
        quality,
        unit,
      };
    }
    return {
      label: `${PROTO_MONTHS[item.month]} ${String(item.year).slice(2)}`,
      value: Number((dayKwh * 30 * wave).toFixed(places)),
      quality,
      unit,
    };
  });
}

function protoSiteSeries(meter) {
  if (!meter) return [];
  const span = protoDateSpan();
  if (span.kind === "month") return protoMonthSpanSeries(meter, span);
  if (span.kind === "interval") return protoSeries(meter, "day", span.from);
  return protoDailySpanSeries(meter, span);
}

function protoDayKwh(meter) {
  const raw = String(meter?.use24h || "");
  const parsed = parseFloat(raw.replace(/[^\d.]/g, ""));
  if (Number.isFinite(parsed) && parsed > 0) {
    if (protoMeterKind(meter) === "water") return parsed;
    return /mwh/i.test(raw) ? parsed * 1000 : parsed;
  }
  if (protoMeterKind(meter) === "water") return Number(meter?.base) || 12;
  return (Number(meter?.base) || 8) * 24;
}

function protoWeekdayName(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  return PROTO_WEEKDAYS[(date.getDay() + 6) % 7] || "";
}

function protoWeekdayShort(date) {
  const name = protoWeekdayName(date);
  const i = PROTO_WEEKDAYS.indexOf(name);
  return i >= 0 ? PROTO_WEEKDAYS_SHORT[i] : "";
}

function protoDayHeading(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  const day = protoWeekdayShort(date);
  const month = PROTO_MONTHS[date.getMonth()] || "";
  const rest = `${date.getDate()} ${month} ${date.getFullYear()}`;
  return day ? `${day} ${rest}` : rest;
}

function protoPointDate(point) {
  const span = protoDateSpan();
  if (span.kind === "interval") return span.from;
  const text = String(point?.label || "").trim();
  const dayMatch = text.match(/^(\d{1,2}) ([A-Za-z]{3})$/);
  if (dayMatch) {
    const month = protoMonthIndex(dayMatch[2]);
    if (month >= 0) return protoDateInSpan(Number(dayMatch[1]), month, span);
  }
  return null;
}

function protoHoursDay(meter, at) {
  const hours = protoMeterProfile(meter?.id).hours || [];
  const name = protoWeekdayName(at);
  if (name) return hours.find((row) => row.day === name) || hours[0];
  return hours.find((row) => row.day === "Friday") || hours[0];
}

function protoSiteHours(meter, day) {
  const row = day || protoHoursDay(meter);
  if (row && (row.status === "closed" || row.status === "off")) return { start: 0, end: 0 };
  const from = row?.from || meter?.hours || "00.00 to 24.00";
  const match = String(row ? `${row.from} to ${row.to}` : from).match(
    /(\d{1,2})\.(\d{2})\s+to\s+(\d{1,2})\.(\d{2})/i
  );
  if (!match) {
    const fallback = String(meter?.hours || "00.00 to 24.00").match(
      /(\d{1,2})\.(\d{2})\s+to\s+(\d{1,2})\.(\d{2})/i
    );
    if (!fallback) return { start: 0, end: 24 };
    const start = Number(fallback[1]) + Number(fallback[2]) / 60;
    let end = Number(fallback[3]) + Number(fallback[4]) / 60;
    if (end <= start) end = 24;
    return { start, end };
  }
  const start = Number(match[1]) + Number(match[2]) / 60;
  let end = Number(match[3]) + Number(match[4]) / 60;
  if (end <= start) end = 24;
  return { start, end };
}

function protoParseClock(value) {
  const match = String(value || "").match(/^(\d{1,2})\.(\d{2})$/);
  if (!match) return null;
  return Number(match[1]) + Number(match[2]) / 60;
}

function protoHourInRange(hour, from, to) {
  const start = protoParseClock(from);
  const end = protoParseClock(to);
  if (start == null || end == null) return false;
  if (end <= start) return hour >= start || hour < end;
  return hour >= start && hour < end;
}

function protoPointHour(point) {
  return protoParseClock(point?.label);
}

function protoMeterTouDay(meter, at) {
  const tou = protoMeterProfile(meter?.id).tou || [];
  const name = protoWeekdayName(at);
  if (name) return tou.find((row) => row.day === name) || tou[0];
  return tou.find((row) => row.day === "Friday") || tou[0];
}

function protoPointInHours(point, meter) {
  const hour = protoPointHour(point);
  if (hour == null) return true;
  const range = protoSiteHours(meter);
  if (range.end <= range.start) return false;
  return hour >= range.start && hour < range.end;
}

function protoPointOnPeak(point, meter) {
  const hour = protoPointHour(point);
  if (hour == null) return true;
  const day = protoMeterTouDay(meter, protoPointDate(point));
  if (!day) return hour >= 7 && hour < 19;
  return protoHourInRange(hour, day.onFrom, day.onTo);
}

function protoHourIsOpen(meter, hour) {
  return protoHourKind(meter, hour) === "on";
}

function protoHourKind(meter, hour, day) {
  const row = day || protoHoursDay(meter);
  if (row?.status === "closed") return "closed";
  if (row?.status === "off") return "non";
  const range = protoSiteHours(meter, row);
  if (range.end <= range.start) return "non";
  if (hour >= range.start && hour < range.end) return "on";
  return "non";
}

function protoHourIsPeak(meter, hour, at) {
  const day = protoMeterTouDay(meter, at);
  if (!day) return hour >= 7 && hour < 19;
  return protoHourInRange(hour, day.onFrom, day.onTo);
}

function protoChartStackSlices() {
  const picked = protoPaneFilterIds();
  const hours = protoPickedInGroup(picked, "hours");
  const tou = protoPickedInGroup(picked, "tou");
  if (!hours.length && !tou.length) return [];
  const hourOpts = hours.length ? hours : [null];
  const touOpts = tou.length ? tou : [null];
  const slices = [];
  hourOpts.forEach((hourId) => {
    touOpts.forEach((touId) => {
      const slice = { id: [hourId, touId].filter(Boolean).join("|") };
      if (hourId) slice.hours = hourId;
      if (touId) slice.tou = touId;
      slices.push(slice);
    });
  });
  return slices;
}

function protoSliceHoursName(slice) {
  if (slice.hours === "hours-on") return "Operational";
  if (slice.hours === "hours-non") return "Non-operational";
  if (slice.hours === "hours-off") return "Closed";
  return "";
}

function protoSliceTouName(slice) {
  if (slice.tou === "tou-on") return "Peak";
  if (slice.tou === "tou-off") return "Off-peak";
  return "";
}

function protoSliceName(slice) {
  const hours = protoSliceHoursName(slice);
  const tou = protoSliceTouName(slice);
  if (hours && tou) return `${hours} · ${tou}`;
  return hours || tou;
}

function protoSliceHoursKind(slice) {
  if (slice.hours === "hours-on") return "on";
  if (slice.hours === "hours-non") return "non";
  if (slice.hours === "hours-off") return "closed";
  return "";
}

const PROTO_SLICE_FILL = {
  "hours-on|tou-on": "var(--color-brand-primary)",
  "hours-on|tou-off": "#02C2B7",
  "hours-non|tou-on": "#000000",
  "hours-non|tou-off": "#6929C4",
  "hours-off|tou-on": "#8A3800",
  "hours-off|tou-off": "#737373",
  "hours-on": "var(--color-brand-primary)",
  "hours-non": "#6929C4",
  "hours-off": "#737373",
  "tou-on": "var(--color-brand-primary)",
  "tou-off": "#02C2B7",
};

function protoSliceFill(slice, outgoing) {
  if (slice?.color) return slice.color;
  const id = [slice?.hours, slice?.tou].filter(Boolean).join("|");
  if (outgoing) {
    const peak = !slice?.tou || slice.tou === "tou-on";
    const open = !slice?.hours || protoSliceHoursKind(slice) === "on";
    return peak && open ? "#000000" : "#737373";
  }
  return PROTO_SLICE_FILL[id] || "var(--color-brand-primary)";
}

function protoSliceInk(fill) {
  if (!fill || String(fill).startsWith("var(")) return "#fff";
  return protoOnColour(fill) === "#000000" ? "#000" : "#fff";
}

function protoSliceHits(slice, kind, peak) {
  if (slice.hours === "hours-on" && kind !== "on") return false;
  if (slice.hours === "hours-non" && kind !== "non") return false;
  if (slice.hours === "hours-off" && kind !== "closed") return false;
  if (slice.tou === "tou-on" && !peak) return false;
  if (slice.tou === "tou-off" && peak) return false;
  return true;
}

function protoSliceWeights(meter, slices, day, at) {
  const hours = protoSiteHours(meter, day);
  const weights = { total: 0 };
  slices.forEach((slice) => {
    weights[slice.id] = 0;
  });
  for (let i = 0; i < 48; i += 1) {
    const hour = i / 2;
    const weight = protoShape(hour, hours);
    const kind = protoHourKind(meter, hour, day);
    const peak = protoHourIsPeak(meter, hour, at);
    weights.total += weight;
    const slice = slices.find((item) => protoSliceHits(item, kind, peak));
    if (slice) weights[slice.id] += weight;
  }
  return weights;
}

function protoRoundReading(value, places = 1) {
  if (value == null || value === "") return value;
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return Number(n.toFixed(places));
}

function protoFormatAmount(value) {
  if (value == null || value === "") return "";
  const n = protoRoundReading(value, 1);
  if (typeof n !== "number" || !Number.isFinite(n)) return String(value);
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function protoPointStacks(point, meter, slices, key) {
  const value = key === "last" ? point.last : point.value;
  if (value == null || !slices.length) return [];
  const at = protoPointDate(point);
  const day = protoHoursDay(meter, at);
  const hour = protoPointHour(point);
  if (hour != null) {
    const kind = protoHourKind(meter, hour, day);
    const peak = protoHourIsPeak(meter, hour, at);
    const quality = key === "last" ? point.lastQuality || point.quality : point.quality;
    return slices
      .filter((slice) => protoSliceHits(slice, kind, peak))
      .map((slice) => ({
        ...slice,
        name: protoSliceName(slice),
        value: protoRoundReading(value, 1),
        quality,
      }));
  }
  const weights = protoSliceWeights(meter, slices, day, at);
  const total = weights.total || 1;
  const quality = key === "last" ? point.lastQuality || point.quality : point.quality;
  return slices
    .map((slice) => {
      const share = (weights[slice.id] || 0) / total;
      const amount = protoRoundReading(value * share, 1);
      return { ...slice, name: protoSliceName(slice), value: amount, quality };
    })
    .filter((slice) => slice.value > 0);
}

function protoStacksSum(stacks) {
  return (stacks || []).reduce((n, slice) => n + (Number(slice.value) || 0), 0);
}

function protoStacksNote(stacks, unit) {
  const list = (stacks || []).filter((slice) => slice.value);
  if (list.length < 2) return "";
  return list.map((slice) => `${slice.name} ${protoFormatReading(slice.value, unit)}`).join(". ");
}

function protoPackStacks(stacks, outgoing) {
  return (stacks || [])
    .map((slice) => {
      const n = Number(slice?.value);
      if (!Number.isFinite(n) || n <= 0) return null;
      const name = String(slice.name || protoSliceName(slice) || "").trim();
      if (!name) return null;
      const quality = slice.quality === "estimated" || slice.quality === "missing" ? slice.quality : "";
      return {
        id: String(slice.id || ""),
        name,
        color: String(slice.color || protoSliceFill(slice, Boolean(outgoing)) || ""),
        value: protoFormatAmount(n),
        quality,
      };
    })
    .filter(Boolean);
}

function protoReadStacks(raw) {
  if (Array.isArray(raw)) return protoPackStacks(raw);
  if (typeof raw !== "string" || !raw.trim()) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? protoPackStacks(parsed) : [];
  } catch {
    return [];
  }
}

function protoChartSliceOffIds() {
  const allow = new Set(protoChartStackSlices().map((slice) => slice.id));
  const raw = Array.isArray(store.prototypeChartSliceOff) ? store.prototypeChartSliceOff : [];
  return raw.filter((id) => allow.has(id));
}

function protoChartSliceOn(id) {
  return !protoChartSliceOffIds().includes(id);
}

function protoVisibleStacks(stacks) {
  return (stacks || []).filter((slice) => protoChartSliceOn(slice.id));
}

function protoToggleChartSlice(id) {
  if (!id || !protoChartStackSlices().some((slice) => slice.id === id)) return;
  const cur = protoChartSliceOffIds();
  const next = cur.includes(id) ? cur.filter((item) => item !== id) : [...cur, id];
  setProto({
    prototypeChartSliceOff: next,
    prototypeChartPoint: null,
  });
  protoRestoreFocus(`#astral-fs [data-proto-chart-slice="${CSS.escape(id)}"]`);
}

function protoFilterProfilePoints(points, meters) {
  const slices = protoChartStackSlices();
  const meter = (meters || []).find(Boolean);
  if (!slices.length || !meter) return points || [];
  return (points || []).map((point) => {
    const stacks = protoVisibleStacks(protoPointStacks(point, meter, slices, "value"));
    const lastStacks =
      point.last != null ? protoVisibleStacks(protoPointStacks(point, meter, slices, "last")) : [];
    const unit = point.unit || "kWh";
    const value = point.value == null ? null : protoRoundReading(protoStacksSum(stacks) || 0, 1);
    const last = point.last == null ? point.last : protoRoundReading(protoStacksSum(lastStacks) || 0, 1);
    const note = protoStacksNote(stacks, unit) || point.note;
    return {
      ...point,
      stacks,
      lastStacks,
      value: point.value == null ? null : value || 0,
      last: point.last == null ? point.last : last || 0,
      note,
    };
  });
}

function protoShape(hour, hours) {
  const inHours = hour >= hours.start && hour < hours.end;
  const peak = Math.max(0.12, Math.sin(((hour - 6) / 18) * Math.PI));
  const lunch = hour >= 11.5 && hour < 14 ? 0.12 : 0;
  const evening = hour >= 16 && hour < 20 ? 0.18 : 0;
  const weight = 0.22 + peak * 0.7 + lunch + evening;
  return inHours ? weight : weight * 0.22;
}

function protoQuality(meter, hour, range) {
  if (range === "day" && (meter.gaps || []).includes(Math.floor(hour))) return "missing";
  if (range === "day" && (meter.estimated || []).includes(Math.floor(hour))) return "estimated";
  return "actual";
}

function protoSpanQuality(meter, index, count) {
  const gaps = meter?.gaps || [];
  const estimated = meter?.estimated || [];
  const hit = (list) =>
    list.includes(index) || (count > 0 && count < 24 && list.some((n) => n % count === index));
  if (hit(gaps)) return "missing";
  if (hit(estimated)) return "estimated";
  return "actual";
}

function protoEstDefs() {
  return "";
}

function protoDaySeed(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return 0;
  return Math.round(date.getTime() / 86400000);
}

function protoSeries(meter, range, at) {
  if (!meter) return [];
  const hours = protoSiteHours(meter, protoHoursDay(meter, at));
  const dayKwh = protoDayKwh(meter);
  const unit = protoMeterUseUnit(meter);
  const places = protoMeterPlaces(meter);
  const seed = protoDaySeed(at) + protoMeterSeed(meter);
  if (range === "week" || range === "month") {
    const days = range === "week" ? 7 : 30;
    const names =
      range === "week"
        ? ["29 Aug", "30 Aug", "31 Aug", "1 Sep", "2 Sep", "3 Sep", "4 Sep"]
        : [
            "6 Aug", "7 Aug", "8 Aug", "9 Aug", "10 Aug", "11 Aug", "12 Aug", "13 Aug", "14 Aug", "15 Aug",
            "16 Aug", "17 Aug", "18 Aug", "19 Aug", "20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug",
            "26 Aug", "27 Aug", "28 Aug", "29 Aug", "30 Aug", "31 Aug", "1 Sep", "2 Sep", "3 Sep", "4 Sep",
          ];
    return Array.from({ length: days }, (_, i) => {
      const quality = protoSpanQuality(meter, i, days);
      const wave = 0.86 + Math.sin((i + seed) / 2.4) * 0.12 + (i % 6) * 0.01;
      if (quality === "missing") {
        return { label: names[i], value: null, quality, unit };
      }
      return {
        label: names[i],
        value: Number((dayKwh * wave).toFixed(places)),
        quality,
        unit,
      };
    });
  }
  const slots = 48;
  const weights = [];
  for (let i = 0; i < slots; i += 1) {
    const hour = i / 2;
    const wobble = 1 + Math.sin(seed * 0.35 + hour) * 0.14;
    weights.push(protoQuality(meter, hour, "day") === "missing" ? 0 : protoShape(hour, hours) * wobble);
  }
  const live = weights.reduce((sum, item) => sum + item, 0) || 1;
  return weights.map((weight, i) => {
    const hour = i / 2;
    const minute = i % 2 ? 30 : 0;
    const quality = protoQuality(meter, hour, "day");
    if (quality === "missing") {
      return { label: protoClock(Math.floor(hour), minute), value: null, quality, unit };
    }
    return {
      label: protoClock(Math.floor(hour), minute),
      value: Number(((dayKwh * weight) / live).toFixed(places)),
      quality,
      unit,
    };
  });
}

function protoEstateSeries() {
  return protoCombineSeries(protoMeters().filter((item) => item.direction !== "Export"));
}

function protoYearCompare() {
  const data = protoData();
  const thisYear = parseFloat(String(data?.kpis?.use || "412")) || 412;
  const hint = parseFloat(String(data?.kpis?.useHint || "4.2")) || 4.2;
  const lastYear = thisYear / (1 - hint / 100);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const season = [1.18, 1.12, 1.04, 0.94, 0.86, 0.82, 0.8, 0.84, 0.92, 1.02, 1.12, 1.2];
  const seasonSum = season.reduce((sum, item) => sum + item, 0);
  return months.map((label, i) => {
    const share = season[i] / seasonSum;
    const jitter = 1 - ((i * 3) % 5) * 0.008;
    const now = Number((thisYear * share * jitter).toFixed(1));
    const then = Number((lastYear * share).toFixed(1));
    const delta = (((now - then) / then) * 100).toFixed(1);
    return {
      label,
      value: now,
      last: then,
      quality: "actual",
      unit: "MWh",
      note: `${Math.abs(Number(delta))} percent ${Number(delta) < 0 ? "below" : "above"} last year`,
    };
  });
}

function protoChannelLabel(meter) {
  if (!meter) return "";
  if (meter.direction === "Export") return "Out";
  return "In";
}

function protoFlowKind(label) {
  const raw = String(label || "").trim().toLowerCase();
  if (raw === "out" || raw === "outgoing" || raw === "export") return "out";
  if (raw === "in" || raw === "incoming" || raw === "import") return "in";
  return "";
}

function protoChartFlowIds() {
  if (!Array.isArray(store.prototypeChartFlows)) return ["in", "out"];
  return ["in", "out"].filter((id) => store.prototypeChartFlows.includes(id));
}

function protoChartFlowOn(kind) {
  return protoChartFlowIds().includes(kind);
}

function protoBarFlowView(points, paired) {
  const list = points || [];
  if (!paired) {
    return { points: list, paired: false, outgoing: false, empty: false };
  }
  const showIn = protoChartFlowOn("in");
  const showOut = protoChartFlowOn("out");
  if (showIn && showOut) {
    return { points: list, paired: true, outgoing: false, empty: false };
  }
  if (!showIn && !showOut) {
    return {
      points: list.map((p) => ({
        ...p,
        value: null,
        last: null,
        lastLabel: "",
        nowLabel: "",
        quality: "missing",
        lastQuality: "missing",
      })),
      paired: false,
      outgoing: false,
      empty: true,
    };
  }
  if (showIn) {
    return {
      points: list.map((p) => ({
        ...p,
        last: null,
        lastLabel: "",
        nowLabel: "",
      })),
      paired: false,
      outgoing: false,
      empty: false,
    };
  }
  return {
    points: list.map((p) => ({
      ...p,
      value: p.last,
      quality: p.lastQuality,
      last: null,
      lastLabel: "",
      nowLabel: "",
      note:
        p.lastQuality === "missing" || p.last == null
          ? "Missing data. Not zero use."
          : p.lastQuality === "estimated"
          ? "Estimated reading."
          : "Actual reading.",
    })),
    paired: false,
    outgoing: true,
    empty: false,
  };
}

function protoToggleChartFlow(kind) {
  if (kind !== "in" && kind !== "out") return;
  const cur = protoChartFlowIds();
  const next = ["in", "out"].filter((id) => (id === kind ? !cur.includes(id) : cur.includes(id)));
  const overlayOpen = Boolean(store.prototypePaneFilterOpen);
  setProto({
    prototypeChartFlows: next,
    prototypeChartPoint: null,
    prototypePaneFilterOpen: overlayOpen,
  });
  protoRestoreFocus(
    overlayOpen
      ? `#astral-fs .astral-detail-tools [data-proto-pane-filter="${kind}"]`
      : `#astral-fs [data-proto-chart-flow="${kind}"]`
  );
}

function protoSiteFlow(site) {
  return protoMetersFlow(site?.meters || []);
}

function protoLineInk() {
  const first = protoHex(protoBrand().secondary) || PROTO_BRAND_SECONDARY;
  const rest = PROTO_LINE_CAT.filter((hex) => hex.toLowerCase() !== first.toLowerCase());
  return [first, ...rest];
}

function protoLineStyle(index) {
  const ink = protoLineInk();
  const i = Math.max(0, Number(index) || 0);
  return {
    color: ink[i % ink.length],
    dash: "",
  };
}

function protoIncomingInk() {
  return protoHex(protoBrand().secondary) || PROTO_BRAND_SECONDARY;
}

function protoOutgoingInk() {
  return "#000";
}

function protoChartFlowFill(kind) {
  const withHours = protoChartStackSlices().length > 0;
  if (kind === "out") return withHours ? "#002D9C" : "#000000";
  return withHours ? "#1192E8" : protoIncomingInk() || "var(--color-brand-primary)";
}

function protoMeterSwatch(meter, index, view) {
  if (protoPillsNeedColour()) return protoLineStyle(index).color;
  if (meter?.direction === "Export") return protoOutgoingInk();
  return protoIncomingInk();
}

function protoSiteMeterIds(site) {
  const meters = site?.meters || [];
  const ids = meters.map((item) => item.id);
  const stored = Array.isArray(store.prototypeSiteMeters) ? store.prototypeSiteMeters : [];
  if (stored.includes(PROTO_GRAPH_NONE) && !stored.some((id) => ids.includes(id))) return [];
  const raw = stored.filter((id) => ids.includes(id));
  if (raw.length) return raw;
  const legacy = store.prototypeSiteMeter;
  if (legacy === "none") return [];
  if (legacy && legacy !== "all" && ids.includes(legacy)) return [legacy];
  return ids;
}

function protoSiteMeterPick(site) {
  const meters = site?.meters || [];
  if (meters.length <= 1) return meters[0]?.id || "";
  const ids = protoSiteMeterIds(site);
  if (ids.length === 1) return ids[0];
  return "all";
}

function protoSiteMeterPatch(ids, site, options = {}) {
  const meters = site?.meters || [];
  const allIds = meters.map((item) => item.id);
  const picked = (ids || []).filter((id) => allIds.includes(id));
  const allowEmpty = Boolean(options.empty);
  const next = picked.length ? picked : allowEmpty ? [] : allIds;
  const one = next.length === 1 ? next[0] : "";
  return {
    prototypeSiteMeters: next.length ? next : allowEmpty ? [PROTO_GRAPH_NONE] : [],
    prototypeSiteMeter: one || (next.length ? "all" : allowEmpty ? "none" : "all"),
  };
}

function protoSiteViewMeters(site) {
  const meters = protoMetersForPane(site?.meters || []);
  const picked = new Set(protoSiteMeterIds({ meters }));
  return meters.filter((item) => picked.has(item.id));
}

function protoUseMeterLines(meters) {
  const list = meters || [];
  if (!list.length) return false;
  return protoChartIsIndividual() && protoChartIsLine();
}

function protoChartView() {
  return store.prototypeChartView === "individual" ? "individual" : "total";
}

function protoChartIsIndividual() {
  return protoChartView() === "individual";
}

function protoChartStyle() {
  return store.prototypeChartStyle === "line" ? "line" : "bar";
}

function protoChartIsLine() {
  return protoChartStyle() === "line";
}

function protoChartSeriesStackOn() {
  if (protoChartIsLine()) return false;
  return protoChartIsIndividual();
}

function protoPillsNeedColour() {
  return protoCompareOn() || protoChartView() === "individual" || protoChartSeriesStackOn();
}

function protoMeterTracks(meters, all) {
  const pool = all?.length ? all : meters || [];
  return (meters || []).map((meter) => {
    const i = Math.max(0, pool.findIndex((item) => item.id === meter.id));
    const style = protoLineStyle(i);
    return {
      meter,
      id: meter.id,
      ref: protoMeterRef(meter),
      color: style.color,
      dash: style.dash,
      points: protoSiteSeries(meter),
    };
  });
}

function protoSiteViewFlow(site) {
  const flow = protoMetersFlow(protoSiteViewMeters(site));
  if (flow.both) return { ...flow, channel: "all" };
  return flow;
}

function protoMeterKind(meter) {
  const raw = String(meter?.commodity || "");
  if (/water/i.test(raw)) return "water";
  if (/gas/i.test(raw)) return "gas";
  return "electricity";
}

function protoMeterUseUnit(meter) {
  return protoMeterKind(meter) === "water" ? "m³" : "kWh";
}

function protoMetersUseUnits(meters) {
  return [...new Set((meters || []).map(protoMeterUseUnit))];
}

function protoMetersUseUnit(meters) {
  const units = protoMetersUseUnits(meters);
  return units.length === 1 ? units[0] : "kWh";
}

function protoConsumptionUnitsMixed(meters) {
  return protoPaneId() === "consumption" && protoMetersUseUnits(meters).length > 1;
}

function protoChartMixCopy() {
  return {
    title: "This combination cannot be shown",
    body: "Water consumption is cubic metres (m³). Electricity and gas are kilowatt hours (kWh). They cannot share this graph.",
  };
}

function protoChartMixChoice() {
  const copy = protoChartMixCopy();
  return `
    <div class="astral-chart-mix" role="status">
      <h3>${escapeHtml(copy.title)}</h3>
      <p>${escapeHtml(copy.body)}</p>
      <div class="astral-actions">
        ${protoBtn("View electricity & gas consumption", 'data-proto-mix-unit="energy"')}
        ${protoGhost("View water consumption", 'data-proto-mix-unit="water"')}
      </div>
    </div>
  `;
}

function protoConsumptionKindChoice(unit) {
  const wantWater = unit === "water" || unit === "m3";
  const pool = protoPanePoolMeters();
  const kinds = [...new Set((pool || []).map(protoMeterKind))];
  return wantWater
    ? kinds.filter((id) => id === "water")
    : kinds.filter((id) => id === "electricity" || id === "gas");
}

function protoPickConsumptionUnit(unit) {
  const next = protoConsumptionKindChoice(unit);
  if (!next.length) return;
  const tree = protoTreeFilterIds();
  const treeMeters = protoPickedInGroup(tree, "meter");
  const nextTree = treeMeters.length
    ? [...tree.filter((id) => id !== "electricity" && id !== "gas" && id !== "water"), ...next]
    : tree;
  setProto({
    prototypePaneMeterKinds: next,
    prototypeTreeFilters: nextTree,
    prototypeChartPoint: null,
    prototypePaneFilterOpen: false,
    prototypeTreeFilterOpen: false,
  });
  protoRestoreFocus("#astral-fs .astral-detail-tools [data-proto-pane-filter='toggle']");
}

function protoMeterPlaces() {
  return 1;
}

function protoMeterCarbonKg(meter) {
  if (protoMeterKind(meter) === "water") {
    return PROTO_WATER_SUPPLY_KG + PROTO_WATER_WASTE_KG * PROTO_WATER_RETURN;
  }
  return 0.2;
}

function protoMeterKindOn(kind, meterPicks) {
  const ids = Array.isArray(meterPicks) ? meterPicks : [];
  if (ids.includes("__none__")) return false;
  if (!ids.length) return kind !== "water";
  return ids.includes(kind);
}

function protoPaneMeterKindIds() {
  if (!Array.isArray(store.prototypePaneMeterKinds)) return null;
  return store.prototypePaneMeterKinds.filter(
    (id) => id === "electricity" || id === "gas" || id === "water"
  );
}

function protoPaneGraphMeters() {
  if (protoCompareOn()) {
    const bundle = protoCompareBundle();
    if (bundle.level === "group") {
      return protoCompareViewSites(bundle.sites || []).flatMap((site) => site.meters || []);
    }
    return protoCompareViewMeters(bundle.meters || []);
  }
  if (store.prototypeScope === "group") {
    return protoGroupViewMeters(protoGroup(store.prototypeGroup));
  }
  return protoSiteViewMeters(protoSiteByMeter(store.activePrototypeMeter));
}

function protoGraphMeterKinds() {
  return [...new Set((protoPaneGraphMeters() || []).map(protoMeterKind))];
}

function protoPanePoolMeters() {
  if (protoCompareOn()) return protoCompareBundle().meters || [];
  if (store.prototypeScope === "group") {
    const group = protoIsAllGroup(store.prototypeGroup)
      ? { sites: protoSites() }
      : protoGroups().find((item) => item.id === store.prototypeGroup);
    return (group?.sites || []).flatMap((site) => site.meters || []);
  }
  const site = protoSiteByMeter(store.activePrototypeMeter);
  return site?.meters || [];
}

function protoTogglePaneMeterKind(kind) {
  if (kind !== "electricity" && kind !== "gas" && kind !== "water") return;
  const pool = protoPanePoolMeters();
  if (!(pool || []).some((item) => protoMeterKind(item) === kind)) return;
  const stored = protoPaneMeterKindIds();
  const cur = stored || protoGraphMeterKinds();
  let next = cur.includes(kind) ? cur.filter((id) => id !== kind) : [...cur, kind];
  if (protoPaneId() === "consumption") {
    if (!cur.includes(kind) && kind === "water") next = ["water"];
    else if (!cur.includes(kind) && kind !== "water") next = next.filter((id) => id !== "water");
  }
  const overlayOpen = Boolean(store.prototypePaneFilterOpen);
  setProto({
    prototypePaneMeterKinds: next,
    prototypeChartPoint: null,
    prototypePaneFilterOpen: overlayOpen,
  });
  protoRestoreFocus(
    overlayOpen
      ? `#astral-pane-filter-menu [data-proto-pane-filter="${kind}"]`
      : `#astral-fs [data-proto-pane-filter="${kind}"]`
  );
}

function protoMeterRef(meter) {
  const kind = protoMeterKind(meter);
  if (kind === "water") return meter?.serial || meter?.name || "Incoming water";
  if (kind === "gas" && meter.mprn) return meter.mprn;
  return meter?.mpan || meter?.name || "";
}

function protoMeterMark(commodity) {
  const kind = protoMeterKind({ commodity });
  const label = kind === "water" ? "Water" : kind === "gas" ? "Gas" : "Electricity";
  return `${protoIconMark(kind, "astral-meter-mark")}<span class="sr-only">${escapeHtml(label)}. </span>`;
}

function protoGraphPills(all, viewIds, options = {}) {
  const list = all || [];
  if (!list.length) return "";
  const onIds = new Set(viewIds || []);
  const toggle = Boolean(options.toggle);
  const attr = options.attr || "data-proto-meter-pill";
  const aria = options.aria || "Meters on the graph";
  const open = Boolean(store.prototypePillsOpen);
  return `
    <div class="astral-meter-pills${open ? " is-open" : ""}" role="${toggle ? "group" : "list"}" aria-label="${escapeHtml(aria)}">
      ${list
        .map((item) => {
          const on = onIds.has(item.id);
          const colour = Boolean(item.color);
          const mark = colour
            ? on
              ? `<span class="astral-chart-key-mark" style="background:${escapeHtml(
                  item.color
                )}" aria-hidden="true"></span>`
              : `<span class="astral-chart-key-mark" aria-hidden="true"></span>`
            : "";
          const label = `<span class="astral-meter-pill-label">${escapeHtml(item.label)}</span>`;
          if (!toggle) {
            return `
            <span class="astral-meter-pill is-on" role="listitem">
              ${mark}
              ${label}
            </span>
          `;
          }
          return `
            <button
              type="button"
              class="astral-meter-pill${on ? " is-on" : ""}"
              aria-pressed="${on ? "true" : "false"}"
              ${attr}="${escapeHtml(item.id)}"
            >
              ${mark}
              ${label}
            </button>
          `;
        })
        .join("")}
      ${
        toggle && list.length > 1
          ? protoTextBtn(open ? "Hide" : "Show more", `data-proto-pills="${
              open ? "hide" : "more"
            }"${open ? ` aria-expanded="true"` : " hidden"}`, { className: "astral-pills-more" })
          : ""
      }
    </div>
  `;
}

function protoMeterPills(meters, options = {}) {
  const list = meters || [];
  const all = options.all?.length ? options.all : list;
  if (!all.length) return "";
  const items = all.map((meter, i) => ({
    id: meter.id,
    label: protoMeterRef(meter),
    color: protoMeterSwatch(meter, i, list),
  }));
  return protoGraphPills(
    items,
    list.map((meter) => meter.id),
    {
      toggle: Boolean(options.toggle),
      attr: "data-proto-meter-pill",
      aria: `${protoBelowSiteNoun(2)} on the graph`,
    }
  );
}

function protoSitePills(viewSites, allSites) {
  const all = allSites?.length ? allSites : viewSites || [];
  const view = viewSites || [];
  if (!all.length) return "";
  const colour = protoPillsNeedColour();
  const items = all.map((site, i) => ({
    id: protoSiteId(site),
    label: site.name,
    color: colour ? protoLineStyle(i).color : "",
  }));
  return protoGraphPills(
    items,
    view.map((site) => protoSiteId(site)),
    {
      toggle: true,
      attr: "data-proto-site-pill",
      aria: "Sites on the graph",
    }
  );
}

function protoSiteStatus(site) {
  const all = protoMetersForPane(site?.meters || []);
  const meters = protoSiteViewMeters(site);
  const pills = protoMeterPills(meters, { all, toggle: true });
  if (!pills) return "";
  return `<div class="astral-site-status">${pills}</div>`;
}

function protoChannelSeries(site, channel) {
  return protoMetersSeries(protoSiteViewMeters(site), channel);
}

function protoTipQuality(quality) {
  if (quality === "missing") return "Missing data. Not zero use.";
  if (quality === "estimated") return "";
  return "";
}

function protoHitAttrs(point) {
  const value = point.value == null ? "" : protoFormatAmount(point.value);
  const last = point.last == null ? "" : protoFormatAmount(point.last);
  const unit = point.unit || "kWh";
  const stacks = protoPackStacks(point.stacks);
  const lastStacks = protoPackStacks(point.lastStacks, true);
  const note = point.quality === "missing" ? protoTipQuality("missing") : "";
  const compare = point.last != null || Boolean(point.nowLabel || point.lastLabel);
  const nowLabel = point.nowLabel || "This year";
  const lastLabel = point.lastLabel || "Last year";
  const compareAttrs = compare
    ? ` data-tip-compare="1" data-tip-now-label="${escapeHtml(nowLabel)}" data-tip-last-label="${escapeHtml(
        lastLabel
      )}"`
    : "";
  const meter = point.meterRef || "";
  const meterId = point.meterId || "";
  const meterColor = point.meterColor || "";
  const quality = String(point.quality || "");
  const lastQuality = String(point.lastQuality || "");
  const qualityAttrs = ` data-tip-quality="${escapeHtml(quality)}" data-tip-last-quality="${escapeHtml(
    lastQuality
  )}"`;
  const meterAttrs = meter
    ? ` data-tip-meter="${escapeHtml(meter)}" data-tip-meter-id="${escapeHtml(
        meterId
      )}" data-tip-meter-color="${escapeHtml(meterColor)}"`
    : "";
  const stackAttrs = stacks.length
    ? ` data-tip-stacks="${escapeHtml(JSON.stringify(stacks))}"`
    : "";
  const lastStackAttrs = lastStacks.length
    ? ` data-tip-last-stacks="${escapeHtml(JSON.stringify(lastStacks))}"`
    : "";
  return `data-tip-time="${escapeHtml(point.label)}" data-tip-value="${escapeHtml(
    value
  )}" data-tip-last="${escapeHtml(last)}" data-tip-unit="${escapeHtml(unit)}" data-tip-note="${escapeHtml(
    note
  )}"${compareAttrs}${qualityAttrs}${meterAttrs}${stackAttrs}${lastStackAttrs}`;
}

function protoPointFromHit(hit, chart) {
  if (!hit) return null;
  const time = hit.getAttribute("data-tip-time") || "";
  if (!time) return null;
  return {
    chart: chart || "",
    time,
    value: hit.getAttribute("data-tip-value") || "",
    last: hit.getAttribute("data-tip-last") || "",
    unit: hit.getAttribute("data-tip-unit") || "kWh",
    note: hit.getAttribute("data-tip-note") || "",
    compare: hit.getAttribute("data-tip-compare") === "1",
    nowLabel: hit.getAttribute("data-tip-now-label") || "",
    lastLabel: hit.getAttribute("data-tip-last-label") || "",
    meterId: hit.getAttribute("data-tip-meter-id") || "",
    meterRef: hit.getAttribute("data-tip-meter") || "",
    meterColor: hit.getAttribute("data-tip-meter-color") || "",
    quality: hit.getAttribute("data-tip-quality") || "",
    lastQuality: hit.getAttribute("data-tip-last-quality") || "",
    stacks: protoReadStacks(hit.getAttribute("data-tip-stacks")),
    lastStacks: protoReadStacks(hit.getAttribute("data-tip-last-stacks")),
  };
}

function protoChartPoint() {
  const raw = store.prototypeChartPoint;
  if (!raw || typeof raw !== "object") return null;
  const time = String(raw.time || "").trim();
  const chart = String(raw.chart || "").trim();
  if (!time || !chart) return null;
  return {
    chart,
    time,
    value: String(raw.value || ""),
    last: String(raw.last || ""),
    unit: String(raw.unit || "kWh"),
    note: String(raw.note || ""),
    compare: Boolean(raw.compare),
    nowLabel: String(raw.nowLabel || ""),
    lastLabel: String(raw.lastLabel || ""),
    meterId: String(raw.meterId || ""),
    meterRef: String(raw.meterRef || ""),
    meterColor: String(raw.meterColor || ""),
    quality: String(raw.quality || ""),
    lastQuality: String(raw.lastQuality || ""),
    stacks: protoReadStacks(raw.stacks),
    lastStacks: protoReadStacks(raw.lastStacks),
  };
}

function protoFormatReading(value, unit) {
  if (value == null || value === "") return "No reading";
  const amount = protoFormatAmount(value);
  const u = String(unit || "").trim();
  if (u === "£") return `£${amount}`;
  return u ? `${amount} ${u}` : amount;
}

function protoReadingQualityMark(quality) {
  return quality === "estimated" ? protoTag("Estimated") : "";
}

function protoReadingQualityWords(quality) {
  return quality === "estimated" ? ", estimated" : "";
}

function protoChartPointLine(point) {
  if (!point) return "";
  const unit = point.unit || "kWh";
  const slices = protoPointSliceRows(point);
  if (slices.length > 1) {
    const bits = slices.map(
      (row) => `${row.name} ${protoFormatReading(row.value, unit)}${protoReadingQualityWords(row.quality)}`
    );
    const total = point.value ? `${protoFormatReading(point.value, unit)}. ` : "";
    return `${protoChartAt(point.time)}. ${total}${bits.join(". ")}.`;
  }
  if (point.meterRef) {
    const reading = protoFormatReading(point.value, unit);
    return `${protoChartAt(point.time)}. ${point.meterRef} ${reading}${protoReadingQualityWords(
      point.quality
    )}.`;
  }
  if (point.compare) {
    const nowLabel = point.nowLabel || "In";
    const lastLabel = point.lastLabel || "Out";
    const nowText = point.value
      ? `${nowLabel} ${protoFormatReading(point.value, unit)}${protoReadingQualityWords(point.quality)}`
      : `${nowLabel} no reading`;
    const lastText = point.last
      ? `${lastLabel} ${protoFormatReading(point.last, unit)}${protoReadingQualityWords(point.lastQuality)}`
      : `${lastLabel} no reading`;
    return `${protoChartAt(point.time)}. ${nowText}. ${lastText}.`;
  }
  return point.value
    ? `${protoChartAt(point.time)}. ${protoFormatReading(point.value, unit)}${protoReadingQualityWords(
        point.quality
      )}.`
    : `${protoChartAt(point.time)}. No reading.`;
}

function protoChartPointSeriesMark(label, color) {
  const kind = protoFlowKind(label);
  if (kind) return protoFlowPill(kind);
  const mark = color
    ? `<span class="astral-chart-key-mark" style="background:${escapeHtml(
        color
      )};--stack-fill:${escapeHtml(color)}" aria-hidden="true"></span>`
    : "";
  const name = label ? `<span class="astral-query-pin-series">${escapeHtml(label)}</span>` : "";
  return `${mark}${name}`;
}

function protoChartPointReading(label, value, unit, color, quality) {
  const amount = escapeHtml(protoFormatReading(value, unit));
  const series = protoChartPointSeriesMark(label, color);
  return `<p class="astral-query-pin-reading">${series}<span class="astral-query-pin-kwh">${amount}</span>${protoReadingQualityMark(
    quality
  )}</p>`;
}

function protoPointSliceRows(point) {
  if (!point) return [];
  const stacks = protoReadStacks(point.stacks);
  const lastStacks = protoReadStacks(point.lastStacks);
  if (stacks.length || lastStacks.length) return [...stacks, ...lastStacks];
  if (point.compare) {
    const rows = [];
    if (point.value !== "" && point.value != null) {
      rows.push({ name: point.nowLabel || "In", value: point.value, quality: point.quality });
    }
    if (point.last !== "" && point.last != null) {
      rows.push({
        name: point.lastLabel || "Out",
        value: point.last,
        quality: point.lastQuality,
      });
    }
    return rows;
  }
  if (point.meterRef) {
    return [
      {
        name: point.meterRef,
        value: point.value,
        color: point.meterColor || "",
        quality: point.quality,
      },
    ];
  }
  return [];
}

function protoChartPointSlicesHtml(point, opts = {}) {
  return protoHoverSlices(point, opts).html;
}

const PROTO_HOVER_SLICE_MAX = 7;

function protoHoverSeriesNoun(point, count) {
  const plural = count !== 1;
  const slices = protoPointSliceRows(point);
  if (slices.some((row) => row.hours)) return plural ? "hours" : "hour";
  if (protoCompareOn()) return protoCompareNoun(plural);
  if (store.prototypeScope === "group") return plural ? "sites" : "site";
  return protoBelowSiteNoun(count);
}

function protoHoverMoreLabel(point, rest) {
  if (!rest) return "";
  return `+${rest} more ${protoHoverSeriesNoun(point, rest)}`;
}

function protoHoverAriaNote(point) {
  const unit = point?.unit || "kWh";
  const slices = protoPointSliceRows(point);
  if (!slices.length) return "";
  const rest = Math.max(0, slices.length - PROTO_HOVER_SLICE_MAX);
  const shown = rest ? slices.slice(0, PROTO_HOVER_SLICE_MAX) : slices;
  const note = protoStacksNote(shown, unit);
  if (!rest) return note;
  return `${note} ${protoHoverMoreLabel(point, rest)}.`;
}

function protoHoverSlices(point, opts = {}) {
  const unit = point?.unit || "kWh";
  const slices = protoPointSliceRows(point);
  if (!slices.length) {
    return { html: protoChartPointReading("", point?.value, unit, "", point?.quality), rest: 0 };
  }
  const rest = Math.max(0, slices.length - PROTO_HOVER_SLICE_MAX);
  const shown = opts.all || !rest ? slices : slices.slice(0, PROTO_HOVER_SLICE_MAX);
  const html = shown
    .map((row) =>
      protoChartPointReading(row.name, row.value, unit, row.color || protoSliceFill(row), row.quality)
    )
    .join("");
  return { html, rest };
}

function protoHoverMoreMarkup(point, rest, open) {
  if (!rest) return "";
  const label = open ? "Hide" : protoHoverMoreLabel(point, rest);
  const spoken = open ? "Hide extra readings" : `Show ${String(label).replace(/^\+/, "")}`;
  return `<button type="button" class="astral-text astral-tip-more" data-proto-hover-more aria-expanded="${
    open ? "true" : "false"
  }" aria-label="${escapeHtml(spoken)}">${escapeHtml(label)}</button>`;
}

function protoPaintHoverMore(moreEl, rest, open, point) {
  if (!moreEl) return;
  if (!rest) {
    moreEl.hidden = true;
    moreEl.textContent = "";
    moreEl.removeAttribute("aria-expanded");
    moreEl.removeAttribute("aria-label");
    return;
  }
  moreEl.hidden = false;
  moreEl.setAttribute("aria-expanded", open ? "true" : "false");
  if (open) {
    moreEl.textContent = "Hide";
    moreEl.setAttribute("aria-label", "Hide extra readings");
    return;
  }
  const label = protoHoverMoreLabel(point, rest);
  moreEl.textContent = label;
  moreEl.setAttribute("aria-label", `Show ${label.replace(/^\+/, "")}`);
}

function protoToggleHoverMore(btn) {
  const tip = btn.closest(".astral-tip");
  if (tip) {
    const wrap = tip.closest(".astral-chart-wrap");
    if (!wrap) return;
    const hit =
      wrap.querySelector(".astral-hit-group.is-on .astral-hit") ||
      wrap.querySelector(".astral-hit-group.is-on [data-tip-time]");
    if (!hit) return;
    const point = protoPointFromHit(hit, wrap.dataset.protoChart || "");
    if (!point) return;
    const open = !tip.classList.contains("is-more");
    tip.classList.toggle("is-more", open);
    const slicesHtml = protoHoverSlices(point, { all: open });
    const sliceEl = tip.querySelector(".astral-tip-slices");
    if (sliceEl) {
      sliceEl.innerHTML = slicesHtml.html;
      sliceEl.hidden = !slicesHtml.html;
    }
    protoPaintHoverMore(btn, slicesHtml.rest, open, point);
    protoPlaceChartTip(tip, hit, wrap);
    return;
  }
  const pin = btn.closest(".astral-query-pin");
  if (!pin) return;
  const point = protoChartPoint();
  if (!point) return;
  const open = !pin.classList.contains("is-more");
  pin.classList.toggle("is-more", open);
  const slicesHtml = protoHoverSlices(point, { all: open });
  const sliceEl = pin.querySelector(".astral-query-pin-readings");
  if (sliceEl) sliceEl.innerHTML = slicesHtml.html;
  protoPaintHoverMore(btn, slicesHtml.rest, open, point);
}

const PROTO_POINT_TAG_SEED = [];

const PROTO_POINT_TAG_RESERVED = [
  "Peak",
  "Off-peak",
  "Off peak",
  "On peak",
  "Out of hours",
  "Operational",
  "Non-operational",
  "Closed",
  "Operational · Peak",
  "Operational · Off-peak",
  "Non-operational · Peak",
  "Non-operational · Off-peak",
  "Closed · Peak",
  "Closed · Off-peak",
];

function protoHexLum(hex) {
  const n = String(hex || "").replace("#", "");
  if (n.length !== 6) return 0;
  const lin = (ch) => {
    const c = parseInt(ch, 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(n.slice(0, 2)) + 0.7152 * lin(n.slice(2, 4)) + 0.0722 * lin(n.slice(4, 6));
}

function protoPointTagInk(hex) {
  const L = protoHexLum(hex);
  const black = (L + 0.05) / 0.05;
  const white = 1.05 / (L + 0.05);
  return black >= white ? "#000" : "#fff";
}

function protoPointTagFill(name) {
  const tag = protoPointTagName(name);
  if (!tag) return "";
  const pool = protoPointTagPool();
  let i = pool.findIndex((item) => item.toLowerCase() === tag.toLowerCase());
  if (i < 0) {
    let h = 0;
    for (let n = 0; n < tag.length; n += 1) h = (h * 31 + tag.charCodeAt(n)) >>> 0;
    i = h % PROTO_LINE_CAT.length;
  }
  return PROTO_LINE_CAT[i % PROTO_LINE_CAT.length];
}

function protoPointTagPill(name) {
  const tag = protoPointTagName(name);
  if (!tag) return "";
  const fill = protoPointTagFill(tag);
  const ink = protoPointTagInk(fill);
  return `<span class="astral-tag is-point" style="--tag-fill:${fill};--tag-ink:${ink}">${escapeHtml(tag)}</span>`;
}

function protoPointTagName(raw) {
  const text = String(raw || "").trim().replace(/\s+/g, " ").slice(0, 32);
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function protoPointTagList(raw) {
  const seen = new Set();
  const out = [];
  (Array.isArray(raw) ? raw : []).forEach((item) => {
    const name = protoPointTagName(item);
    const key = name.toLowerCase();
    if (!name || seen.has(key) || protoPointTagReserved(name)) return;
    seen.add(key);
    out.push(name);
  });
  return out;
}

function protoPointTagReserved(name) {
  const key = protoPointTagName(name).toLowerCase();
  if (!key) return "";
  return PROTO_POINT_TAG_RESERVED.find((item) => item.toLowerCase() === key) || "";
}

function protoPointTagReservedNote(name) {
  const hit = protoPointTagReserved(name);
  if (!hit) return "";
  if (/operational|closed|out of hours/i.test(hit)) return `${hit} is Hours, not a tag.`;
  return `${hit} is Time of use, not a tag.`;
}

function protoPointTagPane() {
  const pane = protoPaneId();
  return pane === "cost" || pane === "carbon" ? pane : "consumption";
}

function protoPointTagPlace(point) {
  if (point?.meterId) return `m:${point.meterId}`;
  if (store.prototypeScope === "site") {
    const site = protoSiteByMeter(store.activePrototypeMeter);
    const id = protoSiteId(site);
    if (id) return `s:${id}`;
    if (store.activePrototypeMeter) return `m:${store.activePrototypeMeter}`;
  }
  return `g:${store.prototypeGroup || "all"}`;
}

function protoPointTagWhen(point) {
  const time = String(point?.time || "").trim();
  if (!time) return "";
  const at = typeof protoPointDate === "function" ? protoPointDate(point) : null;
  const day =
    at instanceof Date && !Number.isNaN(at.getTime())
      ? protoIso(at)
      : protoIso(protoDateSpan().from);
  return `${day}|${time}`;
}

function protoPointTagKey(point) {
  const when = protoPointTagWhen(point);
  if (!when) return "";
  return `${when}|${protoPointTagPane()}|${protoPointTagPlace(point)}`;
}

function protoPointTagKeyAliases(point) {
  if (!point?.time) return [];
  const time = String(point.time).trim();
  const chart = String(point.chart || "").trim();
  const meter = String(point.meterId || "").trim();
  const group = String(store.prototypeGroup || "").trim();
  const place = protoPointTagPlace(point);
  const pane = protoPointTagPane();
  const when = protoPointTagWhen(point);
  return [
    protoPointTagKey(point),
    when ? `${when}|${pane}|${place}` : "",
    `${time}|${pane}|${place}`,
    `${time}|${chart}|${place}`,
    `${time}|${chart}|${meter}`,
    `${time}|${chart}|${group}`,
    `${time}|${meter}`,
    `${time}|${group}`,
  ].filter((key, i, all) => key && all.indexOf(key) === i);
}

function protoPointTagMap(raw) {
  const source = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : store.prototypePointTags;
  if (!source || typeof source !== "object" || Array.isArray(source)) return {};
  const out = {};
  Object.keys(source).forEach((key) => {
    const tags = protoPointTagList(source[key]);
    if (tags.length) out[String(key)] = tags;
  });
  return out;
}

function protoPointTagPool(raw) {
  const extras = protoPointTagList(raw !== undefined ? raw : store.prototypePointTagPool);
  const seen = new Set(PROTO_POINT_TAG_SEED.map((name) => name.toLowerCase()));
  return [
    ...PROTO_POINT_TAG_SEED,
    ...extras.filter((name) => {
      const key = name.toLowerCase();
      if (seen.has(key) || protoPointTagReserved(name)) return false;
      seen.add(key);
      return true;
    }),
  ];
}

function protoPointTagsOn(point) {
  const map = protoPointTagMap();
  const seen = new Set();
  const out = [];
  protoPointTagKeyAliases(point).forEach((key) => {
    protoPointTagList(map[key]).forEach((name) => {
      const id = name.toLowerCase();
      if (seen.has(id)) return;
      seen.add(id);
      out.push(name);
    });
  });
  return out;
}

function protoPointTagCommit(point, tags) {
  const map = protoPointTagMap();
  const canonical = protoPointTagKey(point);
  protoPointTagKeyAliases(point).forEach((key) => {
    if (key !== canonical) delete map[key];
  });
  const next = protoPointTagList(tags);
  if (next.length && canonical) map[canonical] = next;
  else if (canonical) delete map[canonical];
  return map;
}

function protoPointTagClear() {
  return { prototypePointTagOpen: false, prototypePointTagQuery: "" };
}

function protoPointTagKnown(name) {
  const key = protoPointTagName(name).toLowerCase();
  return protoPointTagPool().find((item) => item.toLowerCase() === key) || "";
}

function protoAttachPointTag(name, created) {
  const point = protoChartPoint();
  const tag = protoPointTagKnown(name) || protoPointTagName(name);
  if (!point || !tag || !protoCanAct() || protoPointTagReserved(tag)) return;
  const on = protoPointTagsOn(point);
  const next = on.some((item) => item.toLowerCase() === tag.toLowerCase()) ? on : [...on, tag];
  const extras = protoPointTagList(store.prototypePointTagPool);
  const extraHit = extras.some((item) => item.toLowerCase() === tag.toLowerCase());
  const patch = { prototypePointTags: protoPointTagCommit(point, next) };
  if (!extraHit) patch.prototypePointTagPool = [...extras, tag];
  if (created) patch.prototypePointTagQuery = "";
  setProto(patch);
}

function protoTogglePointTag(name) {
  const point = protoChartPoint();
  const tag = protoPointTagKnown(name) || protoPointTagName(name);
  if (!point || !tag || !protoCanAct() || protoPointTagReserved(tag)) return;
  const on = protoPointTagsOn(point);
  const has = on.some((item) => item.toLowerCase() === tag.toLowerCase());
  if (has) {
    const next = on.filter((item) => item.toLowerCase() !== tag.toLowerCase());
    setProto({ prototypePointTags: protoPointTagCommit(point, next) });
    return;
  }
  protoAttachPointTag(tag);
}

function protoSubmitPointTagQuery() {
  const name = protoPointTagName(store.prototypePointTagQuery);
  if (!name || protoPointTagReserved(name)) return;
  const hit = protoPointTagKnown(name);
  protoAttachPointTag(hit || name, !hit);
}

function protoPointTagRow(name, on) {
  const action = on ? `Remove ${name}` : `Add ${name}`;
  return `
    <button
      type="button"
      class="astral-point-tag-row"
      role="switch"
      aria-checked="${on ? "true" : "false"}"
      aria-label="${escapeHtml(action)}"
      data-proto-point-tag-toggle="${escapeHtml(name)}"
    >
      ${protoPointTagPill(name)}
      <span class="astral-switch${on ? " is-on" : ""}" aria-hidden="true"></span>
    </button>
  `;
}

function protoPointTagGroup(title, names, attached) {
  if (!names.length) return "";
  const on = new Set(attached.map((name) => name.toLowerCase()));
  return `
    <div class="astral-filter-group">
      <p>${escapeHtml(title)}</p>
      ${names.map((name) => protoPointTagRow(name, on.has(name.toLowerCase()))).join("")}
    </div>
  `;
}

function protoPointTagPicker() {
  const open = Boolean(store.prototypePointTagOpen);
  const query = String(store.prototypePointTagQuery || "");
  const needle = protoPointTagName(query).toLowerCase();
  const attached = protoPointTagsOn(protoChartPoint());
  const pool = protoPointTagPool();
  const match = (name) => !needle || name.toLowerCase().includes(needle);
  const current = attached.filter(match);
  const recent = pool.filter((name) => !attached.some((item) => item.toLowerCase() === name.toLowerCase()) && match(name));
  const canCreate = Boolean(needle && !protoPointTagKnown(query) && !protoPointTagReserved(query));
  const reservedNote = protoPointTagReservedNote(query);
  const createName = protoPointTagName(query);
  const empty = !current.length && !recent.length && !canCreate && !reservedNote;
  const noneYet = empty && !needle && !pool.length;
  const menu = `
    ${protoSearchField({
      name: "proto-point-tag-query",
      value: query,
      placeholder: "Find or create a tag",
      label: "Find or create a tag",
    })}
    ${protoPointTagGroup("Current tags", current, attached)}
    ${protoPointTagGroup("Recent tags", recent, attached)}
    ${
      canCreate
        ? `<button type="button" class="astral-point-tag-create" data-proto-point-tag-create="${escapeHtml(
            createName
          )}">Create ${escapeHtml(createName)}</button>`
        : ""
    }
    ${reservedNote ? `<p class="astral-muted">${escapeHtml(reservedNote)}</p>` : ""}
    ${empty ? `<p class="astral-muted">${noneYet ? "No tags yet" : "No tags match"}</p>` : ""}
  `;
  return `
    <div class="astral-point-tags">
      ${protoIconBtn(
        "tag",
        "Add tag",
        `data-proto-point-tag-open aria-haspopup="menu" aria-expanded="${open ? "true" : "false"}" aria-controls="astral-point-tag-menu"`,
        { on: open }
      )}
      <div
        id="astral-point-tag-menu"
        class="astral-filter-menu astral-point-tag-menu${open ? protoMenuEnterClass("astral-point-tag-menu") : ""}"
        role="menu"
        aria-label="Add tag"
        ${open ? "" : "hidden"}
      >${menu}</div>
    </div>
  `;
}

function protoAnalyseControl(point) {
  if (!protoAnalyseTarget(point)) return "";
  return protoIconBtn("analyse", "Analyse", "data-proto-analyse");
}

function protoChartPointTitle(point) {
  if (!point) return "";
  const time = `<p class="astral-muted">${escapeHtml(protoChartAt(point.time))}</p>`;
  const slicesHtml = protoHoverSlices(point);
  const rows = `<div class="astral-query-pin-readings">${
    slicesHtml.html
  }</div>${protoHoverMoreMarkup(point, slicesHtml.rest, false)}`;
  const tags = protoPointTagsOn(point);
  const tagRow = tags.length
    ? `<div class="astral-query-pin-tags">${tags.map((name) => protoPointTagPill(name)).join("")}</div>`
    : "";
  const picker = protoCanAct() ? protoPointTagPicker() : "";
  const analyse = protoAnalyseControl(point);
  const tools =
    analyse || picker
      ? `<div class="astral-query-pin-title-tools">${analyse}${picker}</div>`
      : "";
  const label = [protoChartPointLine(point), ...tags].filter(Boolean).join(" ");
  return `<div class="astral-query-pin-title" aria-label="${escapeHtml(label)}"><div class="astral-query-pin-title-head"><div class="astral-query-pin-title-meta">${time}${tagRow}</div>${tools}</div>${rows}</div>`;
}

function protoQueryPinOverlay() {
  const view = protoState().view;
  if (view !== "portfolio" && view !== "finance") return "";
  if (view === "portfolio" && !protoPaneIsGraph()) return "";
  return protoChartPointCall(protoChartPoint());
}

function protoPinLeadIsAlert(point) {
  return Boolean(point?.time && protoAlertsAtTime(point.time).length);
}

function protoPinTitleWord(point) {
  return protoPinLeadIsAlert(point) ? "Alert" : "Query";
}

function protoChartPointCall(point) {
  if (!point) return "";
  const query = protoQueryByRef(store.prototypeOpenQuery);
  const open = Boolean(query && query.point && query.point === point.time);
  const alertHtml = protoPinAlertHtml(point.time);
  const word = protoPinTitleWord(point);
  const title = `<p class="astral-alert-title">${escapeHtml(word)}</p>`;
  if (open) {
    return `
      <div class="astral-query-pin is-thread" aria-label="${escapeHtml(query.ref)}">
        ${protoQueryPinHead(title, protoAckControl("query", query.ref, true))}
        ${protoChartPointTitle(point)}
        ${protoQueryThreadHtml(query, alertHtml)}
        ${protoCanAct() ? protoQueryReplyHtml() : ""}
      </div>
    `;
  }
  if (!protoCanAct()) return "";
  return `
    <div class="astral-query-pin is-thread" aria-label="${escapeHtml(
      word === "Alert" ? "Alert" : "Raise a query"
    )}">
      ${protoQueryPinHead(title)}
      ${protoChartPointTitle(point)}
      ${protoQueryThreadHtml(null, alertHtml)}
      ${protoQueryFormHtml()}
    </div>
  `;
}

function protoChartCanPan(label) {
  return store.activePrototypeView === "portfolio" && protoChartIsGraph(label);
}

function protoChartViewWhere() {
  if (protoCompareOn()) return "this comparison";
  if (store.prototypeScope === "site") return "this site";
  if (protoIsAllGroup(store.prototypeGroup)) return "the portfolio";
  return "this group";
}

function protoChartViewParts() {
  if (protoCompareOn()) return protoCompareNoun(true);
  if (store.prototypeScope === "site") return protoBelowSiteNoun(2);
  return "sites";
}

function protoChartViewSelect() {
  const view = protoChartView();
  const pane = protoPaneId();
  const where = protoChartViewWhere();
  const parts = protoChartViewParts();
  const total =
    pane === "cost" ? "Total cost" : pane === "carbon" ? "Total carbon" : "Total consumption";
  const individual =
    pane === "cost"
      ? "Individual cost"
      : pane === "carbon"
        ? "Individual carbon"
        : "Individual consumption";
  const totalNote =
    pane === "cost"
      ? `How much ${where} spent`
      : pane === "carbon"
        ? `Combined carbon for ${where}`
        : `How much ${where} used`;
  return protoSelect({
    id: "chart-view",
    label: `${total} or ${individual}`,
    value: view,
    options: [
      { value: "total", label: total, note: totalNote },
      { value: "individual", label: individual, note: `Which ${parts} made that total` },
    ],
  });
}

function protoChartStyleSelect() {
  return protoSelect({
    id: "chart-style",
    value: protoChartStyle(),
    options: [
      { value: "bar", label: "Bar" },
      { value: "line", label: "Line" },
    ],
  });
}

function protoCombinedLineTracks(points) {
  const rows = (points || []).map((point) => ({
    ...point,
    last: null,
    lastLabel: "",
    nowLabel: "",
  }));
  if (!rows.length) return [];
  return [
    {
      id: "total",
      ref: protoPaneChartLabel(false),
      color: protoIncomingInk(),
      dash: "",
      points: rows,
    },
  ];
}

function protoDualLineTracks(points) {
  const rows = points || [];
  if (!rows.length) return [];
  const tracks = [];
  if (protoChartFlowOn("in")) {
    tracks.push({
      id: "in",
      ref: "Incoming",
      color: protoIncomingInk(),
      dash: "",
      points: rows.map((point) => ({
        ...point,
        last: null,
        lastLabel: "",
        nowLabel: "",
      })),
    });
  }
  if (protoChartFlowOn("out")) {
    tracks.push({
      id: "out",
      ref: "Outgoing",
      color: protoOutgoingInk(),
      dash: "",
      points: rows.map((point) => ({
        ...point,
        value: point.last,
        quality: point.lastQuality || point.quality,
        last: null,
        lastLabel: "",
        nowLabel: "",
      })),
    });
  }
  return tracks.filter((track) => (track.points || []).some((point) => point.value != null));
}

function protoTracksToTotalPoints(tracks) {
  return protoTracksToStackPoints(tracks).map((point) => ({
    ...point,
    stacks: [],
  }));
}

function protoPaintPaneChart({ tracks, points, meters, all, dual, outgoing }) {
  const list = meters || [];
  const pool = all || list;
  if (!list.length) return protoChartEmpty(pool);
  if (protoConsumptionUnitsMixed(list)) return protoChartEmpty(list);
  const scaledTracks = protoScaleTracks(tracks || [], list);
  const scaledPoints = protoScalePoints(points || [], list);
  const breakdown = protoChartIsIndividual();
  const dualTotal = Boolean(dual) && !breakdown;
  const name = protoPaneChartLabel(dualTotal);
  if (protoChartIsLine()) {
    const lineTracks = breakdown
      ? scaledTracks
      : dualTotal
        ? protoDualLineTracks(scaledPoints)
        : protoCombinedLineTracks(scaledPoints);
    return lineTracks.length ? protoLineChart(lineTracks, name, { dual: dualTotal }) : protoChartEmpty(pool);
  }
  if (breakdown && scaledTracks.length && !dualTotal) {
    return protoBarChart(protoTracksToStackPoints(scaledTracks), name, { seriesStack: true });
  }
  if (!scaledPoints.length) return protoChartEmpty(pool);
  return protoBarChart(scaledPoints, name, {
    dual: dualTotal,
    outgoing: Boolean(outgoing),
  });
}

function protoChartNav(pan) {
  const atEnd = protoChartAtLatest();
  const arrows = pan
    ? `${protoIconBtn("prev", "Previous", 'data-proto-chart-pan="prev"')}
      ${protoIconBtn("next", "Next", 'data-proto-chart-pan="next"', {
        disabled: atEnd,
        tipLabel: atEnd ? "Latest window" : "Next",
      })}`
    : "";
  return `
    <div class="astral-chart-nav">
      ${protoChartViewSelect()}
      ${protoChartStyleSelect()}
      ${arrows}
    </div>
  `;
}

function protoChartKeyStar() {
  return `<svg class="astral-chart-key-star" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><polygon points="${protoStarPoints(
    5,
    5,
    4.6,
    1.9
  )}" /></svg>`;
}

function protoChartKeyPill({ on, label, spoken, hit, fill, ink }) {
  return `
    <button
      type="button"
      class="astral-meter-pill${on ? " is-on" : ""}"
      role="listitem"
      aria-pressed="${on ? "true" : "false"}"
      aria-label="${escapeHtml(spoken || label)}"
      ${hit}
      style="--slice:${escapeHtml(fill)};--slice-ink:${escapeHtml(ink)}"
    >
      <span class="astral-meter-pill-label">${escapeHtml(label)}</span>
    </button>
  `;
}

function protoChartKey(dual) {
  if (!dual) return "";
  const item = (kind) => {
    const on = protoChartFlowOn(kind);
    const short = kind === "out" ? "Out" : "In";
    const full = kind === "out" ? "Outgoing" : "Incoming";
    const fill = protoChartFlowFill(kind);
    return protoChartKeyPill({
      on,
      label: short,
      spoken: full,
      hit: `data-proto-chart-flow="${kind}"`,
      fill,
      ink: protoSliceInk(fill),
    });
  };
  return `
    <div class="astral-chart-key" role="list" aria-label="Incoming and outgoing">
      ${item("in")}
      ${item("out")}
    </div>
  `;
}

function protoChartProfileKey() {
  const slices = protoChartStackSlices();
  if (!slices.length) return "";
  const items = slices
    .map((slice) => {
      const name = protoSliceName(slice);
      const fill = protoSliceFill(slice, false);
      return protoChartKeyPill({
        on: protoChartSliceOn(slice.id),
        label: name,
        spoken: name,
        hit: `data-proto-chart-slice="${escapeHtml(slice.id)}"`,
        fill,
        ink: protoSliceInk(fill),
      });
    })
    .join("");
  return `<div class="astral-chart-key is-profile" role="list" aria-label="Operating state and tariff">${items}</div>`;
}

function protoChartWrap(svg, label, dual, empty, extras = {}) {
  const pan = protoChartCanPan(label);
  const titled = protoChartIsGraph(label);
  return `
    <div class="astral-chart-wrap" data-proto-chart="${escapeHtml(label)}">
      ${
        titled || pan
          ? `<div class="astral-chart-head">
        ${
          titled
            ? `<div class="astral-chart-heading">
          <p class="astral-chart-title">${escapeHtml(label)}</p>
          <p class="astral-chart-when">${escapeHtml(protoChartWhen())} ${escapeHtml(protoChartZone())}</p>
        </div>`
            : ""
        }
        ${titled || pan ? protoChartNav(pan) : ""}
      </div>`
          : ""
      }
      ${
        empty
          ? ""
          : `<p class="sr-only">${titled ? "" : `${escapeHtml(label)}. `}Hover or focus a point for the reading. Click a point to raise a query.</p>`
      }
      ${svg}
      <div class="astral-chart-keys">
        ${dual ? protoChartKey(true) : ""}
        ${extras.stackKey ? protoChartProfileKey() : ""}
      </div>
      <div class="astral-tip" hidden>
        <div class="astral-tip-head">
          <p class="astral-tip-time astral-muted"></p>
          <div class="astral-tip-marks" hidden></div>
        </div>
        <div class="astral-query-pin-readings astral-tip-slices" hidden></div>
        <button type="button" class="astral-text astral-tip-more" hidden data-proto-hover-more></button>
        <p class="astral-tip-note" hidden></p>
      </div>
    </div>
  `;
}

function protoNiceMax(raw) {
  const target = Math.max(raw, 1) * 1.08;
  const mag = Math.pow(10, Math.floor(Math.log10(target)));
  const bases = [1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  for (const step of bases) {
    const value = step * mag;
    if (value >= target) return value;
  }
  return 10 * mag;
}

function protoAxisNumber(value, max) {
  if (value === 0) return "0";
  if (max >= 100) return String(Math.round(value));
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function protoYTicks(max) {
  const steps = 4;
  return Array.from({ length: steps + 1 }, (_, i) => {
    const value = (max * i) / steps;
    return { value, label: protoAxisNumber(value, max) };
  });
}

function protoXTickIndexes(points) {
  const n = points.length;
  if (n <= 12) return Array.from({ length: n }, (_, i) => i);
  if (n === 48) return [0, 8, 16, 24, 32, 40];
  const step = Math.ceil(n / 6);
  const indexes = [];
  for (let i = 0; i < n; i += step) indexes.push(i);
  const last = n - 1;
  if (indexes[indexes.length - 1] !== last) {
    if (last - indexes[indexes.length - 1] < step / 2) indexes[indexes.length - 1] = last;
    else indexes.push(last);
  }
  return indexes;
}

function protoChartScale(points, w, h, pad) {
  const nums = points.flatMap((p) => {
    if (p.stacks?.length || p.lastStacks?.length) {
      return [protoStacksSum(p.stacks), protoStacksSum(p.lastStacks)].filter((v) => v);
    }
    return [p.value, p.last].filter((v) => v != null);
  });
  const max = protoNiceMax(Math.max(0, ...nums));
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  return {
    max,
    innerW,
    innerH,
    x: (i) => pad.l + (i / Math.max(1, points.length - 1)) * innerW,
    xBar: (i) => pad.l + (i + 0.5) * (innerW / Math.max(1, points.length)),
    y: (v) => pad.t + innerH - (v / max) * innerH,
  };
}

function protoTracksScale(tracks, w, h, pad) {
  const points = tracks[0]?.points || [];
  const nums = tracks.flatMap((track) => (track.points || []).map((p) => p.value).filter((v) => v != null));
  const max = protoNiceMax(Math.max(0, ...nums));
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  return {
    max,
    innerW,
    innerH,
    x: (i) => pad.l + (i / Math.max(1, points.length - 1)) * innerW,
    xBar: (i) => pad.l + (i + 0.5) * (innerW / Math.max(1, points.length)),
    y: (v) => pad.t + innerH - (v / max) * innerH,
  };
}

function protoChartAxes(points, scale, w, h, pad, xAt) {
  const unit = points[0] && Object.prototype.hasOwnProperty.call(points[0], "unit")
    ? points[0].unit
    : "kWh";
  const yTicks = protoYTicks(scale.max);
  const grid = yTicks
    .map((tick, n) => {
      const y = scale.y(tick.value);
      return `<line class="astral-grid" data-m="grid|${n}" x1="${pad.l}" y1="${y.toFixed(1)}" x2="${(w - pad.r).toFixed(
        1
      )}" y2="${y.toFixed(1)}" />`;
    })
    .join("");
  const yLabels = yTicks
    .map((tick, n) => {
      const y = scale.y(tick.value);
      return `<text class="astral-axis-y" data-m="yl|${n}" x="${pad.l - 8}" y="${(y + 3).toFixed(
        1
      )}" text-anchor="end">${escapeHtml(tick.label)}</text>`;
    })
    .join("");
  const xLabels = protoXTickIndexes(points)
    .map((i, n) => {
      const x = xAt(i);
      return `<text class="astral-axis-x" data-m="xl|${n}" x="${x.toFixed(1)}" y="${h - 8}" text-anchor="middle">${escapeHtml(
        points[i]?.label || ""
      )}</text>`;
    })
    .join("");
  return `
    ${grid}
    <line class="astral-axis" x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${h - pad.b}" />
    <line class="astral-axis" x1="${pad.l}" y1="${h - pad.b}" x2="${w - pad.r}" y2="${h - pad.b}" />
    <text class="astral-axis-unit" x="${pad.l - 8}" y="14" text-anchor="end">${escapeHtml(unit)}</text>
    ${yLabels}
    ${xLabels}
  `;
}

function protoBarTop(value, scale, pad, h) {
  if (value == null) return h - pad.b - 8;
  const bh = Math.max((value / scale.max) * scale.innerH, 1);
  return pad.t + scale.innerH - bh;
}

function protoStarPoints(cx, cy, outer, inner) {
  const pts = [];
  for (let i = 0; i < 10; i += 1) {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`);
  }
  return pts.join(" ");
}

function protoAlertStar(cx, cy, outer = 5, inner = 2.1, extra = "", fill) {
  const cls = ["astral-alert-mark", extra].filter(Boolean).join(" ");
  const paint = fill
    ? ` style="color:${escapeHtml(fill)};fill:${escapeHtml(fill)};stroke:${escapeHtml(fill)}"`
    : "";
  return `<polygon class="${cls}" points="${protoStarPoints(cx, cy, outer, inner)}"${paint} />`;
}

function protoQueryDotAt(cx, cy) {
  return `<circle class="astral-query-mark" cx="${Number(cx).toFixed(1)}" cy="${Number(cy).toFixed(1)}" r="4" />`;
}

function protoCapGlyphs(cx, barTop, query, alert) {
  const gap = 3;
  const dotR = 4;
  const starR = 5;
  const parts = [];
  let y = Number(barTop) - gap;
  if (query) {
    y -= dotR;
    parts.push(protoQueryDotAt(cx, y));
    y -= dotR;
  }
  if (alert) {
    if (query) y -= gap;
    y -= starR;
    parts.push(protoAlertStar(cx, y, starR, 2.1));
  }
  return parts.join("");
}

function protoBarCap(bx, value, scale, pad, h) {
  return { x: bx, y: protoBarTop(value, scale, pad, h) };
}

function protoBarFocusAmount(point, key) {
  const stacks = protoVisibleStacks(key === "last" ? point?.lastStacks : point?.stacks);
  if (stacks.length) return protoStacksSum(stacks);
  const value = key === "last" ? point?.last : point?.value;
  return value;
}

function protoBarFocusMarkup(point, scale, pad, h, x1, x2, bw, paired) {
  const bits = [];
  const draw = (value, bx) => {
    if (value == null) return;
    const top = protoBarTop(value, scale, pad, h);
    const height = Math.max(h - pad.b - top, 1);
    const r = Math.min(3, bw / 2, height);
    bits.push(
      `<rect class="astral-hit-focus" x="${bx.toFixed(1)}" y="${top.toFixed(
        1
      )}" width="${bw.toFixed(1)}" height="${height.toFixed(1)}" rx="${r.toFixed(1)}" />`
    );
  };
  draw(protoBarFocusAmount(point, "value"), x1);
  if (paired) draw(protoBarFocusAmount(point, "last"), x2);
  return bits.join("");
}

let protoChartSize = { w: 720, h: 320 };
let protoChartWatch = null;
let protoChartFitting = false;

function protoReadChartBox(node) {
  if (!node) return null;
  const w = Math.round(node.clientWidth);
  const h = Math.round(node.clientHeight);
  if (w < 80 || h < 80) return null;
  return { w, h };
}

function protoChartBox() {
  const live = protoReadChartBox(document.querySelector("#astral-fs .astral-chart"));
  if (live) protoChartSize = live;
  return { w: Math.max(240, protoChartSize.w), h: Math.max(160, protoChartSize.h) };
}

function protoSyncChartSize() {
  const svg = document.querySelector("#astral-fs .astral-pane-body .astral-chart");
  if (!svg) {
    if (protoChartWatch) {
      protoChartWatch.disconnect();
      protoChartWatch = null;
    }
    return;
  }
  const box = protoReadChartBox(svg);
  if (protoChartWatch) protoChartWatch.disconnect();
  protoChartWatch = new ResizeObserver(() => {
    if (protoChartFitting) return;
    protoSyncChartSize();
  });
  protoChartWatch.observe(svg);
  if (!box) return;
  if (Math.abs(box.w - protoChartSize.w) < 2 && Math.abs(box.h - protoChartSize.h) < 2) {
    protoChartSize = box;
    return;
  }
  protoChartSize = box;
  protoChartFitting = true;
  renderPrototype();
  protoChartFitting = false;
}

function protoFitChartSoon() {
  requestAnimationFrame(protoSyncChartSize);
}

function protoAreaChart(points, label) {
  const { w, h } = protoChartBox();
  const pad = { l: 52, r: 16, t: 22, b: 36 };
  const scale = protoChartScale(points, w, h, pad);
  const linePoints = points
    .map((p, i) => (p.value == null ? null : `${scale.x(i).toFixed(1)},${scale.y(p.value).toFixed(1)}`))
    .filter(Boolean)
    .join(" ");
  const lastLine = points
    .map((p, i) => (p.last == null ? null : `${scale.x(i).toFixed(1)},${scale.y(p.last).toFixed(1)}`))
    .filter(Boolean)
    .join(" ");
  const base = `${scale.x(points.length - 1).toFixed(1)},${h - pad.b} ${scale.x(0).toFixed(1)},${h - pad.b}`;
  const col = scale.innerW / Math.max(1, points.length);
  const picked = protoChartPoint();
  const queried = protoChartQueryTimes(label);
  const hits = points
    .map((p, i) => {
      const x = pad.l + i * col;
      const cy = p.value == null ? h - pad.b : scale.y(p.value);
      const on = Boolean(picked && picked.chart === label && picked.time === p.label);
      const mark = queried.has(p.label);
      return `
        <g class="astral-hit-group${on ? " is-picked" : ""}${mark ? " is-query" : ""}">
          <rect
            class="astral-hit"
            x="${x.toFixed(1)}"
            y="${pad.t}"
            width="${col.toFixed(1)}"
            height="${scale.innerH.toFixed(1)}"
            tabindex="0"
            role="img"
            aria-label="${escapeHtml(
              `${p.label}, ${p.value == null ? "no reading" : protoFormatReading(p.value, p.unit || "kWh")}${
                p.quality === "estimated" && p.value != null ? ", estimated" : ""
              }${mark ? ". Query" : ""}`
            )}"
            data-proto-hit
            ${protoHitAttrs(p)}
          />
          <circle class="astral-point${p.value == null ? " is-gap" : ""}${
            p.quality === "estimated" ? " is-est" : ""
          }" data-m="pt|${i}" cx="${scale
            .x(i)
            .toFixed(1)}" cy="${cy.toFixed(1)}" r="5" />
        </g>
      `;
    })
    .join("");
  const compare = lastLine
    ? `<polyline class="astral-chart-compare" data-m="area|compare" fill="none" points="${lastLine}" />`
    : "";
  const svg = `
    <svg class="astral-chart${protoChartDrawClass(label, points)}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMinYMin meet">
      ${protoEstDefs()}
      ${protoChartAxes(points, scale, w, h, pad, scale.x)}
      <g class="astral-chart-grow">
      <polygon class="astral-chart-fill" data-m="area|fill" points="${linePoints} ${base}" />
      <polyline class="astral-chart-line" data-m="area|line" fill="none" points="${linePoints}" />
      ${compare}
      </g>
      ${hits}
    </svg>
  `;
  return protoChartWrap(svg, label);
}

let protoDrawnChart = "";
let protoChartPlay = false;
let protoChartPlayTimer = 0;

function protoChartPointsFinger(points) {
  return (points || [])
    .map(
      (p) =>
        `${p.label}:${p.value ?? ""}:${p.last ?? ""}:${protoStacksSum(p.stacks)}:${protoStacksSum(
          p.lastStacks
        )}`
    )
    .join(";");
}

function protoChartFinger(label, points) {
  return [
    label,
    protoChartWhen(),
    protoPaneId(),
    protoChartView(),
    store.activePrototypeView || "",
    store.prototypeScope || "",
    store.activePrototypeMeter || "",
    store.prototypeGroup || "",
    (store.prototypeSiteMeters || []).join(","),
    (store.prototypeCompareMeters || []).join(","),
    (store.prototypeCompareSites || []).join(","),
    (store.prototypeGroupSites || []).join(","),
    protoCompareIds().join(","),
    store.prototypeChannel || "",
    protoChartFlowIds().join(","),
    protoChartSliceOffIds().join(","),
    (protoPaneMeterKindIds() || ["*"]).join(","),
    protoPaneFilterIds().join(","),
    protoTreeFilterIds().join(","),
    protoDatePreset(),
    store.prototypeDateFrom || "",
    store.prototypeDateTo || "",
    protoChartStackSlices()
      .map((slice) => slice.id)
      .join(","),
    protoChartPointsFinger(points),
  ].join("|");
}

function protoChartScene(label) {
  const scope = store.prototypeScope || "";
  return [
    protoChartIsGraph(label) ? "graph" : label,
    protoPaneId(),
    store.activePrototypeView || "",
    scope,
    scope === "site" ? store.activePrototypeMeter || "" : store.prototypeGroup || "",
    protoChartStyle(),
  ].join("|");
}

let protoDrawnScene = "";

function protoChartStartDraw() {
  protoMorphStop();
  protoChartPlay = true;
  window.clearTimeout(protoChartPlayTimer);
  protoChartPlayTimer = window.setTimeout(() => {
    protoChartPlay = false;
    document.querySelectorAll("#astral-fs .astral-chart.is-draw").forEach((node) => {
      node.classList.remove("is-draw");
    });
  }, 1000);
}

function protoChartStopDraw() {
  protoChartPlay = false;
  window.clearTimeout(protoChartPlayTimer);
}

// Entering the chart or picking another tree item replays the grow-in.
// Any other change (filters, flows, slices, dates) morphs from the old chart.
function protoChartDraw(label, points) {
  const key = protoChartFinger(label, points);
  const scene = protoChartScene(label);
  const changed = protoDrawnChart !== key;
  const sceneChanged = protoDrawnScene !== scene;
  protoDrawnChart = key;
  protoDrawnScene = scene;
  const old = document.querySelector("#astral-fs .astral-chart");
  if (!old) {
    if (changed || sceneChanged || !protoChartPlay) protoChartStartDraw();
    return protoChartPlay;
  }
  if (!changed && !sceneChanged) return protoChartPlay;
  if (sceneChanged) {
    protoChartStartDraw();
    return true;
  }
  protoChartStopDraw();
  protoMorphStart(old);
  return false;
}

function protoChartDrawClass(label, points) {
  return protoChartDraw(label, points) ? " is-draw" : "";
}

const PROTO_MORPH_MS = 520;
const PROTO_MORPH_ATTRS = ["x", "y", "width", "height", "cx", "cy", "x1", "y1", "x2", "y2"];
const PROTO_MORPH_FADE = new Set(["polyline", "polygon", "text", "line", "rect"]);
let protoMorph = null;

function protoMorphGeoAttr(x, y, w, h, round) {
  return `${x.toFixed(1)},${y.toFixed(1)},${Math.max(w, 0).toFixed(1)},${Math.max(h, 0).toFixed(1)},${
    round ? 1 : 0
  }`;
}

function protoMorphEase(t) {
  return 1 - Math.pow(1 - t, 4);
}

function protoMorphLerp(a, b, t) {
  return a + (b - a) * t;
}

function protoMorphReadGeo(el) {
  const bits = String(el.getAttribute("data-g") || "").split(",").map(Number);
  if (bits.length < 4 || !bits.slice(0, 4).every(Number.isFinite)) return null;
  return { geo: bits.slice(0, 4), round: bits[4] === 1 };
}

function protoMorphReadPoints(raw) {
  return String(raw || "")
    .trim()
    .split(/\s+/)
    .map((pair) => pair.split(",").map(Number))
    .filter((xy) => xy.length === 2 && xy.every(Number.isFinite));
}

function protoMorphWritePoints(pts) {
  return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

function protoMorphResample(pts, n) {
  if (!pts.length || !n) return null;
  if (pts.length === n) return pts;
  if (pts.length === 1 || n === 1) return Array.from({ length: n }, () => pts[0].slice());
  return Array.from({ length: n }, (_, j) => {
    const f = (j * (pts.length - 1)) / (n - 1);
    const a = Math.floor(f);
    const b = Math.min(pts.length - 1, a + 1);
    const t = f - a;
    return [protoMorphLerp(pts[a][0], pts[b][0], t), protoMorphLerp(pts[a][1], pts[b][1], t)];
  });
}

function protoMorphFamilyOf(key) {
  const cut = key.lastIndexOf("|");
  return { family: key.slice(0, cut), part: key.slice(cut + 1) };
}

function protoMorphAddFamily(map, key, geo) {
  const { family, part } = protoMorphFamilyOf(key);
  const [x, y, w, h] = geo;
  const cur = map.get(family) || { x, w, top: y, bottom: y + h, total: false };
  cur.top = Math.min(cur.top, y);
  cur.bottom = Math.max(cur.bottom, y + h);
  if (!part) cur.total = true;
  map.set(family, cur);
}

function protoMorphSnap(svg) {
  const items = new Map();
  const families = new Map();
  svg.querySelectorAll("[data-m]").forEach((el) => {
    const key = el.getAttribute("data-m");
    const tag = el.tagName.toLowerCase();
    const item = { el, tag };
    if (el.hasAttribute("data-g")) {
      const read = protoMorphReadGeo(el);
      if (!read) return;
      item.geo = el.__morphGeo ? el.__morphGeo.slice() : read.geo;
      item.round = read.round;
      protoMorphAddFamily(families, key, item.geo);
    } else if (tag === "polyline" || tag === "polygon") {
      item.pts = protoMorphReadPoints(el.getAttribute("points"));
    } else {
      item.attrs = {};
      PROTO_MORPH_ATTRS.forEach((name) => {
        if (!el.hasAttribute(name)) return;
        const v = parseFloat(el.getAttribute(name));
        if (Number.isFinite(v)) item.attrs[name] = v;
      });
    }
    items.set(key, item);
  });
  return { items, families };
}

function protoMorphStop() {
  if (!protoMorph) return;
  cancelAnimationFrame(protoMorph.raf);
  protoMorph = null;
}

function protoMorphStart(oldSvg) {
  const snap = protoMorphSnap(oldSvg);
  protoMorphStop();
  if (!snap.items.size) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  protoMorph = { snap, old: oldSvg, svg: null, start: 0, raf: 0, waits: 0, tracks: [], layer: null };
  const m = protoMorph;
  queueMicrotask(() => {
    if (protoMorph === m) protoMorphTick(performance.now());
  });
}

function protoMorphBarPath(geo, round) {
  const [x, y, w, h] = geo;
  return round ? protoBarPath(x, y, w, h) : protoBarBlock(x, y, w, h);
}

function protoMorphBind(m, svg) {
  m.svg = svg;
  m.tracks = [];
  svg.classList.add("is-morph");
  const { items, families } = m.snap;
  const live = [...svg.querySelectorAll("[data-m]")];
  const fresh = new Map();
  live.forEach((el) => {
    if (!el.hasAttribute("data-g")) return;
    const read = protoMorphReadGeo(el);
    if (read) protoMorphAddFamily(fresh, el.getAttribute("data-m"), read.geo);
  });
  const flipped = (family) => {
    const was = families.get(family);
    const now = fresh.get(family);
    return Boolean(was && now && was.total !== now.total);
  };
  const seen = new Set();
  live.forEach((el) => {
    const key = el.getAttribute("data-m");
    const tag = el.tagName.toLowerCase();
    const from = items.get(key);
    seen.add(key);
    if (el.hasAttribute("data-g")) {
      const read = protoMorphReadGeo(el);
      if (!read) return;
      const to = read.geo;
      let start = from?.geo;
      if (!start) {
        const { family } = protoMorphFamilyOf(key);
        const was = families.get(family);
        const now = fresh.get(family);
        if (flipped(family) && now.bottom > now.top) {
          const span = was.bottom - was.top;
          const k = span / (now.bottom - now.top);
          start = [was.x, was.top + (to[1] - now.top) * k, was.w, to[3] * k];
        } else {
          start = [to[0], to[1] + to[3], to[2], 0];
        }
      }
      m.tracks.push({ el, type: "geo", from: start, to, round: read.round, final: el.getAttribute("d") });
      return;
    }
    if (tag === "polyline" || tag === "polygon") {
      const final = el.getAttribute("points");
      const to = protoMorphReadPoints(final);
      const start = from?.pts ? protoMorphResample(from.pts, to.length) : null;
      if (start) m.tracks.push({ el, type: "points", from: start, to, final });
      else m.tracks.push({ el, type: "fade-in" });
      return;
    }
    if (from?.attrs) {
      const pairs = [];
      PROTO_MORPH_ATTRS.forEach((name) => {
        if (!(name in from.attrs) || !el.hasAttribute(name)) return;
        const raw = el.getAttribute(name);
        const to = parseFloat(raw);
        if (Number.isFinite(to) && to !== from.attrs[name]) pairs.push({ name, from: from.attrs[name], to, raw });
      });
      if (pairs.length) m.tracks.push({ el, type: "attrs", pairs });
      return;
    }
    if (PROTO_MORPH_FADE.has(tag)) m.tracks.push({ el, type: "fade-in" });
  });
  const ghosts = [];
  items.forEach((item, key) => {
    if (seen.has(key)) return;
    if (item.geo) {
      if (flipped(protoMorphFamilyOf(key).family)) return;
      const [x, y, w, h] = item.geo;
      ghosts.push({ item, type: "geo", from: item.geo, to: [x, y + h, w, 0], round: item.round });
      return;
    }
    if (PROTO_MORPH_FADE.has(item.tag)) ghosts.push({ item, type: "fade-out" });
  });
  if (!ghosts.length) return;
  const layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  layer.setAttribute("class", "astral-morph-ghosts");
  layer.setAttribute("aria-hidden", "true");
  const anchor = svg.querySelector(".astral-hit-group, .astral-chart-grow");
  if (anchor) anchor.parentNode.insertBefore(layer, anchor);
  else svg.appendChild(layer);
  m.layer = layer;
  ghosts.forEach((ghost) => {
    const el = ghost.item.el.cloneNode(true);
    el.removeAttribute("data-m");
    el.removeAttribute("tabindex");
    el.classList.add("astral-morph-ghost");
    layer.appendChild(el);
    m.tracks.push({ ...ghost, el });
  });
}

function protoMorphPaint(m, t) {
  m.tracks.forEach((track) => {
    const { el } = track;
    if (track.type === "geo") {
      const geo = track.from.map((v, i) => protoMorphLerp(v, track.to[i], t));
      if (!el.classList.contains("astral-morph-ghost")) el.__morphGeo = geo;
      el.setAttribute("d", protoMorphBarPath(geo, track.round));
    } else if (track.type === "points") {
      el.setAttribute(
        "points",
        protoMorphWritePoints(
          track.from.map((xy, i) => [
            protoMorphLerp(xy[0], track.to[i][0], t),
            protoMorphLerp(xy[1], track.to[i][1], t),
          ])
        )
      );
    } else if (track.type === "attrs") {
      track.pairs.forEach((pair) => {
        el.setAttribute(pair.name, protoMorphLerp(pair.from, pair.to, t).toFixed(1));
      });
    } else if (track.type === "fade-in") {
      el.style.opacity = String(t);
    } else if (track.type === "fade-out") {
      el.style.opacity = String(1 - t);
    }
  });
}

function protoMorphFinish(m) {
  m.tracks.forEach((track) => {
    const { el } = track;
    if (track.type === "geo") {
      delete el.__morphGeo;
      if (track.final) el.setAttribute("d", track.final);
    } else if (track.type === "points") {
      el.setAttribute("points", track.final);
    } else if (track.type === "attrs") {
      track.pairs.forEach((pair) => el.setAttribute(pair.name, pair.raw));
    } else if (track.type === "fade-in") {
      el.style.opacity = "";
    }
  });
  m.layer?.remove();
  m.svg?.classList.remove("is-morph");
}

function protoMorphTick(now) {
  const m = protoMorph;
  if (!m) return;
  const svg = document.querySelector("#astral-fs .astral-chart");
  if (!svg) {
    protoMorph = null;
    return;
  }
  if (svg === m.old) {
    m.waits += 1;
    if (m.waits > 4) {
      protoMorph = null;
      return;
    }
    m.raf = requestAnimationFrame(protoMorphTick);
    return;
  }
  if (svg !== m.svg) protoMorphBind(m, svg);
  if (!m.start) m.start = now;
  const raw = Math.min(1, Math.max(0, (now - m.start) / PROTO_MORPH_MS));
  protoMorphPaint(m, protoMorphEase(raw));
  if (raw >= 1) {
    protoMorphFinish(m);
    protoMorph = null;
    return;
  }
  m.raf = requestAnimationFrame(protoMorphTick);
}

function protoBarBlock(x, y, w, h) {
  const left = x.toFixed(1);
  const right = (x + Math.max(w, 0)).toFixed(1);
  const top = y.toFixed(1);
  const bottom = (y + Math.max(h, 0)).toFixed(1);
  return `M${left},${bottom}V${top}H${right}V${bottom}Z`;
}

function protoBarPath(x, y, w, h) {
  const width = Math.max(w, 0);
  const height = Math.max(h, 0);
  const r = Math.min(3, width / 2, height);
  const left = x.toFixed(1);
  const right = (x + width).toFixed(1);
  const top = y.toFixed(1);
  const bottom = (y + height).toFixed(1);
  if (r < 0.6) {
    return `M${left},${bottom}V${top}H${right}V${bottom}Z`;
  }
  const rx = r.toFixed(1);
  const topLeft = (x + r).toFixed(1);
  const topRight = (x + width - r).toFixed(1);
  const neck = (y + r).toFixed(1);
  return `M${left},${bottom}V${neck}Q${left},${top} ${topLeft},${top}H${topRight}Q${right},${top} ${right},${neck}V${bottom}Z`;
}

function protoBarChart(points, label, options = {}) {
  const source = points || [];
  const dual = Boolean(options.seriesStack)
    ? false
    : Boolean(options.dual) || source.some((p) => p.last != null || p.lastLabel);
  const view = protoBarFlowView(source, dual);
  const rows = view.points;
  const { w, h } = protoChartBox();
  const pad = { l: 52, r: 16, t: 32, b: 36 };
  const scale = protoChartScale(rows, w, h, pad);
  const gap = scale.innerW / Math.max(1, rows.length);
  const paired = view.paired;
  const barClass = view.outgoing || options.outgoing ? "astral-bar-out" : "astral-bar";
  const picked = protoChartPoint();
  const queried = protoChartQueryTimes(label);
  const alerted = protoChartAlertTimes(label);
  const bars = view.empty
    ? ""
    : rows
        .map((p, i) => {
          const x = pad.l + i * gap;
          const bw = gap * (paired ? 0.34 : 0.64);
          const x1 = x + gap * (paired ? 0.12 : 0.18);
          const x2 = x + gap * 0.5;
          const on = Boolean(picked && picked.chart === label && picked.time === p.label);
          const mark = queried.has(p.label);
          const flag = alerted.has(p.label);
          const bar = (value, quality, cls, bx) => {
            const side = bx === x1 ? "in" : "out";
            if (value == null) {
              return `<rect class="astral-gap" data-m="${i}|${side}|gap" x="${bx.toFixed(1)}" y="${(h - pad.b - 8).toFixed(
                1
              )}" width="${bw.toFixed(1)}" height="8" />`;
            }
            const bh = Math.max((value / scale.max) * scale.innerH, 1);
            const y = pad.t + scale.innerH - bh;
            return `<path class="${cls}${
              quality === "estimated" ? " is-est" : ""
            }" data-m="${i}|${side}|" data-g="${protoMorphGeoAttr(bx, y, bw, bh, true)}" d="${protoBarPath(
              bx,
              y,
              bw,
              bh
            )}" />`;
          };
          const stackBar = (segments, cls, bx, outgoing) => {
            const side = bx === x1 ? "in" : "out";
            const visible = (segments || []).filter((slice) => slice.value > 0);
            if (!visible.length) return "";
            let yBottom = h - pad.b;
            return visible
              .map((slice, si) => {
                const bh = (slice.value / scale.max) * scale.innerH;
                if (bh < 0.4) return "";
                const y = yBottom - bh;
                const top = si === visible.length - 1;
                const d = top ? protoBarPath(bx, y, bw, bh) : protoBarBlock(bx, y, bw, bh);
                yBottom = y;
                return `<path class="${cls} is-stack${
                  slice.quality === "estimated" ? " is-est" : ""
                }" style="--stack-fill:${protoSliceFill(slice, outgoing)}" data-m="${i}|${side}|${escapeHtml(
                  slice.id || `s${si}`
                )}" data-g="${protoMorphGeoAttr(bx, y, bw, bh, top)}" d="${d}" />`;
              })
              .join("");
          };
          const slicing = Boolean(options.seriesStack) || protoChartStackSlices().length > 0;
          const inMarkup = slicing
            ? p.value == null
              ? bar(null, p.quality, barClass, x1)
              : `<g class="astral-bar-stack">${stackBar(
                  p.stacks,
                  barClass,
                  x1,
                  Boolean(view.outgoing || options.outgoing)
                )}</g>`
            : bar(p.value, p.quality, barClass, x1);
          const outMarkup = paired
            ? slicing
              ? p.last == null
                ? bar(null, p.lastQuality, "astral-bar-out", x2)
                : `<g class="astral-bar-stack">${stackBar(p.lastStacks, "astral-bar-out", x2, true)}</g>`
              : bar(p.last, p.lastQuality, "astral-bar-out", x2)
            : "";
          const inCap = protoBarCap(x1 + bw / 2, p.value, scale, pad, h);
          const outCap = paired ? protoBarCap(x2 + bw / 2, p.last, scale, pad, h) : null;
          const tall = [inCap, outCap].filter(Boolean).sort((a, b) => a.y - b.y)[0];
          const glyphs = tall && (mark || flag) ? protoCapGlyphs(tall.x, tall.y, mark, flag) : "";
          return `
        <g class="astral-hit-group${on ? " is-picked" : ""}${mark ? " is-query" : ""}${
            flag ? " is-alert" : ""
          }" style="--bar-i:${i}">
          ${inMarkup}
          ${outMarkup}
          ${glyphs}
          <rect
            class="astral-hit"
            x="${x.toFixed(1)}"
            y="${pad.t}"
            width="${gap.toFixed(1)}"
            height="${scale.innerH.toFixed(1)}"
            tabindex="0"
            role="img"
            aria-label="${escapeHtml(
              `${p.label}, ${p.value == null ? "no reading" : protoFormatReading(p.value, p.unit || "kWh")}${
                p.quality === "estimated" && p.value != null ? ", estimated" : ""
              }${
                paired && p.lastQuality === "estimated" && p.last != null ? ", outgoing estimated" : ""
              }${
                p.note && options.seriesStack ? `. ${protoHoverAriaNote(p)}` : ""
              }${mark ? ". Query" : ""}${flag ? ". Alert" : ""}`
            )}"
            data-proto-hit
            ${protoHitAttrs(p)}
          />
          ${protoBarFocusMarkup(p, scale, pad, h, x1, x2, bw, paired)}
        </g>
      `;
        })
        .join("");
  const svg = `
    <svg class="astral-chart${protoChartDrawClass(label, rows)}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMinYMin meet">
      ${protoEstDefs()}
      ${protoChartAxes(rows, scale, w, h, pad, scale.xBar)}
      ${bars}
    </svg>
  `;
  return protoChartWrap(svg, label, dual && !options.seriesStack, view.empty, {
    stackKey: !options.seriesStack && protoChartStackSlices().length > 0,
  });
}

function protoLinePointXy(scale, point, index) {
  return `${scale.x(index).toFixed(1)},${scale.y(point.value).toFixed(1)}`;
}

function protoLinePath(track, scale) {
  const points = track.points || [];
  const runs = [];
  let cur = null;
  points.forEach((point, i) => {
    if (point.value == null) {
      cur = null;
      return;
    }
    const xy = protoLinePointXy(scale, point, i);
    if (!cur) {
      cur = { est: point.quality === "estimated", pts: [xy] };
      runs.push(cur);
      return;
    }
    const est = point.quality === "estimated";
    if (cur.est !== est) {
      cur = { est, pts: [cur.pts[cur.pts.length - 1], xy] };
      runs.push(cur);
      return;
    }
    cur.pts.push(xy);
  });
  return runs
    .filter((run) => run.pts.length > 1)
    .map((run, k) => {
      const dash = run.est ? PROTO_LINE_EST_DASH : "";
      const dashStyle = dash
        ? `;stroke-dasharray:${escapeHtml(dash)}`
        : ";stroke-dasharray:none";
      return `<polyline class="astral-chart-line${run.est ? " is-est" : ""}" data-m="${escapeHtml(
        `${track.id || ""}|run|${k}`
      )}" fill="none" style="stroke:${escapeHtml(
        track.color
      )}${dashStyle}" points="${run.pts.join(" ")}" />`;
    })
    .join("");
}

function protoLinePointOn(picked, track, point, chart) {
  if (!picked || picked.chart !== chart || picked.time !== point.label) return false;
  if (!picked.meterId) return true;
  if (picked.meterId === track.id) return true;
  if (track.meter?.id === picked.meterId) return true;
  return (track.meters || []).some((meter) => meter.id === picked.meterId);
}

function protoLineTrackOwns(track, meterId) {
  const id = String(meterId || "");
  if (!id || !track) return false;
  if (track.id === id) return true;
  if (track.meter?.id === id) return true;
  return (track.meters || []).some((meter) => meter.id === id);
}

function protoLinePointAlert(track, time) {
  if (!time) return false;
  return protoAlertsOnThisGraph().some(
    (item) =>
      !protoAlertResolved(item) &&
      protoMarkSitsAt(item.point, time) &&
      protoLineTrackOwns(track, item.meterId)
  );
}

function protoLinePointQuery(track, time) {
  if (!time) return false;
  return protoQueriesOnThisGraph().some((row) => protoLineRowOnTrack(track, row, time));
}

function protoLineRowOnTrack(track, row, time) {
  if (!row || !protoMarkSitsAt(row.point, time)) return false;
  if (row.meterId) return protoLineTrackOwns(track, row.meterId);
  if (row.site) return String(track.ref || "") === String(row.site);
  return false;
}

function protoLineRowHasOwner(list, row, time) {
  return (list || []).some((track) => protoLineRowOnTrack(track, row, time));
}

function protoLineTallestTrack(list, index) {
  let best = null;
  let top = -Infinity;
  (list || []).forEach((track) => {
    const value = Number(track?.points?.[index]?.value);
    if (!Number.isFinite(value) || value <= top) return;
    top = value;
    best = track;
  });
  return best;
}

function protoLineLooseAt(list, time, kind) {
  const rows =
    kind === "alert"
      ? protoAlertsOnThisGraph().map((item) => ({
          point: item.point,
          meterId: item.meterId,
          site: item.meter,
        }))
      : protoQueriesOnThisGraph();
  return rows.some((row) => row.point === time && !protoLineRowHasOwner(list, row, time));
}

function protoLineChart(tracks, label, options = {}) {
  const list = (tracks || []).filter((track) => (track.points || []).length);
  if (!list.length) return "";
  const { w, h } = protoChartBox();
  const pad = { l: 52, r: 16, t: 32, b: 36 };
  const points = list[0].points;
  const finger = list.flatMap((track) =>
    (track.points || []).map((p) => ({ ...p, label: `${track.id || ""}:${p.label}` }))
  );
  const scale = protoTracksScale(list, w, h, pad);
  const picked = protoChartPoint();
  const lines = list.map((track) => protoLinePath(track, scale)).join("");
  const hits = list
    .map((track) =>
      (track.points || [])
        .map((p, i) => {
          if (p.value == null) return "";
          const cx = scale.x(i);
          const cy = scale.y(p.value);
          const on = protoLinePointOn(picked, track, p, label);
          const tallest = protoLineTallestTrack(list, i) === track;
          const flag =
            protoLinePointAlert(track, p.label) ||
            (tallest && protoLineLooseAt(list, p.label, "alert"));
          const mark =
            !flag &&
            (protoLinePointQuery(track, p.label) ||
              (tallest && protoLineLooseAt(list, p.label, "query")));
          const hit = {
            ...p,
            meterId: track.id,
            meterRef: track.ref,
            meterColor: track.color,
          };
          const paint = escapeHtml(track.color || "#000");
          const est = p.quality === "estimated" && !mark && !flag;
          const point = flag
            ? protoAlertStar(cx, cy, 5, 2.1, "is-line", track.color)
            : `<circle class="astral-point is-line${est ? " is-est" : ""}" data-m="${escapeHtml(
                `${track.id || ""}|pt|${i}`
              )}" cx="${cx.toFixed(
                1
              )}" cy="${cy.toFixed(1)}" r="4" style="color:${paint};fill:${
                est ? "#fff" : paint
              };stroke:${paint}" />`;
          return `
            <g class="astral-hit-group is-line${on ? " is-picked" : ""}${
              mark ? " is-query" : ""
            }${flag ? " is-alert" : ""}" style="color:${paint}">
              <circle
                class="astral-hit is-point"
                cx="${cx.toFixed(1)}"
                cy="${cy.toFixed(1)}"
                r="10"
                tabindex="0"
                role="img"
                aria-label="${escapeHtml(
                  `${p.label}, ${track.ref}, ${protoFormatReading(p.value, p.unit || "kWh")}${
                    p.quality === "estimated" ? ", estimated" : ""
                  }${mark ? ". Query" : ""}${flag ? ". Alert" : ""}`
                )}"
                data-proto-hit
                ${protoHitAttrs(hit)}
              />
              ${point}
            </g>
          `;
        })
        .join("")
    )
    .join("");
  const svg = `
    <svg class="astral-chart${protoChartDrawClass(label, finger)}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMinYMin meet">
      ${protoEstDefs()}
      ${protoChartAxes(points, scale, w, h, pad, scale.x)}
      <g class="astral-chart-grow">
      ${lines}
      ${hits}
      </g>
    </svg>
  `;
  return protoChartWrap(svg, label, Boolean(options.dual));
}

function protoChartEmpty(seedMeters) {
  const name = protoPaneChartLabel(false);
  if (protoConsumptionUnitsMixed(seedMeters)) {
    return protoChartWrap(protoChartMixChoice(), name, false, true);
  }
  const seed = (seedMeters || []).find(Boolean);
  const series = seed ? protoSiteSeries(seed) : [];
  const unit = protoMeasureUnit(seedMeters);
  const points = series.length
    ? series.map((p) => ({ label: p.label, unit: p.unit || unit }))
    : [{ label: protoChartWhen(), unit }];
  const { w, h } = protoChartBox();
  const pad = { l: 52, r: 16, t: 32, b: 36 };
  const scale = protoChartScale(points, w, h, pad);
  const emptyPoints = points.map((item) => ({ ...item, unit }));
  const svg = `
    <svg class="astral-chart${protoChartDrawClass(name, emptyPoints)}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMinYMin meet" role="img" aria-label="${escapeHtml(
      name
    )}">
      ${protoChartAxes(emptyPoints, scale, w, h, pad, scale.xBar)}
    </svg>
  `;
  return protoChartWrap(svg, name, false, true);
}

function protoPaneChart(meters, all) {
  const list = meters || [];
  if (!list.length) return protoChartEmpty(all);
  const dualFlow = protoMetersFlow(list);
  const dual = dualFlow.channel === "all" && dualFlow.both;
  return protoPaintPaneChart({
    tracks: protoMeterTracks(list, all),
    points: protoMetersSeries(list, dualFlow.channel),
    meters: list,
    all,
    dual,
    outgoing: !dual && dualFlow.channel === "out",
  });
}

function protoTracksMissing(tracks) {
  const list = tracks || [];
  if (!list.length) return 0;
  const n = list[0]?.points?.length || 0;
  let missing = 0;
  for (let i = 0; i < n; i += 1) {
    if (list.some((track) => !track.points[i] || track.points[i].value == null)) missing += 1;
  }
  return missing;
}

function protoChartMissing(meters, all) {
  const list = meters || [];
  if (!list.length) return 0;
  if (protoChartIsIndividual()) return protoTracksMissing(protoMeterTracks(list, all));
  const flow = protoMetersFlow(list);
  const points = protoMetersSeries(list, flow.channel);
  const dual = flow.channel === "all" && flow.both;
  return points.filter((p) =>
    dual ? p.quality === "missing" || p.lastQuality === "missing" : p.quality === "missing"
  ).length;
}

function protoStatus(status) {
  if (status === "gaps") return "Missing data";
  if (status === "stale") return "Not sending";
  return "Sending";
}

function protoStateCells(words, fallback) {
  const list = (words && words.length ? words : [fallback || "Sending"]).filter(Boolean);
  return `<div class="astral-state-list">${list.map(protoStatePill).join("")}</div>`;
}

function protoSelectOpen() {
  return String(store.prototypeSelectOpen || "");
}

let protoMenuSeen = new Set();
let protoMenuEnter = new Set();

function protoOpenMenuKeys() {
  const keys = [];
  const select = protoSelectOpen();
  if (select) keys.push(`select:${select}`);
  if (store.prototypeDateOpen) keys.push("date");
  if (store.prototypeExportOpen) keys.push("export");
  if (store.prototypeAccountOpen) keys.push("account");
  if (store.prototypeNoticeOpen) keys.push("notice");
  if (store.prototypeTreeFilterOpen) keys.push("astral-tree-filter-menu");
  if (store.prototypePaneFilterOpen) keys.push("astral-pane-filter-menu");
  if (store.prototypeCompareFilterOpen) keys.push("astral-compare-filter-menu");
  if (store.prototypeDownloadFilterOpen) keys.push("astral-download-filter-menu");
  if (store.prototypeUserRoleFilterOpen) keys.push("astral-user-filter-menu");
  if (store.prototypeAckOpen) keys.push(`ack:${store.prototypeAckOpen}`);
  if (store.prototypeQueryMore) keys.push(`more:${store.prototypeQueryMore}`);
  if (store.prototypePointTagOpen) keys.push("astral-point-tag-menu");
  if (store.prototypeUserMenu) keys.push(`people:${store.prototypeUserMenu}`);
  if (store.prototypeReportCalOpen) keys.push("report-cal");
  return keys;
}

function protoMenuEnterClass(key) {
  return key && protoMenuEnter.has(key) ? " is-enter" : "";
}

function protoSyncMenuEnter() {
  const next = new Set(protoOpenMenuKeys());
  protoMenuEnter = new Set([...next].filter((key) => !protoMenuSeen.has(key)));
  protoMenuSeen = next;
}

function protoDetailTitle(name, meta) {
  return `
    <div class="astral-detail-title">
      <h3>${escapeHtml(name)}</h3>
      ${meta ? `<p class="astral-muted">${escapeHtml(meta)}</p>` : ""}
    </div>
  `;
}

function protoFoldClip(open, id, inner) {
  return `
    <div
      class="astral-fold-clip"
      ${id ? `id="${escapeHtml(id)}"` : ""}
      aria-hidden="${open ? "false" : "true"}"
      ${open ? "" : "inert"}
    >
      ${inner}
    </div>
  `;
}

function protoSyncFoldClip(root, open) {
  if (!root) return;
  root.classList.toggle("is-open", open);
  const btn = root.querySelector(
    ":scope > .astral-people-fold-head, :scope > .astral-meter-row-head, :scope > .astral-meter-fold-head"
  );
  btn?.setAttribute("aria-expanded", open ? "true" : "false");
  const clip = root.querySelector(":scope > .astral-fold-clip");
  if (!clip) return;
  clip.setAttribute("aria-hidden", open ? "false" : "true");
  clip.toggleAttribute("inert", !open);
}

function protoPinClose() {
  return protoIconBtn("close", "Close", 'data-proto-hit="clear"', { tipClass: "astral-query-pin-close" });
}

function protoCloseModal(kind) {
  if (kind === "report") {
    setProto(protoReportEditClear());
    return;
  }
  if (kind === "invite") {
    setProto({ prototypeUserForm: false, prototypeUserDrafts: [""] });
    return;
  }
  if (kind === "renew") {
    setProto(protoRenewClear());
    return;
  }
  if (kind === "compare") {
    setProto({ prototypeCompareOpen: false, ...protoCompareModalReset() });
    return;
  }
  if (kind === "team") {
    setProto({
      prototypeTeamForm: false,
      prototypeTeamDraftName: "",
      prototypeTeamDraftDepartment: "",
      prototypeTeamDraftPeople: [],
      prototypeTeamPeopleQuery: "",
    });
    return;
  }
  if (kind === "company") {
    setProto({
      prototypeCompanyForm: false,
      prototypeCompanyDraftName: "",
      prototypeCompanyDraftType: "customer",
      prototypeCompanyNameError: false,
    });
    return;
  }
  setProto({ prototypeDateCustomOpen: false, prototypeDateOpen: false });
}

function protoQueryPinHead(titleHtml, extraHtml) {
  return `
    <div class="astral-query-pin-head">
      ${titleHtml}
      <div class="astral-query-pin-tools">
        ${extraHtml || ""}
        ${protoPinClose()}
      </div>
    </div>
  `;
}

function protoSelect(config) {
  const id = config.id;
  const open = protoSelectOpen() === id;
  const menuId = `astral-select-${String(id).replace(/[^a-z0-9_-]+/gi, "-")}`;
  const multi = Boolean(config.multi);
  const values = multi
    ? (Array.isArray(config.values) ? config.values : []).map(String)
    : [];
  const value = config.value ?? "";
  const query = String(config.search?.value || "").trim().toLowerCase();
  const allOptions = config.options || [];
  const visible = allOptions.filter((item) => {
    if (!query) return true;
    const hay = `${item.label || ""} ${item.search || ""}`.toLowerCase();
    return hay.includes(query);
  });
  const picked = allOptions.find((item) =>
    multi ? values.includes(String(item.value)) : item.value === value
  );
  const pickedAll = multi
    ? allOptions.filter((item) => values.includes(String(item.value)))
    : picked
      ? [picked]
      : [];
  let text = config.placeholder || "";
  if (multi) {
    if (config.allLabel && pickedAll.length && pickedAll.length === allOptions.length) {
      text = config.allLabel;
    } else if (pickedAll.length === 1) {
      text = pickedAll[0].label || text;
    } else if (pickedAll.length > 1) {
      text = `${pickedAll.length} ${config.countLabel || "selected"}`;
    }
  } else if (picked?.label) {
    text = picked.label;
  }
  const labelled = config.label && config.label !== text && !config.caption;
  const disabled = Boolean(config.disabled);
  const extra = [
    config.wide ? "is-wide" : "",
    config.kind ? `is-${config.kind}` : "",
    config.up ? "is-up" : "",
    multi ? "is-multi" : "",
    config.search ? "has-search" : "",
    open && !disabled && protoMenuEnter.has(`select:${id}`) ? "is-enter" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const options = visible
    .map((item) => {
      const on = multi ? values.includes(String(item.value)) : item.value === value;
      const inner =
        item.html ||
        (item.note
          ? `<span class="astral-select-option-copy"><span>${escapeHtml(
              item.label
            )}</span><span class="astral-muted">${escapeHtml(item.note)}</span></span>`
          : `<span>${escapeHtml(item.label)}</span>`);
      const box = multi
        ? `<span class="astral-check${on ? " is-on" : ""}" aria-hidden="true"></span>`
        : "";
      return `
        <button
          type="button"
          role="option"
          class="${on ? "is-on" : ""}"
          aria-selected="${on ? "true" : "false"}"
          data-proto-select-option="${escapeHtml(id)}"
          data-proto-select-value="${escapeHtml(item.value)}"
        >${box}${inner}</button>
      `;
    })
    .join("");
  const empty = options
    ? ""
    : config.empty
      ? `<p class="astral-muted">${escapeHtml(config.empty)}</p>`
      : "";
  const searchHtml = config.search ? protoSearchField(config.search) : "";
  const hidden = config.name
    ? `<input type="hidden" name="${escapeHtml(config.name)}" value="${escapeHtml(
        multi ? values.join(",") : value
      )}" />`
    : "";
  const face =
    !multi && (pickedAll[0]?.html || picked?.html)
      ? pickedAll[0]?.html || picked.html
      : `<span>${escapeHtml(text)}</span>`;
  const list = `
      <div
        id="${escapeHtml(menuId)}"
        class="astral-select-options"
        role="listbox"
        ${multi ? `aria-multiselectable="true"` : ""}
        aria-label="${escapeHtml(config.label || "Options")}"
      >${options}${empty}</div>
  `;
  const select = `
    <div class="astral-select${extra ? ` ${extra}` : ""}" data-proto-select="${escapeHtml(id)}">
      ${hidden}
      <button
        type="button"
        class="astral-select-btn"
        aria-haspopup="listbox"
        aria-expanded="${open && !disabled ? "true" : "false"}"
        aria-controls="${escapeHtml(menuId)}"
        ${labelled ? `aria-label="${escapeHtml(config.label)}"` : ""}
        ${disabled ? "disabled" : ""}
        data-proto-select-toggle="${escapeHtml(id)}"
      >
        ${face}
        ${protoChevronMark("menu")}
      </button>
      <div
        class="astral-select-menu${open && !disabled ? protoMenuEnterClass(`select:${id}`) : ""}"
        ${open && !disabled ? "" : "hidden"}
      >${searchHtml}${list}</div>
    </div>
  `;
  if (config.tip) return protoIconTip(select, config.tip);
  return select;
}

function protoCompareViewMeters(meters) {
  const list = meters || [];
  const ids = list.map((item) => item.id);
  const picked = new Set(protoReadGraphIds(store.prototypeCompareMeters, ids));
  return list.filter((item) => picked.has(item.id));
}

function protoCompareViewSites(sites) {
  const list = sites || [];
  const ids = list.map((site) => protoSiteId(site)).filter(Boolean);
  const picked = new Set(protoReadGraphIds(store.prototypeCompareSites, ids));
  return list.filter((site) => picked.has(protoSiteId(site)));
}

function protoSiteTracks(sites, all) {
  const pool = all?.length ? all : sites || [];
  return (sites || []).map((site) => {
    const i = Math.max(
      0,
      pool.findIndex((item) => protoSiteId(item) === protoSiteId(site))
    );
    const style = protoLineStyle(i);
    return {
      id: protoSiteId(site),
      ref: site.name,
      color: style.color,
      dash: style.dash,
      meters: site.meters || [],
      points: protoCombineSeries(site.meters, protoSiteSeries),
    };
  });
}

function protoCompareGroupTracks(groups, viewSites) {
  const allowed = new Set((viewSites || []).map((site) => protoSiteId(site)));
  return (groups || [])
    .map((group, i) => {
      const sites = (group.sites || []).filter((site) => allowed.has(protoSiteId(site)));
      const meters = protoMetersForPane(sites.flatMap((site) => site.meters || []));
      const style = protoLineStyle(i);
      return {
        id: group.id,
        ref: group.name,
        color: style.color,
        dash: style.dash,
        meters,
        points: protoCombineSeries(meters, protoSiteSeries),
      };
    })
    .filter((track) => (track.meters || []).length);
}

function protoTracksToStackPoints(tracks) {
  const list = (tracks || []).filter((track) => (track.points || []).length);
  if (!list.length) return [];
  const n = Math.max(...list.map((track) => track.points.length));
  const unit = list[0].points[0]?.unit || "";
  return Array.from({ length: n }, (_, i) => {
    const label = list.map((track) => track.points[i]?.label).find(Boolean) || "";
    const cells = list.map((track) => ({
      track,
      cell: track.points[i] || { value: null, quality: "missing", unit },
    }));
    const stacks = cells
      .map(({ track, cell }) => ({
        id: track.id,
        name: track.ref,
        color: track.color,
        value: cell.value == null ? 0 : protoRoundReading(Number(cell.value) || 0, 1),
        quality: cell.quality,
      }))
      .filter((slice) => slice.value > 0);
    const present = cells.filter(({ cell }) => cell.value != null);
    const missing = !present.length;
    const estimated = present.some(({ cell }) => cell.quality === "estimated");
    return {
      label,
      value: missing ? null : protoRoundReading(protoStacksSum(stacks), 1),
      quality: missing ? "missing" : estimated ? "estimated" : "actual",
      unit,
      stacks,
      note: protoStacksNote(stacks, unit),
    };
  });
}

function protoToggleSiteSet(value, allIds, currentIds) {
  const view = (currentIds || []).filter((id) => allIds.includes(id));
  let next = view.includes(value) ? view.filter((id) => id !== value) : [...view, value];
  next = allIds.filter((id) => next.includes(id));
  const same = next.length === view.length && next.every((id) => view.includes(id));
  return same ? null : next;
}

function protoToggleGroupSite(value) {
  if (protoCompareOn() && protoCompareLevel() === "group") {
    const all = protoCompareBundle().sites || [];
    const ids = all.map((site) => protoSiteId(site)).filter(Boolean);
    const next = protoToggleSiteSet(
      value,
      ids,
      protoCompareViewSites(all).map((site) => protoSiteId(site))
    );
    if (!next) return;
    setProto({
      prototypeCompareSites: protoStoreGraphIds(next),
      prototypeChartPoint: null,
    });
    protoRestoreFocus(`#astral-fs [data-proto-site-pill="${CSS.escape(value)}"]`);
    return;
  }
  const group = protoGroup(store.prototypeGroup);
  const all = group?.sites || [];
  const ids = protoGroupSiteIds(group);
  const next = protoToggleSiteSet(
    value,
    ids,
    protoGroupViewSites(group).map((site) => protoSiteId(site))
  );
  if (!next) return;
  setProto({
    prototypeGroupSites: protoStoreGraphIds(next),
    prototypeChartPoint: null,
  });
  protoRestoreFocus(`#astral-fs [data-proto-site-pill="${CSS.escape(value)}"]`);
}

function protoToggleSiteMeter(value) {
  if (protoCompareOn()) {
    const all = protoCompareBundle().meters || [];
    const ids = all.map((item) => item.id);
    const next = protoToggleSiteSet(
      value,
      ids,
      protoCompareViewMeters(all).map((item) => item.id)
    );
    if (!next) return;
    setProto({
      prototypeCompareMeters: protoStoreGraphIds(next),
      prototypeChartPoint: null,
    });
    protoRestoreFocus(`#astral-fs [data-proto-meter-pill="${CSS.escape(value)}"]`);
    return;
  }
  const site = protoSiteByMeter(store.activePrototypeMeter);
  const ids = protoMetersForPane(site?.meters || []).map((item) => item.id);
  if (!ids.includes(value)) return;
  const next = protoToggleSiteSet(
    value,
    ids,
    protoSiteMeterIds(site).filter((id) => ids.includes(id))
  );
  if (!next) return;
  setProto({
    ...protoSiteMeterPatch(next, site, { empty: true }),
    prototypeChartPoint: null,
  });
  protoRestoreFocus(`#astral-fs [data-proto-meter-pill="${CSS.escape(value)}"]`);
}

function protoPickSelect(id, value) {
  if (String(id).startsWith("meter-hours-status-") || String(id).startsWith("meter-hours-profile-") || String(id).startsWith("meter-tou-profile-")) {
    protoPickMeterProfileSelect(id, value);
    return;
  }
  if (id === "preview-company") {
    protoSetCompany(value);
    return;
  }
  if (id === "preview-flow") {
    protoSetFlow(value);
    return;
  }
  if (id === "chart-view") {
    setProto({
      prototypeSelectOpen: "",
      prototypeChartView: value === "individual" ? "individual" : "total",
      prototypeChartPoint: null,
    });
    return;
  }
  if (id === "chart-style") {
    setProto({
      prototypeSelectOpen: "",
      prototypeChartStyle: value === "line" ? "line" : "bar",
      prototypeChartPoint: null,
    });
    return;
  }
  if (id === "user-invite-role") {
    setProto({
      prototypeSelectOpen: "",
      prototypeUserInviteRole: protoUserRoleId(value),
    });
    return;
  }
  if (id === "team-company") {
    if (!protoCanPickTeamCompany()) return;
    setProto({
      prototypeSelectOpen: "",
      prototypeTeamForm: true,
      prototypeTeamDraftCompany: protoTeamCompanyId(value),
    });
    return;
  }
  if (id === "company-type") {
    if (!protoSeesCompanies()) return;
    setProto({
      prototypeSelectOpen: "",
      prototypeCompanyForm: true,
      prototypeCompanyDraftType: protoCompanyTypeId(value),
    });
    return;
  }
  if (id === "team-people") {
    if (!protoCanManagePeople()) return;
    const cur = protoTeamDraftPeople();
    const next = cur.includes(value) ? cur.filter((item) => item !== value) : [...cur, value];
    setProto({
      prototypeSelectOpen: "team-people",
      prototypeTeamForm: true,
      prototypeTeamDraftPeople: next,
    });
    protoRestoreFocus(
      `#astral-fs [data-proto-select-option="team-people"][data-proto-select-value="${CSS.escape(
        value
      )}"]`
    );
    return;
  }
  if (id === "report-people") {
    const draft = protoReportDraft();
    if (!draft) return;
    protoReportPatchDraft({ people: protoReportToggleIn(draft.people, value) }, "report-people");
    protoRestoreFocus(
      `#astral-fs [data-proto-select-option="report-people"][data-proto-select-value="${CSS.escape(
        value
      )}"]`
    );
    return;
  }
  if (id === "report-sites" || id === "report-delivery") {
    const draft = protoReportDraft();
    if (!draft) return;
    const key = id === "report-sites" ? "sites" : "delivery";
    protoReportPatchDraft({ [key]: protoReportToggleIn(draft[key], value) }, id);
    protoRestoreFocus(
      `#astral-fs [data-proto-select-option="${id}"][data-proto-select-value="${CSS.escape(value)}"]`
    );
    return;
  }
  if (id === "report-site" || id === "report-period" || id === "report-basis" || id === "report-silence") {
    const key = { "report-site": "site", "report-period": "period", "report-basis": "basis", "report-silence": "hours" }[id];
    protoReportPatchDraft({ [key]: id === "report-silence" ? Number(value) : value });
    protoRestoreFocus(`#astral-fs [data-proto-select="${id}"] .astral-select-btn`);
    return;
  }
  if (id === "org-country") {
    if (!protoCanManagePeople()) return;
    protoPatchOrg({ country: protoOrgCountryId(value) }, false);
    setProto({
      prototypeSelectOpen: "",
    });
    return;
  }
  if (id === "profile-discipline") {
    setProto({
      prototypeSelectOpen: "",
      prototypeProfileDraftDiscipline: protoProfileDisciplineId(value),
    });
    return;
  }
  if (id.startsWith("user-role:")) {
    const personId = id.slice("user-role:".length);
    if (personId === "me") {
      const role = protoUserRoleId(value);
      const company = protoCompany();
      const access = company.access.includes(role) ? role : protoAccessId();
      setProto({
        prototypeSelectOpen: "",
        prototypeMeRole: role,
        prototypeAccess: access,
        prototypeUserForm: protoCanManagePeople() ? store.prototypeUserForm : false,
        prototypeUserMenu: protoCanManagePeople() ? store.prototypeUserMenu : "",
      });
      return;
    }
    if (!protoCanManagePeople()) return;
    setProto({
      prototypeSelectOpen: "",
      prototypeInvitedUsers: protoInvitedUsers().map((item) =>
        item.id === personId ? { ...item, role: protoUserRoleId(value) } : item
      ),
    });
    return;
  }
  if (id.startsWith("user-team:")) {
    if (!protoCanManagePeople()) return;
    const personId = id.slice("user-team:".length);
    if (!protoUserPeople().some((person) => person.id === personId)) return;
    setProto({
      prototypeSelectOpen: id,
      prototypeTeams: protoTeams().map((team) => {
        const has = team.people.includes(personId);
        const on = team.id === value ? !has : has;
        const people = on
          ? [...new Set([...team.people, personId])]
          : team.people.filter((item) => item !== personId);
        return { ...team, people };
      }),
    });
    protoRestoreFocus(
      `#astral-fs [data-proto-select-option="${CSS.escape(id)}"][data-proto-select-value="${CSS.escape(
        value
      )}"]`
    );
    return;
  }
  if (id.startsWith("user-sites:")) {
    if (!protoCanManagePeople()) return;
    const personId = id.slice("user-sites:".length);
    if (!protoUserPeople().some((person) => person.id === personId)) return;
    const all = protoEstateSites().map((site) => site.name);
    const cur = protoPersonSiteNames(personId);
    const next = cur.includes(value) ? cur.filter((item) => item !== value) : [...cur, value];
    const ordered = all.filter((name) => next.includes(name));
    setProto({
      prototypeSelectOpen: id,
      prototypePersonSites: { ...protoPersonSitesStore(), [personId]: ordered },
    });
    protoRestoreFocus(
      `#astral-fs [data-proto-select-option="${CSS.escape(id)}"][data-proto-select-value="${CSS.escape(
        value
      )}"]`
    );
    return;
  }
}

function protoDateControl() {
  const open = Boolean(store.prototypeDateOpen);
  const preset = protoDatePreset();
  const options = PROTO_DATE_PRESETS.map((item) => {
    const on = item.id === preset;
    return `
      <button
        type="button"
        role="option"
        class="${on ? "is-on" : ""}"
        aria-selected="${on ? "true" : "false"}"
        data-proto-date="${escapeHtml(item.id)}"
      >${escapeHtml(item.name)}</button>
    `;
  }).join("");
  return `
    <div class="astral-date${open ? protoMenuEnterClass("date") : ""}">
      <button
        type="button"
        class="astral-date-btn"
        aria-haspopup="listbox"
        aria-expanded="${open ? "true" : "false"}"
        aria-controls="astral-date-menu"
        data-proto-date="toggle"
      >
        <span>${escapeHtml(protoDateButtonLabel())}</span>
        ${protoChevronMark("menu")}
      </button>
      <div
        id="astral-date-menu"
        class="astral-date-menu${open ? protoMenuEnterClass("date") : ""}"
        role="listbox"
        aria-label="Date range"
        ${open ? "" : "hidden"}
      >${options}</div>
    </div>
  `;
}

function protoDateModal() {
  if (!store.prototypeDateCustomOpen) return "";
  const { year, month } = protoCalMonth();
  const from = protoFromIso(store.prototypeDateDraftFrom);
  const to = protoFromIso(store.prototypeDateDraftTo);
  const fromIso = from ? protoIso(from) : "";
  const toIso = to ? protoIso(to) : "";
  const days = protoCalDayCells({
    year,
    month,
    fromIso,
    toIso,
    allowFuture: false,
    pickAttr: "data-proto-cal-day",
  });
  const fromLine = from ? protoFormatDay(from) : "Not set";
  const toLine = to ? protoFormatDay(to) : "Not set";
  const canSave = Boolean(from && to);
  return `
    <div class="astral-modal-back" data-proto-modal="date">
      <div class="astral-modal" role="dialog" aria-labelledby="astral-date-title">
        ${protoModalHead(
          "astral-date-title",
          "Pick a date range",
          `From ${escapeHtml(fromLine)}. To ${escapeHtml(toLine)}.`,
          "date"
        )}
        <div class="astral-modal-body">
          <div class="astral-cal-head">
            ${protoIconBtn("prev", "Previous month", 'data-proto-date="prev"')}
            <p>${escapeHtml(`${PROTO_MONTHS[month]} ${year}`)}</p>
            ${protoIconBtn("next", "Next month", 'data-proto-date="next"')}
          </div>
          <div class="astral-cal">
            ${protoCalWeekdays()}
            ${days}
          </div>
        </div>
        <div class="astral-modal-foot">
          <div class="astral-actions">
            ${protoBtn("Save", `data-proto-date="save"${
              canSave ? "" : " disabled"
            }`)}
            ${protoGhost("Cancel", "data-proto-date=\"cancel\"")}
          </div>
        </div>
      </div>
    </div>
  `;
}

const PROTO_REPORT_TYPES = [
  {
    id: "extract",
    name: "Scheduled data extract",
    short: "Data extract",
    blurb: "All interval data for the sites you pick, sent as a CSV on a schedule.",
  },
  {
    id: "billing",
    name: "Tenant billing",
    short: "Tenant billing",
    blurb: "The projected cost of a site and the share a tenant pays.",
  },
  {
    id: "alert",
    name: "Data alert",
    short: "Data alert",
    blurb: "Tell people when a site goes over a threshold you set.",
  },
  {
    id: "missing",
    name: "Missing data",
    short: "Missing data",
    blurb: "Tell people when a site stops sending data.",
  },
];

const PROTO_REPORT_PERIODS = [
  { id: "day", name: "Last day", every: "Daily", word: "daily", days: 1 },
  { id: "week", name: "Last week", every: "Weekly", word: "weekly", days: 7 },
  { id: "month", name: "Last month", every: "Monthly", word: "monthly", days: 30 },
  { id: "quarter", name: "Last quarter", every: "Quarterly", word: "quarterly", days: 91 },
];

const PROTO_REPORT_SILENCE = [1, 3, 6, 12, 24, 48];

const PROTO_REPORT_BASIS = [
  { id: "absolute", name: "Absolute amount", note: "A fixed daily use in kWh" },
  { id: "average", name: "Portfolio average", note: "A share above the average site" },
];

const PROTO_REPORT_DELIVERY = [
  { id: "email", name: "Email" },
  { id: "sftp", name: "SFTP" },
];

function protoReportTypeId(raw) {
  const id = String(raw || "");
  return PROTO_REPORT_TYPES.some((item) => item.id === id) ? id : "extract";
}

function protoReportType(raw) {
  const id = protoReportTypeId(raw);
  return PROTO_REPORT_TYPES.find((item) => item.id === id);
}

function protoReportPeriods(type) {
  return type === "billing"
    ? PROTO_REPORT_PERIODS
    : PROTO_REPORT_PERIODS.filter((item) => item.id !== "quarter");
}

function protoReportPeriod(type, raw) {
  const list = protoReportPeriods(type);
  return list.find((item) => item.id === raw) || list.find((item) => item.id === (type === "billing" ? "month" : "week"));
}

function protoReportSilenceName(hours) {
  if (hours >= 24) {
    const days = Math.round(hours / 24);
    return `${days} ${days === 1 ? "day" : "days"}`;
  }
  return `${hours} ${hours === 1 ? "hour" : "hours"}`;
}

function protoReportDefaultName(type) {
  if (type === "billing") return "Tenant billing";
  if (type === "alert") return "Data alert";
  if (type === "missing") return "Missing data alert";
  return "Interval data extract";
}

function protoCanEditReports() {
  return protoCanAct();
}

function protoReportDefsStore() {
  const raw = store.prototypeReportDefs;
  return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
}

function protoReportDefsKey() {
  return String(protoCompanyId() || "company");
}

function protoReportSiteIds() {
  return protoEstateSites()
    .map((site) => protoSiteId(site))
    .filter(Boolean);
}

function protoReportSiteById(id) {
  return protoEstateSites().find((site) => protoSiteId(site) === id) || null;
}

function protoReportEmails(raw) {
  const list = Array.isArray(raw) ? raw : String(raw || "").split(/[\s,;]+/);
  return [
    ...new Set(
      list
        .map((item) => String(item || "").trim())
        .filter((item) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(item))
    ),
  ].slice(0, 20);
}

function protoReportNumber(raw, fallback, min, max) {
  const n = Number(raw);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback;
}

function protoReportNormalize(raw) {
  if (!raw || typeof raw !== "object") return null;
  const type = protoReportTypeId(raw.type);
  const ids = protoReportSiteIds();
  const known = new Set(ids);
  const sites = [...new Set((Array.isArray(raw.sites) ? raw.sites : []).map(String))].filter((id) =>
    known.has(id)
  );
  const start = protoMaskUkDate(raw.start || "");
  const delivery = PROTO_REPORT_DELIVERY.map((item) => item.id).filter((id) =>
    (Array.isArray(raw.delivery) ? raw.delivery : ["email"]).includes(id)
  );
  return {
    id: String(raw.id || `report-${Date.now()}`),
    type,
    name: String(raw.name || "").replace(/\s+/g, " ").trim().slice(0, 80) || protoReportDefaultName(type),
    on: raw.on !== false,
    start: protoFromUkDate(start) ? start : protoFormatUkDate(protoToday()),
    people: [...new Set((Array.isArray(raw.people) ? raw.people : []).map(String).filter(Boolean))],
    emails: protoReportEmails(raw.emails),
    sites,
    period: protoReportPeriod(type, raw.period).id,
    delivery: delivery.length ? delivery : ["email"],
    sftpHost: String(raw.sftpHost || "").trim().slice(0, 120),
    sftpPath: String(raw.sftpPath || "").trim().slice(0, 160),
    site: known.has(String(raw.site || "")) ? String(raw.site) : ids[0] || "",
    tenant: String(raw.tenant || "").replace(/\s+/g, " ").trim().slice(0, 80),
    tenantEmail: protoReportEmails([raw.tenantEmail])[0] || "",
    share: protoReportNumber(raw.share, 50, 0, 100),
    basis: raw.basis === "absolute" ? "absolute" : "average",
    amount: protoReportNumber(raw.amount, 2000, 0, 10000000),
    percent: protoReportNumber(raw.percent, 25, 0, 1000),
    hours: PROTO_REPORT_SILENCE.includes(Number(raw.hours)) ? Number(raw.hours) : 3,
    owner: String(raw.owner || protoProfileEmail()),
  };
}

function protoReportSeed() {
  const ids = protoReportSiteIds();
  const first = protoReportSiteById(ids[0]);
  const today = protoFormatUkDate(protoToday());
  return [
    {
      id: "seed-extract",
      type: "extract",
      name: "Weekly interval data",
      sites: ids.slice(0, 2),
      period: "week",
      delivery: ["email"],
      people: ["me"],
      start: today,
    },
    {
      id: "seed-billing",
      type: "billing",
      name: first ? `Tenant recharge, ${first.name}` : "Tenant recharge",
      site: ids[0] || "",
      period: "month",
      tenant: "Northgate Retail",
      tenantEmail: "accounts@northgate-retail.co.uk",
      share: 35,
      start: today,
    },
    {
      id: "seed-alert",
      type: "alert",
      name: "Use above portfolio average",
      sites: [],
      basis: "average",
      percent: 50,
      people: ["me"],
    },
    {
      id: "seed-missing",
      type: "missing",
      name: "Sites not sending data",
      hours: 3,
      people: ["me"],
    },
  ];
}

function protoReportDefs() {
  const saved = protoReportDefsStore()[protoReportDefsKey()];
  const order = PROTO_REPORT_TYPES.map((item) => item.id);
  return (Array.isArray(saved) ? saved : protoReportSeed())
    .map(protoReportNormalize)
    .filter(Boolean)
    .map((def, i) => ({ def, i }))
    .sort((a, b) => order.indexOf(a.def.type) - order.indexOf(b.def.type) || a.i - b.i)
    .map((row) => row.def);
}

function protoReportDefsPatch(list) {
  return {
    prototypeReportDefs: { ...protoReportDefsStore(), [protoReportDefsKey()]: list },
  };
}

function protoReportDef(id) {
  return protoReportDefs().find((def) => def.id === id) || null;
}

function protoReportKwh(n) {
  return `${Math.round(n).toLocaleString("en-GB")} kWh`;
}

function protoReportJoin(names) {
  const list = names.filter(Boolean);
  if (!list.length) return "";
  if (list.length <= 2) return list.join(" and ");
  return `${list[0]} and ${list.length - 1} more`;
}

function protoReportSiteDayKwh(site) {
  return (site?.meters || [])
    .filter((meter) => meter.direction !== "Export" && protoMeterKind(meter) !== "water")
    .reduce((n, meter) => n + protoDayKwh(meter), 0);
}

function protoReportPortfolioAverage() {
  const sites = protoEstateSites();
  if (!sites.length) return 0;
  return sites.reduce((n, site) => n + protoReportSiteDayKwh(site), 0) / sites.length;
}

function protoReportScopeSites(def) {
  const all = protoEstateSites();
  if (!def.sites.length) return def.type === "extract" ? [] : all;
  const picked = new Set(def.sites);
  return all.filter((site) => picked.has(protoSiteId(site)));
}

function protoReportAlertLimit(def) {
  return def.basis === "absolute"
    ? def.amount
    : protoReportPortfolioAverage() * (1 + def.percent / 100);
}

function protoReportAlertHits(def) {
  const limit = protoReportAlertLimit(def);
  return protoReportScopeSites(def).filter((site) => protoReportSiteDayKwh(site) > limit);
}

function protoMeterSilentHours(meter) {
  const raw = String(meter?.lastReading || "").toLowerCase();
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return meter?.status === "stale" ? 24 : 0;
  if (/day/.test(raw)) return n * 24;
  if (/min/.test(raw)) return n / 60;
  if (/\bh\b|hour/.test(raw)) return n;
  return 0;
}

function protoReportMissingHits(def) {
  return protoEstateSites().filter((site) =>
    (site.meters || []).some((meter) => protoMeterSilentHours(meter) >= def.hours)
  );
}

function protoReportBill(def) {
  const site = protoReportSiteById(def.site);
  const period = protoReportPeriod("billing", def.period);
  const cost = site ? protoSiteSpendGbp(site) * period.days : 0;
  return { site, period, cost, due: (cost * def.share) / 100 };
}

function protoReportStepDate(date, period) {
  if (period === "day") return protoAddDays(date, 1);
  if (period === "week") return protoAddDays(date, 7);
  if (period === "quarter") return protoAddMonths(date, 3);
  return protoAddMonths(date, 1);
}

function protoReportNextSend(def) {
  const start = protoFromUkDate(def.start);
  if (!start) return null;
  const todayStamp = protoDayStamp(protoToday());
  let next = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  let guard = 0;
  while (protoDayStamp(next) <= todayStamp && guard < 800) {
    next = protoReportStepDate(next, def.period);
    guard += 1;
  }
  return next;
}

function protoReportSendLabel(next) {
  if (!next) return "";
  const today = protoToday();
  const days = Math.round((protoDayStamp(next) - protoDayStamp(today)) / 86400000);
  let months =
    (next.getFullYear() - today.getFullYear()) * 12 + (next.getMonth() - today.getMonth());
  if (next.getDate() < today.getDate()) months -= 1;
  if (months >= 1) return `Sent in ${months} ${months === 1 ? "month" : "months"}`;
  const weeks = Math.floor(Math.max(days, 0) / 7);
  if (weeks >= 1) return `Sent in ${weeks} ${weeks === 1 ? "week" : "weeks"}`;
  const wait = Math.max(days, 1);
  return wait === 1 ? "Sent tomorrow" : `Sent in ${wait} days`;
}

function protoReportPeopleNames(ids) {
  const people = protoUserPeople();
  return ids
    .map((id) => people.find((person) => person.id === id))
    .filter(Boolean)
    .map((person) => (person.you ? "you" : person.name));
}

function protoReportToLine(def) {
  if (def.type === "billing") {
    return `Email to you and ${def.tenant || def.tenantEmail || "the tenant"}`;
  }
  const names = [...protoReportPeopleNames(def.people), ...def.emails];
  const email = names.length ? `Email to ${protoReportJoin(names)}` : "No one gets this yet";
  if (def.type !== "extract") return email;
  const parts = [];
  if (def.delivery.includes("email")) parts.push(email);
  if (def.delivery.includes("sftp")) {
    const path = def.sftpPath ? `/${def.sftpPath.replace(/^\/+/, "")}` : "";
    parts.push(`SFTP to ${def.sftpHost || "a server"}${path}`);
  }
  return parts.join(". ");
}

function protoReportSummary(def) {
  if (def.type === "extract") {
    const names = protoReportScopeSites(def).map((site) => site.name);
    const period = protoReportPeriod("extract", def.period);
    return `${period.name} of interval data for ${protoReportJoin(names) || "no sites yet"}, as a CSV.`;
  }
  if (def.type === "billing") {
    const bill = protoReportBill(def);
    if (!bill.site) return "Pick a site to project its cost.";
    return `${bill.site.name}. Projected ${bill.period.word} cost ${protoSpendMoney(
      bill.cost
    )}. ${def.tenant || "The tenant"} pays ${def.share}%: ${protoSpendMoney(bill.due)}.`;
  }
  if (def.type === "alert") {
    const scope = def.sites.length
      ? protoReportJoin(protoReportScopeSites(def).map((site) => site.name))
      : "any site";
    if (def.basis === "absolute") {
      return `When ${scope} uses more than ${protoReportKwh(def.amount)} in a day.`;
    }
    return `When ${scope} uses ${def.percent}% more than the portfolio average, ${protoReportKwh(
      protoReportAlertLimit(def)
    )} a day.`;
  }
  return `When any site in ${protoHomeCompany() || "the portfolio"} sends no data for ${protoReportSilenceName(
    def.hours
  )}.`;
}

function protoReportStatusLine(def) {
  if (!def.on) return "Paused";
  if (def.type === "alert") {
    const n = protoReportAlertHits(def).length;
    return n ? `${n} ${n === 1 ? "site" : "sites"} over now` : "No site over now";
  }
  if (def.type === "missing") {
    const n = protoReportMissingHits(def).length;
    return n ? `${n} ${n === 1 ? "site" : "sites"} silent now` : "Every site sending";
  }
  return protoReportSendLabel(protoReportNextSend(def));
}

function protoReportDraftStart() {
  const start = protoMaskUkDate(store.prototypeReportDraftStart || "");
  return start || protoFormatUkDate(protoToday());
}

function protoReportCalMonth() {
  const picked = protoFromUkDate(protoReportDraftStart());
  return protoReadCalMonth(store.prototypeReportCal, picked || protoToday());
}

function protoReportCalOpen() {
  return Boolean(store.prototypeReportCalOpen);
}

function protoOpenReportCal() {
  if (!protoCanEditReports()) return;
  const picked = protoFromUkDate(protoReportDraftStart()) || protoToday();
  const cal = store.prototypeReportCal || protoIso(picked).slice(0, 7);
  if (protoReportCalOpen()) {
    if (store.prototypeReportCal !== cal) store.prototypeReportCal = cal;
    return;
  }
  setProto({
    prototypeReportCalOpen: true,
    prototypeReportCal: cal,
    prototypeSelectOpen: "",
  });
  protoRestoreFocus('#astral-fs input[name="proto-report-start"]');
}

function protoReportDayCalHtml(start, label = "First send on") {
  const open = protoReportCalOpen();
  const { year, month } = protoReportCalMonth();
  const picked = protoFromUkDate(start);
  const selectedIso = picked ? protoIso(picked) : "";
  const days = protoCalDayCells({
    year,
    month,
    selectedIso,
    allowFuture: true,
    pickAttr: "data-proto-day-cal-pick",
  });
  return `
    <div class="astral-day-cal${open ? protoMenuEnterClass("report-cal") : ""}">
      <label class="astral-field">
        <span>${escapeHtml(label)}</span>
        <input
          class="astral-date-input"
          type="text"
          name="proto-report-start"
          value="${escapeHtml(start)}"
          inputmode="numeric"
          autocomplete="off"
          spellcheck="false"
          maxlength="10"
          placeholder="dd/mm/yyyy"
          aria-label="${escapeHtml(label)}"
          aria-haspopup="dialog"
          aria-expanded="${open ? "true" : "false"}"
          aria-controls="astral-day-cal-menu"
        />
      </label>
      <div
        id="astral-day-cal-menu"
        class="astral-day-cal-menu${open ? protoMenuEnterClass("report-cal") : ""}"
        role="dialog"
        aria-label="${escapeHtml(label)}"
        ${open ? "" : "hidden"}
      >
        <div class="astral-cal-head">
          ${protoIconBtn("prev", "Previous month", 'data-proto-day-cal="prev"')}
          <p>${escapeHtml(`${PROTO_MONTHS_LONG[month]} ${year}`)}</p>
          ${protoIconBtn("next", "Next month", 'data-proto-day-cal="next"')}
        </div>
        <div class="astral-cal">
          ${protoCalWeekdays()}
          ${days}
        </div>
      </div>
    </div>
  `;
}

function protoReportEditId() {
  return String(store.prototypeReportEdit || "");
}

function protoReportDraft() {
  const raw = store.prototypeReportDraft;
  return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : null;
}

function protoReportDraftFrom(def) {
  return {
    ...def,
    emails: def.emails.join(", "),
    share: String(def.share),
    amount: String(def.amount),
    percent: String(def.percent),
  };
}

function protoReportNewDraft(type) {
  const def = protoReportNormalize({ type, people: ["me"] });
  return { ...protoReportDraftFrom(def), name: "" };
}

function protoReportDraftDef(draft) {
  const id = protoReportEditId();
  const saved = id && id !== "new" ? protoReportDef(id) : null;
  const def = protoReportNormalize({
    ...draft,
    id: saved?.id || `report-${Date.now()}`,
    on: saved ? saved.on : true,
    owner: saved?.owner || protoProfileEmail(),
    start: protoReportDraftStart(),
  });
  if (!String(draft.name || "").trim()) def.name = protoReportAutoName(def);
  return def;
}

function protoReportAutoName(def) {
  if (def.type === "extract") return `${protoReportPeriod("extract", def.period).every} interval data`;
  if (def.type === "billing") {
    const site = protoReportSiteById(def.site);
    return `${def.tenant || "Tenant"} billing${site ? `, ${site.name}` : ""}`;
  }
  if (def.type === "alert") {
    return def.basis === "absolute"
      ? `Daily use over ${protoReportKwh(def.amount)}`
      : `Use ${def.percent}% above average`;
  }
  return `No data for ${protoReportSilenceName(def.hours)}`;
}

function protoReportDraftIssue(draft) {
  if (!draft) return "Pick a report type.";
  const people =
    (Array.isArray(draft.people) ? draft.people.length : 0) + protoReportEmails(draft.emails).length;
  const startOk = Boolean(protoFromUkDate(protoReportDraftStart()));
  if (draft.type === "extract") {
    if (!draft.sites?.length) return "Pick at least one site.";
    if (!draft.delivery?.length) return "Pick how to send it.";
    if (draft.delivery.includes("email") && !people) return "Add at least one person or email.";
    if (draft.delivery.includes("sftp") && !String(draft.sftpHost || "").trim()) {
      return "Add the SFTP host.";
    }
    if (!startOk) return "Enter the first send date.";
    return "";
  }
  if (draft.type === "billing") {
    if (!draft.site) return "Pick a site.";
    if (!String(draft.tenant || "").trim()) return "Add the tenant's name.";
    if (!protoReportEmails([draft.tenantEmail]).length) return "Add the tenant's email.";
    const share = Number(draft.share);
    if (!(share > 0 && share <= 100)) return "Tenant share must be between 1 and 100%.";
    if (!startOk) return "Enter the first send date.";
    return "";
  }
  if (draft.type === "alert") {
    const value = Number(draft.basis === "absolute" ? draft.amount : draft.percent);
    if (!(value > 0)) return "Enter a threshold above zero.";
  }
  if (!people) return "Add at least one person or email.";
  return "";
}

function protoReportDraftPreview(draft) {
  if (!draft) return "";
  const def = protoReportDraftDef(draft);
  if (def.type === "extract") {
    const next = protoReportNextSend(def);
    const period = protoReportPeriod("extract", def.period);
    return next
      ? `${period.every}, first sent on ${protoFormatUkDate(next)}.`
      : `${period.every}.`;
  }
  if (def.type === "billing") {
    const bill = protoReportBill(def);
    if (!bill.site) return "";
    return `Projected ${bill.period.word} cost ${protoSpendMoney(bill.cost)}. Tenant pays ${protoSpendMoney(
      bill.due
    )}.`;
  }
  if (def.type === "alert") {
    const hits = protoReportAlertHits(def);
    const limit = `Limit ${protoReportKwh(protoReportAlertLimit(def))} a day.`;
    if (!hits.length) return `${limit} No site is over right now.`;
    return `${limit} Over right now: ${protoReportJoin(hits.map((site) => site.name))}.`;
  }
  const hits = protoReportMissingHits(def);
  if (!hits.length) return "Every site is sending right now.";
  return `Silent right now: ${protoReportJoin(hits.map((site) => site.name))}.`;
}

function protoReportField(label, inner) {
  return `<div class="astral-team-field"><p>${escapeHtml(label)}</p>${inner}</div>`;
}

function protoReportInput(label, field, value, attrs = "") {
  return `
    <label>
      ${escapeHtml(label)}
      <input
        type="text"
        name="proto-report-${escapeHtml(field)}"
        data-proto-report-field="${escapeHtml(field)}"
        value="${escapeHtml(value ?? "")}"
        autocomplete="off"
        ${attrs}
      />
    </label>
  `;
}

function protoReportSitesSelect(draft) {
  const sites = protoEstateSites();
  const alert = draft.type === "alert";
  return protoReportField(
    "Sites",
    protoSelect({
      id: "report-sites",
      label: "Sites",
      multi: true,
      wide: true,
      values: draft.sites || [],
      placeholder: alert ? "All sites" : "Pick sites",
      countLabel: "sites",
      allLabel: "All sites",
      empty: sites.length ? "No sites match." : "No sites in this company.",
      search: sites.length
        ? {
            name: "proto-report-site-query",
            value: String(store.prototypeReportSiteQuery || ""),
            placeholder: "Search sites",
            label: "Search sites",
          }
        : null,
      options: sites.map((site) => {
        const n = (site.meters || []).length;
        return {
          value: protoSiteId(site),
          label: site.name,
          note: `${n} ${n === 1 ? "meter" : "meters"}`,
        };
      }),
    })
  );
}

function protoReportPeriodSelect(draft, label) {
  return protoReportField(
    label,
    protoSelect({
      id: "report-period",
      label,
      wide: true,
      value: protoReportPeriod(draft.type, draft.period).id,
      options: protoReportPeriods(draft.type).map((item) => ({
        value: item.id,
        label: item.name,
        note: `Sent ${item.word}`,
      })),
    })
  );
}

function protoReportRecipientsHtml(draft) {
  const people = protoUserPeople();
  return `
    ${protoReportField(
      "People",
      protoSelect({
        id: "report-people",
        label: "People",
        multi: true,
        wide: true,
        values: draft.people || [],
        placeholder: "Pick people",
        countLabel: "people",
        empty: people.length ? "No people match." : "Invite someone first, then add them here.",
        search: people.length
          ? {
              name: "proto-report-people-query",
              value: String(store.prototypeReportPeopleQuery || ""),
              placeholder: "Search people",
              label: "Search people",
            }
          : null,
        options: people.map((person) => ({
          value: person.id,
          label: person.you && person.name !== "You" ? `${person.name} (you)` : person.name,
          search: `${person.name} ${person.email || ""} ${protoUserRoleName(person.role)}`,
          html: `<span class="astral-select-person"><span>${escapeHtml(
            person.you && person.name !== "You" ? `${person.name} (you)` : person.name
          )}</span><span class="astral-muted">${escapeHtml(
            protoUserRoleName(person.role)
          )}</span></span>`,
        })),
      })
    )}
    ${protoReportInput(
      "Other emails",
      "emails",
      draft.emails,
      'placeholder="name@company.com, name@company.com" inputmode="email"'
    )}
  `;
}

function protoReportTypeFields(draft) {
  if (draft.type === "extract") {
    const email = (draft.delivery || []).includes("email");
    const sftp = (draft.delivery || []).includes("sftp");
    return `
      ${protoReportSitesSelect(draft)}
      <div class="astral-report-pair">
        ${protoReportPeriodSelect(draft, "Data period")}
        ${protoReportDayCalHtml(protoReportDraftStart())}
      </div>
      ${protoReportField(
        "Send by",
        protoSelect({
          id: "report-delivery",
          label: "Send by",
          multi: true,
          wide: true,
          values: draft.delivery || [],
          placeholder: "Pick how to send it",
          countLabel: "ways",
          allLabel: "Email and SFTP",
          options: PROTO_REPORT_DELIVERY.map((item) => ({ value: item.id, label: item.name })),
        })
      )}
      ${email ? protoReportRecipientsHtml(draft) : ""}
      ${
        sftp
          ? `<div class="astral-report-pair">
              ${protoReportInput("SFTP host", "sftpHost", draft.sftpHost, 'placeholder="sftp.company.com"')}
              ${protoReportInput("Folder", "sftpPath", draft.sftpPath, 'placeholder="astral/interval"')}
            </div>`
          : ""
      }
    `;
  }
  if (draft.type === "billing") {
    const sites = protoEstateSites();
    return `
      ${protoReportField(
        "Site",
        protoSelect({
          id: "report-site",
          label: "Site",
          wide: true,
          value: draft.site || "",
          placeholder: "Pick a site",
          empty: sites.length ? "No sites match." : "No sites in this company.",
          search: sites.length
            ? {
                name: "proto-report-site-query",
                value: String(store.prototypeReportSiteQuery || ""),
                placeholder: "Search sites",
                label: "Search sites",
              }
            : null,
          options: sites.map((site) => ({
            value: protoSiteId(site),
            label: site.name,
            note: `${protoSpendMoney(protoSiteSpendGbp(site))} a day`,
          })),
        })
      )}
      <div class="astral-report-pair">
        ${protoReportPeriodSelect(draft, "Cost period")}
        ${protoReportDayCalHtml(protoReportDraftStart())}
      </div>
      <div class="astral-report-pair">
        ${protoReportInput("Tenant", "tenant", draft.tenant, 'maxlength="80" placeholder="Tenant name"')}
        ${protoReportInput("Tenant share (%)", "share", draft.share, 'inputmode="decimal" placeholder="50"')}
      </div>
      ${protoReportInput(
        "Tenant email",
        "tenantEmail",
        draft.tenantEmail,
        'inputmode="email" placeholder="accounts@tenant.com"'
      )}
      <p class="astral-muted">Sent by email to you and the tenant.</p>
    `;
  }
  if (draft.type === "alert") {
    const absolute = draft.basis === "absolute";
    return `
      ${protoReportSitesSelect(draft)}
      <div class="astral-report-pair">
        ${protoReportField(
          "Threshold",
          protoSelect({
            id: "report-basis",
            label: "Threshold",
            wide: true,
            value: absolute ? "absolute" : "average",
            options: PROTO_REPORT_BASIS.map((item) => ({
              value: item.id,
              label: item.name,
              note: item.note,
            })),
          })
        )}
        ${
          absolute
            ? protoReportInput("Daily use over (kWh)", "amount", draft.amount, 'inputmode="decimal"')
            : protoReportInput("Above the average by (%)", "percent", draft.percent, 'inputmode="decimal"')
        }
      </div>
      ${protoReportRecipientsHtml(draft)}
    `;
  }
  return `
    ${protoReportField(
      "No data for",
      protoSelect({
        id: "report-silence",
        label: "No data for",
        wide: true,
        value: String(draft.hours || 3),
        options: PROTO_REPORT_SILENCE.map((hours) => ({
          value: String(hours),
          label: protoReportSilenceName(hours),
        })),
      })
    )}
    <p class="astral-muted">Checks every site in ${escapeHtml(
      protoHomeCompany() || "the portfolio"
    )}.</p>
    ${protoReportRecipientsHtml(draft)}
  `;
}

function protoReportTypePicker(draft) {
  return `
    <div class="astral-report-types" role="radiogroup" aria-label="Report type">
      ${PROTO_REPORT_TYPES.map((item) => {
        const on = draft?.type === item.id;
        return `
          <button
            type="button"
            role="radio"
            class="astral-report-type${on ? " is-on" : ""}"
            aria-checked="${on ? "true" : "false"}"
            data-proto-report-type="${escapeHtml(item.id)}"
          >
            <span>${escapeHtml(item.name)}</span>
            <span class="astral-muted">${escapeHtml(item.blurb)}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function protoReportEditModal() {
  const id = protoReportEditId();
  if (!id || !protoCanEditReports()) return "";
  const isNew = id === "new";
  if (!isNew && !protoReportDef(id)) return "";
  const draft = protoReportDraft();
  const type = draft ? protoReportType(draft.type) : null;
  const issue = protoReportDraftIssue(draft);
  const preview = protoReportDraftPreview(draft);
  const lead = isNew
    ? "Pick a type, then say what it covers and who gets it."
    : `${type?.name || "Report"}. ${type?.blurb || ""}`;
  return `
    <div class="astral-modal-back" data-proto-modal="report">
      <div
        id="astral-report-edit"
        class="astral-modal astral-report-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="astral-report-edit-title"
        data-proto-report-edit-form
      >
        ${protoModalHead(
          "astral-report-edit-title",
          isNew ? "Add a report" : "Edit report",
          lead,
          "report"
        )}
        <form data-proto-report-edit-form novalidate>
          <div class="astral-modal-body">
            ${isNew ? protoReportTypePicker(draft) : ""}
            ${
              draft
                ? `
                  ${protoReportInput(
                    "Report name",
                    "name",
                    draft.name,
                    `maxlength="80" placeholder="${escapeHtml(protoReportAutoName(protoReportDraftDef(draft)))}"`
                  )}
                  ${protoReportTypeFields(draft)}
                  <p class="astral-report-preview" data-proto-report-preview${
                    preview ? "" : " hidden"
                  }>${escapeHtml(preview)}</p>
                `
                : ""
            }
          </div>
          <div class="astral-modal-foot">
            <p class="astral-muted astral-report-issue" data-proto-report-issue${
              issue && draft ? "" : " hidden"
            }>${escapeHtml(issue)}</p>
            <div class="astral-actions">
              ${protoBtn(isNew ? "Add report" : "Save changes", "", {
                type: "submit",
                disabled: Boolean(issue),
              })}
              ${protoGhost("Cancel", 'data-proto-report-edit="cancel"')}
              ${
                isNew
                  ? ""
                  : protoTextBtn("Delete report", `data-proto-report-delete="${escapeHtml(id)}"`, {
                      className: "astral-report-delete",
                    })
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

function protoReportRefreshForm() {
  const modal = document.querySelector("#astral-fs [data-proto-report-edit-form].astral-modal");
  const draft = protoReportDraft();
  if (!modal || !draft) return;
  const issue = protoReportDraftIssue(draft);
  const submit = modal.querySelector('button[type="submit"]');
  if (submit) submit.disabled = Boolean(issue);
  const issueEl = modal.querySelector("[data-proto-report-issue]");
  if (issueEl) {
    issueEl.textContent = issue;
    issueEl.hidden = !issue;
  }
  const previewEl = modal.querySelector("[data-proto-report-preview]");
  if (previewEl) {
    const preview = protoReportDraftPreview(draft);
    previewEl.textContent = preview;
    previewEl.hidden = !preview;
  }
}

function protoReportOpenEdit(id) {
  if (!protoCanEditReports()) return;
  const def = id === "new" ? null : protoReportDef(id);
  if (id !== "new" && !def) return;
  setProto({
    prototypeReportEdit: id,
    prototypeReportDraft: def ? protoReportDraftFrom(def) : null,
    prototypeReportDraftStart: def ? def.start : protoFormatUkDate(protoToday()),
    prototypeReportPeopleQuery: "",
    prototypeReportSiteQuery: "",
    prototypeReportCal: "",
    prototypeSelectOpen: "",
  });
  protoRestoreFocus(
    def
      ? '#astral-fs input[name="proto-report-name"]'
      : '#astral-fs [data-proto-report-type="extract"]'
  );
}

function protoReportEditClear() {
  return {
    prototypeReportEdit: "",
    prototypeReportDraft: null,
    prototypeReportDraftStart: "",
    prototypeReportPeopleQuery: "",
    prototypeReportSiteQuery: "",
    prototypeReportCalOpen: false,
    prototypeReportCal: "",
  };
}

function protoReportPatchDraft(patch, keepOpen) {
  const draft = protoReportDraft();
  if (!draft || !protoCanEditReports()) return;
  setProto({
    prototypeReportEdit: protoReportEditId(),
    prototypeReportDraft: { ...draft, ...patch },
    prototypeSelectOpen: keepOpen || "",
  });
}

function protoReportToggleIn(list, value) {
  const cur = Array.isArray(list) ? list.map(String) : [];
  return cur.includes(value) ? cur.filter((item) => item !== value) : [...cur, value];
}

function protoReportCsv(def) {
  const q = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const today = protoToday();
  if (def.type === "billing") {
    const bill = protoReportBill(def);
    const from = protoAddDays(today, -bill.period.days);
    const to = protoAddDays(today, -1);
    const lines = [
      ["site", "period", "from", "to", "projected cost (GBP)", "tenant", "tenant share (%)", "amount payable (GBP)"]
        .map(q)
        .join(","),
      [
        bill.site?.name || "",
        bill.period.name,
        protoFormatUkDate(from),
        protoFormatUkDate(to),
        bill.cost.toFixed(2),
        def.tenant,
        def.share,
        bill.due.toFixed(2),
      ]
        .map(q)
        .join(","),
      "",
      ["meter", "utility", "projected cost (GBP)", "tenant pays (GBP)"].map(q).join(","),
      ...(bill.site?.meters || []).map((meter) => {
        const cost = protoMeterSpendGbp(meter) * bill.period.days;
        return [meter.name, meter.commodity, cost.toFixed(2), ((cost * def.share) / 100).toFixed(2)]
          .map(q)
          .join(",");
      }),
    ];
    return lines;
  }
  const period = protoReportPeriod("extract", def.period);
  const lines = [["site", "meter", "mpan", "date", "time", "value", "unit", "quality"].map(q).join(",")];
  protoReportScopeSites(def).forEach((site) => {
    (site.meters || []).forEach((meter) => {
      for (let back = period.days; back >= 1; back -= 1) {
        const day = protoAddDays(today, -back);
        protoSeries(meter, "day", day).forEach((point) => {
          lines.push(
            [
              site.name,
              meter.name,
              meter.mpan || "",
              protoFormatUkDate(day),
              point.label,
              point.value == null ? "" : point.value,
              point.unit || "kWh",
              protoCsvQuality(point.quality, point.value),
            ]
              .map(q)
              .join(",")
          );
        });
      }
    });
  });
  return lines;
}

function protoUnreadFrom(alerts) {
  return (alerts || []).filter((item) => !protoAlertResolved(item));
}

function protoUnreadAlerts() {
  return protoUnreadFrom(protoData()?.alerts);
}

function protoNoticeMenu(state) {
  const unread = protoUnreadAlerts();
  const rows = unread.length
    ? unread
        .map((item) => {
          const site = protoSiteByMeter(item.meterId);
          const word = protoAlertWord(item.kind);
          const title = site ? `${word} at ${site.name}` : word;
          return `
            <button type="button" class="astral-notice-item" data-proto-alert="${escapeHtml(
              item.id
            )}">
              <span class="astral-notice-copy">
                <span>${escapeHtml(title)}</span>
                <span class="astral-muted">${escapeHtml(item.summary)}</span>
              </span>
              <span class="astral-muted">${escapeHtml(item.age || "")}</span>
            </button>
          `;
        })
        .join("")
    : `<p class="astral-muted">No unread alerts.</p>`;
  return `
    <div class="astral-notice">
      ${protoIconBtn(
        "notice",
        "Notifications",
        `aria-haspopup="dialog" aria-expanded="${
          state.notice ? "true" : "false"
        }" aria-controls="astral-notice-menu" data-proto-notice="toggle"`,
        { className: "is-plain", on: Boolean(state.notice), count: unread.length }
      )}
      <div
        id="astral-notice-menu"
        class="astral-notice-menu${state.notice ? protoMenuEnterClass("notice") : ""}"
        role="dialog"
        aria-label="Notifications"
        ${state.notice ? "" : "hidden"}
      >
        <p class="astral-notice-head">Notifications</p>
        <div class="astral-notice-list">${rows}</div>
        ${protoTextBtn("View alerts", "data-proto-view=\"alerts\"")}
      </div>
    </div>
  `;
}

function protoAdminRail() {
  return protoCompanyId() === "admin-user" && !protoSeeAs();
}

function protoUsesRail() {
  return protoAdminRail() || Boolean(store.prototypeNavCompact);
}

function protoRailOpen() {
  return protoUsesRail() && Boolean(store.prototypeFullscreen && store.prototypeRailOpen);
}

function protoFitNav() {
  if (protoAdminRail()) {
    if (store.prototypeNavCompact) setProto({ prototypeNavCompact: false });
    return;
  }
  const host = document.querySelector("#astral-fs .astral-app");
  const sticky = host && host.querySelector(".astral-nav-sticky");
  if (!sticky) return;
  const width = sticky.clientWidth;
  if (store.prototypeNavCompact) {
    const need = Number(store.prototypeNavFitWidth) || 0;
    if (need && width >= need) setProto({ prototypeNavCompact: false });
    return;
  }
  const nav = sticky.querySelector(".astral-nav");
  const links = nav && nav.querySelector(".astral-links");
  if (!nav || !links) return;
  const tight =
    links.scrollWidth > links.clientWidth + 2 || nav.getBoundingClientRect().height > 70;
  if (tight) {
    setProto({ prototypeNavCompact: true, prototypeNavFitWidth: width + 80 });
  }
}

function protoFitNavSoon() {
  requestAnimationFrame(() => {
    protoFitNav();
    protoWatchNavFit();
  });
}

function protoWatchNavFit() {
  const fs = document.querySelector("#astral-fs");
  if (!fs || fs.__navFitWatch) return;
  fs.__navFitWatch = true;
  const observer = new ResizeObserver(() => protoFitNav());
  observer.observe(fs);
}

function protoRailIcon(id) {
  if (id === "home") return "home";
  if (id === "portfolio") return "meter";
  if (id === "finance") return "rates";
  if (id === "alerts") return "warning";
  if (id === "queries") return "comment";
  if (id === "reports" || id === "downloads") return "report";
  if (id === "profile" || id === "settings" || id === "users") return id;
  if (id === "companies") return "companies";
  return "home";
}

function protoRailPage(state) {
  const id = state.view === "downloads" ? "reports" : state.view;
  const fromNav = protoShownViews().find((view) => view.id === id);
  if (fromNav) return fromNav;
  const fromAccount = PROTO_ACCOUNT_VIEWS.find((view) => view.id === id);
  if (fromAccount) return fromAccount;
  return protoShownViews()[0] || PROTO_VIEWS[0];
}

function protoBrandMark() {
  const brand = protoBrand();
  return brand.logo
    ? protoOrgLogoHtml(brand.logo, "Organisation logo")
    : `<img
            class="astral-logo"
            src="${PROTO_IMSERV_MARK}"
            alt="IMSERV"
            width="116"
            height="18"
          />`;
}

function astralNavEnd(state) {
  const menuItems = PROTO_ACCOUNT_VIEWS.filter((view) => {
    if (view.id === "users") return protoCanManagePeople();
    if (view.id === "settings") return protoCanOpenSettings();
    return true;
  })
    .map((view) => {
      const on = view.id === state.view;
      return `
      <button
        type="button"
        role="menuitem"
        data-proto-view="${escapeHtml(view.id)}"
        ${on ? 'aria-current="page"' : ""}
      >${astralAccountIcon(view.id)}<span>${escapeHtml(view.name)}</span></button>
    `;
    })
    .join("");
  return `
    <div class="astral-nav-end">
      ${protoNoticeMenu(state)}
      <div class="astral-account">
      ${protoIconTip(
        `<button
        type="button"
        class="astral-avatar${protoProfilePicture() ? " has-photo" : ""}"
        aria-label="Account"
        aria-haspopup="menu"
        aria-expanded="${state.account ? "true" : "false"}"
        aria-controls="astral-account-menu"
        data-proto-account="toggle"
      >${protoAvatarMark("")}</button>`,
        "Account"
      )}
      <div
        id="astral-account-menu"
        class="astral-account-menu${state.account ? protoMenuEnterClass("account") : ""}"
        role="menu"
        aria-label="Account"
        ${state.account ? "" : "hidden"}
      >
        ${menuItems}
        <div class="astral-account-split" role="separator"></div>
        <button type="button" role="menuitem" data-proto-account="out">${astralAccountIcon("out")}<span>Log out</span></button>
      </div>
    </div>
    </div>
  `;
}

function astralRailNav(state) {
  const open = protoRailOpen();
  const page = protoRailPage(state);
  const links = protoShownViews()
    .map((view) => {
      const on =
        view.id === state.view || (view.id === "reports" && state.view === "downloads");
      return `
      <button
        type="button"
        class="astral-rail-link"
        data-proto-view="${escapeHtml(view.id)}"
        ${on ? 'aria-current="page"' : ""}
      >${protoIconMark(protoRailIcon(view.id))}<span>${escapeHtml(view.name)}</span></button>
    `;
    })
    .join("");
  return `
    <div class="astral-nav-sticky is-rail">
      <header class="astral-rail-bar">
        <div class="astral-rail-now">
          ${protoIconBtn(
            "menu",
            open ? "Close menu" : "Open menu",
            `data-proto-rail="toggle" aria-expanded="${open ? "true" : "false"}" aria-controls="astral-rail"`,
            { className: "is-plain" }
          )}
          <p class="astral-rail-page">${protoIconMark(protoRailIcon(page.id))}<span>${escapeHtml(
            page.name
          )}</span></p>
        </div>
        ${astralNavEnd(state)}
      </header>
    </div>
    <div class="astral-rail-layer${open ? " is-open" : ""}" ${open ? "" : "hidden"}>
      <button type="button" class="astral-rail-scrim" data-proto-rail="close" aria-label="Close menu"></button>
      <aside id="astral-rail" class="astral-rail" role="dialog" aria-modal="true" aria-label="Menu">
        <nav class="astral-rail-links" aria-label="Astral">${links}</nav>
      </aside>
    </div>
  `;
}

function astralNav(state) {
  if (protoUsesRail() && !state.signedOut) return astralRailNav(state);
  const links = protoShownViews()
    .map((view) => {
      const on =
        view.id === state.view || (view.id === "reports" && state.view === "downloads");
      return `
      <button
        type="button"
        class="astral-link"
        data-proto-view="${escapeHtml(view.id)}"
        ${on ? 'aria-current="page"' : ""}
      >${escapeHtml(view.name)}</button>
    `;
    })
    .join("");
  const account = state.signedOut
    ? ""
    : `
        <nav class="astral-links" aria-label="Astral">${links}</nav>
        ${astralNavEnd(state)}
      `;
  return `
    <div class="astral-nav-sticky">
      <header class="astral-nav${state.signedOut ? " is-out" : ""}">
        <p class="astral-brand">
          ${protoBrandMark()}
          <span>Astral</span>
        </p>
        ${account}
      </header>
    </div>
  `;
}

function astralPageHead(title, lead, extra) {
  return `
    <header class="astral-page-head${extra ? " astral-page-tools" : ""}">
      <div>
        <h2>${escapeHtml(title)}</h2>
      </div>
      ${extra || ""}
    </header>
  `;
}

function protoReportsDownloadsTabs(active) {
  if (protoAdminRail()) return "";
  return protoTabs(
    [
      { id: "reports", name: "Reports" },
      { id: "downloads", name: "Downloads" },
    ],
    active,
    "data-proto-view",
    "Reports or Downloads"
  );
}

function protoReportsAreaHead(active) {
  const addBtn =
    active === "reports" && protoCanEditReports()
      ? protoBtn(
          "Add a report",
          `data-proto-report-edit="new" aria-haspopup="dialog" aria-expanded="${
            protoReportEditId() === "new" ? "true" : "false"
          }" aria-controls="astral-report-edit"`
        )
      : "";
  const tabs = protoReportsDownloadsTabs(active);
  const actions = addBtn ? `<div class="astral-page-actions">${addBtn}</div>` : "";
  return `
    <header class="astral-page-head${actions || tabs ? " astral-page-tools" : ""}${
      tabs ? " has-tabs" : ""
    }">
      <div>
        <h2>Reports and compliance</h2>
      </div>
      ${actions}
      ${tabs}
    </header>
  `;
}

function astralWalk(state) {
  if (!state.walk) return "";
  return `
    <p class="astral-note" role="status">
      The walkthrough waits. Use the screens as they stand.
      ${protoTextBtn("Hide", "data-proto-walk=\"hide\"")}
    </p>
  `;
}

function protoShareWalk() {
  return Boolean(window.WORK_DESK_SHARE);
}

function protoLibraryOn() {
  return Boolean(store.prototypeLibraryOn);
}

function astralPreviewMenu() {
  if (store.prototypePreviewHidden) {
    return `
      <div class="astral-preview-menu is-shut">
        ${protoIconBtn("expand", "Expand", 'data-proto-preview="show"')}
      </div>
    `;
  }
  const libraryOn = protoLibraryOn();
  const walkTabs = protoTabs(
    [
      { id: "prototype", name: "Prototype" },
      { id: "library", name: "Library" },
    ],
    libraryOn ? "library" : "prototype",
    "data-proto-share",
    "Prototype or library"
  );
  const exit = protoShareWalk()
    ? ""
    : `<button type="button" data-proto-full="hide">Exit</button>`;
  const picks = libraryOn
    ? ""
    : `
      <div class="astral-preview-pick">
        <span>Flow</span>
        ${protoSelect({
          id: "preview-flow",
          label: "Flow",
          caption: true,
          kind: "up",
          value: protoFlowId(),
          options: PROTO_FLOWS.map((item) => ({
            value: item.id,
            label: item.name,
          })),
        })}
      </div>
      <div class="astral-preview-pick">
        <span>Company type</span>
        ${protoSelect({
          id: "preview-company",
          label: "Company type",
          caption: true,
          kind: "up",
          value: protoCompanyId(),
          options: PROTO_COMPANIES.map((item) => ({
            value: item.id,
            label: item.name,
          })),
        })}
      </div>
    `;
  return `
    <div class="astral-preview-menu">
      ${picks}
      ${walkTabs}
      ${protoGhost("Hide", "data-proto-preview=\"hide\"")}
      ${exit}
    </div>
  `;
}

function astralStageFillsBody(body) {
  const html = String(body || "");
  if (/\bastral-reports-sheet\b|\bastral-downloads\b|\bastral-spend\b/.test(html)) return true;
  if (/\bastral-hero\b|\bastral-metrics\b|\bastral-stack\b/.test(html)) return false;
  return (html.match(/<section class="astral-card/g) || []).length === 1;
}

function astralWrapStage(inner) {
  const html = String(inner || "");
  if (/\bastral-split\b/.test(html)) return html;
  const match = html.match(
    /^(\s*<header class="astral-page-head[\s\S]*?<\/header>)(\s*<div class="astral-stage-tools[\s\S]*?<\/div>)?([\s\S]*)$/
  );
  if (!match) return html;
  const tools = match[2] || "";
  const body = match[3] || "";
  if (!astralStageFillsBody(body)) return `${match[1]}\n${tools}\n${body}`;
  return `${match[1]}\n${tools}\n<div class="astral-stage-body">${body}</div>`;
}

function protoSeeAsBar() {
  const seeing = protoSeeAs();
  if (!seeing) return "";
  const who = seeing.kind === "user" ? seeing.name : seeing.company;
  return `
    <div class="astral-see-as" role="status">
      <p>Seeing as ${escapeHtml(who)}</p>
      ${protoGhost("Back to admin", 'data-proto-see-as="back"')}
    </div>
  `;
}

function astralShell(inner) {
  const state = protoState();
  protoArmDownloadTick();
  return `
    <div class="astral-app" style="${protoSkinStyle()}">
      ${astralNav(state)}
      ${protoSeeAsBar()}
      ${protoExportNotice()}
      <div class="astral-stage">
        ${astralWalk(state)}
        ${astralWrapStage(inner)}
        ${protoDateModal()}
        ${protoCompareModal()}
      </div>
      ${protoQueryPinOverlay()}
    </div>
  `;
}

function protoHomeFacts() {
  const data = protoData() || {};
  const sites = protoSites();
  const meters = protoMeters();
  const flagged = sites.filter((site) => protoSiteFlagWords(site).length);
  const reporting = meters.filter((item) => item.status === "online").length;
  const health = meters.length ? Math.round((reporting / meters.length) * 100) : 0;
  const alerts = data.alerts || [];
  const queries = protoQueryRows().length;
  const reports = protoReportList();
  return {
    data,
    sites,
    meters,
    flagged,
    reporting,
    health,
    alerts,
    queries,
    reports,
    catchItem: alerts[0],
  };
}

function protoWaitCard(title, line) {
  return `
    <article class="astral-card">
      <p class="astral-muted">${escapeHtml(title)}</p>
      <p class="astral-metric">Wait</p>
      <p>${escapeHtml(line)}</p>
    </article>
  `;
}

function protoCardSub(text) {
  return String(text || "").replace(/^[a-z]/, (ch) => ch.toUpperCase());
}

function protoStatButton(view, value, label, flag) {
  return `
    <button type="button" class="astral-stat${flag ? " is-flag" : ""}" data-proto-view="${escapeHtml(
      view
    )}">
      <span class="astral-stat-value">${value}</span>
      <span>${escapeHtml(protoCardSub(label))}</span>
      <span class="astral-stat-go">Open</span>
    </button>
  `;
}

function protoHomeEstate(facts) {
  const { data, sites, flagged, reporting, meters, health, catchItem } = facts;
  return `
    ${astralPageHead(
      "Estate overview",
      data.homeLead || "Sites, meters, faults, and use across this estate."
    )}
    <div class="astral-hero">
      ${protoStatButton(
        "alerts",
        flagged.length,
        flagged.length === 1 ? "Site needs action today" : "Sites need action today",
        flagged.length
      )}
      ${protoStatButton("portfolio", escapeHtml(data.kpis?.use || "None"), data.kpis?.useHint || "Use across the estate")}
      ${protoStatButton("portfolio", `${health}%`, `Data health across ${sites.length} sites`)}
    </div>
    <div class="astral-metrics">
      <article class="astral-card">
        <p class="astral-muted">Reporting</p>
        <p class="astral-metric">${reporting} of ${meters.length}</p>
        <p>Meters still sending actuals</p>
      </article>
      <article class="astral-card">
        <p class="astral-muted">Peak</p>
        <p class="astral-metric">${escapeHtml(data.kpis?.peak || "None")}</p>
        <p>${escapeHtml(data.kpis?.peakHint || "")}</p>
      </article>
      <article class="astral-card">
        <p class="astral-muted">Complete</p>
        <p class="astral-metric">${escapeHtml(data.kpis?.complete || "None")}</p>
        <p>${escapeHtml(data.kpis?.coverHint || "")}</p>
      </article>
    </div>
    ${
      catchItem
        ? `<button type="button" class="astral-catch" data-proto-meter="${escapeHtml(
            catchItem.meterId
          )}">
             <span class="astral-catch-copy">
               <span class="astral-kicker">Astral catch</span>
               <span><strong>${escapeHtml(catchItem.meter)}</strong> ${escapeHtml(catchItem.summary)}</span>
             </span>
             <span class="astral-stat-go">See how Astral caught it</span>
           </button>`
        : ""
    }
    <section class="astral-card">
      <div class="astral-card-head">
        <h3>Consumption across the estate</h3>
        <p class="astral-muted">Incoming only. Last day, half-hourly. Missing data stays empty.</p>
      </div>
      ${protoAreaChart(protoEstateSeries(), "Estate consumption")}
    </section>
  `;
}

function protoHomeBroker(facts) {
  const { flagged, alerts, reports } = facts;
  const live = reports.filter((item) => item.live).length;
  return `
    ${astralPageHead(
      "Customers you represent",
      "The letter of authority is the working list."
    )}
    <div class="astral-hero">
      ${protoStatButton("portfolio", 1, "Customer with a live letter")}
      ${protoStatButton("alerts", flagged.length, flagged.length === 1 ? "Site needs action" : "Sites need action", flagged.length)}
      ${protoStatButton("reports", live, live === 1 ? "Report switched on" : "Reports switched on")}
    </div>
    <button type="button" class="astral-catch" data-proto-view="portfolio">
      <span class="astral-catch-copy">
        <span class="astral-kicker">Network Rail</span>
        <span>Your letter of authority for this company expires in 6 weeks.</span>
      </span>
      <span class="astral-stat-go">Open</span>
    </button>
    <div class="astral-metrics">
      ${protoWaitCard("New access", "A list of letters that started or ended still waits.")}
      ${protoWaitCard("Failed deliveries", "Scheduled pushes still wait. Clockwork email stays on Reports.")}
      <article class="astral-card">
        <p class="astral-muted">Flags</p>
        <p class="astral-metric">${alerts.length}</p>
        <p>Odd use, missing data, and not sending on this letter.</p>
      </article>
    </div>
  `;
}

function protoHomeSupplier(facts) {
  const { sites, meters, flagged, reporting, health, queries } = facts;
  return `
    ${astralPageHead(
      "Service and data",
      "Exceptions and data health, not a use chart."
    )}
    <div class="astral-hero">
      ${protoStatButton("alerts", flagged.length, flagged.length === 1 ? "Site needs action" : "Sites need action", flagged.length)}
      ${protoStatButton("portfolio", `${health}%`, `Data health across ${sites.length} sites`)}
      ${protoStatButton("queries", queries, queries === 1 ? "Open query" : "Open queries")}
    </div>
    <div class="astral-metrics">
      <article class="astral-card">
        <p class="astral-muted">Sending</p>
        <p class="astral-metric">${reporting} of ${meters.length}</p>
        <p>Meters still sending actuals</p>
      </article>
      ${protoWaitCard("Customers", "A combined supplier portfolio still waits. You still open one customer at a time.")}
      ${protoWaitCard("Scheduled exports", "Clockwork email stays on Reports. Failed pushes still wait.")}
    </div>
  `;
}

function protoHomeAdmin() {
  const companies = protoTeamCompanyNames().length;
  const people = protoUserPeople().length;
  return `
    ${astralPageHead("Overview", "Companies and people on the platform.")}
    <div class="astral-hero">
      ${protoStatButton(
        "companies",
        companies,
        companies === 1 ? "Company on the platform" : "Companies on the platform"
      )}
      ${protoStatButton(
        "users",
        people,
        people === 1 ? "Person on the platform" : "People on the platform"
      )}
    </div>
    <div class="astral-metrics">
      ${protoWaitCard("Brokers", "Brokers sit on the side in live admin. The list still waits.")}
    </div>
  `;
}

function protoCompanies() {
  const q = String(store.prototypeCompanyQuery || "").trim().toLowerCase();
  const companies = protoTeamCompanyNames().filter(
    (name) => !q || name.toLowerCase().includes(q)
  );
  const rows = companies.map((name) => {
    const n = protoUserPeople().filter((person) => person.company === name).length;
    return [escapeHtml(name), `${n} ${n === 1 ? "person" : "people"}`];
  });
  const addOpen = Boolean(store.prototypeCompanyForm);
  return astralShell(`
    ${astralPageHead("Companies")}
    <section class="astral-card astral-pane">
      ${protoPaneShell(
        `
          <div class="astral-people-tools">
            ${protoSearchField({
              name: "proto-company-query",
              value: store.prototypeCompanyQuery || "",
              placeholder: "Search companies",
              label: "Search companies",
            })}
            ${protoBtn("Add a company", `data-proto-company="add" aria-haspopup="dialog" aria-expanded="${
              addOpen ? "true" : "false"
            }"`)}
          </div>
        `,
        protoTable(["Name", "People"], rows, {
          id: "companies",
          empty: "No companies match.",
          rowAttr: (row) =>
            `data-proto-see-as-company="${escapeHtml(protoPlainSortText(row[0]))}"`,
        })
      )}
    </section>
    ${protoCompanyAddModal()}
  `);
}

function protoHomeOwner(facts) {
  const { flagged, queries, reports } = facts;
  const live = reports.filter((item) => item.live).length;
  return `
    ${astralPageHead(
      "The service",
      "Spot what customers cannot fix themselves."
    )}
    <div class="astral-hero">
      ${protoStatButton("portfolio", 1, "Customer portfolio")}
      ${protoStatButton("alerts", flagged.length, flagged.length === 1 ? "Site needs action" : "Sites need action", flagged.length)}
      ${protoStatButton("users", protoUserPeople().length, "People you can see")}
    </div>
    <div class="astral-metrics">
      <article class="astral-card">
        <p class="astral-muted">Queries</p>
        <p class="astral-metric">${queries}</p>
        <p>Open queries.</p>
      </article>
      <article class="astral-card">
        <p class="astral-muted">Reports</p>
        <p class="astral-metric">${live}</p>
        <p>Reports switched on.</p>
      </article>
      ${protoWaitCard("Jobs", "Fault jobs still wait. Odd use sits on Alerts.")}
    </div>
  `;
}

function protoHomeOwnerSuper(facts) {
  const { flagged } = facts;
  return `
    ${astralPageHead(
      "This organisation",
      "Approve people and set who can see which sites. Not the whole platform."
    )}
    <div class="astral-hero">
      ${protoStatButton("users", protoUserPeople().length, "People in this organisation")}
      ${protoStatButton("portfolio", protoSites().length, "Sites they can see")}
      ${protoStatButton("alerts", flagged.length, flagged.length === 1 ? "Site needs action" : "Sites need action", flagged.length)}
    </div>
    <div class="astral-metrics">
      ${protoWaitCard("Approve", "Manual approve still waits. Invite is live on Users.")}
      ${protoWaitCard("Suspicious requests", "A queue for odd access still waits.")}
      ${protoWaitCard("Site access", "Sites sit on the person. Companies still live in admin.")}
    </div>
  `;
}

function protoHomeFinance(facts) {
  const live = facts.reports.filter((item) => item.live).length;
  return `
    ${astralPageHead(
      "Invoices and cost",
      "Find the bill, download it, and spot what is missing."
    )}
    <div class="astral-hero">
      ${protoStatButton("reports", live, "Reports switched on")}
      ${protoStatButton("alerts", facts.flagged.length, "Sites that may hit a bill", facts.flagged.length)}
      ${protoStatButton("queries", facts.queries, "Open queries")}
    </div>
    <div class="astral-metrics">
      ${protoWaitCard("Latest invoices", "Invoice list still waits.")}
      ${protoWaitCard("Missing invoices", "A missing bill list still waits.")}
      ${protoWaitCard("Cost trends", "A spend trend still waits. Highest spend sits on Finance.")}
    </div>
  `;
}

function protoHomeAsset(facts) {
  const { flagged, queries, meters } = facts;
  return `
    ${astralPageHead(
      "What is broken",
      "A fault, how bad it is, and whether it has been repaired."
    )}
    <div class="astral-hero">
      ${protoStatButton("alerts", flagged.length, flagged.length === 1 ? "Site needs action" : "Sites need action", flagged.length)}
      ${protoStatButton("queries", queries, queries === 1 ? "Open query" : "Open queries")}
      ${protoStatButton("portfolio", meters.length, "Meters")}
    </div>
    <div class="astral-metrics">
      ${protoWaitCard("Jobs", "Raise a job and track a visit still wait.")}
      ${protoWaitCard("Appointments", "Who is coming and when still wait.")}
      ${protoWaitCard("Recurrence", "A repeat fault view still waits.")}
    </div>
  `;
}

function protoHomeData(facts) {
  const reports = facts.reports.filter((item) => item.on);
  const sending = reports.filter((item) => item.file).length;
  const watching = reports.length - sending;
  return `
    ${astralPageHead(
      "Reports",
      "Scheduled extracts and tenant bills, plus alerts when data looks wrong."
    )}
    <div class="astral-hero">
      ${protoStatButton("reports", sending, sending === 1 ? "Report sent on a schedule" : "Reports sent on a schedule")}
      ${protoStatButton("reports", watching, watching === 1 ? "Alert watching your data" : "Alerts watching your data")}
      ${protoStatButton("portfolio", `${facts.health}%`, "Data health")}
    </div>
    <div class="astral-metrics">
      ${protoWaitCard("Sent history", "A list of past sends still waits.")}
      ${protoWaitCard("Failed sends", "A failed email or SFTP list still waits.")}
      ${protoWaitCard("Alert history", "A list of past alerts still waits.")}
    </div>
  `;
}

function protoHomeExceptions(facts) {
  const { meters, flagged, queries, data } = facts;
  const missing = (data.alerts || []).filter((item) => item.kind === "Gap" || item.kind === "Stale").length;
  return `
    ${astralPageHead(
      "What needs attention",
      "Health first, then the detail for Finance, Asset, or Data."
    )}
    <div class="astral-hero">
      ${protoStatButton("portfolio", meters.length, "Meters")}
      ${protoStatButton("alerts", flagged.length, flagged.length === 1 ? "Active fault site" : "Active fault sites", flagged.length)}
      ${protoStatButton("queries", queries, queries === 1 ? "Open query" : "Open queries")}
    </div>
    <div class="astral-metrics">
      <article class="astral-card">
        <p class="astral-muted">Missing or stale</p>
        <p class="astral-metric">${missing}</p>
        <p>Alerts that are missing data or not sending.</p>
      </article>
      ${protoWaitCard("Overdue jobs", "Job age still waits.")}
      ${protoWaitCard("Unusual use", "Odd use sits on Alerts. A dedicated exception list still waits.")}
    </div>
  `;
}

function protoHome() {
  const facts = protoHomeFacts();
  const kind = protoLens().home;
  let inner = protoHomeEstate(facts);
  if (kind === "broker") inner = protoHomeBroker(facts);
  else if (kind === "supplier") inner = protoHomeSupplier(facts);
  else if (kind === "admin") inner = protoHomeAdmin(facts);
  else if (kind === "owner") inner = protoHomeOwner(facts);
  else if (kind === "owner-super") inner = protoHomeOwnerSuper(facts);
  else if (kind === "finance") inner = protoHomeFinance(facts);
  else if (kind === "asset") inner = protoHomeAsset(facts);
  else if (kind === "data") inner = protoHomeData(facts);
  else if (kind === "exceptions") inner = protoHomeExceptions(facts);
  return astralShell(inner);
}

function protoSiteMatches(site, q) {
  if (!q) return true;
  const hay = [
    site.name,
    ...site.meters.map((item) => `${item.name} ${item.mpan || ""} ${item.mprn || ""} ${item.serial || ""}`),
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function protoTreeFilterIds() {
  const raw = Array.isArray(store.prototypeTreeFilters) ? store.prototypeTreeFilters : [];
  return raw.filter((id) => PROTO_TREE_FILTER_IDS.includes(id));
}

function protoPaneFilterIds() {
  const raw = Array.isArray(store.prototypePaneFilters) ? store.prototypePaneFilters : [];
  return raw.filter(
    (id) =>
      PROTO_PANE_FILTER_IDS.includes(id) &&
      id !== "in" &&
      id !== "out" &&
      id !== "electricity" &&
      id !== "gas" &&
      id !== "water"
  );
}

function protoPaneEffectiveFilterIds() {
  const pane = protoPaneFilterIds();
  const kinds = protoPaneMeterKindIds();
  if (kinds) {
    return kinds.length ? [...pane, ...kinds] : [...pane, "__none__"];
  }
  const treeMeters = protoPickedInGroup(protoTreeFilterIds(), "meter");
  return treeMeters.length ? [...pane, ...treeMeters] : pane;
}

function protoPaneFilterOpen() {
  return Boolean(store.prototypePaneFilterOpen);
}

function protoMetersVisible(meters, picked) {
  const ids = Array.isArray(picked) ? picked : [];
  if (ids.includes("__none__")) return [];
  const meterPicks = protoPickedInGroup(ids, "meter");
  return (meters || []).filter((item) => protoMeterKindOn(protoMeterKind(item), meterPicks));
}

function protoSitesForPane(sites) {
  const picked = protoPaneEffectiveFilterIds();
  return (sites || [])
    .filter((site) => protoSitePassesFilter(site, picked))
    .map((site) => ({ ...site, meters: protoMetersVisible(site.meters, picked) }))
    .filter((site) => site.meters.length);
}

function protoMetersForPane(meters) {
  return protoMetersVisible(meters, protoPaneEffectiveFilterIds());
}

function protoPaneAlerts(alerts) {
  const picked = protoPaneEffectiveFilterIds();
  return (alerts || []).filter((item) => {
    const meter = protoMeter(item.meterId);
    if (meter) return protoMeterPassesFilter(meter, picked);
    return protoSitePassesFilter(protoSiteByMeter(item.meterId), picked);
  });
}

function protoPaneQueries(rows) {
  const picked = protoPaneEffectiveFilterIds();
  return (rows || []).filter((row) => {
    const meter = protoMeter(row.meterId);
    if (meter) return protoMeterPassesFilter(meter, picked);
    return protoSitePassesFilter(protoSiteByMeter(row.meterId), picked);
  });
}

function protoTreeFilterOn() {
  return protoTreeFilterIds().length > 0;
}

function protoTreeFilterOpen() {
  return Boolean(store.prototypeTreeFilterOpen);
}

function protoFilterItemIds(groupId) {
  const group =
    PROTO_PANE_FILTERS.find((row) => row.id === groupId) ||
    PROTO_TREE_FILTERS.find((row) => row.id === groupId);
  return (group?.items || []).map((item) => item.id);
}

function protoPickedInGroup(picked, groupId) {
  return protoFilterItemIds(groupId).filter((id) => picked.includes(id));
}

function protoMeterIsTenant(meter) {
  return meter?.owned === "tenant";
}

function protoPickedPasses(picked, flags, meters) {
  const ids = Array.isArray(picked) ? picked : [];
  if (ids.includes("__none__")) return false;
  const list = meters || [];
  const meterPicks = protoPickedInGroup(ids, "meter");
  if (list.length) {
    const hit = list.some((item) => protoMeterKindOn(protoMeterKind(item), meterPicks));
    if (!hit) return false;
  }
  if (!ids.length) return true;
  const owned = protoPickedInGroup(ids, "owned");
  if (owned.length) {
    const hit = owned.some((id) => {
      if (id === "tenant") return list.some(protoMeterIsTenant);
      return false;
    });
    if (!hit) return false;
  }
  const flow = protoPickedInGroup(ids, "flow");
  if (flow.length) {
    const hit = list.some((item) => {
      const out = item.direction === "Export";
      return (flow.includes("out") && out) || (flow.includes("in") && !out);
    });
    if (!hit) return false;
  }
  return true;
}

function protoSitePassesFilter(site, picked) {
  const ids = Array.isArray(picked) ? picked : protoTreeFilterIds();
  return protoPickedPasses(ids, protoSiteFlagWords(site), site?.meters || []);
}

function protoMeterPassesFilter(meter, picked) {
  const ids = Array.isArray(picked) ? picked : protoCompareFilterIds();
  return protoPickedPasses(ids, protoMeterFlagWords(meter), meter ? [meter] : []);
}

function protoGroupPassesFilter(group, picked) {
  const ids = Array.isArray(picked) ? picked : protoCompareFilterIds();
  return (group?.sites || []).some((site) => protoSitePassesFilter(site, ids));
}

function protoTreeFilterName(id) {
  for (const group of [...PROTO_TREE_FILTERS, ...PROTO_PANE_FILTERS]) {
    const item = group.items.find((row) => row.id === id);
    if (item) return item.name;
  }
  return "";
}

function protoFilterMeterKind(id) {
  const raw = String(id || "").trim().toLowerCase();
  if (raw === "water") return "water";
  if (raw === "gas") return "gas";
  if (raw === "electricity") return "electricity";
  return "";
}

function protoFilterFace(id, label) {
  const name = label || protoTreeFilterName(id) || id;
  const flow = protoFlowKind(id);
  if (flow) return protoFlowMark(flow);
  const meter = protoFilterMeterKind(id);
  if (meter) {
    return `<span class="astral-filter-face">${protoIconMark(
      meter,
      "astral-meter-mark"
    )}<span>${escapeHtml(name)}</span></span>`;
  }
  return `<span>${escapeHtml(name)}</span>`;
}

let protoFilterPoolCache = null;

function protoFilterPool(attr) {
  if (attr !== "data-proto-pane-filter" && attr !== "data-proto-tree-filter") return null;
  if (!protoFilterPoolCache) {
    protoFilterPoolCache = new Map();
    queueMicrotask(() => {
      protoFilterPoolCache = null;
    });
  }
  if (!protoFilterPoolCache.has(attr)) {
    const meters =
      attr === "data-proto-pane-filter"
        ? protoPanePoolMeters() || []
        : protoSites().flatMap((site) => site.meters || []);
    protoFilterPoolCache.set(attr, meters);
  }
  return protoFilterPoolCache.get(attr);
}

const PROTO_FILTER_COUNTED = new Set(["electricity", "gas", "water", "tenant", "in", "out"]);

function protoFilterMeterHit(id, meter) {
  if (id === "electricity" || id === "gas" || id === "water") return protoMeterKind(meter) === id;
  if (id === "tenant") return protoMeterIsTenant(meter);
  if (id === "out") return meter.direction === "Export";
  if (id === "in") return meter.direction !== "Export";
  return null;
}

function protoFilterItemCount(attr, item) {
  const pool = protoFilterPool(attr);
  const id = item?.id;
  if (!pool || !id || !PROTO_FILTER_COUNTED.has(id)) return null;
  if (attr === "data-proto-tree-filter") {
    return protoSites().filter((site) => (site.meters || []).some((meter) => protoFilterMeterHit(id, meter)))
      .length;
  }
  return pool.filter((meter) => protoFilterMeterHit(id, meter)).length;
}

function protoFilterItemAvailable(attr, item) {
  const n = protoFilterItemCount(attr, item);
  return n === null || n > 0;
}

function protoFilterItemOn(attr, picked, item) {
  const id = item?.id;
  if (!id) return false;
  if (!protoFilterItemAvailable(attr, item)) return false;
  if (attr === "data-proto-pane-filter" && (id === "in" || id === "out")) return protoChartFlowOn(id);
  if (attr === "data-proto-pane-filter" && (id === "electricity" || id === "gas" || id === "water")) {
    return protoGraphMeterKinds().includes(id);
  }
  return (picked || []).includes(id);
}

function protoFilterGroupTickState(group, attr, picked) {
  const items = (group?.items || []).filter((item) => protoFilterItemAvailable(attr, item));
  if (!items.length) return "off";
  let n = 0;
  items.forEach((item) => {
    if (protoFilterItemOn(attr, picked, item)) n += 1;
  });
  if (!n) return "off";
  if (n === items.length) return "on";
  return "mix";
}

function protoFilterGroupSelectNext(picked, group, allOn, attr) {
  const ids = (group?.items || [])
    .filter((item) => !attr || protoFilterItemAvailable(attr, item))
    .map((item) => item.id);
  const cur = Array.isArray(picked) ? picked : [];
  if (allOn) return cur.filter((id) => !ids.includes(id));
  return [...cur.filter((id) => !ids.includes(id)), ...ids];
}

function protoPanePoolMeterKinds() {
  return ["electricity", "gas", "water"].filter((kind) =>
    protoPanePoolMeters().some((item) => protoMeterKind(item) === kind)
  );
}

function protoTogglePaneFilterGroup(groupId) {
  const group = PROTO_PANE_FILTERS.find((row) => row.id === groupId);
  if (!group) return;
  const picked = protoPaneFilterIds();
  const selectAll = protoFilterGroupTickState(group, "data-proto-pane-filter", picked) !== "on";
  const patch = {
    prototypePaneFilterOpen: true,
    prototypeChartPoint: null,
  };
  if (groupId === "meter") {
    patch.prototypePaneMeterKinds = selectAll ? protoPanePoolMeterKinds() : [];
  } else if (groupId === "flow") {
    patch.prototypeChartFlows = selectAll ? ["in", "out"] : [];
  } else {
    patch.prototypePaneFilters = protoFilterGroupSelectNext(
      picked,
      group,
      !selectAll,
      "data-proto-pane-filter"
    ).filter((id) =>
      PROTO_PANE_FILTER_IDS.includes(id)
    );
    if (groupId === "hours" || groupId === "tou") patch.prototypeChartSliceOff = [];
  }
  setProto(patch);
  protoRestoreFocus(`#astral-pane-filter-menu [data-proto-pane-filter-all="${CSS.escape(groupId)}"]`);
}

function protoToggleTreeFilterGroup(groupId) {
  const group = PROTO_TREE_FILTERS.find((row) => row.id === groupId);
  if (!group) return;
  const picked = protoTreeFilterIds();
  const selectAll = protoFilterGroupTickState(group, "data-proto-tree-filter", picked) !== "on";
  setProto({
    prototypeTreeFilterOpen: true,
    prototypeTreeFilters: protoFilterGroupSelectNext(
      picked,
      group,
      !selectAll,
      "data-proto-tree-filter"
    ).filter((id) =>
      PROTO_TREE_FILTER_IDS.includes(id)
    ),
  });
  protoRestoreFocus(`#astral-tree-filter-menu [data-proto-tree-filter-all="${CSS.escape(groupId)}"]`);
}

function protoToggleCompareFilterGroup(groupId) {
  const group = PROTO_TREE_FILTERS.find((row) => row.id === groupId);
  if (!group) return;
  const picked = protoCompareFilterIds();
  const selectAll = protoFilterGroupTickState(group, "data-proto-compare-filter", picked) !== "on";
  setProto({
    prototypeCompareFilterOpen: true,
    prototypeCompareFilters: protoFilterGroupSelectNext(picked, group, !selectAll).filter((id) =>
      PROTO_TREE_FILTER_IDS.includes(id)
    ),
  });
  protoRestoreFocus(`#astral-compare-filter-menu [data-proto-compare-filter-all="${CSS.escape(groupId)}"]`);
}

function protoToggleDownloadFilterGroup(groupId) {
  const group = PROTO_DOWNLOAD_FILTERS.find((row) => row.id === groupId);
  if (!group) return;
  const picked = protoDownloadFilterIds();
  const selectAll = protoFilterGroupTickState(group, "data-proto-download-filter", picked) !== "on";
  setProto({
    prototypeDownloadFilterOpen: true,
    prototypeDownloadFilters: protoDownloadFilterIds(
      protoFilterGroupSelectNext(picked, group, !selectAll)
    ),
  });
  protoRestoreFocus(`#astral-download-filter-menu [data-proto-download-filter-all="${CSS.escape(groupId)}"]`);
}

function protoToggleUserFilterGroup(groupId) {
  const group = protoUserFilterGroups().find((row) => row.id === groupId);
  if (!group) return;
  const picked = protoUserRoleFilterIds();
  const selectAll = protoFilterGroupTickState(group, "data-proto-user-filter", picked) !== "on";
  setProto({
    prototypeUserRoleFilterOpen: true,
    prototypeUserRoleFilter: protoUserRoleFilterIds(
      protoFilterGroupSelectNext(picked, group, !selectAll)
    ),
  });
  protoRestoreFocus(`#astral-user-filter-menu [data-proto-user-filter-all="${CSS.escape(groupId)}"]`);
}

const PROTO_FILTER_MENU_IDS = {
  "data-proto-tree-filter": "astral-tree-filter-menu",
  "data-proto-pane-filter": "astral-pane-filter-menu",
  "data-proto-compare-filter": "astral-compare-filter-menu",
  "data-proto-download-filter": "astral-download-filter-menu",
  "data-proto-user-filter": "astral-user-filter-menu",
};

let protoFilterSectionOpen = "";

function protoFilterSectionKey(menuId, groupId) {
  return `${menuId}:${groupId}`;
}

function protoFilterSectionDom(key) {
  return [...document.querySelectorAll("[data-proto-filter-section]")].find(
    (node) => node.dataset.protoFilterSection === key
  );
}

function protoFilterSectionOnItems(group, attr, picked) {
  return (group?.items || []).filter((item) => protoFilterItemOn(attr, picked, item));
}

function protoFilterSectionAllOn(group, attr, on) {
  const avail = (group?.items || []).filter((item) => protoFilterItemAvailable(attr, item));
  return on.length > 1 && on.length === avail.length;
}

function protoFilterSectionSummary(group, attr, picked) {
  if (!(group?.items || []).some((item) => protoFilterItemAvailable(attr, item))) {
    return "None in this view";
  }
  const on = protoFilterSectionOnItems(group, attr, picked);
  if (!on.length) return "None selected";
  if (protoFilterSectionAllOn(group, attr, on)) return "All";
  return on.map((item) => item.name).join(", ");
}

function protoFilterSectionPills(group, attr, picked) {
  const on = protoFilterSectionOnItems(group, attr, picked);
  if (!on.length || protoFilterSectionAllOn(group, attr, on)) return "";
  const pills = on
    .map(
      (item) =>
        `<span class="astral-filter-pill astral-filter-section-pill">${protoFilterFace(
          item.id,
          item.name
        )}</span>`
    )
    .join("");
  return `<span class="astral-filter-section-pills">${pills}</span>`;
}

function protoFilterSection(key, name, summary, body, face = "") {
  const open = protoFilterSectionOpen === key;
  const id = `astral-filter-section-${String(key).replace(/[^a-z0-9_-]+/gi, "-")}`;
  return `
    <div
      class="astral-filter-group astral-filter-section${open ? " is-open" : ""}"
      data-proto-filter-section="${escapeHtml(key)}"
    >
      <p id="${escapeHtml(id)}-label">${escapeHtml(name)}</p>
      <button
        type="button"
        class="astral-select-btn astral-filter-section-btn"
        aria-haspopup="true"
        aria-expanded="${open ? "true" : "false"}"
        aria-controls="${escapeHtml(id)}"
        aria-label="${escapeHtml(`${name}: ${summary}`)}"
        data-proto-filter-section-toggle="${escapeHtml(key)}"
      >
        ${face || `<span>${escapeHtml(summary)}</span>`}
        ${protoChevronMark("menu")}
      </button>
      ${protoFoldClip(
        open,
        id,
        `<div class="astral-filter-section-list" role="group" aria-labelledby="${escapeHtml(
          id
        )}-label">${body}</div>`
      )}
    </div>
  `;
}

function protoFilterSectionsLive() {
  if (!protoFilterSectionOpen) return;
  const menuId = protoFilterSectionOpen.split(":")[0];
  if (!protoOpenMenuKeys().includes(menuId)) protoFilterSectionOpen = "";
}

function protoFilterSectionFollow(menu, until) {
  const step = () => {
    protoPlaceFloatMenus();
    if (performance.now() < until) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  if (!menu) return;
  const reveal = () => {
    const open = menu.querySelector(".astral-filter-section.is-open");
    if (!open) return;
    const box = menu.getBoundingClientRect();
    const row = open.getBoundingClientRect();
    if (row.bottom > box.bottom - 8) {
      menu.scrollTop += Math.min(row.bottom - box.bottom + 8, row.top - box.top - 8);
    } else if (row.top < box.top) {
      menu.scrollTop -= box.top - row.top + 8;
    }
  };
  const clip = menu.querySelector(".astral-filter-section.is-open > .astral-fold-clip");
  if (clip) {
    clip.addEventListener("transitionend", reveal, { once: true });
    setTimeout(reveal, Math.max(0, until - performance.now()));
  }
}

function protoToggleFilterSection(key) {
  const next = protoFilterSectionOpen === key ? "" : key;
  const prev = protoFilterSectionOpen;
  protoFilterSectionOpen = next;
  [prev, next].filter(Boolean).forEach((item) => {
    const root = protoFilterSectionDom(item);
    if (!root) return;
    const open = item === next;
    root.classList.toggle("is-open", open);
    root
      .querySelector(":scope > .astral-filter-section-btn")
      ?.setAttribute("aria-expanded", open ? "true" : "false");
    const clip = root.querySelector(":scope > .astral-fold-clip");
    clip?.setAttribute("aria-hidden", open ? "false" : "true");
    clip?.toggleAttribute("inert", !open);
  });
  const menu = protoFilterSectionDom(key)?.closest(".astral-filter-menu");
  const ms = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 420;
  protoFilterSectionFollow(menu, performance.now() + ms);
}

function protoFilterTickGroups(picked, attr, groups = PROTO_TREE_FILTERS) {
  const menuId = PROTO_FILTER_MENU_IDS[attr] || attr;
  return groups.map((group) => {
    const state = protoFilterGroupTickState(group, attr, picked);
    const allOn = state === "on";
    const mix = state === "mix";
    const checked = allOn ? "true" : mix ? "mixed" : "false";
    const usable = group.items.some((item) => protoFilterItemAvailable(attr, item));
    const allBtn = `
      <button
        type="button"
        role="menuitemcheckbox"
        class="astral-filter-all${allOn ? " is-on" : ""}${mix ? " is-mix" : ""}${usable ? "" : " is-disabled"}"
        aria-checked="${checked}"
        aria-label="Select all ${escapeHtml(group.name)}"
        ${usable ? "" : `disabled aria-disabled="true"`}
        ${attr}-all="${escapeHtml(group.id)}"
      >
        <span class="astral-check${allOn ? " is-on" : ""}${mix ? " is-mix" : ""}" aria-hidden="true"></span>
        <span>All</span>
      </button>
    `;
    const options = group.items
      .map((item) => {
        const on = protoFilterItemOn(attr, picked, item);
        const avail = protoFilterItemAvailable(attr, item);
        const count = protoFilterItemCount(attr, item);
        const noun = attr === "data-proto-tree-filter" ? "site" : "meter";
        const countHtml =
          count === null
            ? ""
            : `<span class="astral-filter-count" aria-label="${count} ${noun}${
                count === 1 ? "" : "s"
              }">${count}</span>`;
        return `
          <button
            type="button"
            role="menuitemcheckbox"
            class="astral-filter-child${on ? " is-on" : ""}${avail ? "" : " is-disabled"}"
            aria-checked="${on ? "true" : "false"}"
            ${avail ? "" : `disabled aria-disabled="true" title="None in this view"`}
            ${attr}="${escapeHtml(item.id)}"
          >
            <span class="astral-check${on ? " is-on" : ""}" aria-hidden="true"></span>
            ${protoFilterFace(item.id, item.name)}
            ${countHtml}
          </button>
        `;
      })
      .join("");
    return protoFilterSection(
      protoFilterSectionKey(menuId, group.id),
      group.name,
      protoFilterSectionSummary(group, attr, picked),
      `${allBtn}${options}`,
      protoFilterSectionPills(group, attr, picked)
    );
  }).join("");
}

function protoFilterPills(picked, attr) {
  const ids = picked || [];
  if (!ids.length) return "";
  const pills = ids
    .map((id) => {
      const name = protoTreeFilterName(id);
      return `
        <span class="astral-filter-pill">
          ${protoFilterFace(id)}
          ${protoClearButton(
            "astral-filter-pill-clear",
            `${attr}="${escapeHtml(id)}"`,
            `Clear ${name}`
          )}
        </span>
      `;
    })
    .join("");
  return `
    <div class="astral-filter-pills">
      ${pills}
      ${protoTextBtn("Clear", `${attr}="clear"`)}
    </div>
  `;
}

function protoTreeFilterControl() {
  const open = protoTreeFilterOpen();
  const picked = protoTreeFilterIds();
  return protoFilterShell({
    hit: `data-proto-tree-filter="toggle"`,
    open,
    count: picked.length,
    menuId: "astral-tree-filter-menu",
    menu: protoFilterTickGroups(picked, "data-proto-tree-filter"),
  });
}

function protoPaneFilterControl() {
  const open = protoPaneFilterOpen();
  const picked = protoPaneFilterIds();
  return protoFilterShell({
    hit: `data-proto-pane-filter="toggle"`,
    open,
    count: picked.length,
    menuId: "astral-pane-filter-menu",
    menu: protoFilterTickGroups(picked, "data-proto-pane-filter", PROTO_PANE_FILTERS),
  });
}

function protoTreeFilterPills() {
  return protoFilterPills(protoTreeFilterIds(), "data-proto-tree-filter");
}

function protoPaneFilterPills() {
  return "";
}

function protoCompareFilterIds() {
  const raw = Array.isArray(store.prototypeCompareFilters) ? store.prototypeCompareFilters : [];
  return raw.filter((id) => PROTO_TREE_FILTER_IDS.includes(id));
}

function protoCompareFilterOpen() {
  return Boolean(store.prototypeCompareFilterOpen);
}

function protoCompareSortChoices() {
  const level = protoCompareLevel();
  const items = [
    { id: "name", name: "Name" },
    { id: "action", name: "Needs action" },
  ];
  if (level !== "meter") {
    items.push({ id: "count", name: level === "group" ? "Sites" : protoBelowSiteNoun(2) });
  }
  return items;
}

function protoCompareSortId() {
  const ids = protoCompareSortChoices().map((item) => item.id);
  const raw = String(store.prototypeCompareSort || "name");
  return ids.includes(raw) ? raw : "name";
}

function protoCompareSortName(id) {
  return protoCompareSortChoices().find((item) => item.id === id)?.name || "";
}

function protoCompareFilterCount() {
  return protoCompareFilterIds().length + (protoCompareSortId() === "name" ? 0 : 1);
}

function protoCompareSortPeers(rows, getName, getCount, getWords) {
  const sort = protoCompareSortId();
  return [...rows].sort((a, b) => {
    if (sort === "action") {
      const diff = protoActionRank(getWords(a)) - protoActionRank(getWords(b));
      if (diff) return diff;
    } else if (sort === "count") {
      const diff = getCount(b) - getCount(a);
      if (diff) return diff;
    }
    return getName(a).localeCompare(getName(b), "en-GB");
  });
}

function protoCompareFilterControl() {
  const open = protoCompareFilterOpen();
  const picked = protoCompareFilterIds();
  const sort = protoCompareSortId();
  const sorts = protoCompareSortChoices()
    .map((item) => {
      const on = sort === item.id;
      return `
        <button
          type="button"
          role="menuitemradio"
          class="${on ? "is-on" : ""}"
          aria-checked="${on ? "true" : "false"}"
          data-proto-compare-sort="${escapeHtml(item.id)}"
        >
          <span class="astral-check${on ? " is-on" : ""}" aria-hidden="true"></span>
          <span>${escapeHtml(item.name)}</span>
        </button>
      `;
    })
    .join("");
  return protoFilterShell({
    hit: `data-proto-compare-filter="toggle"`,
    open,
    count: protoCompareFilterCount(),
    menuId: "astral-compare-filter-menu",
    extraClass: "astral-compare-filter",
    menu: `${protoFilterTickGroups(picked, "data-proto-compare-filter")}
      ${protoFilterSection(
        protoFilterSectionKey("astral-compare-filter-menu", "sort"),
        "Sort",
        protoCompareSortName(sort),
        sorts
      )}`,
  });
}

function protoCompareFilterPills() {
  const picked = protoCompareFilterIds();
  const sort = protoCompareSortId();
  if (!picked.length && sort === "name") return "";
  const pills = [
    ...picked.map((id) => {
      const name = protoTreeFilterName(id);
      return `
        <span class="astral-filter-pill">
          ${protoFilterFace(id)}
          ${protoClearButton(
            "astral-filter-pill-clear",
            `data-proto-compare-filter="${escapeHtml(id)}"`,
            `Clear ${name}`
          )}
        </span>
      `;
    }),
    sort === "name"
      ? ""
      : `
        <span class="astral-filter-pill">
          <span>${escapeHtml(protoCompareSortName(sort))}</span>
          ${protoClearButton(
            "astral-filter-pill-clear",
            `data-proto-compare-sort="name"`,
            `Clear ${protoCompareSortName(sort)}`
          )}
        </span>
      `,
  ].join("");
  return `
    <div class="astral-filter-pills">
      ${pills}
      ${protoTextBtn("Clear", "data-proto-compare-filter=\"clear\"")}
    </div>
  `;
}

function protoEnglandOrg() {
  return protoOrgCountry() === "eng";
}

function protoBelowSiteNoun(count) {
  const n = Number(count);
  const plural = !Number.isFinite(n) || n !== 1;
  if (protoEnglandOrg()) return plural ? "MPANs" : "MPAN";
  return plural ? "meters" : "meter";
}

function protoMeterCountWords(n, meters) {
  const count = Number(n) || 0;
  const noun = meters ? protoSiteMeterNoun(meters) : protoBelowSiteNoun(count);
  return `${count} ${noun}`;
}

function protoSiteMeterNoun(meters) {
  const list = meters || [];
  const n = list.length;
  if (protoEnglandOrg()) return protoBelowSiteNoun(n);
  if (!n) return "meters";
  if (list.every((item) => protoMeterKind(item) === "electricity")) return n === 1 ? "MPAN" : "MPANs";
  if (list.every((item) => protoMeterKind(item) === "gas")) return n === 1 ? "MPRN" : "MPRNs";
  return n === 1 ? "meter" : "meters";
}

function protoSiteButton(site, on) {
  const n = site.meters.length;
  const noun = protoSiteMeterNoun(site.meters);
  const refs = (site.meters || []).map((item) => protoMeterRef(item)).filter(Boolean);
  const tip = refs.length ? `${n} ${noun}. ${refs.join(". ")}` : `${n} ${noun}`;
  const count = n
    ? protoIconTip(`<span class="astral-count">${n}</span>`, tip)
    : "";
  return `
    <button
      type="button"
      class="astral-site${on ? " is-on" : ""}"
      data-proto-site="${escapeHtml(site.meters[0]?.id || "")}"
      aria-label="${escapeHtml(`${site.name}, ${n} ${noun}`)}"
    >
      <span class="astral-site-copy">${escapeHtml(site.name)}</span>
      ${count}
    </button>
  `;
}

function protoExportControl(fileId) {
  if (!protoCanAct()) return "";
  const open = Boolean(store.prototypeExportOpen);
  return `
    <div class="astral-export">
      ${protoIconBtn(
        "export",
        "Export",
        `data-proto-export="toggle" aria-haspopup="menu" aria-expanded="${
          open ? "true" : "false"
        }" aria-controls="astral-export-menu"`,
        { on: open }
      )}
      <div
        id="astral-export-menu"
        class="astral-export-menu${open ? protoMenuEnterClass("export") : ""}"
        role="menu"
        aria-label="Export"
        ${open ? "" : "hidden"}
      >
        <button type="button" role="menuitem" data-proto-export="csv" data-proto-file="${escapeHtml(
          fileId
        )}">CSV</button>
        <button type="button" role="menuitem" data-proto-export="pdf" data-proto-file="${escapeHtml(
          fileId
        )}">PDF</button>
      </div>
    </div>
  `;
}

function protoKnownPane(raw) {
  if (raw === "alerts" || raw === "profile" || raw === "queries" || raw === "cost" || raw === "carbon") {
    return raw;
  }
  return "consumption";
}

function protoPaneId() {
  return protoKnownPane(store.prototypePane);
}

function protoPaneIsGraph() {
  const pane = protoPaneId();
  return pane === "consumption" || pane === "cost" || pane === "carbon";
}

function protoPaneChartLabel(dual) {
  const pane = protoPaneId();
  if (pane === "cost") return "Cost";
  if (pane === "carbon") return "Carbon";
  return dual ? "Incoming and outgoing" : "Consumption";
}

function protoChartIsGraph(label) {
  return (
    label === "Consumption" ||
    label === "Incoming and outgoing" ||
    label === "Cost" ||
    label === "Carbon"
  );
}

function protoMeasureUnit(meters) {
  const pane = protoPaneId();
  if (pane === "cost") return "£";
  if (pane === "carbon") return "kgCO2e";
  return protoMetersUseUnit(meters);
}

function protoMeasurePlaces() {
  return 1;
}

function protoMeasureFactor(meters) {
  const pane = protoPaneId();
  const list = meters || [];
  if (pane === "cost") {
    const billed = list.filter((item) => item.direction !== "Export");
    const use = billed.length ? billed : list;
    if (!use.length) return 0.18;
    return use.reduce((n, item) => n + protoMeterRatePence(item), 0) / use.length / 100;
  }
  if (pane === "carbon") {
    if (!list.length) return 0.2;
    return list.reduce((n, item) => n + protoMeterCarbonKg(item), 0) / list.length;
  }
  return 1;
}

function protoScaleValue(value, factor, places) {
  if (value == null) return null;
  return Number((Number(value) * factor).toFixed(places));
}

function protoScalePoints(points, meters) {
  const list = points || [];
  if (!protoPaneIsGraph()) return protoFilterProfilePoints(list, meters);
  if (protoPaneId() === "consumption") {
    const unit = protoMeasureUnit(meters);
    return protoFilterProfilePoints(
      list.map((point) => ({ ...point, unit: point.unit || unit })),
      meters
    );
  }
  const factor = protoMeasureFactor(meters);
  const places = protoMeasurePlaces(meters);
  const unit = protoMeasureUnit(meters);
  return protoFilterProfilePoints(
    list.map((point) => ({
      ...point,
      value: protoScaleValue(point.value, factor, places),
      last: point.last == null ? point.last : protoScaleValue(point.last, factor, places),
      unit,
    })),
    meters
  );
}

function protoScaleTracks(tracks, meters) {
  return (tracks || []).map((track) => ({
    ...track,
    points: protoScalePoints(track.points, track.meter ? [track.meter] : meters),
  }));
}

function protoPaneShell(headHtml, bodyHtml) {
  return `
    <div class="astral-detail">
      <div class="astral-pane-head">${headHtml}</div>
      <div class="astral-pane-body">
        ${bodyHtml}
      </div>
    </div>
  `;
}

function protoPaneTabs(alertCount, queryCount) {
  const active = protoPaneId();
  const alertsName = alertCount ? `Alerts · ${alertCount}` : "Alerts";
  const queriesName = queryCount ? `Queries · ${queryCount}` : "Queries";
  const items = [
    { id: "consumption", name: "Consumption" },
    { id: "cost", name: "Cost" },
    { id: "carbon", name: "Carbon" },
    { id: "profile", name: "Site profile" },
    { id: "alerts", name: alertsName },
    { id: "queries", name: queriesName },
  ];
  return protoTabs(
    items,
    active,
    "data-proto-pane",
    "Consumption, Cost, Carbon, Site profile, Alerts, and Queries"
  );
}

function protoMeterFacts(meter) {
  const kind = protoMeterKind(meter);
  const site = protoSiteByMeter(meter?.id);
  return {
    ref: protoMeterRef(meter),
    refName: kind === "water" ? "Serial" : kind === "gas" ? "MPRN" : "MPAN",
    commodity: kind === "water" ? "Water" : kind === "gas" ? "Gas" : "Electricity",
    channel: protoChannelLabel(meter) || "In",
    hours: protoClockShow(protoHoursSummary(protoMeterProfile(meter?.id)) || meter?.hours || "Unknown"),
    tou: protoTouSummary(protoMeterProfile(meter?.id)) || meter?.tou || "Unknown",
    tariff: meter?.tariff || "Unknown",
    use: meter?.use24h || "None",
    site: site?.name || meter?.site || "",
  };
}

function protoOpenMeter() {
  const id = String(store.prototypeMeterOpen || "");
  if (!id || id === "none") return null;
  return protoMeters().find((item) => item.id === id) || null;
}

function protoMeterOpenId(meters) {
  const open = protoOpenMeter();
  if (!open) return "";
  const ids = (meters || []).map((item) => item.id).filter(Boolean);
  return ids.includes(open.id) ? open.id : "";
}

const PROTO_SITE_GEO = {
  "Aberdeen": [57.1437, -2.0985],
  "Ashford International": [51.1435, 0.8763],
  "Aviemore": [57.1885, -3.8288],
  "Ayr": [55.4582, -4.6258],
  "Basingstoke": [51.2684, -1.0876],
  "Bath Spa": [51.3777, -2.357],
  "Birmingham": [52.4778, -1.8987],
  "Birmingham retail": [52.4778, -1.8987],
  "Blackpool North": [53.8219, -3.0493],
  "Bolton": [53.5742, -2.4258],
  "Brighton": [50.829, -0.1413],
  "Bristol Parkway": [51.5138, -2.5427],
  "Bristol Temple Meads": [51.4495, -2.5813],
  "Cambridge": [52.194, 0.1375],
  "Cardiff Central": [51.4752, -3.178],
  "Carlisle": [54.8909, -2.9338],
  "Cheltenham Spa": [51.8974, -2.0996],
  "Chester": [53.1965, -2.8797],
  "Chichester": [50.832, -0.7817],
  "Clapham Junction": [51.4642, -0.1703],
  "Coventry": [52.4008, -1.5135],
  "Crewe depot": [53.0894, -2.4414],
  "Darlington": [54.5205, -1.5473],
  "Didcot Parkway": [51.6108, -1.2426],
  "Doncaster": [53.5222, -1.1395],
  "Doncaster depot": [53.511, -1.14],
  "Dundee": [56.4565, -2.9712],
  "Durham": [54.7794, -1.5816],
  "East Croydon": [51.3752, -0.0928],
  "Eastbourne": [50.7694, 0.2812],
  "Edinburgh Waverley": [55.952, -3.189],
  "Euston": [51.5284, -0.1331],
  "Euston retail": [51.5284, -0.1331],
  "Exeter St Davids": [50.7292, -3.5435],
  "Falkirk High": [55.9917, -3.7925],
  "Fort William": [56.8206, -5.1047],
  "Gatwick Airport": [51.1565, -0.161],
  "Glasgow Central": [55.859, -4.258],
  "Glasgow Queen Street": [55.8622, -4.2512],
  "Gloucester": [51.8656, -2.2387],
  "Grantham": [52.9065, -0.6425],
  "Guildford": [51.2368, -0.5801],
  "Harrogate": [53.9933, -1.5376],
  "Hastings": [50.8553, 0.5758],
  "Haymarket": [55.9456, -3.2185],
  "Hereford": [52.0613, -2.7083],
  "Hull": [53.744, -0.3465],
  "Inverkeithing": [56.0347, -3.3955],
  "Inverness": [57.48, -4.223],
  "Ipswich": [52.0507, 1.1443],
  "King's Cross": [51.5308, -0.1238],
  "Kirkcaldy": [56.112, -3.16],
  "Lancaster": [54.0489, -2.8083],
  "Leeds": [53.7955, -1.548],
  "Lincoln": [53.2265, -0.54],
  "Liverpool Lime Street": [53.4075, -2.9778],
  "London Bridge": [51.505, -0.086],
  "London Victoria": [51.4952, -0.1441],
  "Macclesfield": [53.2595, -2.1219],
  "Manchester Piccadilly": [53.4774, -2.2309],
  "Manchester Traction": [53.461, -2.201],
  "Milton Keynes Central": [52.0343, -0.7742],
  "Motherwell depot": [55.7915, -3.993],
  "Newark North Gate": [53.081, -0.8],
  "Newcastle": [54.9682, -1.6173],
  "Newport": [51.5888, -3],
  "Norwich": [52.6272, 1.3067],
  "Nuneaton": [52.5265, -1.4638],
  "Oxford": [51.7535, -1.2701],
  "Paddington retail": [51.5154, -0.1755],
  "Paisley Gilmour Street": [55.8475, -4.4243],
  "Penzance": [50.1217, -5.5325],
  "Perth": [56.3915, -3.4397],
  "Peterborough": [52.5748, -0.2502],
  "Plymouth": [50.3778, -4.1434],
  "Portsmouth Harbour": [50.7969, -1.1073],
  "Preston": [53.7569, -2.7082],
  "Reading": [51.4588, -0.9719],
  "Richmond": [51.4633, -0.3017],
  "Rugby": [52.379, -1.2503],
  "Scarborough": [54.2797, -0.4055],
  "Sheffield": [53.3781, -1.4623],
  "Slough": [51.5119, -0.5915],
  "Southampton Central": [50.9075, -1.4135],
  "Stafford": [52.8039, -2.122],
  "Stevenage": [51.9017, -0.2072],
  "Stirling": [56.1198, -3.9356],
  "Stockport": [53.4055, -2.1625],
  "Stoke-on-Trent": [53.008, -2.18],
  "Swansea": [51.6185, -3.941],
  "Swindon depot": [51.5655, -1.785],
  "Tamworth": [52.6373, -1.687],
  "Taunton": [51.0233, -3.1028],
  "Three Bridges": [51.1178, -0.1612],
  "Truro": [50.264, -5.064],
  "Warrington depot": [53.3865, -2.6025],
  "Waterloo": [51.5031, -0.1132],
  "Wigan North Western": [53.5436, -2.633],
  "Wilmslow": [53.3268, -2.2265],
  "Wimbledon depot": [51.422, -0.2065],
  "Woking": [51.3185, -0.557],
  "Wolverhampton": [52.5878, -2.1197],
  "Worcester Foregate Street": [52.195, -2.2217],
  "Worthing": [50.8185, -0.3758],
  "York Traction": [53.955, -1.103],
  "York station": [53.9583, -1.093],
};

function protoSiteLatLng(place) {
  const name = String(place || "");
  if (PROTO_SITE_GEO[name]) return PROTO_SITE_GEO[name];
  const shortened = name.replace(/ (retail|station)$/i, "");
  return PROTO_SITE_GEO[shortened] || null;
}

function protoMeterMap(place) {
  const name = String(place || "Site");
  const at = protoSiteLatLng(name);
  if (!at) {
    return `
    <div class="astral-meter-map" role="img" aria-label="${escapeHtml(name)}">
      <div class="astral-meter-map-view"></div>
      <p>${escapeHtml(name)}</p>
    </div>
  `;
  }
  const [lat, lng] = at;
  const dLat = 0.006;
  const dLng = 0.01;
  const bbox = [lng - dLng, lat - dLat, lng + dLng, lat + dLat].map((n) => n.toFixed(5)).join("%2C");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik`;
  return `
    <div class="astral-meter-map" role="img" aria-label="${escapeHtml(name)}">
      <div class="astral-meter-map-view">
        <iframe
          src="${src}"
          title=""
          tabindex="-1"
          aria-hidden="true"
          loading="lazy"
          sandbox="allow-scripts"
        ></iframe>
        <svg class="astral-meter-map-mark" viewBox="0 0 24 28" aria-hidden="true" focusable="false">
          <path d="M12 1.6c-4.4 0-8 3.5-8 7.8 0 5.9 8 14.4 8 14.4s8-8.5 8-14.4c0-4.3-3.6-7.8-8-7.8z" />
          <circle cx="12" cy="9.2" r="2.7" />
        </svg>
        <a
          class="astral-meter-map-copy"
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer"
        >© OpenStreetMap</a>
      </div>
      <p>${escapeHtml(name)}</p>
    </div>
  `;
}

function protoMeterClockField(name, value, label) {
  return `
    <label class="astral-field">
      <span class="sr-only">${escapeHtml(label)}</span>
      <input
        type="text"
        class="astral-clock-input"
        name="${escapeHtml(name)}"
        value="${escapeHtml(protoClockShow(value))}"
        inputmode="numeric"
        autocomplete="off"
        spellcheck="false"
        maxlength="5"
        placeholder="00:00"
      />
    </label>
  `;
}

function protoMeterAttrField(name, label, value, unit) {
  const unitId = `astral-meter-attr-unit-${name}`;
  return `
    <label class="astral-field astral-meter-attr">
      <span>${escapeHtml(label)}</span>
      <span class="astral-input-unit">
        <input
          type="text"
          name="${escapeHtml(name)}"
          value="${escapeHtml(value || "")}"
          inputmode="decimal"
          autocomplete="off"
          spellcheck="false"
          aria-describedby="${escapeHtml(unitId)}"
        />
        <span class="astral-field-unit" id="${escapeHtml(unitId)}">${escapeHtml(unit)}</span>
      </span>
    </label>
  `;
}

function protoMeterAttrGroup(name, fields) {
  return `
    <fieldset class="astral-meter-attr-group">
      <legend>${escapeHtml(name)}</legend>
      <div class="astral-meter-attr-grid">${fields.join("")}</div>
    </fieldset>
  `;
}

function protoMeterAttrFields(meter, attrs) {
  const kind = protoMeterKind(meter);
  const key = kind === "water" ? "Water" : kind === "gas" ? "Gas" : "Elec";
  const useUnit = kind === "water" ? "m³" : "kWh";
  const site = [
    protoMeterAttrField("area", "Floor area", attrs.area, "m²"),
    protoMeterAttrField("employees", "Number of employees", attrs.employees, "people"),
  ];
  const supply = [
    ...(kind === "electricity"
      ? [protoMeterAttrField("capacity", "Supply capacity", attrs.capacity, "kVA")]
      : []),
    protoMeterAttrField(
      `emissions${key}`,
      "Emissions factor",
      attrs[`emissions${key}`],
      `kgCO2e/${useUnit}`
    ),
  ];
  const rates = [
    protoMeterAttrField(`standing${key}`, "Daily standing charge", attrs[`standing${key}`], "£/day"),
    ...(kind === "water"
      ? [protoMeterAttrField("unitWater", "Unit rate", attrs.unitWater, "p/m³")]
      : [
          protoMeterAttrField(`on${key}`, "On-peak unit rate", attrs[`on${key}`], "p/kWh"),
          protoMeterAttrField(`off${key}`, "Off-peak unit rate", attrs[`off${key}`], "p/kWh"),
        ]),
  ];
  return [
    protoMeterAttrGroup("Site", site),
    protoMeterAttrGroup(kind === "electricity" ? "Supply and carbon" : "Carbon", supply),
    protoMeterAttrGroup("Rates", rates),
  ].join("");
}

function protoMeterFoldId() {
  const raw = String(store.prototypeMeterFold || "");
  return raw === "hours" || raw === "tou" || raw === "rates" ? raw : "";
}

function protoMeterSettingsId() {
  const id = String(store.prototypeMeterSettings || "");
  if (!id) return "";
  const meter = protoMeter(id);
  if (!meter) return "";
  const site = protoSiteByMeter(id);
  const visible = protoMetersForPane(site?.meters || []);
  return visible.some((item) => item.id === id) ? id : "";
}

function protoMeterSettingsMeter() {
  const id = protoMeterSettingsId();
  return id ? protoMeter(id) : null;
}

function protoMeterSettingsReset() {
  return {
    prototypeMeterSettings: "",
    prototypeMeterFold: "",
  };
}

function protoMeterSettingsBtn(meter) {
  if (!meter?.id || !protoCanAct()) return "";
  return protoGhost(
    `${protoIconMark("settings")}<span>Settings</span>`,
    `data-proto-meter-settings="${escapeHtml(meter.id)}"`,
    { html: true }
  );
}

function protoMeterOverview(meter) {
  const facts = protoMeterFacts(meter);
  const site = protoSiteByMeter(meter?.id);
  return `
    <div class="astral-meter-overview">
      ${protoMeterMap(site?.name || facts.site)}
      <dl class="astral-meter-meta">
        <div>
          <dt>${protoProfileFactMark("hours")}Operational hours</dt>
          <dd>${escapeHtml(facts.hours)}</dd>
        </div>
        <div>
          <dt>${protoProfileFactMark("tou")}Time of use</dt>
          <dd>${escapeHtml(facts.tou)}</dd>
        </div>
        <div>
          <dt>${protoProfileFactMark("rates")}Attributes</dt>
          <dd>${escapeHtml(facts.tariff)}</dd>
        </div>
      </dl>
      ${protoMeterSettingsBtn(meter)}
    </div>
  `;
}

function protoMeterSettingsPage(meter, site) {
  const facts = protoMeterFacts(meter);
  const title = [facts.refName, facts.ref].filter(Boolean).join(" ");
  return protoPaneShell(
    `
        <div class="astral-detail-head">
          <div class="astral-detail-lead">
            ${protoIconBtn("prev", "Back", "data-proto-meter-close")}
            <div>
              ${protoPaneKicker(protoPaneAbove("meter", meter) || site?.name || facts.site)}
              <h3>${escapeHtml(title)}</h3>
            </div>
          </div>
        </div>
          `,
    protoMeterProfileForm(meter)
  );
}

function protoMeterSectionFold(id, name, kind, inner) {
  const open = protoMeterFoldId() === id;
  const clipId = `astral-meter-fold-${id}`;
  return `
    <article class="astral-meter-fold${open ? " is-open" : ""}">
      <button
        type="button"
        class="astral-meter-fold-head"
        data-proto-meter-fold="${escapeHtml(id)}"
        aria-expanded="${open ? "true" : "false"}"
        aria-controls="${escapeHtml(clipId)}"
      >
        <span class="astral-meter-row-toggle" aria-hidden="true">${protoChevronMark("down")}</span>
        <span class="astral-meter-fold-name">${protoProfileFactMark(kind)}${escapeHtml(name)}</span>
      </button>
      ${protoFoldClip(open, clipId, `<div class="astral-meter-fold-body">${inner}</div>`)}
    </article>
  `;
}

function protoMeterProfileForm(meter) {
  const id = meter.id;
  const draft = protoMeterDraft(id);
  const dirty = protoMeterDirty(id);
  const hourRows = draft.hours
    .map((row, i) => {
      const closed = row.status !== "operational";
      return `
        <tr>
          <th scope="row">${escapeHtml(row.day)}</th>
          <td>
            ${protoSelect({
              id: `meter-hours-status-${id}-${i}`,
              label: `${row.day} hours`,
              value: row.status,
              options: PROTO_DAY_STATUS.map((item) => ({ value: item.id, label: item.name })),
            })}
          </td>
          <td>${closed ? "" : protoMeterClockField(`hours-from-${i}`, row.from, `${row.day} from`)}</td>
          <td>${closed ? "" : protoMeterClockField(`hours-to-${i}`, row.to, `${row.day} to`)}</td>
          <td>
            ${protoSelect({
              id: `meter-hours-profile-${id}-${i}`,
              label: `Select profile for ${row.day} hours`,
              value: row.profile || "",
              placeholder: "Select profile",
              options: PROTO_HOUR_PROFILES.map((item) => ({ value: item.id, label: item.name })),
            })}
          </td>
        </tr>
      `;
    })
    .join("");
  const touRows = draft.tou
    .map((row, i) => {
      return `
        <tr>
          <th scope="row">${escapeHtml(row.day)}</th>
          <td>${protoMeterClockField(`tou-on-from-${i}`, row.onFrom, `${row.day} on peak from`)}</td>
          <td>${protoMeterClockField(`tou-on-to-${i}`, row.onTo, `${row.day} on peak to`)}</td>
          <td>${protoMeterClockField(`tou-off-from-${i}`, row.offFrom, `${row.day} off peak from`)}</td>
          <td>${protoMeterClockField(`tou-off-to-${i}`, row.offTo, `${row.day} off peak to`)}</td>
          <td>
            ${protoSelect({
              id: `meter-tou-profile-${id}-${i}`,
              label: `Select profile for ${row.day} time of use`,
              value: row.profile || "",
              placeholder: "Select profile",
              options: PROTO_TOU_PROFILES.map((item) => ({ value: item.id, label: item.name })),
            })}
          </td>
        </tr>
      `;
    })
    .join("");
  const hoursTable = `
        <div class="astral-table-wrap">
          <table class="astral-table">
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Status</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Select profile</th>
              </tr>
            </thead>
            <tbody>${hourRows}</tbody>
          </table>
        </div>
  `;
  const touTable = `
        <div class="astral-table-wrap">
          <table class="astral-table">
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">On peak from</th>
                <th scope="col">On peak to</th>
                <th scope="col">Off peak from</th>
                <th scope="col">Off peak to</th>
                <th scope="col">Select profile</th>
              </tr>
            </thead>
            <tbody>${touRows}</tbody>
          </table>
        </div>
  `;
  return `
    <form class="astral-meter-profile" data-proto-meter-profile="${escapeHtml(id)}">
      <div class="astral-meter-folds">
        ${protoMeterSectionFold("hours", "Operational hours", "hours", hoursTable)}
        ${protoMeterSectionFold("tou", "Time of use", "tou", touTable)}
        ${protoMeterSectionFold(
          "rates",
          "Attributes",
          "rates",
          `<div class="astral-meter-attrs">${protoMeterAttrFields(meter, draft.attrs)}</div>`
        )}
      </div>
      <div class="astral-actions">
        ${protoBtn("Save changes", `${dirty && protoCanAct() ? "" : " disabled"}`, {
          type: "submit",
          disabled: !(dirty && protoCanAct()),
        })}
      </div>
    </form>
  `;
}

function protoMeterRow(meter) {
  const facts = protoMeterFacts(meter);
  const channel = facts.channel;
  const title = [facts.refName, facts.ref].filter(Boolean).join(" ");
  const open = protoOpenMeter()?.id === meter.id;
  const clipId = `astral-meter-row-${meter.id}`;
  const spoken = [title, facts.commodity, facts.channel, facts.hours, facts.use].filter(Boolean).join(", ");
  return `
    <article class="astral-meter-row${open ? " is-open" : ""}">
      <button
        type="button"
        class="astral-meter-row-head"
        data-proto-meter-open="${escapeHtml(meter.id)}"
        aria-expanded="${open ? "true" : "false"}"
        aria-controls="${escapeHtml(clipId)}"
        aria-label="${escapeHtml(spoken)}"
      >
        <span class="astral-meter-row-toggle" aria-hidden="true">${protoChevronMark("down")}</span>
        <span class="astral-meter-ref">${protoMeterMark(meter.commodity)}<span>${escapeHtml(title)}</span></span>
        <span class="astral-meter-channel">${protoFlowPill(protoFlowKind(channel) || "in")}</span>
        <span class="astral-meter-hours">${escapeHtml(facts.hours)}</span>
        <span class="astral-meter-use">${escapeHtml(facts.use)}</span>
      </button>
      ${
        open
          ? protoFoldClip(
              true,
              clipId,
              `<div class="astral-meter-row-body">${protoMeterOverview(meter)}</div>`
            )
          : protoFoldClip(false, clipId, "")
      }
    </article>
  `;
}

function protoMeterList(meters) {
  const rows = (meters || []).filter(Boolean);
  if (!rows.length) return "";
  return `
    <div class="astral-meter-list">
      <div class="astral-meter-list-head">
        <span class="astral-meter-row-toggle" aria-hidden="true"></span>
        <span>Meter</span>
        <span>Channel</span>
        <span>Hours</span>
        <span>Use</span>
      </div>
      ${rows.map((meter) => protoMeterRow(meter)).join("")}
    </div>
  `;
}

function protoProfileFactMark(kind) {
  if (kind !== "hours" && kind !== "tou" && kind !== "rates") return "";
  return protoIconMark(kind, "astral-meter-mark");
}

function protoSiteFacts(site) {
  return protoMeterFacts(site?.meters?.[0]);
}

function protoProfilePane(sites) {
  const rows = protoSortedRows("site-profile", (sites || []).filter(Boolean), (site, key) => {
    const facts = protoSiteFacts(site);
    if (key === "site") return site.name;
    if (key === "hours") return facts.hours;
    if (key === "time-of-use") return facts.tou;
    if (key === "rates") return facts.tariff;
    return "";
  });
  if (!rows.length) {
    return `<p class="astral-muted">Hours, time of use, and rates sit on a site.</p>`;
  }
  if (rows.length === 1) {
    const meters = protoSiteViewMeters(rows[0]);
    if (!meters.length) {
      return `<p class="astral-muted">Hours, time of use, and rates sit on a site.</p>`;
    }
    return protoMeterList(meters);
  }
  return `
    <p class="astral-muted">Hours, time of use, and rates for each site.</p>
    <div class="astral-table-wrap">
      <table class="astral-table">
        <thead>
          <tr>
            ${protoSortHead("site-profile", "site", "Site")}
            ${protoSortHead("site-profile", "hours", "Hours")}
            ${protoSortHead("site-profile", "time-of-use", "Time of use")}
            ${protoSortHead("site-profile", "rates", "Rates")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map((site) => {
              const facts = protoSiteFacts(site);
              return `
                <tr data-proto-site="${escapeHtml(protoSiteId(site))}">
                  <td>${escapeHtml(site.name)}</td>
                  <td>${escapeHtml(facts.hours)}</td>
                  <td>${escapeHtml(facts.tou)}</td>
                  <td>${escapeHtml(facts.tariff)}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function protoDownloadsFrom(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const kind = item.kind === "pdf" ? "pdf" : item.kind === "csv" ? "csv" : "";
      const id = String(item.id || "");
      const fileId = String(item.fileId || "");
      if (!kind || !id || !fileId) return null;
      const waitMs = Number(item.waitMs) || 0;
      const type = item.type === "report" || String(id).startsWith("clockwork-") ? "report" : "export";
      return {
        id,
        kind,
        type,
        fileId,
        name: String(item.name || "Interval").slice(0, 120),
        added: Number(item.added) || 0,
        waitMs: waitMs > 0 ? waitMs : 0,
      };
    })
    .filter(Boolean)
    .slice(0, 40);
}

function protoDownloadType(item) {
  return item?.type === "report" || String(item?.id || "").startsWith("clockwork-")
    ? "report"
    : "export";
}

function protoDownloadTypeName(item) {
  return protoDownloadType(item) === "report" ? "Report" : "Data export";
}

function protoDownloadTypeTag(item) {
  const type = protoDownloadType(item);
  const label = protoDownloadTypeName(item);
  return `<span class="astral-tag is-${type}">${escapeHtml(label)}</span>`;
}

const PROTO_DOWNLOAD_MS = 90000;
const PROTO_DOWNLOAD_DEMO_MS = 6000;
const PROTO_DOWNLOAD_TICK_MS = 250;

function protoDownloadWaitMs(item) {
  const wait = Number(item?.waitMs) || 0;
  return wait > 0 ? wait : PROTO_DOWNLOAD_MS;
}

function protoDownloadElapsedMs(item) {
  return Math.max(0, Date.now() - Number(item?.added || 0));
}

function protoDownloadLeftMs(item) {
  return Math.max(0, protoDownloadWaitMs(item) - protoDownloadElapsedMs(item));
}

function protoDownloadPct(item) {
  const wait = protoDownloadWaitMs(item);
  if (wait <= 0) return 100;
  return Math.min(100, Math.round((protoDownloadElapsedMs(item) / wait) * 100));
}

function protoDownloadLeftCopy(ms) {
  const sec = Math.max(0, Math.ceil(ms / 1000));
  if (sec >= 60) {
    const mins = Math.max(1, Math.round(sec / 60));
    return mins === 1 ? "1 minute left" : `${mins} minutes left`;
  }
  if (sec <= 0) return "";
  return sec === 1 ? "1 second left" : `${sec} seconds left`;
}

function protoDownloadReady(item) {
  return protoDownloadLeftMs(item) <= 0;
}

const PROTO_DOWNLOAD_FILTERS = [
  {
    id: "kind",
    name: "Kind",
    items: [
      { id: "csv", name: "CSV" },
      { id: "pdf", name: "PDF" },
    ],
  },
  {
    id: "type",
    name: "Type",
    items: [
      { id: "report", name: "Report" },
      { id: "export", name: "Data export" },
    ],
  },
  {
    id: "wait",
    name: "Status",
    items: [{ id: "processing", name: "Processing" }],
  },
];
const PROTO_DOWNLOAD_FILTER_IDS = PROTO_DOWNLOAD_FILTERS.flatMap((group) =>
  group.items.map((item) => item.id)
);

function protoDownloadFilterIds(raw) {
  const list = Array.isArray(raw) ? raw : Array.isArray(store.prototypeDownloadFilters)
    ? store.prototypeDownloadFilters
    : [];
  return list.filter((id) => PROTO_DOWNLOAD_FILTER_IDS.includes(id));
}

function protoDownloadQuery() {
  return String(store.prototypeDownloadQuery || "");
}

function protoDownloadFilterOpen() {
  return Boolean(store.prototypeDownloadFilterOpen);
}

function protoDownloadFilterName(id) {
  for (const group of PROTO_DOWNLOAD_FILTERS) {
    const item = group.items.find((row) => row.id === id);
    if (item) return item.name;
  }
  return id;
}

function protoDownloadMatches(item, q, picked) {
  const query = String(q || "").trim().toLowerCase();
  if (query) {
    const hay = `${item.name} ${item.kind === "pdf" ? "pdf" : "csv"} ${
      protoDownloadTypeName(item)
    }`.toLowerCase();
    if (!hay.includes(query)) return false;
  }
  const ids = Array.isArray(picked) ? picked : protoDownloadFilterIds();
  const kinds = ids.filter((id) => id === "csv" || id === "pdf");
  if (kinds.length && !kinds.includes(item.kind === "pdf" ? "pdf" : "csv")) return false;
  const types = ids.filter((id) => id === "report" || id === "export");
  if (types.length && !types.includes(protoDownloadType(item))) return false;
  if (ids.includes("processing") && protoDownloadReady(item)) return false;
  return true;
}

function protoDownloadFilterControl() {
  const picked = protoDownloadFilterIds();
  return protoFilterShell({
    hit: `data-proto-download-filter="toggle"`,
    open: protoDownloadFilterOpen(),
    count: picked.length,
    menuId: "astral-download-filter-menu",
    menu: protoFilterTickGroups(picked, "data-proto-download-filter", PROTO_DOWNLOAD_FILTERS),
  });
}

function protoDownloadFilterPills() {
  const picked = protoDownloadFilterIds();
  if (!picked.length) return "";
  const pills = picked
    .map((id) => {
      const name = protoDownloadFilterName(id);
      return `
        <span class="astral-filter-pill">
          <span>${escapeHtml(name)}</span>
          ${protoClearButton(
            "astral-filter-pill-clear",
            `data-proto-download-filter="${escapeHtml(id)}"`,
            `Clear ${name}`
          )}
        </span>
      `;
    })
    .join("");
  return `
    <div class="astral-filter-pills">
      ${pills}
      ${protoTextBtn("Clear", "data-proto-download-filter=\"clear\"")}
    </div>
  `;
}

const PROTO_EXPORT_NOTICE_MS = 10000;

function protoExportNoticeFrom(raw, downloads) {
  if (!raw || typeof raw !== "object") return null;
  const kind = raw.kind === "pdf" ? "pdf" : raw.kind === "csv" ? "csv" : "";
  const id = String(raw.id || "");
  if (!kind || !id) return null;
  const rows = Array.isArray(downloads) ? downloads : [];
  if (!rows.some((item) => item.id === id)) return null;
  const shownAt = Number(raw.shownAt) || Date.now();
  if (Date.now() - shownAt >= PROTO_EXPORT_NOTICE_MS) return null;
  return { kind, id, shownAt };
}

function protoDownloads() {
  const queued = protoDownloadsFrom(store.prototypeDownloads);
  if (protoAdminRail()) return queued;
  const clockwork = protoReportList()
    .filter((item) => item.live && item.file)
    .map((item) => ({
      id: `clockwork-${item.id}`,
      kind: "csv",
      type: "report",
      fileId: item.id,
      name: item.name,
      added: 1,
      waitMs: 1,
    }));
  const seen = new Set(queued.map((item) => item.id));
  return [...clockwork.filter((item) => !seen.has(item.id)), ...queued].slice(0, 40);
}

function protoExportPlaceName(fileId) {
  if (fileId === "users") return "People";
  if (fileId === "compare") return "Compare";
  const pack = protoIntervalPack(fileId);
  return pack?.title || "Interval";
}

function protoQueueExport(kind, fileId) {
  const nextKind = kind === "pdf" ? "pdf" : "csv";
  const id = `dl-${Date.now()}-${protoDownloads().length}`;
  const item = {
    id,
    kind: nextKind,
    type: "export",
    fileId: String(fileId || ""),
    name: protoExportPlaceName(fileId),
    added: Date.now(),
  };
  setProto({
    prototypeExportOpen: false,
    prototypeDownloads: [item, ...protoDownloads()].slice(0, 40),
    prototypeExportNotice: { kind: nextKind, id, shownAt: Date.now() },
  });
}

let protoExportNoticeTimer = 0;
let protoExportNoticeArmedId = "";

function protoClearExportNoticeTimer() {
  if (protoExportNoticeTimer) {
    window.clearTimeout(protoExportNoticeTimer);
    protoExportNoticeTimer = 0;
  }
  protoExportNoticeArmedId = "";
}

function protoArmExportNoticeTimer(notice) {
  if (!notice) {
    protoClearExportNoticeTimer();
    return;
  }
  if (protoExportNoticeArmedId === notice.id && protoExportNoticeTimer) return;
  protoClearExportNoticeTimer();
  protoExportNoticeArmedId = notice.id;
  const wait = Math.max(0, PROTO_EXPORT_NOTICE_MS - (Date.now() - Number(notice.shownAt || 0)));
  protoExportNoticeTimer = window.setTimeout(() => {
    protoExportNoticeTimer = 0;
    protoExportNoticeArmedId = "";
    const current = store.prototypeExportNotice;
    if (current && current.id === notice.id) setProto({ prototypeExportNotice: null });
  }, wait);
}

function protoExportNotice() {
  const notice = protoExportNoticeFrom(store.prototypeExportNotice, protoDownloads());
  if (!notice) {
    protoClearExportNoticeTimer();
    return "";
  }
  protoArmExportNoticeTimer(notice);
  const kind = notice.kind === "pdf" ? "PDF" : "CSV";
  return protoBanner(
    `Your ${kind} is processing.`,
    `${protoGhost("View downloads", 'data-proto-downloads="open"')}${protoIconBtn(
      "close",
      "Hide",
      'data-proto-downloads="hide"'
    )}`
  );
}

let protoDownloadTick = 0;
let protoDownloadTakeId = "";

function protoClearDownloadTick() {
  if (protoDownloadTick) {
    window.clearInterval(protoDownloadTick);
    protoDownloadTick = 0;
  }
}

function protoDownloadMotionOk() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function protoPaintDownloadProgress() {
  const host = document.querySelector("#astral-fs .astral-downloads");
  if (!host) return false;
  let done = false;
  const motion = protoDownloadMotionOk();
  host.querySelectorAll("[data-proto-download-wait]").forEach((el) => {
    const item = protoDownloads().find((row) => row.id === el.dataset.protoDownloadWait);
    if (!item) return;
    const left = protoDownloadLeftMs(item);
    if (left <= 0) {
      done = true;
      return;
    }
    const pct = protoDownloadPct(item);
    const copy = protoDownloadLeftCopy(left);
    const bar = el.querySelector(".astral-progress > span");
    const progress = el.querySelector(".astral-progress");
    const label = el.querySelector(".astral-download-left");
    if (bar && !motion) bar.style.setProperty("--astral-progress-pct", `${pct}%`);
    if (progress) {
      progress.setAttribute("aria-valuenow", String(pct));
      progress.setAttribute("aria-valuetext", copy);
      progress.setAttribute("aria-label", copy);
    }
    if (label) label.textContent = copy;
  });
  return done;
}

function protoFlushDownloadTake() {
  const id = protoDownloadTakeId;
  if (!id) return;
  if (protoViewId(store.activePrototypeView) !== "downloads") return;
  const item = protoDownloads().find((row) => row.id === id);
  if (!item || !protoDownloadReady(item)) return;
  protoDownloadTakeId = "";
  if (item.kind === "pdf") protoPdf(item.fileId);
  else protoCsv(item.fileId);
}

function protoStartDownloadDemo(item) {
  protoDownloadTakeId = item.id;
  setProto({
    prototypeDownloads: protoDownloads().map((row) =>
      row.id === item.id
        ? { ...row, added: Date.now(), waitMs: PROTO_DOWNLOAD_DEMO_MS }
        : row
    ),
  });
}

function protoArmDownloadTick() {
  const onPage = protoViewId(store.activePrototypeView) === "downloads";
  const pending = protoDownloads().some((item) => !protoDownloadReady(item));
  if (!onPage || !store.prototypeFullscreen) {
    protoClearDownloadTick();
    return;
  }
  if (!pending) {
    protoClearDownloadTick();
    window.setTimeout(protoFlushDownloadTake, 0);
    return;
  }
  if (protoDownloadTick) return;
  protoDownloadTick = window.setInterval(() => {
    const stillOn = protoViewId(store.activePrototypeView) === "downloads";
    const stillPending = protoDownloads().some((item) => !protoDownloadReady(item));
    if (!stillOn || !store.prototypeFullscreen) {
      protoClearDownloadTick();
      return;
    }
    if (!stillPending || protoPaintDownloadProgress()) {
      protoClearDownloadTick();
      render();
      window.setTimeout(protoFlushDownloadTake, 0);
    }
  }, PROTO_DOWNLOAD_TICK_MS);
}

function protoDownloadWaitCell(item) {
  const left = protoDownloadLeftMs(item);
  const copy = protoDownloadLeftCopy(left);
  const pct = protoDownloadPct(item);
  const wait = protoDownloadWaitMs(item);
  const elapsed = protoDownloadElapsedMs(item);
  return `
    <div class="astral-download-wait" data-proto-download-wait="${escapeHtml(item.id)}">
      <div
        class="astral-progress"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${pct}"
        aria-valuetext="${escapeHtml(copy)}"
        aria-label="${escapeHtml(copy)}"
      >
        <span style="--astral-progress-pct: ${pct}%; animation-duration: ${wait}ms; animation-delay: -${elapsed}ms;"></span>
      </div>
      <p class="astral-download-left">${escapeHtml(copy)}</p>
    </div>
  `;
}

function protoDownloadsSection() {
  const all = protoDownloads();
  const q = protoDownloadQuery();
  const picked = protoDownloadFilterIds();
  const rows = protoSortedRows(
    "downloads",
    all.filter((item) => protoDownloadMatches(item, q, picked)),
    (item, key) => {
      if (key === "name") return item.name;
      if (key === "type") return protoDownloadTypeName(item);
      if (key === "kind") return item.kind === "pdf" ? "PDF" : "CSV";
      if (key === "status") return protoDownloadReady(item) ? 0 : protoDownloadLeftMs(item);
      return "";
    }
  );
  const empty = all.length
    ? "No downloads match."
    : "No downloads yet.";
  const body = rows.length
    ? rows
        .map((item) => {
          const kind = item.kind === "pdf" ? "PDF" : "CSV";
          const ready = protoDownloadReady(item);
          const wait = ready
            ? `<span class="astral-tag">Complete</span>`
            : protoDownloadWaitCell(item);
          const report =
            protoDownloadType(item) === "report" && protoCanEditReports()
              ? protoReportDef(item.fileId)
              : null;
          const settings = report
            ? protoIconBtn(
                "settings",
                "Edit report",
                `data-proto-report-edit="${escapeHtml(item.fileId)}"`
              )
            : "";
          const get =
            ready && protoCanAct()
              ? protoIconBtn("export", "Download", `data-proto-download="${escapeHtml(item.id)}"`)
              : "";
          const acts = settings || get
            ? `<div class="astral-downloads-acts">${settings}${get}</div>`
            : "";
          return `
            <tr>
              <th scope="row">${escapeHtml(item.name)}</th>
              <td>${protoDownloadTypeTag(item)}</td>
              <td><span class="astral-tag">${kind}</span></td>
              <td>${wait}</td>
              <td class="astral-downloads-get">${acts}</td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="5" class="astral-muted">${escapeHtml(empty)}</td></tr>`;
  return `
    <section class="astral-card astral-downloads" id="astral-downloads">
      <div class="astral-downloads-head">
        <div class="astral-downloads-tools">
          ${protoSearchField({
            name: "proto-download-query",
            value: q,
            placeholder: "Search downloads",
            label: "Search downloads",
          })}
          ${protoDownloadFilterControl()}
        </div>
        ${protoDownloadFilterPills()}
      </div>
      <div class="astral-table-wrap is-tips">
        <table class="astral-table">
          <thead>
            <tr>
            ${protoSortHead("downloads", "name", "Name")}
            ${protoSortHead("downloads", "type", "Type")}
            ${protoSortHead("downloads", "kind", "Kind")}
            ${protoSortHead("downloads", "status", "Status")}
            <th scope="col"><span class="sr-only">Download</span></th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </section>
  `;
}

function protoDownloadsPage() {
  return astralShell(`
    ${protoReportsAreaHead("downloads")}
    ${protoReportEditModal()}
    ${protoDownloadsSection()}
  `);
}

function protoAlertFacetId(raw) {
  return PROTO_ALERT_FACETS.some((item) => item.id === raw) ? raw : "all";
}

function protoPaneAlertCount(alerts) {
  return protoUnreadFrom(protoPaneAlerts(alerts)).length;
}

function protoPaneQueryCount(rows) {
  return protoOpenQueries(protoPaneQueries(rows)).length;
}

function protoAlertMatchesFacet(item, facet) {
  const resolved = protoAlertResolved(item);
  if (facet === "resolved") return resolved;
  if (resolved) return false;
  if (facet === "all") return true;
  if (facet === "gaps") return item.kind === "Gap";
  if (facet === "stale") return item.kind === "Stale";
  return item.kind === "Alert";
}

function protoAlertUndoIds() {
  const raw = Array.isArray(store.prototypeAlertUndo) ? store.prototypeAlertUndo : [];
  return [...new Set(raw.map((id) => String(id || "").trim()).filter(Boolean))];
}

function protoAlertResolved(item) {
  if (!item) return false;
  if (protoAlertUndoIds().includes(item.id)) return false;
  const record = protoAlertAckRecords().find((row) => row.id === item.id);
  return Boolean(record) || item.status === "Acknowledged";
}

function protoAlertStateWord(item) {
  return protoAlertResolved(item) ? "Resolved" : "Unread";
}

function protoAlertCard(item, title) {
  const resolved = protoAlertResolved(item);
  return `
    <article class="astral-alert${resolved ? " is-resolved" : ""}">
      <div class="astral-alert-body">
        <div class="astral-alert-copy">
          <h3 class="astral-alert-title">${escapeHtml(title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
        </div>
        ${protoAlertActions(item)}
      </div>
      <div class="astral-alert-side">
        <p class="astral-muted">${escapeHtml(item.age || protoAlertWord(item.kind))}</p>
        ${protoAckControl("alert", item.id, resolved)}
      </div>
    </article>
  `;
}

function protoAlertPane(alerts, noun) {
  const shown = protoUnreadFrom(protoPaneAlerts(alerts));
  const empty = `<p class="astral-muted">No unread alerts on this ${escapeHtml(noun)}.</p>`;
  return `
    <div class="astral-alert-list">
      ${
        shown.length
          ? shown
              .map((item) => {
                const site = protoSiteByMeter(item.meterId);
                const word = protoAlertWord(item.kind);
                const where = site ? `${word} at ${site.name}` : word;
                return protoAlertCard(item, where);
              })
              .join("")
          : empty
      }
    </div>
  `;
}

function protoQueryGroupIds(groupIds) {
  if (Array.isArray(groupIds)) return groupIds.filter(Boolean);
  return groupIds ? [groupIds] : [];
}

function protoQueryScope(row) {
  if (row?.scope === "compare" || row?.scope === "group" || row?.scope === "site") return row.scope;
  if (row?.groupId) return "group";
  return "site";
}

function protoQueryCompareKey(row) {
  const level = protoCompareLevelId(row?.compareLevel);
  const current = String(row?.currentId || "");
  const others = [...(Array.isArray(row?.compareIds) ? row.compareIds : [])]
    .filter(Boolean)
    .filter((id) => id !== current)
    .sort()
    .join(",");
  return `${level}:${current}:${others}`;
}

function protoFlowChartName(flow) {
  return flow?.channel === "all" && flow.both ? "Incoming and outgoing" : "Consumption";
}

function protoQueryViewContext() {
  if (protoCompareOn()) {
    const bundle = protoCompareBundle();
    const all = bundle.meters || [];
    const meters = protoCompareViewMeters(all);
    const names =
      bundle.level === "group"
        ? bundle.groups.map((item) => item.name)
        : bundle.level === "meter"
          ? bundle.meters.map((meter) => protoMeterRef(meter))
          : bundle.sites.map((item) => item.name);
    if (bundle.level === "group") {
      const sites = protoCompareViewSites(bundle.sites);
      const tracks = protoSiteTracks(sites, bundle.sites);
      const meters = sites.flatMap((site) => site.meters || []);
      const lines = protoChartIsIndividual();
      const flow = protoMetersFlow(meters);
      return {
        scope: "compare",
        site: names.join(", "),
        meterId: "",
        meterIds: meters.map((item) => item.id),
        groupId: "",
        compareIds: protoCompareIds(),
        compareLevel: protoCompareLevel(),
        currentId: protoCompareCurrentId(),
        points: lines ? tracks[0]?.points || [] : protoMetersSeries(meters, flow.channel),
        chart: lines ? "Consumption" : protoFlowChartName(flow),
      };
    }
    const lines = protoChartIsIndividual();
    const flow = protoMetersFlow(meters);
    return {
      scope: "compare",
      site: names.join(", "),
      meterId: "",
      meterIds: meters.map((item) => item.id),
      groupId: "",
      compareIds: protoCompareIds(),
      compareLevel: protoCompareLevel(),
      currentId: protoCompareCurrentId(),
      points: lines ? protoSiteSeries(meters[0]) : protoMetersSeries(meters, flow.channel),
      chart: lines ? "Consumption" : protoFlowChartName(flow),
    };
  }
  if (store.prototypeScope === "group") {
    const group = protoGroup(store.prototypeGroup);
    const viewSites = protoGroupViewSites(group);
    const viewMeters = protoGroupViewMeters(group);
    const lines = protoChartIsIndividual();
    const flow = protoGroupFlow(group);
    const tracks = protoSiteTracks(viewSites, group?.sites);
    return {
      scope: "group",
      site: group?.name || "",
      meterId: "",
      meterIds: viewMeters.map((item) => item.id),
      groupId: group?.id || "",
      compareIds: [],
      compareLevel: "",
      currentId: group?.id || "",
      points: lines ? tracks[0]?.points || [] : protoGroupSeries(group, flow.channel),
      chart: lines ? "Consumption" : protoFlowChartName(flow),
    };
  }
  const site = protoSiteByMeter(store.activePrototypeMeter);
  const meters = protoSiteViewMeters(site);
  const lines = protoChartIsIndividual();
  const flow = protoSiteViewFlow(site);
  return {
    scope: "site",
    site: site?.name || "",
    meterId: protoSiteMeterIds(site)[0] || protoSiteId(site) || store.activePrototypeMeter || "",
    meterIds: meters.map((item) => item.id),
    groupId: "",
    compareIds: [],
    compareLevel: "",
    currentId: protoSiteId(site),
    points: lines ? protoSiteSeries(meters[0]) : protoChannelSeries(site, flow.channel),
    chart: lines ? "Consumption" : protoChartNameFor(site, flow.channel),
  };
}

function protoQueryMeterOn(row, ctx) {
  const ids = Array.isArray(ctx?.meterIds) ? ctx.meterIds : null;
  if (!ids) return true;
  if (!ids.length) return false;
  if (row?.meterId) return ids.includes(row.meterId);
  return true;
}

function protoQueryMatchesGraph(row, ctx) {
  const scope = protoQueryScope(row);
  if (scope === "compare") {
    return (
      ctx.scope === "compare" &&
      protoQueryCompareKey(row) === protoQueryCompareKey(ctx) &&
      protoQueryMeterOn(row, ctx)
    );
  }
  if (ctx.scope === "compare") return protoQueryMeterOn(row, ctx);
  if (ctx.scope === "group") {
    if (scope === "group") return row.groupId === ctx.groupId && protoQueryMeterOn(row, ctx);
    return protoQueryMeterOn(row, ctx);
  }
  if (scope === "group") return protoQueryMeterOn(row, ctx);
  return scope === "site" && row.site === ctx.site && protoQueryMeterOn(row, ctx);
}

function protoQueriesOnThisGraph() {
  const ctx = protoQueryViewContext();
  return protoOpenQueries(protoQueryRows().filter((row) => protoQueryMatchesGraph(row, ctx)));
}

function protoGraphTimeLabels() {
  return (protoQueryViewContext()?.points || []).map((item) => item.label).filter(Boolean);
}

function protoPointLooksHour(label) {
  return /^\d{1,2}\.\d{2}$/.test(String(label || "").trim());
}

function protoMarkTimeOnSeries(stored, labels) {
  const point = String(stored || "").trim();
  const list = (labels || []).filter(Boolean);
  if (!point || !list.length) return "";
  if (list.includes(point)) return point;
  if (protoPointLooksHour(point) && !list.every(protoPointLooksHour)) {
    return list[list.length - 1] || "";
  }
  return "";
}

function protoMarkSitsAt(stored, time) {
  if (!stored || !time) return false;
  if (stored === time) return true;
  return protoMarkTimeOnSeries(stored, protoGraphTimeLabels()) === time;
}

function protoQueriesForSites(sites, groupIds) {
  const names = new Set((sites || []).map((site) => site.name));
  const groups = new Set(protoQueryGroupIds(groupIds));
  return protoQueryRows().filter((row) => {
    const scope = protoQueryScope(row);
    if (scope === "compare") return false;
    if (scope === "group") return groups.has(row.groupId);
    return names.has(row.site);
  });
}

function protoQueriesForCompare(bundle) {
  const ctx = protoQueryViewContext();
  const allMeters = protoMetersForPane(bundle?.meters || []);
  const meters = protoCompareViewMeters(allMeters);
  if (!meters.length) return [];
  const allSites = protoSitesForPane(bundle?.sites || []);
  const sites =
    bundle?.level === "group"
      ? protoCompareViewSites(allSites)
      : allSites.filter((site) =>
          meters.some((meter) => (site.meters || []).some((item) => item.id === meter.id))
        );
  const groupIds = bundle?.level === "group" ? (bundle.groups || []).map((group) => group.id) : [];
  const listed = protoQueriesForMeters(meters, sites, groupIds);
  const compareRows = protoQueryRows().filter(
    (row) => protoQueryScope(row) === "compare" && protoQueryCompareKey(row) === protoQueryCompareKey(ctx)
  );
  const seen = new Set();
  return [...compareRows, ...listed].filter((row) => {
    if (seen.has(row.ref)) return false;
    seen.add(row.ref);
    return true;
  });
}

function protoQueryComposer(config) {
  const required = config.required ? " required" : "";
  return `
    <form class="astral-query-reply" ${config.formAttr}>
      ${protoQueryPersonFace({ userId: "me" })}
      <label>
        <span class="sr-only">Comment</span>
        <textarea name="${escapeHtml(config.name)}" placeholder="Comment" maxlength="400" rows="1" data-proto-grow${required}></textarea>
        ${protoIconTip(
          `<button type="submit" class="astral-send" disabled aria-label="Comment">${protoIconMark(
            "send"
          )}</button>`,
          "Comment"
        )}
      </label>
    </form>
  `;
}

function protoQueryFormHtml() {
  return protoQueryComposer({ formAttr: "data-proto-query-form", name: "proto-query-comment" });
}

function protoCompactAgo(age) {
  const raw = String(age || "").trim();
  if (!raw) return "Just now";
  if (/ago$/i.test(raw) || /^just now$/i.test(raw)) return raw;
  const min = raw.match(/^(\d+)\s*mins?$/i);
  if (min) {
    const n = Number(min[1]);
    return n === 1 ? "1 min ago" : `${n} mins ago`;
  }
  const hour = raw.match(/^(\d+)\s*h(?:ours?)?$/i);
  if (hour) {
    const n = Number(hour[1]);
    return n === 1 ? "1 hour ago" : `${n} hours ago`;
  }
  const day = raw.match(/^(\d+)\s*d(?:ays?)?$/i);
  if (day) {
    const n = Number(day[1]);
    return n === 1 ? "1 day ago" : `${n} days ago`;
  }
  return `${raw} ago`;
}

function protoAgo(from) {
  const then = from instanceof Date ? from : new Date(from);
  if (Number.isNaN(then.getTime())) return "";
  const now = new Date();
  let months = (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth());
  if (now.getDate() < then.getDate()) months -= 1;
  if (months >= 12) {
    const years = Math.max(1, Math.floor(months / 12));
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
  if (months >= 1) return months === 1 ? "1 month ago" : `${months} months ago`;
  const mins = Math.floor((now.getTime() - then.getTime()) / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return mins === 1 ? "1 min ago" : `${mins} mins ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  const days = Math.max(1, Math.floor(hours / 24));
  return days === 1 ? "1 day ago" : `${days} days ago`;
}

function protoQueryRaisedAgo(row) {
  const raw = row?.raisedAt;
  const date = raw ? new Date(raw) : null;
  if (date && !Number.isNaN(date.getTime())) return protoAgo(date);
  return protoAgo(new Date(Date.now() - 60000));
}

function protoQuerySubject(point, comment) {
  const line = String(comment || "")
    .trim()
    .split(/\n/)[0]
    .replace(/\s+/g, " ")
    .slice(0, 120);
  if (line) return line;
  if (point?.time) return protoChartAt(point.time);
  return "";
}

function protoQueryListLine(row) {
  const subject = String(row?.subject || "").trim();
  const comment = String(row?.comment || "").trim();
  if (subject && comment && comment !== subject && !comment.startsWith(subject)) {
    return `${subject}. ${comment}`;
  }
  return subject || comment;
}

function protoQueryTable(rows) {
  const listed = protoSortedRows("queries", rows, (row, key) => {
    if (key === "ref") return row.ref;
    if (key === "subject") return protoQueryListLine(row);
    if (key === "raised") {
      const date = row?.raisedAt ? new Date(row.raisedAt) : null;
      return date && !Number.isNaN(date.getTime()) ? date.getTime() : 0;
    }
    if (key === "site") return row.site;
    if (key === "raised-by") return protoQueryUserLabel(row);
    if (key === "status") return protoQueryStatusLabel(row);
    return "";
  });
  return `
    <div class="astral-table-wrap is-tips astral-query-table">
      <table class="astral-table">
        <thead>
          <tr>
            ${protoSortHead("queries", "ref", "Ref")}
            ${protoSortHead("queries", "subject", "Subject")}
            ${protoSortHead("queries", "raised", "Raised")}
            ${protoSortHead("queries", "site", "Site")}
            ${protoSortHead("queries", "raised-by", "Raised by")}
            ${protoSortHead("queries", "status", "Status")}
            <th scope="col"><span class="sr-only">Resolve</span></th>
          </tr>
        </thead>
        <tbody>
          ${
            listed
              .map((row) => {
                const on = store.prototypeOpenQuery === row.ref;
                const line = protoQueryListLine(row);
                return `
                <tr class="${on ? "is-on" : ""}" data-proto-query-open="${escapeHtml(row.ref)}">
                  <th scope="row">${escapeHtml(row.ref)}</th>
                  <td class="astral-query-copy" title="${escapeHtml(line)}"><span>${escapeHtml(line)}</span></td>
                  <td class="astral-query-ago">${escapeHtml(protoQueryRaisedAgo(row))}</td>
                  <td>${escapeHtml(row.site)}</td>
                  <td>${protoQueryUserMark(row)}</td>
                  <td>${escapeHtml(protoQueryStatusLabel(row))}</td>
                  <td class="astral-query-resolve">${
                    protoQueryCanResolve(row) ? protoAckControl("query", row.ref, false) : ""
                  }</td>
                </tr>
              `;
              })
              .join("") || `<tr><td colspan="7">No queries yet.</td></tr>`
          }
        </tbody>
      </table>
    </div>
  `;
}

function protoQueryPane(sites, noun, groupIds, meters) {
  const rows = protoOpenQueries(
    protoPaneQueries(
      protoCompareOn()
        ? protoQueriesForCompare(protoCompareBundle())
        : protoQueriesForMeters(
            meters !== undefined
              ? meters
              : (sites || []).flatMap((site) => site.meters || []),
            sites,
            groupIds
          )
    )
  );
  return `
    <div class="astral-stack">
      ${
        rows.length
          ? protoQueryTable(rows)
          : `<p class="astral-muted">No queries on this ${escapeHtml(noun)}.</p>`
      }
    </div>
  `;
}

function protoSiteId(site) {
  return site?.meters?.[0]?.id || "";
}

function protoCompareIds() {
  return (Array.isArray(store.prototypeCompareIds) ? store.prototypeCompareIds : []).filter(Boolean);
}

function protoCompareOn() {
  return protoCompareIds().length > 0;
}

function protoCompareLevelId(raw) {
  if (raw === "group" || raw === "meter") return raw;
  return "site";
}

function protoCompareLevel() {
  if (store.prototypeScope === "group") return "group";
  const site = protoSiteByMeter(store.activePrototypeMeter);
  const pick = protoSiteMeterPick(site);
  if (pick && pick !== "all") return "meter";
  return "site";
}

function protoCompareNoun(plural) {
  const level = protoCompareLevel();
  if (level === "group") return plural ? "groups" : "group";
  if (level === "meter") return protoBelowSiteNoun(plural ? 2 : 1);
  return plural ? "sites" : "site";
}

function protoCompareCurrentId() {
  const level = protoCompareLevel();
  if (level === "group") return store.prototypeGroup || "";
  if (level === "meter") {
    const site = protoSiteByMeter(store.activePrototypeMeter);
    return protoSiteMeterPick(site) || store.activePrototypeMeter || "";
  }
  return protoSiteId(protoSiteByMeter(store.activePrototypeMeter));
}

function protoComparePatch(nextLevel, nextId) {
  const level = protoCompareLevelId(nextLevel);
  const stored = protoCompareLevelId(store.prototypeCompareLevel);
  if (!protoCompareOn() || stored !== level) {
    return {
      prototypeCompareIds: [],
      prototypeCompareMeters: [],
      prototypeCompareSites: [],
      prototypeCompareOpen: false,
      ...protoCompareModalReset(),
      prototypeCompareLevel: level,
    };
  }
  const prevId = protoCompareCurrentId();
  const inSet = protoCompareIds().includes(nextId) || nextId === prevId;
  if (!inSet) {
    return {
      prototypeCompareIds: [],
      prototypeCompareMeters: [],
      prototypeCompareSites: [],
      prototypeCompareOpen: false,
      ...protoCompareModalReset(),
      prototypeCompareLevel: level,
    };
  }
  let ids = protoCompareIds().filter((id) => id !== nextId);
  if (prevId && prevId !== nextId && !ids.includes(prevId)) ids = [...ids, prevId];
  return {
    prototypeCompareIds: ids,
    prototypeCompareOpen: false,
    ...protoCompareModalReset(),
    prototypeCompareLevel: level,
  };
}

function protoPortfolioMeters() {
  return protoSites().flatMap((site) =>
    (site.meters || []).map((meter) => ({ meter, site }))
  );
}

function protoCompareBundle() {
  const ids = protoCompareIds();
  const level = protoCompareLevel();
  if (level === "group") {
    const current = protoGroup(store.prototypeGroup);
    const others = ids.map(protoGroup).filter(Boolean).filter((group) => group.id !== current?.id);
    const groups = current ? [current, ...others] : others;
    const sites = groups.flatMap((group) => group.sites);
    return { level: "group", groups, sites, meters: sites.flatMap((site) => site.meters) };
  }
  if (level === "meter") {
    const currentId = protoCompareCurrentId();
    const current = protoMeter(currentId);
    const others = ids.map(protoMeter).filter(Boolean).filter((meter) => meter.id !== current?.id);
    const meters = current ? [current, ...others] : others;
    const seen = new Set();
    const sites = meters
      .map((meter) => protoSiteByMeter(meter.id))
      .filter(Boolean)
      .filter((site) => {
        const id = protoSiteId(site);
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      });
    return { level: "meter", groups: [], sites, meters };
  }
  const current = protoSiteByMeter(store.activePrototypeMeter);
  const currentId = protoSiteId(current);
  const others = ids
    .map((id) => protoSiteByMeter(id))
    .filter(Boolean)
    .filter((site) => protoSiteId(site) !== currentId);
  const sites = current ? [current, ...others] : others;
  return { level: "site", groups: [], sites, meters: sites.flatMap((site) => site.meters) };
}

function protoMetersForComparePick(id) {
  const level = protoCompareLevel();
  if (level === "group") return protoGroupMeters(protoGroup(id));
  if (level === "meter") {
    const meter = protoMeter(id);
    return meter ? [meter] : [];
  }
  return protoSiteByMeter(id)?.meters || [];
}

function protoCompareMeterNote(meters) {
  const list = meters || [];
  const n = list.length;
  const label = `${n} ${protoSiteMeterNoun(list)}`;
  const refs = list.map((item) => protoMeterRef(item)).filter(Boolean);
  const spoken = [label, ...refs].join(". ");
  const tip = refs.length
    ? `<span class="astral-compare-mpan" role="tooltip">${refs
        .map((ref) => `<span>${escapeHtml(ref)}</span>`)
        .join("")}</span>`
    : "";
  return `
    <span class="astral-compare-meters" tabindex="0" aria-label="${escapeHtml(spoken)}">
      ${protoIconMark("meter")}
      <span class="astral-muted">${escapeHtml(label)}</span>
      ${tip}
    </span>
  `;
}

function protoCompareMeterLine(meter) {
  const ref = protoMeterRef(meter);
  return `<span class="astral-compare-ref">${protoMeterMark(meter.commodity)}<span>${escapeHtml(
    ref
  )}</span></span>`;
}

function protoComparePeers() {
  const q = String(store.prototypeCompareQuery || "").trim().toLowerCase();
  const picked = new Set(protoCompareIds());
  const filters = protoCompareFilterIds();
  const level = protoCompareLevel();
  if (level === "group") {
    const currentId = store.prototypeGroup;
    const rows = protoGroups()
      .filter((group) => group.id !== currentId)
      .filter((group) => protoGroupPassesFilter(group, filters))
      .filter((group) => !q || group.name.toLowerCase().includes(q));
    return protoCompareSortPeers(
      rows,
      (group) => group.name,
      (group) => group.sites.length,
      (group) => protoGroupFlagWords(group)
    ).map((group) => ({
      id: group.id,
      name: group.name,
      extra: `${group.sites.length} ${group.sites.length === 1 ? "site" : "sites"}`,
      on: picked.has(group.id),
    }));
  }
  if (level === "meter") {
    const currentId = protoCompareCurrentId();
    const rows = protoPortfolioMeters()
      .filter((row) => row.meter.id !== currentId)
      .filter((row) => protoMeterPassesFilter(row.meter, filters))
      .filter((row) => {
        if (!q) return true;
        const ref = protoMeterRef(row.meter).toLowerCase();
        return row.site.name.toLowerCase().includes(q) || ref.includes(q);
      });
    return protoCompareSortPeers(
      rows,
      (row) => row.site.name,
      () => 0,
      (row) => protoMeterFlagWords(row.meter)
    ).map((row) => ({
      id: row.meter.id,
      name: row.site.name,
      meter: row.meter,
      on: picked.has(row.meter.id),
    }));
  }
  const currentId = protoSiteId(protoSiteByMeter(store.activePrototypeMeter));
  const rows = protoSites()
    .filter((site) => protoSiteId(site) !== currentId)
    .filter((site) => protoSitePassesFilter(site, filters))
    .map((site) => ({ ...site, meters: protoMetersVisible(site.meters, filters) }))
    .filter((site) => site.meters.length)
    .filter((site) => !q || site.name.toLowerCase().includes(q));
  return protoCompareSortPeers(
    rows,
    (site) => site.name,
    (site) => site.meters.length,
    (site) => protoSiteFlagWords(site)
  ).map((site) => ({
    id: protoSiteId(site),
    name: site.name,
    meters: site.meters,
    on: picked.has(protoSiteId(site)),
  }));
}

function protoDetailTools(csvId) {
  return `
    <div class="astral-detail-tools">
      ${protoDateControl()}
      ${protoCompareControl()}
      ${protoPaneFilterControl()}
      ${protoExportControl(csvId)}
    </div>
  `;
}

function protoCompareControl() {
  const n = protoCompareIds().length;
  const noun = protoCompareNoun(n !== 1);
  const chip = protoCountChip(n);
  const clear = n
    ? protoClearButton("astral-compare-clear", `data-proto-compare="clear"`, "Clear compare")
    : "";
  return `
    <div class="astral-compare${n ? " has-picked" : ""}">
      ${protoGhost(
        `Compare${chip}`,
        `data-proto-compare="open"${n ? ` aria-label="Compare, ${n} other ${escapeHtml(noun)}"` : ""}`,
        { html: true }
      )}
      ${clear}
    </div>
  `;
}

function protoGroupDetail(group) {
  const paneSites = protoSitesForPane(group.sites);
  const viewSites = protoGroupViewSites(group);
  const flow = protoGroupFlow(group);
  const channel = flow.both ? "all" : flow.channel;
  const points = protoGroupSeries(group, channel);
  const dual = channel === "all" && flow.both;
  const siteTracks = protoSiteTracks(viewSites, paneSites);
  const missing = protoChartIsIndividual()
    ? protoTracksMissing(siteTracks)
    : points.filter((p) =>
        dual ? p.quality === "missing" || p.lastQuality === "missing" : p.quality === "missing"
      ).length;
  const meterCount = paneSites.reduce((n, site) => n + (site.meters || []).length, 0);
  const kicker = protoPaneKicker(
    protoPaneAbove(protoIsAllGroup(group.id) ? "all" : "group", group)
  );
  const viewMeters = protoGroupViewMeters(group);
  const alerts = protoAlertsForMeters(viewMeters);
  const queryGroups = protoGroupQueryIds(group);
  const queries = protoQueriesForMeters(viewMeters, viewSites, queryGroups);
  const statusLine = `${paneSites.length} ${
    paneSites.length === 1 ? "site" : "sites"
  }. ${meterCount} ${meterCount === 1 ? "meter point" : "meter points"}.`;
  const pane = protoPaneId();
  const rows = viewSites
    .map((site) => {
      const words = protoSiteFlagWords(site);
      const meters = protoMeterCountWords(site.meters.length, site.meters);
      return `
        <tr data-proto-site="${escapeHtml(site.meters[0]?.id || "")}">
          <td>${escapeHtml(site.name)}</td>
          <td>${escapeHtml(meters)}</td>
          <td>${protoStateCells(words, protoStatus(site.status))}</td>
        </tr>
      `;
    })
    .join("");
  return protoPaneShell(
    `
      <div class="astral-detail-head">
        <div>
          ${kicker}
          ${protoDetailTitle(group.name, statusLine)}
        </div>
        ${protoDetailTools(`group:${group.id}`)}
      </div>
      ${protoPaneFilterPills()}
      ${protoSitePills(viewSites, paneSites)}
      ${protoPaneTabs(protoPaneAlertCount(alerts), protoPaneQueryCount(queries))}
    `,
    pane === "alerts"
      ? protoAlertPane(alerts, "group")
      : pane === "profile"
        ? protoProfilePane(viewSites)
        : pane === "queries"
          ? protoQueryPane(viewSites, "group", queryGroups, viewMeters)
          : `
      ${
        protoPaintPaneChart({
          tracks: siteTracks,
          points,
          meters: viewMeters,
          all: paneSites.flatMap((site) => site.meters || []),
          dual,
          outgoing: !dual && channel === "out",
        })
      }
      ${
        !protoConsumptionUnitsMixed(viewMeters) && missing
          ? `<p class="astral-banner">No reading in ${missing} intervals. That is missing data, not zero use.</p>`
          : ""
      }
      ${rows ? protoPaneListTable(["Site", protoBelowSiteNoun(2), "State"], rows) : ""}
          `
  );
}

function protoCompareDetail() {
  const bundle = protoCompareBundle();
  const allMeters = protoMetersForPane(bundle.meters || []);
  const meters = protoCompareViewMeters(allMeters);
  const allSites = protoSitesForPane(bundle.sites || []);
  const viewSites = bundle.level === "group" ? protoCompareViewSites(allSites) : allSites;
  const tracks =
    bundle.level === "group"
      ? protoCompareGroupTracks(bundle.groups, viewSites)
      : protoMeterTracks(meters, allMeters);
  const scaledTracks = protoScaleTracks(tracks, meters);
  const stacked = protoChartIsLine() && protoChartIsIndividual() ? [] : protoTracksToStackPoints(scaledTracks);
  const missing = protoChartIsIndividual()
    ? protoTracksMissing(tracks)
    : stacked.filter((p) => p.quality === "missing").length;
  const alerts = protoAlertsForMeters(meters);
  const title = protoCompareOriginName(bundle);
  const kicker = protoPaneKicker(protoCompareAbove(bundle));
  const meterCount = bundle.meters.length;
  const statusLine =
    bundle.level === "group"
      ? `${bundle.groups.length} ${bundle.groups.length === 1 ? "group" : "groups"}. ${
          bundle.sites.length
        } ${bundle.sites.length === 1 ? "site" : "sites"}. ${protoMeterCountWords(meterCount, bundle.meters)}.`
      : bundle.level === "meter"
        ? `${protoMeterCountWords(meterCount, bundle.meters)} in this comparison. ${
            bundle.sites.length
          } ${bundle.sites.length === 1 ? "site" : "sites"}.`
        : `${bundle.sites.length} ${bundle.sites.length === 1 ? "site" : "sites"} in this comparison. ${protoMeterCountWords(
            meterCount,
            bundle.meters
          )}.`;
  const pane = protoPaneId();
  const noun = "comparison";
  const profileSites =
    bundle.level === "group"
      ? viewSites
      : allSites.filter((site) =>
          meters.some((meter) => (site.meters || []).some((item) => item.id === meter.id))
        );
  const viewGroups =
    bundle.level === "group"
      ? (bundle.groups || []).filter((group) =>
          viewSites.some((site) => protoGroupForSite(site)?.id === group.id)
        )
      : [];
  const rows =
    bundle.level === "group"
      ? viewGroups
          .map((group) => {
            const words = protoGroupFlagWords(group);
            const count = `${group.sites.length} ${group.sites.length === 1 ? "site" : "sites"}`;
            return `
              <tr data-proto-group="${escapeHtml(group.id)}">
                <td>${escapeHtml(group.name)}</td>
                <td>${escapeHtml(count)}</td>
                <td>${protoStateCells(words, "Sending")}</td>
              </tr>
            `;
          })
          .join("")
      : bundle.level === "meter"
        ? meters
            .map((meter) => {
              const site = protoSiteByMeter(meter.id);
              const words = [...new Set(
                (protoData()?.alerts || [])
                  .filter((item) => item.meterId === meter.id)
                  .map((item) => protoAlertWord(item.kind))
              )];
              return `
                <tr data-proto-meter="${escapeHtml(meter.id)}">
                  <td>${escapeHtml(protoMeterRef(meter))}</td>
                  <td>${escapeHtml(site?.name || "")}</td>
                  <td>${protoStateCells(words, protoStatus(meter.status))}</td>
                </tr>
              `;
            })
            .join("")
        : profileSites
            .map((site) => {
              const words = protoSiteFlagWords(site);
              const count = protoMeterCountWords(site.meters.length, site.meters);
              return `
              <tr data-proto-site="${escapeHtml(protoSiteId(site))}">
                <td>${escapeHtml(site.name)}</td>
                <td>${escapeHtml(count)}</td>
                <td>${protoStateCells(words, protoStatus(site.status))}</td>
              </tr>
            `;
            })
            .join("");
  return protoPaneShell(
    `
      <div class="astral-detail-head">
        <div>
          ${kicker}
          ${protoDetailTitle(title, statusLine)}
        </div>
        ${protoDetailTools("compare")}
      </div>
      ${protoPaneFilterPills()}
      ${
        bundle.level === "group"
          ? protoSitePills(viewSites, allSites)
          : protoMeterPills(meters, { all: allMeters, toggle: true })
      }
      ${protoPaneTabs(protoPaneAlertCount(alerts), protoPaneQueryCount(protoQueriesForCompare(bundle)))}
    `,
    pane === "alerts"
      ? protoAlertPane(alerts, noun)
      : pane === "profile"
        ? bundle.level === "meter"
          ? meters.length
            ? protoMeterList(meters)
            : `<p class="astral-muted">Hours, time of use, and rates sit on a site.</p>`
          : protoProfilePane(profileSites)
        : pane === "queries"
          ? protoQueryPane(profileSites, noun, null, meters)
          : `
      ${protoPaintPaneChart({
        tracks,
        points: protoTracksToTotalPoints(tracks),
        meters,
        all: allMeters,
        dual: false,
      })}
      ${
        !protoConsumptionUnitsMixed(meters) && missing
          ? `<p class="astral-banner">No reading in ${missing} intervals. That is missing data, not zero use.</p>`
          : ""
      }
      ${
        bundle.level !== "group" && meters.length > 1
          ? protoMeterCompareTable(meters, allMeters, { chart: protoPaneChartLabel(false), site: true })
          : rows
          ? protoPaneListTable(
              [
                bundle.level === "group" ? "Group" : bundle.level === "meter" ? protoBelowSiteNoun(1) : "Site",
                bundle.level === "group" ? "Sites" : bundle.level === "meter" ? "Site" : protoBelowSiteNoun(2),
                "State",
              ],
              rows
            )
          : ""
      }
          `
  );
}

function protoCompareModal() {
  if (!store.prototypeCompareOpen || protoState().view !== "portfolio") return "";
  const noun = protoCompareNoun(false);
  const nouns = protoCompareNoun(true);
  const peers = protoComparePeers();
  const q = String(store.prototypeCompareQuery || "");
  const empty =
    q || protoCompareFilterIds().length
      ? `No ${nouns} match.`
      : `No other ${nouns} to compare.`;
  const lead =
    protoCompareLevel() === "meter"
      ? `Search and add other ${protoBelowSiteNoun(2)} throughout the portfolio.`
      : `Search and add other ${nouns} at this level.`;
  return `
    <div class="astral-modal-back" data-proto-modal="compare">
      <div
        class="astral-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="astral-compare-title"
        data-proto-compare
      >
        ${protoModalHead("astral-compare-title", `Compare ${nouns}`, escapeHtml(lead), "compare")}
        <div class="astral-modal-body">
          <div class="astral-compare-find">
            <div class="astral-compare-tools">
              ${protoSearchField({
                name: "proto-compare-query",
                value: q,
                placeholder: `Search ${noun}`,
                label: `Search ${noun}`,
              })}
              ${protoCompareFilterControl()}
            </div>
            ${protoCompareFilterPills()}
          </div>
          <ul class="astral-compare-list">
            ${
              peers
                .map(
                  (item) => `
                    <li>
                      <span class="astral-compare-copy">
                        <span>${escapeHtml(item.name)}</span>
                        ${
                          item.meter
                            ? protoCompareMeterLine(item.meter)
                            : item.meters
                            ? protoCompareMeterNote(item.meters)
                            : `<span class="astral-muted">${escapeHtml(item.extra)}</span>`
                        }
                      </span>
                      ${protoGhost(
                        item.on ? "Remove" : "Add",
                        `data-proto-compare-id="${escapeHtml(item.id)}"`
                      )}
                    </li>
                  `
                )
                .join("") || `<li class="astral-muted">${escapeHtml(empty)}</li>`
            }
          </ul>
        </div>
        <div class="astral-modal-foot">
          <div class="astral-actions">
            ${protoBtn("Done", "data-proto-compare=\"done\"")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function protoAllTreeRow(currentGroup) {
  const n = protoAllGroup().sites.length;
  const count = `${n} ${n === 1 ? "site" : "sites"}`;
  const on = Boolean(currentGroup && protoIsAllGroup(currentGroup.id));
  return `
    <li>
      <button type="button" class="astral-group${on ? " is-on" : ""}" data-proto-group="all">
        <span class="astral-group-name">All</span>
        <span class="astral-muted">${escapeHtml(count)}</span>
      </button>
    </li>
  `;
}

function protoTreeForceOpen() {
  return Boolean(protoState().query.trim()) || protoTreeFilterOn();
}

function protoPortfolioTreeLive() {
  return Boolean(document.querySelector("#astral-fs .astral-tree .astral-group[data-proto-group]"));
}

function protoSyncTreeSelection() {
  const state = protoState();
  const current = protoMeter(state.meter);
  const currentSite = current ? protoSiteByMeter(current.id) : null;
  const currentGroup =
    state.scope === "group" ? protoGroup(state.group) || protoGroupForSite(currentSite) : null;
  const closed = protoGroupClosed();
  const forceOpen = protoTreeForceOpen();
  document.querySelectorAll("#astral-fs .astral-tree [data-proto-group]").forEach((btn) => {
    const id = btn.dataset.protoGroup;
    const on = Boolean(currentGroup && id === currentGroup.id);
    btn.classList.toggle("is-on", on);
    if (protoIsAllGroup(id)) return;
    const shut = !forceOpen && closed.includes(id);
    btn.classList.toggle("is-shut", shut);
    btn.setAttribute("aria-expanded", shut ? "false" : "true");
    const li = btn.closest(".astral-tree-group");
    li?.classList.toggle("is-open", !shut);
    const clip = li?.querySelector(".astral-tree-clip");
    if (!clip) return;
    clip.setAttribute("aria-hidden", shut ? "true" : "false");
    clip.toggleAttribute("inert", shut);
  });
  document.querySelectorAll("#astral-fs .astral-tree [data-proto-site]").forEach((btn) => {
    const site = protoSiteByMeter(btn.dataset.protoSite);
    const siteOn = state.scope !== "group" && currentSite && site && site.name === currentSite.name;
    btn.classList.toggle("is-on", Boolean(siteOn));
  });
}

function protoResetPaneScroll() {
  const root = document.querySelector("#astral-fs");
  if (!root) return;
  root
    .querySelectorAll(".astral-pane-body, .astral-stage, .astral-stage-body")
    .forEach((node) => {
      node.scrollTop = 0;
      node.scrollLeft = 0;
    });
}

// Filters re-render the whole walk, so carry scroll offsets across the repaint.
// A new page drops them all; a new pane or selection drops the pane's own.
let protoScrollPage = "";
let protoScrollPane = "";

function protoScrollPageKey() {
  return [
    protoViewId(store.activePrototypeView),
    store.prototypeSettingsSection || "",
    protoLibraryOn() ? "library" : "",
  ].join("|");
}

function protoScrollPaneKey() {
  const scope = store.prototypeScope || "";
  return [
    protoPaneId(),
    scope,
    scope === "site" ? store.activePrototypeMeter || "" : store.prototypeGroup || "",
  ].join("|");
}

function protoScrollIsPane(node) {
  return (
    node.matches(".astral-pane-body, .astral-stage, .astral-stage-body") ||
    Boolean(node.closest(".astral-pane"))
  );
}

function protoScrollNodeKey(node, root) {
  if (node.id) return `#${node.id}`;
  const parts = [];
  let cur = node;
  while (cur && cur !== root) {
    if (cur.id) {
      parts.unshift(`#${cur.id}`);
      break;
    }
    const tag = cur.tagName.toLowerCase();
    const cls = cur.classList[0] || "";
    const parent = cur.parentElement;
    const index = parent
      ? [...parent.children].filter(
          (child) => child.tagName === cur.tagName && (child.classList[0] || "") === cls
        ).indexOf(cur)
      : 0;
    parts.unshift(`${tag}.${cls}:${index}`);
    cur = parent;
  }
  return parts.join(">");
}

function protoScrollCapture(root) {
  const page = protoScrollPage;
  const pane = protoScrollPane;
  protoScrollPage = protoScrollPageKey();
  protoScrollPane = protoScrollPaneKey();
  if (!root || page !== protoScrollPage) return null;
  const keepPane = pane === protoScrollPane;
  const saved = [];
  root.querySelectorAll("*").forEach((node) => {
    if (!node.scrollTop && !node.scrollLeft) return;
    if (!keepPane && protoScrollIsPane(node)) return;
    saved.push({ key: protoScrollNodeKey(node, root), top: node.scrollTop, left: node.scrollLeft });
  });
  return saved.length ? saved : null;
}

function protoScrollRestore(root, saved) {
  if (!root || !saved) return;
  const apply = () => {
    const nodes = new Map();
    root.querySelectorAll("*").forEach((node) => {
      if (node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth) {
        nodes.set(protoScrollNodeKey(node, root), node);
      }
    });
    saved.forEach((item) => {
      const node = nodes.get(item.key);
      if (!node) return;
      if (node.scrollTop !== item.top) node.scrollTop = item.top;
      if (node.scrollLeft !== item.left) node.scrollLeft = item.left;
    });
  };
  apply();
  requestAnimationFrame(() => {
    apply();
    requestAnimationFrame(apply);
  });
}

function protoPaintPortfolioPane() {
  const pane = document.querySelector("#astral-fs section.astral-pane");
  if (!pane) {
    render();
    return;
  }
  pane.innerHTML = protoPortfolioDetail();
  protoScrollPane = protoScrollPaneKey();
  protoResetPaneScroll();
  protoBindBreakdown();
  protoMeasurePillsSoon();
  protoSlideNavPillsSoon();
  protoBindScrollRegions();
  if (protoChartPoint()) protoPlaceQueryPinSoon();
  requestAnimationFrame(protoResetPaneScroll);
}

function protoCommitPortfolioTree(patch, options) {
  protoPatchStay(patch);
  if (!protoPortfolioTreeLive()) {
    render();
    return;
  }
  protoSyncTreeSelection();
  if (options?.pane) protoPaintPortfolioPane();
  else protoResetPaneScroll();
}

function protoPortfolio() {
  const state = protoState();
  const q = state.query.trim().toLowerCase();
  const current = protoMeter(state.meter);
  const currentSite = current ? protoSiteByMeter(current.id) : null;
  const currentGroup =
    state.scope === "group" ? protoGroup(state.group) || protoGroupForSite(currentSite) : null;
  const closed = protoGroupClosed();
  const groups = protoVisibleGroups();
  const groupRows = groups
    .map((group) => {
      const on = Boolean(currentGroup && group.id === currentGroup.id);
      const shut = !q && !protoTreeFilterOn() && closed.includes(group.id);
      const count = `${group.sites.length} ${group.sites.length === 1 ? "site" : "sites"}`;
      const kids = group.sites
        .map((site) => {
          const siteOn = state.scope !== "group" && currentSite && site.name === currentSite.name;
          return `<li>${protoSiteButton(site, siteOn)}</li>`;
        })
        .join("");
      return `
        <li class="astral-tree-group${shut ? "" : " is-open"}">
          <button
            type="button"
            class="astral-group${on ? " is-on" : ""}${shut ? " is-shut" : ""}"
            data-proto-group="${escapeHtml(group.id)}"
            title="${escapeHtml(group.name)}"
            aria-expanded="${shut ? "false" : "true"}"
            aria-controls="astral-tree-sites-${escapeHtml(group.id)}"
          >
            <span class="astral-group-toggle" aria-hidden="true">${protoChevronMark("down")}</span>
            <span class="astral-group-name">${escapeHtml(group.name)}</span>
            <span class="astral-muted">${escapeHtml(count)}</span>
          </button>
          <div
            class="astral-tree-clip"
            id="astral-tree-sites-${escapeHtml(group.id)}"
            aria-hidden="${shut ? "true" : "false"}"
            ${shut ? "inert" : ""}
          >
            <ul class="astral-tree-sites">${kids}</ul>
          </div>
        </li>
      `;
    })
    .join("");
  const empty = groups.length ? "" : `<li class="astral-muted">No sites match.</li>`;
  const list = `${protoAllTreeRow(currentGroup)}${groupRows}${empty}`;

  return astralShell(`
    ${astralPageHead(
      "Portfolio",
      `${protoSites().length} sites in ${protoGroups().length} ${
        protoGroups().length === 1 ? "group" : "groups"
      }. Select All, a group, or a site.`
    )}
    <div class="astral-split">
      <aside class="astral-list">
        <div class="astral-tree-head">
          <div class="astral-tree-tools">
            ${protoSearchField({
              name: "proto-query",
              value: state.query,
              placeholder: "Search site or meter",
              label: "Search site or meter",
            })}
            ${protoTreeFilterControl()}
          </div>
          ${protoTreeFilterPills()}
        </div>
        <ul class="astral-tree">${list}</ul>
      </aside>
      <section class="astral-card astral-pane">${protoPortfolioDetail()}</section>
    </div>
  `);
}

function protoPortfolioDetail() {
  const state = protoState();
  const current = protoMeter(state.meter);
  const currentSite = current ? protoSiteByMeter(current.id) : null;
  const currentGroup =
    state.scope === "group" ? protoGroup(state.group) || protoGroupForSite(currentSite) : null;
  if (currentGroup) {
    return protoCompareOn() ? protoCompareDetail() : protoGroupDetail(currentGroup);
  }
  if (current && currentSite) {
    const settingsMeter = protoMeterSettingsMeter();
    if (settingsMeter && protoPaneId() === "profile" && !protoCompareOn()) {
      return protoMeterSettingsPage(settingsMeter, currentSite);
    }
    const viewMeters = protoSiteViewMeters(currentSite);
    const flow = protoSiteViewFlow(currentSite);
    const lines = protoChartIsIndividual();
    const dual = !lines && flow.channel === "all" && flow.both;
    const missing = protoChartMissing(viewMeters);
    const csvId = dual || viewMeters.length !== 1 ? "all" : viewMeters[0]?.id || current.id;
    const alerts = protoAlertsForMeters(viewMeters);
    const queries = protoQueriesForMeters(viewMeters, [currentSite]);
    const pane = protoPaneId();
    return protoCompareOn()
      ? protoCompareDetail()
      : protoPaneShell(
          `
        <div class="astral-detail-head">
          <div>
            ${protoPaneKicker(protoPaneAbove("site", currentSite))}
            <h3>${escapeHtml(currentSite.name)}</h3>
          </div>
          ${protoDetailTools(csvId)}
        </div>
        ${protoPaneFilterPills()}
        ${protoSiteStatus(currentSite)}
        ${protoPaneTabs(protoPaneAlertCount(alerts), protoPaneQueryCount(queries))}
          `,
          pane === "alerts"
            ? protoAlertPane(alerts, "site")
            : pane === "profile"
              ? protoProfilePane([currentSite])
              : pane === "queries"
                ? protoQueryPane([currentSite], "site", null, viewMeters)
                : `
        ${protoPaneChart(viewMeters, protoMetersForPane(currentSite.meters))}
        ${
          viewMeters.length && missing && !protoConsumptionUnitsMixed(viewMeters)
            ? `<p class="astral-banner">No reading in ${missing} intervals. That is missing data, not zero use.</p>`
            : ""
        }
        ${
          viewMeters.length > 1
            ? protoMeterCompareTable(viewMeters, protoMetersForPane(currentSite.meters), {
                chart: protoPaneChartLabel(dual),
              })
            : viewMeters.length && !protoChartIsLine() && !protoConsumptionUnitsMixed(viewMeters)
            ? protoIntervalTable(
                protoScalePoints(protoChannelSeries(currentSite, flow.channel), viewMeters),
                dual
              )
            : ""
        }
            `
        );
  }
  return `
    <div class="astral-empty">
      <h3>Select a group or a site</h3>
      <p>Pick All, a group, or a site.</p>
    </div>
  `;
}

function protoQualityWord(quality, value) {
  if (quality === "missing" || value == null) return "Missing data";
  if (quality === "estimated") return "Estimated";
  return "Actual";
}

const PROTO_BREAKDOWN_ROW = 45;
const PROTO_BREAKDOWN_OVERSCAN = 8;
let protoBreakdownCache = null;
let protoBreakdownPaintQueued = false;

function protoBreakdownOpen() {
  return Boolean(store.prototypeBreakdownOpen);
}

function protoBreakdownSliceCols() {
  return protoChartStackSlices().filter((slice) => protoChartSliceOn(slice.id));
}

function protoSliceCellAmount(point, slice) {
  const hit = (point?.stacks || []).find((item) => item.id === slice.id);
  if (!hit) return 0;
  const n = Number(hit.value);
  return Number.isFinite(n) ? n : 0;
}

function protoIntervalRowHtml(point, dual, chart, sliceCols) {
  const picked = protoChartPoint();
  const on = Boolean(picked && picked.chart === chart && picked.time === point.label);
  const hit = `data-proto-hit data-proto-chart="${escapeHtml(chart)}" ${protoHitAttrs(point)}`;
  const row = `class="${on ? "is-on" : ""}" tabindex="0" aria-pressed="${on ? "true" : "false"}" ${hit}`;
  const time = `<th scope="row">${escapeHtml(point.label)}</th>`;
  if (sliceCols?.length) {
    const missing = point.value == null;
    const cells = sliceCols
      .map((slice) => `<td>${missing ? "No reading" : protoFormatAmount(protoSliceCellAmount(point, slice))}</td>`)
      .join("");
    return `<tr ${row}>${time}${cells}</tr>`;
  }
  if (dual) {
    return `
      <tr ${row}>
        ${time}
        <td>${point.value == null ? "No reading" : protoFormatAmount(point.value)}</td>
        <td>${point.last == null ? "No reading" : protoFormatAmount(point.last)}</td>
      </tr>
    `;
  }
  return `
    <tr ${row}>
      ${time}
      <td>${point.value == null ? "No reading" : protoFormatAmount(point.value)}</td>
      <td>${escapeHtml(protoQualityWord(point.quality, point.value))}</td>
    </tr>
  `;
}

function protoBreakdownClip() {
  const tbody = document.querySelector("#astral-fs [data-proto-breakdown-rows]");
  const pane = tbody?.closest(".astral-pane-body");
  const stage = tbody?.closest(".astral-stage");
  const a = pane?.getBoundingClientRect();
  const b = stage?.getBoundingClientRect();
  if (a && b) {
    const top = Math.max(a.top, b.top);
    const bottom = Math.min(a.bottom, b.bottom);
    return { top, height: Math.max(0, bottom - top) };
  }
  return a || b || null;
}

function protoPaintBreakdown() {
  const tbody = document.querySelector("#astral-fs [data-proto-breakdown-rows]");
  const clip = protoBreakdownClip();
  if (!tbody || !clip || !protoBreakdownCache) return;
  const { points, dual, chart, sliceCols = [], rowHtml } = protoBreakdownCache;
  const cols = protoBreakdownCache.cols || (sliceCols.length ? 1 + sliceCols.length : 3);
  const paintRow = rowHtml || ((point) => protoIntervalRowHtml(point, dual, chart, sliceCols));
  const row = PROTO_BREAKDOWN_ROW;
  const offset = clip.top - tbody.getBoundingClientRect().top;
  const start = Math.max(0, Math.floor(offset / row) - PROTO_BREAKDOWN_OVERSCAN);
  const vis = Math.ceil(Math.max(clip.height, row) / row) + PROTO_BREAKDOWN_OVERSCAN * 2;
  const end = Math.min(points.length, start + vis);
  const topH = start * row;
  const botH = (points.length - end) * row;
  tbody.innerHTML = [
    topH
      ? `<tr class="astral-breakdown-pad" aria-hidden="true"><td colspan="${cols}" style="height:${topH}px"></td></tr>`
      : "",
    ...points.slice(start, end).map(paintRow),
    botH
      ? `<tr class="astral-breakdown-pad" aria-hidden="true"><td colspan="${cols}" style="height:${botH}px"></td></tr>`
      : "",
  ].join("");
}

function protoBindBreakdown() {
  const tbody = document.querySelector("#astral-fs [data-proto-breakdown-rows]");
  if (!tbody) return;
  protoPaintBreakdown();
  requestAnimationFrame(() => protoPaintBreakdown());
  if (tbody.dataset.protoBound === "1") return;
  tbody.dataset.protoBound = "1";
  const onScroll = () => {
    if (protoBreakdownPaintQueued) return;
    protoBreakdownPaintQueued = true;
    requestAnimationFrame(() => {
      protoBreakdownPaintQueued = false;
      protoPaintBreakdown();
    });
  };
  [tbody.closest(".astral-pane-body"), tbody.closest(".astral-stage")]
    .filter(Boolean)
    .forEach((el) => el.addEventListener("scroll", onScroll, { passive: true }));
}

function protoToggleBreakdown(btn) {
  const root = btn?.closest(".astral-breakdown");
  const next = !protoBreakdownOpen();
  store.prototypeBreakdownOpen = next;
  persistChrome();
  if (!root) {
    render();
    protoRestoreFocus("#astral-fs [data-proto-breakdown]");
    return;
  }
  const panel = document.getElementById("astral-breakdown-panel");
  btn.setAttribute("aria-expanded", next ? "true" : "false");
  if (next) {
    if (panel) {
      panel.removeAttribute("inert");
      panel.setAttribute("aria-hidden", "false");
    }
    protoBindBreakdown();
    requestAnimationFrame(() => {
      document.getElementById("astral-breakdown-panel")?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
      });
    });
  }
  root.classList.toggle("is-open", next);
  if (!next && panel) {
    panel.setAttribute("aria-hidden", "true");
    panel.setAttribute("inert", "");
  }
  btn.focus();
}

function protoBreakdownPanel(inner) {
  const open = protoBreakdownOpen();
  return `
    <div class="astral-breakdown${open ? " is-open" : ""}">
      <button
        type="button"
        class="astral-breakdown-head"
        data-proto-breakdown="toggle"
        aria-expanded="${open ? "true" : "false"}"
        aria-controls="astral-breakdown-panel"
      >
        <span class="astral-meter-row-toggle" aria-hidden="true">${protoChevronMark("down")}</span>
        <span>Breakdown</span>
      </button>
      <div
        class="astral-breakdown-clip"
        id="astral-breakdown-panel"
        aria-hidden="${open ? "false" : "true"}"
        ${open ? "" : "inert"}
      >
        <div class="astral-breakdown-body">
          ${inner}
        </div>
      </div>
    </div>
  `;
}

function protoPaneListTable(headers, rows) {
  return protoBreakdownPanel(`
    <table class="astral-table">
      <thead>
        <tr>
          ${headers.map((name) => `<th scope="col">${escapeHtml(name)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `);
}

function protoIntervalTable(points, dual) {
  const sliceCols = protoBreakdownSliceCols();
  protoBreakdownCache = {
    points: points || [],
    dual: Boolean(dual),
    chart: protoPaneChartLabel(Boolean(dual)),
    sliceCols,
  };
  const heads = sliceCols.length
    ? sliceCols.map((slice) => `<th scope="col">${escapeHtml(protoSliceName(slice))}</th>`).join("")
    : dual
      ? `<th scope="col">In</th><th scope="col">Out</th>`
      : `<th scope="col">${escapeHtml(points[0]?.unit || protoMeasureUnit())}</th><th scope="col">Quality</th>`;
  return protoBreakdownPanel(`
    <table class="astral-table astral-breakdown-cols${sliceCols.length ? " is-profile" : ""}">
      <thead>
        <tr>
          <th scope="col">Time</th>
          ${heads}
        </tr>
      </thead>
      <tbody data-proto-breakdown-rows></tbody>
    </table>
  `);
}

function protoMeterCompareCell(point, slice) {
  if (!point || point.value == null) return "No reading";
  return protoFormatAmount(slice ? protoSliceCellAmount(point, slice) : point.value);
}

function protoMeterCompareTotal(cells) {
  const present = cells.filter((cell) => cell && cell.value != null);
  if (!present.length) return "No reading";
  return protoFormatAmount(protoRoundReading(present.reduce((n, cell) => n + Number(cell.value || 0), 0), 1));
}

function protoMeterCompareTable(meters, all, options = {}) {
  const list = meters || [];
  const tracks = protoScaleTracks(protoMeterTracks(list, all), list);
  const n = Math.max(0, ...tracks.map((track) => (track.points || []).length));
  if (!n) return "";
  const sliceCols = protoBreakdownSliceCols();
  const per = Math.max(1, sliceCols.length);
  const unitOf = (track) =>
    (track.points || []).find((point) => point?.unit)?.unit || protoMeasureUnit([track.meter]);
  const units = [...new Set(tracks.map(unitOf))];
  const outIdx = tracks.flatMap((track, i) => (track.meter?.direction === "Export" ? [i] : []));
  const inIdx = tracks.flatMap((track, i) => (track.meter?.direction === "Export" ? [] : [i]));
  const totals =
    units.length !== 1
      ? []
      : outIdx.length && inIdx.length
        ? [
            { name: "Total in", idx: inIdx },
            { name: "Total out", idx: outIdx },
          ].filter((total) => total.idx.length > 1)
        : [{ name: "Total", idx: tracks.map((_, i) => i) }];
  const hits = protoTracksToStackPoints(tracks);
  const chart = options.chart || protoPaneChartLabel(false);
  const colour = protoPillsNeedColour();
  const showSite = Boolean(options.site);
  const rows = Array.from({ length: n }, (_, i) => ({
    ...(hits[i] || {}),
    label: hits[i]?.label || tracks.map((track) => track.points[i]?.label).find(Boolean) || "",
    cells: tracks.map((track) => track.points[i]),
  }));
  const rowHtml = (row) => {
    const picked = protoChartPoint();
    const on = Boolean(picked && picked.chart === chart && picked.time === row.label);
    const cells = row.cells
      .map((cell) =>
        sliceCols.length
          ? sliceCols.map((slice) => `<td>${protoMeterCompareCell(cell, slice)}</td>`).join("")
          : `<td>${protoMeterCompareCell(cell)}</td>`
      )
      .join("");
    const sums = totals
      .map((total) => `<td class="is-total">${protoMeterCompareTotal(total.idx.map((i) => row.cells[i]))}</td>`)
      .join("");
    return `<tr class="${on ? "is-on" : ""}" tabindex="0" aria-pressed="${
      on ? "true" : "false"
    }" data-proto-hit data-proto-chart="${escapeHtml(chart)}" ${protoHitAttrs(row)}><th scope="row">${escapeHtml(
      row.label
    )}</th>${cells}${sums}</tr>`;
  };
  const cols = 1 + tracks.length * per + totals.length;
  protoBreakdownCache = { points: rows, chart, cols, rowHtml };
  const twoRows = sliceCols.length > 0;
  const span = twoRows ? ` rowspan="2"` : "";
  const meterHeads = tracks
    .map((track) => {
      const site = showSite ? protoSiteByMeter(track.meter?.id)?.name || "" : "";
      const note = [site, unitOf(track)].filter(Boolean).join(" · ");
      const mark = colour
        ? `<span class="astral-chart-key-mark" style="background:${escapeHtml(track.color)}" aria-hidden="true"></span>`
        : "";
      return `
        <th scope="col"${twoRows ? ` colspan="${per}"` : ""} class="astral-breakdown-meter">
          <span class="astral-breakdown-meter-ref">${mark}${escapeHtml(track.ref)}</span>
          <span class="astral-breakdown-meter-note">${escapeHtml(note)}</span>
        </th>
      `;
    })
    .join("");
  const totalHeads = totals
    .map(
      (total) => `
        <th scope="col"${span} class="astral-breakdown-meter is-total">
          <span class="astral-breakdown-meter-ref">${escapeHtml(total.name)}</span>
          <span class="astral-breakdown-meter-note">${escapeHtml(units[0] || "")}</span>
        </th>
      `
    )
    .join("");
  const sliceHeads = twoRows
    ? `<tr>${tracks
        .map(() =>
          sliceCols
            .map((slice) => `<th scope="col" class="astral-breakdown-slice">${escapeHtml(protoSliceName(slice))}</th>`)
            .join("")
        )
        .join("")}</tr>`
    : "";
  const minWidth = 6 + (tracks.length * per + totals.length) * 8.5;
  return protoBreakdownPanel(`
    <div class="astral-table-wrap astral-breakdown-scroll" tabindex="0" role="region" aria-label="${escapeHtml(
      `${chart} by ${protoBelowSiteNoun(1)}`
    )}">
      <table class="astral-table astral-breakdown-cols is-meters" style="min-width:${minWidth}rem">
        <thead>
          <tr>
            <th scope="col"${span}>Time</th>
            ${meterHeads}
            ${totalHeads}
          </tr>
          ${sliceHeads}
        </thead>
        <tbody data-proto-breakdown-rows></tbody>
      </table>
    </div>
  `);
}

function protoMeterRatePence(meter) {
  const named = Number(meter?.ratePence);
  if (Number.isFinite(named) && named > 0) return named;
  const kind = protoMeterKind(meter);
  if (kind === "water") return PROTO_WATER_PENCE;
  return kind === "gas" ? 6 : 18;
}

function protoMeterSpendGbp(meter) {
  if (!meter || meter.direction === "Export") return 0;
  return (protoDayKwh(meter) * protoMeterRatePence(meter)) / 100;
}

function protoSiteSpendGbp(site) {
  return (site?.meters || []).reduce((n, meter) => n + protoMeterSpendGbp(meter), 0);
}

function protoSpendMoney(gbp) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(gbp));
}

function protoSpendSites() {
  return [...protoEstateSites()].sort((a, b) => protoSiteSpendGbp(b) - protoSiteSpendGbp(a));
}

function protoSpendTopSites() {
  return protoSpendSites().slice(0, 5);
}

function protoFinance() {
  const facts = protoHomeFacts();
  const sites = protoSpendTopSites();
  const top = protoSpendSites()[0];
  const topSpend = top ? protoSiteSpendGbp(top) : 0;
  const live = facts.reports.filter((item) => item.live).length;
  const rows = sites
    .map((site) => {
      const words = protoSiteFlagWords(site);
      const spend = protoSpendMoney(protoSiteSpendGbp(site));
      return `
        <tr data-proto-site="${escapeHtml(protoSiteId(site))}">
          <th scope="row">${escapeHtml(site.name)}</th>
          <td>${escapeHtml(spend)}</td>
          <td>${protoStateCells(words, protoStatus(site.status))}</td>
        </tr>
      `;
    })
    .join("");
  return astralShell(`
    ${astralPageHead("Finance", protoData()?.financeLead || "")}
    <div class="astral-hero">
      ${
        top
          ? `
      <button type="button" class="astral-stat" data-proto-site="${escapeHtml(protoSiteId(top))}">
        <span class="astral-stat-value">${escapeHtml(protoSpendMoney(topSpend))}</span>
        <span>${escapeHtml(top.name)}, highest spend in 24 hours</span>
        <span class="astral-stat-go">Open</span>
      </button>`
          : protoStatButton("portfolio", "None", "Highest spend in 24 hours")
      }
      ${protoStatButton("reports", live, live === 1 ? "Report switched on" : "Reports switched on")}
      ${protoStatButton(
        "alerts",
        facts.flagged.length,
        facts.flagged.length === 1 ? "Site that may hit a bill" : "Sites that may hit a bill",
        facts.flagged.length
      )}
    </div>
    <section class="astral-card astral-spend">
      <div class="astral-card-head">
        <h3>Highest spend</h3>
        <p class="astral-muted">Top 5. Incoming last 24 hours.</p>
      </div>
      <div class="astral-table-wrap">
        <table class="astral-table">
          <thead>
            <tr>
              <th scope="col">Site</th>
              <th scope="col">Spend</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            ${rows || `<tr><td colspan="3">No sites on this estate.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `);
}

function protoAlertAckRecords() {
  const raw = Array.isArray(store.prototypeAlertAck) ? store.prototypeAlertAck : [];
  return raw
    .map((item) => {
      if (typeof item === "string" && item) return { id: item, reason: "" };
      const id = String(item?.id || "").trim();
      if (!id) return null;
      return { id, reason: protoResolveId(item.reason) };
    })
    .filter(Boolean);
}

function protoResolveId(id) {
  const key = String(id || "").trim();
  return PROTO_RESOLVE.some((item) => item.id === key) ? key : "";
}

function protoResolveName(id) {
  return PROTO_RESOLVE.find((item) => item.id === id)?.name || "";
}

function protoAckKey(kind, id) {
  return `${kind}:${id}`;
}

function protoAckControl(kind, id, resolved) {
  if (!protoCanAct()) return "";
  if (kind === "alert" && resolved) {
    return `
    <div class="astral-ack">
      ${protoIconBtn(
        "undo",
        "Undo",
        `data-proto-alert-undo="${escapeHtml(id)}"`,
        { className: "is-plain" }
      )}
    </div>
    `;
  }
  const key = protoAckKey(kind, id);
  const open = store.prototypeAckOpen === key;
  const menuId = `astral-ack-menu-${kind}-${id}`;
  const options = PROTO_RESOLVE.map(
    (item) => `
      <button
        type="button"
        role="menuitem"
        data-proto-resolve="${escapeHtml(kind)}"
        data-proto-resolve-id="${escapeHtml(id)}"
        data-proto-resolve-reason="${escapeHtml(item.id)}"
      >${escapeHtml(item.name)}</button>
    `
  ).join("");
  return `
    <div class="astral-ack">
      ${protoIconBtn(
        "resolve",
        "Resolve",
        `data-proto-ack="${escapeHtml(kind)}" data-proto-ack-id="${escapeHtml(
          id
        )}" aria-haspopup="menu" aria-expanded="${open ? "true" : "false"}" aria-controls="${escapeHtml(
          menuId
        )}"`,
        { className: "is-plain", on: open }
      )}
      <div
        id="${escapeHtml(menuId)}"
        class="astral-ack-menu${open ? protoMenuEnterClass(`ack:${key}`) : ""}"
        role="menu"
        aria-label="How it was resolved"
        ${open ? "" : "hidden"}
      >${options}</div>
    </div>
  `;
}

function protoAlertActions(item) {
  const resolved = protoAlertResolved(item);
  return `
    <div class="astral-actions">
      ${protoBtn(resolved ? "View alert" : "Investigate", `data-proto-alert="${escapeHtml(
        item.id
      )}"`)}
      <p class="astral-muted">${escapeHtml(protoAlertStateWord(item))}</p>
    </div>
  `;
}

function protoQueryResolveMap() {
  const raw = store.prototypeQueryResolve;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const out = {};
  Object.keys(raw).forEach((ref) => {
    const reason = protoResolveId(raw[ref]);
    if (ref && reason) out[ref] = reason;
  });
  return out;
}

function protoQueryReason(row) {
  if (!row) return "";
  return protoQueryResolveMap()[row.ref] || protoResolveId(row.reason);
}

function protoQueryCanResolve(row) {
  return Boolean(row && (row.status === "Open" || row.open) && !protoQueryReason(row));
}

function protoOpenQueries(rows) {
  return (rows || []).filter((row) => protoQueryCanResolve(row));
}

function protoQueryStatusLabel(row) {
  return protoResolveName(protoQueryReason(row)) || row.status || "Open";
}

function protoRaisedQueries() {
  return Array.isArray(store.prototypeRaisedQueries) ? store.prototypeRaisedQueries : [];
}

function protoQueryCommentMap() {
  const raw = store.prototypeQueryComments;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  return { ...raw };
}

function protoQueryNoteItem(row, item, index) {
  if (typeof item === "string") {
    const text = item.trim();
    return text
      ? { id: `${row.ref}-${index}`, text, userId: row.userId || "me", at: row.raisedAt || "" }
      : null;
  }
  const text = String(item?.text || "").trim();
  if (!text) return null;
  return {
    id: String(item?.id || `${row.ref}-${index}`),
    text,
    userId: String(item?.userId || row.userId || "me"),
    at: String(item?.at || row.raisedAt || ""),
  };
}

function protoQueryNotes(row) {
  if (!row) return [];
  const stored = protoQueryCommentMap()[row.ref];
  if (Array.isArray(stored)) {
    return stored.map((item, i) => protoQueryNoteItem(row, item, i)).filter(Boolean);
  }
  if (typeof stored === "string" && stored.trim()) {
    return [protoQueryNoteItem(row, stored, 0)].filter(Boolean);
  }
  const text = String(row.comment || "").trim();
  if (!text) return [];
  return [protoQueryNoteItem(row, text, 0)].filter(Boolean);
}

function protoQuerySaveNotes(ref, notes) {
  return {
    ...protoQueryCommentMap(),
    [ref]: notes.map((item) => ({
      id: item.id,
      text: item.text,
      userId: item.userId || "me",
      at: item.at || "",
    })),
  };
}

function protoQueryNoteAgo(note, query) {
  if (note?.at) return protoAgo(note.at);
  return protoQueryRaisedAgo(query);
}

function protoQueryReplyHtml() {
  return protoQueryComposer({
    formAttr: "data-proto-query-reply",
    name: "proto-query-reply",
    required: true,
  });
}

function protoQueryNoteMine(note) {
  if (!protoCanAct() || !note) return false;
  const id = String(note.userId || "me");
  const person = protoUserPeople().find((item) => item.id === id);
  return Boolean(person?.you) || id === "me";
}

function protoQueryMoreKey(ref, id) {
  return `${ref}:${id}`;
}

function protoQueryNoteHtml(query, note) {
  const face = protoQueryPersonFace(note);
  const name = escapeHtml(protoQueryUserLabel(note));
  const ago = escapeHtml(protoQueryNoteAgo(note, query));
  const editing = store.prototypeQueryEdit === note.id;
  if (editing && protoCanAct()) {
    return `
      <div class="astral-query-note astral-query-compose">
        ${face}
        <form class="astral-query-form" data-proto-query-edit="${escapeHtml(note.id)}">
          <label>
            <span class="sr-only">Comment</span>
            <textarea name="proto-query-edit" maxlength="400" rows="3" data-proto-grow required>${escapeHtml(
              note.text
            )}</textarea>
          </label>
          <div class="astral-query-form-bar">
            ${protoBtn("Comment", "", { type: "submit" })}
          </div>
        </form>
      </div>
    `;
  }
  const open = store.prototypeQueryMore === protoQueryMoreKey(query.ref, note.id);
  const menuId = `astral-query-more-${String(note.id).replace(/[^a-z0-9_-]+/gi, "-")}`;
  const more = protoQueryNoteMine(note)
    ? `<div class="astral-query-more">
        ${protoIconBtn(
          "more",
          "More",
          `data-proto-query-more="${escapeHtml(note.id)}" aria-haspopup="menu" aria-expanded="${
            open ? "true" : "false"
          }" aria-controls="${escapeHtml(menuId)}"`,
          { className: "is-plain", on: open, tipLabel: "Edit" }
        )}
        <div
          id="${escapeHtml(menuId)}"
          class="astral-ack-menu${open ? protoMenuEnterClass(`more:${store.prototypeQueryMore}`) : ""}"
          role="menu"
          aria-label="Edit"
          ${open ? "" : "hidden"}
        >
          <button type="button" role="menuitem" data-proto-query-note-edit="${escapeHtml(
            note.id
          )}">Edit</button>
        </div>
      </div>`
    : "";
  return `
    <div class="astral-query-note">
      <div class="astral-query-note-main">
        <div class="astral-query-note-head">
          ${face}
          <strong>${name}</strong>
          <span class="astral-muted">${ago}</span>
          ${more}
        </div>
        <p>${escapeHtml(note.text)}</p>
      </div>
    </div>
  `;
}

function protoQueryThreadHtml(query, lead) {
  const notes = protoQueryNotes(query);
  const extra = lead || "";
  if (!notes.length && !extra) return "";
  return `<div class="astral-query-thread">${extra}${notes
    .map((note) => protoQueryNoteHtml(query, note))
    .join("")}</div>`;
}

function protoQueryRows() {
  const reasons = protoQueryResolveMap();
  return [...protoRaisedQueries(), ...(protoData()?.queries || [])].map((row) => {
    const reason = reasons[row.ref] || protoResolveId(row.reason);
    const notes = protoQueryNotes(row);
    const comment = notes[0]?.text || row.comment;
    const next = comment === row.comment ? row : { ...row, comment };
    if (!reason) return next;
    return {
      ...next,
      status: protoResolveName(reason) || "Closed",
      open: false,
      reason,
    };
  });
}

function protoQueryByRef(ref) {
  const id = String(ref || "").trim();
  if (!id) return null;
  return protoQueryRows().find((row) => row.ref === id) || null;
}

function protoQueryUser(row) {
  const id = String(row?.userId || "me");
  return protoUserPeople().find((person) => person.id === id) || protoUserPeople().find((person) => person.you) || protoUserPeople()[0];
}

function protoQueryUserLabel(row) {
  const person = protoQueryUser(row);
  return person?.you ? "You" : person?.name || "You";
}

function protoQueryPersonMark(row) {
  const person = protoQueryUser(row);
  if (!person) return "";
  const photo = Boolean(person.you && protoProfilePicture());
  const face = photo
    ? `<img class="astral-avatar-photo" src="${escapeHtml(protoProfilePicture())}" alt="" />`
    : escapeHtml(protoUserInitials(person));
  return `<span class="astral-person-mark" aria-hidden="true">${face}</span>`;
}

function protoQueryPersonFace(row) {
  const person = protoQueryUser(row);
  if (!person) return "";
  const photo = Boolean(person.you && protoProfilePicture());
  return `<span class="astral-person${photo ? " has-photo" : ""}${
    person.you ? " is-you" : ""
  }">${protoQueryPersonMark(row)}</span>`;
}

function protoAstralFace() {
  return `<span class="astral-person is-astral"><span class="astral-person-mark" aria-hidden="true">${protoChartKeyStar()}</span></span>`;
}

function protoQueryUserMark(row) {
  const person = protoQueryUser(row);
  if (!person) return "";
  const name = protoQueryUserLabel(row);
  const photo = Boolean(person.you && protoProfilePicture());
  return `
    <span
      class="astral-person is-tip${photo ? " has-photo" : ""}${person.you ? " is-you" : ""}"
      tabindex="0"
      aria-label="${escapeHtml(name)}"
    >
      ${protoQueryPersonMark(row)}
      ${protoTip(name)}
    </span>
  `;
}

function protoQueryChannel(row) {
  if (row?.channel === "out" || row?.channel === "in" || row?.channel === "all") return row.channel;
  const meter = protoMeter(row?.meterId);
  return meter?.direction === "Export" ? "out" : "in";
}

function protoQueryPreset(row) {
  const id = String(row?.preset || "");
  if (PROTO_DATE_PRESETS.some((item) => item.id === id)) return id;
  if (/^\d{2}\.\d{2}$/.test(String(row?.point || ""))) return "24h";
  return protoDatePreset();
}

function protoChartNameFor(site, channel) {
  const incoming = (site?.meters || []).find((item) => item.direction !== "Export");
  const outgoing = (site?.meters || []).find((item) => item.direction === "Export");
  const both = Boolean(incoming && outgoing);
  let ch = channel || "all";
  if (ch === "all" && !both) ch = outgoing && !incoming ? "out" : "in";
  if (ch === "out" && !outgoing) ch = incoming ? "in" : "all";
  if (ch === "in" && !incoming) ch = outgoing ? "out" : "all";
  return ch === "all" && both ? "Incoming and outgoing" : "Consumption";
}

function protoHitSnapshot(point, chart, meter, color) {
  if (!point) return null;
  return {
    chart,
    time: point.label,
    value: point.value == null ? "" : protoFormatAmount(point.value),
    last: point.last == null ? "" : protoFormatAmount(point.last),
    unit: point.unit || "kWh",
    note: point.quality === "missing" ? protoTipQuality("missing") : "",
    compare: point.last != null || Boolean(point.nowLabel || point.lastLabel),
    nowLabel: String(point.nowLabel || ""),
    lastLabel: String(point.lastLabel || ""),
    meterId: String(point.meterId || meter?.id || ""),
    meterRef: String(point.meterRef || (meter ? protoMeterRef(meter) : "")),
    meterColor: String(point.meterColor || color || ""),
    quality: String(point.quality || ""),
    lastQuality: String(point.lastQuality || ""),
    stacks: protoPackStacks(point.stacks),
    lastStacks: protoPackStacks(point.lastStacks, true),
  };
}

function protoChartQueryTimes(chart) {
  if (store.activePrototypeView !== "portfolio") return new Set();
  if (!protoChartIsGraph(chart)) return new Set();
  const labels = protoGraphTimeLabels();
  return new Set(
    protoQueriesOnThisGraph()
      .map((row) => protoMarkTimeOnSeries(row.point, labels))
      .filter(Boolean)
  );
}

function protoAlertsOnThisGraph() {
  if (store.activePrototypeView !== "portfolio") return [];
  let meters = [];
  if (protoCompareOn()) {
    meters = protoCompareViewMeters(protoCompareBundle()?.meters || []);
  } else if (store.prototypeScope === "group") {
    const group = protoGroup(store.prototypeGroup);
    const flow = protoGroupFlow(group);
    meters =
      flow.channel === "out"
        ? flow.outgoing
        : flow.channel === "in"
          ? flow.incoming
          : protoGroupViewMeters(group);
  } else {
    const site = protoSiteByMeter(store.activePrototypeMeter);
    meters = protoSiteViewMeters(site);
  }
  const ids = new Set(meters.map((item) => item.id));
  return (protoData()?.alerts || []).filter((item) => ids.has(item.meterId) && item.point);
}

function protoChartAlertTimes(chart) {
  if (store.activePrototypeView !== "portfolio") return new Set();
  if (!protoChartIsGraph(chart)) return new Set();
  const labels = protoGraphTimeLabels();
  return new Set(
    protoAlertsOnThisGraph()
      .filter((item) => !protoAlertResolved(item))
      .map((item) => protoMarkTimeOnSeries(item.point, labels))
      .filter(Boolean)
  );
}

function protoAlertsAtTime(time) {
  if (!time) return [];
  return protoAlertsOnThisGraph().filter(
    (item) => item.point && protoMarkSitsAt(item.point, time)
  );
}

function protoPinAlertHtml(time) {
  const alerts = protoAlertsAtTime(time);
  if (!alerts.length) return "";
  return alerts
    .map((item) => {
      const record = protoAlertAckRecords().find((row) => row.id === item.id);
      const reason = protoResolveName(record?.reason);
      const done = protoAlertResolved(item);
      const word = protoAlertWord(item.kind);
      const ago = escapeHtml(protoCompactAgo(item.age));
      return `
        <div class="astral-query-note is-astral">
          <div class="astral-query-note-main">
            <div class="astral-query-note-head">
              ${protoAstralFace()}
              <strong>Astral</strong>
              <span class="astral-muted">${ago}</span>
              ${done ? "" : protoAckControl("alert", item.id, true)}
            </div>
            <p class="astral-alert-title">${escapeHtml(word)}</p>
            <p>${escapeHtml(item.summary)}</p>
            ${reason ? `<p class="astral-muted">${escapeHtml(reason)}</p>` : ""}
          </div>
        </div>
      `;
    })
    .join("");
}

function protoQueriesAtTime(site, time) {
  return protoQueriesOnThisGraph().filter((row) => row.point && protoMarkSitsAt(row.point, time));
}

function protoRevealPickedHit() {
  const hit = protoPinHit();
  if (!hit) {
    protoPlaceQueryPin();
    return;
  }
  hit.scrollIntoView({ block: "nearest", inline: "nearest" });
  if (!store.prototypeQueryForm) hit.focus({ preventScroll: true });
  protoPlaceQueryPin();
}

function protoGoToQuery(row) {
  if (!row) return;
  const scope = protoQueryScope(row);
  const channel = protoQueryChannel(row);
  const preset = protoQueryPreset(row);
  store.prototypeDatePreset = preset;
  store.prototypeChannel = channel;
  if (scope === "compare") {
    const level = protoCompareLevelId(row.compareLevel);
    store.prototypeScope = level === "group" ? "group" : "site";
    store.prototypeCompareIds = Array.isArray(row.compareIds) ? row.compareIds : [];
    store.prototypeCompareLevel = level;
    if (level === "group") store.prototypeGroup = row.currentId || row.groupId || "";
    else store.activePrototypeMeter = row.currentId || row.meterId || "";
    const site = protoSiteByMeter(store.activePrototypeMeter);
    if (level === "meter") Object.assign(store, protoSiteMeterPatch([store.activePrototypeMeter], site));
    else if (level === "site") Object.assign(store, protoSiteMeterPatch([], site));
    const ctx = protoQueryViewContext();
    const bundle = protoCompareBundle();
    const meter = protoMeter(row.meterId);
    const idx = (bundle.meters || []).findIndex((item) => item.id === row.meterId);
    let hit = row.point ? ctx.points.find((p) => p.label === row.point) : null;
    if (meter && protoChartIsIndividual() && row.point) {
      hit = protoSiteSeries(meter).find((p) => p.label === row.point) || hit;
    }
    const parent =
      level === "group"
        ? protoGroup(store.prototypeGroup)
        : protoGroupForSite(protoSiteByMeter(store.activePrototypeMeter));
    setProto({
      prototypeScope: store.prototypeScope,
      prototypeGroup: parent?.id || store.prototypeGroup || "",
      prototypeGroupClosed: parent ? protoClosedExcept(parent.id) : protoGroupClosed(),
      activePrototypeMeter: store.activePrototypeMeter,
      ...protoSiteMeterPatch(
        Array.isArray(store.prototypeSiteMeters) ? store.prototypeSiteMeters : [],
        protoSiteByMeter(store.activePrototypeMeter)
      ),
      prototypeCompareIds: store.prototypeCompareIds,
      prototypeCompareLevel: level,
      prototypeCompareOpen: false,
      prototypeChannel: channel,
      prototypeDatePreset: preset,
      prototypeDateOpen: false,
      prototypePane: "consumption",
      ...protoRememberDateHome(preset),
      prototypeChartPoint: protoHitSnapshot(
        hit,
        ctx.chart,
        meter,
        idx >= 0 ? protoLineStyle(idx).color : ""
      ),
      prototypeOpenQuery: row.ref,
      prototypeQueryForm: false,
      prototypeQuerySite: "",
      prototypeQueryCommentOpen: false,
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
    });
    protoRevealPickedHit();
    return;
  }
  if (scope === "group") {
    const group = protoGroup(row.groupId);
    if (!group) return;
    store.prototypeScope = "group";
    store.prototypeGroup = group.id;
    const ctx = protoQueryViewContext();
    const hit = row.point ? ctx.points.find((p) => p.label === row.point) : null;
    setProto({
      prototypeScope: "group",
      prototypeGroup: group.id,
      prototypeGroupClosed: protoClosedExcept(group.id),
      prototypeChannel: channel,
      prototypeDatePreset: preset,
      prototypeDateOpen: false,
      prototypePane: "consumption",
      ...protoRememberDateHome(preset),
      prototypeChartPoint: protoHitSnapshot(hit, ctx.chart),
      prototypeOpenQuery: row.ref,
      prototypeQueryForm: false,
      prototypeQuerySite: "",
      prototypeQueryCommentOpen: false,
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
      prototypeCompareIds: [],
      prototypeCompareMeters: [],
      prototypeCompareSites: [],
      prototypeCompareOpen: false,
      prototypeCompareQuery: "",
      prototypeCompareLevel: "group",
    });
    protoRevealPickedHit();
    return;
  }
  const site = protoSiteByMeter(row.meterId);
  if (!site) return;
  const parent = protoGroupForSite(site);
  Object.assign(store, protoSiteMeterPatch((site.meters || []).map((item) => item.id), site));
  const meters = protoSiteViewMeters(site);
  const meter = meters.find((item) => item.id === row.meterId) || meters[0];
  const lines = protoChartIsIndividual();
  const flow = protoSiteViewFlow(site);
  const points = lines ? protoSiteSeries(meter) : protoChannelSeries(site, flow.channel);
  const chart = lines ? "Consumption" : protoChartNameFor(site, flow.channel);
  const hit = row.point ? points.find((p) => p.label === row.point) : null;
  const idx = meters.findIndex((item) => item.id === meter?.id);
  setProto({
    activePrototypeMeter: row.meterId,
    prototypeScope: "site",
    prototypeGroup: parent?.id || "",
    prototypeGroupClosed: parent ? protoClosedExcept(parent.id) : protoGroupClosed(),
    prototypeChannel: channel,
    ...protoSiteMeterPatch((site.meters || []).map((item) => item.id), site),
    prototypeDatePreset: preset,
    prototypeDateOpen: false,
    prototypePane: "consumption",
    ...protoRememberDateHome(preset),
    prototypeChartPoint: protoHitSnapshot(
      hit,
      chart,
      meter,
      lines && idx >= 0 ? protoLineStyle(idx).color : ""
    ),
    prototypeOpenQuery: row.ref,
    prototypeQueryForm: false,
    prototypeQuerySite: "",
    prototypeQueryCommentOpen: false,
    activePrototypeView: "portfolio",
    prototypeFullscreen: true,
    ...protoComparePatch("site", row.meterId),
  });
  protoRevealPickedHit();
}

function protoAlertById(id) {
  const key = String(id || "").trim();
  if (!key) return null;
  return (protoData()?.alerts || []).find((item) => item.id === key) || null;
}

function protoGoToAlert(item) {
  if (!item) return;
  const site = protoSiteByMeter(item.meterId);
  if (!site) return;
  const parent = protoGroupForSite(site);
  const meter = protoMeter(item.meterId);
  const siteMeters = site.meters || [];
  const both =
    siteMeters.some((row) => row.direction !== "Export") &&
    siteMeters.some((row) => row.direction === "Export");
  const channel = both ? "all" : protoAlertSide(item);
  const preset = /^\d{2}\.\d{2}$/.test(String(item.point || "")) ? "24h" : protoDatePreset();
  store.prototypeDatePreset = preset;
  store.prototypeChannel = channel;
  Object.assign(store, protoSiteMeterPatch(siteMeters.map((row) => row.id), site));
  const meters = protoSiteViewMeters(site);
  const lines = protoChartIsIndividual();
  const flow = protoMetersFlow(meters);
  const dual = !lines && flow.channel === "all" && flow.both;
  const points = lines ? protoSiteSeries(meter) : protoMetersSeries(meters, flow.channel);
  const chart = lines || !dual ? "Consumption" : "Incoming and outgoing";
  const hit = item.point ? points.find((point) => point.label === item.point) : null;
  const idx = meters.findIndex((row) => row.id === meter?.id);
  const found = protoQueryRows().filter(
    (row) =>
      row.point &&
      row.point === item.point &&
      (!item.meterId || !row.meterId || row.meterId === item.meterId)
  );
  setProto({
    activePrototypeMeter: item.meterId,
    prototypeScope: "site",
    prototypeGroup: parent?.id || "",
    prototypeGroupClosed: parent ? protoClosedExcept(parent.id) : protoGroupClosed(),
    prototypeChannel: channel,
    ...protoSiteMeterPatch((site.meters || []).map((row) => row.id), site),
    prototypeDatePreset: preset,
    prototypeDateOpen: false,
    prototypePane: "consumption",
    ...protoRememberDateHome(preset),
    prototypeChartPoint: protoHitSnapshot(
      hit,
      chart,
      lines ? meter : null,
      lines && idx >= 0 ? protoLineStyle(idx).color : ""
    ),
    prototypeOpenQuery: found[0]?.ref || "",
    prototypeQueryForm: Boolean(!found[0] && protoCanAct()),
    prototypeQuerySite: "",
    prototypeQueryCommentOpen: false,
    activePrototypeView: "portfolio",
    prototypeFullscreen: true,
    ...protoComparePatch("site", item.meterId),
  });
  protoRevealPickedHit();
}

function protoAlerts() {
  const state = protoState();
  const facet = protoAlertFacetId(state.facet);
  const alerts = (protoData()?.alerts || []).filter((item) => protoAlertMatchesFacet(item, facet));
  const chips = PROTO_ALERT_FACETS.map((item) => {
    const on = item.id === facet;
    return `
      <button type="button" class="astral-chip${on ? " is-on" : ""}" data-proto-facet="${escapeHtml(
        item.id
      )}" aria-pressed="${on ? "true" : "false"}">${escapeHtml(item.name)}</button>
    `;
  }).join("");
  const cards = alerts.map((item) => protoAlertCard(item, item.meter)).join("");
  return astralShell(`
    ${astralPageHead("Alerts", protoData()?.alertsLead || "")}
    <div class="astral-stage-tools astral-pills" role="group" aria-label="Filter flags">${chips}</div>
    <div class="astral-stack">${cards || `<p class="astral-empty">No alerts in this filter.</p>`}</div>
    <p class="astral-muted">Every alert here is something a customer would otherwise find from a bill or a missed reading.</p>
  `);
}

function protoQueries() {
  const rows = protoQueryRows();
  return astralShell(`
    ${astralPageHead("Your queries", protoData()?.queriesLead || "")}
    <section class="astral-card">
      ${protoQueryTable(rows)}
    </section>
  `);
}

function protoReportList() {
  return protoReportDefs().map((def) => ({
    ...def,
    status: protoReportType(def.type).short,
    blurb: protoReportSummary(def),
    live: def.on,
    file: def.type === "extract" || def.type === "billing",
  }));
}

function protoReportCard(def) {
  const canEdit = protoCanEditReports();
  const type = protoReportType(def.type);
  const id = escapeHtml(def.id);
  return `
    <article class="astral-card astral-report-card${def.on ? "" : " is-off"}" data-proto-report-card="${id}">
      <div class="astral-card-head">
        <h3>${escapeHtml(def.name)}</h3>
        ${protoIconTip(
          `<span class="astral-tag is-${escapeHtml(def.type)}" tabindex="0">${escapeHtml(type.short)}</span>`,
          type.blurb
        )}
      </div>
      <p>${escapeHtml(protoReportSummary(def))}</p>
      <p class="astral-report-to">${protoIconMark("mail")}<span>${escapeHtml(
        protoReportToLine(def)
      )}</span></p>
      <div class="astral-actions"${canEdit ? ` data-proto-report-toggle="${id}"` : ""}>
        <span class="astral-report-wait"><span class="astral-muted">${escapeHtml(
          protoReportStatusLine(def)
        )}</span></span>
        ${canEdit ? protoIconBtn("settings", "Edit report", `data-proto-report-edit="${id}"`) : ""}
        ${
          canEdit
            ? `<button
          type="button"
          class="astral-switch${def.on ? " is-on" : ""}"
          role="switch"
          aria-checked="${def.on ? "true" : "false"}"
          aria-label="${escapeHtml(def.name)}"
        ></button>`
            : ""
        }
      </div>
    </article>
  `;
}

function protoReports() {
  const defs = protoReportDefs();
  const empty = protoCanEditReports()
    ? `<h3>No reports yet</h3><p class="astral-muted">Add a data extract, tenant bill, data alert or missing data alert.</p>`
    : `<h3>No reports yet</h3><p class="astral-muted">Reports your team sets up show here.</p>`;
  return astralShell(`
    ${protoReportsAreaHead("reports")}
    ${protoReportEditModal()}
    ${
      defs.length
        ? `<section class="astral-card astral-reports-sheet"><div class="astral-report-grid">${defs
            .map((def) => protoReportCard(def))
            .join("")}</div></section>`
        : `<section class="astral-card astral-reports-sheet"><div class="astral-empty">${empty}</div></section>`
    }
  `);
}

function protoProfileCard() {
  const picture = protoProfilePicture();
  const pictureError = Boolean(store.prototypeProfilePictureError);
  const name = protoProfileDraftName();
  const title = protoProfileDraftJobTitle();
  const discipline = protoProfileDraftDiscipline();
  const disciplineName =
    PROTO_PROFILE_DISCIPLINES.find((item) => item.id === discipline)?.name || "";
  const dirty = protoProfileDirty();
  const previewName = protoProfileLine(name);
  const card = `
    <section class="astral-card">
      <div class="astral-card-head">
        <h3>Signed in</h3>
        ${
          disciplineName
            ? `<span class="astral-tag">${escapeHtml(disciplineName)}</span>`
            : ""
        }
      </div>
      <div class="astral-profile-mark">
        <div class="astral-profile-preview${picture ? " has-photo" : ""}">${protoAvatarMark(
          picture ? "Profile picture" : previewName,
          previewName
        )}</div>
        <div class="astral-actions">
          <label class="astral-ghost astral-upload">
            Upload picture
            <input
              class="sr-only"
              type="file"
              accept="image/jpeg,image/png,.jpg,.jpeg,.png"
              data-proto-picture="file"
            />
          </label>
          ${
            picture
              ? `${protoGhost("Remove", "data-proto-picture=\"remove\"")}`
              : ""
          }
        </div>
      </div>
      <p class="astral-muted"${pictureError ? ' role="status"' : ""}>${
        pictureError
          ? "Use a JPEG or PNG."
          : "A JPEG or PNG. It sits in ME. Empty ME stays white on cyan. A name puts initials there."
      }</p>
      <form data-proto-profile>
        <div class="astral-profile-fields">
          <div class="astral-profile-row">
            <label class="astral-field">
              <span>Name</span>
              <input
                type="text"
                name="proto-profile-name"
                value="${escapeHtml(name)}"
                maxlength="80"
                autocomplete="name"
                spellcheck="false"
              />
            </label>
            <label class="astral-field">
              <span>Email address</span>
              <input
                type="email"
                name="proto-profile-email"
                value="${escapeHtml(protoProfileEmail())}"
                autocomplete="email"
                spellcheck="false"
                disabled
              />
            </label>
          </div>
          <div class="astral-profile-row">
            <div class="astral-field">
              <span id="astral-profile-discipline">Discipline</span>
              ${protoSelect({
                id: "profile-discipline",
                label: "Discipline",
                value: discipline,
                placeholder: "Pick a discipline",
                wide: true,
                options: PROTO_PROFILE_DISCIPLINES.map((item) => ({
                  value: item.id,
                  label: item.name,
                })),
              })}
            </div>
            <label class="astral-field">
              <span>Job title</span>
              <input
                type="text"
                name="proto-profile-title"
                value="${escapeHtml(title)}"
                maxlength="80"
                autocomplete="organization-title"
                spellcheck="false"
              />
            </label>
          </div>
        </div>
        <p class="astral-muted">Contact still waits.</p>
        <div class="astral-actions">
          ${protoBtn("Save changes", `${dirty ? "" : " disabled"}`, { type: "submit" })}
        </div>
      </form>
    </section>
  `;
  return card;
}

function protoProfile() {
  return astralShell(`
    ${astralPageHead(
      "Profile",
      "Your name, discipline, and job title."
    )}
    ${protoProfileCard()}
  `);
}

function protoColourPicker(kind, value, name) {
  const hsv = protoHexToHsv(value);
  const hue = protoHsvToHex(hsv.h, 1, 1);
  const swatches = PROTO_BRAND_SWATCHES.map((hex) => {
    const on = protoHex(hex) === protoHex(value) ? " is-on" : "";
    const pale = hex === "#FFFFFF" || hex === "#DFDFDF" ? " is-pale" : "";
    return `
      <button
        type="button"
        class="astral-picker-swatch${on}${pale}"
        data-proto-recent="${hex}"
        style="background:${hex}"
        aria-label="${hex}"
      ></button>
    `;
  }).join("");
  return `
    <div
      class="astral-picker"
      data-proto-picker="${kind}"
      style="--picker-hue:${hue}"
      role="dialog"
      aria-label="Pick ${name}"
    >
      <div class="astral-picker-sv" data-proto-picker-sv>
        <span
          class="astral-picker-sv-dot"
          style="left:${hsv.s * 100}%;top:${(1 - hsv.v) * 100}%"
        ></span>
      </div>
      <div class="astral-picker-hue" data-proto-picker-hue>
        <span class="astral-picker-hue-dot" style="left:${(hsv.h / 360) * 100}%"></span>
      </div>
      <label class="astral-picker-hex">
        <span>Hex</span>
        <input
          type="text"
          data-proto-brand-hex="${kind}"
          value="${escapeHtml(value)}"
          spellcheck="false"
          maxlength="7"
          size="7"
          aria-label="${name} hex"
        />
      </label>
      <div class="astral-picker-swatches" role="group" aria-label="Common colours">${swatches}</div>
    </div>
  `;
}

function protoBrandSwatch(kind, value, canAct = true) {
  const name = protoBrandName(kind);
  const open = canAct && protoState().colourOpen === kind;
  return `
    <div class="astral-brand-row${open ? " is-open" : ""}"${canAct ? ` data-proto-brand-row="${kind}"` : ""}>
      <span class="astral-brand-row-name">${name}</span>
      ${
        canAct
          ? `<input
        type="text"
        data-proto-brand-hex="${kind}"
        value="${escapeHtml(value)}"
        spellcheck="false"
        maxlength="7"
        aria-label="${name} hex"
      />
      <button
        type="button"
        class="astral-brand-swatch"
        data-proto-picker-open="${kind}"
        style="background:${escapeHtml(value)}"
        aria-label="Pick ${name}"
        aria-expanded="${open ? "true" : "false"}"
        aria-haspopup="dialog"
      ></button>
      ${open ? protoColourPicker(kind, value, name) : ""}`
          : `<span class="astral-brand-swatch" style="background:${escapeHtml(value)}" aria-hidden="true"></span>`
      }
    </div>
  `;
}

function protoEmailOk(raw) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(raw || "").trim());
}

function protoUserRoleId(raw) {
  if (raw === "super") return "super-admin";
  if (raw === "user") return "contributor";
  if (raw === "super-admin") return "super-admin";
  return PROTO_USER_ROLES.some((role) => role.id === raw) ? raw : "contributor";
}

function protoSeeAsPerson() {
  const userId = String(store.prototypeSeeAsUser || "");
  if (!userId) return null;
  const invited = (Array.isArray(store.prototypeInvitedUsers) ? store.prototypeInvitedUsers : []).find(
    (item) => item && String(item.id) === userId
  );
  if (invited) return invited;
  return PROTO_WALK_PEOPLE.find((item) => item.id === userId) || null;
}

function protoMeRole() {
  if (protoCompanyId() === "admin-user" && protoFlowId() === "product") {
    const person = protoSeeAsPerson();
    if (person) return protoUserRoleId(person.role);
    if (protoKnownSeeAsCompany(store.prototypeSeeAsCompany)) return "admin";
  }
  const access = protoAccessId();
  if (access) return access;
  return protoUserRoleId(store.prototypeMeRole || "manager");
}

function protoCanAdminCompany() {
  const role = protoMeRole();
  return role === "super-admin" || role === "admin";
}

function protoCanManagePeople() {
  const role = protoMeRole();
  return role === "super-admin" || role === "admin" || role === "manager";
}

function protoCanOpenSettings() {
  return protoCanManagePeople();
}

function protoSeesBilling() {
  const role = protoMeRole();
  if (role !== "admin" && role !== "manager") return false;
  const seeing = protoSeeAs();
  const companyId = seeing
    ? protoSeeAsLensCompany(seeing.company).id
    : protoCompanyId();
  return companyId === "end-customer";
}

function protoSettingsAllowed() {
  const items = ["profile", "organisation"];
  if (protoCanManagePeople()) items.push("users");
  if (protoSeesBilling()) items.push("billing");
  return items;
}

function protoSettingsSection() {
  if (protoState().view === "users" && protoCanManagePeople()) return "users";
  const raw = store.prototypeSettingsSection;
  if (protoSettingsAllowed().includes(raw)) return raw;
  return "organisation";
}

function protoClosePersonPatch() {
  return {
    prototypeUserOpen: "",
    prototypeUserMenu: "",
    prototypePersonTeamQuery: "",
    prototypePersonSitesQuery: "",
    prototypeContractFileError: false,
    ...protoRenewClear(),
  };
}

function protoGoSettings(section) {
  if (!protoCanOpenSettings()) return false;
  const nextSection = protoSettingsAllowed().includes(section)
    ? section
    : "organisation";
  setProto({
    activePrototypeView: nextSection === "users" ? "users" : "settings",
    prototypeSettingsSection: nextSection,
    prototypeFullscreen: true,
    ...protoClosePersonPatch(),
  });
  return true;
}

function protoOrgNameDefault() {
  return protoOrgScope();
}

function protoOrgName() {
  const custom = protoProfileLine(protoOrgState().name);
  return custom || protoOrgNameDefault();
}

function protoOrgCountryId(raw) {
  const id = String(raw || "").toLowerCase();
  const mapped = id === "gb" ? "eng" : id;
  return PROTO_COUNTRIES.some((item) => item.id === mapped) ? mapped : "eng";
}

function protoOrgCountry() {
  return protoOrgCountryId(protoOrgState().country);
}

function protoCanAct() {
  return protoMeRole() !== "viewer";
}

function protoCanLoginAsUser() {
  return protoMeRole() === "super-admin";
}


function protoRenewClear() {
  return {
    prototypeRenewForm: false,
    prototypeRenewPerson: "",
    prototypeRenewFrom: "",
    prototypeRenewTo: "",
    prototypeRenewFileName: "",
    prototypeRenewFileError: false,
    prototypeRenewCal: "",
  };
}

function protoPdfFileOk(blob) {
  if (!blob) return false;
  const type = String(blob.type || "").toLowerCase();
  const name = String(blob.name || "").toLowerCase();
  return type === "application/pdf" || name.endsWith(".pdf");
}

const protoContractFiles = new Map();
let protoRenewFileBlob = null;

function protoContractPdfBlob(fileName) {
  const text = "Temporary access contract.";
  const stream = `BT /F1 12 Tf 72 720 Td (${text}) Tj ET`;
  const pdf = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj
4 0 obj<</Length ${stream.length}>>stream
${stream}
endstream
endobj
5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
trailer<</Root 1 0 R>>
%%EOF
`;
  return new Blob([pdf], { type: "application/pdf" });
}

function protoDownloadContract(id) {
  const person = protoUserPeople().find((item) => item.id === id) || protoOpenPerson();
  const name = String(person?.contractName || protoContractFiles.get(id)?.name || "contract.pdf")
    .trim()
    .slice(0, 120);
  if (!name) return;
  const kept = protoContractFiles.get(id);
  const blob = kept?.blob || protoContractPdfBlob(name);
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = name.endsWith(".pdf") ? name : `${name}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(href), 1000);
}

function protoReplacePersonContract(id, fileName, blob) {
  protoContractFiles.set(id, { blob, name: fileName });
  if (id === "me") {
    setProto({
      prototypeMeContractName: fileName,
      prototypeContractFileError: false,
    });
    return;
  }
  setProto({
    prototypeInvitedUsers: protoInvitedUsers().map((item) =>
      item.id === id ? { ...item, contractName: fileName } : item
    ),
    prototypeContractFileError: false,
  });
}

function protoSetPersonContract(id, from, to, fileName) {
  if (protoRenewFileBlob) {
    protoContractFiles.set(id, { blob: protoRenewFileBlob, name: fileName });
    protoRenewFileBlob = null;
  }
  if (id === "me") {
    setProto({
      ...protoRenewClear(),
      prototypeMeExpiresFrom: from,
      prototypeMeExpiresOn: to,
      prototypeMeContractName: fileName,
    });
    return;
  }
  setProto({
    ...protoRenewClear(),
    prototypeInvitedUsers: protoInvitedUsers().map((item) =>
      item.id === id
        ? { ...item, expiresFrom: from, expiresOn: to, contractName: fileName }
        : item
    ),
  });
}

function protoUserFilterGroups() {
  const items = protoSeesCompanies()
    ? [{ id: "super-admin", name: "Super admin" }, ...PROTO_USER_ROLES]
    : PROTO_USER_ROLES.slice();
  return [{ id: "role", name: "Role", items }];
}

function protoUserFilterRoleIds() {
  return protoUserFilterGroups()[0].items.map((item) => item.id);
}

function protoUserRoleFilterIds(raw) {
  const allowed = protoUserFilterRoleIds();
  const source = raw !== undefined ? raw : store.prototypeUserRoleFilter;
  if (Array.isArray(source)) return source.filter((id) => allowed.includes(id));
  if (!source || source === "all") return [];
  return allowed.includes(source) ? [source] : [];
}

function protoUserRoleFilterOpen() {
  return Boolean(store.prototypeUserRoleFilterOpen);
}

function protoUserRoleFilterControl() {
  const picked = protoUserRoleFilterIds();
  return protoFilterShell({
    hit: `data-proto-user-filter="toggle"`,
    open: protoUserRoleFilterOpen(),
    count: picked.length,
    menuId: "astral-user-filter-menu",
    menu: protoFilterTickGroups(picked, "data-proto-user-filter", protoUserFilterGroups()),
  });
}

function protoUserRoleFilterPills() {
  const picked = protoUserRoleFilterIds();
  if (!picked.length) return "";
  const pills = picked
    .map((id) => {
      const name = protoUserRoleName(id);
      return `
        <span class="astral-filter-pill">
          <span>${escapeHtml(name)}</span>
          ${protoClearButton(
            "astral-filter-pill-clear",
            `data-proto-user-filter="${escapeHtml(id)}"`,
            `Clear ${name}`
          )}
        </span>
      `;
    })
    .join("");
  return `
    <div class="astral-filter-pills">
      ${pills}
      ${protoTextBtn("Clear", 'data-proto-user-filter="clear"')}
    </div>
  `;
}

function protoUserRoleName(id) {
  return (
    PROTO_ACCESS_ROLES.find((role) => role.id === id)?.name ||
    PROTO_USER_ROLES.find((role) => role.id === id)?.name ||
    "Contributor"
  );
}

function protoUserInitials(person) {
  if (person?.you) return protoProfileInitials();
  return protoProfileInitials(person?.name || person?.email || "?");
}

function protoUserDrafts() {
  const drafts = Array.isArray(store.prototypeUserDrafts) ? store.prototypeUserDrafts : [];
  return drafts.length ? drafts.map((item) => String(item || "")) : [""];
}

function protoInvitedUsers() {
  return (Array.isArray(store.prototypeInvitedUsers) ? store.prototypeInvitedUsers : [])
    .filter((item) => item && item.id && protoEmailOk(item.email))
    .map((item) => ({
      id: String(item.id),
      email: String(item.email).trim().toLowerCase(),
      name: String(item.name || "").trim(),
      role: protoUserRoleId(item.role),
      lastActive: String(item.lastActive || "Invited").trim() || "Invited",
      company: protoTeamCompanyId(item.company),
      expiresOn: String(item.expiresOn || PROTO_TEMP_TO),
      expiresFrom: String(item.expiresFrom || PROTO_TEMP_FROM),
      contractName: String(item.contractName || ""),
    }));
}

function protoDayStamp(raw) {
  if (raw instanceof Date && !Number.isNaN(raw.getTime())) {
    return Date.UTC(raw.getFullYear(), raw.getMonth(), raw.getDate());
  }
  const text = String(raw || "").trim();
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const parsed = new Date(text);
  if (Number.isNaN(parsed.getTime())) return Date.UTC(2026, 10, 30);
  return Date.UTC(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
}

function protoExpiryLeft(raw) {
  const end = protoDayStamp(raw || PROTO_TEMP_TO);
  const now = protoDayStamp(new Date());
  const days = Math.round((end - now) / 86400000);
  if (days <= 0) return { count: 0, unit: "days" };
  const endDate = new Date(end);
  const nowDate = new Date(now);
  let months =
    (endDate.getUTCFullYear() - nowDate.getUTCFullYear()) * 12 +
    (endDate.getUTCMonth() - nowDate.getUTCMonth());
  if (endDate.getUTCDate() < nowDate.getUTCDate()) months -= 1;
  if (months > 12) return { count: Math.floor(months / 12), unit: "years" };
  if (months >= 1) return { count: months, unit: "months" };
  return { count: days, unit: "days" };
}

function protoExpiryLabel(raw) {
  const left = protoExpiryLeft(raw);
  const unit = left.count === 1 ? left.unit.slice(0, -1) : left.unit;
  return `${left.count} ${unit}`;
}

function protoExpiryPill(raw) {
  return `<span class="astral-tag">${escapeHtml(protoExpiryLabel(raw))}</span>`;
}

function protoHomeCompany() {
  return protoTeamCompanyChoices()[0]?.value || "Network Rail";
}

function protoInviteCompany() {
  if (!protoSeesCompanies()) return protoHomeCompany();
  const fold = protoUsersFold();
  if (fold.kind === "team") return protoTeamCompanyId(fold.team.company);
  if (fold.kind === "bucket") return protoTeamCompanyId(fold.bucket.name);
  return protoHomeCompany();
}

function protoUserPeople() {
  const all = [
    {
      id: "me",
      name: protoProfileName() || "You",
      email: protoProfileEmail(),
      role: protoMeRole(),
      company: protoSeesCompanies() ? "" : protoHomeCompany(),
      lastActive: "Now",
      expiresOn: store.prototypeMeExpiresOn || PROTO_TEMP_TO,
      expiresFrom: store.prototypeMeExpiresFrom || PROTO_TEMP_FROM,
      contractName: String(store.prototypeMeContractName || ""),
      you: true,
    },
    ...protoInvitedUsers().map((item) => ({
      id: item.id,
      name: item.name || item.email,
      email: item.email,
      role: item.role,
      company: protoTeamCompanyId(item.company),
      lastActive: item.lastActive,
      expiresOn: item.expiresOn,
      expiresFrom: item.expiresFrom,
      contractName: item.contractName,
      you: false,
    })),
  ];
  if (protoSeesCompanies()) return all;
  const allowed = new Set(protoTeamCompanyChoices().map((item) => item.value));
  return all.filter((person) => person.you || allowed.has(person.company));
}

function protoUserRoleChoices(current) {
  if (current === "super-admin") {
    return [{ value: "super-admin", label: "Super admin" }];
  }
  return PROTO_USER_ROLES.map((role) => ({ value: role.id, label: role.name }));
}

function protoPersonRoleChoices(person) {
  if (person.role === "super-admin") {
    return [{ value: "super-admin", label: "Super admin" }];
  }
  if (protoMeRole() === "manager") {
    return PROTO_USER_ROLES.filter((role) => role.id !== "admin").map((role) => ({
      value: role.id,
      label: role.name,
    }));
  }
  return PROTO_USER_ROLES.map((role) => ({ value: role.id, label: role.name }));
}

function protoCanEditPersonRole(person) {
  if (!protoCanManagePeople() && !person.you) return false;
  if (person.role === "super-admin") return protoMeRole() === "super-admin";
  if (person.role === "admin" && protoMeRole() === "manager") return false;
  return true;
}

const PROTO_TEAM_COMPANIES = ["Network Rail", "Scottish Water", "Tesco", "EDF"];
const PROTO_COMPANY_TYPES = [
  { id: "customer", name: "Customer", lens: "end-customer" },
  { id: "supplier", name: "Supplier", lens: "portfolio-customer" },
  { id: "broker", name: "Broker / TPI", lens: "broker" },
];

function protoCompanyTypeId(raw) {
  const id = String(raw || "").trim();
  return PROTO_COMPANY_TYPES.some((item) => item.id === id) ? id : "customer";
}

function protoAddedCompanies(raw) {
  const taken = new Set(PROTO_TEAM_COMPANIES.map((name) => name.toLowerCase()));
  const out = [];
  const source = Array.isArray(raw)
    ? raw
    : Array.isArray(store.prototypeAddedCompanies)
      ? store.prototypeAddedCompanies
      : [];
  source.forEach((item) => {
    const name = String(item?.name || "").trim().slice(0, 80);
    if (!name || taken.has(name.toLowerCase())) return;
    taken.add(name.toLowerCase());
    out.push({ name, type: protoCompanyTypeId(item.type) });
  });
  return out;
}

function protoTeamCompanyNames(raw) {
  return [...PROTO_TEAM_COMPANIES, ...protoAddedCompanies(raw).map((item) => item.name)];
}

function protoCompanyTypeForName(name) {
  const added = protoAddedCompanies().find((item) => item.name === name);
  return added ? added.type : "customer";
}

function protoSeeAsLensCompany(name) {
  const type = protoCompanyTypeForName(name);
  const lens = PROTO_COMPANY_TYPES.find((item) => item.id === type)?.lens || "end-customer";
  return PROTO_COMPANIES.find((item) => item.id === lens) || PROTO_COMPANIES[1];
}

function protoTeamCompanyChoices() {
  const seeing = protoSeeAs();
  if (seeing?.company) return [{ value: seeing.company, label: seeing.company }];
  if (protoCompanyId() === "portfolio-customer") return [{ value: "EDF", label: "EDF" }];
  if (protoCompanyId() === "admin-user") {
    return protoTeamCompanyNames().map((name) => ({ value: name, label: name }));
  }
  return [{ value: "Network Rail", label: "Network Rail" }];
}

function protoTeamCompanyId(raw) {
  if (protoTeamCompanyNames().includes(raw)) return raw;
  return protoTeamCompanyChoices()[0]?.value || "Network Rail";
}

function protoSeesCompanies() {
  return protoMeRole() === "super-admin";
}

function protoCanPickTeamCompany() {
  return protoSeesCompanies() && protoTeamCompanyChoices().length > 1;
}

const PROTO_WALK_USERS = "companies-4";
const PROTO_WALK_STUB_TEAMS = new Set(["test team", "energy reporting", "test"]);
const PROTO_WALK_PEOPLE = [
  {
    id: "u-alex",
    name: "Alex Hart",
    email: "alex@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "Invited",
    expiresOn: "2026-11-30",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-priya",
    name: "Priya Shah",
    email: "priya.shah@networkrail.co.uk",
    company: "Network Rail",
    role: "manager",
    lastActive: "Yesterday",
    expiresOn: "2027-10-01",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-james",
    name: "James Adeyemi",
    email: "james.adeyemi@networkrail.co.uk",
    company: "Network Rail",
    role: "manager",
    lastActive: "2 hours ago",
    expiresOn: "2027-09-30",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-amira",
    name: "Amira Khan",
    email: "amira.khan@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "Yesterday",
    expiresOn: "2027-11-12",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-tom",
    name: "Tom Brennan",
    email: "tom.brennan@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "3 days ago",
    expiresOn: "2027-08-18",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-helen",
    name: "Helen Crowe",
    email: "helen.crowe@networkrail.co.uk",
    company: "Network Rail",
    role: "viewer",
    lastActive: "Yesterday",
    expiresOn: "2026-11-30",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-sarah",
    name: "Sarah Quinn",
    email: "sarah.quinn@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "Invited",
    expiresOn: "2026-09-29",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-ben",
    name: "Ben Walsh",
    email: "ben.walsh@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "2 days ago",
    expiresOn: "2027-12-01",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-luca",
    name: "Luca Moretti",
    email: "luca.moretti@networkrail.co.uk",
    company: "Network Rail",
    role: "viewer",
    lastActive: "Invited",
    expiresOn: "2027-10-01",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-ruth",
    name: "Ruth Okonkwo",
    email: "ruth.okonkwo@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "4 hours ago",
    expiresOn: "2027-11-01",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-owen",
    name: "Owen Reid",
    email: "owen.reid@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "Yesterday",
    expiresOn: "2027-07-14",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-claire",
    name: "Claire Hughes",
    email: "claire.hughes@networkrail.co.uk",
    company: "Network Rail",
    role: "manager",
    lastActive: "1 hour ago",
    expiresOn: "2027-12-01",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-marcus",
    name: "Marcus Cole",
    email: "marcus.cole@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "5 days ago",
    expiresOn: "2026-12-18",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-dylan",
    name: "Dylan Frost",
    email: "dylan.frost@networkrail.co.uk",
    company: "Network Rail",
    role: "viewer",
    lastActive: "Invited",
    expiresOn: "2027-03-01",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-joanna",
    name: "Joanna Pike",
    email: "joanna.pike@networkrail.co.uk",
    company: "Network Rail",
    role: "contributor",
    lastActive: "Yesterday",
    expiresOn: "2027-09-12",
    expiresFrom: "2026-06-01",
  },
  {
    id: "u-tesco-maya",
    name: "Maya Chen",
    email: "maya.chen@tesco.com",
    company: "Tesco",
    role: "admin",
    lastActive: "1 hour ago",
    expiresOn: "2027-11-30",
    expiresFrom: "2026-04-01",
  },
  {
    id: "u-tesco-jon",
    name: "Jon Hale",
    email: "jon.hale@tesco.com",
    company: "Tesco",
    role: "manager",
    lastActive: "Yesterday",
    expiresOn: "2027-10-01",
    expiresFrom: "2026-04-01",
  },
  {
    id: "u-tesco-rita",
    name: "Rita Kapoor",
    email: "rita.kapoor@tesco.com",
    company: "Tesco",
    role: "contributor",
    lastActive: "Invited",
    expiresOn: "2026-12-01",
    expiresFrom: "2026-04-01",
  },
  {
    id: "u-tesco-paul",
    name: "Paul Nairn",
    email: "paul.nairn@tesco.com",
    company: "Tesco",
    role: "manager",
    lastActive: "3 hours ago",
    expiresOn: "2027-08-20",
    expiresFrom: "2026-04-01",
  },
  {
    id: "u-tesco-ellie",
    name: "Ellie Brooks",
    email: "ellie.brooks@tesco.com",
    company: "Tesco",
    role: "contributor",
    lastActive: "2 days ago",
    expiresOn: "2027-09-01",
    expiresFrom: "2026-04-01",
  },
  {
    id: "u-tesco-greg",
    name: "Greg Walsh",
    email: "greg.walsh@tesco.com",
    company: "Tesco",
    role: "viewer",
    lastActive: "Yesterday",
    expiresOn: "2026-11-15",
    expiresFrom: "2026-04-01",
  },
  {
    id: "u-tesco-fay",
    name: "Fay Okeke",
    email: "fay.okeke@tesco.com",
    company: "Tesco",
    role: "contributor",
    lastActive: "Invited",
    expiresOn: "2027-06-30",
    expiresFrom: "2026-04-01",
  },
  {
    id: "u-sw-ian",
    name: "Ian Brodie",
    email: "ian.brodie@scottishwater.co.uk",
    company: "Scottish Water",
    role: "admin",
    lastActive: "1 hour ago",
    expiresOn: "2027-12-01",
    expiresFrom: "2026-03-01",
  },
  {
    id: "u-sw-kate",
    name: "Kate Munro",
    email: "kate.munro@scottishwater.co.uk",
    company: "Scottish Water",
    role: "manager",
    lastActive: "Yesterday",
    expiresOn: "2027-09-01",
    expiresFrom: "2026-03-01",
  },
  {
    id: "u-sw-ross",
    name: "Ross Gillespie",
    email: "ross.gillespie@scottishwater.co.uk",
    company: "Scottish Water",
    role: "contributor",
    lastActive: "4 days ago",
    expiresOn: "2027-07-22",
    expiresFrom: "2026-03-01",
  },
  {
    id: "u-sw-aoife",
    name: "Aoife Byrne",
    email: "aoife.byrne@scottishwater.co.uk",
    company: "Scottish Water",
    role: "manager",
    lastActive: "2 hours ago",
    expiresOn: "2027-11-01",
    expiresFrom: "2026-03-01",
  },
  {
    id: "u-sw-neal",
    name: "Neal Duffy",
    email: "neal.duffy@scottishwater.co.uk",
    company: "Scottish Water",
    role: "contributor",
    lastActive: "Invited",
    expiresOn: "2026-10-20",
    expiresFrom: "2026-03-01",
  },
  {
    id: "u-sw-lisa",
    name: "Lisa Grant",
    email: "lisa.grant@scottishwater.co.uk",
    company: "Scottish Water",
    role: "viewer",
    lastActive: "Yesterday",
    expiresOn: "2027-04-12",
    expiresFrom: "2026-03-01",
  },
  {
    id: "u-edf-sam",
    name: "Sam Okoro",
    email: "sam.okoro@edfenergy.com",
    company: "EDF",
    role: "admin",
    lastActive: "3 hours ago",
    expiresOn: "2027-12-01",
    expiresFrom: "2026-05-01",
  },
  {
    id: "u-edf-lea",
    name: "Lea Moreau",
    email: "lea.moreau@edfenergy.com",
    company: "EDF",
    role: "manager",
    lastActive: "Yesterday",
    expiresOn: "2027-08-01",
    expiresFrom: "2026-05-01",
  },
  {
    id: "u-edf-chris",
    name: "Chris Dalton",
    email: "chris.dalton@edfenergy.com",
    company: "EDF",
    role: "contributor",
    lastActive: "5 hours ago",
    expiresOn: "2027-10-14",
    expiresFrom: "2026-05-01",
  },
  {
    id: "u-edf-yara",
    name: "Yara Hassan",
    email: "yara.hassan@edfenergy.com",
    company: "EDF",
    role: "contributor",
    lastActive: "Invited",
    expiresOn: "2026-11-01",
    expiresFrom: "2026-05-01",
  },
  {
    id: "u-edf-pete",
    name: "Pete Lang",
    email: "pete.lang@edfenergy.com",
    company: "EDF",
    role: "viewer",
    lastActive: "2 days ago",
    expiresOn: "2027-06-01",
    expiresFrom: "2026-05-01",
  },
];
const PROTO_WALK_TEAMS = [
  {
    id: "team-energy",
    name: "Energy management",
    company: "Network Rail",
    people: ["me", "u-alex", "u-amira", "u-ruth"],
  },
  {
    id: "team-finance",
    name: "Finance",
    company: "Network Rail",
    people: ["u-helen", "u-claire"],
  },
  {
    id: "team-property",
    name: "Property",
    company: "Network Rail",
    people: ["u-sarah", "u-marcus"],
  },
  {
    id: "team-operations",
    name: "Operations",
    company: "Network Rail",
    people: ["u-james", "u-ben", "u-owen"],
  },
  {
    id: "team-sustainability",
    name: "Sustainability",
    company: "Network Rail",
    people: ["u-luca", "me", "u-dylan"],
  },
  {
    id: "team-lnw",
    name: "London North Western",
    company: "Network Rail",
    people: ["me", "u-priya", "u-ben", "u-joanna"],
  },
  {
    id: "team-scotland",
    name: "Scotland",
    company: "Network Rail",
    people: ["u-tom", "u-amira"],
  },
  {
    id: "team-tesco-energy",
    name: "Energy management",
    company: "Tesco",
    people: ["u-tesco-maya", "u-tesco-jon", "u-tesco-rita"],
  },
  {
    id: "team-tesco-operations",
    name: "Operations",
    company: "Tesco",
    people: ["u-tesco-paul", "u-tesco-ellie"],
  },
  {
    id: "team-tesco-finance",
    name: "Finance",
    company: "Tesco",
    people: ["u-tesco-greg", "u-tesco-fay"],
  },
  {
    id: "team-sw-energy",
    name: "Energy management",
    company: "Scottish Water",
    people: ["u-sw-ian", "u-sw-kate", "u-sw-ross"],
  },
  {
    id: "team-sw-operations",
    name: "Operations",
    company: "Scottish Water",
    people: ["u-sw-aoife", "u-sw-neal", "u-sw-lisa"],
  },
  {
    id: "team-edf-portfolio",
    name: "Portfolio",
    company: "EDF",
    people: ["u-edf-sam", "u-edf-lea", "u-edf-chris"],
  },
  {
    id: "team-edf-data",
    name: "Data",
    company: "EDF",
    people: ["u-edf-yara", "u-edf-pete", "u-edf-sam"],
  },
];

function protoReadTeams() {
  return (Array.isArray(store.prototypeTeams) ? store.prototypeTeams : [])
    .filter((item) => item && item.id && String(item.name || "").trim())
    .map((item) => ({
      id: String(item.id),
      name: String(item.name || "").trim(),
      company: protoTeamCompanyId(item.company),
      department: String(item.department || "").trim(),
      people: Array.isArray(item.people) ? item.people.map(String) : [],
    }));
}

function protoSeedWalkUsers() {
  if (!store || store.prototypeWalkUsers === PROTO_WALK_USERS) return;
  const invited = protoInvitedUsers();
  const walkEmails = new Set(PROTO_WALK_PEOPLE.map((item) => item.email));
  const extras = invited.filter((item) => !walkEmails.has(item.email));
  const extrasTeams = protoReadTeams().filter(
    (item) =>
      !PROTO_WALK_TEAMS.some((team) => team.id === item.id) &&
      !PROTO_WALK_STUB_TEAMS.has(item.name.toLowerCase())
  );
  store.prototypeInvitedUsers = [
    ...PROTO_WALK_PEOPLE.map((item) => {
      const have = invited.find((row) => row.email === item.email);
      return have
        ? {
            ...item,
            role: have.role || item.role,
            company: item.company,
            expiresOn: have.expiresOn || item.expiresOn,
            expiresFrom: have.expiresFrom || item.expiresFrom,
            contractName: have.contractName || "",
          }
        : { ...item };
    }),
    ...extras,
  ];
  store.prototypeTeams = [
    ...PROTO_WALK_TEAMS.map((team) => ({
      id: team.id,
      name: team.name,
      company: team.company,
      department: "",
      people: team.people.slice(),
    })),
    ...extrasTeams,
  ];
  store.prototypeWalkUsers = PROTO_WALK_USERS;
  if (typeof persistChrome === "function") persistChrome();
}

function protoTeams() {
  return protoReadTeams();
}

function protoVisibleTeams() {
  const allowed = new Set(protoTeamCompanyChoices().map((item) => item.value));
  return protoTeams().filter((item) => allowed.has(item.company));
}

function protoTeamDepartmentLabel(team) {
  return team.department || team.name;
}

function protoPeopleFromTeams(teams) {
  const ids = new Set((teams || []).flatMap((team) => team.people));
  return protoUserPeople().filter((person) => ids.has(person.id));
}

function protoTeamBuckets(query) {
  const q = String(query == null ? store.prototypeTeamQuery || "" : query)
    .trim()
    .toLowerCase();
  if (protoSeesCompanies()) {
    return protoTeamCompanyChoices()
      .map((choice) => {
        const teams = protoVisibleTeams().filter((item) => item.company === choice.value);
        return {
          id: `c:${choice.value}`,
          name: choice.label,
          teams,
          people: protoPeopleFromTeams(teams),
        };
      })
      .filter((item) => !q || item.name.toLowerCase().includes(q));
  }
  const map = new Map();
  protoVisibleTeams().forEach((team) => {
    const name = protoTeamDepartmentLabel(team);
    const id = `d:${name}`;
    if (!map.has(id)) map.set(id, { id, name, teams: [] });
    map.get(id).teams.push(team);
  });
  return [...map.values()]
    .map((item) => ({
      ...item,
      people: protoPeopleFromTeams(item.teams),
    }))
    .filter((item) => !q || item.name.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name, "en-GB"));
}

function protoTeamScopeId() {
  const raw = String(store.prototypeTeam || "");
  if (!raw || raw === "all") return "";
  if (raw.startsWith("c:") || raw.startsWith("d:")) {
    return protoTeamBuckets("").some((item) => item.id === raw) ? raw : "";
  }
  const team = protoVisibleTeams().find((item) => item.id === raw);
  if (!team) return "";
  return protoSeesCompanies() ? `c:${team.company}` : `d:${protoTeamDepartmentLabel(team)}`;
}

function protoTeamBucket() {
  const id = protoTeamScopeId();
  return id ? protoTeamBuckets("").find((item) => item.id === id) || null : null;
}

function protoTeamDraftPeople() {
  return Array.isArray(store.prototypeTeamDraftPeople)
    ? store.prototypeTeamDraftPeople.map(String)
    : [];
}

function protoTeamsForPerson(id) {
  return protoVisibleTeams()
    .filter((team) => team.people.includes(id))
    .map((team) => team.name);
}

function protoPickTeamsForPerson(person) {
  const all = protoVisibleTeams();
  if (!protoSeesCompanies() || person.you || !person.company) return all;
  return all.filter((team) => team.company === person.company);
}

function protoTeamIdsForPerson(id) {
  return protoVisibleTeams()
    .filter((team) => team.people.includes(id))
    .map((team) => team.id);
}

function protoUsersFold() {
  const raw = String(store.prototypeTeam || "");
  if (!raw || raw === "closed") return { kind: "closed", id: "closed" };
  if (raw === "all") return { kind: "all", id: "all" };
  const buckets = protoTeamBuckets("");
  const bucket = buckets.find((item) => item.id === raw);
  if (bucket) return { kind: "bucket", id: bucket.id, bucket };
  const team = protoVisibleTeams().find((item) => item.id === raw);
  if (team) {
    const parent = protoTeamBucketIdForTeam(team);
    return {
      kind: "team",
      id: team.id,
      team,
      parent,
      bucket: buckets.find((item) => item.id === parent) || null,
    };
  }
  return { kind: "closed", id: "closed" };
}

function protoPeopleInScope() {
  const fold = protoUsersFold();
  if (fold.kind === "closed") return [];
  if (fold.kind === "team") {
    return protoUserPeople().filter((person) => fold.team.people.includes(person.id));
  }
  if (fold.kind === "bucket") return fold.bucket.people;
  return protoUserPeople();
}

function protoTeamBucketIdForTeam(team) {
  if (!team) return "";
  return protoSeesCompanies() ? `c:${team.company}` : `d:${protoTeamDepartmentLabel(team)}`;
}

function protoTeamAddModal() {
  if (!store.prototypeTeamForm) return "";
  const name = String(store.prototypeTeamDraftName || "");
  const company = protoTeamCompanyId(store.prototypeTeamDraftCompany);
  const picked = protoTeamDraftPeople();
  const canAdd = Boolean(name.trim());
  const people = protoUserPeople().filter((person) => {
    if (person.you && protoSeesCompanies()) return false;
    return person.you || person.company === company;
  });
  return `
    <div class="astral-modal-back" data-proto-modal="team">
      <div
        class="astral-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="astral-team-title"
        data-proto-team-form
      >
        ${protoModalHead(
          "astral-team-title",
          "Add a team",
          "Team name and company. Then pick people.",
          "team"
        )}
        <form data-proto-team-form>
          <div class="astral-modal-body">
            <label>
              Team name
              <input
                type="text"
                name="proto-team-name"
                value="${escapeHtml(name)}"
                maxlength="80"
                required
                autocomplete="off"
              />
            </label>
            <div class="astral-team-field">
              <p>Company</p>
              ${protoSelect({
                id: "team-company",
                label: "Company",
                value: company,
                options: protoTeamCompanyChoices(),
                disabled: !protoCanPickTeamCompany(),
              })}
            </div>
            <div class="astral-team-field">
              <p>People</p>
              ${protoSelect({
                id: "team-people",
                label: "People",
                multi: true,
                wide: true,
                values: picked,
                placeholder: "Pick people",
                countLabel: "people",
                empty: people.length
                  ? "No people match."
                  : "Invite someone first, then add them here.",
                search: people.length
                  ? {
                      name: "proto-team-people-query",
                      value: String(store.prototypeTeamPeopleQuery || ""),
                      placeholder: "Search people",
                      label: "Search people",
                    }
                  : null,
                options: people.map((person) => ({
                  value: person.id,
                  label: person.name,
                  search: `${person.name} ${person.email || ""} ${protoUserRoleName(person.role)}`,
                  html: `<span class="astral-select-person"><span>${escapeHtml(
                    person.name
                  )}</span><span class="astral-muted">${escapeHtml(
                    protoUserRoleName(person.role)
                  )}</span></span>`,
                })),
              })}
            </div>
          </div>
          <div class="astral-modal-foot">
            <div class="astral-actions">
              ${protoBtn("Add team", `${canAdd ? "" : " disabled"}`, { type: "submit" })}
              ${protoGhost("Cancel", "data-proto-team=\"cancel\"")}
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

function protoCompanyAddModal() {
  if (!store.prototypeCompanyForm) return "";
  const name = String(store.prototypeCompanyDraftName || "");
  const type = protoCompanyTypeId(store.prototypeCompanyDraftType);
  const canAdd = Boolean(name.trim());
  const error = store.prototypeCompanyNameError
    ? `<p class="astral-muted" role="status">That name is already on the list.</p>`
    : "";
  return `
    <div class="astral-modal-back" data-proto-modal="company">
      <div
        class="astral-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="astral-company-title"
        data-proto-company-form
      >
        ${protoModalHead(
          "astral-company-title",
          "Add a company",
          "Type is Customer, Supplier, or Broker / TPI.",
          "company"
        )}
        <form data-proto-company-form>
          <div class="astral-modal-body">
            <label>
              Company name
              <input
                type="text"
                name="proto-company-name"
                value="${escapeHtml(name)}"
                maxlength="80"
                required
                autocomplete="organization"
              />
            </label>
            ${error}
            <div class="astral-team-field">
              <p>Type</p>
              ${protoSelect({
                id: "company-type",
                label: "Type",
                value: type,
                options: PROTO_COMPANY_TYPES.map((item) => ({
                  value: item.id,
                  label: item.name,
                })),
              })}
            </div>
          </div>
          <div class="astral-modal-foot">
            <div class="astral-actions">
              ${protoBtn("Add a company", `${canAdd ? "" : " disabled"}`, { type: "submit" })}
              ${protoGhost("Cancel", "data-proto-company=\"cancel\"")}
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

function protoUserInviteModal() {
  if (!protoState().userForm) return "";
  const drafts = protoUserDrafts();
  const role = protoState().userRole;
  const canInvite = drafts.some(protoEmailOk);
  return `
    <div class="astral-modal-back" data-proto-modal="invite">
      <div
        class="astral-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="astral-invite-title"
        data-proto-user-form
      >
        ${protoModalHead(
          "astral-invite-title",
          "Invite users",
          "Email and a role. Viewer can look. Super admin is only for IMSERV admin.",
          "invite"
        )}
        <form data-proto-user-form>
          <div class="astral-modal-body">
            <div class="astral-invite-rows">
              ${drafts
                .map(
                  (value, i) => `
                    <div class="astral-invite-row">
                      <label>
                        <span class="sr-only">Email</span>
                        <input
                          type="email"
                          name="proto-user-email"
                          data-proto-user-draft="${i}"
                          value="${escapeHtml(value)}"
                          placeholder="Email"
                          autocomplete="off"
                        />
                      </label>
                      ${
                        drafts.length > 1
                          ? `${protoGhost("Remove", `data-proto-user-draft-remove="${i}"`)}`
                          : ""
                      }
                    </div>
                  `
                )
                .join("")}
            </div>
            ${protoTextBtn("Add another", "data-proto-user=\"another\"")}
            <div class="astral-invite-role">
              <div>
                <p>Role</p>
                <p class="astral-muted">Manager cannot invite Admin.</p>
              </div>
              ${protoSelect({
                id: "user-invite-role",
                name: "proto-user-invite-role",
                label: "Role",
                value: role,
                options: protoCanAdminCompany()
                  ? protoUserRoleChoices()
                  : protoUserRoleChoices().filter((item) => item.value !== "admin"),
              })}
            </div>
          </div>
          <div class="astral-modal-foot">
            <div class="astral-actions">
              ${protoBtn("Send invite", `${canInvite ? "" : " disabled"}`, { type: "submit" })}
              ${protoGhost("Cancel", "data-proto-user=\"cancel\"")}
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

function protoOpenPerson() {
  if (!protoCanManagePeople()) return null;
  const id = String(store.prototypeUserOpen || "");
  if (!id) return null;
  return protoUserPeople().find((person) => person.id === id) || null;
}

function protoPersonDetail(person) {
  const you = Boolean(person.you);
  const picture = you ? protoProfilePicture() : "";
  const previewName = you ? protoProfileLine(protoProfileDraftName()) : person.name;
  const disciplineName = you ? protoProfileDisciplineName() : "";
  const jobTitle = you ? protoProfileJobTitle() : "";
  const teams = protoPickTeamsForPerson(person);
  const teamIds = protoTeamIdsForPerson(person.id);
  const from = protoFromIso(person.expiresFrom || PROTO_TEMP_FROM);
  const to = protoFromIso(person.expiresOn || PROTO_TEMP_TO);
  const fromLine = from ? protoFormatFullDay(from) : "Not set";
  const toLine = to ? protoFormatFullDay(to) : "Not set";
  const contractName = String(person.contractName || "").trim();
  const sites = protoEstateSites();
  const siteNames = protoPersonSiteNames(person.id);
  const canManage = protoCanManagePeople();
  const fact = (label, value, wide) => `
    <div class="astral-field${wide ? " is-wide" : ""}">
      <span>${escapeHtml(label)}</span>
      <p class="astral-fact">${escapeHtml(value)}</p>
    </div>
  `;
  return `
    <div class="astral-person-detail">
      <div class="astral-profile-mark">
        <div class="astral-profile-preview${picture ? " has-photo" : ""}${you ? " is-you" : ""}">${
          you
            ? protoAvatarMark(picture ? "Profile picture" : previewName, previewName)
            : escapeHtml(protoUserInitials(person))
        }</div>
      </div>
      <div class="astral-profile-fields">
        ${fact("Name", person.name)}
        ${fact("Email address", person.email)}
        ${you && disciplineName ? fact("Discipline", disciplineName) : ""}
        ${you && jobTitle ? fact("Job title", jobTitle) : ""}
        ${fact("Last active", person.lastActive, true)}
        <div class="astral-profile-row">
          <div class="astral-field">
            <span>Role</span>
            ${
              protoCanEditPersonRole(person)
                ? protoSelect({
                    id: `user-role:${person.id}`,
                    label: "Role",
                    wide: true,
                    value: person.role,
                    options: protoPersonRoleChoices(person),
                  })
                : `<p class="astral-fact">${escapeHtml(protoUserRoleName(person.role))}</p>`
            }
          </div>
          <div class="astral-field">
            <span>Team</span>
            ${
              canManage
                ? protoSelect({
                    id: `user-team:${person.id}`,
                    label: "Team",
                    multi: true,
                    wide: true,
                    values: teamIds,
                    placeholder: "None",
                    countLabel: "teams",
                    empty: teams.length ? "No teams match." : "Add a team first, then pick one here.",
                    search: teams.length
                      ? {
                          name: "proto-person-team-query",
                          value: String(store.prototypePersonTeamQuery || ""),
                          placeholder: "Search teams",
                          label: "Search teams",
                        }
                      : null,
                    options: teams.map((team) => ({
                      value: team.id,
                      label: team.name,
                      search: `${team.name} ${team.company || ""}`,
                    })),
                  })
                : `<p class="astral-fact">${escapeHtml(
                    protoTeamsForPerson(person.id).join(", ") || "None"
                  )}</p>`
            }
          </div>
        </div>
        <div class="astral-field is-wide">
          <span>Expiry</span>
          <div class="astral-contract">
            <div class="astral-expiry-row">
              ${protoExpiryPill(person.expiresOn)}
              ${
                protoCanAdminCompany()
                  ? protoBtn("Renew", 'data-proto-renew="open"')
                  : ""
              }
            </div>
            <p class="astral-fact">From ${escapeHtml(fromLine)}. To ${escapeHtml(toLine)}.</p>
            ${
              contractName
                ? `<div class="astral-contract-files">
                    <button type="button" class="astral-contract-file" data-proto-contract="download" aria-label="Download contract">
                      ${protoIconMark("export")}
                      <span>${escapeHtml(contractName)}</span>
                    </button>
                    ${
                      protoCanAdminCompany()
                        ? `<label class="astral-ghost astral-upload">
                            Replace file
                            <input
                              class="sr-only"
                              type="file"
                              accept="application/pdf,.pdf"
                              data-proto-contract="replace"
                            />
                          </label>`
                        : ""
                    }
                  </div>
                  ${
                    store.prototypeContractFileError
                      ? `<p class="astral-muted" role="status">Use a PDF.</p>`
                      : ""
                  }`
                : ""
            }
          </div>
        </div>
        <div class="astral-field is-wide">
          <span>Sites they can see</span>
          ${
            canManage
              ? protoSelect({
                  id: `user-sites:${person.id}`,
                  label: "Sites they can see",
                  multi: true,
                  wide: true,
                  values: siteNames,
                  placeholder: "None",
                  allLabel: "All sites",
                  countLabel: "sites",
                  empty: sites.length ? "No sites match." : "No sites in this estate.",
                  search: sites.length
                    ? {
                        name: "proto-person-sites-query",
                        value: String(store.prototypePersonSitesQuery || ""),
                        placeholder: "Search sites",
                        label: "Search sites",
                      }
                    : null,
                  options: sites.map((site) => ({
                    value: site.name,
                    label: site.name,
                    search: `${site.name} ${protoGroupForSite(site)?.name || ""}`,
                  })),
                })
              : `<p class="astral-fact">${escapeHtml(
                  siteNames.length === sites.length && sites.length
                    ? "All sites"
                    : siteNames.join(", ") || "None"
                )}</p>`
          }
        </div>
      </div>
      <p class="astral-muted">Contact still waits.</p>
    </div>
  `;
}

function protoRenewModal() {
  if (!store.prototypeRenewForm || !protoCanAdminCompany()) return "";
  const person = protoOpenPerson();
  if (!person || person.id !== String(store.prototypeRenewPerson || "")) return "";
  const fromText = protoMaskUkDate(store.prototypeRenewFrom);
  const toText = protoMaskUkDate(store.prototypeRenewTo);
  const from = protoFromUkDate(fromText);
  const to = protoFromUkDate(toText);
  const fileName = String(store.prototypeRenewFileName || "");
  const fileError = Boolean(store.prototypeRenewFileError);
  const canSave = Boolean(from && to && fileName);
  return `
    <div class="astral-modal-back" data-proto-modal="renew">
      <div
        class="astral-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="astral-renew-title"
        data-proto-renew-form
      >
        ${protoModalHead(
          "astral-renew-title",
          "Renew access",
          "Upload the contract. Then enter the start and the end. They can only see data between those dates.",
          "renew"
        )}
        <form data-proto-renew-form>
          <div class="astral-modal-body">
            <div class="astral-field">
              <span>Contract</span>
              <div class="astral-actions">
                <label class="astral-ghost astral-upload">
                  Upload contract
                  <input
                    class="sr-only"
                    type="file"
                    accept="application/pdf,.pdf"
                    data-proto-renew="file"
                  />
                </label>
              </div>
              <p class="astral-muted"${fileError ? ' role="status"' : ""}>${
                fileError
                  ? "Use a PDF."
                  : fileName
                    ? escapeHtml(fileName)
                    : "A PDF."
              }</p>
            </div>
            <div class="astral-renew-dates">
              <label class="astral-field">
                <span>Start</span>
                <input
                  class="astral-date-input"
                  type="text"
                  name="proto-renew-from"
                  value="${escapeHtml(fromText)}"
                  inputmode="numeric"
                  autocomplete="off"
                  spellcheck="false"
                  maxlength="10"
                  placeholder="dd/mm/yyyy"
                  aria-label="Start"
                />
              </label>
              <label class="astral-field">
                <span>End</span>
                <input
                  class="astral-date-input"
                  type="text"
                  name="proto-renew-to"
                  value="${escapeHtml(toText)}"
                  inputmode="numeric"
                  autocomplete="off"
                  spellcheck="false"
                  maxlength="10"
                  placeholder="dd/mm/yyyy"
                  aria-label="End"
                />
              </label>
            </div>
          </div>
          <div class="astral-modal-foot">
            <div class="astral-actions">
              ${protoBtn("Renew access", "", { type: "submit", disabled: !canSave })}
              ${protoGhost("Cancel", 'data-proto-renew="cancel"')}
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

function protoUsersMatchPerson(person, q, picked) {
  if (picked.length && !picked.includes(person.role)) return false;
  if (!q) return true;
  const hay = [
    person.name,
    person.email,
    person.company,
    protoUserRoleName(person.role),
    person.lastActive,
    protoExpiryLabel(person.expiresOn),
    protoTeamsForPerson(person.id).join(" "),
    person.you ? protoProfileJobTitle() : "",
    person.you ? protoProfileDisciplineName() : "",
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function protoUsersSorted(people) {
  return protoSortedRows("users", people, (person, key) => {
    if (key === "name") return person.name;
    if (key === "team") return protoTeamsForPerson(person.id).join(", ");
    if (key === "role") return protoUserRoleName(person.role);
    if (key === "expiry") {
      const date = protoFromIso(person.expiresOn);
      return date ? date.getTime() : 0;
    }
    return "";
  });
}

function protoUsersTable(people, pool, showTeam) {
  const canManage = protoCanManagePeople();
  const menu = store.prototypeUserMenu || "";
  const cols = showTeam ? 5 : 4;
  const rows =
    people
      .map((person) => {
        const open = menu === person.id;
        const teamNames = protoTeamsForPerson(person.id);
        return `
          <tr>
            <th scope="row" class="astral-people-col-name">
              ${
                canManage
                  ? `<button type="button" class="astral-person" data-proto-person="${escapeHtml(
                      person.id
                    )}">`
                  : `<span class="astral-person">`
              }
                <span class="astral-person-mark" aria-hidden="true">${escapeHtml(
                  protoUserInitials(person)
                )}</span>
                <span class="astral-person-copy">
                  <strong>
                    <span class="astral-people-name">${escapeHtml(person.name)}</span>
                    ${
                      person.role === "manager"
                        ? `<span class="astral-tag">Manager</span>`
                        : ""
                    }
                  </strong>
                  ${
                    person.you
                      ? `<span class="astral-muted">${escapeHtml(
                          protoProfileJobTitle() || "Contact still waits"
                        )}</span>`
                      : person.name === person.email
                        ? ""
                        : `<span class="astral-muted">${escapeHtml(person.email)}</span>`
                  }
                </span>
              ${canManage ? "</button>" : "</span>"}
            </th>
            ${
              showTeam
                ? `<td class="astral-people-col-team">${
                    teamNames.length
                      ? escapeHtml(teamNames.join(", "))
                      : `<span class="astral-muted">None</span>`
                  }</td>`
                : ""
            }
            <td class="astral-people-col-role">
              ${
                protoCanEditPersonRole(person)
                  ? protoSelect({
                      id: `user-role:${person.id}`,
                      label: `Role for ${person.you ? "you" : person.email}`,
                      value: person.role,
                      options: protoPersonRoleChoices(person),
                    })
                  : escapeHtml(protoUserRoleName(person.role))
              }
            </td>
            <td class="astral-people-col-expiry">${protoExpiryPill(person.expiresOn)}</td>
            <td class="astral-people-col-more">
              ${
                person.you || !canManage
                  ? ""
                  : `<div class="astral-people-more">
                      ${protoIconBtn(
                        "more",
                        `More for ${person.email}`,
                        `data-proto-user-menu="${escapeHtml(
                          person.id
                        )}" aria-haspopup="menu" aria-expanded="${open ? "true" : "false"}"`,
                        { className: "is-plain", tipLabel: "More" }
                      )}
                      <div class="astral-people-menu${open ? protoMenuEnterClass(`people:${person.id}`) : ""}" role="menu"${open ? "" : " hidden"}>
                        <button type="button" role="menuitem" data-proto-user-withdraw="${escapeHtml(
                          person.id
                        )}">Withdraw</button>
                      </div>
                    </div>`
              }
            </td>
          </tr>
        `;
      })
      .join("") || `<tr><td colspan="${cols}">No people match.</td></tr>`;
  return `
    <div class="astral-people">
      <div class="astral-table-wrap">
        <table class="astral-table">
          <thead>
            <tr>
              ${protoSortHead("users", "name", "Name", "astral-people-col-name")}
              ${showTeam ? protoSortHead("users", "team", "Team", "astral-people-col-team") : ""}
              ${protoSortHead("users", "role", "Role", "astral-people-col-role")}
              ${protoSortHead("users", "expiry", "Expiry", "astral-people-col-expiry")}
              <th scope="col" class="astral-people-col-more"><span class="sr-only">More</span></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function protoPeopleFold({ id, attr, name, count, open, nested, inner }) {
  const clipId = `astral-people-fold-${id}`;
  return `
    <article class="astral-people-fold${open ? " is-open" : ""}${nested ? " is-nested" : ""}">
      <button
        type="button"
        class="astral-people-fold-head"
        ${attr}
        aria-expanded="${open ? "true" : "false"}"
        aria-controls="${escapeHtml(clipId)}"
        title="${escapeHtml(name)}"
      >
        <span class="astral-meter-row-toggle" aria-hidden="true">${protoChevronMark("down")}</span>
        <span class="astral-people-fold-name">${escapeHtml(name)}</span>
        <span class="astral-count">${count}</span>
      </button>
      ${protoFoldClip(open, clipId, `<div class="astral-people-fold-body">${inner || ""}</div>`)}
    </article>
  `;
}

function protoUsersList(q, picked) {
  const fold = protoUsersFold();
  const seesCompanies = protoSeesCompanies();
  const all = protoUserPeople();
  const filterPeople = (list) =>
    protoUsersSorted(list.filter((person) => protoUsersMatchPerson(person, q, picked)));
  const shown = filterPeople(all);
  const allOpen = fold.kind === "all";
  const folds = [
    protoPeopleFold({
      id: "all",
      attr: 'data-proto-team="all"',
      name: "All people",
      count: all.length,
      open: allOpen,
      inner: protoUsersTable(shown, all, true),
    }),
    ...protoTeamBuckets("").map((item) => {
      const bucketOpen = fold.kind === "bucket" && fold.id === item.id;
      const teamOpen = fold.kind === "team" && fold.parent === item.id;
      const open = bucketOpen || teamOpen;
      let inner = "";
      if (seesCompanies) {
        const teams = item.teams;
        inner = teams.length
          ? teams
              .map((team) => {
                const on = fold.kind === "team" && fold.id === team.id;
                const pool = protoUserPeople().filter((person) => team.people.includes(person.id));
                return protoPeopleFold({
                  id: team.id,
                  attr: `data-proto-team-id="${escapeHtml(team.id)}"`,
                  name: team.name,
                  count: pool.length,
                  open: on,
                  nested: true,
                  inner: protoUsersTable(filterPeople(pool), pool, false),
                });
              })
              .join("")
          : `<p class="astral-muted">No teams yet.</p>`;
      } else {
        inner = protoUsersTable(filterPeople(item.people), item.people, false);
      }
      return protoPeopleFold({
        id: item.id,
        attr: `data-proto-team-id="${escapeHtml(item.id)}"`,
        name: item.name,
        count: item.people.length,
        open,
        inner,
      });
    }),
  ];
  return `<div class="astral-people-folds">${folds.join("")}<p class="astral-people-count">${shown.length} of ${all.length} users</p></div>`;
}

function protoUsersFoldCaption() {
  const fold = protoUsersFold();
  const seesCompanies = protoSeesCompanies();
  const ownCompany = protoTeamCompanyChoices()[0]?.label || "";
  const kicker = seesCompanies
    ? fold.kind === "team"
      ? fold.team.company
      : fold.kind === "bucket"
        ? fold.bucket.name
        : ""
    : ownCompany;
  const title =
    fold.kind === "team"
      ? fold.team.name
      : fold.kind === "bucket"
        ? fold.bucket.name
        : fold.kind === "closed"
          ? "People"
          : "All people";
  const n = protoPeopleInScope().length;
  const meta = fold.kind === "closed" ? "" : `${n} ${n === 1 ? "person" : "people"}`;
  return { kicker, title, meta };
}

function protoPeopleFoldsLive() {
  return Boolean(document.querySelector("#astral-fs .astral-people-folds"));
}

function protoSyncPeopleFolds() {
  const root = document.querySelector("#astral-fs .astral-people-folds");
  if (!root) return;
  const fold = protoUsersFold();
  root.querySelectorAll(".astral-people-fold").forEach((el) => {
    const btn = el.querySelector(":scope > .astral-people-fold-head");
    if (!btn) return;
    const all = btn.matches('[data-proto-team="all"]');
    const id = btn.dataset.protoTeamId || "";
    let open = false;
    if (all) open = fold.kind === "all";
    else if (id) {
      open =
        (fold.kind === "bucket" && fold.id === id) ||
        (fold.kind === "team" && (fold.id === id || fold.parent === id));
    }
    protoSyncFoldClip(el, open);
  });
  const pane = root.closest(".astral-detail");
  const cap = protoUsersFoldCaption();
  const kickerEl = pane?.querySelector(".astral-pane-head .astral-kicker");
  const titleEl = pane?.querySelector(".astral-pane-head h3");
  const metaEl = pane?.querySelector(".astral-pane-head .astral-detail-title .astral-muted");
  if (titleEl) titleEl.textContent = cap.title;
  if (kickerEl) {
    kickerEl.textContent = cap.kicker;
    kickerEl.hidden = !cap.kicker;
  } else if (cap.kicker && pane) {
    const box = pane.querySelector(".astral-pane-head .astral-detail-head > div");
    if (box) {
      const line = document.createElement("p");
      line.className = "astral-kicker";
      line.textContent = cap.kicker;
      box.prepend(line);
    }
  }
  if (metaEl) {
    metaEl.textContent = cap.meta;
    metaEl.hidden = !cap.meta;
  } else if (cap.meta && pane) {
    const titleBox = pane.querySelector(".astral-pane-head .astral-detail-title");
    if (titleBox) {
      const line = document.createElement("p");
      line.className = "astral-muted";
      line.textContent = cap.meta;
      titleBox.append(line);
    }
  }
}

function protoCommitPeopleFolds(patch) {
  protoPatchStay(patch);
  if (!protoPeopleFoldsLive()) {
    render();
    return;
  }
  protoSyncPeopleFolds();
}

function protoMeterRowsLive() {
  return Boolean(document.querySelector("#astral-fs .astral-meter-list"));
}

function protoSyncMeterRows() {
  const list = document.querySelector("#astral-fs .astral-meter-list");
  if (!list) return;
  const openId = String(store.prototypeMeterOpen || "");
  list.querySelectorAll(".astral-meter-row").forEach((row) => {
    const btn = row.querySelector(":scope > [data-proto-meter-open]");
    protoSyncFoldClip(row, Boolean(btn && btn.dataset.protoMeterOpen === openId));
  });
  protoSyncMeterFolds();
}

function protoSyncMeterFolds() {
  const on = protoMeterFoldId();
  document.querySelectorAll("#astral-fs .astral-meter-fold").forEach((fold) => {
    const id = fold.querySelector(":scope > [data-proto-meter-fold]")?.dataset.protoMeterFold || "";
    protoSyncFoldClip(fold, Boolean(id && id === on));
  });
}

function protoCommitMeterRows(patch) {
  protoPatchStay(patch);
  if (!protoMeterRowsLive()) {
    render();
    return;
  }
  protoSyncMeterRows();
}

function protoUsersPane() {
  const state = protoState();
  const q = state.userQuery.trim().toLowerCase();
  const picked = protoUserRoleFilterIds();
  const canManage = protoCanManagePeople();
  const openPerson = protoOpenPerson();
  const cap = protoUsersFoldCaption();
  const inviteBtn = canManage
    ? `${protoBtn("Invite users", `data-proto-user="invite" aria-haspopup="dialog" aria-expanded="${
        state.userForm ? "true" : "false"
      }"`)}`
    : "";
  const addTeamBtn = canManage
    ? `${protoGhost("Add a team", `data-proto-team="add" aria-haspopup="dialog" aria-expanded="${
        store.prototypeTeamForm ? "true" : "false"
      }"`)}`
    : "";
  const kicker = openPerson ? "" : cap.kicker;
  const title = openPerson ? openPerson.name : cap.title;
  const meta = openPerson ? protoUserRoleName(openPerson.role) : cap.meta;
  return `
    <section class="astral-card astral-pane">
      ${protoPaneShell(
        `
          <div class="astral-detail-head">
            <div>
              ${kicker ? `<p class="astral-kicker">${escapeHtml(kicker)}</p>` : ""}
              ${protoDetailTitle(title, meta)}
            </div>
            ${openPerson
              ? `<div class="astral-detail-tools">
            ${
              openPerson.you || !protoCanLoginAsUser()
                ? ""
                : protoBtn(
                    "Log in as user",
                    `data-proto-see-as-user="${escapeHtml(openPerson.id)}"`
                  )
            }
            ${protoIconBtn("close", "Close", "data-proto-person-close")}
          </div>`
              : ""}
          </div>
          ${
            openPerson
              ? ""
              : `
            <div class="astral-people-tools">
              ${protoSearchField({
                name: "proto-user-query",
                value: state.userQuery,
                placeholder: "Search people",
                label: "Search people",
              })}
              ${protoUserRoleFilterControl()}
              ${protoExportControl("users")}
              ${addTeamBtn}
              ${inviteBtn}
            </div>
            ${protoUserRoleFilterPills()}
          `
          }
        `,
        openPerson ? protoPersonDetail(openPerson) : protoUsersList(q, picked)
      )}
    </section>
    ${canManage ? protoUserInviteModal() : ""}
    ${canManage ? protoTeamAddModal() : ""}
    ${protoCanAdminCompany() ? protoRenewModal() : ""}
  `;
}

function protoUsers() {
  const lead =
    protoData()?.usersLead ||
    "Invite people from your company. Super admin, Admin, and Manager can group them into teams.";
  return protoSettingsFrame("users", protoUsersPane(), lead);
}

function protoSettingsNav(section) {
  const items = [
    { id: "profile", name: "Profile" },
    { id: "organisation", name: "Organisation" },
  ];
  if (protoCanManagePeople()) items.push({ id: "users", name: "Users" });
  if (protoSeesBilling()) items.push({ id: "billing", name: "Billing" });
  const rows = items
    .map((item) => {
      const on = item.id === section;
      return `
        <li>
          <button
            type="button"
            class="astral-group${on ? " is-on" : ""}"
            data-proto-settings="${escapeHtml(item.id)}"
            ${on ? 'aria-current="page"' : ""}
          >
            <span class="astral-group-name">${escapeHtml(item.name)}</span>
          </button>
        </li>
      `;
    })
    .join("");
  return `
    <aside class="astral-list">
      <ul class="astral-tree">${rows}</ul>
    </aside>
  `;
}

function protoSettingsFrame(section, inner, leadText) {
  const lead =
    leadText ||
    (section === "profile"
      ? "Your name, discipline, and job title."
      : section === "users"
        ? protoData()?.usersLead ||
          "Invite people from your company. Super admin, Admin, and Manager can group them into teams."
      : section === "billing"
        ? "Invoices still wait."
        : "Logo, primary colour, and secondary colour.");
  return astralShell(`
    ${astralPageHead("Settings", lead)}
    <div class="astral-split astral-settings-split">
      ${protoSettingsNav(section)}
      <div class="astral-settings-main">${inner}</div>
    </div>
  `);
}

function protoOrganisationCard() {
  const brand = protoBrand();
  const preview = protoOrgLogoHtml(
    brand.logo || PROTO_IMSERV_MARK,
    brand.logo ? "Organisation logo preview" : "IMSERV"
  );
  const logoError = Boolean(store.prototypeBrandLogoError);
  const canAct = protoCanAct();
  const canOrg = protoCanManagePeople();
  const companyFields = canOrg
    ? `
      <div class="astral-profile-fields">
        <label class="astral-field">
          <span>Company name</span>
          <input
            type="text"
            name="proto-org-name"
            value="${escapeHtml(protoOrgName())}"
            maxlength="80"
            autocomplete="organization"
            spellcheck="false"
          />
        </label>
        <div class="astral-field">
          <span>Country</span>
          ${protoSelect({
            id: "org-country",
            label: "Country",
            value: protoOrgCountry(),
            wide: true,
            options: PROTO_COUNTRIES.map((item) => ({
              value: item.id,
              label: item.name,
            })),
          })}
        </div>
      </div>
    `
    : "";
  return `
    <section class="astral-card astral-pane">
      ${protoPaneShell(
        `<div class="astral-detail-head"><div><h3>Organisation</h3></div></div>`,
        `
      ${companyFields}
      <div class="astral-field astral-logo-field">
        <span>Logo</span>
        <div class="astral-brand-logo">
        <div class="astral-brand-preview">${preview}</div>
        ${
          canAct
            ? `<div class="astral-actions">
          <label class="astral-ghost astral-upload">
            Upload logo
            <input
              class="sr-only"
              type="file"
              accept="image/png,image/svg+xml,.png,.svg"
              data-proto-brand="logo"
            />
          </label>
          ${
            brand.logo
              ? `${protoGhost("Remove", "data-proto-brand=\"remove\"")}`
              : ""
          }
        </div>`
            : ""
        }
        </div>
      </div>
      <p class="astral-muted"${logoError ? ' role="status"' : ""}>${
        logoError
          ? "Use a transparent PNG or SVG."
          : "A transparent PNG or SVG. SVG is better. The mark turns black or white against the bar."
      }</p>
      <div class="astral-field astral-colours-field">
        <span>Colours</span>
        <div class="astral-brand-colours">
        ${protoBrandSwatch("primary", brand.primary, canAct)}
        ${protoBrandSwatch("secondary", brand.secondary, canAct)}
        </div>
      </div>
      <p class="astral-muted">Primary paints the black bar. Secondary is Extra Cyan 2 on buttons, chips, and the graph. Quiet outlines are 1px Infra Grey B. Focus is a 2px black edge. The logo sits in the bar with Astral. Reports and mail still wait.</p>
      ${
        canAct
          ? `<div class="astral-actions">
        ${protoGhost("Restore defaults", "data-proto-brand=\"reset\"")}
      </div>`
          : ""
      }
        `
      )}
    </section>
  `;
}

function protoBillingCard() {
  return `
    <section class="astral-card astral-pane">
      ${protoPaneShell(
        `<div class="astral-detail-head"><div><h3>Billing</h3></div></div>`,
        `<p class="astral-muted">Invoice list still waits.</p>`
      )}
    </section>
  `;
}

function protoSettings() {
  const section = protoSettingsSection();
  if (section === "profile") {
    return protoSettingsFrame("profile", protoProfileCard());
  }
  if (section === "users") return protoUsers();
  if (section === "billing") {
    return protoSettingsFrame("billing", protoBillingCard());
  }
  return protoSettingsFrame("organisation", protoOrganisationCard());
}

function protoAuthEmail() {
  return String(store.prototypeAuthEmail || "").trim();
}

function protoAuthName() {
  return protoProfileLine(store.prototypeAuthName);
}

function protoAuthCompany() {
  return protoProfileLine(store.prototypeAuthCompany);
}

function protoRecoveryStep() {
  const raw = store.prototypeRecoveryStep || (store.prototypeAuthSent ? "sent" : "");
  return ["sent", "reset", "done"].includes(raw) ? raw : "";
}

function protoPasswordRules(value) {
  const text = String(value || "");
  return [
    { id: "len", name: "At least 8 characters", ok: text.length >= 8 },
    { id: "upper", name: "One uppercase letter", ok: /[A-Z]/.test(text) },
    { id: "num", name: "One number", ok: /\d/.test(text) },
    { id: "special", name: "One special character", ok: /[^A-Za-z0-9]/.test(text) },
  ];
}

function protoPasswordReady(password, confirm) {
  return protoPasswordRules(password).every((rule) => rule.ok) && password === confirm && Boolean(password);
}

function protoPaintPasswordRules(form, password, confirm) {
  protoPasswordRules(password).forEach((rule) => {
    const row = form.querySelector(`[data-proto-rule="${rule.id}"]`);
    if (!row) return;
    row.classList.toggle("is-on", rule.ok);
  });
  const match = form.querySelector('[data-proto-rule="match"]');
  if (match) match.classList.toggle("is-on", Boolean(password) && password === confirm);
}

function protoAuthLogo() {
  return `
    <p class="astral-auth-brand">
      <img
        class="astral-logo"
        src="assets/imserv-logomark.svg"
        alt="IMSERV"
        width="116"
        height="18"
      />
      <span>Astral</span>
    </p>
  `;
}

function protoAuthBack() {
  const resume = store.prototypeInviteResume;
  return `
    <p class="astral-auth-links">
      ${protoTextBtn(
        `${protoIconMark("prev")}<span>Back to sign in</span>`,
        resume ? 'data-proto-invite="resume"' : 'data-proto-flow="sign-in"',
        { html: true, className: "astral-auth-back" }
      )}
    </p>
  `;
}

function protoInviteStep() {
  const allowed = ["email", "review", "sign-in", "create", "done", "expired", "joined", "wrong"];
  const raw = store.prototypeInviteStep;
  if (allowed.includes(raw)) return raw;
  return protoFlowId() === "invite" ? "email" : "";
}

function protoInviteJoin() {
  const invited = protoInvitedUsers()[0];
  const team = protoVisibleTeams()[0];
  const company = team?.company || protoTeamCompanyChoices()[0]?.value || "Network Rail";
  const inviter = protoProfileLine(protoProfileName() || protoProfileDraftName() || "You");
  return {
    email: invited?.email || protoAuthEmail() || protoProfileEmail(),
    role: protoUserRoleName(invited?.role || "contributor"),
    team: team?.name || company,
    company,
    inviter,
  };
}

function protoInviteFirst() {
  return String(store.prototypeInviteFirst || "").slice(0, 80);
}

function protoInviteLast() {
  return String(store.prototypeInviteLast || "").slice(0, 80);
}

function protoInviteFacts(join, keys) {
  const rows = {
    team: ["Team", join.team],
    role: ["Role", join.role],
    email: ["Email", join.email],
  };
  return `
    <div class="astral-invite-facts">
      ${keys
        .map((key) => {
          const row = rows[key];
          if (!row || !row[1]) return "";
          return `<p class="astral-invite-fact"><span>${escapeHtml(row[0])}</span>${escapeHtml(
            row[1]
          )}</p>`;
        })
        .join("")}
    </div>
  `;
}

function protoInvitePerson(join) {
  return `
    <div class="astral-invite-person">
      <div class="astral-profile-preview is-invite">${protoAvatarMark(join.inviter, join.inviter)}</div>
      <p>${escapeHtml(join.inviter)} invited you to join their team.</p>
    </div>
  `;
}

function protoAuthField({
  name,
  label,
  type = "text",
  value = "",
  disabled = false,
  autocomplete = "off",
  maxlength,
  reveal = false,
  placeholder,
}) {
  const max = maxlength ? ` maxlength="${maxlength}"` : "";
  const hint =
    placeholder || (type === "email" && !value ? "name@company.com" : "");
  const ph = hint ? ` placeholder="${escapeHtml(hint)}"` : "";
  const input = `
      <input
        type="${escapeHtml(type)}"
        name="${escapeHtml(name)}"
        value="${escapeHtml(value)}"
        autocomplete="${escapeHtml(autocomplete)}"
        spellcheck="false"
        ${ph}
        ${disabled ? "disabled" : ""}
        ${max}
      />
  `;
  const control = reveal
    ? `<span class="astral-password">${input}${protoIconBtn(
        "show",
        "Show password",
        'data-proto-recovery="reveal"',
        { className: "is-plain" }
      )}</span>`
    : input;
  return `
    <label class="astral-field">
      <span>${escapeHtml(label)}</span>
      ${control}
    </label>
  `;
}

function protoAuthLinks(items) {
  if (!items.length) return "";
  return `
    <p class="astral-auth-links">
      ${items
        .map(
          (item) =>
            `${protoTextBtn(item.name, `data-proto-flow="${escapeHtml(item.id)}"`)}`
        )
        .join("")}
    </p>
  `;
}

function protoAuthFoot(inner) {
  return `<div class="astral-auth-foot">${inner}</div>`;
}

function protoAuthCodeValue(form) {
  return [...(form?.querySelectorAll("[data-proto-code]") || [])]
    .map((input) => String(input.value || "").replace(/\D/g, "").slice(-1))
    .join("");
}

function protoAuthCodeRow() {
  return `
    <div class="astral-auth-code" role="group" aria-label="Code">
      ${[0, 1, 2, 3, 4, 5]
        .map(
          (index) => `
            <input
              data-proto-code="${index}"
              inputmode="numeric"
              autocomplete="${index === 0 ? "one-time-code" : "off"}"
              maxlength="1"
              aria-label="Digit ${index + 1}"
            />
          `
        )
        .join("")}
    </div>
  `;
}

function protoTypeAuthCode(input) {
  const form = protoAuthForm(input);
  if (!form) return;
  const boxes = [...form.querySelectorAll("[data-proto-code]")];
  const index = boxes.indexOf(input);
  const digit = String(input.value || "").replace(/\D/g, "").slice(-1);
  input.value = digit;
  if (digit && index > -1 && boxes[index + 1]) boxes[index + 1].focus();
}

function onPrototypePaste(event) {
  const input = event.target.closest?.("[data-proto-code]");
  if (!input) return;
  event.preventDefault();
  const form = protoAuthForm(input);
  const boxes = [...(form?.querySelectorAll("[data-proto-code]") || [])];
  const digits = String(event.clipboardData?.getData("text") || "")
    .replace(/\D/g, "")
    .slice(0, boxes.length);
  boxes.forEach((box, i) => {
    box.value = digits[i] || "";
  });
  const focusAt = Math.min(digits.length, Math.max(boxes.length - 1, 0));
  boxes[focusAt]?.focus();
  protoSyncAuthSubmit(input);
}

function protoAuthVerify(kind, email) {
  const shown = email || "your email";
  const next = kind === "sign-up" ? "onboarding" : "reset";
  const resent = store.prototypeAuthResent
    ? `<p class="astral-muted" role="status">${
        kind === "sign-up" ? "New email sent." : "New reset email sent."
      }</p>`
    : "";
  return {
    lead:
      kind === "sign-up"
        ? `A code was sent to ${escapeHtml(shown)}.`
        : `If an account exists for ${escapeHtml(shown)}, a code was sent.`,
    inner: `
      <form data-proto-auth="verify" data-proto-verify="${next}">
        ${protoAuthCodeRow()}
        <div class="astral-actions">
          ${protoBtn("Verify", "", { disabled: true, type: "submit" })}
        </div>
      </form>
      <p class="astral-auth-links">
        <span>Didn't get it?</span>
        ${protoTextBtn("Resend email", `data-proto-${
          kind === "sign-up" ? 'verify="resend"' : 'recovery="resend"'
        }`)}
      </p>
      ${resent}
    `,
  };
}

function protoAuthShell(title, inner, lead, mark) {
  return `
    <div class="astral-app is-auth" style="${protoSkinStyle()}">
      <div class="astral-auth-page">
        ${protoAuthLogo()}
        <section class="astral-card astral-auth">
          ${
            mark
              ? `<div class="astral-auth-mark" aria-hidden="true">${mark}</div>`
              : ""
          }
          <div class="astral-auth-copy">
            <h1>${escapeHtml(title)}</h1>
            ${lead ? `<p class="astral-muted">${lead}</p>` : ""}
          </div>
          ${inner}
        </section>
      </div>
    </div>
  `;
}

function protoAuthForm(node) {
  return node?.closest?.("[data-proto-auth]") || null;
}

function protoSyncAuthSubmit(node) {
  const form = protoAuthForm(node);
  const btn = form?.querySelector("button[type='submit']");
  if (!btn) return;
  const kind = form.dataset.protoAuth;
  const email = String(form.querySelector("[name='proto-auth-email']")?.value || "").trim();
  const password = String(form.querySelector("[name='proto-auth-password']")?.value || "");
  const name = protoProfileLine(
    form.querySelector("[name='proto-auth-name']")?.value ||
      form.querySelector("[name='proto-profile-name']")?.value ||
      protoProfileDraftName()
  );
  const company = protoProfileLine(
    form.querySelector("[name='proto-auth-company']")?.value || protoAuthCompany()
  );
  let ok = false;
  if (kind === "sign-in") ok = protoEmailOk(email) && password.length > 0;
  if (kind === "sign-up") ok = Boolean(name && protoEmailOk(email) && company && password);
  if (kind === "recovery") ok = protoEmailOk(email);
  if (kind === "reset") {
    const confirm = String(form.querySelector("[name='proto-auth-confirm']")?.value || "");
    protoPaintPasswordRules(form, password, confirm);
    ok = protoPasswordReady(password, confirm);
  }
  if (kind === "invite-sign-in") ok = password.length > 0;
  if (kind === "invite-create") {
    const first = protoProfileLine(form.querySelector("[name='proto-invite-first']")?.value || "");
    const last = protoProfileLine(form.querySelector("[name='proto-invite-last']")?.value || "");
    protoPaintPasswordRules(form, password);
    ok = Boolean(first && last && protoPasswordRules(password).every((rule) => rule.ok));
  }
  if (kind === "onboarding") ok = Boolean(name);
  if (kind === "verify") ok = protoAuthCodeValue(form).length === 6;
  btn.disabled = !ok;
}

function protoSignInFlow() {
  const email = protoAuthEmail();
  return protoAuthShell(
    "Sign in",
    `
      <form data-proto-auth="sign-in">
        ${protoAuthField({
          name: "proto-auth-email",
          label: "Email address",
          type: "email",
          value: email,
          autocomplete: "username",
        })}
        ${protoAuthField({
          name: "proto-auth-password",
          label: "Password",
          type: "password",
          autocomplete: "current-password",
        })}
        <p class="astral-auth-links">
          ${protoTextBtn("Forgot password?", "data-proto-flow=\"recovery\"")}
        </p>
        <div class="astral-actions">
          ${protoBtn("Sign in", "", { disabled: true, type: "submit" })}
        </div>
      </form>
      ${protoAuthFoot(`
        <p class="astral-auth-links">
          <span>Don't have an account?</span>
          ${protoTextBtn("Sign-up", "data-proto-flow=\"sign-up\"")}
        </p>
      `)}
    `
  );
}

function protoSignUpFlow() {
  const email = protoAuthEmail();
  if (store.prototypeSignUpStep === "verify") {
    const verify = protoAuthVerify("sign-up", email);
    return protoAuthShell("Check your email", verify.inner, verify.lead);
  }
  const name = protoAuthName();
  const company = protoAuthCompany();
  return protoAuthShell(
    "Sign-up",
    `
      <form data-proto-auth="sign-up">
        ${protoAuthField({
          name: "proto-auth-name",
          label: "Name",
          value: name,
          autocomplete: "name",
          maxlength: 80,
        })}
        ${protoAuthField({
          name: "proto-auth-email",
          label: "Email address",
          type: "email",
          value: email,
          autocomplete: "email",
        })}
        ${protoAuthField({
          name: "proto-auth-company",
          label: "Company",
          value: company,
          autocomplete: "organization",
          maxlength: 80,
        })}
        ${protoAuthField({
          name: "proto-auth-password",
          label: "Password",
          type: "password",
          autocomplete: "new-password",
        })}
        <div class="astral-actions">
          ${protoBtn("Sign-up", "", { disabled: true, type: "submit" })}
        </div>
      </form>
    `
  );
}

function protoRecoveryFlow() {
  const step = protoRecoveryStep();
  const resume = store.prototypeInviteResume;
  const email = resume ? protoInviteJoin().email : protoAuthEmail();
  if (step === "done") {
    return protoAuthShell(
      "Password updated",
      `
        <div class="astral-actions">
          ${protoBtn("Sign in", `${
            resume ? 'data-proto-invite="resume"' : 'data-proto-flow="sign-in"'
          }`)}
        </div>
      `,
      "Your password has been reset.",
      protoIconMark("resolve")
    );
  }
  if (step === "reset") {
    const rules = protoPasswordRules("")
      .map(
        (rule) =>
          `<li data-proto-rule="${escapeHtml(rule.id)}"><span aria-hidden="true"></span>${escapeHtml(
            rule.name
          )}</li>`
      )
      .join("");
    return protoAuthShell(
      "Create a new password",
      `
        <form data-proto-auth="reset">
          ${protoAuthField({
            name: "proto-auth-password",
            label: "New password",
            type: "password",
            autocomplete: "new-password",
            reveal: true,
          })}
          <ul class="astral-password-rules">${rules}</ul>
          ${protoAuthField({
            name: "proto-auth-confirm",
            label: "Confirm password",
            type: "password",
            autocomplete: "new-password",
            reveal: true,
          })}
          <ul class="astral-password-rules">
            <li data-proto-rule="match"><span aria-hidden="true"></span>Passwords match</li>
          </ul>
          <div class="astral-actions">
            ${protoBtn("Reset password", "", { disabled: true, type: "submit" })}
          </div>
        </form>
      `
    );
  }
  if (step === "sent") {
    const verify = protoAuthVerify("recovery", email);
    return protoAuthShell("Check your email", verify.inner, verify.lead);
  }
  const can = protoEmailOk(email);
  return protoAuthShell(
    "Reset your password",
    `
      <form data-proto-auth="recovery">
        ${protoAuthField({
          name: "proto-auth-email",
          label: "Email address",
          type: "email",
          value: email,
          disabled: Boolean(resume),
          autocomplete: "email",
        })}
        <div class="astral-actions">
          ${protoBtn("Send reset link", `${can ? "" : " disabled"}`, { type: "submit" })}
        </div>
      </form>
      ${protoAuthBack()}
    `,
    "Enter the email address linked to your account."
  );
}

function protoInviteFlow() {
  const step = protoInviteStep();
  const join = protoInviteJoin();
  if (step === "done") {
    const on = join.team !== join.company ? ` on ${join.company}` : "";
    return protoAuthShell(
      "You're in",
      `
        <div class="astral-actions">
          ${protoBtn(`Go to ${escapeHtml(join.team)}`, 'data-proto-invite="enter"', { html: true })}
        </div>
      `,
      `You've joined ${escapeHtml(join.team)}${escapeHtml(on)} as ${escapeHtml(join.role)}.`,
      protoIconMark("resolve")
    );
  }
  if (step === "expired") {
    const asked = store.prototypeInviteAsked
      ? `<p class="astral-muted" role="status">Ask an Admin to send another invite.</p>`
      : "";
    return protoAuthShell(
      "This invitation has expired",
      `
        <div class="astral-actions">
          ${protoBtn("Request a new invite", "data-proto-invite=\"ask\"")}
        </div>
        ${asked}
      `
    );
  }
  if (step === "joined") {
    return protoAuthShell(
      "You've already joined this team",
      `
        <div class="astral-actions">
          ${protoBtn(`Go to ${escapeHtml(join.team)}`, 'data-proto-invite="enter"', { html: true })}
        </div>
      `
    );
  }
  if (step === "wrong") {
    return protoAuthShell(
      "This invite was sent to",
      `
        <div class="astral-actions">
          ${protoBtn("Switch account", "data-proto-invite=\"sign-in\"")}
        </div>
      `,
      escapeHtml(join.email)
    );
  }
  if (step === "sign-in") {
    return protoAuthShell(
      `Sign in to join ${join.team}`,
      `
        <form data-proto-auth="invite-sign-in">
          ${protoAuthField({
            name: "proto-auth-email",
            label: "Email address",
            type: "email",
            value: join.email,
            disabled: true,
            autocomplete: "username",
          })}
          ${protoAuthField({
            name: "proto-auth-password",
            label: "Password",
            type: "password",
            autocomplete: "current-password",
            reveal: true,
          })}
          <div class="astral-actions">
            ${protoBtn("Sign in", "", { disabled: true, type: "submit" })}
          </div>
        </form>
        <p class="astral-auth-links">
          ${protoTextBtn("Forgot password?", "data-proto-invite=\"forgot\"")}
        </p>
      `
    );
  }
  if (step === "create") {
    const rules = protoPasswordRules("")
      .map(
        (rule) =>
          `<li data-proto-rule="${escapeHtml(rule.id)}"><span aria-hidden="true"></span>${escapeHtml(
            rule.name
          )}</li>`
      )
      .join("");
    const first = protoInviteFirst();
    const last = protoInviteLast();
    return protoAuthShell(
      "Create your account",
      `
        <form data-proto-auth="invite-create">
          ${protoAuthField({
            name: "proto-auth-email",
            label: "Email address",
            type: "email",
            value: join.email,
            disabled: true,
            autocomplete: "email",
          })}
          ${protoAuthField({
            name: "proto-invite-first",
            label: "First name",
            value: first,
            autocomplete: "given-name",
            maxlength: 80,
          })}
          ${protoAuthField({
            name: "proto-invite-last",
            label: "Last name",
            value: last,
            autocomplete: "family-name",
            maxlength: 80,
          })}
          ${protoAuthField({
            name: "proto-auth-password",
            label: "Create password",
            type: "password",
            autocomplete: "new-password",
            reveal: true,
          })}
          <ul class="astral-password-rules">${rules}</ul>
          <div class="astral-actions">
            ${protoBtn("Create account and join", "", { disabled: true, type: "submit" })}
          </div>
        </form>
      `,
      `You're joining ${escapeHtml(join.team)}.`
    );
  }
  if (step === "review") {
    return protoAuthShell(
      `Join ${join.team}`,
      `
        ${protoInvitePerson(join)}
        ${protoInviteFacts(join, ["team", "role", "email"])}
        <div class="astral-actions">
          ${protoBtn("Accept invite", "data-proto-invite=\"create\"")}
        </div>
        ${protoAuthFoot(`
        <p class="astral-auth-links">
          <span>Already have an account?</span>
          ${protoTextBtn("Sign in", "data-proto-invite=\"sign-in\"")}
        </p>
        `)}
      `
    );
  }
  return protoAuthShell(
    "You've been invited",
    `
      ${protoInviteFacts(join, ["team", "role"])}
      <div class="astral-actions">
        ${protoBtn("Join the team", "data-proto-invite=\"review\"")}
      </div>
      <p class="astral-muted">This invitation expires in 7 days.</p>
      <p class="astral-muted">This invite was sent to ${escapeHtml(join.email)}.</p>
    `,
    `${escapeHtml(join.inviter)} invited you to join ${escapeHtml(join.team)}.`
  );
}

function protoOnboardingFlow() {
  const name = protoProfileDraftName();
  const title = protoProfileDraftJobTitle();
  const discipline = protoProfileDraftDiscipline();
  const picture = protoProfilePicture();
  const pictureError = store.prototypeProfilePictureError;
  const can = Boolean(name);
  return protoAuthShell(
    "Onboarding",
    `
      <div class="astral-card astral-profile-mark">
        <div class="astral-profile-preview${picture ? " has-photo" : ""}">${protoAvatarMark(
          picture ? "Profile picture" : name,
          name
        )}</div>
        <div class="astral-actions">
          <label class="astral-ghost astral-upload">
            Upload picture
            <input
              class="sr-only"
              type="file"
              accept="image/jpeg,image/png,.jpg,.jpeg,.png"
              data-proto-picture="file"
            />
          </label>
          ${
            picture
              ? `${protoGhost("Remove", "data-proto-picture=\"remove\"")}`
              : ""
          }
        </div>
      </div>
      ${
        pictureError
          ? '<p class="astral-muted" role="status">Use a JPEG or PNG.</p>'
          : ""
      }
      <form data-proto-auth="onboarding">
        ${protoAuthField({
          name: "proto-profile-name",
          label: "Name",
          value: name,
          autocomplete: "name",
          maxlength: 80,
        })}
        <div class="astral-field">
          <span id="astral-onboard-discipline">Discipline</span>
          ${protoSelect({
            id: "profile-discipline",
            label: "Discipline",
            value: discipline,
            placeholder: "Pick a discipline",
            wide: true,
            options: PROTO_PROFILE_DISCIPLINES.map((item) => ({
              value: item.id,
              label: item.name,
            })),
          })}
        </div>
        ${protoAuthField({
          name: "proto-profile-title",
          label: "Job title",
          value: title,
          autocomplete: "organization-title",
          maxlength: 80,
        })}
        <p class="astral-muted">Contact still waits.</p>
        <div class="astral-actions">
          ${protoBtn("Save changes", `${can ? "" : " disabled"}`, { type: "submit" })}
        </div>
      </form>
    `
  );
}

function protoFlowScreen() {
  const flow = protoFlow();
  if (flow.id === "sign-in") return protoSignInFlow();
  if (flow.id === "sign-up") return protoSignUpFlow();
  if (flow.id === "recovery") return protoRecoveryFlow();
  if (flow.id === "invite") return protoInviteFlow();
  if (flow.id === "onboarding") return protoOnboardingFlow();
  return protoSignInFlow();
}

function protoApp() {
  protoMigrateImservColours();
  if (protoFlowId() !== "product") return protoFlowScreen();
  const view = protoState().view;
  if (view === "portfolio") return protoPortfolio();
  if (view === "finance") return protoFinance();
  if (view === "alerts") return protoAlerts();
  if (view === "queries") return protoQueries();
  if (view === "reports") return protoReports();
  if (view === "downloads") return protoDownloadsPage();
  if (view === "profile") return protoProfile();
  if (view === "settings") return protoSettings();
  if (view === "users") return protoUsers();
  if (view === "companies") return protoCompanies();
  return protoHome();
}

function protoThumb(view) {
  const on = protoState().view === view.id;
  return `
    <button type="button" class="proto-thumb${on ? " is-on" : ""}" data-proto-open="${escapeHtml(
      view.id
    )}">
      <span class="proto-thumb-frame${protoUsesRail() ? " is-rail" : ""}" aria-hidden="true">
        <span class="proto-thumb-bar">
          <i class="is-nav"></i>
        </span>
        <span class="proto-thumb-body">
          <b>${escapeHtml(view.name)}</b>
          <em></em><em></em>
        </span>
      </span>
      <span class="proto-thumb-copy">
        <span class="card-title">${escapeHtml(view.name)}</span>
        <span class="card-line">${escapeHtml(view.blurb)}</span>
      </span>
    </button>
  `;
}

function protoLensTabs(items, current, attr, label) {
  if (!items.length) return "";
  const tabs = items
    .map((item) => {
      const on = item.id === current;
      return `
      <button
        type="button"
        class="kind-tab"
        role="tab"
        ${attr}="${escapeHtml(item.id)}"
        aria-selected="${on ? "true" : "false"}"
      >${escapeHtml(item.name)}</button>
    `;
    })
    .join("");
  return `
    <div class="proto-lens-row">
      <p class="proto-lens-kicker">${escapeHtml(label)}</p>
      <div class="kind-tabs" role="tablist" aria-label="${escapeHtml(label)}">${tabs}</div>
    </div>
  `;
}

function protoSeeGroup(label, items) {
  if (!items.length) return "";
  const pills = items
    .map(
      (item) =>
        `<li><span class="proto-see-pill">${escapeHtml(item.name)}</span></li>`
    )
    .join("");
  return `
    <div class="proto-see-group">
      <p class="proto-see-label">${escapeHtml(label)}</p>
      <ul class="proto-see-pills" aria-label="${escapeHtml(label)}">${pills}</ul>
    </div>
  `;
}

function protoSeeReadout() {
  const features = [{ name: "Profile" }];
  if (protoCanOpenSettings()) features.push({ name: "Settings" });
  if (protoCanManagePeople()) features.push({ name: "Users" });
  features.push({ name: "Log out" });
  return `
    <div class="proto-lens-row proto-see">
      <p class="proto-lens-kicker">What they see</p>
      <div class="proto-see-block">
        ${protoSeeGroup("Login", [{ name: "Temporary" }])}
        ${protoSeeGroup("Navbar", protoShownViews())}
        ${protoSeeGroup("Other features", features)}
      </div>
    </div>
  `;
}

function protoLenses() {
  const company = protoCompany();
  const access = protoAccess();
  return `
    <div class="proto-lenses">
      ${protoLensTabs(PROTO_COMPANIES, company.id, "data-proto-user-group", "Company type")}
      ${protoLensTabs(
        PROTO_ACCESS_ROLES.filter((item) => company.access.includes(item.id)),
        access.id,
        "data-proto-access",
        "Access"
      )}
      ${protoSeeReadout()}
    </div>
  `;
}

function protoFocusLens(attr, id) {
  const host = store.prototypeFullscreen ? "#astral-fs" : "#prototype-root";
  protoRestoreFocus(`${host} [${attr}="${CSS.escape(id)}"]`);
}

function protoGallery() {
  const data = protoData();
  const company = protoCompany();
  const boardGroup = (store.boards?.[store.activeTeam]?.groups || []).find(
    (item) => item.id === company.id
  );
  const access = protoAccess();
  const helpParts = [
    boardGroup?.need,
    access?.who,
    "Temporary. This login only sees data between the contract dates on the system.",
  ].filter(Boolean);
  const help = helpParts.length
    ? helpParts.join(" ")
    : "Pick the company, then access. This walk is a temporary user.";
  return `
    <div class="proto-desk">
      <header class="page-head">
        <section class="lead">
          <h2>Prototype</h2>
          <p>${escapeHtml(data.galleryLead || "")}</p>
        </section>
        <button type="button" class="page-add" data-proto-full="show">Open fullscreen</button>
      </header>
      ${protoLenses()}
      <p class="section-help">${escapeHtml(help)}</p>
      <div class="proto-thumbs">${protoShownViews().map(protoThumb).join("")}</div>
    </div>
  `;
}

const PROTO_SCROLL_FOCUSABLE =
  "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
const PROTO_SCROLL_OWNERS =
  ".astral-pane-body, .astral-stage, .astral-stage-body, .astral-table-wrap, .astral-modal-body, .astral-notice-list, .astral-list > .astral-tree, .astral-query-pin.is-thread > .astral-query-thread, .astral-compare-list, .astral-rail-links, .astral-reports-sheet, .astral-report-grid, .astral-auth-page, .astral-settings-main > .astral-card:not(.astral-pane)";

function protoRegionCanScroll(node) {
  if (!node || !node.getClientRects().length) return false;
  const style = getComputedStyle(node);
  const y =
    (style.overflowY === "auto" || style.overflowY === "scroll") &&
    node.scrollHeight > node.clientHeight + 1;
  const x =
    (style.overflowX === "auto" || style.overflowX === "scroll") &&
    node.scrollWidth > node.clientWidth + 1;
  return y || x;
}

function protoRegionHasTabStop(node) {
  return Array.from(node.querySelectorAll(PROTO_SCROLL_FOCUSABLE)).some((el) => {
    if (el === node) return false;
    if (el.closest("[hidden], [aria-hidden='true']")) return false;
    const box = el.getBoundingClientRect();
    return box.width > 0 && box.height > 0;
  });
}

function protoBindScrollRegions() {
  const root = document.getElementById("astral-fs");
  if (!root) return;
  root.querySelectorAll(PROTO_SCROLL_OWNERS).forEach((node) => {
    if (node.closest(".astral-tabs")) return;
    const needs = protoRegionCanScroll(node) && !protoRegionHasTabStop(node);
    if (needs) {
      if (!node.hasAttribute("tabindex")) {
        node.setAttribute("tabindex", "0");
        node.dataset.protoScroll = "1";
      }
      return;
    }
    if (node.dataset.protoScroll === "1") {
      node.removeAttribute("tabindex");
      delete node.dataset.protoScroll;
    }
  });
}

function protoFsChild(fs, className) {
  return [...fs.children].find((node) => node.classList.contains(className)) || null;
}

function protoPaintPreviewMenu(fs) {
  const html = astralPreviewMenu();
  const tmp = document.createElement("div");
  tmp.innerHTML = html.trim();
  const next = tmp.firstElementChild;
  const current = protoFsChild(fs, "astral-preview-menu");
  if (current) current.replaceWith(next);
  else fs.appendChild(next);
  protoSlideHost(next.querySelector(".astral-tabs"), "button.is-on", "shareWalk", true);
}

function protoPaintLibraryFs(fs) {
  const app = fs.querySelector(".astral-app");
  if (app) app.hidden = true;
  let host = protoFsChild(fs, "astral-lib-host");
  if (!host) {
    host = document.createElement("div");
    host.className = "astral-lib-host";
    host.innerHTML = `<iframe src="library-site/" title="Astral library"></iframe>`;
    const menu = protoFsChild(fs, "astral-preview-menu");
    if (menu) fs.insertBefore(host, menu);
    else fs.appendChild(host);
  }
  host.hidden = false;
  protoPaintPreviewMenu(fs);
}

function protoPaintWalkFs(fs) {
  const host = protoFsChild(fs, "astral-lib-host");
  if (host) host.hidden = true;
  const tmp = document.createElement("div");
  tmp.innerHTML = protoApp().trim();
  const next = tmp.querySelector(".astral-app") || tmp.firstElementChild;
  if (next) next.hidden = false;
  const app = fs.querySelector(".astral-app");
  if (app) app.replaceWith(next);
  else {
    const menu = protoFsChild(fs, "astral-preview-menu");
    if (menu) fs.insertBefore(next, menu);
    else fs.insertBefore(next, fs.firstChild);
  }
  protoPaintPreviewMenu(fs);
}

function renderPrototype() {
  const root = els.prototypeRoot;
  const fs = els.astralFs;
  if (!root) return;
  const sys = teamSystem();
  const data = sys?.prototype;
  if (!data) {
    root.innerHTML = emptyCard(
      `${teamName(store.activeTeam)} has no Astral prototype yet. IMSERV holds the new build.`
    );
    if (fs) {
      fs.hidden = true;
      fs.innerHTML = "";
    }
    document.body.classList.remove("is-proto-fs");
    setNavCount(els.navPrototypeCount, 0);
    return;
  }
  if (!store.activePrototypeMeter && data.meters?.[0]) {
    store.activePrototypeMeter = data.meters[0].id;
  }
  store.activePrototypeView = protoViewId(store.activePrototypeView);
  protoSeedWalkUsers();
  protoSyncMenuEnter();
  protoFilterSectionsLive();
  root.innerHTML = protoGallery();
  const share = protoShareWalk();
  const libraryOn = protoLibraryOn();
  const full = share
    ? true
    : Boolean(store.prototypeFullscreen) && store.activeSection === "prototype";
  if (fs) {
    const scroll = protoScrollCapture(full && !libraryOn ? fs : null);
    protoClearIconTipPlace();
    protoClearFloatMenus();
    fs.hidden = !full;
    if (!full) {
      fs.innerHTML = "";
    } else if (libraryOn) {
      protoPaintLibraryFs(fs);
    } else {
      protoPaintWalkFs(fs);
      protoScrollRestore(fs, scroll);
    }
  }
  document.body.classList.toggle("is-proto-fs", full);
  setNavCount(els.navPrototypeCount, protoShownViews().length);
  if (!full || libraryOn) {
    if (!full) {
    protoSlideMemory.tabs = null;
    protoSlideMemory.links = null;
    protoSlideMemory.reportTabs = null;
    }
    return;
  }
  if (store.prototypeQueryEdit) {
    protoPlaceQueryPinSoon();
    protoRestoreFocus("#astral-fs [name='proto-query-edit']");
  } else if (store.prototypeQueryCommentOpen) {
    protoPlaceQueryPinSoon();
    protoRestoreFocus("#astral-fs [name='proto-query-reply']");
    store.prototypeQueryCommentOpen = false;
  } else if (store.prototypeQueryForm) {
    protoPlaceQueryPinSoon();
    protoRestoreFocus("#astral-fs [name='proto-query-comment']");
  } else if (protoChartPoint()) {
    protoPlaceQueryPinSoon();
  }
  protoBindBreakdown();
  protoMeasurePillsSoon();
  protoSlideNavPillsSoon();
  protoFitNavSoon();
  protoEqualReportCardsSoon();
  protoBindScrollRegions();
  requestAnimationFrame(protoBindScrollRegions);
  protoBindFloatMenus();
  protoPlaceFloatMenusSoon();
  protoFitChartSoon();
}

function protoFileDownload(body, name, type) {
  const blob = new Blob([body], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

function protoCsvDownload(lines, name) {
  protoFileDownload(lines.join("\n"), name, "text/csv");
}

function protoCsvQuality(quality, value) {
  if (quality === "missing" || value == null) return "missing data";
  if (quality === "estimated") return "estimated";
  return "actual";
}

function protoFileSlug(name) {
  return String(name || "interval")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function protoIntervalNote() {
  return "UTC. outgoing stays positive";
}

function protoDualRows(points) {
  const note = protoIntervalNote();
  return (points || []).map((p) => [
    p.label,
    p.value == null ? "" : protoFormatAmount(p.value),
    p.last == null ? "" : protoFormatAmount(p.last),
    protoCsvQuality(p.quality, p.value),
    protoCsvQuality(p.lastQuality, p.last),
    note,
  ]);
}

function protoSingleRows(points) {
  const note = protoIntervalNote();
  return (points || []).map((p) => [
    p.label,
    p.value == null ? "" : protoFormatAmount(p.value),
    protoCsvQuality(p.quality, p.value),
    note,
  ]);
}

function protoCsvEnergyUnit(meters) {
  return protoMetersUseUnit(meters) === "m³" ? "m3" : "kWh";
}

function protoDualHeaders(meters) {
  const unit = protoCsvEnergyUnit(meters);
  return ["time", `incoming_${unit}`, `outgoing_${unit}`, "incoming_quality", "outgoing_quality", "note"];
}

function protoSingleHeaders(meters) {
  return ["time", protoCsvEnergyUnit(meters), "quality", "note"];
}

function protoIntervalPack(id) {
  const note = protoIntervalNote();
  if (id === "compare") {
    const bundle = protoCompareBundle();
    const flow = protoMetersFlow(bundle.meters);
    const points = protoMetersSeries(bundle.meters, flow.channel);
    const dual = flow.channel === "all" && flow.both;
    const title =
      bundle.level === "group"
        ? bundle.groups.map((group) => group.name).join(", ")
        : bundle.sites.map((site) => site.name).join(", ");
    return {
      file: "comparison-interval",
      title: title || "Comparison",
      note,
      headers: dual ? protoDualHeaders(bundle.meters) : protoSingleHeaders(bundle.meters),
      rows: dual ? protoDualRows(points) : protoSingleRows(points),
    };
  }
  if (String(id || "").startsWith("group:")) {
    const group = protoGroup(String(id).slice(6));
    if (!group) return null;
    const flow = protoGroupFlow(group);
    const meters = protoGroupViewMeters(group);
    const points = protoGroupSeries(group, flow.channel);
    const dual = flow.channel === "all" && flow.both;
    return {
      file: `${protoFileSlug(group.name)}-interval`,
      title: group.name,
      note,
      headers: dual ? protoDualHeaders(meters) : protoSingleHeaders(meters),
      rows: dual ? protoDualRows(points) : protoSingleRows(points),
    };
  }
  if (id === "all") {
    if (store.prototypeScope === "group") {
      const group = protoGroup(store.prototypeGroup);
      if (!group) return null;
      const meters = protoGroupViewMeters(group);
      const points = protoGroupSeries(group, "all");
      return {
        file: `${protoFileSlug(group.name)}-interval`,
        title: group.name,
        note,
        headers: protoDualHeaders(meters),
        rows: protoDualRows(points),
      };
    }
    const site = protoSiteByMeter(store.activePrototypeMeter);
    if (!site) return null;
    const points = protoChannelSeries(site, "all");
    return {
      file: `${protoFileSlug(site.name)}-interval`,
      title: site.name,
      note,
      headers: protoDualHeaders(site.meters),
      rows: protoDualRows(points),
    };
  }
  const meter = protoMeter(id);
  if (!meter) return null;
  const points = protoSiteSeries(meter);
  return {
    file: `${protoMeterRef(meter)}-interval`,
    title: meter.site || meter.name,
    note,
    headers: protoSingleHeaders([meter]),
    rows: protoSingleRows(points),
  };
}

function protoCsv(id) {
  if (id === "users") {
    const lines = [
      "name,email,role,last_active,expiry",
      ...protoUserPeople().map((person) =>
        [
          person.name,
          person.email,
          protoUserRoleName(person.role),
          person.lastActive,
          protoExpiryLabel(person.expiresOn),
        ]
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",")
      ),
    ];
    protoCsvDownload(lines, "users.csv");
    return;
  }
  const report = protoReportDef(id);
  if (report && (report.type === "extract" || report.type === "billing")) {
    const slug = report.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "report";
    protoCsvDownload(protoReportCsv(report), `${slug}.csv`);
    return;
  }
  const pack = protoIntervalPack(id);
  if (!pack) return;
  const lines = [pack.headers.join(","), ...pack.rows.map((row) => row.join(","))];
  protoCsvDownload(lines, `${pack.file}.csv`);
}

function protoPdfEscape(text) {
  return String(text ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function protoPdfDownload(pack) {
  const pageW = 612;
  const pageH = 792;
  const margin = 48;
  const lineH = 14;
  const headerLine = pack.headers.join("  ");
  const body = pack.rows.map((row) => row.join("  "));
  const perPage = 36;
  const chunks = [];
  for (let i = 0; i < body.length; i += perPage) chunks.push(body.slice(i, i + perPage));
  if (!chunks.length) chunks.push([]);
  const streams = chunks.map((chunk) => {
    const cmds = [];
    let y = pageH - margin;
    cmds.push(`BT /F1 12 Tf ${margin} ${y} Td (${protoPdfEscape(pack.title)}) Tj ET`);
    y -= 18;
    cmds.push(`BT /F1 9 Tf ${margin} ${y} Td (${protoPdfEscape(pack.note)}) Tj ET`);
    y -= 22;
    cmds.push(`BT /F1 9 Tf ${margin} ${y} Td (${protoPdfEscape(headerLine)}) Tj ET`);
    y -= lineH;
    chunk.forEach((line) => {
      cmds.push(`BT /F1 9 Tf ${margin} ${y} Td (${protoPdfEscape(line)}) Tj ET`);
      y -= lineH;
    });
    return cmds.join("\n");
  });
  const fontNo = 3 + streams.length * 2;
  const pageObjs = streams.map((_, i) => {
    const contentNo = 3 + streams.length + i;
    return `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW} ${pageH}] /Contents ${contentNo} 0 R /Resources << /Font << /F1 ${fontNo} 0 R >> >> >>`;
  });
  const contentObjs = streams.map((content) => `<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  const all = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pageObjs.map((_, i) => `${3 + i} 0 R`).join(" ")}] /Count ${pageObjs.length} >>`,
    ...pageObjs,
    ...contentObjs,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  all.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${all.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((off) => {
    pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer << /Size ${all.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  protoFileDownload(pdf, `${pack.file}.pdf`, "application/pdf");
}

function protoUsersPack() {
  return {
    file: "users",
    title: "People",
    note: "Local time.",
    headers: ["Name", "Email", "Role", "Last active", "Expiry"],
    rows: protoUserPeople().map((person) => [
      person.name,
      person.email,
      protoUserRoleName(person.role),
      person.lastActive,
      protoExpiryLabel(person.expiresOn),
    ]),
  };
}

function protoPdf(id) {
  if (id === "users") {
    protoPdfDownload(protoUsersPack());
    return;
  }
  const pack = protoIntervalPack(id);
  if (!pack) return;
  protoPdfDownload(pack);
}

function hideProtoTips() {
  protoClearIconTipPlace();
  document.querySelectorAll(".astral-chart-wrap > .astral-tip").forEach((tip) => {
    tip.hidden = true;
    tip.classList.remove("is-more");
    delete tip.dataset.tipTime;
    delete tip.dataset.tipChart;
    tip.style.left = "";
    tip.style.top = "";
    tip.style.maxHeight = "";
  });
  document.querySelectorAll(".astral-hit-group.is-on").forEach((group) => group.classList.remove("is-on"));
}

function protoIconTipForHost(host) {
  return (
    host.querySelector(":scope > .astral-icon-tip") ||
    (host._protoTip && document.contains(host._protoTip) ? host._protoTip : null)
  );
}

function protoTipMenuOpen(host) {
  return Boolean(
    host
      .closest(
        ".astral-export, .astral-filter, .astral-account, .astral-notice, .astral-people-more, .astral-ack, .astral-query-more"
      )
      ?.querySelector('[aria-expanded="true"]')
  );
}

function protoRestoreIconTip(tip) {
  const host = tip._protoHost;
  tip.classList.remove("is-fixed-tip", "is-tip-live");
  tip.style.left = "";
  tip.style.top = "";
  tip.style.right = "";
  tip.style.bottom = "";
  tip.style.transform = "";
  if (host) {
    if (host._protoTip === tip) delete host._protoTip;
    if (document.contains(host) && tip.parentElement !== host) host.appendChild(tip);
    delete tip._protoHost;
  } else if (tip.parentElement?.id === "astral-fs") {
    tip.remove();
  }
}

function protoClearIconTipPlace() {
  document.querySelectorAll(".astral-icon-tip.is-fixed-tip").forEach(protoRestoreIconTip);
}

const PROTO_FLOAT_MENU =
  ".astral-select-menu, .astral-date-menu, .astral-export-menu, .astral-filter-menu, .astral-ack-menu, .astral-account-menu, .astral-notice-menu, .astral-people-menu, .astral-picker, .astral-day-cal-menu";

const PROTO_FLOAT_HOST =
  ".astral-select, .astral-date, .astral-export, .astral-filter, .astral-point-tags, .astral-ack, .astral-query-more, .astral-account, .astral-notice, .astral-people-more, .astral-brand-row, .astral-day-cal";

function protoFloatHost(menu) {
  if (menu._protoHost && document.contains(menu._protoHost)) return menu._protoHost;
  const host = menu.closest(PROTO_FLOAT_HOST);
  if (host) menu._protoHost = host;
  return host || null;
}

function protoFloatTrigger(host) {
  return (
    host.querySelector("[aria-expanded='true']") ||
    host.querySelector(
      ".astral-select-btn, .astral-date-btn, .astral-date-input, .astral-brand-swatch, .astral-icon-btn, button"
    )
  );
}

function protoFloatPlaceBox(menu, host, trigger) {
  if (menu.classList.contains("astral-point-tag-menu")) {
    const card = host.closest(".astral-query-pin-title");
    if (card) return card.getBoundingClientRect();
  }
  return trigger.getBoundingClientRect();
}

function protoFloatAlign(menu, host) {
  if (
    menu.classList.contains("astral-select-menu") ||
    menu.classList.contains("astral-date-menu") ||
    menu.classList.contains("astral-day-cal-menu")
  ) {
    return "start";
  }
  if (menu.classList.contains("astral-point-tag-menu")) return "stretch";
  if (host.classList.contains("astral-account") || host.classList.contains("astral-notice")) {
    return "end";
  }
  return "end";
}

function protoFloatPreferUp(menu, host) {
  return (
    host.classList.contains("is-up") ||
    menu.classList.contains("astral-point-tag-menu") ||
    Boolean(host.closest(".astral-preview-menu"))
  );
}

function protoClearFloatMenus() {
  document.querySelectorAll("#astral-fs > .astral-float-menu").forEach((menu) => {
    const host = menu._protoHost;
    menu.classList.remove("astral-float-menu", "is-up");
    menu.style.left = "";
    menu.style.top = "";
    menu.style.minWidth = "";
    menu.style.width = "";
    menu.style.maxHeight = "";
    menu.style.overflowY = "";
    if (host && document.contains(host) && menu.parentElement !== host) host.appendChild(menu);
    else menu.remove();
    if (host && host._protoMenu === menu) delete host._protoMenu;
    delete menu._protoHost;
  });
}

function protoPlaceFloatMenus() {
  const layer = document.getElementById("astral-fs");
  if (!layer) return;
  const gap = 8;
  const margin = 8;
  const box = layer.getBoundingClientRect();
  const bar = layer.querySelector(":scope > .astral-preview-menu");
  const floor = Math.min(
    box.bottom - margin,
    bar && !bar.hidden ? bar.getBoundingClientRect().top - gap : Infinity
  );
  const open = [
    ...layer.querySelectorAll(PROTO_FLOAT_MENU),
  ].filter((menu) => !menu.hidden && !menu.hasAttribute("hidden"));
  const keep = new Set(open);
  [...layer.querySelectorAll(":scope > .astral-float-menu")].forEach((menu) => {
    if (!keep.has(menu)) {
      const host = menu._protoHost;
      menu.classList.remove("astral-float-menu", "is-up");
      menu.style.left = "";
      menu.style.top = "";
      menu.style.minWidth = "";
      menu.style.width = "";
      menu.style.maxHeight = "";
      menu.style.overflowY = "";
      if (host && document.contains(host) && menu.parentElement !== host) host.appendChild(menu);
      else menu.remove();
      if (host && host._protoMenu === menu) delete host._protoMenu;
      delete menu._protoHost;
    }
  });
  open.forEach((menu) => {
    const host = protoFloatHost(menu);
    const trigger = host ? protoFloatTrigger(host) : null;
    if (!host || !trigger) return;
    menu._protoHost = host;
    host._protoMenu = menu;
    menu.classList.add("astral-float-menu");
    if (menu.parentElement !== layer) layer.appendChild(menu);
    const rect = protoFloatPlaceBox(menu, host, trigger);
    const align = protoFloatAlign(menu, host);
    menu.style.width = "";
    menu.style.maxHeight = "";
    menu.style.overflowY = "";
    if (align === "stretch") menu.style.width = `${Math.round(rect.width)}px`;
    else if (align === "start") menu.style.minWidth = `${Math.round(rect.width)}px`;
    const preferUp = protoFloatPreferUp(menu, host);
    const roomBelow = floor - (rect.bottom + gap);
    const roomAbove = rect.top - gap - (box.top + margin);
    const room = Math.max(120, Math.max(roomBelow, roomAbove));
    const cssMax = parseFloat(getComputedStyle(menu).maxHeight);
    const cap = Math.max(
      120,
      Number.isFinite(cssMax) && cssMax > 0 ? Math.min(room, cssMax) : room
    );
    if (menu.scrollHeight > cap) {
      menu.style.maxHeight = `${Math.floor(cap)}px`;
      menu.style.overflowY = "auto";
    }
    const mw = menu.offsetWidth;
    const mh = menu.offsetHeight;
    let left =
      align === "end" ? rect.right - mw : align === "stretch" ? rect.left : rect.left;
    let top = rect.bottom + gap;
    if (preferUp || (mh > roomBelow && roomAbove >= Math.min(mh, roomBelow))) {
      top = rect.top - mh - gap;
      menu.classList.add("is-up");
    } else {
      menu.classList.remove("is-up");
    }
    if (left < box.left + margin) left = box.left + margin;
    if (left + mw > box.right - margin) left = Math.max(box.left + margin, box.right - mw - margin);
    if (top < box.top + margin) top = box.top + margin;
    if (top + mh > floor) top = Math.max(box.top + margin, floor - mh);
    menu.style.left = `${Math.round(left)}px`;
    menu.style.top = `${Math.round(top)}px`;
  });
}

function protoPlaceFloatMenusSoon() {
  protoPlaceFloatMenus();
  requestAnimationFrame(() => {
    protoPlaceFloatMenus();
    requestAnimationFrame(protoPlaceFloatMenus);
  });
}

function protoBindFloatMenus() {
  const layer = document.getElementById("astral-fs");
  if (!layer || layer._protoFloatBound) return;
  layer._protoFloatBound = true;
  const place = () => protoPlaceFloatMenus();
  layer.addEventListener("scroll", place, true);
  window.addEventListener("resize", place);
}

function protoPlaceIconTip(host) {
  const shell = host.closest("#astral-fs");
  if (!shell) return;
  if (protoTipMenuOpen(host)) {
    protoClearIconTipPlace();
    return;
  }
  const tip = protoIconTipForHost(host);
  if (!tip) return;
  document.querySelectorAll(".astral-icon-tip.is-fixed-tip").forEach((item) => {
    if (item !== tip) protoRestoreIconTip(item);
  });
  tip._protoHost = host;
  host._protoTip = tip;
  if (tip.parentElement !== shell) shell.appendChild(tip);
  tip.style.right = "auto";
  tip.style.bottom = "auto";
  tip.style.transform = "none";
  tip.classList.add("is-fixed-tip", "is-tip-live");
  const rect = host.getBoundingClientRect();
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const box = shell.getBoundingClientRect();
  const gap = 8;
  const margin = 8;
  let left = rect.left + (rect.width - tw) / 2;
  let top = rect.top - th - gap;
  if (top < box.top + margin) top = rect.bottom + gap;
  if (top + th > box.bottom - margin) top = Math.max(box.top + margin, rect.top - th - gap);
  if (left < box.left + margin) left = box.left + margin;
  if (left + tw > box.right - margin) left = box.right - tw - margin;
  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;
}

function protoHoverAttach(point, hit) {
  const group = hit?.closest(".astral-hit-group");
  if (group) {
    return {
      query: group.classList.contains("is-query"),
      alert: group.classList.contains("is-alert"),
    };
  }
  const time = point?.time || "";
  if (!time) return { query: false, alert: false };
  return {
    query: protoQueriesAtTime("", time).length > 0,
    alert: protoAlertsAtTime(time).some((item) => !protoAlertResolved(item)),
  };
}

function protoHoverAttachHtml(point, hit) {
  const attach = protoHoverAttach(point, hit);
  const pills = protoPointTagsOn(point).map((name) => protoPointTagPill(name));
  if (attach.query) pills.push(protoTag("Query"));
  if (attach.alert) pills.push(protoTag("Alert"));
  return pills.join("");
}

function fillProtoTip(hit) {
  if (hit.closest(".astral-hit-group.is-picked")) {
    hideProtoTips();
    return;
  }
  const wrap = hit.closest(".astral-chart-wrap");
  if (!wrap) return;
  const tip = wrap.querySelector(".astral-tip");
  if (!tip) return;
  const point = protoPointFromHit(hit, wrap.dataset.protoChart || "");
  if (!point) return;
  const chart = wrap.dataset.protoChart || "";
  const same = !tip.hidden && tip.dataset.tipTime === point.time && tip.dataset.tipChart === chart;
  if (same) {
    hit.closest(".astral-hit-group")?.classList.add("is-on");
    protoPlaceChartTip(tip, hit, wrap);
    return;
  }
  const open = false;
  const slicesHtml = protoHoverSlices(point, { all: open });
  hideProtoTips();
  tip.dataset.tipTime = point.time;
  tip.dataset.tipChart = chart;
  const timeEl = tip.querySelector(".astral-tip-time");
  if (timeEl) timeEl.textContent = protoChartAt(point.time);
  const markEl = tip.querySelector(".astral-tip-marks");
  if (markEl) {
    const marks = protoHoverAttachHtml(point, hit);
    markEl.innerHTML = marks;
    markEl.hidden = !marks;
  }
  const sliceEl = tip.querySelector(".astral-tip-slices");
  if (sliceEl) {
    sliceEl.innerHTML = slicesHtml.html;
    sliceEl.hidden = !slicesHtml.html;
  }
  protoPaintHoverMore(tip.querySelector("[data-proto-hover-more]"), slicesHtml.rest, open, point);
  const noteEl = tip.querySelector(".astral-tip-note");
  if (noteEl) {
    const note = String(point.note || "").trim();
    const showNote = note && note !== "Actual reading.";
    noteEl.textContent = showNote ? note : "";
    noteEl.hidden = !showNote;
  }
  hit.closest(".astral-hit-group")?.classList.add("is-on");
  tip.hidden = false;
  protoPlaceChartTip(tip, hit, wrap);
}

function protoPlaceChartTip(tip, hit, wrap) {
  const host = protoPinHost();
  const hostBox = host?.getBoundingClientRect();
  const nav = host?.querySelector(".astral-nav-sticky");
  const minTop = nav ? nav.getBoundingClientRect().bottom + 8 : 8;
  tip.style.maxHeight = "";
  const hitBox = (
    hit.closest(".astral-hit-group")?.querySelector(".astral-hit") || hit
  ).getBoundingClientRect();
  const anchor = protoHitAnchorBox(hit);
  let left = hitBox.left + hitBox.width / 2 - tip.offsetWidth / 2;
  let top = anchor.top - tip.offsetHeight - 4;
  const minLeft = (hostBox ? hostBox.left : 0) + 8;
  const maxLeft = (hostBox ? hostBox.right : window.innerWidth) - tip.offsetWidth - 8;
  left = Math.max(minLeft, Math.min(left, Math.max(minLeft, maxLeft)));
  top = Math.max(minTop, top);
  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
}

function protoPinKey() {
  const point = protoChartPoint();
  if (!point) return "";
  return `${point.chart}|${point.time}|${store.prototypeOpenQuery || ""}`;
}

function protoPinHost() {
  return document.querySelector("#astral-fs .astral-app");
}

function protoPinDragBounds(host, pin) {
  const hostBox = host.getBoundingClientRect();
  const nav = host.querySelector(".astral-nav-sticky");
  const navBottom = nav ? nav.getBoundingClientRect().bottom : hostBox.top;
  return {
    minLeft: 8,
    minTop: Math.max(8, navBottom - hostBox.top + 8),
    maxLeft: host.clientWidth - pin.offsetWidth - 8,
    maxTop: host.clientHeight - pin.offsetHeight - 8,
  };
}

function protoApplyPinPos(pin, host, left, top, opts = {}) {
  const b = protoPinDragBounds(host, pin);
  if (!opts.free) pin.style.maxHeight = "";
  const maxLeft = Math.max(b.minLeft, b.maxLeft);
  const maxTop = Math.max(b.minTop, host.clientHeight - pin.offsetHeight - 8);
  left = Math.max(b.minLeft, Math.min(left, maxLeft));
  top = Math.max(b.minTop, Math.min(top, maxTop));
  pin.style.left = `${left}px`;
  pin.style.top = `${top}px`;
  return { left, top };
}

function protoEqualReportCards() {
  const grid = document.querySelector("#astral-fs .astral-report-grid");
  if (!grid) return;
  const cards = [...grid.querySelectorAll(":scope > .astral-card")];
  if (!cards.length) return;
  const current = Number.parseFloat(grid.style.getPropertyValue("--report-card-min")) || 0;
  const height = cards.reduce(
    (max, card) => Math.max(max, card.scrollHeight, card.offsetHeight),
    0
  );
  if (height && height > current + 1) {
    grid.style.setProperty("--report-card-min", `${height}px`);
  }
}

function protoEqualReportCardsSoon() {
  requestAnimationFrame(() => {
    protoEqualReportCards();
    requestAnimationFrame(() => {
      protoEqualReportCards();
      protoWatchReportCards();
    });
  });
}

function protoWatchReportCards() {
  const grid = document.querySelector("#astral-fs .astral-report-grid");
  const fs = document.querySelector("#astral-fs");
  if (!grid || !fs || fs.__reportCardWatch === grid) return;
  fs.__reportCardWatch = grid;
  if (fs.__reportCardObserver) fs.__reportCardObserver.disconnect();
  const observer = new ResizeObserver(() => protoEqualReportCards());
  fs.__reportCardObserver = observer;
  observer.observe(grid);
}

function protoMeasurePillsSoon() {
  protoMeasurePills();
  requestAnimationFrame(() => protoMeasurePills());
  if (!window.__protoPillsResize) {
    window.__protoPillsResize = true;
    window.addEventListener("resize", () => {
      protoMeasurePills();
      protoSlideNavPills({ snap: true });
      protoFitNav();
      protoEqualReportCards();
    });
  }
}

const protoSlideMemory = { tabs: null, links: null, reportTabs: null };

function protoSlideNavPillsSoon() {
  requestAnimationFrame(() => protoSlideNavPills());
}

function protoSlideNavPills(options) {
  const snap = Boolean(options && options.snap);
  const root = document.querySelector("#astral-fs");
  if (!root) return;
  protoSlideHost(
    root.querySelector(".astral-page-head.has-tabs .astral-tabs"),
    "button.is-on",
    "reportTabs",
    true
  );
  protoSlideHost(
    root.querySelector(".astral-detail-head .astral-tabs"),
    "button.is-on",
    "tabs",
    snap
  );
  protoSlideHost(root.querySelector("nav.astral-links"), ".astral-link[aria-current='page']", "links", snap);
}

function protoSlideHost(host, currentSel, key, snap) {
  if (!host) {
    protoSlideMemory[key] = null;
    return;
  }
  const current = host.querySelector(currentSel);
  if (!current) {
    protoSlideMemory[key] = null;
    host.querySelector(":scope > .astral-slide-pill")?.remove();
    host.classList.remove("has-slide");
    return;
  }
  let pill = host.querySelector(":scope > .astral-slide-pill");
  if (!pill) {
    pill = document.createElement("span");
    pill.className = "astral-slide-pill";
    pill.setAttribute("aria-hidden", "true");
    host.insertBefore(pill, host.firstChild);
  }
  host.classList.add("has-slide");
  const next = {
    x: current.offsetLeft,
    y: current.offsetTop,
    w: current.offsetWidth,
    h: current.offsetHeight,
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const prev = snap ? null : protoSlideMemory[key];
  protoSlideMemory[key] = next;
  const place = (pos, animate) => {
    pill.style.transition = animate
      ? "transform var(--motion-panel) ease, width var(--motion-panel) ease, height var(--motion-panel) ease"
      : "none";
    pill.style.width = `${pos.w}px`;
    pill.style.height = `${pos.h}px`;
    pill.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  };
  const same =
    prev &&
    Math.abs(prev.x - next.x) < 1 &&
    Math.abs(prev.y - next.y) < 1 &&
    Math.abs(prev.w - next.w) < 1 &&
    Math.abs(prev.h - next.h) < 1;
  if (!prev || reduce || same) {
    place(next, false);
    return;
  }
  place(prev, false);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => place(next, true));
  });
}

function protoPillsOverflow(row) {
  return row.scrollWidth - row.clientWidth > 1;
}

function protoMeasurePills() {
  const row = document.querySelector("#astral-fs .astral-meter-pills");
  if (!row) return;
  const pills = [...row.querySelectorAll(":scope > .astral-meter-pill")];
  const extra = row.querySelector("[data-proto-pills]");
  if (!pills.length || !extra) return;
  if (store.prototypePillsOpen) {
    pills.forEach((pill) => {
      pill.hidden = false;
    });
    extra.hidden = false;
    extra.textContent = "Hide";
    extra.dataset.protoPills = "hide";
    extra.setAttribute("aria-expanded", "true");
    row.classList.add("is-open");
    return;
  }
  row.classList.remove("is-open");
  extra.hidden = true;
  extra.textContent = "Show more";
  extra.dataset.protoPills = "more";
  extra.setAttribute("aria-expanded", "false");
  pills.forEach((pill) => {
    pill.hidden = false;
  });
  if (!row.clientWidth) return;
  if (!protoPillsOverflow(row)) return;
  let fit = pills.length;
  do {
    fit -= 1;
    if (fit < 1) fit = 1;
    pills.forEach((pill, i) => {
      pill.hidden = i >= fit;
    });
    extra.hidden = false;
    extra.textContent = `Show ${pills.length - fit} more`;
    extra.dataset.protoPills = "more";
  } while (fit > 1 && protoPillsOverflow(row));
}

function protoHitAnchorBox(hit) {
  const group = hit?.closest?.(".astral-hit-group") || hit;
  const marks = group?.querySelectorAll?.(
    ".astral-bar, .astral-bar-out, .astral-point, .astral-alert-mark"
  );
  let top = Infinity;
  let left = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  [...(marks || [])].forEach((el) => {
    const box = el.getBoundingClientRect();
    if (box.width < 0.5 && box.height < 0.5) return;
    top = Math.min(top, box.top);
    left = Math.min(left, box.left);
    right = Math.max(right, box.right);
    bottom = Math.max(bottom, box.bottom);
  });
  if (Number.isFinite(top) && top !== Infinity) {
    return {
      top,
      left,
      right,
      bottom,
      width: Math.max(0, right - left),
      height: Math.max(0, bottom - top),
    };
  }
  return (group?.querySelector?.(".astral-hit") || hit).getBoundingClientRect();
}

function protoPinHit() {
  const picked = document.querySelector("#astral-fs .astral-hit-group.is-picked .astral-hit");
  if (picked) return picked;
  const point = protoChartPoint();
  if (!point) return null;
  const time = String(point.time || "").trim();
  const hits = [...document.querySelectorAll("#astral-fs .astral-hit[data-tip-time]")].filter(
    (el) => String(el.getAttribute("data-tip-time") || "").trim() === time
  );
  if (point.meterId) {
    const meterHit = hits.find((el) => el.getAttribute("data-tip-meter-id") === point.meterId);
    if (meterHit) return meterHit;
  }
  return hits[0] || null;
}

function protoPinChart() {
  return document.querySelector("#astral-fs .astral-chart");
}

function protoPlaceQueryPinSoon() {
  protoPlaceQueryPin();
  requestAnimationFrame(() => {
    protoPlaceQueryPin();
    requestAnimationFrame(() => protoPlaceQueryPin());
  });
}

function protoPlaceQueryPin() {
  const pin = document.querySelector("#astral-fs .astral-query-pin");
  const host = protoPinHost();
  if (!pin || !host) {
    protoPinUser = null;
    return;
  }
  const key = protoPinKey();
  if (protoPinUser && protoPinUser.key === key) {
    protoApplyPinPos(pin, host, protoPinUser.left, protoPinUser.top, { free: true });
    return;
  }
  protoPinUser = null;
  pin.style.maxHeight = "";
  const hostBox = host.getBoundingClientRect();
  const hit = protoPinHit();
  let left = 8;
  let top = 76;
  if (hit) {
    const hitBox = hit.getBoundingClientRect();
    const anchor = protoHitAnchorBox(hit);
    left = hitBox.left - hostBox.left + hitBox.width / 2 - pin.offsetWidth / 2;
    top = anchor.top - hostBox.top - pin.offsetHeight - 4;
  }
  protoApplyPinPos(pin, host, left, top);
}

function onPrototypeTip(event) {
  const iconHost = event.target.closest?.(".astral-tip-host, .astral-person.is-tip");
  if (event.type === "pointerout") {
    if (!iconHost) return;
    const next = event.relatedTarget?.closest?.(".astral-tip-host, .astral-person.is-tip");
    if (iconHost !== next) protoClearIconTipPlace();
    return;
  }
  if (iconHost && protoIconTipForHost(iconHost) && event.type !== "focusout") {
    protoPlaceIconTip(iconHost);
    return;
  }
  if (event.type !== "pointermove") protoClearIconTipPlace();
  const hit = event.target.closest("[data-tip-time]");
  if (hit) {
    fillProtoTip(hit);
    return;
  }
  if (event.target.closest(".astral-tip")) return;
  if (event.type === "focusout") {
    const next = event.relatedTarget;
    if (next && next.closest && (next.closest("[data-tip-time]") || next.closest(".astral-tip"))) return;
    hideProtoTips();
    return;
  }
  if (!event.target.closest(".astral-chart-wrap")) hideProtoTips();
}

function protoOpenCustomDate() {
  const today = protoToday();
  const from =
    store.prototypeDateDraftFrom ||
    store.prototypeDateFrom ||
    protoIso(protoAddDays(today, -14));
  const to = store.prototypeDateDraftTo || store.prototypeDateTo || protoIso(today);
  setProto({
    prototypeDateOpen: false,
    prototypeDateCustomOpen: true,
    prototypeDateDraftFrom: from,
    prototypeDateDraftTo: to,
    prototypeDateCal: String(from).slice(0, 7),
  });
}

function protoPickCalDay(iso) {
  const day = protoFromIso(iso);
  if (!day || day > protoToday()) return;
  const from = protoFromIso(store.prototypeDateDraftFrom);
  const to = protoFromIso(store.prototypeDateDraftTo);
  let nextFrom = iso;
  let nextTo = "";
  if (from && !to) {
    if (day < from) {
      nextFrom = iso;
      nextTo = protoIso(from);
    } else {
      nextFrom = protoIso(from);
      nextTo = iso;
    }
  }
  setProto({
    prototypeDateCustomOpen: true,
    prototypeDateDraftFrom: nextFrom,
    prototypeDateDraftTo: nextTo,
  });
}

function protoRestoreFocus(selector, start) {
  const next = document.querySelector(selector);
  if (!next) return;
  next.focus();
  if (typeof start === "number" && next.setSelectionRange) next.setSelectionRange(start, start);
  protoGrowComment(next);
}

function protoScrollSelectInPane(id, block) {
  const place = () => {
    const host = document.querySelector(`#astral-fs [data-proto-select="${CSS.escape(id)}"]`);
    const body = host?.closest(".astral-pane-body");
    if (!host || !body) return;
    host.scrollIntoView({ block: block || "nearest", inline: "nearest" });
    const menu = host._protoMenu || host.querySelector(".astral-select-menu");
    if (!menu || menu.hidden) return;
    const bar = document.querySelector("#astral-fs .astral-preview-menu");
    const floor = Math.min(
      body.getBoundingClientRect().bottom,
      bar ? bar.getBoundingClientRect().top : Infinity
    );
    const need = menu.getBoundingClientRect().height + 16;
    const room = floor - host.getBoundingClientRect().bottom;
    if (room < need) body.scrollTop += Math.ceil(need - room);
  };
  requestAnimationFrame(place);
}

function protoCommentArea(node) {
  return node?.closest?.("textarea[data-proto-grow]") || null;
}

function protoCommentOpen(box) {
  return Boolean(box.value) || box.dataset.protoGrowOpen === "1";
}

function protoGrowComment(area) {
  const box = protoCommentArea(area);
  if (!box) return;
  const styles = getComputedStyle(box);
  const line = parseFloat(styles.lineHeight) || 24;
  const chrome =
    parseFloat(styles.paddingTop) +
    parseFloat(styles.paddingBottom) +
    parseFloat(styles.borderTopWidth) +
    parseFloat(styles.borderBottomWidth);
  const minLines = box.closest("[data-proto-query-reply], [data-proto-query-form]") ? 1 : protoCommentOpen(box) ? 2 : 1;
  box.style.height = "auto";
  box.style.height = `${Math.max(minLines * line + chrome, box.scrollHeight)}px`;
  if (box.closest(".astral-query-pin")) protoPlaceQueryPin();
}

function protoOpenComment(area) {
  const box = protoCommentArea(area);
  if (!box) return;
  box.dataset.protoGrowOpen = "1";
  protoGrowComment(box);
}

function protoSyncQuerySubmit(area) {
  const form = area?.closest?.("[data-proto-query-form], [data-proto-query-reply], [data-proto-query-edit]");
  const btn = form?.querySelector("button[type='submit']");
  if (!btn) return;
  btn.disabled = !String(area.value || "");
}

function protoQueryComposerForm(node) {
  return node?.closest?.("[data-proto-query-form], [data-proto-query-reply], [data-proto-query-edit]") || null;
}

function onPrototypeFocus(event) {
  protoGrowComment(event.target);
  if (event.type !== "focusin") return;
  const field = protoUkDateField(event.target);
  if (!field) return;
  if (field.name === "proto-report-start") {
    protoOpenReportCal();
    return;
  }
  if (!event.relatedTarget) return;
  protoStartUkDateField(field);
}

function onPrototypeBeforeInput(event) {
  const field = protoUkDateField(event.target);
  if (!field || event.inputType !== "insertText") return;
  const typed = String(event.data || "").replace(/\D/g, "");
  if (!typed) return;
  const start = field.selectionStart;
  const end = field.selectionEnd;
  if (start !== end) return;
  const key = protoUkDateStoreKey(field);
  if (!key) return;
  const filled = String(field.value || "").replace(/\D/g, "").length >= 8;
  const atStart = start === 0 && field.value;
  if (!atStart && !filled) return;
  event.preventDefault();
  const next = protoMaskUkDate(typed);
  store[key] = next;
  persistChrome();
  render();
  protoRestoreFocus(`#astral-fs input[name='${field.name}']`, next.length);
}

function onPrototype(event) {
  const dateField = protoUkDateField(event.target);
  if (dateField) {
    if (dateField.name === "proto-report-start") protoOpenReportCal();
    else protoStartUkDateField(dateField);
  }
  const sortBtn = event.target.closest("[data-proto-sort]");
  if (sortBtn) {
    event.stopPropagation();
    protoToggleTableSort(sortBtn.dataset.protoSort, sortBtn.dataset.protoSortKey);
    protoRestoreFocus(
      `[data-proto-sort="${CSS.escape(sortBtn.dataset.protoSort)}"][data-proto-sort-key="${CSS.escape(
        sortBtn.dataset.protoSortKey
      )}"]`
    );
    return;
  }
  const searchClear = event.target.closest("[data-proto-search-clear]");
  if (searchClear) {
    const name = searchClear.dataset.protoSearchClear;
    const patch =
      name === "proto-query"
        ? { activePrototypeQuery: "" }
        : name === "proto-user-query"
          ? { prototypeUserQuery: "" }
          : name === "proto-company-query"
            ? { prototypeCompanyQuery: "" }
            : name === "proto-team-query"
            ? { prototypeTeamQuery: "" }
            : name === "proto-team-people-query"
              ? { prototypeTeamPeopleQuery: "", prototypeSelectOpen: "team-people" }
              : name === "proto-report-people-query"
                ? { prototypeReportPeopleQuery: "", prototypeSelectOpen: "report-people" }
              : name === "proto-report-site-query"
                ? { prototypeReportSiteQuery: "", prototypeSelectOpen: store.prototypeSelectOpen || "" }
              : name === "proto-point-tag-query"
                ? { prototypePointTagQuery: "", prototypePointTagOpen: true }
              : name === "proto-compare-query"
              ? { prototypeCompareQuery: "" }
              : name === "proto-download-query"
                ? { prototypeDownloadQuery: "" }
              : null;
    if (!patch) return;
    setProto(patch);
    protoRestoreFocus(`#astral-fs input[name='${CSS.escape(name)}']`);
    return;
  }
  const noteEditBtn = event.target.closest("[data-proto-query-note-edit]");
  if (noteEditBtn) {
    if (!protoCanAct()) return;
    event.stopPropagation();
    setProto({
      prototypeQueryEdit: noteEditBtn.dataset.protoQueryNoteEdit || "",
      prototypeQueryMore: "",
      prototypeQueryCommentOpen: false,
      prototypeAckOpen: "",
    });
    protoRestoreFocus("#astral-fs [name='proto-query-edit']");
    return;
  }
  const moreBtn = event.target.closest("[data-proto-query-more]");
  if (moreBtn) {
    if (!protoCanAct()) return;
    event.stopPropagation();
    const row = protoQueryByRef(store.prototypeOpenQuery);
    const key = protoQueryMoreKey(row?.ref || "", moreBtn.dataset.protoQueryMore || "");
    const open = store.prototypeQueryMore === key ? "" : key;
    setProto({
      prototypeQueryMore: open,
      prototypeAckOpen: "",
    });
    return;
  }
  const modalClose = event.target.closest("[data-proto-modal-close]");
  if (modalClose) {
    protoCloseModal(modalClose.dataset.protoModalClose);
    return;
  }
  if (event.target.classList.contains("astral-modal-back")) {
    protoCloseModal(event.target.dataset.protoModal);
    return;
  }
  const breakdownBtn = event.target.closest("[data-proto-breakdown]");
  if (breakdownBtn) {
    protoToggleBreakdown(breakdownBtn);
    return;
  }
  const analyseBtn = event.target.closest("[data-proto-analyse]");
  if (analyseBtn) {
    event.stopPropagation();
    protoAnalysePoint();
    return;
  }
  const tagOpen = event.target.closest("[data-proto-point-tag-open]");
  if (tagOpen) {
    if (!protoCanAct()) return;
    event.stopPropagation();
    const open = !store.prototypePointTagOpen;
    setProto({
      prototypePointTagOpen: open,
      prototypePointTagQuery: open ? String(store.prototypePointTagQuery || "") : "",
    });
    if (open) protoRestoreFocus("#astral-fs input[name='proto-point-tag-query']");
    else protoRestoreFocus("#astral-fs [data-proto-point-tag-open]");
    return;
  }
  const tagToggle = event.target.closest("[data-proto-point-tag-toggle]");
  if (tagToggle) {
    if (!protoCanAct()) return;
    event.stopPropagation();
    protoTogglePointTag(tagToggle.dataset.protoPointTagToggle);
    protoRestoreFocus(
      `#astral-fs [data-proto-point-tag-toggle="${CSS.escape(tagToggle.dataset.protoPointTagToggle)}"]`
    );
    return;
  }
  const tagCreate = event.target.closest("[data-proto-point-tag-create]");
  if (tagCreate) {
    if (!protoCanAct()) return;
    event.stopPropagation();
    protoAttachPointTag(tagCreate.dataset.protoPointTagCreate, true);
    protoRestoreFocus("#astral-fs input[name='proto-point-tag-query']");
    return;
  }
  if (
    protoChartPoint() &&
    !event.target.closest(".astral-query-pin") &&
    !event.target.closest("[data-proto-hit]") &&
    !event.target.closest("[data-proto-alert]") &&
    !event.target.closest("[data-proto-query-open]") &&
    !event.target.closest("[data-proto-breakdown]") &&
    !event.target.closest(".astral-ack")
  ) {
    setProto({
      prototypeChartPoint: null,
      prototypeOpenQuery: "",
      prototypeQueryForm: false,
      prototypeQuerySite: "",
      prototypeQueryCommentOpen: false,
    });
  }
  if (protoCommentArea(event.target)) protoOpenComment(event.target);
  const recent = event.target.closest("[data-proto-recent]");
  if (recent) {
    if (!protoCanAct()) return;
    const picker = recent.closest("[data-proto-picker]");
    const kind = picker?.dataset.protoPicker;
    if (kind) protoApplyBrand(kind, recent.dataset.protoRecent, true);
    return;
  }
  const brandRow = event.target.closest("[data-proto-brand-row]");
  if (
    brandRow &&
    !event.target.closest("[data-proto-brand-hex]") &&
    !event.target.closest(".astral-picker")
  ) {
    const kind = brandRow.dataset.protoBrandRow;
    const open = store.prototypeColourOpen === kind;
    const swatch = event.target.closest("[data-proto-picker-open]");
    setProto({ prototypeColourOpen: open && swatch ? "" : kind });
    return;
  }
  const pictureBtn = event.target.closest("[data-proto-picture]");
  if (pictureBtn && pictureBtn.dataset.protoPicture === "remove") {
    setProto({ prototypeProfilePicture: "", prototypeProfilePictureError: false });
    return;
  }
  const brandBtn = event.target.closest("[data-proto-brand]");
  if (brandBtn && brandBtn.dataset.protoBrand !== "logo") {
    if (!protoCanAct()) return;
    if (brandBtn.dataset.protoBrand === "remove") {
      protoPatchOrg({ logo: "" }, false);
      setProto({ prototypeBrandLogoError: false });
    } else if (brandBtn.dataset.protoBrand === "reset") {
      protoPatchOrg(protoOrgBlank(), false);
      setProto({
        prototypeBrandLogoError: false,
        prototypeColourOpen: "",
      });
    }
    return;
  }
  const dayCalBtn = event.target.closest("[data-proto-day-cal]");
  if (dayCalBtn) {
    const act = dayCalBtn.dataset.protoDayCal;
    const { year, month } = protoReportCalMonth();
    if (act === "prev" || act === "next") {
      setProto({
        prototypeReportCalOpen: true,
        prototypeReportCal: protoShiftCal(year, month, act === "next" ? 1 : -1),
        prototypeSelectOpen: "",
      });
      protoRestoreFocus(`#astral-fs [data-proto-day-cal="${act}"]`);
    }
    return;
  }
  const dayCalPick = event.target.closest("[data-proto-day-cal-pick]");
  if (dayCalPick) {
    const day = protoFromIso(dayCalPick.dataset.protoDayCalPick);
    if (!day) return;
    setProto({
      prototypeReportDraftStart: protoFormatUkDate(day),
      prototypeReportCal: protoIso(day).slice(0, 7),
      prototypeReportCalOpen: false,
      prototypeSelectOpen: "",
    });
    protoRestoreFocus('#astral-fs input[name="proto-report-start"]');
    return;
  }
  const calDay = event.target.closest("[data-proto-cal-day]");
  if (calDay) {
    protoPickCalDay(calDay.dataset.protoCalDay);
    return;
  }
  const chartPan = event.target.closest("[data-proto-chart-pan]");
  if (chartPan) {
    if (chartPan.disabled) return;
    protoPanChart(chartPan.dataset.protoChartPan === "next" ? 1 : -1);
    return;
  }
  const dateBtn = event.target.closest("[data-proto-date]");
  if (dateBtn) {
    const act = dateBtn.dataset.protoDate;
    if (act === "toggle") {
      setProto({
        prototypeDateOpen: !store.prototypeDateOpen,
        prototypeExportOpen: false,
        prototypeTreeFilterOpen: false,
        prototypePaneFilterOpen: false,
        prototypeAckOpen: "",
      });
      return;
    }
    if (act === "24h" || act === "7d" || act === "28d" || act === "12m") {
      setProto({
        prototypeDatePreset: act,
        prototypeDateOpen: false,
        prototypeChartPoint: null,
        ...protoRememberDateHome(act),
      });
      return;
    }
    if (act === "custom") {
      protoOpenCustomDate();
      return;
    }
    if (act === "cancel") {
      setProto({ prototypeDateCustomOpen: false, prototypeDateOpen: false });
      return;
    }
    if (act === "save") {
      const from = store.prototypeDateDraftFrom;
      const to = store.prototypeDateDraftTo;
      if (!from || !to) return;
      setProto({
        prototypeDatePreset: "custom",
        prototypeDateFrom: from,
        prototypeDateTo: to,
        prototypeDateCustomOpen: false,
        prototypeDateOpen: false,
        prototypeChartPoint: null,
        ...protoRememberDateHome("custom", from, to),
      });
      return;
    }
    if (act === "prev" || act === "next") {
      const { year, month } = protoCalMonth();
      setProto({
        prototypeDateCustomOpen: true,
        prototypeDateCal: protoShiftCal(year, month, act === "next" ? 1 : -1),
      });
      return;
    }
  }
  const selectOption = event.target.closest("[data-proto-select-option]");
  if (selectOption) {
    protoPickSelect(selectOption.dataset.protoSelectOption, selectOption.dataset.protoSelectValue);
    return;
  }
  const selectToggle = event.target.closest("[data-proto-select-toggle]");
  if (selectToggle) {
    if (selectToggle.disabled) return;
    const id = selectToggle.dataset.protoSelectToggle;
    const open = protoSelectOpen() === id;
    setProto({
      prototypeSelectOpen: open ? "" : id,
      prototypeDateOpen: false,
      prototypeExportOpen: false,
      prototypeTreeFilterOpen: false,
      prototypeUserRoleFilterOpen: false,
      prototypeAckOpen: "",
      prototypeUserMenu: "",
    });
    if (!open && id === "team-people") {
      protoRestoreFocus("#astral-fs input[name='proto-team-people-query']");
    }
    if (!open && String(id).startsWith("user-team:")) {
      protoRestoreFocus("#astral-fs input[name='proto-person-team-query']");
      protoScrollSelectInPane(id);
    }
    if (!open && String(id).startsWith("user-sites:")) {
      protoRestoreFocus("#astral-fs input[name='proto-person-sites-query']");
      protoScrollSelectInPane(id, "start");
    }
    return;
  }
  const recoveryBtn = event.target.closest("[data-proto-recovery]");
  if (recoveryBtn) {
    const act = recoveryBtn.dataset.protoRecovery;
    if (act === "reveal") {
      const wrap = recoveryBtn.closest(".astral-password");
      const input = wrap?.querySelector("input");
      if (!input) return;
      const hide = input.type === "text";
      input.type = hide ? "password" : "text";
      const label = hide ? "Show password" : "Hide password";
      recoveryBtn.setAttribute("aria-label", label);
      recoveryBtn.innerHTML = protoIconMark(hide ? "show" : "hide");
      const tipHost = recoveryBtn.closest(".astral-tip-host");
      const tip = tipHost ? protoIconTipForHost(tipHost) : null;
      if (tip) tip.textContent = label;
      return;
    }
    if (act === "resend") {
      setProto({
        prototypeAuthSent: true,
        prototypeRecoveryStep: "sent",
        prototypeAuthResent: true,
      });
      return;
    }
    if (act === "change") {
      setProto({
        prototypeAuthSent: false,
        prototypeRecoveryStep: "",
        prototypeAuthResent: false,
      });
      return;
    }
    if (act === "reset") {
      setProto({
        prototypeAuthSent: true,
        prototypeRecoveryStep: "reset",
        prototypeAuthResent: false,
      });
      return;
    }
    return;
  }
  const verifyBtn = event.target.closest("[data-proto-verify]");
  if (verifyBtn && verifyBtn.matches("[data-proto-verify]") && !verifyBtn.matches("[data-proto-auth]")) {
    const act = verifyBtn.dataset.protoVerify;
    if (act === "resend") {
      setProto({
        prototypeFlow: "sign-up",
        prototypeSignedOut: true,
        prototypeSignUpStep: "verify",
        prototypeAuthResent: true,
      });
      return;
    }
    if (act === "edit") {
      setProto({
        prototypeFlow: "sign-up",
        prototypeSignedOut: true,
        prototypeSignUpStep: "",
        prototypeAuthResent: false,
      });
      return;
    }
  }
  const inviteBtn = event.target.closest("[data-proto-invite]");
  if (inviteBtn) {
    const act = inviteBtn.dataset.protoInvite;
    if (act === "review" || act === "sign-in" || act === "create") {
      setProto({
        prototypeFlow: "invite",
        prototypeSignedOut: true,
        prototypeInviteStep: act,
        prototypeInviteResume: false,
        prototypeInviteAsked: false,
      });
      return;
    }
    if (act === "ask") {
      setProto({
        prototypeFlow: "invite",
        prototypeSignedOut: true,
        prototypeInviteStep: "expired",
        prototypeInviteAsked: true,
      });
      return;
    }
    if (act === "enter") {
      protoEnterProduct();
      return;
    }
    if (act === "forgot") {
      setProto({
        prototypeFlow: "recovery",
        prototypeSignedOut: true,
        prototypeInviteResume: true,
        prototypeInviteStep: "sign-in",
        prototypeRecoveryStep: "",
        prototypeAuthSent: false,
        prototypeAuthResent: false,
        prototypeInviteAsked: false,
        prototypeAuthEmail: protoInviteJoin().email,
      });
      return;
    }
    if (act === "resume") {
      setProto({
        prototypeFlow: "invite",
        prototypeSignedOut: true,
        prototypeInviteStep: "sign-in",
        prototypeInviteResume: false,
        prototypeRecoveryStep: "",
        prototypeAuthSent: false,
        prototypeAuthResent: false,
      });
      return;
    }
    return;
  }
  const flowLink = event.target.closest("[data-proto-flow]");
  if (flowLink) {
    protoSetFlow(flowLink.dataset.protoFlow);
    return;
  }
  const seeAsCompany = event.target.closest("[data-proto-see-as-company]");
  if (seeAsCompany) {
    protoOpenCompany(seeAsCompany.dataset.protoSeeAsCompany);
    return;
  }
  const seeAsUser = event.target.closest("[data-proto-see-as-user]");
  if (seeAsUser) {
    if (!protoCanLoginAsUser()) return;
    protoLoginAsUser(seeAsUser.dataset.protoSeeAsUser);
    return;
  }
  const seeAsBack = event.target.closest('[data-proto-see-as="back"]');
  if (seeAsBack) {
    protoBackToAdmin();
    return;
  }
  const railBtn = event.target.closest("[data-proto-rail]");
  if (railBtn) {
    const open =
      railBtn.dataset.protoRail === "toggle" ? !store.prototypeRailOpen : false;
    setProto({ prototypeRailOpen: open });
    protoRestoreFocus(
      open
        ? '#astral-fs .astral-rail [aria-current="page"]'
        : '#astral-fs [data-proto-rail="toggle"]'
    );
    return;
  }
  const accountBtn = event.target.closest("[data-proto-account]");
  if (accountBtn) {
    const act = accountBtn.dataset.protoAccount;
    if (act === "out") {
      setProto({
        prototypeFlow: "sign-in",
        prototypeSignedOut: true,
        prototypeAccountOpen: false,
        ...protoSeeAsClear(),
      });
      return;
    }
    if (act === "in") {
      protoEnterProduct();
      return;
    }
    setProto({ prototypeAccountOpen: !store.prototypeAccountOpen });
    return;
  }
  const noticeBtn = event.target.closest("[data-proto-notice]");
  if (noticeBtn) {
    setProto({ prototypeNoticeOpen: !store.prototypeNoticeOpen });
    return;
  }
  const lensBtn = event.target.closest("[data-proto-user-group]");
  if (lensBtn) {
    protoSetCompany(lensBtn.dataset.protoUserGroup);
    return;
  }
  const accessBtn = event.target.closest("[data-proto-access]");
  if (accessBtn) {
    const id = accessBtn.dataset.protoAccess;
    const company = protoCompany();
    const access = company.access.includes(id) ? id : company.access[0];
    setProto({
      prototypeAccess: access,
      prototypeMeRole: access,
      prototypeUserForm: false,
      prototypeUserMenu: "",
      ...protoRenewClear(),
    });
    protoFocusLens("data-proto-access", access);
    return;
  }
  const openBtn = event.target.closest("[data-proto-open]");
  if (openBtn) {
    setProto({
      activePrototypeView: openBtn.dataset.protoOpen,
      prototypeFullscreen: true,
      prototypeFlow: "product",
      prototypeSignedOut: false,
    });
    return;
  }
  const shareBtn = event.target.closest("[data-proto-share]");
  if (shareBtn) {
    const on = shareBtn.dataset.protoShare === "library";
    setProto({ prototypeLibraryOn: on });
    protoRestoreFocus(`#astral-fs [data-proto-share="${on ? "library" : "prototype"}"]`);
    return;
  }
  const fullBtn = event.target.closest("[data-proto-full]");
  if (fullBtn) {
    setProto({
      prototypeFullscreen: fullBtn.dataset.protoFull === "show",
      prototypeLibraryOn: false,
    });
    return;
  }
  const previewBtn = event.target.closest("[data-proto-preview]");
  if (previewBtn) {
    const hide = previewBtn.dataset.protoPreview === "hide";
    setProto({ prototypePreviewHidden: hide });
    protoRestoreFocus(
      hide
        ? '#astral-fs [data-proto-preview="show"]'
        : '#astral-fs [data-proto-preview="hide"]'
    );
    return;
  }
  const reportTypeBtn = event.target.closest("[data-proto-report-type]");
  if (reportTypeBtn) {
    if (!protoCanEditReports() || protoReportEditId() !== "new") return;
    const type = protoReportTypeId(reportTypeBtn.dataset.protoReportType);
    const cur = protoReportDraft();
    if (cur?.type === type) return;
    const next = protoReportNewDraft(type);
    if (cur) {
      next.name = cur.name;
      next.people = cur.people;
      next.emails = cur.emails;
    }
    setProto({
      prototypeReportEdit: "new",
      prototypeReportDraft: next,
      prototypeReportSiteQuery: "",
    });
    protoRestoreFocus(`#astral-fs [data-proto-report-type="${type}"]`);
    return;
  }
  const reportDeleteBtn = event.target.closest("[data-proto-report-delete]");
  if (reportDeleteBtn) {
    if (!protoCanEditReports()) return;
    const id = reportDeleteBtn.dataset.protoReportDelete;
    setProto({
      ...protoReportEditClear(),
      ...protoReportDefsPatch(protoReportDefs().filter((def) => def.id !== id)),
    });
    return;
  }
  const reportEditBtn = event.target.closest("[data-proto-report-edit]");
  if (reportEditBtn) {
    const id = reportEditBtn.dataset.protoReportEdit;
    if (id === "cancel") {
      protoCloseModal("report");
      return;
    }
    protoReportOpenEdit(id);
    return;
  }
  const toggleHost = event.target.closest("[data-proto-report-toggle]");
  if (toggleHost && !event.target.closest("[data-proto-report-edit]")) {
    if (!protoCanEditReports()) return;
    const id = toggleHost.dataset.protoReportToggle;
    const defs = protoReportDefs();
    const def = defs.find((item) => item.id === id);
    if (!def) return;
    const nextOn = !def.on;
    const next = defs.map((item) => (item.id === id ? { ...item, on: nextOn } : item));
    const switchEl = toggleHost.querySelector(".astral-switch");
    switchEl?.classList.toggle("is-on", nextOn);
    switchEl?.setAttribute("aria-checked", nextOn ? "true" : "false");
    const card = toggleHost.closest(".astral-card");
    card?.classList.toggle("is-off", !nextOn);
    const wait = card?.querySelector(".astral-report-wait .astral-muted");
    if (wait) wait.textContent = protoReportStatusLine({ ...def, on: nextOn });
    Object.assign(store, protoReportDefsPatch(next));
    persistChrome();
    return;
  }
  const userBtn = event.target.closest("[data-proto-user]");
  if (userBtn) {
    const act = userBtn.dataset.protoUser;
    if (act === "invite") {
      if (!protoCanManagePeople()) return;
      setProto({
        prototypeUserForm: true,
        prototypeTeamForm: false,
        prototypeCompanyForm: false,
        prototypeUserDrafts: protoUserDrafts(),
        prototypeUserMenu: "",
        ...protoRenewClear(),
      });
      protoRestoreFocus("#astral-fs [data-proto-user-draft]");
      return;
    }
    if (act === "another") {
      setProto({
        prototypeUserForm: true,
        prototypeUserDrafts: [...protoUserDrafts(), ""],
      });
      const fields = document.querySelectorAll("#astral-fs [data-proto-user-draft]");
      const last = fields[fields.length - 1];
      if (last) last.focus();
      return;
    }
    if (act === "cancel") {
      setProto({ prototypeUserForm: false, prototypeUserDrafts: [""] });
      return;
    }
  }
  const companyBtn = event.target.closest("[data-proto-company]");
  if (companyBtn) {
    const act = companyBtn.dataset.protoCompany;
    if (act === "add") {
      if (!protoSeesCompanies()) return;
      setProto({
        prototypeCompanyForm: true,
        prototypeTeamForm: false,
        prototypeUserForm: false,
        prototypeCompanyDraftName: "",
        prototypeCompanyDraftType: "customer",
        prototypeCompanyNameError: false,
        prototypeUserMenu: "",
        ...protoRenewClear(),
      });
      protoRestoreFocus("#astral-fs input[name='proto-company-name']");
      return;
    }
    if (act === "cancel") {
      protoCloseModal("company");
      return;
    }
  }
  const teamBtn = event.target.closest("[data-proto-team]");
  if (teamBtn) {
    const act = teamBtn.dataset.protoTeam;
    if (act === "add") {
      if (!protoCanManagePeople()) return;
      setProto({
        prototypeTeamForm: true,
        prototypeUserForm: false,
        prototypeCompanyForm: false,
        prototypeTeamDraftName: "",
        prototypeTeamDraftCompany: protoTeamCompanyChoices()[0].value,
        prototypeTeamDraftDepartment: "",
        prototypeTeamDraftPeople: [],
        prototypeTeamPeopleQuery: "",
        prototypeUserMenu: "",
        ...protoRenewClear(),
      });
      protoRestoreFocus("#astral-fs input[name='proto-team-name']");
      return;
    }
    if (act === "cancel") {
      protoCloseModal("team");
      return;
    }
    if (act === "all") {
      const fold = protoUsersFold();
      protoCommitPeopleFolds({
        prototypeTeam: fold.kind === "all" ? "closed" : "all",
        prototypeUserMenu: "",
        prototypeUserOpen: "",
        ...protoRenewClear(),
      });
      protoRestoreFocus('#astral-fs [data-proto-team="all"]');
      return;
    }
  }
  const teamPick = event.target.closest("[data-proto-team-id]");
  if (teamPick) {
    const id = teamPick.dataset.protoTeamId;
    const fold = protoUsersFold();
    const sameBucket = fold.kind === "bucket" && fold.id === id;
    const sameTeam = fold.kind === "team" && fold.id === id;
    const parentOpen = fold.kind === "team" && fold.parent === id;
    let next = id;
    if (sameTeam) next = fold.parent || "closed";
    else if (sameBucket || parentOpen) next = "closed";
    protoCommitPeopleFolds({
      prototypeTeam: next,
      prototypeUserMenu: "",
      prototypeUserOpen: "",
      ...protoRenewClear(),
    });
    protoRestoreFocus(`#astral-fs [data-proto-team-id="${CSS.escape(id)}"]`);
    return;
  }
  const menuBtn = event.target.closest("[data-proto-user-menu]");
  if (menuBtn) {
    const id = menuBtn.dataset.protoUserMenu;
    setProto({ prototypeUserMenu: store.prototypeUserMenu === id ? "" : id });
    return;
  }
  const personBtn = event.target.closest("[data-proto-person]");
  if (personBtn) {
    if (!protoCanManagePeople()) return;
    const id = personBtn.dataset.protoPerson;
    setProto({
      prototypeUserOpen: store.prototypeUserOpen === id ? "" : id,
      prototypeUserMenu: "",
      prototypePersonTeamQuery: "",
      prototypePersonSitesQuery: "",
      prototypeContractFileError: false,
      ...protoRenewClear(),
    });
    protoRestoreFocus("#astral-fs [data-proto-person-close]");
    return;
  }
  const personClose = event.target.closest("[data-proto-person-close]");
  if (personClose) {
    const id = String(store.prototypeUserOpen || "");
    setProto(protoClosePersonPatch());
    if (id) protoRestoreFocus(`#astral-fs [data-proto-person="${CSS.escape(id)}"]`);
    return;
  }
  if (event.target.closest("[data-proto-contract='replace']")) return;
  const contractFile = event.target.closest("[data-proto-contract='download']");
  if (contractFile) {
    const person = protoOpenPerson();
    if (person) protoDownloadContract(person.id);
    return;
  }
  const renewBtn = event.target.closest("[data-proto-renew]");
  if (renewBtn) {
    const act = renewBtn.dataset.protoRenew;
    if (act === "file") return;
    if (!protoCanAdminCompany()) return;
    if (act === "open") {
      const person = protoOpenPerson();
      if (!person) return;
      const from = protoFormatUkDate(protoFromIso(person.expiresFrom || PROTO_TEMP_FROM));
      const to = protoFormatUkDate(protoFromIso(person.expiresOn || PROTO_TEMP_TO));
      setProto({
        prototypeRenewForm: true,
        prototypeRenewPerson: person.id,
        prototypeRenewFrom: from,
        prototypeRenewTo: to,
        prototypeRenewFileName: "",
        prototypeRenewFileError: false,
        prototypeUserForm: false,
        prototypeTeamForm: false,
      });
      return;
    }
    if (act === "cancel") {
      protoCloseModal("renew");
      return;
    }
    return;
  }
  const withdrawBtn = event.target.closest("[data-proto-user-withdraw]");
  if (withdrawBtn) {
    if (!protoCanManagePeople()) return;
    const id = withdrawBtn.dataset.protoUserWithdraw;
    setProto({
      prototypeInvitedUsers: protoInvitedUsers().filter((item) => item.id !== id),
      prototypeTeams: protoTeams().map((team) => ({
        ...team,
        people: team.people.filter((personId) => personId !== id),
      })),
      prototypeUserMenu: "",
      prototypeUserOpen: store.prototypeUserOpen === id ? "" : store.prototypeUserOpen,
    });
    return;
  }
  const draftRemove = event.target.closest("[data-proto-user-draft-remove]");
  if (draftRemove) {
    const index = Number(draftRemove.dataset.protoUserDraftRemove);
    const next = protoUserDrafts().filter((_, i) => i !== index);
    setProto({
      prototypeUserForm: true,
      prototypeUserDrafts: next.length ? next : [""],
    });
    protoRestoreFocus("#astral-fs [data-proto-user-draft]");
    return;
  }
  const hoverMore = event.target.closest("[data-proto-hover-more]");
  if (hoverMore) {
    event.preventDefault();
    event.stopPropagation();
    protoToggleHoverMore(hoverMore);
    return;
  }
  const hitAct = event.target.closest("[data-proto-hit]");
  if (hitAct) {
    if (hitAct.dataset.protoHit === "clear") {
      setProto({
        prototypeChartPoint: null,
        prototypeOpenQuery: "",
        prototypeQueryForm: false,
        prototypeQuerySite: "",
        prototypeQueryCommentOpen: false,
      });
      return;
    }
    const wrap = hitAct.closest("[data-proto-chart]");
    const chart = wrap?.dataset.protoChart || "";
    const point = protoPointFromHit(hitAct, chart);
    const time = point?.time || "";
    const meterId = point?.meterId || "";
    if (!chart || !time) return;
    const cur = protoChartPoint();
    const same = Boolean(
      cur && cur.chart === chart && cur.time === time && (cur.meterId || "") === meterId
    );
    protoPinUser = null;
    if (same) {
      protoPlaceQueryPinSoon();
      return;
    }
    const found = protoQueriesOnThisGraph().filter(
      (row) =>
        row.point &&
        protoMarkSitsAt(row.point, time) &&
        (!meterId ||
          !row.meterId ||
          row.meterId === meterId ||
          Boolean(protoSiteByMeter(meterId)?.meters?.some((item) => item.id === row.meterId)))
    );
    setProto({
      prototypeChartPoint: point,
      prototypeOpenQuery: found[0]?.ref || "",
      prototypeQueryForm: Boolean(!found[0] && protoCanAct()),
      prototypeQuerySite: "",
      prototypeQueryCommentOpen: false,
    });
    if (hitAct.matches("tr")) {
      protoRestoreFocus(`#astral-fs tr[data-proto-hit][data-tip-time="${CSS.escape(time)}"]`);
    }
    return;
  }
  const queryOpen = event.target.closest("[data-proto-query-open]");
  if (queryOpen && !event.target.closest(".astral-ack")) {
    if (event.target.closest(".astral-person.is-tip")) return;
    protoGoToQuery(protoQueryByRef(queryOpen.dataset.protoQueryOpen));
    return;
  }
  const alertBtn = event.target.closest("[data-proto-alert]");
  if (alertBtn) {
    protoGoToAlert(protoAlertById(alertBtn.dataset.protoAlert));
    return;
  }
  const undoBtn = event.target.closest("[data-proto-alert-undo]");
  if (undoBtn) {
    if (!protoCanAct()) return;
    const id = undoBtn.dataset.protoAlertUndo;
    if (!id) return;
    setProto({
      prototypeAlertAck: protoAlertAckRecords().filter((row) => row.id !== id),
      prototypeAlertUndo: [...new Set([...protoAlertUndoIds(), id])],
      prototypeAckOpen: "",
    });
    return;
  }
  const ackBtn = event.target.closest("[data-proto-ack]");
  if (ackBtn) {
    if (!protoCanAct()) return;
    const kind = ackBtn.dataset.protoAck;
    const id = ackBtn.dataset.protoAckId;
    if (!kind || !id) return;
    const key = protoAckKey(kind, id);
    const open = store.prototypeAckOpen === key ? "" : key;
    setProto({
      prototypeAckOpen: open,
      prototypeExportOpen: false,
      prototypeDateOpen: false,
    });
    return;
  }
  const resolveBtn = event.target.closest("[data-proto-resolve]");
  if (resolveBtn) {
    if (!protoCanAct()) return;
    const kind = resolveBtn.dataset.protoResolve;
    const id = resolveBtn.dataset.protoResolveId;
    const reason = protoResolveId(resolveBtn.dataset.protoResolveReason);
    if (!id || !reason) return;
    if (kind === "alert") {
      const next = protoAlertAckRecords().filter((row) => row.id !== id);
      next.push({ id, reason });
      setProto({
        prototypeAlertAck: next,
        prototypeAlertUndo: protoAlertUndoIds().filter((item) => item !== id),
        prototypeAckOpen: "",
      });
      return;
    }
    if (kind === "query") {
      setProto({
        prototypeQueryResolve: { ...protoQueryResolveMap(), [id]: reason },
        prototypeAckOpen: "",
      });
    }
    return;
  }
  const queryBtn = event.target.closest("[data-proto-query]");
  if (queryBtn) {
    setProto({
      prototypeQueryForm: false,
      prototypeQuerySite: "",
      prototypeChartPoint: null,
      prototypeOpenQuery: "",
    });
    return;
  }
  const runBtn = event.target.closest("[data-proto-report-run]");
  if (runBtn) {
    if (!protoCanAct()) return;
    setProto({ prototypeReportRun: runBtn.dataset.protoReportRun || "" });
    return;
  }
  const walkBtn = event.target.closest("[data-proto-walk]");
  if (walkBtn) {
    const next = walkBtn.dataset.protoWalk;
    setProto({
      prototypeWalkOpen: next === "hide" ? false : !store.prototypeWalkOpen,
    });
    return;
  }
  const settingsBtn = event.target.closest("[data-proto-settings]");
  if (settingsBtn) {
    const section = settingsBtn.dataset.protoSettings;
    if (section === "users" && store.prototypeUserOpen) {
      setProto(protoClosePersonPatch());
      protoRestoreFocus('#astral-fs [data-proto-settings="users"]');
      return;
    }
    protoGoSettings(section);
    return;
  }
  const viewBtn = event.target.closest("[data-proto-view]");
  if (viewBtn) {
    const view = viewBtn.dataset.protoView;
    if (view === "users" || view === "settings") {
      protoGoSettings(view === "users" ? "users" : "organisation");
      return;
    }
    setProto({
      activePrototypeView: view,
      prototypeFullscreen: true,
      ...(view === "companies" ? {} : { prototypeCompanyQuery: "" }),
      ...protoClosePersonPatch(),
    });
    return;
  }
  const comparePick = event.target.closest("[data-proto-compare-id]");
  if (comparePick) {
    const id = comparePick.dataset.protoCompareId;
    const ids = protoCompareIds();
    const adding = !ids.includes(id);
    const next = adding ? [...ids, id] : ids.filter((item) => item !== id);
    const cur = Array.isArray(store.prototypeCompareMeters) ? store.prototypeCompareMeters : [];
    let nextMeters = cur;
    if (cur.length) {
      const pickIds = protoMetersForComparePick(id).map((item) => item.id);
      nextMeters = adding
        ? [...new Set([...cur, ...pickIds])]
        : cur.filter((mid) => !pickIds.includes(mid));
    }
    const curSites = Array.isArray(store.prototypeCompareSites) ? store.prototypeCompareSites : [];
    let nextSites = curSites;
    if (curSites.length && protoCompareLevel() === "group") {
      const pickSites = (protoGroup(id)?.sites || []).map((site) => protoSiteId(site)).filter(Boolean);
      nextSites = adding
        ? [...new Set([...curSites, ...pickSites])]
        : curSites.filter((sid) => !pickSites.includes(sid));
    }
    setProto({
      prototypeCompareIds: next,
      prototypeCompareMeters: next.length ? nextMeters : [],
      prototypeCompareSites: next.length ? nextSites : [],
      prototypeCompareOpen: true,
      prototypeCompareLevel: protoCompareLevel(),
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
    });
    protoRestoreFocus(`#astral-fs [data-proto-compare-id="${CSS.escape(id)}"]`);
    return;
  }
  const compareBtn = event.target.closest("[data-proto-compare]");
  if (compareBtn && compareBtn.dataset.protoCompare) {
    const act = compareBtn.dataset.protoCompare;
    if (act === "clear") {
      setProto({
        prototypeCompareIds: [],
        prototypeCompareMeters: [],
        prototypeCompareSites: [],
        prototypeCompareOpen: false,
        ...protoCompareModalReset(),
      });
      return;
    }
    if (act === "done") {
      setProto({ prototypeCompareOpen: false, ...protoCompareModalReset() });
      return;
    }
    setProto({
      prototypeCompareOpen: true,
      ...protoCompareModalReset(),
      prototypeTreeFilterOpen: false,
      prototypeCompareLevel: protoCompareLevel(),
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
    });
    protoRestoreFocus("#astral-fs input[name='proto-compare-query']");
    return;
  }
  const meterSettings = event.target.closest("[data-proto-meter-settings]");
  if (meterSettings) {
    const id = String(meterSettings.dataset.protoMeterSettings || "");
    if (!id) return;
    protoCommitPortfolioTree(
      {
        prototypeMeterSettings: id,
        prototypeMeterOpen: id,
        prototypeMeterFold: "",
        prototypePane: "profile",
      },
      { pane: true }
    );
    return;
  }
  const meterFold = event.target.closest("[data-proto-meter-fold]");
  if (meterFold) {
    const id = String(meterFold.dataset.protoMeterFold || "");
    const next = protoMeterFoldId() === id ? "" : id;
    protoPatchStay({ prototypeMeterFold: next });
    if (!document.querySelector("#astral-fs .astral-meter-fold")) {
      render();
      return;
    }
    protoSyncMeterFolds();
    return;
  }
  const meterOpen = event.target.closest("[data-proto-meter-open]");
  if (meterOpen) {
    const id = meterOpen.dataset.protoMeterOpen;
    const current = String(store.prototypeMeterOpen || "");
    protoCommitPortfolioTree(
      {
        prototypeMeterOpen: current === id ? "none" : id,
        ...protoMeterSettingsReset(),
        prototypePane: "profile",
      },
      { pane: true }
    );
    return;
  }
  const meterClose = event.target.closest("[data-proto-meter-close]");
  if (meterClose) {
    protoCommitPortfolioTree(
      {
        ...protoMeterSettingsReset(),
        prototypePane: "profile",
      },
      { pane: true }
    );
    return;
  }
  const paneBtn = event.target.closest("[data-proto-pane]");
  if (paneBtn) {
    setProto({
      prototypePane: protoKnownPane(paneBtn.dataset.protoPane),
      prototypeChartPoint: null,
      prototypeMeterOpen: "none",
      ...protoMeterSettingsReset(),
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
    });
    return;
  }
  const groupBtn = event.target.closest("[data-proto-group]");
  if (groupBtn) {
    const id = groupBtn.dataset.protoGroup;
    const sameGroup = store.prototypeScope === "group" && store.prototypeGroup === id;
    const fromTree = Boolean(groupBtn.closest(".astral-tree") && groupBtn.matches("button"));
    const patch = protoIsAllGroup(id)
      ? {
          prototypeScope: "group",
          prototypeGroup: "all",
          prototypeChannel: "all",
          prototypePane: sameGroup ? protoPaneId() : "consumption",
          prototypeChartPoint: sameGroup ? store.prototypeChartPoint : null,
          activePrototypeView: "portfolio",
          prototypeFullscreen: true,
          prototypeMeterOpen: "none",
          ...protoMeterSettingsReset(),
          ...(sameGroup ? {} : { prototypeGroupSites: [], prototypePaneMeterKinds: null }),
          ...protoComparePatch("group", "all"),
        }
      : {
          prototypeScope: "group",
          prototypeGroup: id,
          prototypeGroupClosed: protoGroupClosed().includes(id)
            ? protoClosedExcept(id)
            : protoClosedAll(),
          prototypeChannel: "all",
          prototypePane: sameGroup ? protoPaneId() : "consumption",
          prototypeChartPoint: sameGroup ? store.prototypeChartPoint : null,
          activePrototypeView: "portfolio",
          prototypeFullscreen: true,
          prototypeMeterOpen: "none",
          ...protoMeterSettingsReset(),
          ...(sameGroup ? {} : { prototypeGroupSites: [], prototypePaneMeterKinds: null }),
          ...protoComparePatch("group", id),
        };
    if (fromTree) {
      protoCommitPortfolioTree(patch, { pane: !sameGroup });
      return;
    }
    setProto(patch);
    return;
  }
  const siteBtn = event.target.closest("[data-proto-site]");
  if (siteBtn) {
    const meterId = siteBtn.dataset.protoSite;
    const site = protoSiteByMeter(meterId);
    const parent = protoGroupForSite(site);
    const sameSite = store.prototypeScope === "site" && store.activePrototypeMeter === meterId;
    const patch = {
      activePrototypeMeter: meterId,
      prototypeScope: "site",
      prototypeGroup: parent?.id || "",
      prototypeGroupClosed: parent ? protoClosedExcept(parent.id) : protoGroupClosed(),
      prototypeChannel: "all",
      ...protoSiteMeterPatch(sameSite ? protoSiteMeterIds(site) : [], site, { empty: sameSite }),
      ...(sameSite ? {} : { prototypePaneMeterKinds: null }),
      prototypePane: sameSite ? protoPaneId() : "consumption",
      prototypeChartPoint: sameSite ? store.prototypeChartPoint : null,
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
      prototypeMeterOpen: "none",
      ...protoMeterSettingsReset(),
      ...protoComparePatch("site", meterId),
    };
    if (siteBtn.closest(".astral-tree") && siteBtn.matches("button")) {
      protoCommitPortfolioTree(patch, { pane: true });
      return;
    }
    setProto(patch);
    return;
  }
  const meterPill = event.target.closest("[data-proto-meter-pill]");
  if (meterPill) {
    protoToggleSiteMeter(meterPill.dataset.protoMeterPill);
    return;
  }
  const chartFlow = event.target.closest("[data-proto-chart-flow]");
  if (chartFlow) {
    protoToggleChartFlow(chartFlow.dataset.protoChartFlow);
    return;
  }
  const chartSlice = event.target.closest("[data-proto-chart-slice]");
  if (chartSlice) {
    protoToggleChartSlice(chartSlice.dataset.protoChartSlice);
    return;
  }
  const pillsMore = event.target.closest("[data-proto-pills]");
  if (pillsMore) {
    setProto({ prototypePillsOpen: pillsMore.dataset.protoPills !== "hide" });
    protoRestoreFocus("#astral-fs [data-proto-pills]");
    return;
  }
  const sitePill = event.target.closest("[data-proto-site-pill]");
  if (sitePill) {
    protoToggleGroupSite(sitePill.dataset.protoSitePill);
    return;
  }
  const channelBtn = event.target.closest("[data-proto-channel]");
  if (channelBtn) {
    const channel = channelBtn.dataset.protoChannel;
    if (store.prototypeScope === "group") {
      setProto({
        prototypeChannel: channel,
        prototypeScope: "group",
        prototypeChartPoint: null,
        activePrototypeView: "portfolio",
        prototypeFullscreen: true,
      });
      return;
    }
    const site = protoSiteByMeter(store.activePrototypeMeter);
    const flow = protoSiteViewFlow(site);
    const list = channel === "out" ? flow.outgoing : flow.incoming.length ? flow.incoming : flow.outgoing;
    const meter = list[0];
    const patch = {
      prototypeChannel: channel,
      prototypeScope: "site",
      prototypeChartPoint: null,
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
    };
    if (meter) patch.activePrototypeMeter = meter.id;
    setProto(patch);
    return;
  }
  const meterBtn = event.target.closest("[data-proto-meter]");
  if (meterBtn) {
    const meter = protoMeter(meterBtn.dataset.protoMeter);
    const site = protoSiteByMeter(meterBtn.dataset.protoMeter);
    setProto({
      activePrototypeMeter: meterBtn.dataset.protoMeter,
      prototypeScope: "site",
      ...protoSiteMeterPatch([meterBtn.dataset.protoMeter], site),
      prototypeChannel: meter?.direction === "Export" ? "out" : "in",
      prototypePane: "consumption",
      activePrototypeView: "portfolio",
      prototypeFullscreen: true,
      ...protoComparePatch("meter", meterBtn.dataset.protoMeter),
    });
    return;
  }
  const facetBtn = event.target.closest("[data-proto-facet]");
  if (facetBtn) {
    setProto({ activePrototypeFacet: protoAlertFacetId(facetBtn.dataset.protoFacet) });
    return;
  }
  const rangeBtn = event.target.closest("[data-proto-range]");
  if (rangeBtn) {
    setProto({ prototypeRange: rangeBtn.dataset.protoRange, prototypeChartPoint: null });
    return;
  }
  const mixUnit = event.target.closest("[data-proto-mix-unit]");
  if (mixUnit) {
    protoPickConsumptionUnit(mixUnit.dataset.protoMixUnit);
    return;
  }
  const filterSectionBtn = event.target.closest("[data-proto-filter-section-toggle]");
  if (filterSectionBtn) {
    protoToggleFilterSection(filterSectionBtn.dataset.protoFilterSectionToggle);
    return;
  }
  const paneFilterBtn = event.target.closest("[data-proto-pane-filter], [data-proto-pane-filter-all]");
  if (paneFilterBtn) {
    const groupAll = paneFilterBtn.dataset.protoPaneFilterAll;
    if (groupAll) {
      protoTogglePaneFilterGroup(groupAll);
      return;
    }
    const act = paneFilterBtn.dataset.protoPaneFilter;
    const scope = ".astral-detail-tools";
    if (act === "toggle") {
      setProto({
        prototypePaneFilterOpen: !store.prototypePaneFilterOpen,
        prototypeTreeFilterOpen: false,
        prototypeCompareFilterOpen: false,
        prototypeDateOpen: false,
        prototypeExportOpen: false,
        prototypeSelectOpen: "",
        prototypeAckOpen: "",
      });
      protoRestoreFocus(`#astral-fs ${scope} [data-proto-pane-filter='toggle']`);
      return;
    }
    if (act === "clear") {
      setProto({
        prototypePaneFilters: [],
        prototypePaneMeterKinds: null,
        prototypeChartSliceOff: [],
        prototypePaneFilterOpen: false,
      });
      protoRestoreFocus(`#astral-fs ${scope} [data-proto-pane-filter='toggle']`);
      return;
    }
    if (act === "in" || act === "out") {
      protoToggleChartFlow(act);
      return;
    }
    if (act === "electricity" || act === "gas" || act === "water") {
      protoTogglePaneMeterKind(act);
      return;
    }
    const fromPill = Boolean(paneFilterBtn.closest(".astral-filter-pill"));
    const cur = protoPaneFilterIds();
    const next = fromPill
      ? cur.filter((id) => id !== act)
      : cur.includes(act)
        ? cur.filter((id) => id !== act)
        : [...cur, act];
    setProto({
      prototypePaneFilterOpen: fromPill ? Boolean(store.prototypePaneFilterOpen) : true,
        prototypePaneFilters: next.filter((id) => PROTO_PANE_FILTER_IDS.includes(id)),
    });
    protoRestoreFocus(
      fromPill
        ? `#astral-fs ${scope} [data-proto-pane-filter='toggle']`
        : `#astral-fs ${scope} [data-proto-pane-filter="${CSS.escape(act)}"]`
    );
    return;
  }
  const treeFilterBtn = event.target.closest("[data-proto-tree-filter], [data-proto-tree-filter-all]");
  if (treeFilterBtn) {
    const groupAll = treeFilterBtn.dataset.protoTreeFilterAll;
    if (groupAll) {
      protoToggleTreeFilterGroup(groupAll);
      return;
    }
    const act = treeFilterBtn.dataset.protoTreeFilter;
    const scope = ".astral-tree-tools";
    if (act === "toggle") {
      setProto({
        prototypeTreeFilterOpen: !store.prototypeTreeFilterOpen,
        prototypePaneFilterOpen: false,
        prototypeCompareFilterOpen: false,
        prototypeDateOpen: false,
        prototypeExportOpen: false,
        prototypeSelectOpen: "",
        prototypeAckOpen: "",
      });
      protoRestoreFocus(`#astral-fs ${scope} [data-proto-tree-filter='toggle']`);
      return;
    }
    if (act === "clear") {
      setProto({
        prototypeTreeFilters: [],
        prototypeTreeFilterOpen: false,
      });
      protoRestoreFocus(`#astral-fs ${scope} [data-proto-tree-filter='toggle']`);
      return;
    }
    const fromPill = Boolean(treeFilterBtn.closest(".astral-filter-pill"));
    const cur = protoTreeFilterIds();
    const next = fromPill
      ? cur.filter((id) => id !== act)
      : cur.includes(act)
        ? cur.filter((id) => id !== act)
        : [...cur, act];
    setProto({
      prototypeTreeFilterOpen: fromPill ? Boolean(store.prototypeTreeFilterOpen) : true,
      prototypeTreeFilters: next.filter((id) => PROTO_TREE_FILTER_IDS.includes(id)),
    });
    protoRestoreFocus(
      fromPill
        ? `#astral-fs ${scope} [data-proto-tree-filter='toggle']`
        : `#astral-fs ${scope} [data-proto-tree-filter="${CSS.escape(act)}"]`
    );
    return;
  }
  const compareSortBtn = event.target.closest("[data-proto-compare-sort]");
  if (compareSortBtn) {
    const act = compareSortBtn.dataset.protoCompareSort;
    const fromPill = Boolean(compareSortBtn.closest(".astral-filter-pill"));
    const sortKey = protoFilterSectionKey("astral-compare-filter-menu", "sort");
    if (!fromPill && protoFilterSectionOpen === sortKey) protoFilterSectionOpen = "";
    setProto({
      prototypeCompareSort: act === "action" || act === "count" ? act : "name",
      prototypeCompareFilterOpen: fromPill ? Boolean(store.prototypeCompareFilterOpen) : true,
      prototypeTreeFilterOpen: false,
    });
    protoRestoreFocus(
      fromPill
        ? "#astral-fs [data-proto-compare-filter='toggle']"
        : `#astral-fs [data-proto-filter-section-toggle="${CSS.escape(sortKey)}"]`
    );
    return;
  }
  const compareFilterBtn = event.target.closest("[data-proto-compare-filter], [data-proto-compare-filter-all]");
  if (compareFilterBtn) {
    const groupAll = compareFilterBtn.dataset.protoCompareFilterAll;
    if (groupAll) {
      protoToggleCompareFilterGroup(groupAll);
      return;
    }
    const act = compareFilterBtn.dataset.protoCompareFilter;
    if (act === "toggle") {
      setProto({
        prototypeCompareFilterOpen: !store.prototypeCompareFilterOpen,
        prototypeTreeFilterOpen: false,
        prototypePaneFilterOpen: false,
        prototypeDateOpen: false,
        prototypeExportOpen: false,
        prototypeSelectOpen: "",
        prototypeAckOpen: "",
      });
      return;
    }
    if (act === "clear") {
      setProto({
        prototypeCompareFilters: [],
        prototypeCompareSort: "name",
        prototypeCompareFilterOpen: false,
      });
      protoRestoreFocus("#astral-fs [data-proto-compare-filter='toggle']");
      return;
    }
    const fromPill = Boolean(compareFilterBtn.closest(".astral-filter-pill"));
    const cur = protoCompareFilterIds();
    const next = fromPill
      ? cur.filter((id) => id !== act)
      : cur.includes(act)
        ? cur.filter((id) => id !== act)
        : [...cur, act];
    setProto({
      prototypeCompareFilterOpen: fromPill ? Boolean(store.prototypeCompareFilterOpen) : true,
      prototypeCompareFilters: next.filter((id) => PROTO_TREE_FILTER_IDS.includes(id)),
    });
    protoRestoreFocus(
      fromPill
        ? "#astral-fs [data-proto-compare-filter='toggle']"
        : `#astral-fs [data-proto-compare-filter="${CSS.escape(act)}"]`
    );
    return;
  }
  const exportBtn = event.target.closest("[data-proto-export]");
  if (exportBtn) {
    if (!protoCanAct()) return;
    const act = exportBtn.dataset.protoExport;
    if (act === "toggle") {
      setProto({
        prototypeExportOpen: !store.prototypeExportOpen,
        prototypeDateOpen: false,
        prototypeTreeFilterOpen: false,
        prototypePaneFilterOpen: false,
        prototypeUserRoleFilterOpen: false,
        prototypeSelectOpen: "",
        prototypeAckOpen: "",
      });
      return;
    }
    const fileId = exportBtn.dataset.protoFile;
    if (act === "csv" || act === "pdf") {
      protoQueueExport(act, fileId);
      return;
    }
    setProto({ prototypeExportOpen: false });
    return;
  }
  const userFilterBtn = event.target.closest("[data-proto-user-filter], [data-proto-user-filter-all]");
  if (userFilterBtn) {
    const groupAll = userFilterBtn.dataset.protoUserFilterAll;
    if (groupAll) {
      protoToggleUserFilterGroup(groupAll);
      return;
    }
    const act = userFilterBtn.dataset.protoUserFilter;
    if (act === "toggle") {
      setProto({
        prototypeUserRoleFilterOpen: !store.prototypeUserRoleFilterOpen,
        prototypeExportOpen: false,
        prototypeDateOpen: false,
        prototypeTreeFilterOpen: false,
        prototypePaneFilterOpen: false,
        prototypeDownloadFilterOpen: false,
        prototypeCompareFilterOpen: false,
        prototypeSelectOpen: "",
        prototypeAckOpen: "",
        prototypeUserMenu: "",
      });
      protoRestoreFocus("#astral-fs [data-proto-user-filter='toggle']");
      return;
    }
    if (act === "clear") {
      setProto({
        prototypeUserRoleFilter: [],
        prototypeUserRoleFilterOpen: false,
      });
      protoRestoreFocus("#astral-fs [data-proto-user-filter='toggle']");
      return;
    }
    const fromPill = Boolean(userFilterBtn.closest(".astral-filter-pill"));
    const cur = protoUserRoleFilterIds();
    const next = fromPill
      ? cur.filter((id) => id !== act)
      : cur.includes(act)
        ? cur.filter((id) => id !== act)
        : [...cur, act];
    setProto({
      prototypeUserRoleFilterOpen: fromPill ? Boolean(store.prototypeUserRoleFilterOpen) : true,
      prototypeUserRoleFilter: protoUserRoleFilterIds(next),
    });
    protoRestoreFocus(
      fromPill
        ? "#astral-fs [data-proto-user-filter='toggle']"
        : `#astral-fs [data-proto-user-filter="${CSS.escape(act)}"]`
    );
    return;
  }
  const downloadFilterBtn = event.target.closest("[data-proto-download-filter], [data-proto-download-filter-all]");
  if (downloadFilterBtn) {
    const groupAll = downloadFilterBtn.dataset.protoDownloadFilterAll;
    if (groupAll) {
      protoToggleDownloadFilterGroup(groupAll);
      return;
    }
    const act = downloadFilterBtn.dataset.protoDownloadFilter;
    if (act === "toggle") {
      setProto({
        prototypeDownloadFilterOpen: !store.prototypeDownloadFilterOpen,
        prototypeTreeFilterOpen: false,
        prototypeCompareFilterOpen: false,
        prototypeDateOpen: false,
        prototypeExportOpen: false,
        prototypeSelectOpen: "",
        prototypeAckOpen: "",
      });
      protoRestoreFocus("#astral-fs [data-proto-download-filter='toggle']");
      return;
    }
    if (act === "clear") {
      setProto({
        prototypeDownloadFilters: [],
        prototypeDownloadFilterOpen: false,
      });
      protoRestoreFocus("#astral-fs [data-proto-download-filter='toggle']");
      return;
    }
    const fromPill = Boolean(downloadFilterBtn.closest(".astral-filter-pill"));
    const cur = protoDownloadFilterIds();
    const next = fromPill
      ? cur.filter((id) => id !== act)
      : cur.includes(act)
        ? cur.filter((id) => id !== act)
        : [...cur, act];
    setProto({
      prototypeDownloadFilterOpen: fromPill ? Boolean(store.prototypeDownloadFilterOpen) : true,
      prototypeDownloadFilters: protoDownloadFilterIds(next),
    });
    protoRestoreFocus(
      fromPill
        ? "#astral-fs [data-proto-download-filter='toggle']"
        : `#astral-fs [data-proto-download-filter="${CSS.escape(act)}"]`
    );
    return;
  }
  const downloadsBtn = event.target.closest("[data-proto-downloads]");
  if (downloadsBtn) {
    const act = downloadsBtn.dataset.protoDownloads;
    if (act === "hide") {
      protoClearExportNoticeTimer();
      setProto({ prototypeExportNotice: null });
      return;
    }
    if (act === "open") {
      protoClearExportNoticeTimer();
      setProto({
        activePrototypeView: "downloads",
        prototypeFullscreen: true,
        prototypeExportNotice: null,
      });
      return;
    }
    return;
  }
  const downloadBtn = event.target.closest("[data-proto-download]");
  if (downloadBtn) {
    if (!protoCanAct()) return;
    const item = protoDownloads().find((row) => row.id === downloadBtn.dataset.protoDownload);
    if (!item) return;
    if (!protoDownloadReady(item)) return;
    protoStartDownloadDemo(item);
    return;
  }
  const csvBtn = event.target.closest("[data-proto-csv]");
  if (csvBtn) {
    protoCsv(csvBtn.dataset.protoCsv);
    return;
  }
  const reportSubmit = event.target.closest("[data-proto-report-edit-form] button[type='submit']");
  if (reportSubmit && (store.prototypeSelectOpen || store.prototypeReportCalOpen)) {
    event.preventDefault();
    store.prototypeSelectOpen = "";
    store.prototypeReportCalOpen = false;
    reportSubmit.form?.requestSubmit();
    return;
  }
  if (store.prototypeUserMenu && !event.target.closest(".astral-people-more, .astral-people-menu")) {
    setProto({ prototypeUserMenu: "" });
  }
  if (store.prototypeAccountOpen && !event.target.closest(".astral-account, .astral-account-menu")) {
    setProto({ prototypeAccountOpen: false });
  }
  if (store.prototypeNoticeOpen && !event.target.closest(".astral-notice, .astral-notice-menu")) {
    setProto({ prototypeNoticeOpen: false });
  }
  if (
    store.prototypeDateOpen &&
    !store.prototypeDateCustomOpen &&
    !event.target.closest(".astral-date, .astral-date-menu")
  ) {
    setProto({ prototypeDateOpen: false });
  }
  if (store.prototypeSelectOpen && !event.target.closest(".astral-select, .astral-select-menu")) {
    setProto({ prototypeSelectOpen: "" });
  }
  if (
    store.prototypeReportCalOpen &&
    !event.target.closest(".astral-day-cal, .astral-day-cal-menu")
  ) {
    setProto({ prototypeReportCalOpen: false });
  }
  if (store.prototypeExportOpen && !event.target.closest(".astral-export, .astral-export-menu")) {
    setProto({ prototypeExportOpen: false });
  }
  if (
    store.prototypeTreeFilterOpen &&
    !event.target.closest(".astral-tree-tools .astral-filter, .astral-filter-menu")
  ) {
    setProto({ prototypeTreeFilterOpen: false });
  }
  if (
    store.prototypePaneFilterOpen &&
    !event.target.closest(".astral-detail-tools .astral-filter") &&
    !event.target.closest(".astral-pane-head > .astral-filter-pills") &&
    !event.target.closest(".astral-filter-menu")
  ) {
    setProto({ prototypePaneFilterOpen: false });
  }
  if (
    store.prototypeCompareFilterOpen &&
    !event.target.closest(".astral-compare-tools .astral-filter, .astral-filter-menu")
  ) {
    setProto({ prototypeCompareFilterOpen: false });
  }
  if (
    store.prototypeDownloadFilterOpen &&
    !event.target.closest(".astral-downloads .astral-filter, .astral-filter-menu")
  ) {
    setProto({ prototypeDownloadFilterOpen: false });
  }
  if (
    store.prototypeUserRoleFilterOpen &&
    !event.target.closest(".astral-people-tools .astral-filter") &&
    !event.target.closest(".astral-pane-head > .astral-filter-pills") &&
    !event.target.closest(".astral-filter-menu")
  ) {
    setProto({ prototypeUserRoleFilterOpen: false });
  }
  if (store.prototypeAckOpen && !event.target.closest(".astral-ack, .astral-ack-menu")) {
    setProto({ prototypeAckOpen: "" });
  }
  if (store.prototypeQueryMore && !event.target.closest(".astral-query-more, .astral-ack-menu")) {
    setProto({ prototypeQueryMore: "" });
  }
  if (store.prototypePointTagOpen && !event.target.closest(".astral-point-tags, .astral-point-tag-menu")) {
    setProto(protoPointTagClear());
  }
  if (
    store.prototypeColourOpen &&
    !event.target.closest(".astral-brand-row.is-open") &&
    !event.target.closest(".astral-picker")
  ) {
    setProto({ prototypeColourOpen: "" });
  }
}

function onPrototypeInput(event) {
  if (protoCommentArea(event.target)) {
    protoOpenComment(event.target);
    protoSyncQuerySubmit(event.target);
  } else protoGrowComment(event.target);
  const authInput = event.target.closest("[data-proto-auth] input");
  if (authInput) {
    if (authInput.name === "proto-auth-email") {
      store.prototypeAuthEmail = authInput.value;
      persistChrome();
    } else if (authInput.name === "proto-auth-company") {
      store.prototypeAuthCompany = authInput.value.slice(0, 80);
      persistChrome();
    } else if (authInput.name === "proto-auth-name") {
      store.prototypeAuthName = authInput.value.slice(0, 80);
      persistChrome();
    } else if (authInput.name === "proto-invite-first") {
      store.prototypeInviteFirst = authInput.value.slice(0, 80);
      persistChrome();
    } else if (authInput.name === "proto-invite-last") {
      store.prototypeInviteLast = authInput.value.slice(0, 80);
      persistChrome();
    }
    protoSyncAuthSubmit(authInput);
    if (
      authInput.hasAttribute("data-proto-code") ||
      authInput.name === "proto-auth-password" ||
      authInput.name === "proto-auth-confirm" ||
      authInput.name === "proto-auth-email" ||
      authInput.name === "proto-auth-company" ||
      authInput.name === "proto-auth-name" ||
      authInput.name === "proto-invite-first" ||
      authInput.name === "proto-invite-last"
    ) {
      if (authInput.hasAttribute("data-proto-code")) protoTypeAuthCode(authInput);
      return;
    }
  }
  const input = event.target.closest("input[name='proto-query']");
  if (input) {
    store.activePrototypeQuery = input.value;
    persistChrome();
    const active = document.activeElement === input;
    const start = input.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-query']", start);
    return;
  }
  const companySearch = event.target.closest("input[name='proto-company-query']");
  if (companySearch) {
    store.prototypeCompanyQuery = companySearch.value;
    persistChrome();
    const active = document.activeElement === companySearch;
    const start = companySearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-company-query']", start);
    return;
  }
  const userSearch = event.target.closest("input[name='proto-user-query']");
  if (userSearch) {
    store.prototypeUserQuery = userSearch.value;
    persistChrome();
    const active = document.activeElement === userSearch;
    const start = userSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-user-query']", start);
    return;
  }
  const teamSearch = event.target.closest("input[name='proto-team-query']");
  if (teamSearch) {
    store.prototypeTeamQuery = teamSearch.value;
    persistChrome();
    const active = document.activeElement === teamSearch;
    const start = teamSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-team-query']", start);
    return;
  }
  const teamName = event.target.closest("input[name='proto-team-name']");
  if (teamName) {
    store.prototypeTeamDraftName = teamName.value.slice(0, 80);
    persistChrome();
    const active = document.activeElement === teamName;
    const start = teamName.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-team-name']", start);
    return;
  }
  const companyName = event.target.closest("input[name='proto-company-name']");
  if (companyName) {
    store.prototypeCompanyDraftName = companyName.value.slice(0, 80);
    store.prototypeCompanyNameError = false;
    persistChrome();
    const active = document.activeElement === companyName;
    const start = companyName.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-company-name']", start);
    return;
  }
  const peopleSearch = event.target.closest("input[name='proto-team-people-query']");
  if (peopleSearch) {
    store.prototypeTeamPeopleQuery = peopleSearch.value.slice(0, 120);
    persistChrome();
    const active = document.activeElement === peopleSearch;
    const start = peopleSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-team-people-query']", start);
    return;
  }
  const reportPeopleSearch = event.target.closest("input[name='proto-report-people-query']");
  if (reportPeopleSearch) {
    store.prototypeReportPeopleQuery = reportPeopleSearch.value.slice(0, 120);
    persistChrome();
    const active = document.activeElement === reportPeopleSearch;
    const start = reportPeopleSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-report-people-query']", start);
    return;
  }
  const reportSiteSearch = event.target.closest("input[name='proto-report-site-query']");
  if (reportSiteSearch) {
    store.prototypeReportSiteQuery = reportSiteSearch.value.slice(0, 120);
    const active = document.activeElement === reportSiteSearch;
    const start = reportSiteSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-report-site-query']", start);
    return;
  }
  const reportField = event.target.closest("input[data-proto-report-field]");
  if (reportField) {
    const draft = protoReportDraft();
    if (!draft || !protoCanEditReports()) return;
    const key = reportField.dataset.protoReportField;
    store.prototypeReportDraft = { ...draft, [key]: reportField.value.slice(0, 400) };
    protoReportRefreshForm();
    return;
  }
  const pointTagSearch = event.target.closest("input[name='proto-point-tag-query']");
  if (pointTagSearch) {
    store.prototypePointTagQuery = pointTagSearch.value.slice(0, 32);
    persistChrome();
    const active = document.activeElement === pointTagSearch;
    const start = pointTagSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-point-tag-query']", start);
    return;
  }
  const personTeamSearch = event.target.closest("input[name='proto-person-team-query']");
  if (personTeamSearch) {
    store.prototypePersonTeamQuery = personTeamSearch.value.slice(0, 120);
    persistChrome();
    const active = document.activeElement === personTeamSearch;
    const start = personTeamSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-person-team-query']", start);
    return;
  }
  const personSitesSearch = event.target.closest("input[name='proto-person-sites-query']");
  if (personSitesSearch) {
    store.prototypePersonSitesQuery = personSitesSearch.value.slice(0, 120);
    persistChrome();
    const active = document.activeElement === personSitesSearch;
    const start = personSitesSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-person-sites-query']", start);
    return;
  }
  const compareSearch = event.target.closest("input[name='proto-compare-query']");
  if (compareSearch) {
    store.prototypeCompareQuery = compareSearch.value;
    persistChrome();
    const active = document.activeElement === compareSearch;
    const start = compareSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-compare-query']", start);
    return;
  }
  const downloadSearch = event.target.closest("input[name='proto-download-query']");
  if (downloadSearch) {
    store.prototypeDownloadQuery = downloadSearch.value.slice(0, 120);
    persistChrome();
    const active = document.activeElement === downloadSearch;
    const start = downloadSearch.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-download-query']", start);
    return;
  }
  const dateField = protoUkDateField(event.target);
  if (dateField) {
    const key = protoUkDateStoreKey(dateField);
    if (!key) return;
    if (dateField.name === "proto-report-start" && !protoCanEditReports()) return;
    if (
      (dateField.name === "proto-renew-from" || dateField.name === "proto-renew-to") &&
      !protoCanAdminCompany()
    ) {
      return;
    }
    const applied = protoApplyUkDateInput(store[key], dateField.value, dateField.selectionStart);
    store[key] = applied.next;
    if (dateField.name === "proto-report-start" && store.prototypeReportCalOpen) {
      const typed = protoFromUkDate(applied.next);
      if (typed) store.prototypeReportCal = protoIso(typed).slice(0, 7);
    }
    persistChrome();
    const active = document.activeElement === dateField;
    render();
    if (active) protoRestoreFocus(`#astral-fs input[name='${dateField.name}']`, applied.caret);
    return;
  }
  const orgName = event.target.closest("input[name='proto-org-name']");
  if (orgName) {
    if (!protoCanManagePeople()) return;
    protoPatchOrg({ name: orgName.value.slice(0, 80) }, false);
    persistChrome();
    const active = document.activeElement === orgName;
    const start = orgName.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-org-name']", start);
    return;
  }
  const meterField = event.target.closest("[data-proto-meter-profile] input");
  if (meterField) {
    const form = meterField.closest("[data-proto-meter-profile]");
    const id = String(form?.getAttribute("data-proto-meter-profile") || "");
    const meter = protoMeters().find((item) => item.id === id);
    if (!form || !meter || !protoCanAct()) return;
    if (meterField.classList.contains("astral-clock-input")) {
      const applied = protoApplyClockInput(meterField.value, meterField.selectionStart);
      meterField.value = applied.next;
      if (document.activeElement === meterField && meterField.setSelectionRange) {
        meterField.setSelectionRange(applied.caret, applied.caret);
      }
    }
    const draft = protoReadMeterProfileForm(form, meter);
    store.prototypeMeterDrafts = { ...protoMeterDrafts(), [meter.id]: draft };
    persistChrome();
    const btn = form.querySelector("button[type='submit']");
    if (btn) btn.disabled = !protoMeterDirty(meter.id);
    return;
  }
  const profileName = event.target.closest("input[name='proto-profile-name']");
  if (profileName) {
    store.prototypeProfileDraftName = profileName.value.slice(0, 80);
    persistChrome();
    const active = document.activeElement === profileName;
    const start = profileName.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-profile-name']", start);
    return;
  }
  const profileTitle = event.target.closest("input[name='proto-profile-title']");
  if (profileTitle) {
    store.prototypeProfileDraftJobTitle = profileTitle.value.slice(0, 80);
    persistChrome();
    const active = document.activeElement === profileTitle;
    const start = profileTitle.selectionStart;
    render();
    if (active) protoRestoreFocus("#astral-fs input[name='proto-profile-title']", start);
    return;
  }
  const userDraft = event.target.closest("[data-proto-user-draft]");
  if (userDraft) {
    const index = Number(userDraft.dataset.protoUserDraft);
    const drafts = protoUserDrafts();
    drafts[index] = userDraft.value;
    store.prototypeUserDrafts = drafts;
    persistChrome();
    const active = document.activeElement === userDraft;
    const start = userDraft.selectionStart;
    render();
    if (active) {
      protoRestoreFocus(`#astral-fs [data-proto-user-draft="${index}"]`, start);
    }
    return;
  }
  const pictureFile = event.target.closest("[data-proto-picture='file']");
  if (pictureFile) {
    if (event.type !== "change" || !pictureFile.files || !pictureFile.files[0]) return;
    const blob = pictureFile.files[0];
    const kind = protoPictureFileKind(blob);
    if (!kind || blob.size > 400000) {
      pictureFile.value = "";
      setProto({ prototypeProfilePictureError: true });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const src = String(reader.result || "");
      pictureFile.value = "";
      if (!protoPictureSrcOk(src)) {
        setProto({ prototypeProfilePictureError: true });
        return;
      }
      setProto({ prototypeProfilePicture: src, prototypeProfilePictureError: false });
    };
    reader.readAsDataURL(blob);
    return;
  }
  const replaceFile = event.target.closest("[data-proto-contract='replace']");
  if (replaceFile) {
    if (!protoCanAdminCompany()) return;
    if (event.type !== "change" || !replaceFile.files || !replaceFile.files[0]) return;
    const person = protoOpenPerson();
    if (!person) return;
    const blob = replaceFile.files[0];
    const name = String(blob.name || "").trim();
    replaceFile.value = "";
    if (!protoPdfFileOk(blob) || !name) {
      setProto({ prototypeContractFileError: true });
      return;
    }
    protoReplacePersonContract(person.id, name.slice(0, 120), blob);
    return;
  }
  const renewFile = event.target.closest("[data-proto-renew='file']");
  if (renewFile) {
    if (!protoCanAdminCompany()) return;
    if (event.type !== "change" || !renewFile.files || !renewFile.files[0]) return;
    const blob = renewFile.files[0];
    const name = String(blob.name || "").trim();
    renewFile.value = "";
    if (!protoPdfFileOk(blob) || !name) {
      setProto({
        prototypeRenewForm: true,
        prototypeRenewFileName: "",
        prototypeRenewFileError: true,
      });
      protoRenewFileBlob = null;
      return;
    }
    setProto({
      prototypeRenewForm: true,
      prototypeRenewFileName: name.slice(0, 120),
      prototypeRenewFileError: false,
    });
    protoRenewFileBlob = blob;
    return;
  }
  const file = event.target.closest("[data-proto-brand='logo']");
  if (file) {
    if (!protoCanAct()) return;
    if (event.type !== "change" || !file.files || !file.files[0]) return;
    const blob = file.files[0];
    const kind = protoLogoFileKind(blob);
    if (!kind || blob.size > 400000) {
      file.value = "";
      setProto({ prototypeBrandLogoError: true });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const src = String(reader.result || "");
      file.value = "";
      if (!protoLogoSrcOk(src)) {
        setProto({ prototypeBrandLogoError: true });
        return;
      }
      protoPatchOrg({ logo: src }, false);
      setProto({ prototypeBrandLogoError: false });
    };
    reader.readAsDataURL(blob);
    return;
  }
  const hexField = event.target.closest("[data-proto-brand-hex]");
  if (hexField) {
    if (!protoCanAct()) return;
    protoApplyBrand(hexField.dataset.protoBrandHex, hexField.value, true);
  }
}

function onPrototypeSubmit(event) {
  const authForm = event.target.closest("[data-proto-auth]");
  if (authForm) {
    event.preventDefault();
    const kind = authForm.dataset.protoAuth;
    const email = String(authForm.querySelector("[name='proto-auth-email']")?.value || "").trim();
    const name = protoProfileLine(
      authForm.querySelector("[name='proto-auth-name']")?.value ||
        authForm.querySelector("[name='proto-profile-name']")?.value ||
        protoProfileDraftName()
    );
    const company = protoProfileLine(
      authForm.querySelector("[name='proto-auth-company']")?.value || protoAuthCompany()
    );
    const password = String(authForm.querySelector("[name='proto-auth-password']")?.value || "");
    if (kind === "sign-in") {
      if (!protoEmailOk(email) || !password) return;
      store.prototypeAuthEmail = email;
      protoEnterProduct();
      return;
    }
    if (kind === "sign-up") {
      if (!name || !protoEmailOk(email) || !company || !password) return;
      setProto({
        prototypeFlow: "sign-up",
        prototypeSignedOut: true,
        prototypeSignUpStep: "verify",
        prototypeAuthEmail: email,
        prototypeAuthName: name,
        prototypeAuthCompany: company,
        prototypeProfileName: name,
        prototypeProfileDraftName: name,
        prototypeAuthResent: false,
      });
      return;
    }
    if (kind === "verify") {
      if (protoAuthCodeValue(authForm).length !== 6) return;
      const next = authForm.dataset.protoVerify;
      if (next === "onboarding") {
        setProto({
          prototypeFlow: "onboarding",
          prototypeSignedOut: true,
          prototypeSignUpStep: "",
          prototypeAuthResent: false,
        });
        return;
      }
      setProto({
        prototypeRecoveryStep: "reset",
        prototypeAuthSent: true,
        prototypeAuthResent: false,
      });
      return;
    }
    if (kind === "recovery") {
      if (!protoEmailOk(email)) return;
      setProto({
        prototypeAuthEmail: email,
        prototypeAuthSent: true,
        prototypeRecoveryStep: "sent",
        prototypeAuthResent: false,
      });
      return;
    }
    if (kind === "reset") {
      const confirm = String(authForm.querySelector("[name='proto-auth-confirm']")?.value || "");
      if (!protoPasswordReady(password, confirm)) return;
      setProto({
        prototypeRecoveryStep: "done",
        prototypeAuthSent: true,
        prototypeAuthResent: false,
      });
      return;
    }
    if (kind === "invite-sign-in") {
      if (!password) return;
      setProto({
        prototypeFlow: "invite",
        prototypeSignedOut: true,
        prototypeInviteStep: "done",
        prototypeInviteResume: false,
        prototypeAuthEmail: protoInviteJoin().email,
      });
      return;
    }
    if (kind === "invite-create") {
      const first = protoProfileLine(authForm.querySelector("[name='proto-invite-first']")?.value || "");
      const last = protoProfileLine(authForm.querySelector("[name='proto-invite-last']")?.value || "");
      if (!first || !last || !protoPasswordRules(password).every((rule) => rule.ok)) return;
      const name = `${first} ${last}`.trim();
      setProto({
        prototypeFlow: "invite",
        prototypeSignedOut: true,
        prototypeInviteStep: "done",
        prototypeInviteResume: false,
        prototypeAuthEmail: protoInviteJoin().email,
        prototypeAuthName: name,
        prototypeProfileName: name,
        prototypeProfileDraftName: name,
        prototypeInviteFirst: first,
        prototypeInviteLast: last,
      });
      return;
    }
    if (kind === "onboarding") {
      if (!name) return;
      protoSaveProfile();
      protoEnterProduct();
      return;
    }
    return;
  }
  const meterProfileForm = event.target.closest("[data-proto-meter-profile]");
  if (meterProfileForm) {
    event.preventDefault();
    if (!protoCanAct()) return;
    const id = String(meterProfileForm.getAttribute("data-proto-meter-profile") || "");
    const meter = protoMeters().find((item) => item.id === id);
    if (!meter) return;
    const draft = protoReadMeterProfileForm(meterProfileForm, meter);
    store.prototypeMeterDrafts = { ...protoMeterDrafts(), [meter.id]: draft };
    if (!protoMeterDirty(meter.id)) return;
    protoSaveMeterProfile(meter, draft);
    return;
  }
  const profileForm = event.target.closest("[data-proto-profile]");
  if (profileForm) {
    event.preventDefault();
    if (!protoProfileDirty()) return;
    protoSaveProfile();
    return;
  }
  const renewForm = event.target.closest("[data-proto-renew-form]");
  if (renewForm) {
    event.preventDefault();
    if (!protoCanAdminCompany()) return;
    const person = protoOpenPerson();
    const id = String(store.prototypeRenewPerson || "");
    if (!person || person.id !== id) return;
    const from = protoFromUkDate(store.prototypeRenewFrom);
    const to = protoFromUkDate(store.prototypeRenewTo);
    const fileName = String(store.prototypeRenewFileName || "").trim();
    if (!from || !to || !fileName) return;
    const start = from <= to ? protoIso(from) : protoIso(to);
    const end = from <= to ? protoIso(to) : protoIso(from);
    protoSetPersonContract(id, start, end, fileName);
    return;
  }
  const userForm = event.target.closest("[data-proto-user-form]");
  if (userForm) {
    event.preventDefault();
    if (!protoCanManagePeople()) return;
    const taken = new Set(protoUserPeople().map((person) => person.email).filter(Boolean));
    const added = [];
    [...userForm.querySelectorAll("[data-proto-user-draft]")].forEach((field) => {
      const email = String(field.value || "").trim().toLowerCase();
      if (!protoEmailOk(email) || taken.has(email)) return;
      taken.add(email);
      added.push({
        id: `inv-${Date.now()}-${added.length}`,
        email,
        role: protoUserRoleId(store.prototypeUserInviteRole),
        company: protoInviteCompany(),
        expiresOn: PROTO_TEMP_TO,
        expiresFrom: PROTO_TEMP_FROM,
      });
    });
    if (!added.length) return;
    setProto({
      prototypeInvitedUsers: [...added, ...protoInvitedUsers()],
      prototypeUserForm: false,
      prototypeUserDrafts: [""],
      prototypeUserMenu: "",
    });
    return;
  }
  const teamForm = event.target.closest("[data-proto-team-form]");
  if (teamForm) {
    event.preventDefault();
    if (!protoCanManagePeople()) return;
    const name = String(teamForm.querySelector("[name='proto-team-name']")?.value || "").trim();
    if (!name) return;
    const id = `team-${Date.now()}`;
    const people = protoTeamDraftPeople().filter((personId) =>
      protoUserPeople().some((person) => person.id === personId)
    );
    const company = protoTeamCompanyId(store.prototypeTeamDraftCompany);
    const team = {
      id,
      name,
      company,
      people,
    };
    setProto({
      prototypeTeams: [...protoTeams(), team],
      prototypeTeam: protoSeesCompanies() ? id : protoTeamBucketIdForTeam(team),
      prototypeTeamForm: false,
      prototypeTeamDraftName: "",
      prototypeTeamDraftDepartment: "",
      prototypeTeamDraftPeople: [],
      prototypeTeamPeopleQuery: "",
      prototypeUserMenu: "",
    });
    return;
  }
  const companyForm = event.target.closest("[data-proto-company-form]");
  if (companyForm) {
    event.preventDefault();
    if (!protoSeesCompanies()) return;
    const name = String(companyForm.querySelector("[name='proto-company-name']")?.value || "").trim();
    if (!name) return;
    const taken = protoTeamCompanyNames().some(
      (item) => item.toLowerCase() === name.toLowerCase()
    );
    if (taken) {
      setProto({
        prototypeCompanyForm: true,
        prototypeCompanyDraftName: name,
        prototypeCompanyNameError: true,
      });
      protoRestoreFocus("#astral-fs input[name='proto-company-name']");
      return;
    }
    const type = protoCompanyTypeId(store.prototypeCompanyDraftType);
    setProto({
      prototypeAddedCompanies: [...protoAddedCompanies(), { name, type }],
      prototypeCompanyForm: false,
      prototypeCompanyDraftName: "",
      prototypeCompanyDraftType: "customer",
      prototypeCompanyNameError: false,
    });
    return;
  }
  const replyForm = event.target.closest("[data-proto-query-reply]");
  if (replyForm) {
    event.preventDefault();
    if (!protoCanAct()) return;
    const text = String(replyForm.querySelector("[name='proto-query-reply']")?.value || "").trim();
    const row = protoQueryByRef(store.prototypeOpenQuery);
    if (!text || !row) return;
    const notes = protoQueryNotes(row);
    notes.push({
      id: `${row.ref}-${Date.now()}`,
      text,
      userId: "me",
      at: new Date().toISOString(),
    });
    setProto({
      prototypeQueryComments: protoQuerySaveNotes(row.ref, notes),
      prototypeQueryCommentOpen: true,
      prototypeQueryEdit: "",
    });
    return;
  }
  const editForm = event.target.closest("[data-proto-query-edit]");
  if (editForm) {
    event.preventDefault();
    if (!protoCanAct()) return;
    const text = String(editForm.querySelector("[name='proto-query-edit']")?.value || "").trim();
    const row = protoQueryByRef(store.prototypeOpenQuery);
    const id = editForm.dataset.protoQueryEdit;
    if (!text || !row || !id) return;
    const notes = protoQueryNotes(row).map((note) =>
      note.id === id ? { ...note, text } : note
    );
    setProto({
      prototypeQueryComments: protoQuerySaveNotes(row.ref, notes),
      prototypeQueryEdit: "",
    });
    return;
  }
  const queryForm = event.target.closest("[data-proto-query-form]");
  if (queryForm) {
    event.preventDefault();
    if (!protoCanAct()) return;
    const ctx = protoQueryViewContext();
    const comment = String(queryForm.querySelector("[name='proto-query-comment']")?.value || "").trim();
    if (!ctx.site || !comment) return;
    const point = protoChartPoint();
    const subject = protoQuerySubject(point, comment);
    const n = protoRaisedQueries().length + (protoData()?.queries || []).length + 1;
    const ref = `Q-${n}`;
    setProto({
      prototypeRaisedQueries: [
        {
          ref,
          subject,
          site: ctx.site,
          meterId: point?.meterId || ctx.meterId,
          groupId: ctx.groupId,
          scope: ctx.scope,
          compareIds: ctx.compareIds,
          compareLevel: ctx.compareLevel,
          currentId: ctx.currentId,
          status: "Open",
          open: true,
          comment,
          point: point ? point.time : "",
          channel: store.prototypeChannel || "",
          preset: protoDatePreset(),
          userId: "me",
          raisedAt: new Date().toISOString(),
        },
        ...protoRaisedQueries(),
      ],
      prototypeQueryForm: false,
      prototypeQuerySite: "",
      prototypeChartPoint: point,
      prototypeOpenQuery: ref,
    });
    if (point) protoPlaceQueryPin();
    return;
  }
  const reportForm = event.target.closest("[data-proto-report-edit-form]");
  if (reportForm) {
    event.preventDefault();
    if (!protoCanEditReports()) return;
    const draft = protoReportDraft();
    if (!draft || protoReportDraftIssue(draft)) return;
    const def = protoReportDraftDef(draft);
    const defs = protoReportDefs();
    const next = defs.some((item) => item.id === def.id)
      ? defs.map((item) => (item.id === def.id ? def : item))
      : [...defs, def];
    setProto({ ...protoReportEditClear(), ...protoReportDefsPatch(next) });
  }
}

function onPrototypeKey(event) {
  if (event.key === "Enter" && event.target.closest("input[name='proto-team-people-query'], input[name='proto-report-people-query'], input[name='proto-report-site-query'], input[name='proto-person-team-query'], input[name='proto-person-sites-query']")) {
    event.preventDefault();
    return;
  }
  const breakdownHit = event.target.closest("tr[data-proto-hit]");
  if (breakdownHit && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    breakdownHit.click();
    return;
  }
  const codeInput = event.target.closest("[data-proto-code]");
  if (codeInput && event.key === "Backspace" && !codeInput.value) {
    const form = protoAuthForm(codeInput);
    const boxes = [...(form?.querySelectorAll("[data-proto-code]") || [])];
    const index = boxes.indexOf(codeInput);
    if (index > 0) {
      event.preventDefault();
      boxes[index - 1].value = "";
      boxes[index - 1].focus();
      protoSyncAuthSubmit(codeInput);
    }
    return;
  }
  const box = protoCommentArea(event.target);
  const form = box && protoQueryComposerForm(box);
  if (form && event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    if (!String(box.value || "").trim()) return;
    if (typeof form.requestSubmit === "function") form.requestSubmit();
    else form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    return;
  }
  const tagSearch = event.target.closest("input[name='proto-point-tag-query']");
  if (tagSearch && event.key === "Enter") {
    event.preventDefault();
    protoSubmitPointTagQuery();
    return;
  }
  if (event.key === "Escape" && store?.prototypeFullscreen) {
    if (store.prototypeDateCustomOpen) {
      setProto({ prototypeDateCustomOpen: false, prototypeDateOpen: false });
      return;
    }
    if (store.prototypeDateOpen) {
      setProto({ prototypeDateOpen: false });
      return;
    }
    if (store.prototypeReportCalOpen) {
      setProto({ prototypeReportCalOpen: false });
      protoRestoreFocus('#astral-fs input[name="proto-report-start"]');
      return;
    }
    if (store.prototypeSelectOpen) {
      setProto({ prototypeSelectOpen: "" });
      return;
    }
    if (store.prototypeAckOpen) {
      setProto({ prototypeAckOpen: "" });
      return;
    }
    if (store.prototypeQueryMore) {
      setProto({ prototypeQueryMore: "" });
      return;
    }
    if (store.prototypePointTagOpen) {
      setProto(protoPointTagClear());
      return;
    }
    if (store.prototypeQueryEdit) {
      setProto({ prototypeQueryEdit: "" });
      return;
    }
    if (store.prototypeExportOpen) {
      setProto({ prototypeExportOpen: false });
      return;
    }
    if (store.prototypeTreeFilterOpen) {
      setProto({ prototypeTreeFilterOpen: false });
      return;
    }
    if (store.prototypePaneFilterOpen) {
      setProto({ prototypePaneFilterOpen: false });
      return;
    }
    if (store.prototypeCompareFilterOpen) {
      setProto({ prototypeCompareFilterOpen: false });
      return;
    }
    if (store.prototypeDownloadFilterOpen) {
      setProto({ prototypeDownloadFilterOpen: false });
      return;
    }
    if (store.prototypeUserRoleFilterOpen) {
      setProto({ prototypeUserRoleFilterOpen: false });
      return;
    }
    if (store.prototypeRailOpen) {
      setProto({ prototypeRailOpen: false });
      protoRestoreFocus('#astral-fs [data-proto-rail="toggle"]');
      return;
    }
    if (store.prototypeAccountOpen) {
      setProto({ prototypeAccountOpen: false });
      return;
    }
    if (store.prototypeNoticeOpen) {
      setProto({ prototypeNoticeOpen: false });
      return;
    }
    if (store.prototypeReportEdit) {
      protoCloseModal("report");
      return;
    }
    if (store.prototypeColourOpen) {
      setProto({ prototypeColourOpen: "" });
      return;
    }
    if (store.prototypeQueryForm || store.prototypeChartPoint) {
      setProto({
        prototypeQueryForm: false,
        prototypeQuerySite: "",
        prototypeChartPoint: null,
        prototypeOpenQuery: "",
      });
      return;
    }
    if (store.prototypeUserForm) {
      setProto({ prototypeUserForm: false, prototypeUserDrafts: [""] });
      return;
    }
    if (store.prototypeRenewForm) {
      protoCloseModal("renew");
      return;
    }
    if (store.prototypeUserOpen) {
      const id = String(store.prototypeUserOpen || "");
      setProto(protoClosePersonPatch());
      if (id) protoRestoreFocus(`#astral-fs [data-proto-person="${CSS.escape(id)}"]`);
      return;
    }
    if (store.prototypeCompareOpen) {
      setProto({ prototypeCompareOpen: false, ...protoCompareModalReset() });
      return;
    }
    setProto({ prototypeFullscreen: false });
  }
}

let protoPickerDrag = null;
let protoPinDrag = null;
let protoPinUser = null;

function protoPinDragIgnore(node) {
  return Boolean(
    node.closest(
      "button, textarea, input, a, label, .astral-select, .astral-select-btn, .astral-ack, .astral-query-more, .astral-query-form, .astral-query-reply, .astral-actions, .astral-point-tags"
    )
  );
}

function protoPickerFromPointer(event) {
  const drag = protoPickerDrag;
  if (!drag) return;
  const rect = drag.el.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  const hsv = protoHexToHsv(protoBrand()[drag.kind]);
  const next =
    drag.mode === "hue"
      ? protoHsvToHex(x * 360, hsv.s, hsv.v)
      : protoHsvToHex(hsv.h, x, 1 - y);
  protoApplyBrand(drag.kind, next, false);
}

function onPrototypePointerDown(event) {
  const field = protoUkDateField(event.target);
  if (field && event.button === 0) {
    event.preventDefault();
    protoStartUkDateField(field);
    return;
  }
  const picker = event.target.closest("#astral-fs [data-proto-picker]");
  if (picker) {
    const sv = event.target.closest("[data-proto-picker-sv]");
    const hue = event.target.closest("[data-proto-picker-hue]");
    if (!sv && !hue) return;
    event.preventDefault();
    const el = sv || hue;
    protoPickerDrag = {
      kind: picker.dataset.protoPicker,
      mode: sv ? "sv" : "hue",
      el,
    };
    el.setPointerCapture(event.pointerId);
    protoPickerFromPointer(event);
    return;
  }
  if (event.button !== 0) return;
  const pin = event.target.closest("#astral-fs .astral-query-pin");
  if (!pin || protoPinDragIgnore(event.target)) return;
  const host = protoPinHost();
  if (!host) return;
  protoPinDrag = {
    pin,
    wrap: host,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    origLeft: parseFloat(pin.style.left) || pin.offsetLeft,
    origTop: parseFloat(pin.style.top) || pin.offsetTop,
    moved: false,
  };
}

function onPrototypePointerMove(event) {
  if (protoPickerDrag) {
    protoPickerFromPointer(event);
    return;
  }
  const drag = protoPinDrag;
  if (!drag || event.pointerId !== drag.pointerId) return;
  const dx = event.clientX - drag.startX;
  const dy = event.clientY - drag.startY;
  if (!drag.moved && dx * dx + dy * dy < 9) return;
  if (!drag.moved) {
    drag.moved = true;
    event.preventDefault();
    try {
      drag.pin.setPointerCapture(event.pointerId);
    } catch (err) {}
    drag.pin.classList.add("is-drag");
  }
  const pos = protoApplyPinPos(drag.pin, drag.wrap, drag.origLeft + dx, drag.origTop + dy, {
    free: true,
  });
  protoPinUser = { key: protoPinKey(), left: pos.left, top: pos.top };
}

function onPrototypePointerUp(event) {
  if (protoPickerDrag) {
    persistChrome();
    protoPickerDrag = null;
    return;
  }
  const drag = protoPinDrag;
  if (!drag) return;
  if (event.pointerId != null && event.pointerId !== drag.pointerId) return;
  if (drag.moved) {
    const skip = (click) => {
      click.stopPropagation();
    };
    document.addEventListener("click", skip, true);
    setTimeout(() => document.removeEventListener("click", skip, true), 400);
  }
  drag.pin.classList.remove("is-drag");
  protoPinDrag = null;
}

document.addEventListener("pointerdown", onPrototypePointerDown);
document.addEventListener("pointermove", onPrototypePointerMove);
document.addEventListener("pointerup", onPrototypePointerUp);
document.addEventListener("pointercancel", onPrototypePointerUp);
document.addEventListener("keydown", onPrototypeKey);
document.addEventListener("paste", onPrototypePaste);
