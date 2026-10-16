# Table in a fold

A table that sits in a fold (accordion) row. The fold's own rule closes the table, so the table adds no extra space or line of its own.

## User problem / goal

Open a fold and read its rows without a gap above the column headers or a doubled line at the bottom.

## When to use

A fold whose body is a table and which ends on a rule: its own bottom rule, or the top rule of the next fold. Examples are Settings > Users, where each team is a fold of people, and the Breakdown, Meter point breakdown and list folds under a graph.

## When not to use

- A table boxed in a panel inside a fold, such as a meter's hours and time of use. The panel closes the table. See `.astral-fold-panel` in `styles.css`.

## Anatomy

```html
<div class="astral-accordion astral-people-fold is-open">
  <button class="astral-accordion-head astral-people-fold-head">Team</button>
  <div class="astral-fold-clip">
    <div class="astral-accordion-body astral-people-fold-body">
      <div class="astral-people"><div class="astral-table-wrap"><table class="astral-table">…</table></div></div>
    </div>
  </div>
</div>
```

- Fold row: 1px `--color-border-strong` bottom rule.
- Table holder: 16px side padding, no top padding, 8px bottom padding.
- Column headers: start straight under the fold head. Their height matches the body rows (`--astral-head-h`), so they need no extra space above.
- Last row: no bottom border on any cell, `td` or `th`.

## Canonical behaviour

### Do

- Let the fold's bottom rule close the table.
- Drop the last row's border on every cell. Row headers are `th`, so use `:is(td, th)`.
- Keep the side padding so the table lines up with the fold head text.

### Don't

- Add 16px padding above the column headers. The header row is already as tall as a body row.
- Leave a border on the last row when a line sits straight beneath it. Two lines read as a mistake.

## Accessibility

No change. The table keeps its headers and row headers. Focus stays a 2px black edge.

## Product surfaces using it

- Settings > Users: All people, every team fold and nested team fold (`protoUsersTable` in `.astral-people-fold`).
- Portfolio graph tabs on a group, site or comparison: Breakdown, Meter point breakdown, and the Sites, Groups and Meter points lists (`.astral-breakdown-body`). When a key or column paging shows above the table, that bar keeps its 16px above. When the bar is empty it is hidden, so it adds no gap.

## Evidence

- User correction on 16 October 2026: padding above and below the people table looked uneven, and the last row's line doubled the fold's rule (commit `3482c0a`).
- User correction on 16 October 2026: the Meter points fold had the same gap above the headers and the same doubled line under the last row.

## Related patterns / decisions

- [Section box](foundation.section-box.md)
- [Heading spacing](foundation.heading-spacing.md)
