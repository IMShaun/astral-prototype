# Card stack spacing

Sibling cards use **16px**. `--space-16`. If two cards touch, the wrapper is wrong.

## When to use

Desk chrome and Astral product cards that sit next to each other. New features. After any paint of a list, a detail page, or a fold.

## The check

1. Find sibling cards. `.board-block`, `.brand-card`, `.know-card`, `.group`, `.access-card`, `.insight-card`, `.token-card`, `.style-card`, `.brief-card`, `.strategy-step`, `.empty-card`.
2. The parent must be a stack with `gap: var(--space-16)`. Use `card-stack`, `card-grid`, `token-grid`, `group-grid`, `know-grid`, `#library-list`, `#patterns-list`, `#skills-list`, `.brief`, or `.proto-desk`.
3. Labelled blocks inside a `.board-block` (`.group-block`, Now, Later) use the same 16px. The card is the grid.
4. If cards touch, do not add a one-off margin. Put them in a stack. If they sit inside one `.board-block`, give that card `display: grid` and `gap: var(--space-16)`.

## When not to use 16px between every child

- Title then one line on a compact card. Those cards already use 8px inside (`.brand-card`, `.group`, `.know-card`).
- Rows in a table or a `.notes` list. Those use a 1px line.
- Desk folds. The head and the clip sit flush. The grid lives inside the open clip.
- The page panel. `.panel` keeps 24px between the page head and the list.

## Anti-patterns

- Sibling cards in a bare `div`
- Several `.group-block`s in one `.board-block` with no gap
- A new `margin-top` to fake a stack
- Mixing 8px, 12px, and 24px between cards on the same page

## Tokens

`--space-16` is Space 16 from the Brand Book. Do not hard-code `16px` when the token is there.
