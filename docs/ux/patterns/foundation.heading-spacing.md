# Heading spacing

The gap under a heading is never smaller than the gaps inside the content it heads. A control bar under a heading is the exception and stays close to its content.

## User problem / goal

See at a glance which heading owns which content and which heading is the top level, without pushing the content further down than it needs to be.

## When to use

Any pane, card, or section with a heading over content that has its own internal gaps.

## When not to use

- Desk folds. The head and the clip sit flush.
- A head with a control bar (search, filter, sort, tabs). See [Heads with a control bar](#heads-with-a-control-bar).

## Canonical behaviour

Match the gap under a heading to the largest gap inside its content. Do not go a step beyond it.

| Level | Example | Gap below |
| --- | --- | --- |
| Pane heading, heading only | Settings > Notifications `h3` | 24px (`--space-24`) |
| Between sections | One section box to the next heading | 24px (`--space-24`) |
| Pane head with a control bar | Settings > Users search and filter | 16px (`--space-stack-default`) |
| Section heading | Email notifications `h4` to its box | 8px (`--space-8`) |

A section heading sits closer to its own box (8px) than to the section above (24px). That is the same rule from the other side.

### Do

- Give a heading-only pane head the same gap as the largest gap in its content. On Settings that is 24px.
- Keep 16px between a control bar and the content it acts on.
- Use spacing tokens. Account for the pane body's 6px focus ring room, for example `calc(var(--space-24) - 6px)`.
- Measure from the last item in the head, which is the control bar when there is one.
- Measure the rendered gap in the browser after the change.

### Don't

- Put a heading closer to its content than the content's own items are to each other. A 16px gap over 24px sections makes the heading look like one more item.
- Overshoot. 32px over 24px sections was too big. It pushed content down and made the heading feel detached.
- Add the heading gap under a control bar.
- Make a section heading sit as close to the section above as to its own content.
- Hard-code pixel values when a token exists.

## Heads with a control bar

When a head has search, filters, sort, or tabs under the heading, keep 16px between the bar and the content. Do not use the 24px heading gap.

Why:

- **The bar already separates.** The heading and the bar form one block. The bar's height and its bordered controls mark where the head ends, so space does not need to.
- **Controls belong to what they change.** Search and filters act on the list below. Proximity tells people that link. A bigger gap reads as "these controls are about something else".
- **Cause and effect stay in view.** When someone types or filters, the first changed row should sit right under the control, so they see the result without moving their eyes far.
- **Data pages need the room.** Pages with control bars are usually long lists or tables. Every extra pixel above the first row pushes data below the fold, especially on small screens.
- **It matches the rest of the product.** List and table pages already keep their tools 16px or less from the content. Changing one page alone would be inconsistent.

## Product surfaces using it

- Heading only, 24px: Settings > Notifications, Organisation, and Billing.
- Control bar, 16px: Settings > Users.

## Known limitations

Only Settings has been checked. Other panes still use 8px under the head (`--space-stack-tight`) and have not been audited against this rule.

## Evidence

- User correction on 6 October 2026: headings need a larger gap to the content below than the gaps inside it (commit `e0ef568`).
- User correction on 6 October 2026: 32px was too big. Heads with a control bar keep the earlier spacing (commit `aa5f4ac`).

## Related patterns / decisions

- [Section box](foundation.section-box.md)
- [Card stack](foundation.card-stack.md)