# Astral answers

Decisions for the team building Astral in React. Each one is closed unless it says otherwise. The newest sits at the top of each section.

## Components

- There is no StatusBadge. Meter health uses State. Live, Waiting, Custom, role and Expiry use Tag. Do not add a generic success, warning, danger or info badge.
- Status colours are for State only. Tag, Banner and form errors stay neutral.
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

## Accepted risk

- `--color-border-control` (`#DFDFDF` on white) does not meet WCAG 1.4.11 non-text contrast. This is a deliberate trade-off, owned by Shaun Leishman. It is open for sign-off above the design team. It is one token, so it can be reversed.
- From v2 the look uses `--color-border-control` on every control edge, 29 times. In v3 it was used nowhere. So the one-token reversal is real from v2 on. The risk still stands and is still open for sign-off. (MANIFEST 32)

## Shell

- Arrow keys move between rail items.
- Tab stays inside the rail while it is open.
- Put `.astral-root` on the app root. The `CHANGELOG.md` section "Scoped under .astral-root" lists every rule that does nothing until it is there.

## Export

- Each zip carries `VERSION`, `CHANGELOG.md` and this file. Use the `VERSION` label as it is.
- The changelog lists removed and retired tokens and files first. The build writes that section, so a deletion cannot go unlisted.
- The build does not merge with the previous export. A token leaves only through `data/retired-tokens.json`, and the build fails on any other disappearance.
- Only docs entries that name a product file ship. Guidance-only entries ship no file.

## MANIFEST queries

Answered 28 Sep 2026. The prototype is the source of truth, so where the prototype and the export already answer a query, the answer says so.

### 9. Tables

- No visible caption. The card heading names the table. Keep a real `<caption>`, visually hidden.
- A scroll region's focus ring is `outline: 2px solid #000; outline-offset: -2px`. `.astral-table-wrap:focus-visible` is in that rule, with the pane body, stage body, modal body, notice list and tree. Use it for the table wrap, not the inset ring or the offset outline.
- Headers stick only when the table fills the page (`.astral-stage-body > .astral-card:only-child .astral-table thead th`). The meters breakdown also sticks its first column. Other tables scroll with the page.
- Numbers stay left-aligned. There is no numeric class. Only action columns align right, set by each table.
- Row click uses the Downloads pattern: a real `button.astral-person` in the row-header cell, and the row takes hover and `:focus-within` from it. The `data-proto-*` row hooks are prototype only. There is no row-level class.
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
- `Icon` has 44 glyphs, including `home`, `report`, `companies` and `menu`.
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

- The account menu gets a non-interactive identity row. Its class comes in a later export. Until then, keep the disabled item.

### 21. Brand span

- There is no `span` descendant rule under `.astral-brand`, so the double divider is gone. Nothing to work around.

### 22. Assets

- The stylesheet's 116 × 18 is the logo size. The mark is white only, for the dark nav.
- `auth-texture.png` is a leftover. Nothing uses it. Drop it.

### 23. Responsive nav

- The nav is desktop width for now. The `@media` layer covers the page layout, reports, meter attributes and the colour picker, not the nav, so `.astral-links` still clips. The rail is chosen by persona, not screen width. A nav breakpoint is later work.

### 28f. Inverse background

- There is no dark background token. The nav is the only dark surface. Retire the Storybook Inverse backdrop. Do not re-point it.
