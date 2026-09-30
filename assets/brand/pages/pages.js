const PHOTO = "../photos/field-1.png";
const ILLUSTRATION = "../illustrations/sphere.svg";
const MARKS = {
  ink: {
    word: "../logo/wordmark-cyan-on-black.svg",
    mark: "../logo/logomark-cyan-on-black.svg",
  },
  photo: {
    word: "../logo/wordmark-cyan-on-black.svg",
    mark: "../logo/logomark-cyan-on-black.svg",
  },
  paper: {
    word: "../logo/wordmark-black-on-white.svg",
    mark: "../logo/logomark-black-on-white.svg",
  },
  cyan: {
    word: "../logo/wordmark-black-on-cyan.svg",
    mark: "../logo/logomark-black-on-cyan.svg",
  },
};

const state = {
  data: null,
  familyId: "title-cover",
  skin: "photo",
};

function $(sel) {
  return document.querySelector(sel);
}

function edit(tag, className, text, extra = "") {
  return `<${tag} class="${className}" contenteditable="true"${extra}>${text}</${tag}>`;
}

function marks(skin, mid) {
  const files = MARKS[skin] || MARKS.ink;
  const wordClass = mid ? "wordmark is-mid" : "wordmark";
  return `
    <img class="${wordClass}" src="${files.word}" alt="IMSERV" />
    <img class="mark" src="${files.mark}" alt="" />
  `;
}

function photoLayer(skin) {
  if (skin !== "photo") return "";
  return `<img class="slide-photo" src="${PHOTO}" alt="" />`;
}

function people() {
  const names = [
    "Jo Cox Chief Executive Officer",
    "Emma Askar Chief Revenue Officer",
    "Lisa Moran Chief Operation Officer",
    "Jeremy Thomas Chief Innovation Officer",
    "Michael Erskine Field Operations Managing Director",
    "Amy Harper Chief Financial Officer",
    "Sam Good Director of HSE",
    "Rachel Walsh Chief People Officer",
    "Ewan Patrick Corporate Services Director",
  ];
  const xs = [41, 667, 1293];
  const ys = [561, 742, 923];
  return names
    .map((name, i) => {
      const x = xs[i % 3];
      const y = ys[Math.floor(i / 3)];
      return `
        <div class="card" style="left:${x}px;top:${y}px;width:483px;height:117px;display:flex;gap:40px;align-items:center;padding:0 0 0 0;background:transparent">
          <img src="${PHOTO}" alt="" style="width:117px;height:117px;object-fit:cover" />
          ${edit("p", "t-body", name, ` style="position:static;width:326px;margin:0"`)}
        </div>
      `;
    })
    .join("");
}

const builders = {
  "title-cover"(skin) {
    return `
      ${photoLayer(skin)}
      <div class="slide-grid" aria-hidden="true"></div>
      ${marks(skin)}
      ${edit("h1", "t-cover", "Add a Catchy Heading Here")}
      ${edit("p", "t-kicker", "Board Update September 25")}
    `;
  },
  "divider-split"(skin) {
    return `
      ${photoLayer(skin)}
      ${skin === "ink" ? `<div class="slide-grid" aria-hidden="true"></div>` : ""}
      ${marks(skin, true)}
      ${edit("h1", "t-divider", "This is a Beautiful Title for a Divider")}
    `;
  },
  "divider-field"(skin) {
    return `
      <div class="slide-field" aria-hidden="true"></div>
      ${marks(skin, true)}
      ${edit("h1", "t-divider", "This is a Beautiful Title for a Divider")}
    `;
  },
  "stat-split"(skin) {
    const rows = ["First figure", "Second figure", "Third figure", "Fourth figure"]
      .map(
        (label, i) => `
          ${edit("p", "t-label", label, ` style="top:${209 + i * 72}px;left:707px;width:468px"`)}
          ${edit("p", "t-label", "£99,999", ` style="top:${209 + i * 72}px;left:1713px;width:127px"`)}
        `
      )
      .join("");
    return `
      ${edit("h1", "t-page", "Lorem Ipsum")}
      ${edit("p", "t-label", "Dolor Sit Amet", ` style="top:136px;left:40px;width:207px"`)}
      <div class="panel" style="left:667px;top:40px;width:1213px;height:499px">
        ${edit("p", "t-label", "Lorem Ipsum", ` style="position:absolute;top:37px;left:40px"`)}
        ${rows}
      </div>
      <div class="panel" style="left:667px;top:579px;width:1213px;height:460px">
        ${edit("p", "t-label", "Donec finibus viverra orci a ultricies", ` style="position:absolute;top:37px;left:40px;width:294px"`)}
        ${edit("p", "t-stat", "£99,999", ` style="position:absolute;top:163px;left:40px;width:1145px;font-size:160px;line-height:180px"`)}
      </div>
    `;
  },
  "chart-split"(skin) {
    const bars = [212, 184, 201, 172, 172, 157]
      .map((h, i) => {
        const x = 157 + i * 86;
        return `<span style="position:absolute;left:${x}px;bottom:118px;width:12px;height:${h}px;background:${
          skin === "ink" ? "var(--cyan)" : "var(--black)"
        }"></span>`;
      })
      .join("");
    return `
      ${edit("h1", "t-page", "Lorem Ipsum")}
      ${edit("p", "t-label", "Lorem Ipsum", ` style="top:248px;left:40px;width:235px"`)}
      ${bars}
      <div class="panel" style="left:980px;top:40px;width:899px;height:1000px;padding:167px 80px 40px">
        ${edit("h2", "t-page", "Lorem Ipsum Dolor", ` style="position:static;width:auto;font-size:40px;line-height:48px"`)}
        ${edit("p", "t-body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tellus non finibus bibendum.", ` style="position:static;margin:24px 0 0;width:517px"`)}
        ${edit("p", "t-body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tellus non finibus bibendum.", ` style="position:static;margin:20px 0 0;width:517px"`)}
        ${edit("p", "t-body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tellus non finibus bibendum.", ` style="position:static;margin:20px 0 0;width:517px"`)}
      </div>
    `;
  },
  illustration(skin) {
    return `
      ${edit("h1", "t-page", "Lorem Ipsum Dolor Sit Amet, Consectetur", ` style="width:712px;height:144px"`)}
      ${edit("p", "t-body", "● First point<br>● Second point<br>● Third point<br>● Fourth point", ` style="top:724px;left:40px;width:125px;line-height:36px"`)}
      ${edit("p", "t-body", "Fusce accumsan tellus non finibus bibendum. Proin laoreet, sapien sit amet dolor sirt accumsan.", ` style="top:896px;left:40px;width:821px;line-height:36px"`)}
      <img src="${ILLUSTRATION}" alt="" style="position:absolute;left:1137px;top:119px;width:743px;height:743px;object-fit:contain" />
      ${edit("p", "t-label", "Fusce accumsan tellus", ` style="top:944px;left:1269px;width:479px"`)}
    `;
  },
  "metric-row"(skin) {
    return `
      ${edit("h1", "t-page", "Lorem Ipsum")}
      <div class="card" style="left:40px;top:176px;width:900px;height:412px">
        <span class="dot"></span>
        ${edit("p", "t-label", "Aliquam Erat Volutpat", ` style="position:static;margin:20px 0 0;font-size:36px;line-height:48px"`)}
        <img src="${ILLUSTRATION}" alt="" style="position:absolute;right:20px;top:40px;width:331px;height:331px;object-fit:contain" />
      </div>
      <div class="panel" style="left:980px;top:176px;width:899px;height:864px;padding:93px 80px">
        ${edit("h2", "t-page", "Lorem Ipsum Dolor", ` style="position:static;font-size:40px;line-height:48px"`)}
        ${edit("p", "t-body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tellus non finibus bibendum.", ` style="position:static;margin:24px 0 0;width:517px"`)}
        ${edit("p", "t-body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tellus non finibus bibendum.", ` style="position:static;margin:20px 0 0;width:517px"`)}
      </div>
    `;
  },
  "four-up"(skin) {
    const titles = ["One", "Two", "Three", "Four"];
    const cards = [40, 510, 980, 1450]
      .map(
        (x, i) => `
          <div class="card" style="left:${x}px;top:180px;width:430px;height:860px">
            <span class="dot"></span>
            ${edit("h2", "t-label", titles[i], ` style="position:static;margin:20px 0 0;font-size:28px;line-height:36px"`)}
            ${edit("p", "t-body", "Title", ` style="position:static;margin:auto 0 8px;font-size:24px;line-height:32px"`)}
            ${edit("p", "t-body", "Short supporting line for this card.", ` style="position:static;width:auto"`)}
          </div>
        `
      )
      .join("");
    return `${edit("h1", "t-page", "Lorem Ipsum Dolor Sit Amet")}${cards}`;
  },
  "table-cards"(skin) {
    const years = ["2023", "2024", "2025", "2026"];
    const heads = [40, 510, 980, 1450]
      .map(
        (x, i) => `
          <div class="card" style="left:${x}px;top:295px;width:430px;height:220px;display:grid;place-items:center">
            ${edit("p", "t-label", years[i], ` style="position:static;font-size:36px;line-height:36px"`)}
          </div>
        `
      )
      .join("");
    const bodies = [40, 510, 980, 1450]
      .map(
        (x) => `
          <div class="card" style="left:${x}px;top:555px;width:430px;height:485px">
            ${edit("p", "t-label", "Lorem Ipsum Dolor Sit", ` style="position:static;font-size:28px;line-height:36px"`)}
            ${edit("p", "t-body", "Sed semper eros sed neque. Fusce lobortis. Odio et venenatis.", ` style="position:static;margin-top:24px;width:auto"`)}
          </div>
        `
      )
      .join("");
    return `${edit("h1", "t-page", "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.", ` style="width:1437px;height:144px"`)}${heads}${bodies}`;
  },
  "table-ruled"(skin) {
    const cols = [40, 510, 824, 1137, 1450];
    const heads = cols
      .map((x) => edit("p", "t-label", "Lorem Ipsum", ` style="top:286px;left:${x}px;width:116px"`))
      .join("");
    const rows = [370, 512, 654, 796, 938]
      .map((y) =>
        cols
          .map((x, i) =>
            edit(
              "p",
              "t-body",
              i === 0 ? "Fusce accumsan tellus non finibus." : "Lorem Ipsum",
              ` style="top:${y}px;left:${x}px;width:${i === 0 ? 370 : 336}px"`
            )
          )
          .join("")
      )
      .join("");
    const rules = [340, 482, 624, 766, 908]
      .map((y) => `<div class="rule" style="top:${y}px"></div>`)
      .join("");
    return `
      ${edit("h1", "t-page", "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.", ` style="width:915px;height:144px"`)}
      ${heads}${rules}${rows}
    `;
  },
  people(skin) {
    return `${edit("h1", "t-page", "Lorem Ipsum Dolor Sit", ` style="width:576px;height:192px"`)}${people()}`;
  },
  "three-photos"(skin) {
    const panels = [40, 667, 1293]
      .map(
        (x, i) => `
          <div class="card" style="left:${x}px;top:176px;width:586px;height:863px;padding:40px;${
            i === 0 ? `background:transparent;padding:0;` : ""
          }">
            ${
              i === 0
                ? `<img src="${PHOTO}" alt="" style="width:587px;height:865px;object-fit:cover;display:block" />`
                : `${edit("h2", "t-page", "Fusce accumsan tellus non finibus bibendum.", ` style="position:static;width:auto;font-size:40px;line-height:48px"`)}
                   ${edit("p", "t-body", "Aliquam erat volutpat. Sed semper eros sed neque placerat faucibus.", ` style="position:static;margin-top:auto;width:auto"`)}`
            }
          </div>
        `
      )
      .join("");
    return `${edit("h1", "t-page", "Lorem Ipsum")}${panels}`;
  },
  mosaic(skin) {
    const tiles = [];
    for (let col = 0; col < 6; col += 1) {
      for (let row = 0; row < 3; row += 1) {
        const x = 213 + col * 333;
        const y = 40 + row * 334;
        tiles.push(
          `<div class="card" style="left:${x}px;top:${y}px;width:333px;height:334px;background:${
            (col + row) % 2 ? "transparent" : skin === "cyan" ? "var(--black)" : "var(--cyan)"
          };color:${(col + row) % 2 ? "inherit" : skin === "cyan" ? "var(--cyan)" : "var(--black)"}">
            ${
              row > 0 && col > 0
                ? edit("p", "t-body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", ` style="position:static;width:auto"`)
                : ""
            }
          </div>`
        );
      }
    }
    return tiles.join("");
  },
  "cards-3"(skin) {
    const cards = [41, 667, 1293]
      .map(
        (x) => `
          <div class="card" style="left:${x}px;top:176px;width:586px;height:864px">
            <span class="dot"></span>
            ${edit("h2", "t-label", "Aliquam Erat Volutpat", ` style="position:static;margin:20px 0 0;font-size:36px;line-height:48px"`)}
            ${edit("p", "t-body", "Sed semper eros sed neque placerat faucibus. Donec in lobortis est.", ` style="position:static;margin-top:40px;width:410px"`)}
            ${edit("p", "t-body", "Nullam eget est porttitor enim consequat.", ` style="position:static;margin-top:16px;width:410px"`)}
            ${edit("p", "t-body", "Donec convallis lectus non nunc convallis.", ` style="position:static;margin-top:8px;width:410px"`)}
          </div>
        `
      )
      .join("");
    return `${edit("h1", "t-page", "Lorem Ipsum")}${cards}`;
  },
  "numbered-cols"(skin) {
    const cards = [522, 1004, 1486]
      .map(
        (x, i) => `
          <div class="card" style="left:${x}px;top:176px;width:392px;height:864px">
            <span class="dot"></span>
            ${edit("p", "t-stat", `${i + 1}.`, ` style="position:static;margin:200px 0 0;font-size:96px;line-height:154px"`)}
            ${edit("p", "t-label", "year", ` style="position:static;margin-top:90px"`)}
            ${edit("p", "t-body", "Breakdown of goals", ` style="position:static;margin-top:12px"`)}
            ${edit("p", "t-body", "Breakdown of goals", ` style="position:static"`)}
            ${edit("p", "t-body", "Breakdown of goals", ` style="position:static"`)}
          </div>
        `
      )
      .join("");
    return `
      ${photoLayer(skin)}
      ${edit("h1", "t-page", "Lorem Ipsum")}
      ${cards}
    `;
  },
  "four-cards"(skin) {
    return `${photoLayer(skin)}${builders["four-up"](skin === "photo" ? "paper" : skin)}`;
  },
  "stacked-rows"(skin) {
    const rows = [212, 500, 788]
      .map(
        (y) => `
          <div class="card" style="left:40px;top:${y}px;width:1840px;height:254px;display:flex;align-items:center;gap:80px">
            <span class="dot"></span>
            ${edit("h2", "t-page", "Title Here", ` style="position:static;width:auto;font-size:48px;line-height:90px"`)}
            <div>
              ${edit("p", "t-label", "title", ` style="position:static"`)}
              ${edit("p", "t-body", "description", ` style="position:static;margin-top:8px"`)}
            </div>
          </div>
        `
      )
      .join("");
    return `${photoLayer(skin)}${edit("h1", "t-page", "Lorem Ipsum")}${rows}`;
  },
};

function familyById(id) {
  return (state.data.families || []).find((item) => item.id === id);
}

function renderRail() {
  const groups = {};
  for (const family of state.data.families) {
    groups[family.section] = groups[family.section] || [];
    groups[family.section].push(family);
  }
  $("#rail-list").innerHTML = Object.entries(groups)
    .map(
      ([section, families]) => `
        <section>
          <h2>${section}</h2>
          ${families
            .map(
              (family) => `
                <button type="button" data-family="${family.id}" class="${
                  family.id === state.familyId ? "is-on" : ""
                }">${family.name}</button>
              `
            )
            .join("")}
        </section>
      `
    )
    .join("");
}

function renderSkinOptions() {
  const family = familyById(state.familyId);
  const skins = family?.skins || ["paper"];
  if (!skins.includes(state.skin)) state.skin = skins[0];
  $("#skin").innerHTML = skins
    .map((skin) => `<option value="${skin}"${skin === state.skin ? " selected" : ""}>${skin}</option>`)
    .join("");
}

function renderSlide() {
  const family = familyById(state.familyId);
  const build = builders[state.familyId];
  const slide = $("#slide");
  slide.className = `slide skin-${state.skin}`;
  slide.innerHTML = build ? build(state.skin) : "";
  $("#hint").textContent = family
    ? `${family.use} Brand Book frames: ${(family.frames || []).map((item) => item.name).join(", ")}.`
    : "";
  scaleStage();
}

function scaleStage() {
  const wrap = $("#stage-wrap");
  const stage = $("#stage");
  if (!wrap || !stage || document.body.classList.contains("is-present")) return;
  const pad = 32;
  const scale = Math.min((wrap.clientWidth - pad) / 1920, (wrap.clientHeight - pad) / 1080, 1);
  stage.style.transform = `scale(${scale})`;
  wrap.style.minHeight = `${1080 * scale + pad}px`;
}

function setFamily(id) {
  state.familyId = id;
  const next = new URL(window.location.href);
  next.searchParams.set("recipe", id);
  history.replaceState({}, "", next);
  renderRail();
  renderSkinOptions();
  renderSlide();
}

function setPresent(on) {
  document.body.classList.toggle("is-present", on);
  $("#present").classList.toggle("is-on", on);
  if (on) {
    const wrap = $("#stage-wrap");
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    $("#stage").style.transform = `scale(${scale})`;
  } else {
    scaleStage();
  }
}

function familyIds() {
  return (state.data.families || []).map((item) => item.id);
}

async function init() {
  state.data = await (await fetch("recipes.json")).json();
  const params = new URLSearchParams(window.location.search);
  state.familyId = params.get("recipe") || state.familyId;
  state.skin = params.get("skin") || state.skin;
  renderRail();
  renderSkinOptions();
  renderSlide();
  $("#rail-list").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-family]");
    if (btn) setFamily(btn.getAttribute("data-family"));
  });
  $("#skin").addEventListener("change", (event) => {
    state.skin = event.target.value;
    const next = new URL(window.location.href);
    next.searchParams.set("skin", state.skin);
    history.replaceState({}, "", next);
    renderSlide();
  });
  $("#present").addEventListener("click", () => setPresent(!document.body.classList.contains("is-present")));
  $("#print").addEventListener("click", () => window.print());
  window.addEventListener("resize", () => {
    if (document.body.classList.contains("is-present")) setPresent(true);
    else scaleStage();
  });
  window.addEventListener("keydown", (event) => {
    const ids = familyIds();
    const index = ids.indexOf(state.familyId);
    if (event.key === "Escape") setPresent(false);
    if (event.key === "ArrowRight" && index < ids.length - 1) setFamily(ids[index + 1]);
    if (event.key === "ArrowLeft" && index > 0) setFamily(ids[index - 1]);
  });
  if (params.get("print") === "1") window.print();
}

init();
