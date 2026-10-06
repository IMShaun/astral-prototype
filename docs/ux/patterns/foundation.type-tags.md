# Type tags

A tag that names a type with a mark, such as Threshold alert or Missing data, takes that mark's colour pair. The fill is the mark's light colour. The text and the icon are its dark colour.

## User problem / goal

Tell alert types apart at a glance in tables and lists, and read the label easily.

## When to use

Any `astral-tag` built with a type mark (`protoTag(label, tip, className, mark)`), such as the Type column in Alerts > Settings.

## When not to use

- Status tags such as Weekly or Coming soon. They are not types.
- Filter pills. They show the icon in its dark colour on the pill's neutral fill.
- The standalone badge in summary cards and alert cards. It is already the light box with the dark icon.
- Card headings, such as alert cards in Alerts > Settings. Put the boxed badge before the heading instead of a pill. Its tip and accessible name give the type.

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
| all, open, resolved, fixed, expected, duplicate (mixed groups, neutral) | #efefef (`--color-background-subtle`) | #525252 | about 6.8:1 |
| extract (Data extract) | #d1e9ff | #194185 | about 9:1 |
| dcda (DC/DA) | #ece9fe | #491c96 | about 9:1 |
| billing (Tenant billing) | #dcfae6 | #085d3a | about 7.5:1 |
| template (a built template) | #eaecf5 | #363f72 | about 8.5:1 |
| download-report | #cff9fe | #155b75 | about 7:1 |
| download-export | #d1e9ff | #194185 | about 9:1 |
| download-document | #fdead7 | #932f19 | about 7.5:1 |
| export-chart, export-table (Export pop-up, what is on screen) | #ccfbef | #134e48 | about 8.4:1 |
| export-source (Source data, same as extract) | #d1e9ff | #194185 | about 9:1 |
| export-image | #fce7f6 | #851651 | about 8:1 |
| export-pdf (same as download-document) | #fdead7 | #932f19 | about 7.5:1 |

A mark names the type and its colour. When it draws another icon, `PROTO_MARK_ICONS` in `astral-ui.js` maps it, for example `extract` draws `usage`.

## Canonical behaviour

### Do

- Fill the tag with the mark's light colour.
- Set the text and the icon to the mark's dark colour.
- Take both colours from the one palette, set by `data-mark`, so the tag, badge and any new surface stay in step.
- Keep text contrast at 4.5:1 or more against the fill.
- Use the neutral palette for a group that can hold more than one type, such as an "all" card or Resolved as (Fixed, Expected, Duplicate). Keep its icon.

### Don't

- Use a grey tag with only the icon coloured. The type colour is easy to miss and the tag looks unfinished.
- Use black text on a coloured fill. Text and icon must share the dark colour.
- Hard-code the colours on the tag. Add new marks to the shared `data-mark` palette.
- Give one page's types colours and leave another page's types grey. Every type family (alert types, report types, download types) has a coloured mark.
- Give a mixed group a type colour. A Fixed group can hold every alert type, so a colour would suggest one type that is not there.
- Give the inner badge its own fill. It would draw a box inside the tag.

### Why

One colour pair per type means a user learns it once and sees it the same everywhere. Dark text on its own light fill reads well and does not rely on the icon alone to signal the type.

## Accessibility

The label names the type, so colour is never the only signal. Text contrast is at least 4.5:1 for every mark. Tags with a tip keep their focus style.

## Product surfaces using it

Alerts > Settings table (Type column). Reports table and cards. Downloads table (Type column). Inbox and Queries (Resolved as). Summary cards on Alerts, History, Reports and Downloads. Filter menus and pills where the type is not on a card, such as Type on History.

## Evidence

- User correction on 6 October 2026: tag fill should be the light colour of the mark, and text and icon its dark colour (commit `9e18538`).
- User correction on 6 October 2026: changes made to Alerts must carry to every page with the same elements. Grey icons on Reports were not wanted.
- User correction on 6 October 2026: Resolved as cards hold a mix of alert types, so they and the "all" cards should be grey, not coloured.
## Related patterns / decisions

- [Stable controls](foundation.stable-controls.md). Summary card badges use the same palette.
