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
  let featureSectionId = "";
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
        <p>These variables are the Astral prototype's :root, the source of truth. Retired tokens are listed in CHANGELOG.md. Use the CSS variable in styles. Use the theme path in React. Choose a name to copy the CSS variable.</p>
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

  // A feature can split into sections, such as the tabs on Portfolio. Each story then names its section.
  function featureSections(feature) {
    return ((feature && feature.sections) || []).filter((item) => item && item.id);
  }

  function sectionById(feature, id) {
    return featureSections(feature).find((item) => item.id === id) || null;
  }

  function sectionStories(feature, section) {
    return featureStories(feature).filter((item) => item.section === section.id);
  }

  function factorScore(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 0;
    return Math.max(1, Math.min(5, n));
  }

  // Each story has two estimates. Dev sizes the build and Test sizes the checks.
  const ESTIMATES = {
    dev: {
      name: "Dev",
      factors: [
        ["complexity", "Complexity", 0.4],
        ["effort", "Effort", 0.3],
        ["risk", "Risk", 0.2],
        ["dependencies", "Dependencies", 0.1],
      ],
    },
    test: {
      name: "Test",
      factors: [
        ["scenarios", "Scenarios", 0.4],
        ["setup", "Setup", 0.3],
        ["risk", "Risk", 0.2],
        ["regression", "Regression", 0.1],
      ],
    },
  };

  function estimatePart(story, kind) {
    const estimate = story && story.estimate;
    if (!estimate) return null;
    if (kind === "dev" && !estimate.dev && estimate.complexity) return estimate;
    return estimate[kind] || null;
  }

  function estimateScore(story, kind) {
    const part = estimatePart(story, kind);
    if (!part) return 0;
    return ESTIMATES[kind].factors.reduce((sum, [key, , weight]) => sum + factorScore(part[key]) * weight, 0);
  }

  function storyPoints(story, kind) {
    if (!estimatePart(story, kind)) return kind === "dev" ? Number(story && story.points) || 0 : 0;
    const score = estimateScore(story, kind);
    if (score < 1.5) return 1;
    if (score < 2.5) return 2;
    if (score < 3.5) return 3;
    if (score < 4.5) return 5;
    if (score < 5.5) return 8;
    return 13;
  }

  function pointsLabel(n, kind, title) {
    const word = n === 1 ? "point" : "points";
    const name = ESTIMATES[kind].name;
    return title ? `${name} ${word}` : `${name.toLowerCase()} ${word}`;
  }

  function pointsMetrics(dev, test) {
    return `${metric(dev, pointsLabel(dev, "dev"))}${metric(test, pointsLabel(test, "test"))}`;
  }

  function estimateHelp(kind) {
    const pack = featurePack().estimate || {};
    if (kind) return (pack[kind] && pack[kind].help) || "";
    return pack.help || "Points are relative size, not days. Find a site or meter is the 2.";
  }

  function estimatePartBlock(story, kind) {
    const part = estimatePart(story, kind);
    if (!part) return "";
    const points = storyPoints(story, kind);
    const factors = ESTIMATES[kind].factors
      .map(
        ([key, label]) => `
          <li class="lib-estimate-factor">
            <span>${esc(label)}</span>
            <span class="astral-count lib-count">${esc(factorScore(part[key]))}</span>
          </li>
        `
      )
      .join("");
    const tipId = `lib-estimate-tip-${kind}`;
    return `
      <article class="lib-card lib-stat lib-estimate-part" data-estimate="${esc(kind)}" tabindex="0" aria-describedby="${tipId}">
        <p class="lib-stat-figure">${esc(points)}</p>
        <p>${esc(pointsLabel(points, kind, true))}</p>
        ${points >= 13 ? `<p class="lib-help">This is too big for one story. Split it.</p>` : ""}
        <div class="lib-estimate-tip" id="${tipId}" role="tooltip">
          <p class="lib-estimate-tip-head">${esc(ESTIMATES[kind].name)} breakdown</p>
          <ul class="lib-estimate-factors">${factors}</ul>
        </div>
      </article>
    `;
  }

  function estimateBlock(story) {
    if (!story.estimate) return "";
    return `
      <h2 class="lib-block-title">Estimate</h2>
      <section class="lib-estimate">
        <p class="lib-help">${esc(estimateHelp())} Hover over a total to see how it was scored.</p>
        <div class="lib-grid lib-stat-grid lib-estimate-grid">
          ${estimatePartBlock(story, "dev")}
          ${estimatePartBlock(story, "test")}
        </div>
      </section>
    `;
  }

  function featureStats(feature, list) {
    const stories = list || featureStories(feature);
    return {
      stories: stories.length,
      dev: stories.reduce((sum, item) => sum + storyPoints(item, "dev"), 0),
      test: stories.reduce((sum, item) => sum + storyPoints(item, "test"), 0),
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
    // Stories read As a user. Only a story that needs admin rights names the role.
    const role = String(story.role || "user").toLowerCase();
    const want = story.want || story.summary || "";
    const benefit = story.benefit || "";
    return `
      <p class="lib-story-as">As ${/^[aeio]/.test(role) ? "an" : "a"} ${esc(role)}</p>
      <p class="lib-story-want">I want to ${esc(want)}</p>
      ${benefit ? `<p class="lib-story-so">so that ${esc(endStop(benefit).replace(/\.$/, ""))}.</p>` : ""}
    `;
  }

  // A scenario with a walk gets Play demo, which opens the walk in a modal.
  function demoButton(story, index) {
    const ui = window.AstralUI;
    const label = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5.5v13l10.5-6.5z" /></svg><span>Play demo</span>`;
    const attrs = `data-lib-demo="${esc(story.id)}" data-lib-demo-index="${index}" aria-haspopup="dialog" aria-label="Play demo, scenario ${index + 1}"`;
    return ui && ui.ghost
      ? ui.ghost(label, attrs, { html: true, className: "lib-demo-play" })
      : `<button type="button" class="astral-ghost lib-demo-play" ${attrs}>${label}</button>`;
  }

  // A scenario with no demo keeps the button, disabled, with a Tooltip that says why.
  function demoOffButton(story, index, why) {
    const tipId = `lib-demo-tip-${story.id}-${index}`;
    const reason = why || "This demo is not recorded yet.";
    return `
      <span class="lib-demo-off">
        <button type="button" class="astral-ghost lib-demo-play" aria-disabled="true" aria-describedby="${esc(tipId)}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5.5v13l10.5-6.5z" /></svg><span>Play demo</span>
        </button>
        <span class="astral-tip lib-demo-tip" id="${esc(tipId)}" role="tooltip"><p>${esc(endStop(reason))}</p></span>
      </span>
    `;
  }

  function scenarioCard(item, index, story) {
    if (!item) return "";
    if (typeof item === "string") {
      return `<article class="lib-card lib-scenario"><p>${esc(endStop(item))}</p></article>`;
    }
    const play = story ? ((item.walk || []).length ? demoButton(story, index) : demoOffButton(story, index, item.noDemo)) : "";
    return `
      <article class="lib-card lib-scenario">
        <p><span class="lib-gwt">Given</span> ${esc(endStop(item.given))}</p>
        <p><span class="lib-gwt">When</span> ${esc(endStop(item.when))}</p>
        <p><span class="lib-gwt">Then</span> ${esc(endStop(item.then))}</p>
        ${play ? `<div class="lib-scenario-foot">${play}</div>` : ""}
      </article>
    `;
  }

  function criteriaBlock(story) {
    const list = story.criteria || [];
    return list.length
      ? `<div class="card-stack lib-scenarios">${list.map((item, i) => scenarioCard(item, i, story)).join("")}</div>`
      : "";
  }

  // The shared copy inlines each frame once in media, keyed by its path.
  function shotSrc(path) {
    const media = featurePack().media || {};
    return media[path] || path;
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

  // A walk replays captured frames with a cursor that moves to each target and clicks, like a short film.
  function stageWalk(stage) {
    return `
      <article class="lib-stage">
        <h3>${esc(stage.name || "Stage")}</h3>
        <p class="lib-help">${esc(stage.caption || "")}</p>
        ${walkFigure(stage.walk, stage.caption || stage.name || "Stage")}
      </article>
    `;
  }

  function walkFigure(walk, alt) {
    const frames = walk.filter((frame) => frame.image);
    const steps = frames.map((frame) => ({
      x: frame.x,
      y: frame.y,
      do: frame.do || "",
      note: frame.note || "",
      ...(frame.label ? { label: frame.label } : {}),
    }));
    const imgs = frames
      .map((frame, i) => `<img src="${esc(shotSrc(frame.image))}" alt="" class="${i === 0 ? "is-on" : ""}" ${i ? 'loading="lazy"' : ""} />`)
      .join("");
    return `
        <figure class="lib-shot lib-walk" data-walk="${esc(JSON.stringify(steps))}">
          <div class="lib-walk-frames" role="img" aria-label="${esc(alt)}">${imgs}</div>
          <span class="lib-walk-cursor" aria-hidden="true">
            <span class="lib-walk-ripple"></span>
            <svg viewBox="0 0 24 24" focusable="false"><path d="M5 2.5v17.2l4.4-4.2 2.9 6.6 2.9-1.3-2.9-6.5h6.1z" /></svg>
          </span>
          <button type="button" class="lib-walk-toggle" data-walk-toggle aria-label="Pause">
            <svg class="lib-walk-pause" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5v14M16 5v14" /></svg>
            <svg class="lib-walk-play" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5.5v13l10.5-6.5z" /></svg>
          </button>
        </figure>
    `;
  }

  const walkStill = window.matchMedia("(prefers-reduced-motion: reduce)");
  let walkSeen = null;

  function walkObserver() {
    if (!walkSeen) {
      walkSeen = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.target.libWalk?.seen(entry.isIntersecting));
      });
    }
    return walkSeen;
  }

  function walkStart(fig) {
    if (fig.libWalk) {
      walkObserver().observe(fig);
      return;
    }
    const steps = JSON.parse(fig.dataset.walk || "[]");
    const imgs = [...fig.querySelectorAll(".lib-walk-frames img")];
    const cursor = fig.querySelector(".lib-walk-cursor");
    const toggle = fig.querySelector("[data-walk-toggle]");
    const note = fig.parentElement?.querySelector("[data-walk-note]");
    if (!steps.length || !imgs.length) return;
    const st = { i: 0, phase: 0, timer: 0, on: !walkStill.matches, seen: false };
    const show = (i) => {
      imgs.forEach((img, k) => img.classList.toggle("is-on", k === i));
      if (note) {
        note.textContent = steps[i].note || "";
        note.dataset.step = steps[i].label || `${i + 1} of ${steps.length}`;
      }
    };
    const place = (x, y, move) => {
      cursor.classList.toggle("is-still", !move);
      cursor.style.left = `${x}%`;
      cursor.style.top = `${y}%`;
    };
    const later = (ms) => {
      st.timer = window.setTimeout(tick, ms);
    };
    const press = () => {
      cursor.classList.remove("is-press");
      void cursor.offsetWidth;
      cursor.classList.add("is-press");
    };
    function tick() {
      window.clearTimeout(st.timer);
      if (!st.on || !st.seen || !fig.isConnected) return;
      const step = steps[st.i];
      if (st.phase === 0) {
        show(st.i);
        if (st.i === 0) {
          place(72, 78, false);
          cursor.classList.remove("is-press");
        }
        st.phase = 1;
        later(st.i === 0 ? 900 : 450);
      } else if (st.phase === 1) {
        if (step.do) {
          place(step.x, step.y, true);
          st.phase = 2;
          later(1000);
        } else {
          st.phase = 3;
          later(2600);
        }
      } else if (st.phase === 2) {
        if (step.do !== "hover") press();
        st.phase = 3;
        later(step.do === "hover" ? 350 : 550);
      } else {
        st.i = (st.i + 1) % steps.length;
        st.phase = 0;
        tick();
      }
    }
    const paint = () => {
      fig.classList.toggle("is-paused", !st.on);
      toggle.setAttribute("aria-label", st.on ? "Pause" : "Play");
    };
    // With reduced motion the walk waits on its last frame with the cursor on the last target.
    if (!st.on) {
      const last = [...steps].reverse().find((step) => step.do);
      show(steps.length - 1);
      if (last) place(last.x, last.y, false);
    }
    paint();
    fig.libWalk = {
      toggle() {
        st.on = !st.on;
        paint();
        if (st.on) tick();
        else window.clearTimeout(st.timer);
      },
      seen(on) {
        st.seen = on;
        if (on) tick();
        else window.clearTimeout(st.timer);
      },
    };
    walkObserver().observe(fig);
  }

  function walksStart() {
    walkObserver().disconnect();
    document.querySelectorAll(".lib-walk").forEach(walkStart);
  }

  function stageShot(stage) {
    if (Array.isArray(stage.walk) && stage.walk.length) return stageWalk(stage);
    const src = shotSrc(stage.image || "");
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

  // One walk plays every scenario demo in order. Stories with no demos keep their stage shots.
  function storyWalkBlock(story) {
    const list = story.criteria || [];
    const frames = list.flatMap((item, i) =>
      (item.walk || [])
        .filter((frame) => frame.image)
        .map((frame) => ({
          ...frame,
          note: `When ${item.when.replace(/\.$/, "")}, ${item.then.replace(/\.$/, "")}.`,
          label: `Scenario ${i + 1} of ${list.length}`,
        }))
    );
    if (frames.length) {
      return `
        <h2 class="lib-block-title">Walk-through</h2>
        <p class="lib-help">Each scenario with a demo, played in order.</p>
        <div class="lib-stage">
          ${walkFigure(frames, `Walk-through of ${story.name}`)}
          <p class="lib-walk-note" data-walk-note></p>
        </div>
      `;
    }
    const stages = (story.stages || []).map(stageShot).join("");
    return `
      <h2 class="lib-block-title">Walk-through</h2>
      ${stages ? `<div class="lib-stages">${stages}</div>` : `<p class="lib-help">No walk-through yet.</p>`}
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
              ${pointsMetrics(stats.dev, stats.test)}
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

  function storyCards(stories) {
    return stories
      .map((story) => {
        const scenarios = (story.criteria || []).length;
        return `
          <button type="button" class="lib-card lib-feature" data-feature-story="${esc(story.id)}">
            <span class="lib-card-top">
              <h2>${esc(story.name)}</h2>
            </span>
            <div class="lib-story-copy">${storyCardCopy(story)}</div>
            <span class="lib-metrics">
              ${pointsMetrics(storyPoints(story, "dev"), storyPoints(story, "test"))}
              ${metric(scenarios, scenarios === 1 ? "scenario" : "scenarios")}
            </span>
          </button>
        `;
      })
      .join("");
  }

  function storyGrid(stories, empty) {
    const rows = storyCards(stories);
    return rows ? `<div class="lib-grid lib-story-grid">${rows}</div>` : `<p class="lib-help">${esc(empty)}</p>`;
  }

  const STORY_STAGES = [
    { id: "review", name: "Needs review", empty: "No stories need review." },
    { id: "refine", name: "Ready for refinement", empty: "No stories are ready for refinement." },
    { id: "live", name: "In production", empty: "No stories are in production yet." },
  ];

  function storyStage(story) {
    return STORY_STAGES.find((stage) => stage.id === story.stage) || STORY_STAGES[0];
  }

  const STAGE_TAB_KEY = "astral-lib-stage-tab";
  let storyStageTab = "review";
  try {
    storyStageTab = sessionStorage.getItem(STAGE_TAB_KEY) || "review";
  } catch (err) {
    /* Session storage can be blocked. */
  }

  // Stages show as Tabs. Only the open tab's stories show.
  function storyBoard(stories, empty) {
    if (!stories.length) return `<p class="lib-help">${esc(empty)}</p>`;
    const active = STORY_STAGES.some((stage) => stage.id === storyStageTab) ? storyStageTab : STORY_STAGES[0].id;
    const tabs = STORY_STAGES.map((stage) => {
      const on = stage.id === active;
      const n = stories.filter((story) => storyStage(story) === stage).length;
      return `<button type="button" role="tab" id="lib-stage-tab-${esc(stage.id)}" class="${on ? "is-on" : ""}" data-story-stage-tab="${esc(
        stage.id
      )}" aria-selected="${on ? "true" : "false"}" aria-controls="lib-stage-panel" tabindex="${on ? "0" : "-1"}">${esc(
        stage.name
      )}${countPill(n)}</button>`;
    }).join("");
    const stage = STORY_STAGES.find((item) => item.id === active);
    const list = stories.filter((story) => storyStage(story) === stage);
    return `
      <div class="lib-story-board">
        <div class="astral-tabs lib-stage-tabs" role="tablist" aria-label="Story stage">${tabs}</div>
        <section class="lib-story-stage" id="lib-stage-panel" role="tabpanel" aria-labelledby="lib-stage-tab-${esc(
          stage.id
        )}" data-story-stage="${esc(stage.id)}">
          ${storyGrid(list, stage.empty)}
        </section>
      </div>
    `;
  }

  function pickStageTab(id, focus) {
    storyStageTab = id;
    try {
      sessionStorage.setItem(STAGE_TAB_KEY, id);
    } catch (err) {
      /* Session storage can be blocked. */
    }
    const board = main.querySelector(".lib-story-board");
    if (!board) return;
    const feature = featureById(featureId);
    if (!feature) return;
    const section = sectionById(feature, featureSectionId);
    const stories = section ? sectionStories(feature, section) : featureStories(feature);
    const tmp = document.createElement("div");
    tmp.innerHTML = storyBoard(stories, "").trim();
    const next = tmp.firstElementChild;
    if (!next) return;
    board.replaceWith(next);
    if (focus) {
      const tab = next.querySelector(`[data-story-stage-tab="${id}"]`);
      if (tab) tab.focus();
    }
  }

  function sectionGrid(feature) {
    const cards = featureSections(feature)
      .map((section) => {
        const stats = featureStats(feature, sectionStories(feature, section));
        const summary = section.summary || "No stories yet.";
        return `
          <button type="button" class="lib-card lib-feature" data-feature-section="${esc(section.id)}">
            <span class="lib-card-top">
              <h2>${esc(section.name)}</h2>
            </span>
            <p${section.summary ? "" : ' class="lib-help"'}>${esc(endStop(summary))}</p>
            <span class="lib-metrics">
              ${metric(stats.stories, stats.stories === 1 ? "story" : "stories")}
              ${pointsMetrics(stats.dev, stats.test)}
              ${metric(stats.scenarios, stats.scenarios === 1 ? "scenario" : "scenarios")}
            </span>
          </button>
        `;
      })
      .join("");
    return `<div class="lib-grid lib-feature-grid">${cards}</div>`;
  }

  function featurePage(feature) {
    const stats = featureStats(feature);
    const sections = featureSections(feature);
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
        ${statCard(stats.dev, pointsLabel(stats.dev, "dev", true))}
        ${statCard(stats.test, pointsLabel(stats.test, "test", true))}
        ${statCard(stats.scenarios, stats.scenarios === 1 ? "Scenario" : "Scenarios")}
        ${statCard(feature.screen || "Portfolio", "Screen")}
      </div>
      <p class="lib-help lib-feature-who">${esc(feature.who || "")}</p>
      ${roles ? `<div class="lib-role-row">${roles}</div>` : ""}
      <p class="lib-help">${esc(estimateHelp())}</p>
      ${
        sections.length
          ? `<h2 class="lib-block-title">Sections</h2>${sectionGrid(feature)}`
          : storyBoard(featureStories(feature), "This feature has no stories yet.")
      }
    `;
  }

  function sectionPage(feature, section) {
    const stories = sectionStories(feature, section);
    const stats = featureStats(feature, stories);
    return `
      ${backButton("Back to " + feature.name, `features/${feature.id}`)}
      <section class="lib-lead">
        <h1>${esc(section.name)}</h1>
        ${section.summary ? `<p>${esc(endStop(section.summary))}</p>` : ""}
      </section>
      <div class="lib-grid lib-stat-grid">
        ${statCard(stats.stories, stats.stories === 1 ? "Story" : "Stories")}
        ${statCard(stats.dev, pointsLabel(stats.dev, "dev", true))}
        ${statCard(stats.test, pointsLabel(stats.test, "test", true))}
        ${statCard(stats.scenarios, stats.scenarios === 1 ? "Scenario" : "Scenarios")}
      </div>
      ${section.notes ? `<p class="lib-help">${esc(endStop(section.notes))}</p>` : ""}
      ${storyBoard(stories, "This section has no stories yet.")}
    `;
  }

  function storyPage(feature, story) {
    const scenarios = criteriaBlock(story);
    const notes = story.notes || story.description || "";
    const section = sectionById(feature, story.section);
    const back = section
      ? backButton("Back to " + section.name, `features/${feature.id}/${section.id}`)
      : backButton("Back to " + feature.name, `features/${feature.id}`);
    return `
      ${back}
      <section class="lib-lead">
        <div class="lib-card-top">
          <h1>${esc(story.name)}</h1>
          ${tagPill(storyStage(story).name)}
          <a class="astral-ghost lib-open-proto" href="${esc(storyPrototypeHref(story))}" target="_blank" rel="noopener">
            <span>Open in prototype</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 5h5v5M19 5l-8 8M17 14v5H5V7h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
        </div>
        <span class="lib-metrics">${pointsMetrics(storyPoints(story, "dev"), storyPoints(story, "test"))}</span>
      </section>
      <article class="lib-card lib-story-card">
        ${storyCardCopy(story)}
      </article>
      ${notes ? `<p class="lib-help lib-story-notes">${esc(endStop(notes))}</p>` : ""}
      ${estimateBlock(story)}
      <h2 class="lib-block-title">Confirmation</h2>
      <p class="lib-help">What must be true for this to be done.</p>
      ${scenarios || `<p class="lib-help">None yet.</p>`}
      ${storyWalkBlock(story)}
    `;
  }

  function featuresPage() {
    const feature = featureById(featureId);
    if (!feature) return featuresIndexPage();
    const story = featureStories(feature).find((item) => item.id === featureStoryId);
    if (story) return storyPage(feature, story);
    const section = sectionById(feature, featureSectionId);
    if (section) return sectionPage(feature, section);
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
    closeDemo();
    nav.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-on", button.dataset.libPage === page);
    });
    if (page === "tokens") main.innerHTML = tokensPage();
    else if (page === "components") main.innerHTML = componentPage();
    else if (page === "features") main.innerHTML = featuresPage();
    else if (page === "access") main.innerHTML = accessPage();
    else if (page === "files") main.innerHTML = filesPage();
    else main.innerHTML = startPage();
    walksStart();
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
      featureSectionId = "";
      featureStoryId = "";
      const feature = featureById(featureId);
      if (!feature) {
        featureId = "";
      } else if (featureSections(feature).length) {
        // Sectioned features read features/feature/section/story.
        featureSectionId = sectionById(feature, parts[2]) ? parts[2] : "";
        const story = featureStories(feature).find((item) => item.id === parts[3]);
        if (featureSectionId && story && story.section === featureSectionId) featureStoryId = story.id;
      } else if (featureStories(feature).some((item) => item.id === parts[2])) {
        featureStoryId = parts[2];
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
      const where = ["features", featureId, featureSectionId, featureStoryId].filter(Boolean);
      location.hash = where.join("/");
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
      featureSectionId = "";
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

  let demoLastFocus = null;

  function demoHost() {
    return document.querySelector("[data-lib-demo-back]");
  }

  function closeDemo() {
    const host = demoHost();
    if (!host) return;
    host.querySelectorAll(".lib-walk").forEach((fig) => {
      fig.libWalk?.seen(false);
      walkObserver().unobserve(fig);
    });
    host.remove();
    if (demoLastFocus && demoLastFocus.isConnected) demoLastFocus.focus();
    demoLastFocus = null;
  }

  function openDemo(storyId, index) {
    const ui = window.AstralUI;
    const story = featureList()
      .flatMap((feature) => featureStories(feature))
      .find((item) => item.id === storyId);
    const list = story?.criteria || [];
    const item = list[index];
    if (!ui || !ui.modalHead || !item || !(item.walk || []).length) return;
    const title = `Scenario ${index + 1} of ${list.length}`;
    const lead = `When ${esc(item.when.replace(/\.$/, ""))}, ${esc(item.then.replace(/\.$/, ""))}.`;
    closeDemo();
    demoLastFocus = document.activeElement;
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="astral-modal-back lib-demo-back" data-lib-demo-back>
        <div class="astral-modal lib-demo-modal" role="dialog" aria-modal="true" aria-labelledby="lib-demo-title">
          ${ui.modalHead("lib-demo-title", title, lead, "demo")}
          <div class="astral-modal-body lib-demo-body">
            ${walkFigure(item.walk, title)}
            <p class="lib-walk-note" data-walk-note></p>
          </div>
        </div>
      </div>
    `.trim()
    );
    const host = demoHost();
    host.querySelectorAll(".lib-walk").forEach(walkStart);
    host.querySelector('[data-proto-modal-close="demo"]')?.focus();
  }

  document.addEventListener("click", (event) => {
    const walkToggle = event.target.closest("[data-walk-toggle]");
    if (walkToggle) {
      walkToggle.closest(".lib-walk")?.libWalk?.toggle();
      return;
    }
    const play = event.target.closest("[data-lib-demo]");
    if (play) {
      openDemo(play.dataset.libDemo, Number(play.dataset.libDemoIndex));
      return;
    }
    const host = demoHost();
    if (host && (event.target === host || event.target.closest('[data-proto-modal-close="demo"]'))) {
      event.preventDefault();
      closeDemo();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !demoHost()) return;
    event.preventDefault();
    closeDemo();
  });

  main.addEventListener("keydown", (event) => {
    const tab = event.target.closest("[data-story-stage-tab]");
    if (!tab) return;
    const ids = STORY_STAGES.map((stage) => stage.id);
    const at = ids.indexOf(tab.dataset.storyStageTab);
    let next = -1;
    if (event.key === "ArrowRight") next = (at + 1) % ids.length;
    else if (event.key === "ArrowLeft") next = (at - 1 + ids.length) % ids.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = ids.length - 1;
    if (next < 0) return;
    event.preventDefault();
    pickStageTab(ids[next], true);
  });

  main.addEventListener("click", (event) => {
    const stageTab = event.target.closest("[data-story-stage-tab]");
    if (stageTab) {
      pickStageTab(stageTab.dataset.storyStageTab);
      return;
    }
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
      const where = (featureBack.dataset.featureBack || "features").split("/");
      featureId = where[1] || "";
      featureSectionId = where[2] || "";
      featureStoryId = "";
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
    const featureSection = event.target.closest("[data-feature-section]");
    if (featureSection) {
      featureSectionId = featureSection.dataset.featureSection;
      featureStoryId = "";
      page = "features";
      writeHash();
      render();
      return;
    }
    const featureOpen = event.target.closest("[data-feature]");
    if (featureOpen) {
      featureId = featureOpen.dataset.feature;
      featureSectionId = "";
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
    const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
    if (window.ASTRAL_PROTOTYPE_HREF && !local) return window.ASTRAL_PROTOTYPE_HREF;
    return new URL("../?preview=prototype", location.href).href;
  }

  // The prototype runs these steps after it loads, so the story opens where it starts.
  function storyPrototypeHref(story) {
    const url = new URL(prototypeHref(), location.href);
    url.searchParams.set("open", JSON.stringify(Array.isArray(story.open) ? story.open : []));
    return url.href;
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
        { id: "emails", name: "Emails" },
      ],
      "library",
      "data-lib-share",
      "Prototype, library, or emails"
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
    if (shareBtn.dataset.libShare === "emails") {
      location.assign(new URL("../emails-site/", location.href).href);
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
    restoreFramedHash();
    readHash();
    rememberHash();
    render();
    paintPreview();
  }

  // In the prototype the library sits in a frame that always loads with no hash.
  // Keep the last page for this tab so a refresh lands back on it.
  const LAST_PAGE_KEY = "astral-lib-last-page";

  function restoreFramedHash() {
    if (location.hash || window.parent === window) return;
    try {
      const last = sessionStorage.getItem(LAST_PAGE_KEY);
      if (last) history.replaceState(null, "", `${location.pathname}${location.search}#${last}`);
    } catch (err) {
      /* Session storage or history can be blocked. */
    }
  }

  function rememberHash() {
    try {
      sessionStorage.setItem(LAST_PAGE_KEY, (location.hash || "#start").slice(1));
    } catch (err) {
      /* Session storage can be blocked. */
    }
  }

  window.addEventListener("hashchange", () => {
    readHash();
    rememberHash();
    render();
  });

  boot();
})();
