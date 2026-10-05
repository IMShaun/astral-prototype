// Emails site. Lists each email Astral sends and shows it as the person gets it.
(function () {
  const { GROUPS, SCENARIOS, SENDER, render: renderEmail, text: emailText, esc } = window.AstralEmails;
  const main = document.getElementById("lib-main");
  const nav = document.querySelector(".lib-nav");
  const LOGO = new URL("../assets/brand/logo/wordmark-cyan-on-black.svg", location.href).href;
  const VIEWS = [
    { id: "desktop", name: "Desktop" },
    { id: "mobile", name: "Mobile" },
    { id: "text", name: "Plain text" },
  ];

  let page = "scenarios";
  let emailId = SCENARIOS[0].id;
  let view = "desktop";

  const byId = (id) => SCENARIOS.find((item) => item.id === id);
  const who = (person) => `${person.name} &lt;${esc(person.email)}&gt;`;

  function list() {
    return `
      <nav class="lib-comp-list" aria-label="Emails">
        ${GROUPS.map((group) => {
          const items = SCENARIOS.filter((item) => item.group === group.id);
          if (!items.length) return "";
          return `
            <p class="lib-help">${esc(group.name)}</p>
            ${items
              .map(
                (item) =>
                  `<button type="button" class="${item.id === emailId ? "is-on" : ""}" data-em-id="${esc(item.id)}"${
                    item.id === emailId ? ' aria-current="page"' : ""
                  }>${esc(item.name)}</button>`
              )
              .join("")}
          `;
        }).join("")}
      </nav>
    `;
  }

  function preview(item) {
    if (view === "text") {
      return `<pre class="em-text" tabindex="0" aria-label="Plain text version">${esc(emailText(item))}</pre>`;
    }
    return `
      <div class="em-stage is-${view}">
        <iframe class="em-frame" title="${esc(item.subject)}" data-em-frame></iframe>
      </div>
    `;
  }

  function scenarioPage() {
    const item = byId(emailId) || SCENARIOS[0];
    const group = GROUPS.find((g) => g.id === item.group);
    const viewTabs =
      typeof protoTabs === "function" ? protoTabs(VIEWS, view, "data-em-view", "Email view") : "";
    return `
      <div class="lib-split">
        ${list()}
        <section class="lib-pane" aria-labelledby="em-title">
          <div class="em-head">
            <p class="lib-help">${esc(group ? group.name : "")}</p>
            <h2 id="em-title">${esc(item.name)}</h2>
            <p>${esc(item.summary)}</p>
          </div>
          <table class="lib-token-table em-facts">
            <tbody>
              <tr><th scope="row">When it sends</th><td>${esc(item.when)}</td></tr>
              <tr><th scope="row">Who gets it</th><td>${esc(item.who)}</td></tr>
              <tr><th scope="row">Controlled by</th><td>${esc(item.control)}</td></tr>
            </tbody>
          </table>
          <div class="em-tools">
            ${viewTabs}
            <button type="button" class="lib-ghost" data-em-save>Download HTML</button>
          </div>
          <article class="em-mail" aria-label="Email">
            <dl class="em-envelope">
              <div><dt>From</dt><dd>${esc(SENDER.name)} &lt;${esc(SENDER.email)}&gt;</dd></div>
              <div><dt>To</dt><dd>${esc(item.to.name)} &lt;${esc(item.to.email)}&gt;</dd></div>
              <div><dt>Subject</dt><dd class="em-subject">${esc(item.subject)}</dd></div>
              <div><dt>Preview</dt><dd class="em-preheader">${esc(item.preheader)}</dd></div>
            </dl>
            ${preview(item)}
          </article>
        </section>
      </div>
    `;
  }

  function guidelinesPage() {
    const rows = SCENARIOS.map((item) => {
      const group = GROUPS.find((g) => g.id === item.group);
      return `<tr>
        <td><button type="button" class="em-link" data-em-id="${esc(item.id)}">${esc(item.name)}</button></td>
        <td>${esc(group ? group.name : "")}</td>
        <td>${esc(item.when)}</td>
        <td>${esc(item.control)}</td>
      </tr>`;
    }).join("");
    return `
      <div class="lib-lead">
        <h1>Email guidelines</h1>
        <p>How Astral emails look and read, and when each one sends. Every email uses the same parts, so people learn them once.</p>
      </div>
      <div class="lib-grid">
        <section class="lib-card">
          <h2>Parts of an email</h2>
          <ol>
            <li><strong>Subject</strong> says what happened and where. Keep it under 60 characters.</li>
            <li><strong>Preview text</strong> adds the next most useful fact. Never repeat the subject.</li>
            <li><strong>Header</strong> is black with the cyan wordmark.</li>
            <li><strong>Label</strong> above the title says what kind of email it is, such as Alert or Report.</li>
            <li><strong>Title</strong> says what happened in a few words.</li>
            <li><strong>Body</strong> leads with the facts people act on. Use a facts table, not a paragraph.</li>
            <li><strong>One button</strong> says where it goes, such as Open alert.</li>
            <li><strong>Footer</strong> says why they got it. Add Manage email notifications when Notifications controls it.</li>
          </ol>
        </section>
        <section class="lib-card">
          <h2>Brand</h2>
          <ul>
            <li>Pair black with white or cyan. Never put cyan text on white.</li>
            <li>Buttons are teal, #028178, with white text.</li>
            <li>Levels use the app colours. High is red, Medium is amber, Low is teal.</li>
            <li>Roobert, falling back to Aptos, Segoe UI, Helvetica, then Arial.</li>
            <li>600px wide, built with tables and inline styles so Outlook and Gmail show it the same.</li>
            <li>Gmail and Outlook block SVG. Send the wordmark as a hosted PNG in production.</li>
          </ul>
        </section>
        <section class="lib-card">
          <h2>Writing</h2>
          <ul>
            <li>Sentence case, en-GB spelling. No colons or em dashes.</li>
            <li>Dates as 4 Sep 2026. Times as 16.00. Date first, then the time.</li>
            <li>Use the app's words. Alert, Query, Report, Download, Data alert.</li>
            <li>Name the site and the person. "Priya Shah replied", not "Someone replied".</li>
            <li>Missing data is not zero use. Say so.</li>
            <li>Codes are 6 digits. Never send a password or a link that signs someone in.</li>
            <li>Write percent, not the symbol. 38 percent above expected.</li>
            <li>Reading times are UTC, like the graph. Send times say UK time or UTC, like the report.</li>
            <li>Name a meter by its name and MPAN. Say Incoming and Outgoing on the site.</li>
            <li>Use full words. Write do not, not the short form.</li>
            <li>Do not promise a time unless the product keeps it.</li>
          </ul>
        </section>
        <section class="lib-card">
          <h2>How often</h2>
          <ul>
            <li>Every time sends each alert, query, and document as it happens. Alerts that land close together are grouped.</li>
            <li>Daily, Weekly, and Monthly send one summary instead, and only when there was activity.</li>
            <li>Never stops these emails. Security emails, invites, reports, and Data alerts still send.</li>
          </ul>
        </section>
      </div>
      <div class="lib-code-head em-section-head"><h3>When each email sends</h3></div>
      <div class="em-table-wrap">
        <table class="lib-token-table em-when">
          <thead>
            <tr><th scope="col">Email</th><th scope="col">Area</th><th scope="col">When it sends</th><th scope="col">Controlled by</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  function fitFrame(frame) {
    const doc = frame.contentDocument;
    if (!doc || !doc.documentElement) return;
    frame.style.height = `${doc.documentElement.scrollHeight}px`;
  }

  function paintFrame() {
    const frame = main.querySelector("[data-em-frame]");
    if (!frame) return;
    const item = byId(emailId);
    frame.addEventListener("load", () => fitFrame(frame), { once: true });
    frame.srcdoc = renderEmail(item, LOGO);
  }

  function render(keepScroll) {
    nav.querySelectorAll("button").forEach((button) => {
      const on = button.dataset.emPage === page;
      button.classList.toggle("is-on", on);
      if (on) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    main.innerHTML = page === "guidelines" ? guidelinesPage() : scenarioPage();
    paintFrame();
    if (!keepScroll) window.scrollTo(0, 0);
  }

  function readHash() {
    const raw = (location.hash || "").slice(1);
    if (raw === "guidelines") {
      page = "guidelines";
      return;
    }
    page = "scenarios";
    const id = raw.split("/")[1];
    if (id && byId(id)) emailId = id;
  }

  function writeHash() {
    const next = page === "guidelines" ? "#guidelines" : `#emails/${emailId}`;
    if (location.hash !== next) history.replaceState(null, "", next);
  }

  function go(nextPage, id) {
    page = nextPage;
    if (id) emailId = id;
    writeHash();
    render();
  }

  function save() {
    const item = byId(emailId);
    const blob = new Blob([renderEmail(item, LOGO)], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `astral-email-${item.id}.html`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-em-page]");
    if (button) go(button.dataset.emPage);
  });

  main.addEventListener("click", (event) => {
    const pick = event.target.closest("[data-em-id]");
    if (pick) {
      const fromList = !!pick.closest(".lib-comp-list");
      go("scenarios", pick.dataset.emId);
      if (fromList) main.querySelector(`.lib-comp-list [data-em-id="${CSS.escape(emailId)}"]`)?.focus();
      return;
    }
    const tab = event.target.closest("[data-em-view]");
    if (tab) {
      view = tab.dataset.emView;
      render(true);
      main.querySelector(`[data-em-view="${CSS.escape(view)}"]`)?.focus();
      return;
    }
    if (event.target.closest("[data-em-save]")) save();
  });

  main.addEventListener("keydown", (event) => {
    const tab = event.target.closest("[data-em-view]");
    if (!tab || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    const at = VIEWS.findIndex((v) => v.id === tab.dataset.emView);
    const step = event.key === "ArrowRight" ? 1 : -1;
    view = VIEWS[(at + step + VIEWS.length) % VIEWS.length].id;
    event.preventDefault();
    render(true);
    main.querySelector(`[data-em-view="${CSS.escape(view)}"]`)?.focus();
  });

  window.addEventListener("resize", () => {
    const frame = main.querySelector("[data-em-frame]");
    if (frame) fitFrame(frame);
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
      return `<div class="astral-preview-menu is-shut">${protoIconBtn("expand", "Expand", 'data-em-preview="show"')}</div>`;
    }
    const tabs = protoTabs(
      [
        { id: "prototype", name: "Prototype" },
        { id: "library", name: "Library" },
        { id: "emails", name: "Emails" },
        { id: "roadmap", name: "Roadmap" },
      ],
      "emails",
      "data-em-share",
      "Preview"
    );
    return `<div class="astral-preview-menu">${tabs}${protoGhost("Hide", 'data-em-preview="hide"')}</div>`;
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
    const toggle = event.target.closest("[data-em-preview]");
    if (toggle) {
      setPreviewHidden(toggle.dataset.emPreview === "hide");
      paintPreview();
      return;
    }
    const share = event.target.closest("[data-em-share]");
    if (!share) return;
    if (share.dataset.emShare === "prototype") location.assign(new URL("../?preview=prototype", location.href).href);
    if (share.dataset.emShare === "library") location.assign(new URL("../library-site/", location.href).href);
    if (share.dataset.emShare === "roadmap") location.assign(new URL("../roadmap-site/", location.href).href);
  });

  readHash();
  writeHash();
  render();
  paintPreview();
})();
