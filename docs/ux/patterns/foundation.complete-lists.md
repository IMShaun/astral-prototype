# Complete lists

A list whose items add up to a total, a graph, or a count loads every item at once. People never wait for, scroll to, or ask for the rest.

## User problem / goal

See and check the whole set in one go. When a group says 3 sites, all 3 are there. When a graph shows a total, every row behind it is in the table. A list that loads in parts makes people scroll to trigger loading, and a count or total next to a part-loaded list looks wrong.

## When to use

Any list or table where the view is added up, compared, or drawn as a whole:

- The Portfolio tree, including site lists under each group and company
- Breakdown tables under a graph (interval, site, and meter point breakdowns)
- Sites, Groups, and Meter points lists in a pane

## When not to use

Short summaries that hide the end of a list that is already loaded, such as "+3 more" in a graph hover, filter pills with Show more, or a pin that lists the first seven. Nothing is fetched later, and the full list is one click away.

## Canonical behaviour

### Do

- Load and draw every item in the list in one go.
- Make the counts, totals, and graph next to the list match the rows people can see.
- Let the pane scroll the full list, as in [Native overflow](foundation.native-overflow.md).
- If a selection is too large to show, say so in place of the graph, as Too much data to show on the graph does, and offer Export. Do not show part of it.

### Don't

- Load a list in batches, such as 30 sites at a time, with a "3 more sites" row that loads the rest on scroll.
- Show a "30 of 107 sites loaded" footer, a spinner, or Try again inside a list.
- Draw only the table rows in view and pad the rest with empty space. Find on the page cannot reach them, and fast scrolling shows blank rows.

## Accessibility

Supports WCAG 1.3.2 Meaningful sequence and 2.4.5 Multiple ways. Screen reader and find-on-page users reach every row without scrolling first. No loading status is announced part way through a list.

## Product surfaces using it

- Portfolio tree on every user group, with or without companies. 107 sites across 6 groups, and every group's count matched its rows (commit `c4364e8`).
- Breakdown tables from `protoPaintBreakdownRows` in `prototype.js`. Crewe depot drew 48 of 48 rows on Last 24 hours. London North Western drew 32 of 32 in the site and meter point breakdowns on Last month (commit `35979c9`).

## Known limitations

None known. Tables built by `protoPaneListTable` already render every row.

## Evidence

- User correction on 8 October 2026: the tree's "3 more sites" row is bad usability. A sub-menu list that is added up, visualised, or calculated as a whole must load all at once.
- User decision on 8 October 2026: Breakdown also loads every row at once. This replaces "Breakdown loads as they scroll" in [Native overflow](foundation.native-overflow.md).

## Related patterns / decisions

- [Native overflow](foundation.native-overflow.md)
- [Stable controls](foundation.stable-controls.md)
