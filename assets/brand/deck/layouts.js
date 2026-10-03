/* IMSERV presentation layouts.
   One builder per layout found in the Presentation Templates PDFs (26 layouts, 7 families).
   Each builder takes an options object and returns the HTML for one 1920 x 1080 slide.
   Shared by presentation-templates.html (the guideline record) and any deck built on it. */
(function (root) {
  const PHOTO = n => `photos/${n}.jpg`;
  const esc = s => String(s == null ? "" : s);
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const loremS = "Fusce accumsan tellus non finibus bibendum.";

  const LOOPS = `<svg viewBox="-41 -34 82 68" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round">
    <path d="M0 -33V33"/>
    <path d="M0 0C3 -31 31 -31 31 0C31 31 3 31 0 0Z"/><path d="M0 0C-3 -31 -31 -31 -31 0C-31 31 -3 31 0 0Z"/>
    <path d="M0 0C8 -19 39 -19 39 0C39 19 8 19 0 0Z"/><path d="M0 0C-8 -19 -39 -19 -39 0C-39 19 -8 19 0 0Z"/></svg>`;

  const ARROW = "M38.27 15.0225C41.7011 15.0223 44.4828 12.2408 44.4829 8.80957V0.0302743H40.5718V8.36621L32.2056 0L29.4399 2.76465L37.7856 11.1113H29.4438V15.0225H38.27Z";

  function arrowWave({ x = 640, y = 40, w = 1260, h = 330, periods = 2.25, n = 34, colour = "var(--cyan)", scale = 2.1 } = {}) {
    let g = "";
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const px = t * w;
      const ph = t * periods * Math.PI * 2;
      const py = h / 2 + Math.sin(ph) * (h / 2 - 30);
      const dy = Math.cos(ph) * (h / 2 - 30) * periods * Math.PI * 2 / w;
      const ang = Math.atan2(dy, 1) * 180 / Math.PI - 45;
      g += `<path d="${ARROW}" transform="translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${ang.toFixed(1)}) scale(${scale}) translate(-37 -7.5)"/>`;
    }
    return `<svg class="wave" style="left:${x}px;top:${y}px;width:${w + 60}px;height:${h}px;overflow:visible" viewBox="0 0 ${w + 60} ${h}" fill="${colour}">${g}</svg>`;
  }

  function slide(cls, inner, o = {}) {
    const bg = o.img ? ` style="background-image:url('${o.img.includes("/") ? o.img : PHOTO(o.img)}')${o.pos ? `;background-position:${o.pos}` : ""}"` : "";
    const pg = o.page ? `<div class="pageno">${String(o.page).padStart(2, "0")}</div>` : "";
    const id = o.id ? ` id="${o.id}"` : "";
    return `<section${id} class="slide ${cls}"${bg} data-layout="${o.layout || ""}">${inner}${pg}</section>`;
  }

  function skinClass(skin, extra = "") {
    if (skin === "photo") return `photo ${extra}`;
    if (skin === "photo-dark-type") return `photo dark-type ${extra}`;
    return `${skin || "paper"} ${extra}`;
  }

  const L = {};

  /* ---------------- Titles ---------------- */
  L.title = (o = {}) => slide(skinClass(o.skin, "grid"), `
    <div class="wordmark"></div>
    <div class="t-hero" style="${o.heroStyle || ""}">${esc(o.title || "Add a Catchy<br>Heading Here")}</div>
    <div class="t-kicker">${esc(o.kicker || "Board Update<br>September 25")}</div>
    <div class="loops">${LOOPS}</div>`, { ...o, layout: "title" });

  /* ---------------- Dividers ---------------- */
  L.divider = (o = {}) => slide(skinClass(o.skin, o.skin === "photo" || o.skin === "photo-dark-type" ? "" : "dots"), `
    <div class="wordmark small"></div>
    <div class="t-divider">${esc(o.title || "This is a Beautiful<br>Title for a Divider")}</div>`, { ...o, layout: "divider" });

  /* ---------------- Text Heavy ---------------- */
  L.numberedGrid = (o = {}) => {
    const cols = [0, 211, 543, 876, 1209, 1542, 1875], rows = [40, 372, 705, 1038];
    let lines = "";
    cols.slice(1, -1).forEach(x => lines += `<div style="left:${x}px;top:0;width:2px;height:1080px;background:var(--line)"></div>`);
    rows.forEach(y => lines += `<div style="left:0;top:${y}px;width:1920px;height:2px;background:var(--line)"></div>`);
    const items = o.items || Array.from({ length: 8 }, () => "Lorem ipsum dolor sit amet,consectetur adipiscing elit");
    let cells = "", k = 0;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
      const x = cols[c], y = rows[r], w = cols[c + 1] - cols[c];
      const live = r > 0 && c > 1;
      if (r === 0 && c < 2) continue;
      const num = live ? String(++k).padStart(2, "0") : "";
      cells += `<span class="badge-num ${live ? "" : "off"}" style="position:absolute;left:${x + w - 50}px;top:${y + 20}px">${num || "00"}</span>`;
      if (live) cells += `<div class="small" style="left:${x + 22}px;top:${y + 112}px;width:${w - 40}px;font-size:31px;line-height:37px">${esc(items[k - 1])}</div>`;
    }
    return slide(skinClass(o.skin), `${lines}${cells}<div class="t-page" style="width:900px;font-size:96px;line-height:92px">${esc(o.title || "Lorem Ipsum")}</div>`, { ...o, layout: "numbered-grid" });
  };

  L.nineCards = (o = {}) => {
    const items = o.items || Array.from({ length: 9 }, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tellus non finibus bibendum.");
    const xs = [40, 667, 1293], ys = [176, 477, 778];
    let h = "";
    items.slice(0, 9).forEach((t, i) => {
      const x = xs[i % 3], y = ys[Math.floor(i / 3)];
      h += `<div class="card lined" style="left:${x}px;top:${y}px;width:587px;height:260px">
        <div class="small" style="position:absolute;left:20px;top:18px">${(o.prefix || "/") + String(i + 1).padStart(2, "0")}</div>
        <div class="small" style="position:absolute;left:20px;right:262px;bottom:22px;font-size:22px;line-height:29px">${esc(t)}</div></div>`;
    });
    return slide(skinClass(o.skin), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>${h}`, { ...o, layout: "nine-cards" });
  };

  const bulletBlock = (b) => {
    if (!b) b = [["Sed semper eros sed neque placerat faucibus. Donec in lobortis est, fusce lobortis."], ["Nullam eget est porttitor enim consequat."], ["Donec convallis lectus non nunc convallis.", ["Donec finibus viverra orci a ultricies. Sed nec lectus euismod, fermentum ligula ut, accumsan tortor.", "Aliquam ultricies ut sapien eu auctor. Nam ut semper lectus."]], ["Pellentesque ultrices arcu metus.", ["Suspendisse semper, massa ac venenatis condimentum, nulla ligula accumsan lectus.", "Vivamus a mollis elit. Sed a dapibus dolor, ac vestibulum magna."]]];
    return `<ul class="b">${b.map(i => typeof i === "string" ? `<li>${i}</li>` : `<li>${i[0]}${i[1] ? `<ul class="b">${i[1].map(s => `<li>${s}</li>`).join("")}</ul>` : ""}</li>`).join("")}</ul>`;
  };

  const tallCard = (x, y, w, h, c = {}) => `<div class="card lined" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;padding:36px 40px">
    <span class="sq"></span>
    <div class="h3" style="margin:22px 0 ${c.tight ? 26 : 44}px">${esc(c.heading || "Aliquam Erat Volutpat")}</div>
    <div class="micro" style="font-size:${c.fs || 18}px;line-height:${c.lh || 25}px">${bulletBlock(c.bullets)}</div></div>`;

  L.threeColumns = (o = {}) => {
    const c = o.cards || [{}, {}, {}];
    return slide(skinClass(o.skin), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>
      ${tallCard(40, 176, 587, 864, c[0])}${tallCard(667, 176, 586, 864, c[1])}${tallCard(1293, 176, 587, 864, c[2])}`, { ...o, layout: "three-columns" });
  };

  L.splitColumns = (o = {}) => {
    const short = [["Sed semper eros sed neque placerat faucibus. Donec in lobortis est, fusce lobortis."], ["Aliquam ultricies ut sapien eu auctor. Nam ut semper lectus."], ["Nullam eget est porttitor enim consequat."], ["Donec convallis lectus non nunc convallis."]];
    const c = o.cards || [{}, { bullets: short, tight: true }, { bullets: short, tight: true }, {}];
    return slide(skinClass(o.skin), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>
      ${tallCard(40, 176, 587, 864, c[0])}${tallCard(667, 176, 586, 412, c[1])}${tallCard(667, 628, 586, 412, c[2])}${tallCard(1293, 176, 587, 864, c[3])}`, { ...o, layout: "split-columns" });
  };

  L.titleCards = (o = {}) => {
    const items = o.items || Array.from({ length: 5 }, () => "Sed semper eros sed neque placerat faucibus. Donec in lobortis est, fusce lobortis.");
    const pos = [[40, 477], [667, 477], [1293, 477], [40, 778], [667, 778], [1293, 778]];
    const h = items.slice(0, 6).map((t, i) => `<div class="card lined" style="left:${pos[i][0]}px;top:${pos[i][1]}px;width:587px;height:260px">
      <div class="small" style="position:absolute;left:20px;top:18px">${(o.labels && o.labels[i]) || "/" + String(i + 1).padStart(2, "0")}</div>
      <div style="position:absolute;left:20px;right:130px;bottom:22px;font-size:24px;line-height:30px">${esc(t)}</div></div>`).join("");
    return slide(skinClass(o.skin), `<div class="t-page two">${esc(o.title || "Lorem Ipsum<br>Dolor Sit Amet")}</div>${o.intro ? `<div class="t-sub" style="left:40px;top:216px;width:1100px;font-weight:400">${o.intro}</div>` : ""}${h}`, { ...o, layout: "title-cards" });
  };

  /* ---------------- Graphics ---------------- */
  L.statSplit = (o = {}) => {
    const rows = o.rows || Array.from({ length: 4 }, () => ["Donec finibus viverra orci a ultricies", "£99,999"]);
    return slide(skinClass(o.skin), `<div class="t-page" style="width:600px">${esc(o.title || "Lorem Ipsum")}</div>
      <div class="t-sub" style="left:40px;top:${o.subTop || 128}px;width:560px;font-size:28px;font-weight:400">${esc(o.sub || "Dolor Sit Amet")}</div>
      <div class="card" style="left:664px;top:40px;width:1216px;height:${o.listH || 492}px;padding:40px">
        <div style="font-size:28px">${esc(o.listTitle || "Lorem Ipsum:")}</div>
        <div class="rows" style="position:absolute;left:40px;right:40px;bottom:${o.rowsBottom || 26}px;font-size:${o.rowFs || 25}px">${rows.map(r => `<div><span>${r[0]}</span><span style="text-align:right;flex:none">${r[1]}</span></div>`).join("")}</div></div>
      <div class="card cyanfill" style="left:664px;top:${(o.listH || 492) + 80}px;width:1216px;height:${1000 - (o.listH || 492) - 40}px;padding:40px">
        <div style="font-size:30px;line-height:38px;width:600px">${esc(o.statLabel || "Donec finibus viverra<br>orci a ultricies:")}</div>
        <div style="position:absolute;left:34px;bottom:${o.statBottom || -30}px;font-size:${o.statSize || 290}px;line-height:1;font-weight:500;letter-spacing:-.03em">${esc(o.stat || "£99,999")}</div></div>`, { ...o, layout: "stat-split" });
  };

  const bulletPanel = (x, y, w, h, heading, items) => `<div class="card" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;padding:${o_pad(h)}px 140px">
      <div class="h4" style="text-align:center;font-size:34px;margin-bottom:48px">${esc(heading || "Lorem Ipsum Dolor")}</div>
      <ul class="b micro" style="font-size:18px;line-height:24px">${(items || Array.from({ length: 8 }, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tellus non finibus bibendum.")).map(t => `<li style="margin-bottom:24px">${t}</li>`).join("")}</ul></div>`;
  const o_pad = h => (h > 900 ? 160 : 100);

  L.stackedBars = (o = {}) => {
    const data = o.data || [[120, 285, 230, 10], [125, 290, 270, 70], [110, 270, 190, 50], [110, 245, 170, 8], [110, 245, 155, 8], [110, 260, 140, 10]];
    const cols = o.colours || ["var(--cyan)", "var(--fg)", "var(--grey-b)", "var(--grey-c)"];
    const max = o.max || 800, base = 990, ht = 410;
    let bars = "";
    data.forEach((d, i) => {
      let y = base;
      d.forEach((v, j) => { const hh = v / max * ht * 1.4; y -= hh; bars += `<div style="left:${150 + i * 86}px;top:${y}px;width:${o.barW || 14}px;height:${hh}px;background:${cols[j]}"></div>`; });
      bars += `<div class="micro" style="left:${132 + i * 86}px;top:${base + 22}px;width:50px;text-align:center;font-size:15px">${(o.xs || [])[i] || "20XX"}</div>`;
    });
    let axis = "";
    for (let k = 0; k <= 13; k++) { const y = base - k * 44; axis += `<div class="micro" style="left:40px;top:${y - 11}px;font-size:15px">${(o.ys || [])[k] || "£00m"}</div><div style="left:110px;top:${y}px;width:${o.axisW || 500}px;height:1px;background:var(--line)"></div>`; }
    const leg = (o.legend || ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]).map((t, j) => `<li style="--c:${[cols[3], cols[2], cols[1], cols[0]][j]}">${t}</li>`).join("");
    return slide(skinClass(o.skin), `<div class="t-page" style="width:900px">${esc(o.title || "Lorem Ipsum")}</div>
      <div class="t-sub" style="left:40px;top:${o.subTop || 266}px;width:880px;font-size:36px;font-weight:400">${esc(o.sub || "Lorem Ipsum")}</div>
      ${axis}${bars}<div class="card" style="left:${o.legendX || 660}px;top:${o.legendY || 480}px;padding:14px 18px;background:transparent;outline:1.5px solid var(--line)"><ul class="legend">${leg}</ul></div>
      ${bulletPanel(975, 40, 905, 1000, o.panelTitle, o.panelItems)}`, { ...o, layout: "stacked-bars" });
  };

  const pieGradient = (vals, cols) => { let a = 0; return "conic-gradient(" + vals.map((v, i) => { const s = a; a += v; return `${cols[i]} ${s}% ${a}%`; }).join(",") + ")"; };

  L.pie = (o = {}) => {
    const vals = o.values || [2, 2, 46, 50];
    const cols = o.colours || ["var(--grey-b)", "var(--grey-c)", "var(--fg)", "var(--cyan)"];
    const leg = (o.legend || ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]).map((t, j) => `<li style="--c:${[cols[3], cols[2], cols[1], cols[0]][j]}">${t}</li>`).join("");
    return slide(skinClass(o.skin), `<div class="t-page two">${esc(o.title || "Lorem Ipsum Dolor<br>Sit Amet, Consectetur")}</div>
      <div style="left:1132px;top:120px;width:736px;height:736px;border-radius:50%;background:${pieGradient(vals, cols)};transform:rotate(${o.rotate || 0}deg)"></div>
      <ul class="legend" style="left:40px;top:${o.legendTop || 715}px">${leg}</ul>
      <div style="left:40px;top:${o.stTop || 900}px;width:${o.stW || 760}px;font-size:${o.stFs || 44}px;line-height:${o.stLh || 47}px;font-weight:500">${esc(o.statement || "Fusce accumsan tellus non finibus bibendum. Proin laoreet, sapien sit amet dolor sirt accumsan.")}</div>
      <div style="left:1132px;top:${o.capTop || 900}px;width:736px;text-align:center;font-size:44px;line-height:47px;font-weight:500">${esc(o.caption || "Fusce accumsan tellus")}</div>`, { ...o, layout: "pie" });
  };

  L.pieTable = (o = {}) => {
    const vals = o.values || [30, 50, 10, 10];
    const cols = ["var(--fg)", "var(--cyan)", "var(--bg)", "var(--grey-c)"];
    const rows = o.rows || [["Partner", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Fusce accumsan tellus non finibus bibendum."]], ["Partner", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Fusce accumsan tellus non finibus bibendum."]], ["Partner", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Fusce accumsan tellus non finibus bibendum."]]];
    return slide(skinClass(o.skin), `<div class="t-page">${esc(o.title || "Lorem Ipsum Dolor Sit Amet")}</div>
      <div class="card" style="left:40px;top:176px;width:895px;height:400px;padding:28px 20px">
        <div style="font-size:36px;line-height:42px;width:480px;font-weight:500">${esc(o.cardTitle || "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.")}</div>
        <ul class="legend" style="position:absolute;left:20px;bottom:24px">${(o.legend || ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]).map((t, j) => `<li style="--c:${cols[j]}">${t}</li>`).join("")}</ul>
        <div style="position:absolute;right:28px;top:38px;width:330px;height:330px;border-radius:50%;background:${pieGradient(vals, cols)}"></div></div>
      <div style="left:40px;top:616px;width:895px">
        <table class="ruled" style="font-size:15px;line-height:21px"><tr><th style="width:210px;font-size:15px">${o.th1 || "Lorem Ipsum"}</th><th style="font-size:15px">${o.th2 || "Lorem Ipsum"}</th></tr>
        ${rows.map(r => `<tr><td style="padding:24px 16px;vertical-align:middle"><span style="display:inline-block;padding:10px 14px;border:1.5px solid var(--rule);font-weight:600;font-size:17px">${r[0]}</span></td><td style="padding:24px 0"><ul class="b" style="margin:0">${r[1].map(t => `<li style="margin-bottom:6px">${t}</li>`).join("")}</ul></td></tr>`).join("")}</table></div>
      ${bulletPanel(975, 176, 905, 864, o.panelTitle, o.panelItems)}`, { ...o, layout: "pie-table" });
  };

  L.tabsIllustrations = (o = {}) => {
    const tabs = o.tabs || ["Lorem Ipsum Dolor Sit Amet", "Lorem Ipsum Dolor Sit Amet", "Lorem Ipsum Dolor Sit Amet"];
    const cards = o.cards || [{ img: "coil" }, { img: "field" }, { img: "sphere" }];
    const tx = [40, 195, 350], cx = [508, 975, 1442];
    let h = tabs.map((t, i) => `<div class="card" style="left:${tx[i]}px;top:176px;width:115px;height:864px;padding:0">
      <div style="position:absolute;left:50%;bottom:40px;transform-origin:0 0;transform:rotate(-90deg) translateY(-50%);white-space:nowrap;font-size:36px;font-weight:500">${t}</div></div>`).join("");
    h += cards.map((c, i) => `<div class="card" style="left:${cx[i]}px;top:176px;width:${i === 2 ? 438 : 427}px;height:864px;padding:24px 24px">
      <div style="font-size:36px;line-height:38px;font-weight:500">${esc(c.heading || "Lorem Ipsum<br>Dolor Sit Amet")}</div>
      <img src="img/${c.img}.svg" alt="" style="position:absolute;left:50%;top:170px;transform:translateX(-50%);width:${c.w || 250}px;height:300px;object-fit:contain" class="illo">
      <ul class="b micro" style="position:absolute;left:24px;right:24px;bottom:16px;font-size:15px;line-height:21px">${(c.bullets || ["Aliquam erat volutpat dapibus", "Sed semper eros sed neque placerat", "Faucibus. Donec in lobortis est", "Fusce lobortis, odio et venenatis commodo, sapien mi dapibus leo, sed finibus eros.", "Nullam eget est porttitor enim consequat sagittis sed vitae quam.", "Morbi vel diam a ipsum varius posuere."]).map(t => `<li style="margin-bottom:16px">${t}</li>`).join("")}</ul></div>`).join("");
    return slide(skinClass(o.skin), `<div class="t-page">${esc(o.title || "Lorem Ipsum Dolor Sit Amet")}</div>${h}`, { ...o, layout: "tabs-illustrations" });
  };

  /* ---------------- Imagery & Text ---------------- */
  const people = (list, top, opt = {}) => {
    const xs = [40, 667, 1293], rowH = opt.rowH || 180;
    return list.map((p, i) => `<div class="person" style="left:${xs[i % 3]}px;top:${top + Math.floor(i / 3) * rowH}px;width:587px">
      <div class="face ${p.cyan ? "cyanfill" : ""}" ${p.img ? `style="background-image:url('${p.img}')"` : ""}>${p.initials || ""}</div>
      <div><b>${p.name}</b><span>${p.role}</span></div></div>`).join("");
  };
  const samplePeople = () => [["Jo Cox", "Chief Executive Officer"], ["Emma Askar", "Chief Revenue Officer"], ["Lisa Moran", "Chief Operation Officer"], ["Jeremy Thomas", "Chief Innovation Officer"], ["Michael Erskine", "Field Operations Managing Director"], ["Amy Harper", "Chief Financial Officer"], ["Sam Good", "Director of HSE"], ["Rachel Walsh", "Chief People Officer"], ["Ewan Patrick", "Corporate Services Director"]]
    .map(([name, role]) => ({ name, role, initials: name.split(" ").map(s => s[0]).join("") }));

  L.peopleWave = (o = {}) => slide(skinClass(o.skin), `<div class="t-xl">${esc(o.title || "Lorem Ipsum<br>Dolor Sit")}</div>
    ${arrowWave(o.wave)}${people(o.people || samplePeople(), o.peopleTop || 567, o)}`, { ...o, layout: "people-wave" });

  L.peoplePhoto = (o = {}) => slide(skinClass(o.skin), `<div class="t-xl">${esc(o.title || "Lorem Ipsum<br>Dolor Sit")}</div>
    <div style="left:664px;top:40px;width:1216px;height:487px;background:url('${PHOTO(o.photo || "meeting")}') ${o.photoPos || "center"} / cover"></div>
    ${people(o.people || samplePeople(), o.peopleTop || 567, o)}`, { ...o, layout: "people-photo" });

  L.statementCards = (o = {}) => {
    const c = o.cards || [{ photo: "engineer-silhouette" }, { cyan: true }, {}];
    const xs = [40, 667, 1293];
    const h = c.map((k, i) => {
      const bg = k.photo ? `background:url('${PHOTO(k.photo)}') ${k.pos || "center"} / cover;color:#fff` : "";
      return `<div class="card ${k.cyan ? "cyanfill" : "lined"}" style="left:${xs[i]}px;top:176px;width:587px;height:864px;padding:36px 40px;${bg}">
        <div style="font-size:${k.fs || 64}px;line-height:${k.lh || 64}px;font-weight:500;letter-spacing:-.01em">${esc(k.heading || "Fusce accumsan tellus non finibus bibendum.")}</div>
        <div style="position:absolute;left:40px;right:40px;bottom:30px;font-size:${k.bfs || 18}px;line-height:${k.blh || 24}px">${esc(k.body || "Aliquam erat volutpat. Sed semper eros sed neque placerat faucibus. Donec in lobortis est. Fusce lobortis, odio et venenatis commodo, sapien mi dapibus leo, sed finibus eros ipsum quis nunc.")}</div></div>`;
    }).join("");
    return slide(skinClass(o.skin), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>${h}`, { ...o, layout: "statement-cards" });
  };

  L.titlePhoto = (o = {}) => {
    const ppl = o.people || [{ name: "First and Last Name", role: "Position", initials: "FL" }, { name: "First and Last Name", role: "Position", initials: "FL" }];
    return slide(skinClass(o.skin), `<div class="t-xl" style="width:860px">${esc(o.title || "Lorem Ipsum<br>Dolor Sit Amet")}</div>
      ${o.body ? `<div style="left:40px;top:${o.bodyTop || 300}px;width:${o.bodyW || 800}px;font-size:26px;line-height:35px">${o.body}</div>` : ""}
      <div style="left:${o.split || 960}px;top:0;right:0;bottom:0;background:url('${PHOTO(o.photo || "van-sunset")}') ${o.photoPos || "center"} / cover"></div>
      ${ppl.map((p, i) => `<div class="person" style="left:40px;top:${(o.peopleTop || (1040 - ppl.length * 180 + 40)) + i * 180}px;width:${o.personW || 587}px">
        <div class="face ${p.cyan ? "cyanfill" : ""}">${p.initials || ""}</div><div><b>${p.name}</b><span>${p.role}</span></div></div>`).join("")}`, { ...o, layout: "title-photo" });
  };

  L.contents = (o = {}) => {
    const s = o.sections || "ABCDEFG".split("").map((l, i) => [`Section ${l}`, `${String(i * 2 + 1).padStart(2, "0")}-${String(i * 2 + 2).padStart(2, "0")}`]);
    return slide(skinClass(o.skin || "photo-dark-type"), `<div style="left:40px;top:40px;font-size:32px;font-weight:500">${esc(o.title || "Lorem Ipsum")}</div>
      <div class="rows" style="left:818px;top:20px;width:1062px;font-size:${o.fs || 62}px;line-height:${o.lh || 70}px;font-weight:500;letter-spacing:-.01em">
      ${s.map(r => `<div style="padding:20px 0;border-bottom-color:${o.ruleColour || "var(--rule)"}"><span>${r[0]}</span><span>${r[1]}</span></div>`).join("")}</div>`, { ...o, img: o.img || "turbine-hill", layout: "contents" });
  };

  /* ---------------- Tables ---------------- */
  const xs4 = [40, 508, 976, 1444], w4 = 436;
  L.yearCards = (o = {}) => {
    const top = o.top || ["Year", "Year", "Year", "Year"].map(t => ({ head: t, body: "Fusce accumsan tellus non finibus bibendum. Proin laoreet, sapien sit amet accumsan." }));
    const bottom = o.bottom || Array.from({ length: 4 }, () => ({ sub: "Subtitle", head: "Lorem Ipsum<br>Dolor Sit", lead: "Sed semper eros sed neque", bullets: ["Odio et venenatis", "Commodo,", "Sapien mi", "Dapibus leo", "Sed finibus", "Finibus bibendum"], intro: "Fusce lobortis:" }));
    let h = top.map((c, i) => `<div class="card outline" style="left:${xs4[i]}px;top:${o.y1 || 292}px;width:${w4}px;height:${o.h1 || 222}px">
      <div class="cyanfill" style="position:relative;height:${o.hb1 || 108}px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:500;text-align:center;line-height:40px">${c.head}</div>
      <div class="micro" style="margin-top:20px;font-size:15px;line-height:21px">${c.body}</div></div>`).join("");
    h += bottom.map((c, i) => `<div class="card outline" style="left:${xs4[i]}px;top:${o.y2 || 552}px;width:${w4}px;height:${o.h2 || 488}px">
      <div class="cyanfill" style="position:relative;height:178px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
        <div class="label" style="color:var(--cyan-2);font-size:12px;margin-bottom:6px">${c.sub}</div><div style="font-size:34px;line-height:36px;font-weight:500">${c.head}</div></div>
      <div style="margin:22px 0 14px;font-size:24px;font-weight:500">${c.lead}</div>
      <div class="micro" style="font-size:16px;line-height:23px">${c.intro || ""}<ul class="b" style="margin-top:2px">${c.bullets.map(b => `<li style="margin:0">${b}</li>`).join("")}</ul></div></div>`).join("");
    return slide(skinClass(o.skin), `<div class="t-page two">${esc(o.title || "Lorem Ipsum Dolor Sit Amet,<br>Consectetur Adipiscing Elit.")}</div>${h}`, { ...o, layout: "year-cards" });
  };

  const ARROW_UP = `<svg viewBox="0 0 40 60" fill="none" stroke="var(--cyan)" stroke-width="5"><path d="M20 58V4M4 20L20 4L36 20"/></svg>`;
  L.trendCards = (o = {}) => {
    const cards = o.cards || [false, true, true, true].map(up => ({ head: "Lorem Ipsum<br>Dolor Sit", body: "Fusce accumsan tellus non finibus bibendum. Proin laoreet, sapien sit amet dolor sirt accumsan.", foot: "Lorem Ipsum Dolor<br>Sit Amet", up }));
    const h = cards.map((c, i) => `<div class="card outline" style="left:${xs4[i]}px;top:${o.top || 392}px;width:${w4}px;height:${1040 - (o.top || 392)}px">
      <div class="label" style="font-size:11px;margin-bottom:12px">${c.label || "Lorem Ipsum"}</div>
      <div class="cyanfill" style="height:178px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:${c.hfs || 34}px;line-height:${c.hlh || 36}px;font-weight:500;color:#000;padding:0 16px">${c.head}</div>
      <div style="margin-top:28px;font-size:${c.bfs || 20}px;line-height:${c.blh || 28}px">${c.body}</div>
      <div style="position:absolute;left:18px;bottom:20px"><div class="label" style="font-size:11px;margin-bottom:8px">${c.footLabel || "Lorem Ipsum"}</div><div class="micro" style="font-size:17px;line-height:22px;width:250px">${c.foot}</div></div>
      <div style="position:absolute;right:30px;bottom:18px;width:${c.arrowW || 40}px;height:${c.arrowH || 120}px;transform:rotate(${c.up ? 0 : 180}deg)">${ARROW_UP}</div></div>`).join("");
    return slide(skinClass(o.skin), `<div class="t-page">${esc(o.title || "Lorem Ipsum Dolor Sit Amet")}</div>
      <div class="t-sub" style="left:40px;top:${o.introTop || 160}px;width:1100px;font-size:36px;line-height:46px;font-weight:400">${o.intro || "Fusce accumsan tellus non finibus bibendum. Proin laoreet, sapien sit amet dolor sirt accumsan."}</div>${h}`, { ...o, layout: "trend-cards" });
  };

  L.ruledTable = (o = {}) => {
    const head = o.head || ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];
    const cell5 = "<ul class='b' style='margin:0'><li style='margin-bottom:6px'>Fusce accumsan tellus non finibus.</li><li style='margin:0'>Fusce accumsan tellus non finibus proin laoreet, sapien sit amet dolor sirt accumsan.</li></ul>";
    const rows = o.rows || Array.from({ length: 5 }, () => ["Fusce accumsan tellus non finibus.<br>Proin laoreet, sapien sit amet.", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", cell5]);
    const widths = o.widths || ["25%", "17%", "17%", "17%", "auto"];
    return slide(skinClass(o.skin), `<div class="t-page two">${esc(o.title || "Lorem Ipsum Dolor Sit Amet,<br>Consectetur Adipiscing Elit.")}</div>
      <div style="left:40px;top:${o.top || 240}px;width:1840px"><table class="ruled" style="font-size:${o.fs || 18}px;line-height:${o.lh || 25}px">
      <tr>${head.map((t, i) => `<th style="width:${widths[i]}">${t}</th>`).join("")}</tr>
      ${rows.map(r => `<tr>${r.map(c => `<td style="padding:${o.pad || 26}px 24px ${o.pad || 26}px 0">${c}</td>`).join("")}</tr>`).join("")}</table></div>`, { ...o, layout: "ruled-table" });
  };

  L.rangeChart = (o = {}) => {
    const rows = o.rows || [[0, 18, 26, 31], [-4, 0, 8, 12], [0, 6, 9, 10], [0, 6, 9.5, 10.5], [0, 3, 6, 7], [0, 3, 6, 7], [0, 2.5, 5, 5.5], [0, 3, 6, 7], [0, 2.5, 5.5, 12.5], [0, 2.5, 5, 5.5]];
    const cols = o.colours || ["var(--grey-c)", "var(--cyan)", "var(--fg)", "var(--grey-c)"];
    const x0 = 360 + 120, unit = (o.unit || 32), y0 = 380;
    let h = "";
    for (let k = 0; k < 6; k++) h += `<div style="left:${x0 - 120 + k * 290}px;top:330px;width:1.5px;height:640px;background:var(--line)"></div><div class="micro" style="left:${x0 - 140 + k * 290}px;top:990px;width:40px;text-align:center;font-size:15px">${(o.xs || [])[k] || "Lorem"}</div>`;
    rows.forEach((r, i) => {
      const y = y0 + i * 58;
      h += `<div class="micro" style="left:150px;top:${y - 10}px;font-size:15px;width:160px">${(o.labels || [])[i] || "Lorem Ipsum"}</div>`;
      if (r[0] < 0) h += `<div style="left:${x0 + r[0] * unit}px;top:${y - 3}px;width:${-r[0] * unit}px;height:6px;background:${cols[0]}"></div>`;
      h += `<div style="left:${x0}px;top:${y - 3}px;width:${r[1] * unit}px;height:6px;background:${cols[1]}"></div>`;
      h += `<div style="left:${x0 + r[1] * unit}px;top:${y - 3}px;width:${(r[2] - r[1]) * unit}px;height:6px;background:${cols[2]}"></div>`;
      h += `<div style="left:${x0 + r[2] * unit}px;top:${y - 3}px;width:${(r[3] - r[2]) * unit}px;height:6px;background:${cols[3]}"></div>`;
    });
    return slide(skinClass(o.skin), `<div class="t-page two">${esc(o.title || "Lorem Ipsum Dolor Sit Amet,<br>Consectetur Adipiscing Elit.")}</div>
      <ul class="legend" style="left:1650px;top:60px">${(o.legend || ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]).map((t, j) => `<li style="--c:${[cols[1], cols[2], cols[3]][j]}">${t}</li>`).join("")}</ul>
      <div class="card" style="left:40px;top:300px;width:1840px;height:740px"></div>${h}`, { ...o, layout: "range-chart" });
  };

  L.orgChart = (o = {}) => {
    const kids = o.kids || [["engineer-helmet"], ["building"], ["pylon-workers"], ["engineer-silhouette"], ["solar-aerial"]].map(p => ({ photo: p[0], head: "Lorem<br>Ipsum Dolor", bullets: ["Usce accumsan tellus", "Non finibus bibendum", "Proin laoreet", "Sapien sit amet", "Accumsan volutpat", "Ligula urna tristique", "Nulla id blandit risus", "Tellus sed odio"] }));
    const xs = [40, 415, 790, 1165, 1540], w = 340;
    let h = `<div class="card outline" style="left:785px;top:283px;width:350px;height:196px;padding:16px"><div class="cyanfill" style="height:100%;display:flex;align-items:center;justify-content:center;text-align:center;font-size:36px;line-height:40px;font-weight:500">${o.top || "Lorem<br>Ipsum Dolor"}</div></div>
      <div style="left:960px;top:479px;width:2px;height:42px;background:var(--rule)"></div>
      <div style="left:${xs[0] + w / 2}px;top:521px;width:${xs[4] - xs[0]}px;height:2px;background:var(--rule)"></div>`;
    h += kids.map((k, i) => `<div style="left:${xs[i] + w / 2}px;top:521px;width:2px;height:42px;background:var(--rule)"></div>
      <div class="card outline" style="left:${xs[i]}px;top:563px;width:${w}px;height:477px;padding:16px">
        <div style="position:relative;height:150px;background:url('${PHOTO(k.photo)}') center / cover;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;font-size:34px;line-height:36px;font-weight:500;text-shadow:0 1px 8px rgba(0,0,0,.35)">${k.head}</div>
        <ul class="b micro" style="margin-top:22px;font-size:16px;line-height:22px">${k.bullets.map(b => `<li style="margin:0 0 2px">${b}</li>`).join("")}</ul></div>`).join("");
    return slide(skinClass(o.skin), `<div class="t-page two">${esc(o.title || "Lorem Ipsum Dolor Sit Amet,<br>Consectetur Adipiscing Elit.")}</div>${h}`, { ...o, layout: "org-chart" });
  };

  /* ---------------- Imagery & Tables ---------------- */
  const cardTone = o => (o.tone === "black" ? "black" : "white");

  L.timeline = (o = {}) => {
    const q = o.quarters || ["Q1 20XX", "Q2 20XX", "Q3 20XX", "Q4 20XX"].map(t => ({ head: t, sub: "Lorem Ipsum", body: "Praesent consequat orci purus, nec mollis arcu consectetur sit amet." }));
    const qx = [66, 521, 976, 1431], qy = [104, 376];
    const h = q.map((c, i) => `<div style="position:absolute;left:${qx[i]}px;top:${qy[i % 2]}px;width:390px;height:${i % 2 ? 386 : 640}px;border-left:2px solid var(--rule);padding-left:20px">
        <div style="font-size:48px;line-height:48px;font-weight:500;margin:-6px 0 0 -2px">${c.head}</div>
        <div style="position:absolute;left:20px;top:${i % 2 ? 230 : 230}px;width:340px"><div style="font-size:20px;font-weight:500;margin-bottom:10px">${c.sub}</div><div class="micro" style="font-size:16px;line-height:22px;color:var(--muted)">${c.body}</div></div></div>`).join("");
    return slide("photo" + (o.tone === "black" ? "" : " dark-type"), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>
      <div class="card ${cardTone(o)}" style="left:40px;top:268px;width:1840px;height:764px;padding:0">${h}</div>`, { ...o, img: o.img || "turbines-ridge", layout: "timeline" });
  };

  L.tallCards = (o = {}) => {
    const cards = o.cards || Array.from({ length: 4 }, () => ({ head: "Lorem Ipsum", items: [["Subheading Title", "Praesent consequat orci purus, nec mollis arcu consectetur sit amet."], ["Subheading Title", "Praesent consequat orci purus, nec mollis arcu consectetur sit amet."], ["Subheading Title", "Praesent consequat orci purus, nec mollis arcu consectetur sit amet."]] }));
    const xs = [40, 511, 982, 1452];
    const h = cards.map((c, i) => `<div class="card ${cardTone(o)}" style="left:${xs[i]}px;top:181px;width:430px;height:860px;padding:20px">
      <div style="font-size:36px;line-height:40px;font-weight:500">${c.head}</div>
      <div style="position:absolute;left:20px;right:20px;bottom:18px">${c.items.map(([t, b]) => `<div style="margin-top:22px"><div style="font-size:22px;font-weight:500;margin-bottom:8px">${t}</div><div class="micro" style="font-size:16px;line-height:22px;color:var(--muted)">${b}</div></div>`).join("")}</div></div>`).join("");
    return slide("photo" + (o.tone === "black" ? " dark-type" : ""), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>${h}`, { ...o, img: o.img || "van-valley", layout: "tall-cards" });
  };

  L.numberedCards = (o = {}) => {
    const cards = o.cards || Array.from({ length: 4 }, () => ({ head: "Heading", bullets: Array.from({ length: 6 }, () => "Breakdown of goals") }));
    const xs = [40, 522, 1004, 1487];
    const h = cards.map((c, i) => `<div class="card ${cardTone(o)}" style="left:${xs[i]}px;top:175px;width:393px;height:865px;padding:28px 30px">
      <span class="sq"></span>
      <div style="position:absolute;left:0;right:0;top:${o.numTop || 300}px;text-align:center;font-size:150px;line-height:1;font-weight:500">${c.num || i + 1 + "."}</div>
      <div style="position:absolute;left:30px;right:30px;top:${o.headTop || 540}px;text-align:center;font-size:${c.hfs || 34}px;line-height:${c.hlh || 40}px;font-weight:500">${c.head}</div>
      <ul class="b micro" style="position:absolute;left:${o.bulletLeft || 120}px;right:30px;top:${o.bulletTop || 625}px;font-size:16px;line-height:22px">${c.bullets.map(b => `<li style="margin-bottom:${o.bulletGap || 14}px">${b}</li>`).join("")}</ul></div>`).join("");
    return slide("photo" + (o.tone === "black" ? " dark-type" : ""), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>${h}`, { ...o, img: o.img || "forest-track", layout: "numbered-cards" });
  };

  L.numberedRows = (o = {}) => {
    const rows = o.rows || [1, 2, 3].map(n => ({ head: `${n}. Title Here`, sub: "Lorem Ipsum", body: "Praesent consequat orci purus, nec mollis arcu consectetur sit amet." }));
    const ys = [212, 500, 788];
    const h = rows.map((r, i) => `<div class="card ${cardTone(o)}" style="left:40px;top:${ys[i]}px;width:1840px;height:252px;padding:0">
      <span class="sq" style="position:absolute;left:30px;top:32px;width:9px;height:9px"></span>
      <div style="position:absolute;left:76px;top:0;bottom:0;width:900px;display:flex;align-items:center;font-size:${r.hfs || 64}px;line-height:${r.hlh || 70}px;font-weight:500;letter-spacing:-.01em">${r.head}</div>
      <div style="position:absolute;left:1012px;top:0;bottom:0;width:2px;background:var(--rule)"></div>
      <div style="position:absolute;left:1088px;right:60px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center"><div style="font-size:${r.sfs || 22}px;font-weight:500;margin-bottom:10px">${r.sub}</div><div style="font-size:${r.bfs || 17}px;line-height:${r.blh || 24}px;color:var(--muted)">${r.body}</div></div></div>`).join("");
    return slide("photo" + (o.tone === "black" ? " dark-type" : ""), `<div class="t-page">${esc(o.title || "Lorem Ipsum")}</div>${h}`, { ...o, img: o.img || "solar-panels", layout: "numbered-rows" });
  };

  root.DeckLayouts = { L, slide, people, arrowWave, LOOPS, PHOTO, bulletBlock };
})(window);
