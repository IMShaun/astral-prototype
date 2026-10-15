# Astral answers

Decisions for the team building Astral in React. Each one is closed unless it says otherwise. The newest sits at the top of each section.

## Components

- There is no StatusBadge. Meter health uses State. Live, Waiting, Custom, role and Expiry use Tag. Do not add a generic success, warning, danger or info badge.
- Status colours mean status: failed, missing, incomplete, warning, ok, info. Use them wherever that meaning appears (State, Tag, value pills, import tags, report test results), never as decoration. Banner and form errors stay neutral. (Changed in v3. It used to say State only, which the prototype never followed.)
- Category colours (`--color-category-*`) mark a type, not a status. They are for the type badge, type tag and the import "New" tag.
- The account menu identity row is a planned component. It has no class yet and is not in v3. Keep the disabled item. (MANIFEST 20)
- Banner has no timer. It stays until Hide.
- Modal and DatePicker return focus to the button that opened them.
- Write the controlled story first.
- PageHeader: the class list is the handover. The React team builds it.

## Tokens

- The prototype's `:root` is the source of truth. A token ships only if the prototype declares it.
- Retired tokens stay retired. The `CHANGELOG.md` section "Tokens retired" lists each one with its last value and what to use instead. Do not add them back locally.
- `--font-weight-bold` (700) is retired. 600 is the heaviest weight.
- `--font-family-mono` is retired on purpose. Astral has no monospace family.
- The raw `--motion-*` durations are retired. Motion uses `--motion-control`, `--motion-panel` and `--motion-slide`.
- The `--color-gray-*` ramp is retired. Use the semantic roles.
- `--radius-xs` is 2px. The chart key mark is a rounded square.
- Controls are 36px by default and 48px large.
- Every control edge uses `--color-border-control`. Change the one token and every control follows. Nothing else hard-codes `#DFDFDF`.
- Data marks use category pairs: `--color-category-{name}-fill` behind `--color-category-{name}-ink`. The names are threshold, missing-data, no-signal, neutral, data, dcda, billing, template, report, document, table and image. Every pair is at least 6.5:1, and seven reach AAA. The 28px and 18px mark sizes are plain values, not tokens. (New in v3)
- `--color-status-info-subtle` is for status only. The import "New" tag uses `--color-category-new-fill` and drop zones use `--color-highlight-drop`. Same value today, separate jobs. (New in v3)
- `--layout-nav-height` is 60px. The nav uses it, and anything pinned under the nav offsets from it, like the export toast. (New in v3, MANIFEST 40)
- Two shadows: `--shadow-float` for everything floating (menus, popovers, tips, the toast, the colour picker, the query pin) and `--shadow-modal`, one step up, for modals. There are no other levels. The rail and side panel cast the float shadow sideways (`8px 0 24px`) as a literal. (New in v3, MANIFEST 40)
- `--astral-head-h` is declared in `:root` at 45px, the body row height. `protoSyncTableHeads` overrides it per table so headers match the rows beneath them. (Declared from v3. Before, only a 45px fallback held it up.)

## Accepted risk

- `--color-border-control` (`#DFDFDF` on white) does not meet WCAG 1.4.11 non-text contrast. This is a deliberate trade-off, owned and signed off by Shaun Leishman, UX/UI Designer. That is the sign-off it needs. It does not go above the design team. It is one token, so it can be reversed.
- From v2 the look uses `--color-border-control` on every control edge, 29 times. In the pre-v2 zip of 23 Sep it was used nowhere. So the one-token reversal is real from v2 on. (MANIFEST 32)

## Shell

- Arrow keys move between rail items.
- Tab stays inside the rail while it is open.
- Put `.astral-root` on the app root. The `CHANGELOG.md` section "Scoped under .astral-root" lists every rule that does nothing until it is there.

## Export

- Each zip carries `VERSION`, `CHANGELOG.md` and this file. Use the `VERSION` label as it is.
- The changelog lists removed and retired tokens and files first. The build writes that section, so a deletion cannot go unlisted.
- The build does not merge with the previous export. A token leaves only through `data/retired-tokens.json`, and the build fails on any other disappearance.
- Only docs entries that name a product file ship. Guidance-only entries ship no file.
- Versions: a new major (v4) when tokens, CSS, theme, components, icons or files change. A point release (v3.1) when only the changelog or these answers change. The build fails if the payload changes and the version does not. `data/published-versions.json` pins each published version to its commit, and the changelog diff compares against that commit. (New in v3)
- `astral-lib.js` on the library site is canonical. The zips are built in the browser from the same strings, as UTF-8 with LF line endings, so each text file in a zip is byte-identical to its string. The zip container (timestamps, order) differs on every download, so compare files, not zips. Each release publishes the SHA-256 of each payload string. (MANIFEST 34)
- The `.astral-export-*` classes are product classes from v3. Earlier exports stripped them as prototype chrome. `.astral-export-menu` is deleted. Nothing rendered it.
- `auth-texture.png` no longer ships. Nothing uses it. (MANIFEST 22)

## Runtime variables

These custom properties are not tokens. The consuming code sets them inline, per element. Each one below is read by the look. A rule with no fallback does nothing until the variable is set.

| Variable | Read by | Fallback | Set in the prototype by |
| --- | --- | --- | --- |
| `--report-card-min` | `.astral-report-grid .astral-card` min-height | `0` | `protoEqualReportCards`, on the grid: the tallest card |
| `--report-text-lines` | `.astral-report-grid .astral-card > p.is-clamped` line clamp | none | `protoClampReportText`, only with `is-clamped` |
| `--astral-progress-pct` | `.astral-progress > span` width | `0%` | Not set. The prototype only shows the busy bar. Set it for a determinate bar. |
| `--slice` | chart key slice fill and edge | `#fff`, `--color-border-control` | `protoChartKeyPill`, inline |
| `--slice-ink` | `.astral-chart-key .astral-meter-pill.is-on` text and mark | `#000` | `protoChartKeyPill`, inline |
| `--stack-fill` | `.astral-bar-out.is-stack` fill; the query pin key mark | none on the bar, `transparent` on the mark | `protoBarChart` and `protoChartPointSeriesMark`, inline |
| `--bar-i` | bar and point draw-in delay | `0` | `protoBarChart`, per bar |
| `--bar-step` | bar and point draw-in delay | `28ms` | `protoBarChart`, on the chart |
| `--ref-ink` | reference lines, dots and key marks | `#1b1b1f` | `protoRefLines` and `protoRefKeyMark` |
| `--bar-cmp` | `.astral-bar.is-cmp` fill | `#6929c4` | `protoBarChart`, when comparing dates |
| `--tag-fill` | `.astral-tag.is-point` background | `--color-background-subtle` | `protoPointTagPill` |
| `--tag-ink` | `.astral-tag.is-point` text | `--color-text-primary` | `protoPointTagPill` |
| `--upload-delay` | upload card and progress animation delay | `0ms` | `protoSiteAddFileCard`, a negative delay to resume |
| `--picker-hue` | `.astral-picker-sv` gradient | `#f00` | `protoColourPicker` and `protoPaintPicker` |
| `--skel-sheen` | `.astral-skel-chart` shape and area fill | none | `protoSkelChart`: `url(#gradient-id)` on the svg |
| `--load-ink` | `.astral-load-bar` stroke | `--color-action-primary` | `protoLoadHtml` |

## MANIFEST queries

Answered 28 Sep 2026. The prototype is the source of truth, so where the prototype and the export already answer a query, the answer says so.

### 9. Tables

- No visible caption. The card heading names the table. Keep a real `<caption>`, visually hidden.
- A scroll region's focus ring is `outline: 2px solid #000; outline-offset: -2px`. `.astral-table-wrap:focus-visible` is in that rule, with the pane body, stage body, modal body, notice list and tree. Use it for the table wrap, not the inset ring or the offset outline.
- Headers stick only when the table fills the page (`.astral-stage-body > .astral-card:only-child .astral-table thead th`). The meters breakdown also sticks its first column. Other tables scroll with the page.
- Numbers stay left-aligned. There is no numeric class. Only action columns align right, set by each table.
- A clickable row needs a real button in its row-header cell (`<th scope="row">`). That button is the row's name, focus stop and action. Without it, the row is not clickable. (Changed in v3)
- `tr.is-link` is only the look: a pointer and hover on the whole row. A click anywhere on the row triggers the row-header button. It never makes the row focusable. No `tabindex` on the `tr`.
- `tr.is-link.is-on` is the selected row (subtle fill). When it means "this one is open", put `aria-current="true"` on the row-header button. Do not use `aria-selected`. It is only valid in a grid or treegrid, and `.astral-table` is a plain table. When `is-on` mirrors a checkbox, as in the import rows, `aria-checked` on the checkbox is enough.
- Downloads rows are not clickable. Their actions are the icon buttons in the last cell, so they do not take `tr.is-link`. A pointer on a row that does nothing would mislead. The Downloads hover comes from its own rule.
- The `data-proto-*` row hooks are prototype only.
- `.astral-table-wrap.is-tips` is `overflow: visible` so tooltips are not clipped. A table that fills the page, and the Downloads table, scroll through their own rules. Intended.
- `--tip-delay` is `0.7s` and ships in `tokens.css`. Delete the local `1s`.
- No quiet `.astral-empty`. An empty table shows one line of plain text in the `colspan` cell. `.astral-empty` is for a whole card or pane.
- Sort goes ascending, then descending. It never returns to unsorted.

### 11. Core primitives

- The base `.astral-avatar` has no cursor. Only `button.astral-avatar` gets `cursor: pointer`, so a `<span>` avatar does not read as clickable.
- There is no disabled avatar. If a person cannot be opened, render a `<span>`.
- `.astral-actions` takes its alignment from the parent. No `align` prop.
- Card and empty-state headings are always `h3`. Setting `aria-level` for the outline is fine.
- The quiet empty state is answered under 9.

### 12. FlowPill, Count and MeterPill

- All three ship as `.astral-flow-pill`, `.astral-count` and `.astral-meter-pill`. Delete the local stems in `extensions.css`. This also closes MANIFEST 29d and the review rows in 31.
- On and off lives on `.astral-meter-pill` as `.is-on` and `:not(.is-on)`. FlowPill is always static.
- Count sizes are set by context, not a token: 18px on the notice and filter, 22px on compare, and a pill with a 22px minimum in a site row, select option or accordion head. No size token.
- A meter pill that is off has secondary text, a subtle background and a struck-through label. The border does not change. The mark turns secondary grey, and in the chart key it is hollow with a secondary border. Do not use opacity.

### 15b. Rail exit

- There is no exit animation and no `is-closing` class. The rail closes at once. Intended.

### 16. Rail

- `.astral-app` ships (`position: relative; flex: 1; min-height: 0; overflow: hidden`). Every `#astral-fs` rule is `:is(#astral-fs, .astral-root)`, so put `.astral-root` on the app root.
- `.astral-nav.is-out` means signed out.
- `Icon` has 63 glyphs from v3 (44 at v2), including `home`, `report`, `companies`, `menu`, `chart-bar`, `database` and `image`. The v3 changelog lists the new ones.
- Tab stays inside the open rail. Keep your containment.
- `--tip-delay` is `0.7s`.
- Rail links are `<a href>` when they are real routes, with the same class. The prototype uses buttons only because it has no URLs.
- The scrim, Escape and the toggle close the rail. There is no close button in the panel.
- Opening the rail, the account menu or the notice menu closes the other two. It is a rule. Keep enforcing it.

### 17. Account and notice menus

- `astral-menu-in` and `astral-menu-in-up` ship, with reduced motion.
- The `.astral-account { justify-self: end }` rule is gone. Nothing is owed.
- Both menus hang off the nav's right edge. They are for the nav only.
- `.astral-float-menu` ships, including `is-up`. The account and notice menus do not need it. CSS-only placement is right for them.
- Keep `role="menu"`, with arrow keys, Home and End.
- Focus goes back to the trigger when either menu closes. The prototype missing this is an oversight.
- The notice head becomes an `h2`, with no visual change.
- The trigger's name is "Notifications, 3 unread". The badge shows 99+ above 99.
- A tooltip on either trigger must render inside `.astral-account` or `.astral-notice`, so the `:has()` rule can hide it.

### 18. Tabs

- `.astral-slide-pill` has no CSS transition. The motion belongs to the consuming code. Keep yours.
- The `@media` layer ships, including reduced motion. None of it changes the tabs.
- Left and Right wrap, Home and End jump, and focus selects the tab. Activation is automatic. Yours matches.
- Tabs are never disabled. Hide a tab that does not apply.
- The hidden scrollbar is final. There is no fade or chevron.
- A strip with no pill is not a variant. It is only the pre-script fallback, so drop the `slide` prop.
- `.astral-page-head`, `.astral-page-head h2`, `.astral-page-tools` and `.astral-page-actions` ship. `PageHeader` is unblocked.

### 20. Account menu identity

- The account menu gets a non-interactive identity row. It is a planned component with no class yet, and it is not in v3. Until it ships, keep the disabled item.

### 21. Brand span

- There is no `span` descendant rule under `.astral-brand`, so the double divider is gone. Nothing to work around.

### 22. Assets

- The stylesheet's 116 × 18 is the logo size. The mark is white only, for the dark nav.
- `auth-texture.png` is a leftover. Nothing uses it. It no longer ships from v3.

### 23. Responsive nav

- The nav is desktop width for now. The `@media` layer covers the page layout, reports, meter attributes and the colour picker, not the nav, so `.astral-links` still clips. The rail is chosen by persona, not screen width. A nav breakpoint is later work.

### 28f. Inverse background

- There is no dark background token. The nav is the only dark surface. Retire the Storybook Inverse backdrop. Do not re-point it.

### 34. Zip and site

Answered 15 Oct 2026.

- The site's `astral-lib.js` is canonical. Each text file in a zip is byte-identical to its string there (UTF-8, LF). The zip container differs per download. Each release publishes the SHA-256 of each payload string.

### 35. Contradictions

Answered 15 Oct 2026.

- Media layer: the v2 changelog said "the responsive nav and rail". That was wrong. The nav and rail appear only in `prefers-reduced-motion` rules. Width breakpoints cover the page layout and stage, reports, report types, meter attributes, the colour picker, home metrics and the alert info grid. Answer 23 stands.
- Glyphs: v2 added 11 glyphs, not 7: upload, analyse, menu, home, companies, report, servicing, inbox, usage, grid and list. v3 adds 19 more, 63 in all.
- `--astral-head-h`: the v2 changelog said the `.astral-root` custom properties rule declared it. It did not. It is declared in `:root` from v3.
- Runtime variables: all 16 are listed under "Runtime variables" above.
- "v3" in older answers meant the pre-v2 zip of 23 Sep. It now means this release. Those answers are reworded.

### 36. DatePicker menu width

Answered 15 Oct 2026.

- Not deliberate. From v3, `.astral-date-menu` is at least as wide as its button and at most `min(20rem, 100vw - 32px)`. Long options wrap onto a second line rather than truncate. It still opens from the button's right edge and does not flip. Delete your override.

### 39. Disabled icon button

Answered 15 Oct 2026.

- Yes. `.astral-icon-btn[aria-disabled="true"]` ships from v3. It was not in v2.

### 40. Nav height and shadow

Answered 15 Oct 2026.

- `--layout-nav-height` (60px), `--shadow-float` and `--shadow-modal` ship from v3. See Tokens.
- The account menu's 20% shadow and the chart tip's 20px blur were drift. Both now use `--shadow-float`.
