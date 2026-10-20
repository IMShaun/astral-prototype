# Library user stories and Play demos

Part of the `astral-user-stories` skill. Follow this file whenever you write or update stories in the Library (`library-site/features.json`).

## Start a new session

Someone new can paste this into a Copilot session on `IMShaun/astral-prototype`.

```text
Use the astral-user-stories skill and follow
.cursor/skills/astral-user-stories/references/library-stories.md in full.
Write Library user stories, with a Play demo for every acceptance criterion, for:

Area: {for example "Portfolio, Demand tab"}
Notes: {paste the walk-through or meeting transcript, or leave blank}
```

The rest of this file is the brief that session follows.

---

You are writing user stories, with an animated Play demo for every acceptance criterion, for one area of the IMSERV Astral prototype. The stories go in the Library, the Features section of `library-site/`. A developer or tester who has never seen the feature must be able to build and test it from the story alone.

## 1. What to cover

- **Area:** {for example "Portfolio, Demand tab" or "Alerts, Activity tab"}
- **Notes from the walk-through or meeting:** {paste the transcript or your spoken description of how the screen works. Leave blank to work from the prototype alone.}

The prototype is the source of truth. Write what it does today. If the notes and the prototype disagree, do not guess. List the difference under "Questions" and ask me which is right.

## 2. Read first

1. `.cursor/skills/ux-writing/SKILL.md`, then from `.cursor/skills/ux-writing/references/` read `templates.md` (the "User story" section is the standard to meet) and `terminology.md`.
2. `library-site/features.json`. Read the feature for your area, if it exists, and three reference stories in full: `profile-hours`, `compare-others` and `follow-download`. Match their shape, tone, length and detail.
3. `library-site/library.js` (how stories, Play demo, role views, stages, Copy link and Open in prototype render) and `readOpenQuery`, `openStepTarget` and `runOpenSteps` in `app.js` (how Open in prototype steps run).
4. The parts of `prototype.js` for your area. Search by function name, not line number. Do not change `prototype.js` or any other product file in this task.

## 3. How the Library shows a story

- **Features** lists each feature as a card. A feature has sections, and each section groups its stories.
- **A story card** shows "As a {role}, I want to {want}, so that {benefit}", the notes, the acceptance criteria as Given, When and Then cards, the Dev and Test estimate, a Copy link button (for pasting into Azure DevOps) and an Open in prototype link.
- **Play demo** sits on every criterion card. It opens a Modal that steps through screenshots of someone doing that criterion, with a pointer on the control and a short note on each frame. When a criterion cannot be shown, the button is disabled and shows the reason.
- **Role views:** when roles see different things, the criterion shows each role's screenshot side by side instead of a demo.
- **Stages:** stories sit in Needs review (`review`), Ready for refinement (`refine`) or In production (`live`). New stories are always `review`.

## 4. Feature and story JSON

Add to `library-site/features.json`. If your feature exists, add sections and stories to it. Otherwise add a feature to `items`:

```json
{
  "id": "portfolio",
  "name": "Portfolio",
  "status": "unfinished",
  "statusNote": "Only when the screen is not finished in the prototype. Omit otherwise.",
  "screen": "Portfolio",
  "summary": "One sentence on what people do here.",
  "roles": ["Admin", "Manager", "Contributor", "Viewer"],
  "who": "Who starts here, and whether every role sees the same page.",
  "sections": [{ "id": "demand", "name": "Demand", "summary": "Read peak demand and compare it with site capacity" }],
  "stories": []
}
```

Each story:

```json
{
  "id": "demand-read-peak",
  "name": "Read the peak demand",
  "section": "demand",
  "role": "User",
  "stage": "review",
  "open": [{ "row": "Crewe depot" }, { "pane": "demand" }],
  "want": "see the highest demand in the date range on the graph",
  "benefit": "I can check it against the site capacity",
  "notes": "Context a developer needs that is not a criterion. Prototype-only behaviour, such as fake delays or seeded demo failures, goes here.",
  "criteria": [
    { "given": "...", "when": "...", "then": "..." },
    { "given": "...", "when": "...", "then": "...", "noDemo": "One sentence on why it cannot be shown." },
    {
      "given": "I am a Viewer on the Site profile tab at All or a group",
      "when": "I look at the top right of the tab",
      "then": "Download template and Upload do not show",
      "roles": [
        { "role": "Admin", "note": "Download template and Upload show at the top right" },
        { "role": "Viewer", "note": "Download template and Upload do not show" }
      ]
    }
  ],
  "stages": [],
  "estimate": {
    "dev": { "complexity": 2, "effort": 3, "risk": 2, "dependencies": 1, "why": "One line" },
    "test": { "scenarios": 2, "setup": 2, "risk": 2, "regression": 1, "why": "One line" }
  }
}
```

- Prefix every story id with the area, such as `demand-`, so image names never clash.
- `role` is "User" unless only an admin can do it.
- `open` lands on the exact page, tab, level and row the story starts on. The prototype opens Portfolio first, then clicks each step in order. Step kinds: `{ "button": "Exact text of a button or tab" }`, `{ "pane": "<data-proto-pane value>" }`, `{ "row": "<site name in the Site profile table>" }`, `{ "fold": "<data-proto-meter-fold value>" }` and `{ "click": "<CSS selector inside #astral-fs>" }`.
- `walk` arrays and role `image` fields are added by the capture step. Do not write them by hand.
- `stages` stays empty. The Play demos replace stage screenshots.

## 5. Writing rules

- en-GB-oxendict spelling with the serial comma. No colons, semicolons, em dashes, en dashes or contractions in story text.
- `want` and `benefit` are lower-case phrases with no full stop.
- One goal per story. Group stories by what someone is trying to do, not by control. Aim for 3 to 6 stories per area, each with 4 to 12 criteria.
- Every Given names the page, tab and level, such as "Crewe depot is selected in the Portfolio tree on the Demand tab". Never just "I am on the Portfolio page" when a group, site or tab matters.
- Every When is one action on one named control, with its component and place, such as "I pick the Filter Icon button to the right of Search".
- Every Then is one checkable outcome. Split anything that needs "and then". Quote real labels and numbers, such as "107 sites".
- Use the component names Tag, Tooltip, Modal, Select, Tabs, Button, Icon button, Search, Date picker, Filter, Count, Meter pill, Flow pill, Pagination, Empty state and Banner.
- Name presets and their type, such as "the Last 24 hours preset in the Date picker".
- Cover the states: empty, no match, first and last item, the latest window, and what a Viewer sees when it differs.
- Never write "the user clicks the button" or "the graph updates". Say which button, where it sits and what changes.

## 6. Splitting and estimates

- Split by a deliverable outcome, not by scenario count. Look for read versus write, distinct user actions, and a shared component bundled into a screen. Keep a flow's validation, empty and role states with the outcome they belong to.
- A reusable component, such as a Tooltip, a table or a map, gets its own story. Screen stories reuse it and say so.
- Download and upload are each their own story. An unclear upload format is an open question, not something to invent.
- Keep backend work (APIs, saving, server permissions, calculations) out of front-end stories. A front-end "table" is a UI component, not a database table.
- Points are relative size, not days, on 1, 2, 3, 5, 8 or 13. "Find a site or meter" is a 2 for both Dev and Test. Score Dev on complexity, effort, risk and dependencies, and Test on scenarios, setup, risk and regression. Size on normal developer effort, not AI-assisted speed. A story that adds up to 13 must be split.

## 7. Probe the prototype

Serve the repo folder over HTTP, for example `npx http-server . -p 5190 -c-1`, and open `http://127.0.0.1:5190/`. Probe at 1440 x 900, with clean `localStorage` and `sessionStorage` before each run. Click "Hide" on the preview menu at the bottom so it does not cover the page. Useful page globals include `setProto({...})` and `store`. `setProto({ prototypeAccess: "viewer" })` switches role (admin, manager, contributor or viewer).

Read every label, count and state you write about from the DOM. Take a screenshot of every control and look at it.

## 8. Build the demo capture script

If `tools/capture-demos.js` exists, use it and add your demos to it. Otherwise write it, using Playwright (`npm i -D playwright-core`) driving the installed Microsoft Edge, or Chrome DevTools Protocol directly. It must do the following.

1. **Definition.** It holds a map of story id to one demo per criterion, in the same order as `criteria`. A demo is a list of steps:
   - A string is silent page JavaScript run first for set-up, such as picking a site. It is not shown.
   - `["click" | "hover" | "type", "<JS expression that returns the element>", "Short note", "text to type"]` is a framed action.
   - `["end"]` captures the final frame with the criterion's Then as its note. `["end", "Custom note"]` overrides it.
   - `null` means no demo, for a criterion with `noDemo`.
   - Write small selector helpers, such as `btn("Activity")` that finds a button or tab by exact text inside `#astral-fs`, and `q(css)`.
2. **Each demo starts clean.** Set the viewport to 1440 x 900 at scale 1, load `http://127.0.0.1:5190/?demo=<timestamp>`, clear both storages, load again, open Portfolio full screen with `setProto({ activePrototypeView: "portfolio", prototypeFullscreen: true })`, click "Hide" on the preview menu, add a style that hides `.astral-preview-menu` and sets `caret-color: transparent` on everything, wait until the page no longer says "Getting … intervals", then run the silent steps.
3. **Each framed action.** Find the element. If it is under 90px from the top or 60px from the bottom of the viewport, scroll it into the centre. Capture a WebP screenshot at quality 80 *before* the action. Record a frame `{ "image", "x", "y", "do", "note" }`, where x and y are the element's centre as a percentage of the 1440 x 900 viewport, to 2 decimal places. Then do it with real mouse and keyboard input: move, then press and release for click, move for hover, and click, select all, delete and type for type. Wait for the page to settle, about 700ms.
4. **End.** Move the mouse to a corner, wait, capture the final frame with no pointer, and use the Then text (ending with a full stop) as the note.
5. **Files.** Save frames to `library-site/features/walks/demo-<story-id>-<criterion number>-<frame number>.webp`, then write the frames into that criterion's `walk` array in `library-site/features.json`. Delete `walk` on a criterion whose demo is `null`.
6. **Role views.** For a criterion with `roles`, switch role with `setProto({ prototypeAccess })`, capture a clipped WebP at quality 85 and scale 2 of the area the criterion is about, save it as `roles-<story-id>-<n>-<role>.webp`, and set each role's `image` to `features/walks/<file>`.
7. **Arguments.** `node tools/capture-demos.js <story-id>,<story-id>-3,...` captures only those stories or single criteria. Report a FAIL with the criterion and the missing selector instead of stopping.

## 9. Check the demos

- Fix every FAIL.
- Look at the final frame of every demo with the image viewer. It must clearly show the Then. Recapture any that do not.
- Open the Library at `http://127.0.0.1:5190/library-site/`, go to Features, open each new story, play two demos and check Open in prototype lands in the right place.
- Run `python .cursor/skills/ux-writing/scripts/check-copy.py library-site/features.json` and fix any warning in your stories.
- Keep WebP frames small. The published Library is encrypted and GitHub rejects files over 100 MB, so reuse a frame when two criteria start from the same screen.

## 10. Finish

- Commit `library-site/features.json`, the new images in `library-site/features/walks/` and `tools/capture-demos.js` together, with a message such as "Library: Demand stories with Play demos".
- Do not commit anything else. Do not change product code.
- Reply with:
  - each story id, name and criteria count
  - any criteria with `noDemo`, and why
  - **Questions:** anything that looked like a bug, where the prototype seemed unfinished, or where the notes and the prototype disagreed
