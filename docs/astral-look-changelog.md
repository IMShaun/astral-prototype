# Astral look changelog

The newest version sits at the top. `tools/build-library.js` reads the first heading for the version stamp.

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
