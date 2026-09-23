/* Astral UI source of truth.
   Library previews and the prototype both call these builders.
   Change a control here and every instance follows. */

function protoEsc(value) {
  if (typeof escapeHtml === "function") return escapeHtml(value);
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const PROTO_ICON_MARKS = {
  close: `<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  resolve: `<path d="M4 12.2 10.2 18.5 20 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />`,
  undo: `<path d="M8 14.5 3.5 10 8 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M3.5 10H14a5.5 5.5 0 0 1 0 11H11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  comment: `<path d="M5 7h14a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 19 17h-7l-4 3v-3H5A1.5 1.5 0 0 1 3.5 15.5v-7A1.5 1.5 0 0 1 5 7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />`,
  more: `<circle cx="6" cy="12" r="1.6" fill="currentColor" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /><circle cx="18" cy="12" r="1.6" fill="currentColor" />`,
  send: `<path d="M12 19V6M6 12l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  notice: `<path d="M12 4a5 5 0 0 1 5 5v3.2l1.6 3.2H5.4L7 12.2V9a5 5 0 0 1 5-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><path d="M9.6 18.2a2.4 2.4 0 0 0 4.8 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />`,
  filter: `<path d="M4 6h16l-5.5 7.2V20l-5 1.5v-8.3L4 6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />`,
  export: `<path d="M12 3v12m0 0-4-4m4 4 4-4M5 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  meter: `<rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2" /><path d="M9 8h6M9 12h6M9 16h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  expand: `<path d="M8 3H3v5M16 3h5v5M21 16v5h-5M8 21H3v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  prev: `<path d="M14 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  next: `<path d="M10 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  mail: `<rect x="4" y="6" width="16" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8" /><path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />`,
  show: `<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12z" fill="none" stroke="currentColor" stroke-width="1.8" /><circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.8" />`,
  hide: `<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12z" fill="none" stroke="currentColor" stroke-width="1.8" /><circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.8" /><path d="M5 19 19 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />`,
  profile: `<circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.2 19c1.1-3.2 3.3-4.8 6.8-4.8s5.7 1.6 6.8 4.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  settings: `<circle cx="12" cy="12" r="2.55" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.75 6.37 10.01 3.12h3.98l1.26 3.25 3.45-.53 1.98 3.44L18.5 12l2.18 2.72-1.98 3.44-3.45-.53-1.26 3.25h-3.98l-1.26-3.25-3.45.53-1.98-3.44L5.5 12 3.32 9.28l1.98-3.44 3.45.53z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`,
  users: `<circle cx="8.5" cy="8.5" r="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 19c.9-3 2.8-4.5 5-4.5s4.1 1.5 5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16.5" cy="8.5" r="2.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 15.2c2 0 3.6.9 4.4 2.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  out: `<path d="M10 5H6v14h4M15 12H8m7-4 4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  electricity: `<path d="M14 3 6 13.2h5.4L9.6 21 18 10.8h-5.4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />`,
  gas: `<path d="M12 2.6S6.2 10 6.2 15.3A5.8 5.8 0 0 0 17.8 15.3C17.8 10 12 2.6 12 2.6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9.35 18.2c.2-3.2 1.4-5.1 2.65-7 1.25 1.9 2.45 3.8 2.65 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  water: `<path d="M12 3.2S5.6 11 5.6 15.6A6.4 6.4 0 0 0 18.4 15.6C18.4 11 12 3.2 12 3.2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`,
  incoming: `<circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7.7v8.6M8.4 13.4 12 16.8 15.6 13.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  outgoing: `<circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 16.3V7.7M8.4 10.6 12 7.2 15.6 10.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  tick: `<path d="M4.8 12.3 9.9 17.1 19.2 6.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  warning: `<path d="M12 3.9 21.15 20.1H2.85L12 3.9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><path d="M12 9.45v4.2M12 16.8v.02" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  help: `<circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="2" /><path d="M9.75 9.6a2.4 2.4 0 1 1 3.15 2.25c-.66.36-1.05.84-1.05 1.65" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /><path d="M12 17.1v.02" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  chevron: `<path d="M6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  hours: `<circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="2" /><path d="M12 7.5v4.8L15 15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  tou: `<path d="M4.5 18V9.75h4.5V18M9.75 18V6h4.5v12M15 18V12h4.5v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />`,
  rates: `<path d="M5.25 6.75h13.5v10.8l-3.3 2.7-3.45-2.25-3.45 2.25-3.3-2.7V6.75z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><path d="M9 10.8h6M9 14.4h3.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  tag: `<path d="M12.4 4.5 20 12.1l-7.6 7.6L4.8 12V4.5h7.6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><circle cx="9.2" cy="8.4" r="1.15" fill="currentColor" />`,
  analyse: `<circle cx="10.5" cy="10.5" r="6.25" fill="none" stroke="currentColor" stroke-width="2" /><path d="M15.2 15.2 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  menu: `<path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />`,
  home: `<path d="M4.5 11.4 12 4.8l7.5 6.6V20h-5.1v-5.4H9.6V20H4.5v-8.6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />`,
  companies: `<path d="M5.25 20.25V5.25h8.25V20.25M13.5 9.75h5.25V20.25M5.25 20.25h13.5M7.5 8.25h3M7.5 11.75h3M7.5 15.25h3M16.05 13.2h1.2M16.05 16.5h1.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  report: `<path d="M7 3.75h7.2L19.5 9v11.25H7V3.75z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><path d="M14.2 3.75V9H19.5M9.6 12.6h6.3M9.6 16.2h4.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
};

function protoIconNames() {
  return Object.keys(PROTO_ICON_MARKS);
}

function protoIconMark(kind, className) {
  const inner = PROTO_ICON_MARKS[kind];
  if (!inner) return "";
  const cls = className ? ` class="${className}"` : "";
  return `<svg${cls} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${inner}</svg>`;
}

function protoChevronMark(kind) {
  if (kind === "prev") return protoIconMark("prev");
  if (kind === "next") return protoIconMark("next");
  if (kind === "menu") return protoIconMark("chevron", "astral-select-chevron");
  return protoIconMark("chevron");
}

function protoTip(label) {
  return `<span class="astral-icon-tip" role="tooltip">${protoEsc(label)}</span>`;
}

function protoIconTip(control, label, extraClass) {
  const extra = extraClass ? ` ${extraClass}` : "";
  return `<span class="astral-tip-host${extra}">${control}${protoTip(label)}</span>`;
}

function protoCountChip(n) {
  if (!n) return "";
  return `<span class="astral-count" aria-hidden="true">${n}</span>`;
}

function protoBtn(label, extra = "", opts = {}) {
  const kind = opts.kind || "primary";
  const cls =
    kind === "ghost" ? "astral-ghost" : kind === "text" ? "astral-text" : "astral-btn";
  const type = opts.type || "button";
  const disabled = opts.disabled ? " disabled" : "";
  const hover = opts.hover ? " is-hover" : "";
  const extraClass = opts.className ? ` ${opts.className}` : "";
  const extraAttr = extra ? ` ${extra}` : "";
  const inner = opts.html ? label : protoEsc(label);
  return `<button type="${type}" class="${cls}${hover}${extraClass}"${extraAttr}${disabled}>${inner}</button>`;
}

function protoGhost(label, extra = "", opts = {}) {
  return protoBtn(label, extra, { ...opts, kind: "ghost" });
}

function protoTextBtn(label, extra = "", opts = {}) {
  return protoBtn(label, extra, { ...opts, kind: "text" });
}

function protoIconBtn(kind, label, extra = "", opts = {}) {
  const disabled = opts.disabled ? " disabled" : "";
  const on = opts.on ? " is-on" : "";
  const extraClass = opts.className ? ` ${opts.className}` : "";
  const extraAttr = extra ? ` ${extra}` : "";
  const count = opts.count ? protoCountChip(opts.count) : "";
  const btn = `<button type="button" class="astral-icon-btn${on}${extraClass}"${extraAttr}${disabled} aria-label="${protoEsc(
    label
  )}">${protoIconMark(kind)}${count}</button>`;
  return opts.tip === false ? btn : protoIconTip(btn, opts.tipLabel || label, opts.tipClass);
}

function protoField(label, attrs, extra = "") {
  return `
    <label class="astral-field">
      <span>${protoEsc(label)}</span>
      <input ${attrs} />
      ${extra}
    </label>
  `;
}

function protoTextarea(label, value, rows = 2) {
  return `<label class="astral-field"><span>${protoEsc(label)}</span><textarea rows="${rows}">${protoEsc(
    value
  )}</textarea></label>`;
}

function protoTag(label, tip) {
  const tag = `<span class="astral-tag"${tip ? ' tabindex="0"' : ""}>${protoEsc(label)}</span>`;
  return tip ? protoIconTip(tag, tip) : tag;
}

function protoSwitch(on, label = "On") {
  return `<button type="button" class="astral-switch${on ? " is-on" : ""}" role="switch" aria-checked="${
    on ? "true" : "false"
  }" aria-label="${protoEsc(label)}"></button>`;
}

function protoAvatarBtn(text, label = "Account") {
  return `<button type="button" class="astral-avatar" aria-label="${protoEsc(label)}">${protoEsc(
    text
  )}</button>`;
}

function protoTabs(items, active, attr, aria) {
  const list = items || [];
  const hit = attr || "data-proto-pane";
  return `
    <div class="astral-tabs" role="tablist"${aria ? ` aria-label="${protoEsc(aria)}"` : ""}>
      ${list
        .map((item) => {
          const on = item.id === active;
          return `<button type="button" role="tab" class="${on ? "is-on" : ""}" ${hit}="${protoEsc(
            item.id
          )}" aria-selected="${on ? "true" : "false"}">${protoEsc(item.name)}</button>`;
        })
        .join("")}
    </div>
  `;
}

function protoFlowIcon(kind) {
  if (kind === "out") return protoIconMark("outgoing", "astral-flow-icon");
  if (kind !== "in") return "";
  return protoIconMark("incoming", "astral-flow-icon");
}

function protoFlowMark(kind) {
  if (kind !== "in" && kind !== "out") return "";
  const short = kind === "out" ? "Out" : "In";
  const full = kind === "out" ? "Outgoing" : "Incoming";
  return `<span class="astral-flow-mark is-${kind}" aria-label="${full}">${protoFlowIcon(
    kind
  )}<span aria-hidden="true">${short}</span></span>`;
}

function protoFlowPill(kind) {
  if (kind !== "in" && kind !== "out") return "";
  return `<span class="astral-flow-pill is-${kind}">${protoFlowMark(kind)}</span>`;
}

function protoStateKind(word) {
  const raw = String(word || "").trim().toLowerCase();
  if (raw === "sending") return "sending";
  if (raw === "missing data") return "missing";
  if (raw === "not sending") return "stale";
  if (raw === "odd use") return "odd";
  return "sending";
}

function protoStateIcon(word) {
  return protoIconMark(word === "Sending" ? "tick" : "warning", "astral-state-icon");
}

function protoStatePill(word) {
  const kind = protoStateKind(word);
  return `<span class="astral-state is-${kind}">${protoStateIcon(word)}<span>${protoEsc(word)}</span></span>`;
}

function protoClearButton(className, hit, label) {
  return protoIconTip(
    `<button type="button" class="${className}" ${hit} aria-label="${protoEsc(label)}">${protoIconMark(
      "close"
    )}</button>`,
    "Clear"
  );
}

function protoSearchField({ name, value, placeholder, label }) {
  const q = value || "";
  const clear = q
    ? protoIconTip(
        `<button type="button" class="astral-search-clear" data-proto-search-clear="${protoEsc(
          name
        )}" aria-label="Clear">${protoIconMark("close")}</button>`,
        "Clear",
        "astral-search-clear-host"
      )
    : "";
  return `
    <label class="astral-search${q ? " has-value" : ""}">
      <span class="sr-only">${protoEsc(label)}</span>
      <input
        type="search"
        name="${protoEsc(name)}"
        value="${protoEsc(q)}"
        placeholder="${protoEsc(placeholder)}"
        autocomplete="off"
      />
      ${clear}
    </label>
  `;
}

function protoModalHead(titleId, title, leadHtml, closeKind) {
  return `
    <div class="astral-modal-head">
      <div class="astral-modal-copy">
        <h3 id="${protoEsc(titleId)}">${protoEsc(title)}</h3>
        ${leadHtml ? `<p class="astral-muted">${leadHtml}</p>` : ""}
      </div>
      ${protoIconBtn("close", "Close", `data-proto-modal-close="${protoEsc(closeKind)}"`)}
    </div>
  `;
}

function protoFilterShell(config) {
  const n = Number(config.count) || 0;
  const open = Boolean(config.open);
  const active = open || n > 0;
  const label = n ? `Filter, ${n}` : "Filter";
  const extra = config.extraClass ? ` ${config.extraClass}` : "";
  return `
    <div class="astral-filter${extra}">
      ${protoIconBtn("filter", label, `${config.hit} aria-haspopup="menu" aria-expanded="${
        open ? "true" : "false"
      }" aria-controls="${protoEsc(config.menuId)}"`, { on: active, count: n, tipLabel: "Filter" })}
      <div
        id="${protoEsc(config.menuId)}"
        class="astral-filter-menu${
          open && typeof protoMenuEnterClass === "function"
            ? protoMenuEnterClass(config.menuId)
            : ""
        }"
        role="menu"
        aria-label="Filter"
        ${open ? "" : "hidden"}
      >${config.menu || ""}</div>
    </div>
  `;
}

function protoCheck(on) {
  return `<span class="astral-check${on ? " is-on" : ""}" aria-hidden="true"></span>`;
}

function protoBanner(message, actionsHtml) {
  return `
    <div class="astral-banner astral-alert-call astral-export-toast" role="status">
      <p>${protoEsc(message)}</p>
      ${actionsHtml ? `<div class="astral-alert-call-actions">${actionsHtml}</div>` : ""}
    </div>
  `;
}

function protoCard(title, body) {
  return `<article class="astral-card"><h3>${protoEsc(title)}</h3>${
    body ? `<p class="astral-muted">${protoEsc(body)}</p>` : ""
  }</article>`;
}

function protoEmpty(title, body) {
  return `<div class="astral-empty"><h3>${protoEsc(title)}</h3>${
    body ? `<p>${protoEsc(body)}</p>` : ""
  }</div>`;
}

function protoPaneHead(kicker, title, extraHtml) {
  return `
    <div class="astral-pane-head">
      <div>
        ${kicker ? `<p class="astral-kicker">${protoEsc(kicker)}</p>` : ""}
        <div class="astral-detail-title"><h3>${protoEsc(title)}</h3></div>
      </div>
      ${extraHtml || ""}
    </div>
  `;
}

function protoBreadcrumbs(items) {
  const list = items || [];
  return `<nav class="ds-crumbs" aria-label="Breadcrumb">${list
    .map((item, i) =>
      i === list.length - 1
        ? `<strong>${protoEsc(item)}</strong>`
        : `${protoEsc(item)} <span>/</span>`
    )
    .join(" ")}</nav>`;
}

function protoTableSortMap(raw) {
  const source = raw !== undefined ? raw : typeof store !== "undefined" ? store.prototypeTableSort : null;
  if (!source || typeof source !== "object" || Array.isArray(source)) return {};
  const next = {};
  Object.keys(source).forEach((id) => {
    const row = source[id];
    if (!row || typeof row !== "object") return;
    const key = String(row.key || "");
    const dir = row.dir === "desc" ? "desc" : row.dir === "asc" ? "asc" : "";
    if (id && key && dir) next[id] = { key, dir };
  });
  return next;
}

function protoTableSortState(tableId) {
  const id = String(tableId || "");
  if (!id) return { key: "", dir: "" };
  return protoTableSortMap()[id] || { key: "", dir: "" };
}

function protoPlainSortText(value) {
  return String(value ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function protoSortValue(value) {
  if (value == null || value === "") return { empty: true, n: null, s: "" };
  if (typeof value === "number" && Number.isFinite(value)) return { empty: false, n: value, s: String(value) };
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return { empty: false, n: value.getTime(), s: String(value.getTime()) };
  }
  const text = protoPlainSortText(value);
  if (!text) return { empty: true, n: null, s: "" };
  const qref = text.match(/^Q-(\d+)$/i);
  if (qref) return { empty: false, n: Number(qref[1]), s: text.toLocaleLowerCase("en-GB") };
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) {
    const t = new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])).getTime();
    if (!Number.isNaN(t)) return { empty: false, n: t, s: text };
  }
  const uk = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (uk) {
    const t = new Date(Number(uk[3]), Number(uk[2]) - 1, Number(uk[1])).getTime();
    if (!Number.isNaN(t)) return { empty: false, n: t, s: text };
  }
  const compact = text.replace(/,/g, "");
  if (/^-?\d+(\.\d+)?$/.test(compact)) return { empty: false, n: Number(compact), s: text };
  const unit = compact.match(/^(-?\d+(?:\.\d+)?)\s*(kwh|kw|mwh|£|p)$/i);
  if (unit) return { empty: false, n: Number(unit[1]), s: text.toLocaleLowerCase("en-GB") };
  return { empty: false, n: null, s: text.toLocaleLowerCase("en-GB") };
}

function protoSortCompare(a, b, dir) {
  const va = protoSortValue(a);
  const vb = protoSortValue(b);
  if (va.empty !== vb.empty) return va.empty ? 1 : -1;
  let cmp = 0;
  if (va.n != null && vb.n != null) cmp = va.n - vb.n;
  else if (va.n != null) cmp = -1;
  else if (vb.n != null) cmp = 1;
  if (!cmp) cmp = va.s.localeCompare(vb.s, "en-GB", { numeric: true, sensitivity: "base" });
  return dir === "desc" ? -cmp : cmp;
}

function protoSortedRows(tableId, rows, getValue) {
  const list = Array.isArray(rows) ? rows : [];
  const sort = protoTableSortState(tableId);
  if (!sort.key || !sort.dir || typeof getValue !== "function") return list;
  return list
    .map((row, index) => ({ row, index }))
    .sort((a, b) => protoSortCompare(getValue(a.row, sort.key), getValue(b.row, sort.key), sort.dir) || a.index - b.index)
    .map((item) => item.row);
}

function protoToggleTableSort(tableId, key) {
  const id = String(tableId || "");
  const nextKey = String(key || "");
  if (!id || !nextKey || typeof setProto !== "function") return;
  const current = protoTableSortState(id);
  const dir = current.key === nextKey && current.dir === "asc" ? "desc" : "asc";
  setProto({
    prototypeTableSort: {
      ...protoTableSortMap(),
      [id]: { key: nextKey, dir },
    },
  });
}

function protoSortIcon(dir) {
  const stroke = `fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;
  return `<svg class="astral-sort-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path class="astral-sort-up" d="M4.5 6.5 8 3l3.5 3.5" ${stroke} /><path class="astral-sort-down" d="M4.5 9.5 8 13l3.5-3.5" ${stroke} /></svg>`;
}

function protoSortHead(tableId, key, label, className) {
  const id = String(tableId || "");
  const sortKey = String(key || "");
  const sort = id ? protoTableSortState(id) : { key: "", dir: "" };
  const on = Boolean(id && sort.key === sortKey && sort.dir);
  const dir = on ? sort.dir : "";
  const aria = dir === "asc" ? "ascending" : dir === "desc" ? "descending" : "none";
  const extra = className ? ` class="${protoEsc(className)}"` : "";
  const inner = `<span>${protoEsc(label)}</span>${protoSortIcon(dir)}`;
  if (!id || !sortKey) return `<th scope="col"${extra}>${inner}</th>`;
  return `<th scope="col"${extra} aria-sort="${aria}"><button type="button" class="astral-sort${
    on ? ` is-on is-${dir}` : ""
  }" data-proto-sort="${protoEsc(id)}" data-proto-sort-key="${protoEsc(sortKey)}">${inner}</button></th>`;
}

function protoTable(headers, rows, opts) {
  const tableId = opts?.id || "library";
  const keys = (opts?.keys || headers || []).map((item) =>
    String(item)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
  const listed = protoSortedRows(tableId, rows || [], (row, key) => {
    const index = keys.indexOf(key);
    return index >= 0 ? protoPlainSortText(row[index]) : "";
  });
  const head = (headers || []).map((item, i) => protoSortHead(tableId, keys[i], item)).join("");
  const cols = Math.max(1, (headers || []).length);
  const body =
    listed
      .map((row) => {
        const cells = (row || [])
          .map((cell, i) => (i === 0 ? `<th scope="row">${cell}</th>` : `<td>${cell}</td>`))
          .join("");
        const extra =
          typeof opts?.rowAttr === "function"
            ? String(opts.rowAttr(row) || "").trim()
            : String(opts?.rowAttr || "").trim();
        return `<tr${extra ? ` ${extra}` : ""}>${cells}</tr>`;
      })
      .join("") ||
    (opts?.empty
      ? `<tr><td colspan="${cols}">${protoEsc(opts.empty)}</td></tr>`
      : "");
  return `
    <div class="astral-table-wrap">
      <table class="astral-table">
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
}

function protoMeterFace(label, color, on) {
  const mark =
    color && on
      ? `<span class="astral-chart-key-mark" style="background:${protoEsc(
          color
        )}" aria-hidden="true"></span>`
      : `<span class="astral-chart-key-mark" aria-hidden="true"></span>`;
  return `<span class="astral-meter-pill${on ? " is-on" : ""}">${mark}<span class="astral-meter-pill-label">${protoEsc(
    label
  )}</span></span>`;
}

function protoSelectFace(config) {
  if (typeof protoSelect === "function") return protoSelect(config);
  const text = (config.options || []).find((item) => item.value === config.value)?.label || config.value || "";
  return `
    <div class="astral-select">
      <button type="button" class="astral-select-btn" aria-haspopup="listbox" aria-expanded="false"${
        config.label ? ` aria-label="${protoEsc(config.label)}"` : ""
      }>${protoEsc(text)} ${protoChevronMark("menu")}</button>
    </div>
  `;
}

function astralPreview(id) {
  const search = protoSearchField({
    name: "library-search",
    value: "Crewe",
    placeholder: "Search site or meter",
    label: "Search site or meter",
  });
  const filter = protoFilterShell({
    count: 2,
    open: false,
    hit: 'data-library-filter="open"',
    menuId: "library-filter-menu",
    menu: "",
  });
  const dateSelect = protoSelectFace({
    id: "library-date",
    label: "Date",
    value: "7d",
    options: [
      { value: "24h", label: "Last 24 hours" },
      { value: "7d", label: "Last 7 days" },
      { value: "28d", label: "Last month" },
      { value: "12m", label: "Last 12 months" },
      { value: "custom", label: "Custom" },
    ],
  });
  const flowSelect = protoSelectFace({
    id: "library-flow",
    label: "Flow",
    caption: true,
    value: "product",
    options: [
      { value: "product", label: "Main product" },
      { value: "sign-in", label: "Sign in" },
    ],
  });
  const meterPills =
    typeof protoGraphPills === "function"
      ? protoGraphPills(
          [
            { id: "a", label: "1600001234567", color: "var(--color-brand-primary)" },
            { id: "b", label: "1600001234568", color: "#000" },
          ],
          ["a"],
          { toggle: true, attr: "data-library-meter", aria: "Meters on the graph" }
        )
      : `<div class="astral-meter-pills" role="list" aria-label="Meters on the graph">${protoMeterFace(
          "1600001234567",
          "var(--color-brand-primary)",
          true
        )}${protoMeterFace("1600001234568", "#000", false)}</div>`;
  const filterPills = `
      <div class="astral-filter-pills">
        <span class="astral-filter-pill"><span class="astral-filter-face">${protoIconMark(
          "electricity",
          "astral-meter-mark"
        )}<span>Electricity</span></span>${protoClearButton(
          "astral-filter-pill-clear",
          'data-library-filter="electricity"',
          "Clear Electricity"
        )}</span>
        <span class="astral-filter-pill"><span class="astral-filter-face">${protoIconMark(
          "gas",
          "astral-meter-mark"
        )}<span>Gas</span></span>${protoClearButton(
          "astral-filter-pill-clear",
          'data-library-filter="gas"',
          "Clear Gas"
        )}</span>
        <span class="astral-filter-pill"><span class="astral-filter-face">${protoIconMark(
          "water",
          "astral-meter-mark"
        )}<span>Water</span></span>${protoClearButton(
          "astral-filter-pill-clear",
          'data-library-filter="water"',
          "Clear Water"
        )}</span>
        ${protoTextBtn("Clear")}
      </div>
    `;
  const previews = {
    button: `${protoBtn("Save")}${protoBtn("Hover", "", { hover: true })}${protoGhost("Cancel")}${protoTextBtn(
      "Skip"
    )}${protoBtn("Disabled", "", { disabled: true })}`,
    icon: `
      <div class="ds-icon-row">${protoIconNames()
        .map(
          (kind) =>
            `<span class="ds-icon-item"><span class="ds-icon-mark">${protoIconMark(
              kind
            )}</span><span class="ds-icon-name">${protoEsc(kind)}</span></span>`
        )
        .join("")}</div>
      <div class="ds-icon-row ds-icon-sizes">${[16, 18, 24]
        .map(
          (size) =>
            `<span class="ds-icon-item"><span class="ds-icon-mark" style="width:${size}px;height:${size}px">${protoIconMark(
              "export"
            )}</span><span class="ds-icon-name">${size}</span></span>`
        )
        .join("")}</div>
    `,
    "icon-button": `${protoIconBtn("export", "Export")}${protoIconBtn("filter", "Filter")}${protoIconBtn(
      "tag",
      "Add tag"
    )}${protoIconBtn("analyse", "Analyse")}${protoIconBtn("expand", "Expand")}${protoIconBtn("close", "Close")}${protoIconBtn("send", "Send", "", { disabled: true })}`,
    avatar: `${protoAvatarBtn("ME")}${protoAvatarBtn("SL")}`,
    "button-group": `${protoBtn("Done")}${protoGhost("Cancel")}${protoTextBtn("Skip")}`,
    input: `${protoField(
      "Email address",
      'type="email" placeholder="name@company.com" autocomplete="email"'
    )}${protoField("Name", 'type="text" value="Shaun Leishman"')}${protoField(
      "Email address",
      'type="email" value="shaun@imserv.com" disabled autocomplete="email"'
    )}`,
    "color-picker": `
      <div class="astral-brand-colours" style="margin:0">
        <div class="astral-brand-row" data-proto-brand-row="primary">
          <span class="astral-brand-row-name">Primary colour</span>
          <input type="text" value="#00020B" readonly />
          <button type="button" class="astral-brand-swatch" style="background:#00020B" aria-label="Pick Primary colour"></button>
        </div>
      </div>
    `,
    search: `<div class="astral-tree-tools" style="width:min(28rem,100%)">${search}${filter}</div>`,
    select: `<div class="astral-preview-pick"><span>Flow</span>${flowSelect}</div>${dateSelect}`,
    "date-picker": `${dateSelect}${protoIconBtn("prev", "Previous")}${protoIconBtn("next", "Next")}`,
    filter: `${filter}${filterPills}`,
    textarea: protoTextarea("Comment", "Check the overnight read."),
    control: `
      <span class="ds-check">${protoCheck(true)}<span>Show estimated</span></span>
      <span class="ds-check">${protoCheck(false)}<span>Show estimated</span></span>
      ${protoSwitch(true)}
      ${protoSwitch(false, "Off")}
    `,
    card: protoCard("Crewe depot", "1 meter"),
    list: `
      <aside class="astral-list">
        <ul class="astral-tree">
          <li><button type="button" class="astral-group is-on"><span class="astral-group-name">All</span><span class="astral-muted">11 sites</span></button></li>
          <li><button type="button" class="astral-group"><span class="astral-group-name">Network Rail</span><span class="astral-muted">5 sites</span></button></li>
        </ul>
      </aside>
    `,
    table: protoTable(
      ["Meter", "State"],
      [
        ["1600002234567", protoStatePill("Sending")],
        ["1600001234567", protoStatePill("Odd use")],
      ]
    ),
    tag: `${protoTag("Live", "People are sent this report.")}${protoTag(
      "Waiting",
      "This report is not in yet. You cannot run it."
    )}${protoTag("Custom", "A name only. You cannot run it yet.")}${protoTag("Manager")}`,
    state: `${protoStatePill("Sending")}${protoStatePill("Odd use")}${protoStatePill(
      "Missing data"
    )}${protoStatePill("Not sending")}`,
    "flow-pill": `${protoFlowPill("in")}${protoFlowPill("out")}`,
    count: `<span class="ds-count is-filter">${protoCountChip(2)}</span><span class="ds-count is-compare">${protoCountChip(
      3
    )}</span>`,
    "meter-pill": meterPills,
    modal: `
      <div class="astral-modal" role="dialog" aria-labelledby="library-modal-title">
        ${protoModalHead(
          "library-modal-title",
          "Add a team",
          "Name the team and the company.",
          "team"
        )}
        <div class="astral-modal-body">${protoField("Team name", 'type="text" value="Data"')}</div>
        <div class="astral-modal-foot">${protoBtn("Add team")}${protoGhost("Cancel")}</div>
      </div>
    `,
    status: `${protoStatePill("Sending")}${protoStatePill("Odd use")}${protoStatePill(
      "Missing data"
    )}${protoStatePill("Not sending")}${protoTag("Live", "People are sent this report.")}${protoTag(
      "Waiting",
      "This report is not in yet. You cannot run it."
    )}${protoTag("Custom", "A name only. You cannot run it yet.")}`,
    empty: protoEmpty(
      "Select a group or a site",
      "Pick All or a group for a collective overview, or a site for its single version of the truth."
    ),
    "page-header": protoPaneHead("Network Rail", "Crewe depot", protoGhost("Compare")),
    tabs: protoTabs(
      [
        { id: "consumption", name: "Consumption" },
        { id: "cost", name: "Cost" },
        { id: "carbon", name: "Carbon" },
        { id: "profile", name: "Site profile" },
        { id: "alerts", name: "Alerts" },
        { id: "queries", name: "Queries" },
      ],
      "consumption",
      "data-library-tab",
      "Consumption, Cost, Carbon, Site profile, Alerts, and Queries"
    ),
    breadcrumbs: protoBreadcrumbs(["Network Rail", "Crewe depot", "1600002234567"]),
    pagination: `${protoIconBtn("prev", "Previous")}${protoIconBtn("next", "Next", "", {
      disabled: true,
      tipLabel: "Latest window",
    })}`,
    tooltip: `${protoIconBtn("export", "Export")}${protoTag("Live", "People are sent this report.")}`,
    banner: protoBanner(
      "Your CSV is processing.",
      `${protoGhost("View downloads")}${protoIconBtn("close", "Hide")}`
    ),
  };
  return previews[id] || "<p>No preview yet.</p>";
}

window.AstralUI = {
  preview: astralPreview,
  icons: PROTO_ICON_MARKS,
  button: protoBtn,
  ghost: protoGhost,
  text: protoTextBtn,
  iconButton: protoIconBtn,
  field: protoField,
  tag: protoTag,
  switch: protoSwitch,
  tabs: protoTabs,
  filter: protoFilterShell,
  search: protoSearchField,
  modalHead: protoModalHead,
  check: protoCheck,
};
