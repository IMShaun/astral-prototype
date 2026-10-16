# Table in a fold

A table that sits in a fold (accordion) row. The fold's own rule closes the table, so the table adds no extra space or line of its own.

## User problem / goal

Open a fold and read its rows without a gap above the column headers or a doubled line at the bottom.

## When to use

A fold whose body is a table and whose row draws its own bottom rule, such as Settings > Users, where each team is a fold of people.

## When not to use

- A table boxed in a panel inside a fold, such as a meter's hours and time of use. The panel closes the table. See `.astral-fold-panel` in `styles.css`.
- A fold with a top rule only, such as Breakdown. The last row's line closes the table there.

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

Settings > Users: All people, every team fold and nested team fold (`protoUsersTable` in `.astral-people-fold`).

## Evidence

- User correction on 16 October 2026: padding above and below the people table looked uneven, and the last row's line doubled the fold's rule (commit `3482c0a`).

## Related patterns / decisions

- [Section box](foundation.section-box.md)
- [Heading spacing](foundation.heading-spacing.md)
