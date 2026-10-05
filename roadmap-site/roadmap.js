// Roadmap site. What Astral delivers, release by release, from late 2026 to 2028.
(function () {
  const main = document.getElementById("lib-main");

  const KINDS = {
    core: { label: "Core", legend: "Core platform" },
    new: { label: "New", legend: "New capability" },
    intel: { label: "Intelligence", legend: "Intelligence, powered by Arbnco" },
  };

  const RELEASES = [
    {
      id: "v1",
      when: "Late 2026",
      name: "The core platform",
      summary: "The core platform, and a smooth move across from today's portals.",
      quarters: [
        {
          q: "Q3",
          year: "2026",
          items: [
            ["core", "Your Astral portal", "One secure place for all your energy data."],
            ["core", "Data, downloads, and exports", "Everything you pull today, carried across."],
            ["core", "Scheduled reports", "Reports that arrive on your timetable."],
            ["core", "Energy analysis", "See what your sites use, and why."],
            ["core", "Document hub", "Your documents, in one place."],
            ["core", "Unmetered supplies", "Unmetered data and reporting, carried across."],
          ],
        },
        {
          q: "Q4",
          year: "2026",
          items: [
            ["core", "Portfolio view", "Your estate, organised the way you work."],
            ["core", "Proactive alerts", "Know before it becomes a problem."],
          ],
        },
      ],
    },
    {
      id: "v2",
      when: "First half of 2027",
      name: "The differentiators",
      summary: "The differentiators. Data health, settlement, live job status, and intelligence.",
      quarters: [
        {
          q: "Q1",
          year: "2027",
          items: [
            ["new", "Data health", "Confidence your data is complete."],
            ["new", "Capacity and cross-site insight", "Where capacity is wasted, and which sites drive use."],
            ["new", "Online booking", "Request a site visit online."],
            ["intel", "Energy intelligence", "Insight built on your own data."],
          ],
        },
        {
          q: "Q2",
          year: "2027",
          items: [
            ["new", "My tickets", "Raise a query and follow it to a close."],
            ["new", "Settlement performance", "How your meters perform in settlement."],
            ["new", "Live job status", "Where every job stands, now."],
            ["new", "Unmetered reporting and insight", "Richer unmetered reports."],
            ["new", "Site video", "Video evidence from site visits."],
            ["new", "Asset visibility", "A first view of your site assets."],
          ],
        },
      ],
    },
    {
      id: "v3",
      when: "Late 2027 to 2028",
      name: "Modules and integrations",
      summary: "Added-value modules and the integrations that join it all up.",
      quarters: [
        {
          q: "Q3",
          year: "2027",
          items: [
            ["new", "Next best action", "What is holding a job up, and who acts."],
            ["new", "Leak detection", "Catch leaks early."],
            ["intel", "Asset health outlook", "Which assets need attention next."],
            ["new", "Asset register", "Every asset, metered and unmetered."],
            ["intel", "Efficiency and renewables", "Where to save, and what renewables return."],
          ],
        },
        {
          q: "Q4",
          year: "2027",
          items: [
            ["new", "Full self-serve booking", "Book and amend visits yourself."],
            ["new", "Meter location", "Find every meter first time."],
          ],
        },
        {
          q: "Q1",
          year: "2028",
          items: [
            ["new", "Invoices and statements", "Bills alongside your data."],
            ["new", "Field service updates", "Engineer outcomes, straight into the portal."],
            ["intel", "Carbon compliance", "EPC, MEES, and carbon reporting."],
          ],
        },
      ],
    },
  ];

  const PICKS = [
    { id: "all", name: "All", when: "2026 to 2028", summary: "The full roadmap." },
    ...RELEASES.map((r) => ({ id: r.id, name: r.id, when: r.when, summary: r.summary })),
  ];

  let pick = "all";

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

  const countFor = (id) =>
    RELEASES.filter((r) => id === "all" || r.id === id).reduce(
      (sum, r) => sum + r.quarters.reduce((n, q) => n + q.items.length, 0),
      0
    );

  function picker() {
    return `
      <div class="rm-picks" role="group" aria-label="Release">
        ${PICKS.map((p) => {
          const on = p.id === pick;
          return `
            <button type="button" class="rm-pick${on ? " is-on" : ""}" data-rm-pick="${esc(p.id)}" aria-pressed="${on}">
              <span class="rm-pick-name">${esc(p.name)}</span>
              <span class="rm-pick-when">${esc(p.when)}</span>
              <span class="rm-pick-summary">${esc(p.summary)}</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  function legend() {
    return `
      <ul class="rm-legend" aria-label="Key">
        ${Object.entries(KINDS)
          .map(([id, kind]) => `<li><span class="rm-swatch is-${id}" aria-hidden="true"></span>${esc(kind.legend)}</li>`)
          .join("")}
      </ul>
    `;
  }

  function item([kind, title, text], release) {
    return `
      <li class="rm-item is-${kind}">
        <h4>${esc(title)}</h4>
        <p>${esc(text)}</p>
        <p class="rm-item-foot"><span class="rm-kind">${esc(KINDS[kind].label)}</span><span>${esc(release.id)}</span></p>
      </li>
    `;
  }

  function release(r) {
    return `
      <section class="rm-release" style="--rm-cols: ${r.quarters.length}" aria-labelledby="rm-${r.id}">
        <h2 class="rm-release-head" id="rm-${r.id}">
          <span class="rm-release-id">${esc(r.id)}</span>
          <span>${esc(r.when)}</span>
          <span>${esc(r.name)}</span>
        </h2>
        ${r.quarters
          .map(
            (q) => `
              <div class="rm-quarter">
                <h3><span class="rm-q">${esc(q.q)}</span> ${esc(q.year)}</h3>
                <ul class="rm-items">${q.items.map((it) => item(it, r)).join("")}</ul>
              </div>
            `
          )
          .join("")}
      </section>
    `;
  }

  function board() {
    const shown = RELEASES.filter((r) => pick === "all" || r.id === pick);
    const cols = shown.reduce((n, r) => n + r.quarters.length, 0);
    return `
      <div class="rm-board-wrap" role="region" aria-label="Roadmap board" tabindex="0">
        <div class="rm-board" style="--rm-cols: ${cols}">${shown.map(release).join("")}</div>
      </div>
    `;
  }

  function render(focusPick) {
    const count = countFor(pick);
    main.innerHTML = `
      <div class="lib-lead">
        <h1>Roadmap</h1>
        <p>What Astral delivers from late 2026 to 2028. Each release builds on the one before.</p>
      </div>
      ${picker()}
      <div class="rm-tools">
        ${legend()}
        <p class="rm-count" role="status">${count} ${count === 1 ? "item" : "items"}</p>
      </div>
      ${board()}
    `;
    if (focusPick) main.querySelector(`[data-rm-pick="${CSS.escape(pick)}"]`)?.focus();
  }

  function readHash() {
    const raw = (location.hash || "").slice(1);
    pick = PICKS.some((p) => p.id === raw) ? raw : "all";
  }

  function writeHash() {
    const next = `#${pick}`;
    if (location.hash !== next) history.replaceState(null, "", next);
  }

  main.addEventListener("click", (event) => {
    const button = event.target.closest("[data-rm-pick]");
    if (!button || button.dataset.rmPick === pick) return;
    pick = button.dataset.rmPick;
    writeHash();
    render(true);
  });

  window.addEventListener("hashchange", () => {
    readHash();
    render();
  });

  // Preview bar for when the site opens on its own, outside the prototype.
  const PREVIEW_HIDE_KEY = "astral-lib-preview-hidden";

  function framed() {
    try {
      return window.self !== window.top;
    } catch (err) {
      return true;
    }
  }

  function previewHidden() {
    try {
      return sessionStorage.getItem(PREVIEW_HIDE_KEY) === "1";
    } catch (err) {
      return false;
    }
  }

  function setPreviewHidden(on) {
    try {
      if (on) sessionStorage.setItem(PREVIEW_HIDE_KEY, "1");
      else sessionStorage.removeItem(PREVIEW_HIDE_KEY);
    } catch (err) {
      /* Session storage can be blocked. */
    }
  }

  function previewHtml() {
    if (typeof protoTabs !== "function" || typeof protoGhost !== "function") return "";
    if (previewHidden()) {
      return `<div class="astral-preview-menu is-shut">${protoIconBtn("expand", "Expand", 'data-rm-preview="show"')}</div>`;
    }
    const tabs = protoTabs(
      [
        { id: "prototype", name: "Prototype" },
        { id: "library", name: "Library" },
        { id: "emails", name: "Emails" },
        { id: "roadmap", name: "Roadmap" },
      ],
      "roadmap",
      "data-rm-share",
      "Preview"
    );
    return `<div class="astral-preview-menu">${tabs}${protoGhost("Hide", 'data-rm-preview="hide"')}</div>`;
  }

  function paintPreview() {
    if (framed()) return;
    const html = previewHtml();
    if (!html) return;
    const tmp = document.createElement("div");
    tmp.innerHTML = html.trim();
    const next = tmp.firstElementChild;
    const menu = document.querySelector("body > .astral-preview-menu");
    if (menu) menu.replaceWith(next);
    else document.body.appendChild(next);
  }

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-rm-preview]");
    if (toggle) {
      setPreviewHidden(toggle.dataset.rmPreview === "hide");
      paintPreview();
      return;
    }
    const share = event.target.closest("[data-rm-share]");
    if (!share) return;
    const to = {
      prototype: "../?preview=prototype",
      library: "../library-site/",
      emails: "../emails-site/",
    }[share.dataset.rmShare];
    if (to) location.assign(new URL(to, location.href).href);
  });

  readHash();
  render();
  paintPreview();
})();
