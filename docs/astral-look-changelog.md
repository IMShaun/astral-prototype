# Astral look changelog

The newest version sits at the top. `tools/build-library.js` reads the first heading for the version stamp.

Versions: a new major (v4) when tokens, CSS, theme, components, icons or files change. A point release (v3.1) when only this changelog or ANSWERS change. The build fails if the payload changes and the version does not.

## v4 — 2026-10-15

The generated section below compares against v3 as published (`7dca9d5`).

### Added

- `--color-category-new-ink` (`#015f58`) for the import "New" tag text. 6.5:1 on `--color-category-new-fill`.
- `.astral-row-link`, the row-header button for clickable table rows (ANSWERS 9). It shares its look with `.astral-meter-row-link`.

### Changed

- The import "New" tag text reads `--color-category-new-ink`. v3 used `--color-brand-primary`, which was 4.1:1 on the fill.
- Usage tables: company rows, and people rows when you can manage people, are clickable through a `.astral-row-link` button in the row header. The rows no longer take `tabindex`. People rows are not links when you cannot manage people.

### Removed

- `.astral-usage .astral-table tbody tr.is-link:focus-visible`. Rows no longer take focus; the button has its own ring.

## v3 — 2026-10-15

"v3" means this release. Older answers used "v3" for the pre-v2 zip of 23 Sep. That zip is still called pre-v2. The generated section below compares against v2 as published (`83d3062`).

### Added

- Data mark category tokens, 24 in all: `--color-category-{threshold, missing-data, no-signal, neutral, data, dcda, billing, template, report, document, table, image}-{fill, ink}`. The type badge and type tag read them. Every pair is at least 6.5:1. The 28px and 18px mark sizes stay plain values.
- `--color-category-new-fill` for the import "New" tag and `--color-highlight-drop` for drop zones. Same value as `--color-status-info-subtle`, which is now status only.
- `--color-status-info-subtle` for `.astral-state.is-info`.
- `--layout-nav-height` (60px). The nav and the export toast read it.
- `--shadow-float` for menus, popovers, tips, the toast, the colour picker and the query pin. `--shadow-modal`, one step up, for modals.
- `--astral-head-h` is declared in `:root` (45px). Before, only a fallback held it up.
- Product classes that earlier exports stripped: the `.astral-export-*` family (pick, facts, sum, toast and the rest). They were wrongly treated as prototype chrome.
- New prototype rules since v2, including the type badge and type mark, the data marks, `.astral-report-types.is-list`, the modal lead, the step slide and `.astral-icon-btn[aria-disabled="true"]`.
- Icon: 19 new glyphs, 63 in all: retry, expected, duplicate, paste, calendar, battery, signal, closed, peak, off-peak, location, chart-bar, chart-line, threshold, missing-data, no-signal, database, image and table.
- Generated section: classes added and classes removed, so a lost class cannot go unlisted.
- Build guard: the build fails if the payload changes without a version bump. `data/published-versions.json` pins each published version to its commit.
- ANSWERS: runtime variables, versions, zip and site bytes, and MANIFEST 34, 35, 36, 39 and 40.

### Changed

- `.astral-date-menu` is at least as wide as its button and at most `min(20rem, 100vw - 32px)`. Long options wrap onto a second line. (MANIFEST 36)
- Radio: a picked radio keeps its white fill with an 8px black dot. v2 shipped a 6px white dot. A disabled picked radio's dot is muted grey.
- Every `0 8px 24px` shadow reads `--shadow-float`. The account menu (20%) and the chart tip (20px blur) were drift and now match.
- Two rules read `--color-background-primary` and `--color-background-default`, which do not exist. Both read `--color-background-surface` now. Same white, so no visual change.
- ANSWERS: status colours mean status, wherever that meaning appears. "State only" never matched the prototype. Banner and form errors stay neutral.
- ANSWERS 9: a clickable row needs a real button in its row-header cell. `tr.is-link` is only the look. Downloads rows are not clickable.
- ANSWERS: the `#DFDFDF` accepted risk is signed off by the UX/UI Designer. It does not go above the design team.

### Removed

- `.astral-export-menu`. Nothing rendered it.
- `auth-texture.png` from the export and the zip README. Nothing used it.
- 15 classes the prototype no longer has, all removed by design changes since v2: `.astral-breakdown-pad`, `.astral-breakdown-slice`, `.astral-meter-hours`, `.astral-meter-map-copy`, `.astral-meter-own-note`, `.astral-meter-rates`, `.astral-meter-settings-lead`, `.astral-report-modal`, `.astral-report-tenants`, `.astral-report-tenants-head`, `.astral-report-tenant-list`, `.astral-report-tenant-head`, `.astral-report-tenant-body`, `.astral-report-tenant-remove` and `.astral-text-btn` (it lived only in the settings leads, which are gone. The filter footer's Clear all uses `.astral-text`).

### Corrections to v2

- v2 said its `@media` rules covered "the responsive nav and rail". They do not. The nav and rail appear only in `prefers-reduced-motion` rules. ANSWERS 23 was right.
- v2 said Icon gained 7 glyphs. It gained 11: upload, analyse, menu, home, companies, report, servicing, inbox, usage, grid and list.
- v2 said the `.astral-root` custom properties rule carried `--astral-head-h`. It did not. It is declared in `:root` from v3.

## v2 — 2026-09-24

First versioned export. Earlier zips were unversioned and are called pre-v2 by date. The generated section below compares against the most recent one, pre-v2 (23 Sep). Use v2 from here on.

### Added

- `@keyframes` for the rail, menus, chevron, progress, bar graphs and skeletons. pre-v2 dropped every at-rule. Every animation and transition reads `--motion-control`, `--motion-panel` or `--motion-slide`, or a literal. None reads a retired token.
- `@media` rules: the responsive nav and rail, and a `prefers-reduced-motion` rule for each animation.
- Page header rules: `.astral-page-head` (canvas surface: `position: relative`, `flex: none`. It is not sticky) and `.astral-page-tools` (grid). Use both on one `<header>`.
- `.astral-root` scope hook. Put it on the app root. It stands in for the prototype's `#astral-fs`.
- Product hook classes that replace the prototype's `data-proto-*` selectors:
  - `tr.is-link` on `.astral-table` rows that open something
  - `.astral-home-chart.is-link`
  - `.astral-modal.is-narrow` (28rem)
  - `.astral-modal.has-menus` (lets a select menu leave the modal)
  - `.astral-card .astral-profile-form`
- `.astral-brand-name` for the text after the logo mark. It carries the divider.
- `button.astral-avatar` gets the pointer. A plain `.astral-avatar` does not.
- Tooltip Escape: `.is-tip-off` on the host (or on a fixed tip) hides it until focus or hover leaves (WCAG 1.4.13).
- Filter footer: `.astral-filter-foot` holds a `Clear all` text button. It is sticky at the bottom of `.astral-filter-menu` and greyed out when nothing is on.
- Tokens: `--radius-xs` (2px), `--color-flow-in`, `--color-flow-out`, `--motion-slide`, `--ease-slide`.
- Base `html` rule in tokens.css: Roobert, weight 500, primary text.
- Icon: 7 new glyphs (analyse, menu, home, companies, report, servicing, inbox) and a `brand` colour. `cyan` stays as a deprecated alias.
- `VERSION`, `CHANGELOG.md` and `ANSWERS.md` in the zip.
- A generated section at the end of `CHANGELOG.md`: tokens removed, tokens retired (with last value and replacement), files removed, tokens added, guidance-only entries, and every selector scoped under `.astral-root`. The build writes it, so a deletion cannot go unlisted.
- `data/retired-tokens.json`: the list of tokens retired on purpose. The build honours it and never brings them back.
- `--astral-scroll-end` (48px). pre-v2 read only the first `:root` and missed it.
- The `.astral-root` custom properties rule (`--astral-head-h` and the like). pre-v2 dropped it with the bare `#astral-fs` frame.

### Changed

- tokens.css is the prototype's `styles.css :root`, the source of truth. The build no longer merges with the previous export. A token can only leave by being retired. The build fails if a token disappears without being retired, if a retired token is still declared or read, if a token in `data/design-systems.json` is neither shipped nor retired, or if a `var()` names a token that does not exist.
- The type scale (`--font-size-*`, `--font-weight-medium`, `--font-weight-semibold`, `--font-line-*`, `--font-tracking-*`) is now declared in the prototype `:root`. Before, it only reached tokens.css through the merge. Values are unchanged.
- The skeleton edge on groups, counts and badges reads `--color-border-default`. It read `--color-border`, which does not exist, and fell back to a non-brand grey.
- Every control edge uses `--color-border-control` (Infra Grey B `#DFDFDF`): buttons, ghost and icon buttons, inputs, search, selects, date buttons, checkboxes, switches, tabs, filter pills, meter pills, flow pills and unit boxes. pre-v2 split them across `--color-border-strong` and `--color-border-control`. Change the one token and every control follows. Focus stays black. Cards, tables and menus keep `--color-border-default`.
- Sort arrows: `.astral-sort.is-on.is-asc` lights the up arrow. `.is-on.is-desc` lights the down arrow.
- `.astral-tag.is-point` falls back to subtle fill and primary ink when `--tag-fill` and `--tag-ink` are not set.
- `.astral-chart-key-mark` uses `--radius-xs`. It is a rounded square.

### Removed

- Desk and prototype selectors: `#skills-list`, `.ds-preview`, `.astral-preview-*`, `.astral-export-*`, `.astral-lib-host`, every `data-proto-*` selector, and the bare `#astral-fs` frame.
- `.astral-account { justify-self: end }`. It did nothing.
- The export banner's 10 second timer. The banner stays until Hide.
- `src/components/StatusBadge.tsx`. It was never a product file. The pack made up a file name for any docs entry without one. Guidance-only entries now ship no file.
- StatusBadge from the library site component list. Its rule stays in the docs: meter health uses State, short facts use Tag.
- The prototype desk aliases (`--paper`, `--ink`, `--line` and the like). They sat in the same `:root` and would have leaked into tokens.css.
- 33 tokens retired on purpose: the `--color-gray-*` ramp, `--color-background-inverse`, `--color-brand-secondary`, `--color-brand-accent`, `--color-brand-on-primary`, `--font-family-mono`, `--font-size-40`, `--font-weight-regular`, `--font-weight-bold`, `--font-line-loose`, the five raw `--motion-*` durations, `--radius-none`, `--radius-pill`, `--radius-full`, `--space-0`, `--space-20`, `--space-40` and `--space-64`. They left between the pre-v2 zips because the prototype does not declare them. The generated section lists each with its last value and what to use instead.
