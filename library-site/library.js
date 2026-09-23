(() => {
  const data = window.ASTRAL_LIB;
  if (!data) return;

  const FAMILIES = [
    { id: "core", name: "Core" },
    { id: "forms", name: "Forms" },
    { id: "indicators", name: "Indicators" },
    { id: "navigation", name: "Navigation" },
    { id: "messaging", name: "Messaging" },
  ];

  const TOKEN_PAGES = [
    { id: "colour", name: "Colour" },
    { id: "space", name: "Space" },
    { id: "type", name: "Type" },
    { id: "shape", name: "Shape" },
  ];

  const main = document.getElementById("lib-main");
  const nav = document.querySelector(".lib-nav");
  let page = "start";
  let tokenKind = "colour";
  let componentId = (data.components[0] && data.components[0].id) || "button";
  let accessLayer =
    (data.access && data.access.layers && data.access.layers[0] && data.access.layers[0].id) ||
    "stack";
  let featureId = "";
  let featureStoryId = "";

  (data.tokens || []).forEach((token) => {
    if (token.cssVar && token.value) {
      document.documentElement.style.setProperty(token.cssVar, token.value);
    }
  });
  if (data.tokensCss) {
    const sheet = document.createElement("style");
    sheet.textContent = data.tokensCss;
    document.head.appendChild(sheet);
  }

  function fileHint(item) {
    if (item.source && item.sourceName) {
      return `Copy ${item.sourceName} from this page into the product repo.`;
    }
    const name = String(item.file || "")
      .split("/")
      .filter(Boolean)
      .pop();
    if (!name) return "";
    return `Copy the snippet into the product repo as ${name}.`;
  }

  function esc(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function copy(text, button) {
    const done = () => {
      const old = button.textContent;
      button.textContent = "Copied";
      button.classList.add("lib-copied");
      setTimeout(() => {
        button.textContent = old;
        button.classList.remove("lib-copied");
      }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {});
    }
  }

  function tokenRows(kind) {
    return (data.tokens || []).filter((token) => token.kind === kind);
  }

  function fileButtons(kind) {
    return (data.files || [])
      .filter((file) => {
        if (kind === "font") return file.name.startsWith("Roobert");
        return true;
      })
      .map(
        (file) =>
          `<button type="button" class="lib-ghost" data-download="${esc(file.id)}">${esc(
            file.name.startsWith("Roobert")
              ? "Download " + file.name.replace(".otf", "")
              : file.name.includes("logomark")
                ? "Download IMSERV mark"
                : file.name.includes("auth")
                  ? "Download auth grid"
                  : "Download " + file.name
          )}</button>`
      )
      .join("");
  }

  function startPage() {
    const icon = (data.components || []).find((item) => item.id === "icon");
    return `
      <section class="lib-lead">
        <h1>Astral library</h1>
        <p>${esc(data.lead)}</p>
      </section>
      <div class="lib-grid">
        <article class="lib-card">
          <h2>Copy the files</h2>
          <p>Download on the right of the nav opens a modal. Pick Components, Tokens, and Prototype for the React starter. Copy buttons below still give you one file at a time. Put Roobert in src/theme/fonts. Aptos is the fallback if a weight is missing.</p>
        </article>
        <article class="lib-card">
          <h2>Put the snippet in the file</h2>
          <p>Open Components, choose a component, and copy the snippet into that file. Icon is the full file, not a snippet. Pass data through props. Do not fetch inside the component.</p>
        </article>
        <article class="lib-card">
          <h2>Keep the live look</h2>
          <p>Filled primary buttons use white type. Do not put cyan type on white. Quiet outlines are 1px Infra Grey B. Focus is a 2px black edge. Disabled is Infra Grey, not a faded colour. State uses the named status variables.</p>
        </article>
      </div>
      <div class="lib-copy-row">
        <button type="button" class="lib-ghost" data-copy="css">Copy tokens.css</button>
        <button type="button" class="lib-ghost" data-copy="theme">Copy theme.ts</button>
        <button type="button" class="lib-ghost" data-copy="look">Copy components.css</button>
        ${
          icon && icon.source
            ? `<button type="button" class="lib-ghost" data-copy-source="icon">Copy Icon.tsx</button>`
            : ""
        }
      </div>
      <div class="lib-copy-row">
        ${fileButtons()}
      </div>
      <div class="lib-code-head">
        <h3>Import once</h3>
        <button type="button" class="lib-ghost" data-copy="start">Copy import</button>
      </div>
      <pre class="lib-code"><code>${esc(data.reactStart)}</code></pre>
    `;
  }

  function filesPage() {
    const ui = window.AstralUI;
    const go =
      ui && ui.button
        ? ui.button("Download the look files", 'data-lib-files="zip"')
        : `<button type="button" class="astral-btn" data-lib-files="zip">Download the look files</button>`;
    return `
      <section class="lib-lead">
        <h1>Look files</h1>
        <p>The two CSS files for the product repo. Checksum these. Do not scrape the site.</p>
      </section>
      <article class="lib-card">
        <h2>tokens.css and components.css</h2>
        <p>This copy includes table, sort, action groups, account, the top nav, and State colour. Status tokens match the live product.</p>
        <div class="lib-copy-row">${go}</div>
      </article>
    `;
  }

  function tokensPage() {
    const rows = tokenRows(tokenKind);
    const body = rows
      .map((token) => {
        const waiting = !token.value;
        const swatch =
          token.kind === "colour"
            ? waiting
              ? `<span class="lib-swatch is-empty"></span>`
              : `<span class="lib-swatch" style="background:${esc(token.value)}"></span>`
            : "";
        return `
          <tr>
            <td>${swatch}</td>
            <td>
              <button type="button" class="lib-token" data-copy-text="${esc(token.cssVar)}">
                ${esc(token.name)}
              </button>
            </td>
            <td><code>${esc(token.cssVar)}</code></td>
            <td><code>${esc(token.theme)}</code></td>
            <td><code>${esc(waiting ? "Waiting" : token.value)}</code></td>
          </tr>
        `;
      })
      .join("");
    const styleRows = (data.styles || [])
      .map(
        (style) => `
          <tr>
            <td><p class="lib-type-sample ${esc(style.className)}">${esc(style.sample)}</p></td>
            <td>${esc(style.name)}</td>
            <td><code>${esc(style.className)}</code></td>
            <td><code>${esc(style.fontSize)}</code></td>
            <td><code>${esc(style.fontWeight)}</code></td>
          </tr>
        `
      )
      .join("");
    const styleTable =
      tokenKind === "type"
        ? `
          <h3>Text styles</h3>
          <p class="lib-help">Use the class from tokens.css, or copy the CSS variables into the React piece. Download Roobert from this page and put the files in src/theme/fonts. Aptos is the fallback.</p>
          <div class="lib-copy-row">${fileButtons("font")}</div>
          <table class="lib-token-table">
            <thead><tr><th>Look</th><th>Name</th><th>Class</th><th>Size</th><th>Weight</th></tr></thead>
            <tbody>${styleRows}</tbody>
          </table>
        `
        : "";
    return `
      <section class="lib-lead">
        <h1>Tokens</h1>
        <p>These variables match the live product. Use the CSS variable in styles. Use the theme path in React. Choose a name to copy the CSS variable.</p>
      </section>
      <div class="lib-split">
        <nav class="lib-list" aria-label="Token kind">
          ${TOKEN_PAGES.map(
            (item) =>
              `<button type="button" data-token-kind="${item.id}" class="${
                item.id === tokenKind ? "is-on" : ""
              }">${item.name}</button>`
          ).join("")}
        </nav>
        <div class="lib-pane">
          <div class="lib-copy-row">
            <button type="button" class="lib-ghost" data-copy="css">Copy tokens.css</button>
            <button type="button" class="lib-ghost" data-copy="theme">Copy theme.ts</button>
            <button type="button" class="lib-ghost" data-copy="look">Copy components.css</button>
          </div>
          <table class="lib-token-table">
            <thead><tr><th></th><th>Name</th><th>CSS</th><th>React theme</th><th>Value</th></tr></thead>
            <tbody>${body}</tbody>
          </table>
          ${styleTable}
        </div>
      </div>
    `;
  }

  function componentPage() {
    const item = data.components.find((comp) => comp.id === componentId) || data.components[0];
    const groups = FAMILIES.map((family) => ({
      family,
      items: data.components.filter((comp) => comp.family === family.id),
    })).filter((group) => group.items.length);
    const preview = window.AstralUI && AstralUI.preview
      ? AstralUI.preview(item.id)
      : "<p>No preview for this component yet.</p>";
    const chips = (list) =>
      list && list.length
        ? `<ul class="lib-chips">${list.map((entry) => `<li>${esc(entry)}</li>`).join("")}</ul>`
        : "<p class='lib-help'>None yet.</p>";
    const props = (item.props || [])
      .map(
        (prop) =>
          `<tr><td><code>${esc(prop.name)}</code></td><td><code>${esc(
            prop.type
          )}</code></td><td>${esc(prop.note)}</td></tr>`
      )
      .join("");
    const tokenBits = (item.tokens || [])
      .map((id) => data.tokenIndex[id])
      .filter(Boolean)
      .map(
        (token) =>
          `<tr><td>${esc(token.name)}</td><td><code>${esc(token.cssVar)}</code></td><td><code>${esc(
            token.theme
          )}</code></td></tr>`
      )
      .join("");
    return `
      <section class="lib-lead">
        <h1>Components</h1>
        <p>Choose a component. The preview is the live Astral look. Copy the snippet into the product repo.</p>
      </section>
      <div class="lib-split">
        <nav class="lib-comp-list" aria-label="Components">
          ${groups
            .map(
              (group) =>
                `<p class="lib-help">${esc(group.family.name)}</p>` +
                group.items
                  .map(
                    (comp) =>
                      `<button type="button" data-comp="${esc(comp.id)}" class="${
                        comp.id === item.id ? "is-on" : ""
                      }">${esc(comp.react || comp.name)}</button>`
                  )
                  .join("")
            )
            .join("")}
        </nav>
        <div class="lib-pane">
          <div>
            <h2>${esc(item.react || item.name)}</h2>
            ${
              item.file
                ? `<p class="lib-help">${esc(fileHint(item))}</p>`
                : ""
            }
            <p>${esc(item.summary)}</p>
          </div>
          <div class="ds-preview">${preview}</div>
          <p>${esc(item.usage)}</p>
          <div class="lib-code-head">
            <h3>Snippet</h3>
            <button type="button" class="lib-ghost" data-copy-snippet="${esc(item.id)}">Copy snippet</button>
          </div>
          <pre class="lib-code"><code>${esc(item.snippet)}</code></pre>
          ${
            item.source
              ? `<div class="lib-code-head">
            <h3>${esc(item.sourceName || "File")}</h3>
            <button type="button" class="lib-ghost" data-copy-source="${esc(item.id)}">Copy ${esc(
                  item.sourceName || "file"
                )}</button>
          </div>
          <pre class="lib-code"><code>${esc(item.source)}</code></pre>`
              : ""
          }
          <h3>Kinds</h3>
          ${chips(item.variants)}
          <h3>States</h3>
          ${chips(item.states)}
          <h3>Props</h3>
          <table class="lib-token-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Note</th></tr></thead>
            <tbody>${props || "<tr><td colspan='3'>None yet.</td></tr>"}</tbody>
          </table>
          <h3>Tokens</h3>
          <table class="lib-token-table">
            <thead><tr><th>Name</th><th>CSS</th><th>React theme</th></tr></thead>
            <tbody>${tokenBits || "<tr><td colspan='3'>None yet.</td></tr>"}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function featurePack() {
    return data.features || { lead: "", items: [] };
  }

  function featureList() {
    return (featurePack().items || []).filter((item) => item && item.id);
  }

  function featureById(id) {
    return featureList().find((item) => item.id === id) || null;
  }

  function featureStories(feature) {
    return ((feature && feature.stories) || []).filter((item) => item && item.id);
  }

  function factorScore(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 0;
    return Math.max(1, Math.min(5, n));
  }

  function estimateScore(story) {
    const estimate = story && story.estimate;
    if (!estimate) return 0;
    return (
      factorScore(estimate.complexity) * 0.4 +
      factorScore(estimate.effort) * 0.3 +
      factorScore(estimate.risk) * 0.2 +
      factorScore(estimate.dependencies) * 0.1
    );
  }

  function storyPoints(story) {
    if (story && story.estimate) {
      const score = estimateScore(story);
      if (score < 1.5) return 1;
      if (score < 2.5) return 2;
      if (score < 3.5) return 3;
      if (score < 4.5) return 5;
      if (score < 5.5) return 8;
      return 13;
    }
    return Number(story && story.points) || 0;
  }

  function estimateHelp() {
    const pack = featurePack().estimate || {};
    return pack.help || "Points are relative size, not days. Find a site or meter is the 2.";
  }

  function estimateBlock(story) {
    const estimate = story.estimate;
    if (!estimate) return "";
    const factors = [
      ["Complexity", estimate.complexity],
      ["Effort", estimate.effort],
      ["Risk", estimate.risk],
      ["Dependencies", estimate.dependencies],
    ]
      .map(
        ([label, value]) => `
          <article class="lib-card lib-stat lib-factor">
            <p class="lib-stat-figure">${esc(factorScore(value))}</p>
            <p>${esc(label)}</p>
          </article>
        `
      )
      .join("");
    const why = estimate.why || "";
    const split =
      storyPoints(story) >= 13
        ? `<p class="lib-help">This is too big for one story. Split it.</p>`
        : "";
    return `
      <h2 class="lib-block-title">Estimate</h2>
      <p class="lib-help">${esc(estimateHelp())}</p>
      <div class="lib-grid lib-stat-grid lib-factor-grid">${factors}</div>
      ${why ? `<p class="lib-help">${esc(endStop(why))}</p>` : ""}
      ${split}
    `;
  }

  function featureStats(feature) {
    const stories = featureStories(feature);
    return {
      stories: stories.length,
      points: stories.reduce((sum, item) => sum + storyPoints(item), 0),
      stages: stories.reduce((sum, item) => sum + ((item.stages || []).length || 0), 0),
      scenarios: stories.reduce((sum, item) => sum + ((item.criteria || []).length || 0), 0),
      roles: ((feature && feature.roles) || []).length,
    };
  }

  function endStop(text) {
    const value = String(text || "").trim();
    if (!value) return "";
    return /[.!?]$/.test(value) ? value : `${value}.`;
  }

  function storyCardCopy(story) {
    const role = story.role || "Viewer";
    const want = story.want || story.summary || "";
    const benefit = story.benefit || "";
    return `
      <p class="lib-story-as">As a ${esc(role)}</p>
      <p class="lib-story-want">I want to ${esc(want)}</p>
      ${benefit ? `<p class="lib-story-so">so that ${esc(endStop(benefit).replace(/\.$/, ""))}.</p>` : ""}
    `;
  }

  function scenarioCard(item) {
    if (!item) return "";
    if (typeof item === "string") {
      return `<article class="lib-card lib-scenario"><p>${esc(endStop(item))}</p></article>`;
    }
    return `
      <article class="lib-card lib-scenario">
        <p><span class="lib-gwt">Given</span> ${esc(endStop(item.given))}</p>
        <p><span class="lib-gwt">When</span> ${esc(endStop(item.when))}</p>
        <p><span class="lib-gwt">Then</span> ${esc(endStop(item.then))}</p>
      </article>
    `;
  }

  function statusLabel(status) {
    if (status === "working") return "Working";
    if (status === "draft") return "Draft";
    if (status === "firm") return "Firm";
    return "Waiting";
  }

  function countPill(n) {
    if (!n) return "";
    return `<span class="astral-count lib-count">${esc(n)}</span>`;
  }

  function tagPill(label, tip) {
    const ui = window.AstralUI;
    if (ui && ui.tag) return ui.tag(label, tip);
    return `<span class="astral-tag">${esc(label)}</span>`;
  }

  function backButton(label, where) {
    const ui = window.AstralUI;
    const mark =
      ui && ui.icons && ui.icons.prev
        ? `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ui.icons.prev}</svg>`
        : "";
    const extra = `data-feature-back="${esc(where)}" aria-label="${esc(label)}"`;
    if (ui && ui.text) {
      return ui.text(`${mark}<span>Back</span>`, extra, { html: true, className: "text-back" });
    }
    return `<button type="button" class="astral-text text-back" ${extra}>${mark}<span>Back</span></button>`;
  }

  function metric(n, label) {
    return `
      <span class="lib-metric">
        ${countPill(n)}
        <span>${esc(label)}</span>
      </span>
    `;
  }

  function statCard(n, label) {
    return `
      <article class="lib-card lib-stat">
        <p class="lib-stat-figure">${esc(n)}</p>
        <p>${esc(label)}</p>
      </article>
    `;
  }

  function stageShot(stage) {
    const src = stage.image || "";
    const alt = stage.caption || stage.name || "Stage";
    const img = src
      ? `<img src="${esc(src)}" alt="${esc(alt)}" onerror="this.closest('.lib-shot').classList.add('is-empty'); this.remove();" />`
      : "";
    return `
      <article class="lib-stage">
        <h3>${esc(stage.name || "Stage")}</h3>
        <p class="lib-help">${esc(stage.caption || "")}</p>
        <figure class="lib-shot${src ? "" : " is-empty"}">${img}</figure>
      </article>
    `;
  }

  function featuresIndexPage() {
    const pack = featurePack();
    const items = featureList();
    const cards = items
      .map((feature) => {
        const stats = featureStats(feature);
        return `
          <button type="button" class="lib-card lib-feature" data-feature="${esc(feature.id)}">
            <span class="lib-card-top">
              <h2>${esc(feature.name)}</h2>
              ${tagPill(statusLabel(feature.status), feature.statusNote || "")}
            </span>
            <p>${esc(feature.summary || "")}</p>
            <span class="lib-metrics">
              ${metric(stats.stories, stats.stories === 1 ? "story" : "stories")}
              ${metric(stats.points, stats.points === 1 ? "point" : "points")}
              ${metric(stats.scenarios, stats.scenarios === 1 ? "scenario" : "scenarios")}
            </span>
          </button>
        `;
      })
      .join("");
    return `
      <section class="lib-lead">
        <h1>Features</h1>
        <p>${esc(pack.lead || "Each story names who, what, and why. Open one for confirmation and the walk.")}</p>
      </section>
      ${
        cards
          ? `<div class="lib-grid lib-feature-grid">${cards}</div>`
          : `<p class="lib-help">No features yet.</p>`
      }
    `;
  }

  function featurePage(feature) {
    const stats = featureStats(feature);
    const stories = featureStories(feature);
    const rows = stories
      .map((story) => {
        const stages = (story.stages || []).length;
        const scenarios = (story.criteria || []).length;
        return `
          <button type="button" class="lib-card lib-feature" data-feature-story="${esc(story.id)}">
            <span class="lib-card-top">
              <h2>${esc(story.name)}</h2>
              ${countPill(storyPoints(story))}
            </span>
            <div class="lib-story-copy">${storyCardCopy(story)}</div>
            <span class="lib-metrics">
              ${metric(scenarios, scenarios === 1 ? "scenario" : "scenarios")}
              ${metric(stages, stages === 1 ? "stage" : "stages")}
            </span>
          </button>
        `;
      })
      .join("");
    const roles = (feature.roles || []).map((role) => tagPill(role)).join("");
    return `
      ${backButton("Back to Features", "features")}
      <section class="lib-lead">
        <div class="lib-card-top">
          <h1>${esc(feature.name)}</h1>
          ${tagPill(statusLabel(feature.status), feature.statusNote || "")}
        </div>
        <p>${esc(feature.summary || "")}</p>
      </section>
      <div class="lib-grid lib-stat-grid">
        ${statCard(stats.stories, stats.stories === 1 ? "Story" : "Stories")}
        ${statCard(stats.points, stats.points === 1 ? "Point" : "Points")}
        ${statCard(stats.scenarios, stats.scenarios === 1 ? "Scenario" : "Scenarios")}
        ${statCard(feature.screen || "Portfolio", "Screen")}
      </div>
      <p class="lib-help lib-feature-who">${esc(feature.who || "")}</p>
      ${roles ? `<div class="lib-role-row">${roles}</div>` : ""}
      <p class="lib-help">${esc(estimateHelp())}</p>
      <h2 class="lib-block-title">User stories</h2>
      ${
        rows
          ? `<div class="lib-grid lib-story-grid">${rows}</div>`
          : `<p class="lib-help">This feature has no stories yet.</p>`
      }
    `;
  }

  function storyPage(feature, story) {
    const scenarios = (story.criteria || []).map(scenarioCard).join("");
    const stages = (story.stages || []).map(stageShot).join("");
    const notes = story.notes || story.description || "";
    return `
      ${backButton("Back to " + feature.name, `features/${feature.id}`)}
      <section class="lib-lead">
        <div class="lib-card-top">
          <h1>${esc(story.name)}</h1>
          ${countPill(storyPoints(story))}
        </div>
      </section>
      <article class="lib-card lib-story-card">
        ${storyCardCopy(story)}
      </article>
      ${notes ? `<p class="lib-help lib-story-notes">${esc(endStop(notes))}</p>` : ""}
      ${estimateBlock(story)}
      <h2 class="lib-block-title">Confirmation</h2>
      <p class="lib-help">What must be true for this to be done.</p>
      ${
        scenarios
          ? `<div class="card-stack lib-scenarios">${scenarios}</div>`
          : `<p class="lib-help">None yet.</p>`
      }
      <h2 class="lib-block-title">Stages</h2>
      ${
        stages
          ? `<div class="lib-stages">${stages}</div>`
          : `<p class="lib-help">No stages yet.</p>`
      }
    `;
  }

  function featuresPage() {
    const feature = featureById(featureId);
    if (!feature) return featuresIndexPage();
    const story = featureStories(feature).find((item) => item.id === featureStoryId);
    if (story) return storyPage(feature, story);
    return featurePage(feature);
  }

  function accessLayers() {
    return ((data.access && data.access.layers) || []).filter((layer) => layer && layer.id);
  }

  function accessPage() {
    const layers = accessLayers();
    const layer = layers.find((item) => item.id === accessLayer) || layers[0];
    if (!layer) {
      return `
        <section class="lib-lead">
          <h1>Access</h1>
          <p>Access logic is not here yet.</p>
        </section>
      `;
    }
    const items = (layer.items || [])
      .map(
        (item) => `
          <article class="lib-card">
            <h2>${esc(item.name)}</h2>
            <p>${esc(item.body)}</p>
          </article>
        `
      )
      .join("");
    const table =
      layer.columns && layer.rows
        ? `
          <table class="lib-token-table lib-access-table">
            <thead><tr>${layer.columns.map((col) => `<th>${esc(col)}</th>`).join("")}</tr></thead>
            <tbody>
              ${layer.rows
                .map(
                  (row) =>
                    `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`
                )
                .join("")}
            </tbody>
          </table>
        `
        : "";
    const grid = items ? `<div class="lib-grid lib-access-grid">${items}</div>` : "";
    return `
      <section class="lib-lead">
        <h1>Access</h1>
        <p>${esc((data.access && data.access.lead) || "")}</p>
      </section>
      <div class="lib-split">
        <nav class="lib-list" aria-label="Access">
          ${layers
            .map(
              (item) =>
                `<button type="button" data-access-layer="${esc(item.id)}" class="${
                  item.id === layer.id ? "is-on" : ""
                }">${esc(item.name)}</button>`
            )
            .join("")}
        </nav>
        <div class="lib-pane">
          <div>
            <h2>${esc(layer.name)}</h2>
            <p class="lib-help">${esc(layer.summary || "")}</p>
          </div>
          ${table}
          ${grid}
        </div>
      </div>
    `;
  }

  function render() {
    nav.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-on", button.dataset.libPage === page);
    });
    if (page === "tokens") main.innerHTML = tokensPage();
    else if (page === "components") main.innerHTML = componentPage();
    else if (page === "features") main.innerHTML = featuresPage();
    else if (page === "access") main.innerHTML = accessPage();
    else if (page === "files") main.innerHTML = filesPage();
    else main.innerHTML = startPage();
    window.scrollTo(0, 0);
  }

  function readHash() {
    const raw = (location.hash || "#start").slice(1);
    if (raw === "tokens" || raw.startsWith("tokens/")) {
      page = "tokens";
      tokenKind = raw.split("/")[1] || "colour";
      if (!TOKEN_PAGES.some((item) => item.id === tokenKind)) tokenKind = "colour";
      return;
    }
    if (raw === "features" || raw.startsWith("features/")) {
      page = "features";
      const parts = raw.split("/").filter(Boolean);
      featureId = parts[1] || "";
      featureStoryId = parts[2] || "";
      if (featureId && !featureById(featureId)) {
        featureId = "";
        featureStoryId = "";
      } else if (featureId) {
        const feature = featureById(featureId);
        const known = featureStories(feature).some((item) => item.id === featureStoryId);
        if (featureStoryId && !known) featureStoryId = "";
      }
      return;
    }
    if (raw === "access" || raw.startsWith("access/")) {
      page = "access";
      accessLayer = raw.split("/")[1] || accessLayer;
      if (!accessLayers().some((item) => item.id === accessLayer)) {
        accessLayer = (accessLayers()[0] && accessLayers()[0].id) || "stack";
      }
      return;
    }
    if (raw === "files" || raw.startsWith("files/")) {
      page = "files";
      return;
    }
    if (raw === "components" || data.components.some((comp) => comp.id === raw)) {
      page = "components";
      if (raw !== "components") componentId = raw;
      return;
    }
    page = "start";
  }

  function writeHash() {
    if (page === "tokens") location.hash = `tokens/${tokenKind}`;
    else if (page === "components") location.hash = componentId;
    else if (page === "features") {
      if (featureId && featureStoryId) location.hash = `features/${featureId}/${featureStoryId}`;
      else if (featureId) location.hash = `features/${featureId}`;
      else location.hash = "features";
    }
    else if (page === "access") location.hash = `access/${accessLayer}`;
    else if (page === "files") location.hash = "files";
    else location.hash = "start";
  }

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lib-page]");
    if (!button) return;
    page = button.dataset.libPage;
    if (page === "features") {
      featureId = "";
      featureStoryId = "";
    }
    writeHash();
    render();
  });

  const PACK_CHOICES = [
    { id: "components", name: "Components", hint: "Icon and the other React files" },
    { id: "tokens", name: "Tokens", hint: "Colour, space, type, and Roobert" },
    { id: "prototype", name: "Prototype", hint: "Screens and the shell" },
  ];

  let packPicked = {
    components: true,
    tokens: true,
    prototype: true,
  };
  let packBusy = false;
  let packError = "";
  let packLastFocus = null;

  function packAnyOn() {
    return PACK_CHOICES.some((item) => packPicked[item.id]);
  }

  function packCheck(on) {
    const ui = window.AstralUI;
    if (ui && ui.check) return ui.check(on);
    return `<span class="astral-check${on ? " is-on" : ""}" aria-hidden="true"></span>`;
  }

  function packModalHtml() {
    const ui = window.AstralUI;
    if (!ui || !ui.modalHead || !ui.button) return "";
    const picks = PACK_CHOICES.map((item) => {
      const on = Boolean(packPicked[item.id]);
      return `
        <button
          type="button"
          role="checkbox"
          class="${on ? "is-on" : ""}"
          aria-checked="${on ? "true" : "false"}"
          data-lib-pack-part="${esc(item.id)}"
          ${packBusy ? " disabled" : ""}
        >
          ${packCheck(on)}
          <span class="astral-pack-copy">
            <span>${esc(item.name)}</span>
            <span class="astral-muted">${esc(item.hint)}</span>
          </span>
        </button>
      `;
    }).join("");
    const go = ui.button("Download", 'data-lib-pack-go', {
      type: "submit",
      disabled: packBusy || !packAnyOn(),
    });
    const error = packError
      ? `<p class="astral-muted" data-lib-pack-error role="status">${esc(packError)}</p>`
      : "";
    return `
      <div class="astral-modal-back" data-lib-pack-back>
        <div
          id="lib-pack-dialog"
          class="astral-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lib-pack-title"
        >
          <form data-lib-pack-form>
            ${ui.modalHead(
              "lib-pack-title",
              "Download",
              "Pick what you need for the React starter.",
              "pack"
            )}
            <div class="astral-modal-body">
              <div class="astral-pack-picks" role="group" aria-label="React starter">
                ${picks}
              </div>
            </div>
            <div class="astral-modal-foot">
              <div class="astral-actions">${go}</div>
              ${error}
            </div>
          </form>
        </div>
      </div>
    `;
  }

  function packHost() {
    return document.querySelector("[data-lib-pack-back]");
  }

  function paintPackModal() {
    const host = packHost();
    if (!host) return;
    const html = packModalHtml();
    if (!html) return;
    host.outerHTML = html.trim();
    const go = document.querySelector("[data-lib-pack-go]");
    if (packBusy && go) go.textContent = "Downloading";
  }

  function closePackModal() {
    const host = packHost();
    if (host) host.remove();
    packBusy = false;
    packError = "";
    if (packBtn) packBtn.setAttribute("aria-expanded", "false");
    if (packLastFocus && typeof packLastFocus.focus === "function") packLastFocus.focus();
    packLastFocus = null;
  }

  function openPackModal() {
    if (packHost()) return;
    const html = packModalHtml();
    if (!html) return;
    packBusy = false;
    packError = "";
    packPicked = { components: true, tokens: true, prototype: true };
    packLastFocus = document.activeElement;
    document.body.insertAdjacentHTML("beforeend", html.trim());
    if (packBtn) packBtn.setAttribute("aria-expanded", "true");
    const first = document.querySelector("[data-lib-pack-part]");
    if (first) first.focus();
  }

  async function runPackDownload() {
    const pack = window.AstralLibPack;
    if (!pack || !pack.download || packBusy || !packAnyOn()) return;
    packBusy = true;
    packError = "";
    paintPackModal();
    try {
      await pack.download(data, null, packPicked);
      closePackModal();
    } catch {
      packBusy = false;
      packError = "Could not download the starter. Try again.";
      paintPackModal();
      const retry = document.querySelector("[data-lib-pack-go]");
      if (retry) retry.focus();
    }
  }

  const packBtn = document.querySelector("[data-lib-pack]");
  if (packBtn) {
    packBtn.setAttribute("aria-haspopup", "dialog");
    packBtn.setAttribute("aria-controls", "lib-pack-dialog");
    packBtn.setAttribute("aria-expanded", "false");
    packBtn.addEventListener("click", () => {
      openPackModal();
    });
  }

  document.addEventListener("click", (event) => {
    const host = packHost();
    if (!host) return;
    const close = event.target.closest('[data-proto-modal-close="pack"]');
    if (close || event.target === host) {
      event.preventDefault();
      closePackModal();
      return;
    }
    const part = event.target.closest("[data-lib-pack-part]");
    if (part && host.contains(part)) {
      event.preventDefault();
      if (packBusy) return;
      const id = part.dataset.libPackPart;
      if (!Object.prototype.hasOwnProperty.call(packPicked, id)) return;
      packPicked[id] = !packPicked[id];
      paintPackModal();
      const again = document.querySelector(`[data-lib-pack-part="${id}"]`);
      if (again) again.focus();
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-lib-pack-form]");
    if (!form) return;
    event.preventDefault();
    runPackDownload();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !packHost()) return;
    event.preventDefault();
    closePackModal();
  });

  main.addEventListener("click", (event) => {
    const sw = event.target.closest(".astral-switch");
    if (sw) {
      const on = !sw.classList.contains("is-on");
      sw.classList.toggle("is-on", on);
      sw.setAttribute("aria-checked", on ? "true" : "false");
      return;
    }
    const kind = event.target.closest("[data-token-kind]");
    if (kind) {
      tokenKind = kind.dataset.tokenKind;
      writeHash();
      render();
      return;
    }
    const featureBack = event.target.closest("[data-feature-back]");
    if (featureBack) {
      const where = featureBack.dataset.featureBack || "features";
      if (where === "features") {
        featureId = "";
        featureStoryId = "";
      } else if (where.startsWith("features/")) {
        featureId = where.split("/")[1] || "";
        featureStoryId = "";
      }
      page = "features";
      writeHash();
      render();
      return;
    }
    const featureStory = event.target.closest("[data-feature-story]");
    if (featureStory) {
      featureStoryId = featureStory.dataset.featureStory;
      page = "features";
      writeHash();
      render();
      return;
    }
    const featureOpen = event.target.closest("[data-feature]");
    if (featureOpen) {
      featureId = featureOpen.dataset.feature;
      featureStoryId = "";
      page = "features";
      writeHash();
      render();
      return;
    }
    const layerBtn = event.target.closest("[data-access-layer]");
    if (layerBtn) {
      accessLayer = layerBtn.dataset.accessLayer;
      writeHash();
      render();
      return;
    }
    const comp = event.target.closest("[data-comp]");
    if (comp) {
      componentId = comp.dataset.comp;
      writeHash();
      render();
      return;
    }
    const lookFiles = event.target.closest("[data-lib-files]");
    if (lookFiles) {
      const pack = window.AstralLibPack;
      if (pack && pack.downloadLook) pack.downloadLook(data, lookFiles);
      return;
    }
    const copyKind = event.target.closest("[data-copy]");
    if (copyKind) {
      const which = copyKind.dataset.copy;
      const text =
        which === "theme"
          ? data.themeTs
          : which === "start"
            ? data.reactStart
            : which === "look"
              ? data.lookCss
              : data.tokensCss;
      copy(text, copyKind);
      return;
    }
    const copySnippet = event.target.closest("[data-copy-snippet]");
    if (copySnippet) {
      const item = data.components.find((comp) => comp.id === copySnippet.dataset.copySnippet);
      if (item) copy(item.snippet, copySnippet);
      return;
    }
    const copySource = event.target.closest("[data-copy-source]");
    if (copySource) {
      const item = data.components.find((comp) => comp.id === copySource.dataset.copySource);
      if (item && item.source) copy(item.source, copySource);
      return;
    }
    const download = event.target.closest("[data-download]");
    if (download) {
      const file = (data.files || []).find((item) => item.id === download.dataset.download);
      if (file && file.href) {
        const link = document.createElement("a");
        link.href = file.href;
        link.download = file.name;
        link.click();
      }
      return;
    }
    const copyText = event.target.closest("[data-copy-text]");
    if (copyText) copy(copyText.dataset.copyText, copyText);
  });

  const PREVIEW_HIDE_KEY = "astral-lib-preview-hidden";

  function inLibraryFrame() {
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

  function prototypeHref() {
    if (window.ASTRAL_PROTOTYPE_HREF) return window.ASTRAL_PROTOTYPE_HREF;
    return new URL("../?preview=prototype", location.href).href;
  }

  function previewHtml() {
    if (typeof protoTabs !== "function" || typeof protoGhost !== "function") return "";
    if (previewHidden()) {
      return `<div class="astral-preview-menu is-shut">${protoIconBtn(
        "expand",
        "Expand",
        'data-lib-preview="show"'
      )}</div>`;
    }
    const walkTabs = protoTabs(
      [
        { id: "prototype", name: "Prototype" },
        { id: "library", name: "Library" },
      ],
      "library",
      "data-lib-share",
      "Prototype or library"
    );
    return `
      <div class="astral-preview-menu">
        ${walkTabs}
        ${protoGhost("Hide", 'data-lib-preview="hide"')}
      </div>
    `;
  }

  function paintPreview() {
    if (inLibraryFrame()) return;
    const html = previewHtml();
    if (!html) return;
    let menu = document.querySelector("body > .astral-preview-menu");
    const tmp = document.createElement("div");
    tmp.innerHTML = html.trim();
    const next = tmp.firstElementChild;
    if (!next) return;
    if (menu) menu.replaceWith(next);
    else document.body.appendChild(next);
  }

  document.addEventListener("click", (event) => {
    const previewBtn = event.target.closest("[data-lib-preview]");
    if (previewBtn) {
      setPreviewHidden(previewBtn.dataset.libPreview === "hide");
      paintPreview();
      return;
    }
    const shareBtn = event.target.closest("[data-lib-share]");
    if (!shareBtn) return;
    if (shareBtn.dataset.libShare === "prototype") {
      location.assign(prototypeHref());
    }
  });

  async function boot() {
    try {
      const res = await fetch("features.json?t=meter-folds");
      if (res.ok) data.features = await res.json();
    } catch (_) {
      /* Share packs features into ASTRAL_LIB. Keep that copy. */
    }
    if (!data.features) data.features = { lead: "", items: [] };
    readHash();
    render();
    paintPreview();
  }

  window.addEventListener("hashchange", () => {
    readHash();
    render();
  });

  boot();
})();
