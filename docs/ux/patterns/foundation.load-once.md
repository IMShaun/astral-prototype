# Load once

A sub-tab loads in the first time it opens. Going back to it on the same site, group or meter shows it straight away, with no skeleton.

## User problem / goal

Move between sub-tabs, such as Consumption, Demand and Site profile, to compare them without waiting. Once a tab has shown its data, a skeleton on the way back suggests the data is being fetched again, and slows people down for nothing.

## When to use

Any sub-navigation that swaps the content of a pane in place:

- Site, group and meter tabs on Portfolio: Consumption, Cost, Carbon, Demand, Power factor, Weather, Site profile, Alerts and Queries
- Settings sections, service tabs and usage tabs

## When not to use

- Opening a page, or the app starting. The screen skeleton still runs.
- A new request for data, such as a longer date range. The interval loader decides that, as in the graph loader rules.

## Canonical behaviour

### Do

- Show the skeleton the first time a sub-tab opens.
- Show a sub-tab straight away when the user goes back to it on the same site, group or meter.
- Stop a skeleton that is still running when the user goes back to a tab already opened.

### Don't

- Run the skeleton on every tab change when the data is already loaded.
- Carry the "already opened" state to another site, group or meter. Its data has not loaded yet.

## Accessibility

Screen reader users hear no "Loading" status when nothing loads. Focus stays on the tab.

## Product surfaces using it

- Every tab change that goes through `setProto` and `protoSkelWatch` in `prototype.js`. The pane key from `protoSkelKeys` covers the Portfolio tabs, settings sections, service tabs, usage tabs and inbox tickets (commit `da654e7`).
- Checked on Manchester Traction: Queries showed the skeleton on its first visit, then Consumption and Queries showed straight away on the way back.

## Known limitations

- The record of opened tabs lasts until the page reloads.
- Picking another site from the Portfolio tree does not run the pane skeleton. This was already the case before this pattern.

## Evidence

- User correction on 20 October 2026: skeleton loaders should not run between sub-tabs when the data has already loaded.
- User decision on 20 October 2026: skip it only when going back to a tab already opened, not on every tab change.

## Related patterns / decisions

- [Stable controls](foundation.stable-controls.md)
- [Complete lists](foundation.complete-lists.md)
