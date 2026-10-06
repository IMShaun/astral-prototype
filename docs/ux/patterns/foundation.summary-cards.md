# Summary cards

The row of count cards under the page tabs that filters the list below. Every card has the same shape: a boxed type icon and the name on top, the count below.

## User problem / goal

See how many of each kind there are, and filter to one kind with a click. Recognise each kind by the same colour and icon used in the list.

## When to use

A page with a list that splits into kinds, where a count per kind helps. Alerts > Activity and History, Reports, Downloads. Built with `protoSummaryCards` in `prototype.js`.

## When not to use

- Plain statistics that do not filter. Use a stat without `aria-pressed`.
- More than about five kinds. Use the Filter menu.

## Anatomy

```html
<button class="astral-stat astral-summary-stat is-on" aria-pressed="true">
  <span class="astral-summary-name"><span class="astral-type-badge" data-mark="threshold">…</span><span>Outside threshold</span></span>
  <span class="astral-stat-value">1</span>
</button>
```

- Row 1: badge (`--summary-mark`, 36px, radius 10px) and name, 8px gap.
- Row 2: the count, 32px, `line-height: 1.1`.
- 16px padding, 12px between rows. Every card is 117px.

## Canonical behaviour

### Do

- Give every card a badge, including the "all" card.
- Make the badge neutral grey when the card groups more than one type: the "all" cards (`all`, `open`, `resolved`) and Resolved as (`fixed`, `expected`, `duplicate`). Keep the icon.
- Use the same mark as the type shows in the list, tags, filter menu and pills. See [Type tags](foundation.type-tags.md).
- Put the icon and name on top and the count below, so the icon says what the card is and the count answers it.
- Show selection on the container: brand border, inset ring and brand count. Keep the badge in its type colour.
- Pass the mark into `protoSummaryCards`. Add a missing type to the shared palette before shipping.

### Don't

- Put the badge under the count. It competes with the number and the card looks top-heavy.
- Leave one card without a badge. Its name floats in an empty row and the cards stop lining up.
- Fall back to a grey icon for a single type. Grey is for mixed groups only. On a type card it reads as unfinished.
- Colour a mixed group. It suggests one type that may not be there.
- Recolour the badge to the selected colour. That hides the type at the moment it matters.
- Give a large count a line height much taller than its text. The extra space makes the card top-heavy.

### Why

One shape on every page lets people scan cards the same way everywhere. Type colour carries meaning, so it stays fixed. Selection is a separate state, so it sits on the container.

## Accessibility

Each card is a button with `aria-pressed`. The badge is `aria-hidden`, and the name gives the type, so colour is never the only signal. A card with none is disabled with the tip "None in this view".

## Product surfaces using it

Alerts > Activity and History. Reports. Downloads. Measured at 117px on all four after the fix.

## Known limitations

Work Desk stat strips use the same class at 140px minimum width and have not been checked against this rule.

## Evidence

- User question on 6 October 2026: the card felt off after the framed icon was added. The badge sat below a 32px count on a 48px line (commit `6e29f8f`).
- User correction on 6 October 2026: grey icons on Reports were not wanted. Every page's types got their own marks (commit `ff78c87`).
- User correction on 6 October 2026: Resolved as cards hold a mix of alert types, so they and the "all" cards are grey.
- Selected state versus type colour: agreed on 6 October 2026, in line with Polaris and Material, which mark selection on the container.

## Related patterns / decisions

- [Type tags](foundation.type-tags.md)
- [Stable controls](foundation.stable-controls.md)
