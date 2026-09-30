# Scrollbars and overflow

Load this file when the task involves overflow, nested panes, long lists, or custom scroll UI.

Portable method. Product surfaces and exceptions live in `docs/ux/`.

Native scroll is the pattern. Do not invent a JavaScript scrollbar widget.

## Prefer

- CSS `overflow: auto` or `overflow: scroll` on one owner per view.
- Vertical overflow for primary tasks. Horizontal only for a compact control that already has another keyboard path, such as Tabs.
- `overscroll-behavior: contain` on nested regions so the page behind a pane, modal, or list does not move.
- Keyboard reach. If a region scrolls and has no tabbable descendant, give it `tabindex="0"`. If it already contains buttons, links, or fields, do not add an extra stop.
- Native thumb and track. Do not invent a JavaScript bar. Thumb versus track at least 3:1. Do not put cyan on white. Quiet outline is 1px Infra Grey B.
- Default is a thin thumb with no track outline. Hover the bar to grow the thumb and show the outline. The slot stays 12px so the layout does not jump.
- `scrollbar-gutter: stable` on the owner. The bar never sits on a control, a card, a switch, or another hit target. Overlay bars sit in that gutter or in the owner's padding. Content does not run to the scroll edge.
- `prefers-reduced-motion`: `scroll-behavior: auto`. No kinetic or auto-scroll scripts.

## Avoid

- Replacing native bars with a drag widget, arrows, or `role="scrollbar"`.
- Hiding the bar on a desktop content pane (`scrollbar-width: none` or `::-webkit-scrollbar { display: none }`).
- Nested competing scrollers when one owner can take the overflow.
- A bar that overlays a control, a card, or a switch.
- `overflow: hidden` that clips needed content with no other path.
- Horizontal scroll for menus, tables, or primary reading.
- Infinite scroll that never reaches an end, unless a talk named it and keyboard plus announcement are solved.
- Smooth or bouncing motion when the user prefers reduced motion.

## One scroll owner

Ask who owns the extra content.

| Surface | Owner | Not |
| --- | --- | --- |
| Page without a tree | The stage body | A second bar on a nested card |
| Group or site pane | The pane body | Breakdown with its own bar |
| Modal | The modal body | The page behind it |
| Tree | The tree list | The pane |
| Reports sheet | The reports sheet, vertical | A second bar on the grid. Sideways scroll |

A cut-off row, a fading edge, or a visible thumb can show that more exists. Do not rely on a hidden bar.

## Keyboard and names

WCAG 2.1.1. A scrollable region must be reachable without a pointer. Tab into a control inside it, or onto the region itself.

Do not use `aria-hidden` on the scroller. Do not build a custom ARIA scrollbar. Focus rings stay the 2px black edge.

## Platform

Desktop content panes keep a visible or overlay native bar. Touch platforms may auto-hide. Follow the browser. Do not force always-hidden on desktop.

Tabs in Astral are a pill. Overflow there is a last resort. The tab buttons are the keyboard path. Do not put a track inside the pill.

## Performance

Let the browser paint. Do not restyle on every scroll. For a very long list, window the rows or load as they scroll. Breakdown already loads as they scroll. Do not give that table its own bar. The pane scrolls it.

## When reviewing

1. Find every `overflow: auto`, `scroll`, and `hidden` on the surface.
2. Name the scroll owner.
3. Check keyboard, nested chaining, horizontal overflow, reduced motion, and whether the bar sits on a control.
4. Recommend one change. Native first. Hide or custom last.
