# Astral look changelog

The newest version sits at the top. `tools/build-library.js` reads the first heading for the version stamp.

## v2 — 2026-09-24

First versioned export. v1 was the unversioned zip imported into AstralTech on 23 September 2026.

### Added

- `@keyframes` for the rail, menus, chevron, progress, bar graphs and skeletons. v1 dropped every at-rule.
- `@media` rules: the responsive nav and rail, and a `prefers-reduced-motion` rule for each animation.
- Page header rules: `.astral-page-head` (sticky surface) and `.astral-page-tools` (grid). Use both on one `<header>`.
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

### Changed

- Every control edge uses `--color-border-control` (Infra Grey B `#DFDFDF`): buttons, ghost and icon buttons, inputs, search, selects, date buttons, checkboxes, switches, tabs, filter pills, meter pills, flow pills and unit boxes. v1 split them across `--color-border-strong` and `--color-border-control`. Change the one token and every control follows. Focus stays black. Cards, tables and menus keep `--color-border-default`.
- Sort arrows: `.astral-sort.is-on.is-asc` lights the up arrow. `.is-on.is-desc` lights the down arrow.
- `.astral-tag.is-point` falls back to subtle fill and primary ink when `--tag-fill` and `--tag-ink` are not set.
- `.astral-chart-key-mark` uses `--radius-xs`. It is a rounded square.

### Removed

- Desk and prototype selectors: `#skills-list`, `.ds-preview`, `.astral-preview-*`, `.astral-export-*`, `.astral-lib-host`, every `data-proto-*` selector, and the bare `#astral-fs` frame.
- `.astral-account { justify-self: end }`. It did nothing.
- The export banner's 10 second timer. The banner stays until Hide.
