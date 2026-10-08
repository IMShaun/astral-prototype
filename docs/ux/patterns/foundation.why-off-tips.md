# Why-off tips

When a control is turned off or limited, the reason sits in a hover and focus tip on that control. It does not sit as a note under it.

## User problem / goal

Find out why a control cannot be used without the panel filling up with small grey warnings. Notes under every disabled control push the working controls apart and make a short menu look busy.

## When to use

- A control that is disabled because of another setting, such as Overlay, Average profile, or Highlight weekends while the View is Calendar
- A control that is limited, such as Overlay when too many sites are in view
- A menu item that cannot be used yet, such as Compare in the date menu while the View is Calendar

## When not to use

- An error the person must fix to continue. Use an inline error linked to the field.
- Help that people need before they act, such as a format hint. Keep it visible.

## Canonical behaviour

### Do

- Wrap the control with `protoWhyOffTip(control, reason)` in `prototype.js`. It adds the `astral-tip-host is-why` wrapper, the `astral-icon-tip is-why` tip, and an `sr-only` copy of the reason.
- For a single button, put `astral-tip-host is-why` on the button itself, keep it focusable with `aria-disabled="true"`, and link the tip with `aria-describedby`.
- Write the reason as what the control works with, for example "Overlay works with Bar and Line.".
- Let the tip wrap. `.astral-icon-tip.is-why` has `max-width: 32ch` and `white-space: normal`.

### Don't

- Add a `<p>` note under a disabled control. The old `astral-chart-setting-note` is removed.
- Repeat the same reason in a note and a tip.
- Show the tip over its own open menu. `protoTipMenuOpen` hides it while the select is open.

## Accessibility

A native disabled control cannot take focus, so the reason is also in an `sr-only` span inside the wrapper. Screen reader users hear it when they reach the control in browse mode. Single buttons use `aria-disabled` so they stay focusable and the tip shows on `:focus-visible`. Supports WCAG 1.3.1 Info and relationships and 3.3.2 Labels or instructions.

## Product surfaces using it

- Chart settings, on every pane with a graph: Overlay, Average profile, Highlight weekends (`protoChartSettings`, `protoWeekendSwitch`)
- Date menu, Compare (`protoDateCompareMenuItem`)

## Known limitations

Report forms and Work Desk have not been swept for inline notes under disabled controls.

## Evidence

- User correction on 8 October 2026: comments and warnings for disabled inputs belong in hover tips to clean up the panel (commit `1d3a47a`).

## Related patterns / decisions

- [Stable controls](foundation.stable-controls.md)
