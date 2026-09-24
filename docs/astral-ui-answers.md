# Astral answers

Decisions for the team building Astral in React. Each one is closed unless it says otherwise. The newest sits at the top of each section.

## Components

- There is no StatusBadge. Meter health uses State. Live, Waiting, Custom, role and Expiry use Tag. Do not add a generic success, warning, danger or info badge.
- Status colours are for State only. Tag, Banner and form errors stay neutral.
- Banner has no timer. It stays until Hide.
- Modal and DatePicker return focus to the button that opened them.
- Write the controlled story first.
- PageHeader: Shaun takes it end to end.

## Tokens

- `--radius-xs` is 2px. The chart key mark is a rounded square.
- 600 is the heaviest weight.
- Controls are 36px by default and 48px large.
- Every control edge uses `--color-border-control`. Change the one token and every control follows. Nothing else hard-codes `#DFDFDF`.

## Accepted risk

- `--color-border-control` (`#DFDFDF` on white) does not meet WCAG 1.4.11 non-text contrast. This is a deliberate trade-off, owned by Shaun Leishman. It is open for sign-off above the design team. It is one token, so it can be reversed.

## Shell

- Arrow keys move between rail items.
- Tab stays inside the rail while it is open.
- Put `.astral-root` on the app root. The `CHANGELOG.md` section "Scoped under .astral-root" lists every rule that does nothing until it is there.

## Export

- Each zip carries `VERSION`, `CHANGELOG.md` and this file.
- The changelog lists removed tokens and files first. The build writes that section, so a deletion cannot go unlisted.
- Only docs entries that name a product file ship. Guidance-only entries ship no file.
