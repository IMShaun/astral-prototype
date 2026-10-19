# Native overflow

One native scroll owner per view. The browser paints the bar.

## User problem / goal

Reach content that does not fit without inventing a drag widget or trapping keyboard users.

## When to use

Pane, stage, tree, table, modal, Reports, Settings, and auth cards that can grow taller than the shell.

## When not to use

Do not add a second bar on a child when the pane already scrolls. Do not hide a desktop content bar. Do not scroll a menu or a report grid sideways.

## Anatomy

- Owner: `overflow-y: auto` or `overflow: auto`
- Nested: `overscroll-behavior: contain`
- Gutter: `scrollbar-gutter: stable`. The bar never sits on a control, a card, or a switch.
- Default: thin thumb, no outline. Hover the bar: thumb grows, 1px Infra Grey B outline. The slot stays 12px.
- Keyboard: a tabbable descendant, or `tabindex="0"` on the owner if it overflows and has none
- Tabs exception: overflow in the pill, bar hidden, buttons remain the path

## Canonical behaviour

Vertical first. Reports wrap instead of scrolling sideways. The reports sheet scrolls. The grid does not get a second bar. Breakdown draws every row at once. The pane scrolls it. See [Complete lists](foundation.complete-lists.md). Reduced motion keeps `scroll-behavior: auto`. The bar never sits on a control.

- Do: size a scrolling option list so the last row in view is cut through the middle. Every select option list, side lists such as Standard presets and Your presets included, shows five options and half of the sixth. `.astral-select-options` sets this with `--astral-option-row` (2.5rem, or 3.875rem for options with a note) and `--astral-option-frame` for a list with its own padding and border.
- Don't: end the view on a whole row. A list that stops cleanly between rows looks complete, and people miss the options below it.
- Why: a cut-off row shows there is more to scroll to, even where the platform hides the scroll bar.
- Do: show a hint under the options only when every option in the list has one (`protoSelect`). Interval shows Weekly with no "Monday to Sunday", while Totals for and Electricity units keep a hint on every option.
- Don't: give one option a hint the others lack. The list stops being one shape, and the odd row reads as a warning. User correction on 19 October 2026: "remove subtext in options if it is the only one".

## Accessibility

WCAG 2.1.1. Focusable region or descendant. Native bars, not `role="scrollbar"`. Thumb versus track at least 3:1. Do not put cyan on white. Focus is a 2px black edge.

## Keyboard and focus

Tab into a control inside the region. If the graph or a list has no tab stop, the region itself can take focus so arrows and Page keys move the content.

## Responsive behaviour

Touch platforms may auto-hide the overlay bar. Do not force that hide on desktop content panes.

## Anti-patterns

- JavaScript scrollbar widgets
- `scrollbar-width: none` on a pane or table
- Nested competing scrollers
- Infinite lists with no end and no announcement
- Lists that load in batches as people scroll, when the list is added up or drawn as a whole. See [Complete lists](foundation.complete-lists.md).

## Product surfaces using it

Portfolio pane, stage pages, Reports, Compare, query thread, tree, Settings, auth. Every select and its side lists use the cut-off last row, through the shared `protoSelect` builder.

Known limitation: filter menus (`.astral-filter-menu`) cap at a fixed height that mixes groups and headings, so they do not yet guarantee a cut-off row.

## Evidence

Inspected Astral overflow in `styles.css` and `prototype.js`. Desk rule: Tabs hide the bar inside the pill. Reports wrap. The reports sheet scrolls. Breakdown has no own bar. The bar never sits on a control.

## Related UX decision records

[UXDR-2026-09-18-native-overflow](../decisions/2026-09-18-native-overflow.md)
