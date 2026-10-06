# Responsive viewport

Astral works in a 1280 × 640 browser viewport. It is designed at 1440 × 800. A bigger monitor improves it. It is never needed to finish a core task.

Provisional. See the evidence limits below.

## User problem / goal

Finish a core task on a laptop, at Windows scaling, or in half a screen beside Excel, without clipped controls or page-wide sideways scroll.

## When to use

Every Astral screen, panel, table, filter, modal, and form. Check before a screen is called done.

## When not to use

Do not use it to set a minimum monitor size in inches. Do not use it to block a smaller window.

## Anatomy

| Browser viewport | Role | Must hold |
| --- | --- | --- |
| 1440 × 800 | Main design canvas | Comfortable layout, useful data density |
| 1280 × 640 | Small-desktop baseline | Core tasks work. No clipped controls. No page-wide sideways scroll |
| 1024 × 600 | Compact window | Panels collapse or stack. Filters and actions reachable |
| 1920 × 900 | Larger workspace | More chart or table space. Text does not stretch |
| 320 CSS px wide | Reflow | No loss of information or function (WCAG 1.4.10) |

## Canonical behaviour

- Measure the viewport, `window.innerWidth` × `window.innerHeight`. Not the screen.
- Vertical scroll is fine. The dashboard does not need to fit above the fold.
- Portfolio and graphs keep scope, date range, units, and the main analysis. Secondary panels collapse. The graph is not squeezed between permanent sidebars.
- Tables lead with decision-critical columns. Sideways scroll stays inside the table.
- Filters keep the active ones visible. Less-used options move into a panel.
- Reports and documents keep name, status, and actions. Metadata stacks first.
- Modals and forms fit the height. The body scrolls. The footer stays reachable.
- Navigation can go compact or collapsible. Destinations stay named.
- Cut spacing and spare panels before shrinking labels, instructions, or data.

## Accessibility

WCAG 2.2 SC 1.4.10 Reflow at 320 CSS px. The two-dimensional scroll exception covers a data table or graph, not the navigation, forms, or instructions around it. Check 200% zoom at 1280 wide and WCAG 1.4.12 text spacing.

## Keyboard and focus

Collapsed panels open from a named button. Focus moves into the panel and back on close. A table that scrolls sideways is a focusable region, per [Native overflow](foundation.native-overflow.md).

## Responsive behaviour

This is the responsive behaviour. Below 1280 wide, collapse or stack. Do not show a "screen too small" wall.

## Anti-patterns

- Treating a 1920 × 1080 display as a 1920 × 1080 app
- A minimum in inches
- A fixed-height modal that clips its footer
- `min-width` on a wrapper that pushes the whole page sideways
- Shrinking text before removing decoration
- Assuming a second monitor

## Product surfaces using it

Not yet audited. Run `/responsive-design` on Portfolio, Reports, Compare, Users, and Settings first.

## Evidence

Desk research, 6 Oct 2026. Statcounter UK desktop resolutions, Microsoft display scaling, MDN viewport, UK display-screen regulations, WCAG 2.2 Reflow. General web data, not Astral users. Full write-up: [docs/research/reports/2026-10-06-astral-viewport-targets.md](../../research/reports/2026-10-06-astral-viewport-targets.md). Method: `.cursor/skills/responsive-design/`.

## Related UX decision records

[UXDR-2026-10-06-viewport-targets](../decisions/2026-10-06-viewport-targets.md)
