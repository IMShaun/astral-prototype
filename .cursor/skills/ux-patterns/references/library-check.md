# Library check

Inventory the named Astral pieces. Compare the live builders and the screens. Flag drift. Do not delete a duplicate.

This is the first slice of a larger consistency pipeline. Code first. Human review. Suggestions, not deletions.

## When to use

A new control, a painted feature, a duplicate that looks like Button or Tag, or a check that desk chrome and Prototype still call `astral-ui.js`.

## When not to use

Do not pull Figma until they ask to connect it. Do not invent Storybook, Chromatic, or Percy. Do not auto-merge a fix. Do not treat a heuristic as a finding on its own.

## What exists now

- Canonical list. `data/design-systems.json` components and tokens.
- Live builders. `astral-ui.js`.
- Painted product. `prototype.js`.
- Desk chrome. `app.js` and `styles.css`.
- Card stack. Sibling cards use `--space-16`.

## What waits

- Figma extract
- Storybook export
- Visual snapshot CI
- Clone detectors that need a new package

## The check

Run

```
node .cursor/skills/ux-patterns/scripts/check-library.mjs
```

Add `--json` for a machine copy.

It reports

- Named pieces with no builder
- Builders with no named piece
- How often each builder is called
- Desk `.status` and `.chip` classes
- Raw hex in product JS
- Whether `.board-block` is a 16px grid

## How to read a finding

Combine more than one signal. A desk `.status` pill is a named exception until status colour ships. Hex on the graph can be the IBM Carbon set the walk named. A missing builder is not a licence to invent a component.

Flag. Do not delete. `/ux-patterns` still recommends one change and waits for Yes.

## Anti-patterns

- Auto-deleting a duplicate
- Failing a build on a suggestion
- Connecting Figma from this check
- Inventing a score or a coverage percentage as a KEI
