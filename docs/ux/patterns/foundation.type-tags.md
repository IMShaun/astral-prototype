# Type tags

A tag that names a type with a mark, such as Threshold alert or Missing data, takes that mark's colour pair. The fill is the mark's light colour. The text and the icon are its dark colour.

## User problem / goal

Tell alert types apart at a glance in tables and lists, and read the label easily.

## When to use

Any `astral-tag` built with a type mark (`protoTag(label, tip, className, mark)`), such as the Type column in Alerts > Settings.

## When not to use

- Tags with no mark, such as report or export tags. They keep their own fill.
- Filter pills. They show the icon in its dark colour on the pill's neutral fill.
- The standalone badge in summary cards and alert cards. It is already the light box with the dark icon.

## Anatomy

```html
<span class="astral-tag is-alerts has-mark" data-mark="threshold">
  <span class="astral-type-badge" data-mark="threshold">â€¦svgâ€¦</span>
  Threshold alert
</span>
```

- `data-mark` on the tag sets `--mark-bg` and `--mark-ink`, the same pair as the badge.
- Tag: `background: var(--mark-bg)`, `color: var(--mark-ink)`.
- Icon: inherits `--mark-ink`. The inner badge has no fill of its own.

| Mark | Fill (`--mark-bg`) | Text and icon (`--mark-ink`) | Contrast |
| --- | --- | --- | --- |
| threshold | #fef0c7 | #93370d | about 7:1 |
| missing-data | #e0eaff | #2d3282 | about 10:1 |
| no-signal | #ffe4e8 | #a11043 | about 6.5:1 |

## Canonical behaviour

### Do

- Fill the tag with the mark's light colour.
- Set the text and the icon to the mark's dark colour.
- Take both colours from the one palette, set by `data-mark`, so the tag, badge and any new surface stay in step.
- Keep text contrast at 4.5:1 or more against the fill.

### Don't

- Use a grey tag with only the icon coloured. The type colour is easy to miss and the tag looks unfinished.
- Use black text on a coloured fill. Text and icon must share the dark colour.
- Hard-code the colours on the tag. Add new marks to the shared `data-mark` palette.
- Give the inner badge its own fill. It would draw a box inside the tag.

### Why

One colour pair per type means a user learns it once and sees it the same everywhere. Dark text on its own light fill reads well and does not rely on the icon alone to signal the type.

## Accessibility

The label names the type, so colour is never the only signal. Text contrast is at least 4.5:1 for every mark. Tags with a tip keep their focus style.

## Product surfaces using it

Alerts > Settings table (Type column) and report cards.

## Evidence

- User correction on 6 October 2026: tag fill should be the light colour of the mark, and text and icon its dark colour (commit `9e18538`).

## Related patterns / decisions

- [Stable controls](foundation.stable-controls.md). Summary card badges use the same palette.
