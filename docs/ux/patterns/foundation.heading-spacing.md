# Heading spacing

The gap under a heading is bigger than the largest gap inside the content it heads. Spacing shows the hierarchy before anyone reads a word.

## User problem / goal

See at a glance which heading owns which content, and which heading is the top level.

## When to use

Any pane, card, or section with a heading over content that has its own internal gaps.

## When not to use

- Desk folds. The head and the clip sit flush.
- A heading with a toolbar or tabs under it. Measure from the last item in the head, not from the heading text.

## Canonical behaviour

Measure the largest gap inside the content. Make the gap under its heading the next step up on the spacing scale.

| Level | Example | Gap below |
| --- | --- | --- |
| Pane heading | Settings > Notifications `h3` | 32px (`--space-32`) |
| Between sections | One section box to the next heading | 24px (`--space-24`) |
| Section heading | Email notifications `h4` to its box | 8px (`--space-8`) |

A section heading sits closer to its own box (8px) than to the section above (24px). That is the same rule from the other side.

### Do

- Step the gap up from the content. If sections are 24px apart, the pane heading gets 32px.
- Use spacing tokens. Account for the pane body's 6px focus ring room, for example `calc(var(--space-32) - 6px)`.
- Measure the rendered gap in the browser after the change.

### Don't

- Put a heading closer to its content than the content's own items are to each other. A 16px gap over 24px sections makes the heading look like one more item.
- Make a section heading sit as close to the section above as to its own content.
- Hard-code pixel values when a token exists.

## Product surfaces using it

Settings > Notifications, Organisation, and Billing.

## Known limitations

Only Settings has been checked. Other panes still use 8px under the head (`--space-stack-tight`) and have not been audited against this rule.

## Evidence

User correction on 6 October 2026: headings need a larger gap to the content below than the gaps inside it (commit `e0ef568`).

## Related patterns / decisions

- [Section box](foundation.section-box.md)
- [Card stack](foundation.card-stack.md)
