# UX writing in pattern work

One stable concept should have one stable name.

ORCA identifies canonical **Objects** and **Calls-to-Action** before microcopy is written. It is not a writing-style method.

For Astral UI copy, follow `.cursor/skills/ux-writing/` (ORCA+, en-GB-oxendict, terminology, templates). Product glossary in `data/design-systems.json` Language and `.cursor/skills/ux-writing/references/terminology.md` outranks generic advice. Do not change named product labels until the user decides.

This product has a global audience. Use concise, plain, internationally understandable English.

## Ten rules

| Rule | Example |
| --- | --- |
| **Use one term for one concept.** | Prefer `Company` everywhere if that is the domain object. Do not alternate with `Organisation` for variety. |
| **Use familiar user language, not implementation language.** | `We could not load meter data` rather than `API request failed`. |
| **Make action labels describe the outcome.** | `Add company`, `Save changes`, `Export report`. |
| **Keep one main idea per sentence.** | Split a long permissions explanation into the decision and its consequence. |
| **Front-load the useful information.** | `3 meters could not be imported` before explaining why. |
| **Avoid idioms, jokes, and culturally specific metaphors in task copy.** | `Try again` rather than `Give it another shot`. |
| **Expand unfamiliar acronyms the first time.** | `Meter Point Administration Number (MPAN)` where the audience may not know MPAN. Retain known specialist terms for expert users. |
| **Write errors as problem + recovery.** | `Enter a company name` rather than `Invalid input`. Preserve entered information. |
| **Do not use placeholders as labels.** | Keep `Company name` visible above the field. |
| **Avoid ambiguous dates, numbers, and units.** | In fixed English copy, `9 September 2026`, not `09/09/26`. In the application, localise to the user’s locale. |

## Extra

- Prefer `Add company` to vague actions such as `Submit`.
- Prefer `Delete report` to `Yes` in a destructive confirmation.
- Do not use `Are you sure?` without explaining the consequence.
- Avoid `Invalid` where a useful correction can be given.
- Do not blame the user.
- Preserve entered data after validation failure where technically possible.
- Do not alternate synonyms merely to make copy sound varied.
- On Home metric cards, capitalise the first letter of the supporting line under the figure. Sentence case, not title case. `Sites need action today`, not `sites need action today`.

Destructive confirmations should explain the actual consequence. Reserve disruptive confirmation for uncommon irreversible actions. Recovery and undo can be preferable when the interruption is not justified.
