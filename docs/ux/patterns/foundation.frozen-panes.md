# Frozen panes

A table of readings that is too tall or too wide for its box. It scrolls inside its own box, as in Excel. The column headers stay on top and the Time column stays on the left.

## User problem / goal

Read a value deep in a long or wide table and still know which time and which column it belongs to.

## When to use

A table with one row per time step and one column per meter, channel or series, where the rows or columns can run past the box. Examples are the Breakdown and Meter point breakdown under a graph, and Daily readings in a meter view.

## When not to use

- A short list with a few fixed columns, such as Users or the Meter points list. Let it grow with the page.

## Anatomy

```html
<div>
  <div class="astral-breakdown-top">
    <!-- key, then column paging -->
    <div class="astral-breakdown-bar" data-proto-breakdown-nav hidden>
      <p data-proto-breakdown-range aria-live="polite"></p>
      <button data-proto-breakdown-page="prev">…</button>
      <button data-proto-breakdown-page="next">…</button>
    </div>
  </div>
  <div class="astral-table-wrap astral-breakdown-scroll" tabindex="0" role="region" aria-label="Daily readings by channel">
    <table class="astral-table astral-breakdown-cols is-meters" style="min-width:…rem">…</table>
  </div>
</div>
```

- Scroll box: `.astral-breakdown-scroll`. Its height is capped at `min(34rem, 70vh)`, it scrolls both ways, and it is positioned so the paging can measure the columns.
- Column headers: sticky to the top of the box.
- Time column: the first `th` in every row, sticky to the left.
- Column paging: "Columns 1–4 of 6" with Previous and Next. It shows only when the table is wider than the box.
- Table: a `min-width` in rem, so columns keep a readable width and the box scrolls instead of squashing them.

## Canonical behaviour

### Do

- Keep the column headers and the Time column in view while the table scrolls.
- Let the table scroll sideways when the columns do not fit, and show the paging.
- Keep the key and the paging as siblings of the scroll box in one parent, so the paging finds its table.
- Put the box in a container with `minmax(0, 1fr)` or `min-width: 0`, so a wide table cannot stretch the card.

### Don't

- Let the page scroll a long table so its headers scroll out of view.
- Squeeze the columns to fit the box or cut off their headers.

## Accessibility

The scroll box is a focusable region with an `aria-label`, so keyboard users can scroll it. The range text is a polite live region. Focus is a 2px black edge.

## Product surfaces using it

- Portfolio graph tabs on a group, site or comparison: Breakdown and Meter point breakdown (`protoBreakdownPanel` in `prototype.js`).
- Meter view: Daily, Half-hourly or Monthly readings (`protoMeterReadingsCard` in `prototype.js`).

## Evidence

- User correction on 16 October 2026: the meter view's readings table needed sticky headers and sideways scrolling, and the user asked for it on every table like it (commit `40211d2`).

## Related patterns / decisions

- [Table in a fold](foundation.table-in-fold.md)
- [Native overflow](foundation.native-overflow.md)
