/* Presentation Templates guideline record.
   Builds the record deck from layouts.js. Add ?raw=1 to the URL to render every layout
   variant at full size with no notes (used to compare against the source PDFs). */
(function () {
  const { L, slide } = window.DeckLayouts;

  const FAMILIES = [
    {
      name: "Titles", file: "Titles.pdf", photo: "title-turbines",
      intro: "Opening and closing slides. One layout, six skins.",
      layouts: [{
        id: "title", name: "Title", fn: "title", src: "Titles.pdf, slides 1 to 6",
        variants: [{ skin: "photo", img: "title-mountain" }, { skin: "photo", img: "title-turbines" }, { skin: "photo", img: "title-forest" }, { skin: "cyan" }, { skin: "paper" }, { skin: "ink" }],
        use: ["First slide of every deck, so the audience knows what and when.", "Last slide, with the heading swapped for a thank you or a single ask."],
        avoid: ["More than two lines of heading.", "Adding sub-headings, partner logos or page numbers."],
        rules: ["Kicker says who it is for and when, e.g. Board Update / September 25.", "Photo skin needs a calm area left of centre for the heading.", "Keep the 128 px grid and the loops mark on every skin."],
        specs: ["Heading 107 / 98 Medium, cap top 409, max width 1100", "Kicker 32 / 42 Medium, bottom left", "Wordmark at 40, 40. Loops mark 78 x 65 bottom right", "128 px grid overlay, 8% line"]
      }]
    },
    {
      name: "Dividers", file: "Dividers.pdf", photo: "divider-hill-road",
      intro: "Section breaks. One layout, six skins.",
      layouts: [{
        id: "divider", name: "Divider", fn: "divider", src: "Dividers.pdf, slides 1 to 6",
        variants: [{ skin: "photo", img: "divider-hill-road" }, { skin: "photo", img: "divider-turbine-cloud" }, { skin: "photo-dark-type", img: "divider-haze" }, { skin: "cyan" }, { skin: "paper" }, { skin: "ink" }],
        use: ["Start of each section listed on the contents page.", "A pause before a key moment, like findings or the ask."],
        avoid: ["Using one for every slide change. Three to five per deck is plenty.", "Body copy. It is a signpost, not content."],
        rules: ["Title reads as a short phrase, max two lines.", "Flat skins carry the 48 px dot grid. Photo skins do not.", "Use dark type only on pale photos, like the haze turbines."],
        specs: ["Title 64 / 70 Medium at x 980, vertically centred", "Small wordmark 128 x 20 at x 40, centred", "Dot grid 48 px, 16% dot"]
      }]
    },
    {
      name: "Text Heavy", file: "Text Heavy.pdf", photo: "divider-turbine-cloud",
      intro: "Words first. Five layouts for short points to deep explanation.",
      layouts: [
        {
          id: "numbered-grid", name: "Numbered grid", fn: "numberedGrid", src: "Text Heavy.pdf, slides 1 and 2",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Up to eight short, equal points, like principles or requirements.", "Agenda-style lists where the number matters."],
          avoid: ["Points longer than three lines.", "Mixing ideas of different weight."],
          rules: ["Live cells carry a cyan number badge. Empty cells keep a grey badge so the grid reads.", "Title sits in the open top-left area."],
          specs: ["Cells 333 x 333 on a ruled grid", "Title 96 / 92 Medium", "Badge 34 x 32, radius 8, 14 px SemiBold", "Text 31 / 37 at cell + 22, + 112"]
        },
        {
          id: "nine-cards", name: "Nine cards", fn: "nineCards", src: "Text Heavy.pdf, slides 3 and 4",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Nine parallel items: features, findings, themes or quotes.", "Scannable summaries where each card stands alone."],
          avoid: ["Fewer than six items. Use three columns instead.", "Headings inside the cards. The /01 label is the heading."],
          rules: ["Keep card text to three or four lines.", "Number with a slash, /01 to /09."],
          specs: ["Cards 587 x 260 at x 40 / 667 / 1293", "Rows at y 176 / 477 / 778, 41 px gaps", "Grey A cards with a faint 32 px grid"]
        },
        {
          id: "three-columns", name: "Three columns", fn: "threeColumns", src: "Text Heavy.pdf, slides 5 and 6",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Explaining three ideas in depth, with nested bullets.", "Before, during and after, or problem, cause and fix."],
          avoid: ["More than two bullet levels.", "Uneven amounts of copy between columns."],
          rules: ["Square bullet marks the top of each card.", "Second-level bullets drop to grey."],
          specs: ["Cards 587 x 864 from y 176", "Heading 36 / 40 Medium", "Bullets 18 / 25, nested in muted grey"]
        },
        {
          id: "split-columns", name: "Split columns", fn: "splitColumns", src: "Text Heavy.pdf, slides 7 and 8",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Two deep topics with two lighter ones in the middle.", "Comparing a main option with two smaller ones."],
          avoid: ["Equal weight content. Use three columns."],
          rules: ["Middle column splits into two cards of 412 px."],
          specs: ["Outer cards 587 x 864", "Middle cards 586 x 412, 40 px gap"]
        },
        {
          id: "title-cards", name: "Title and five cards", fn: "titleCards", src: "Text Heavy.pdf, slides 9 and 10",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["A strong two-line statement backed by up to five points.", "Summaries and key takeaways."],
          avoid: ["Long titles. Two lines at 72 px max."],
          rules: ["Leave the space under the title open, or add one intro line."],
          specs: ["Title 72 / 72, two lines", "Cards 587 x 260 at y 477 and 778"]
        }
      ]
    },
    {
      name: "Graphics", file: "Graphics.pdf", photo: "solar-aerial",
      intro: "Numbers, charts and Level 3 illustrations.",
      layouts: [
        {
          id: "stat-split", name: "Stat split", fn: "statSplit", src: "Graphics.pdf, slides 1 and 2",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["One headline number with the figures behind it.", "Costs, savings, totals and study facts."],
          avoid: ["Two headline numbers. Pick one.", "Numbers longer than seven characters at full size."],
          rules: ["Cyan panel holds the hero figure in black, never cyan on white.", "Figure list rows are label left, value right."],
          specs: ["List panel 1216 x 492 from x 664", "Cyan panel from y 572 to 1040", "Hero figure about 300 px Medium"]
        },
        {
          id: "stacked-bars", name: "Stacked bars and notes", fn: "stackedBars", src: "Graphics.pdf, slides 3 and 4",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Trends over time with up to four parts per bar.", "A chart with the so-what written beside it."],
          avoid: ["More than four series or eight bars."],
          rules: ["Cyan sits at the base of each bar as the key series.", "Notes panel starts at x 975, the split line."],
          specs: ["Bars 14 px wide on a 86 px pitch", "Legend in a ruled box", "Notes 18 / 24 bullets, heading 34 centred"]
        },
        {
          id: "pie", name: "Big pie", fn: "pie", src: "Graphics.pdf, slides 5 and 6",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["One share or split that is the whole message.", "Half and half, or one dominant slice."],
          avoid: ["More than four slices.", "Pies for change over time."],
          rules: ["Cyan for the slice you are talking about.", "Statement bottom left says what it means."],
          specs: ["Pie 736 px at x 1132", "Statement 44 / 47 Medium", "Legend 16 / 26"]
        },
        {
          id: "pie-table", name: "Pie, table and notes", fn: "pieTable", src: "Graphics.pdf, slides 7 and 8",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Partner or supplier mixes, with a line on each.", "A small chart that needs context."],
          avoid: ["Logos of uneven weight. Use the same height for each."],
          rules: ["Pie card, logo table and notes panel share the top line at y 176."],
          specs: ["Pie card 895 x 400", "Table rows 15 px", "Notes panel 905 x 864"]
        },
        {
          id: "tabs-illustrations", name: "Tabs and illustrations", fn: "tabsIllustrations", src: "Graphics.pdf, slides 9 and 10",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Three products, services or pillars with a Level 3 illustration each.", "Showing a structure, with collapsed tabs for what is coming."],
          avoid: ["Photos in place of the illustrations."],
          rules: ["Tabs read bottom to top.", "Illustrations are line art, black on paper and white on ink."],
          specs: ["Tabs 115 x 864", "Cards 427 x 864", "Bullets 15 / 21"]
        }
      ]
    },
    {
      name: "Imagery & Text", file: "Imagery & Text.pdf", photo: "meeting",
      intro: "People, statements, contents and photo-led pages.",
      layouts: [
        {
          id: "people-wave", name: "People and wave", fn: "peopleWave", src: "Imagery & Text.pdf, slides 1 and 2",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Leadership, project teams and stakeholder lists of up to nine.", "Thank you slides that name who did the work."],
          avoid: ["Stock faces. Use real photos or initials."],
          rules: ["The cyan arrow wave is a Level 1 graphic and stays cyan.", "Name 24 px, role 22 px muted."],
          specs: ["Rows of three at y 567, 180 px pitch", "Photo 117 x 117", "Wave from x 640, top 40"]
        },
        {
          id: "people-photo", name: "People and photo", fn: "peoplePhoto", src: "Imagery & Text.pdf, slides 3 and 4",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Teams where the setting matters, like a site or workshop."],
          avoid: ["Busy photos that fight with the list."],
          rules: ["Photo spans x 664 to 1880, 487 tall."],
          specs: ["Same people grid as People and wave"]
        },
        {
          id: "statement-cards", name: "Three statements", fn: "statementCards", src: "Imagery & Text.pdf, slides 5 and 6",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Three big messages, like key findings or values.", "Mixing a photo, a cyan card and a plain card for rhythm."],
          avoid: ["Statements longer than four lines at 64 px."],
          rules: ["One photo card, one cyan card, one grey card.", "Small supporting text sits at the bottom."],
          specs: ["Cards 587 x 864", "Statement 64 / 64 Medium", "Body 18 / 24"]
        },
        {
          id: "title-photo", name: "Title and photo", fn: "titlePhoto", src: "Imagery & Text.pdf, slides 7 and 8",
          variants: [{ skin: "paper", photo: "van-sunset" }, { skin: "ink", photo: "road-van" }],
          use: ["Introducing a person, team or speaker.", "A short story with one strong image."],
          avoid: ["Text over the photo half."],
          rules: ["Photo bleeds off the top, right and bottom from about x 960."],
          specs: ["Title 96 / 92", "Two people rows at the foot"]
        },
        {
          id: "contents", name: "Contents", fn: "contents", src: "Imagery & Text.pdf, slides 9 and 10",
          variants: [{ skin: "photo-dark-type", img: "turbine-hill" }, { skin: "photo", img: "forest-road" }],
          use: ["The contents page, straight after the title.", "Up to seven sections with page ranges."],
          avoid: ["Sub-sections. Keep it to one line per section."],
          rules: ["Pick a photo with a quiet right-hand side."],
          specs: ["List from x 818, 62 / 70 Medium", "Rules between rows", "Label 32 px top left"]
        }
      ]
    },
    {
      name: "Tables", file: "Tables.pdf", photo: "pylon-workers",
      intro: "Structured comparisons, tables and charts.",
      layouts: [
        {
          id: "year-cards", name: "Year cards", fn: "yearCards", src: "Tables.pdf, slides 1 and 2",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Roadmaps and plans by year or phase.", "Four options compared on the same points."],
          avoid: ["More than four columns."],
          rules: ["Top row is the period, bottom row the detail.", "Cyan headers carry black type."],
          specs: ["Columns 436 wide at x 40 / 508 / 976 / 1444", "Outline cards, 2 px rule"]
        },
        {
          id: "trend-cards", name: "Trend cards", fn: "trendCards", src: "Tables.pdf, slides 3 and 4",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["KPIs going up or down, with a reason.", "Before and after measures."],
          avoid: ["Using arrows for anything other than direction of change."],
          rules: ["Arrow is cyan. Down arrows point down, not red."],
          specs: ["Intro 36 / 46", "Cards from y 392", "Arrow 40 x 120"]
        },
        {
          id: "ruled-table", name: "Ruled table", fn: "ruledTable", src: "Tables.pdf, slides 5 and 6",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Up to five columns and five rows of real data.", "Task lists, schedules and comparisons."],
          avoid: ["Cell borders or zebra stripes. Rules only."],
          rules: ["Header row in muted 18 px.", "Last column can hold bullets."],
          specs: ["Rules every row, 2 px", "Body 18 / 25"]
        },
        {
          id: "range-chart", name: "Range chart", fn: "rangeChart", src: "Tables.pdf, slides 7 and 8",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Ranges, spreads and stacked horizontal bars.", "Ten rows or fewer."],
          avoid: ["Exact values. Use a table."],
          rules: ["Cyan first, then black or white, then grey."],
          specs: ["Panel 1840 x 740", "Bars 6 px, rows 58 px"]
        },
        {
          id: "org-chart", name: "Org chart", fn: "orgChart", src: "Tables.pdf, slides 9 and 10",
          variants: [{ skin: "paper" }, { skin: "ink" }],
          use: ["Team structure, one level down.", "A programme and its five workstreams."],
          avoid: ["More than five children or a second level."],
          rules: ["Top box is cyan. Child cards use a photo header."],
          specs: ["Children 340 x 477", "Connector rules 2 px"]
        }
      ]
    },
    {
      name: "Imagery & Tables", file: "Imagery & Tables.pdf", photo: "van-valley",
      intro: "Structured content on full-bleed photography.",
      layouts: [
        {
          id: "timeline", name: "Quarter timeline", fn: "timeline", src: "Imagery & Tables.pdf, slides 1 and 2",
          variants: [{ tone: "white", img: "turbines-ridge" }, { tone: "black", img: "title-forest" }],
          use: ["Plans by quarter, milestones and release timing."],
          avoid: ["More than four steps."],
          rules: ["White card on pale photos, black card on dark ones.", "Steps alternate high and low."],
          specs: ["Panel 1840 x 764 from y 268", "Quarter 48 px Medium"]
        },
        {
          id: "tall-cards", name: "Four tall cards", fn: "tallCards", src: "Imagery & Tables.pdf, slides 3 and 4",
          variants: [{ tone: "white", img: "van-valley" }, { tone: "black", img: "mountain-lake" }],
          use: ["Four topics each with three short sub-points."],
          avoid: ["Photos where the cards hide the subject."],
          rules: ["Content sits at the foot of the card."],
          specs: ["Cards 430 x 860", "Subheading 22 px, body 16 / 22"]
        },
        {
          id: "numbered-cards", name: "Numbered cards", fn: "numberedCards", src: "Imagery & Tables.pdf, slides 5 and 6",
          variants: [{ tone: "white", img: "forest-track" }, { tone: "black", img: "turbine-hill" }],
          use: ["Four steps, goals or next steps in order."],
          avoid: ["Unordered content. The number means sequence."],
          rules: ["Number 150 px, heading 34 px, up to six bullets."],
          specs: ["Cards 393 x 865 at x 40 / 522 / 1004 / 1487"]
        },
        {
          id: "numbered-rows", name: "Numbered rows", fn: "numberedRows", src: "Imagery & Tables.pdf, slides 7 and 8",
          variants: [{ tone: "white", img: "solar-panels" }, { tone: "black", img: "desert" }],
          use: ["Three priorities, decisions or recommendations.", "What we found and what we will do."],
          avoid: ["Long titles. Keep each to one line at 64 px."],
          rules: ["Title left of the rule, detail right."],
          specs: ["Rows 1840 x 252 at y 212 / 500 / 788", "Rule at x 1052"]
        }
      ]
    }
  ];

  const deck = document.querySelector(".deck");
  const raw = new URLSearchParams(location.search).get("raw");
  const html = [];

  if (raw) {
    FAMILIES.forEach(f => f.layouts.forEach(l => l.variants.forEach((v, i) => html.push(L[l.fn]({ ...v, id: `${l.id}-${i + 1}` })))));
    deck.innerHTML = html.join("");
    window.__ready = true;
    return;
  }

  let page = 0;
  const P = () => ++page;
  const stage = (s, x, y, scale) => `<div class="stage" style="left:${x}px;top:${y}px;width:${1920 * scale}px;height:${1080 * scale}px"><div style="position:absolute;left:0;top:0;width:1920px;height:1080px;transform:scale(${scale});transform-origin:0 0">${s}</div></div>`;

  html.push(L.title({ skin: "photo", img: "title-mountain", title: "Presentation<br>Templates", kicker: "IMSERV brand record<br>October 2026", page: P() }));

  html.push(slide("paper", `<div class="t-page">How to Use This Record</div>
    ${[
      ["What is here", [["Seven template families from the Brand team's Presentation Templates folder, rebuilt as code."], ["26 layouts, each with its skins: photo, cyan, paper and ink."], ["Every page notes what the layout is for, when to avoid it and its measurements."]]],
      ["How to pick a page", [["Start from the message, not the look. One idea per slide."], ["Use the chooser on the next page to match your content to a layout."], ["Keep a deck to one or two skins, plus photo titles and dividers."]]],
      ["House rules", [["40 px inset on every edge, 40 px gutters, 128 px grid."], ["Roobert only: Medium for headings, Regular for text."], ["Cyan is a fill, never a type colour on white."], ["Photos come from the brand library. No stock faces."]]]
    ].map((c, i) => `<div class="card lined" style="left:${[40, 667, 1293][i]}px;top:176px;width:587px;height:864px;padding:36px 40px"><span class="sq"></span><div class="h3" style="margin:22px 0 44px">${c[0]}</div><div style="font-size:24px;line-height:33px">${window.DeckLayouts.bulletBlock(c[1])}</div></div>`).join("")}`, { page: P() }));

  html.push(L.ruledTable({
    title: "Choosing a Layout", top: 150, fs: 19, lh: 25, pad: 15,
    head: ["You need to", "Use", "Family", "Skins", "Watch out for"], widths: ["30%", "18%", "15%", "14%", "auto"],
    rows: [
      ["Open or close a deck", "Title", "Titles", "Photo, cyan, paper, ink", "Two-line heading, kicker for audience and date"],
      ["Show what is in the deck", "Contents", "Imagery & Text", "Photo", "Seven sections max"],
      ["Start a new section", "Divider", "Dividers", "Photo, cyan, paper, ink", "Three to five per deck"],
      ["Explain three ideas in depth", "Three columns or Split columns", "Text Heavy", "Paper, ink", "Two bullet levels max"],
      ["List many short, equal points", "Nine cards or Numbered grid", "Text Heavy", "Paper, ink", "Three lines per card"],
      ["Land one big number", "Stat split", "Graphics", "Paper, ink", "Black figure on cyan"],
      ["Show a trend or share", "Stacked bars, Big pie, Range chart", "Graphics, Tables", "Paper, ink", "Four series max"],
      ["Compare options or periods", "Year cards, Trend cards, Ruled table", "Tables", "Paper, ink", "Five columns max"],
      ["Introduce people", "People and wave, Title and photo", "Imagery & Text", "Paper, ink", "Real photos or initials"],
      ["Set out next steps or priorities", "Numbered cards, Numbered rows, Quarter timeline", "Imagery & Tables", "Photo with white or black cards", "Order matters"]
    ], page: P()
  }));

  // index of all layouts
  let thumbs = "", k = 0;
  FAMILIES.forEach(f => f.layouts.forEach(l => {
    const c = k % 7, r = Math.floor(k / 7); k++;
    thumbs += `<div style="left:${40 + c * 264}px;top:${170 + r * 222}px;width:240px">${stage(L[l.fn](l.variants[0]), 0, 0, .125).replace('style="left:0px;top:0px;', 'style="position:relative;')}
      <div class="micro" style="margin-top:10px;font-size:15px;line-height:19px"><b style="font-weight:500">${String(k).padStart(2, "0")} ${l.name}</b><br><span class="muted">${f.name}</span></div></div>`;
  }));
  html.push(slide("paper", `<div class="t-page">All 26 Layouts</div>${thumbs}`, { page: P() }));

  // foundations
  const typeRows = [["Hero", "107 / 98 Medium", "Titles"], ["Page title", "72 / 72 Medium", "Every content page"], ["Divider", "64 / 70 Medium", "Dividers, statements"], ["Heading", "36 / 40 Medium", "Card headings"], ["Lead", "28 to 30 Regular", "Intros, sub-titles"], ["Body", "20 to 24 Regular", "Card text"], ["Small", "15 to 18 Regular", "Bullets, tables, legends"]];
  const swatches = [["Cyan", "#03F4E8", "var(--cyan)", "#000"], ["Ink", "#0E0E0E", "var(--ink)", "#fff"], ["Ink card", "#1C1C1C", "var(--ink-card)", "#fff"], ["Grey A", "#EFEFEF", "var(--grey-a)", "#000"], ["Grey B", "#DFDFDF", "var(--grey-b)", "#000"], ["Grey C", "#737373", "var(--grey-c)", "#fff"], ["White", "#FFFFFF", "#fff", "#000"]];
  html.push(slide("paper", `<div class="t-page">Foundations</div>
    <div style="left:40px;top:176px;width:880px"><div class="label" style="margin-bottom:16px">Type, Roobert</div>
      ${typeRows.map(r => `<div style="display:grid;grid-template-columns:250px 260px 1fr;border-bottom:2px solid var(--rule);padding:16px 0;align-items:baseline"><span style="font-size:30px;font-weight:500">${r[0]}</span><span class="small">${r[1]}</span><span class="small muted">${r[2]}</span></div>`).join("")}</div>
    <div style="left:980px;top:176px;width:900px"><div class="label" style="margin-bottom:16px">Colour</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:12px">${swatches.map(s => `<div><div style="height:150px;background:${s[2]};outline:1px solid var(--rule)"></div><div class="micro" style="margin-top:10px"><b style="font-weight:500">${s[0]}</b><br><span class="muted">${s[1]}</span></div></div>`).join("")}</div></div>
    <div style="left:980px;top:520px;width:900px"><div class="label" style="margin-bottom:16px">Grid and spacing</div>
      <div class="small" style="font-size:22px;line-height:31px">${window.DeckLayouts.bulletBlock([["Slides are 1920 x 1080 (16:9)."], ["40 px inset on all edges and 40 px gutters."], ["Halves split at x 980. Thirds at 40, 667 and 1293. Quarters at 40, 508, 976 and 1444."], ["Content starts at y 176 under a one-line title, or y 290 under two lines."], ["Titles carry a 128 px grid. Flat dividers carry a 48 px dot grid."]])}</div></div>`, { page: P() }));

  FAMILIES.forEach((f, fi) => {
    html.push(L.divider({ skin: fi % 2 ? "ink" : "photo", img: f.photo, title: `${String(fi + 1).padStart(2, "0")}&ensp;${f.name}<br><span style="color:${fi % 2 ? "#a3a3a3" : "rgba(255,255,255,.8)"};font-size:34px;line-height:44px;font-weight:400">${f.intro}</span>`, page: P() }));
    f.layouts.forEach((l, li) => {
      const main = L[l.fn](l.variants[0]);
      const chips = l.variants.map((v, i) => `<div class="chip" style="position:absolute;left:${40 + i * 196}px;top:868px;width:180px">${stage(L[l.fn](v), 0, 0, 180 / 1920).replace('style="left:0px;top:0px;', 'style="position:relative;')}<span>${v.tone ? (v.tone === "black" ? "Black cards" : "White cards") : ({ photo: "Photo", "photo-dark-type": "Photo, dark type", cyan: "Cyan", paper: "Paper", ink: "Ink" })[v.skin]}</span></div>`).join("");
      const list = a => `<ul>${a.map(t => `<li>${t}</li>`).join("")}</ul>`;
      html.push(slide("paper", `
        <div class="label" style="left:40px;top:44px">${f.name} &middot; ${String(li + 1).padStart(2, "0")} of ${f.layouts.length}</div>
        <div style="left:40px;top:72px;font-size:56px;line-height:60px;font-weight:500;letter-spacing:-.01em">${l.name}</div>
        ${stage(main, 40, 166, .6)}${chips}
        <div style="left:1232px;top:166px;width:648px">
          <div class="note"><h5>Use it for</h5>${list(l.use)}</div>
          <div class="note"><h5>Avoid</h5>${list(l.avoid)}</div>
          <div class="note"><h5>Rules</h5>${list(l.rules)}</div>
          <div class="note"><h5>Measurements</h5>${list(l.specs)}</div>
          <div class="note"><h5>Source</h5><p>${l.src}</p></div>
        </div>`, { page: P() }));
    });
  });

  html.push(L.title({ skin: "ink", title: "Build Decks<br>From This Record", kicker: "Source: Branding assets / Presentation Templates<br>Code: assets/brand/deck", page: P() }));

  deck.innerHTML = html.join("");
  window.__ready = true;
})();
