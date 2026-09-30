# Library check

Compare painted UI to the named Astral pieces. Flag a duplicate. Do not delete it.

## User problem / goal

Keep Prototype and desk chrome on the same Button, Tag, Count, and Icon button. Catch a one-off control before it spreads.

## When to use

A new feature, a Back control, a status pill, or a suspicion that two pieces do the same job.

## When not to use

Do not extract Figma. Do not invent Storybook. Do not auto-delete.

## Anatomy

- Library list in `data/design-systems.json`
- Builders in `astral-ui.js`
- Scanner in `.cursor/skills/ux-patterns/scripts/check-library.mjs`
- Human review, then one `/ux-patterns` change

## Canonical behaviour

Inventory, then compare, then suggest. More than one signal before treating two pieces as the same. Card stacks still use 16px.

## Accessibility

The check does not replace axe. Focus stays a 2px black edge. Do not put cyan type on white.

## Anti-patterns

- A custom mark when Tag or Button already exists
- A 42px chevron on a text Button
- Sibling cards with no gap

## Related patterns / decisions

[UXDR-2026-09-18-library-check](../decisions/2026-09-18-library-check.md)
[Card stack](foundation.card-stack.md)
