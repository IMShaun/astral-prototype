# Data freshness

A graph says when its readings are in up to. Time after that is not in yet. It is not missing, and it is not zero.

## User problem / goal

Know how current the data is before acting on it, and tell a gap that will fill from a gap that needs a query. TMA shows this as the data last updated time (gap H9).

## When to use

Any graph, figure or file built from interval readings:

- Consumption, Cost, Carbon and Incoming and outgoing graphs, in bar, line and calendar
- Power factor and Demand graphs
- Summary figures, banner counts and Compare
- Breakdown and the meter Channels card
- Reports, data downloads and the reads register

## When not to use

- Weather. It is not a meter reading.
- Settings, lists and profiles with no readings.

## Anatomy

- **Heading line**: "Data to 15.00 today" after the period, in the graph heading. An older time gives the date, such as "Data to 2 Sep, 15.00".
- **Behind count**: "· 1 meter point behind", when some meter points are older than the newest one. It is a button that opens the meter points with their last reading.
- **Not in yet band**: a hatched band from the data-to time to the end of the period, labelled "Not in yet".
- **Tip note**: a point after the data-to time says "Not in yet". A day or month that holds the data-to time says "Readings are in up to 15.00 today."

## Canonical behaviour

### Do

- Treat a half-hour after a meter point's last reading as not in yet.
- Treat a meter point marked stale as missing after its last reading. It has stopped, so the gap needs a query.
- Count a slot as not in yet when nothing is in and any meter point is not in yet.
- Scale a day or month that holds the data-to time to the share that has passed, and say so in the tip.
- Take the heading time from the meter points the graph uses. Power factor and Demand use only incoming electricity meter points.
- Leave not-in-yet points out of totals, averages, missing counts, alerts and queries.
- End files and reports at the data-to time. Do not add a header row, as files are tabular and a header row breaks imports.

### Don't

- Show a not-in-yet slot as zero or missing.
- Put an alert or query marker on a slot that is not in yet.
- Show a full bar for today or this month.

### Why

A gap that will fill on its own needs no action. Calling it missing sends users to raise queries that are not needed, and a full bar for today overstates use.

## Accessibility

The heading line is text. The behind count is a button with its own name. The band has a text label, so the hatch is not the only signal. Spoken point text says "Not in yet".

## Product surfaces using it

Site, group and meter graphs. Power factor and Demand. Summary figures. Compare. Breakdown. Meter Channels card. Reports. Data downloads. Reads register.

## Open questions

- The data team must confirm how often readings refresh. The demo assumes half-hourly, with each meter point keeping its own last reading time.

## Evidence

- TMA gap H9, data last updated, approved as planned by the user on 2026-10-20.

## Related patterns / decisions

- [Load once](foundation.load-once.md)
- [Why-off tips](foundation.why-off-tips.md)
