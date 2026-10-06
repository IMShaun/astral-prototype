# Section box

Split a card into labelled sections. The heading sits above the box, outside it. The rows sit in a light bordered box with card corners.

## User problem / goal

Scan a long card, such as Settings, and see where one set of options ends and the next begins.

## When to use

A card or pane that holds two or more labelled sets of rows, such as Settings > Notifications with Email notifications and App notifications.

## When not to use

- One set of rows with no heading. Use the rows on their own.
- Sibling cards on a page. Use the [card stack](foundation.card-stack.md).
- Tables and notes lists. They use a 1px line between rows.

## Anatomy

```html
<section class="astral-setting-group" aria-labelledby="astral-setting-email">
  <h4 class="astral-setting-head" id="astral-setting-email">Email notifications</h4>
  <div class="astral-setting-rows">…rows…</div>
</section>
```

- Section: no border, no padding. It only groups the heading with its box.
- Heading: above the box, aligned to its left edge, 8px gap (`--space-8`).
- Box: `--color-border-default` 1px border, `--radius-lg` (16px), white, 16px side padding.
- Rows: 1px line between rows. No line above the first row.
- Between sections: 24px from the bottom of one box to the next heading.

## Canonical behaviour

### Do

- Put the heading above the box, outside the border.
- Use `--radius-lg` (16px) so the box matches the corners of cards, lists, and menus.
- Label each section with its heading via `aria-labelledby`.

### Don't

- Put the heading inside the bordered box.
- Use 8px corners (`--radius-md` or `--radius-card`) on the box. Corners must match the card.
- Add a shadow or make the box a second card. Do not nest cards.
- Add a one-off margin when the parent already has a gap. Measure the space from the box to the next heading.

## Accessibility

Each section is a named region via its heading. The box is decoration only. Focus stays a 2px black edge.

## Product surfaces using it

Settings > Notifications.

## Evidence

- User correction on 6 October 2026: 8px corners looked inconsistent next to 16px cards (commit `9a664aa`).
- User correction on 6 October 2026: headings belong outside the box and above it (commit `20eb47c`).

## Related patterns / decisions

- [Card stack](foundation.card-stack.md)
