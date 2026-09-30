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

Vertical first. Reports wrap instead of scrolling sideways. The reports sheet scrolls. The grid does not get a second bar. Breakdown loads as they scroll. The pane scrolls it. Reduced motion keeps `scroll-behavior: auto`. The bar never sits on a control.

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

## Product surfaces using it

Portfolio pane, stage pages, Reports, Compare, query thread, tree, Settings, auth.

## Evidence

Inspected Astral overflow in `styles.css` and `prototype.js`. Desk rule: Tabs hide the bar inside the pill. Reports wrap. The reports sheet scrolls. Breakdown has no own bar. The bar never sits on a control.

## Related UX decision records

[UXDR-2026-09-18-native-overflow](../decisions/2026-09-18-native-overflow.md)
