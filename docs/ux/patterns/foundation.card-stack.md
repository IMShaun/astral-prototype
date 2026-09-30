# Card stack

Sibling cards sit 16px apart. The parent is a gap stack. Cards inside a board block use the same gap.

## User problem / goal

Scan a list or a detail without cards touching or drifting to a one-off margin.

## When to use

Desk lists, detail pages, and any new feature that paints more than one card.

## When not to use

Do not put 16px between a fold head and its clip. Do not use 16px between table rows. Compact title-and-line cards keep 8px inside.

## Anatomy

- Parent: `card-stack`, `card-grid`, `token-grid`, `group-grid`, `know-grid`, or a named list with `gap: var(--space-16)`
- Card: `.board-block` is a 16px grid for labelled blocks
- Fold exception: `.board-block.desk-fold` stays a block. The grid sits in the open clip

## Canonical behaviour

If two cards touch, the wrapper is wrong. Fix the parent. Do not add a one-off margin.

## Accessibility

Gap is layout, not a spacer image. Focus stays a 2px black edge. Do not put cyan type on white.

## Anti-patterns

- Bare wrapper around sibling cards
- Several labelled blocks in one card with no gap
- Mixing 8px, 12px, and 24px between cards on the same page

## Related patterns / decisions

[UXDR-2026-09-18-card-stack](../decisions/2026-09-18-card-stack.md)
