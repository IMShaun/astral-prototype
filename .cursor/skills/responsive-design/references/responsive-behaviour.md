# Responsive behaviour

Design responsive behaviours, not smaller copies of the desktop. Keep the main task readable. Then change how navigation, panels, controls, charts, and tables are shown as space runs out.

Grounded in accessibility standards, design-system guidance, responsive-visualisation research, and the Astral prototype source. The suspected layout problems below have **not** been reproduced in a live viewport audit yet. Check before you claim them.

## What Astral already has

Checked in source, 7 Oct 2026.

| Existing behaviour | Where | What it means |
| --- | --- | --- |
| Navigation goes compact when its content no longer fits | `prototype.js` `protoFitNav`, `ResizeObserver` | Build on this content-led switch. Do not replace it with device breakpoints |
| Charts redraw when their container resizes | `prototype.js` `protoChartWatch`, `ResizeObserver` | The question now is whether labels, legends, and interactions stay useful, not whether it resizes |
| Split layout gives the tree or list `20rem`, then stacks below 900px | `styles.css` `.astral-split`, `@media (max-width: 900px)` | Check if the main pane gets cramped **before** 900px. Check if the stacked list (`max-height: 40vh`) pushes the task too far down after |
| Report cards use an intrinsic, wrapping grid | `prototype.js` `protoEqualReportCards` | Reuse this for suitable pieces. Not everything needs another media query |
| Native scroll, stable controls, and the two-step modal rule | `.cursor/skills/ux-patterns/references/` | Responsive changes keep these. Do not add a competing pattern |

No `@container` rules yet. The only containment is `contain: inline-size` on `.astral-filter-section-pills`. `.astral-pane` has none.

**Fix the shell and split-pane transitions before fonts, spacing, or control sizes.** They decide how much workspace is left for everything else.

## 1. Breakpoints come from minimum working space

A familiar number like 1024px is not evidence a layout works there. Pick breakpoints where the content stops supporting the task, not by device. [web.dev](https://web.dev/articles/responsive-web-design-basics)

Name a **minimum working size** for each important piece:

| Piece | Its minimum is set by |
| --- | --- |
| Site or meter tree | Identifiers stay distinct. Select and expand stay usable |
| Chart | Plot, axes, units, legend, and interaction targets stay understandable |
| Table | Task-critical columns stay readable without crushing |
| Toolbar | Primary actions and current scope stay understandable |
| Form | Labels, errors, inputs, and actions stay reachable |

Then add what navigation, panel widths, padding, and gaps take.

A wide window can still leave a narrow chart when a tree and another panel are open. **The chart's available width is the constraint, not the monitor.**

Write the transition as a condition in the spec:

> Collapse the supporting panel when keeping it inline would leave the main task below its agreed working width.

Set the width from real content and task checks. Not an assumed number.

## 2. Two levels of responsiveness

| Level | Owns | Mechanism |
| --- | --- | --- |
| Application shell | Navigation style, side-by-side versus focused layout, major panel placement | Viewport queries and explicit layout state |
| Components | Toolbar wrap, card layout, form columns, chart controls, local legends | Intrinsic layout and container queries |

Container queries let a piece respond to the space it is given. The same piece then works full width, beside a tree, or in a narrow panel. [MDN container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)

In Astral that could mean:

- A toolbar goes to two rows when **its pane** is narrow
- A metric card moves its supporting line under the value
- A form goes from two columns to one without changing the page
- Chart controls adapt when a panel opens, even if the window did not resize

Start with width-only containment (`container-type: inline-size`) where content must grow in height. Add it where a piece needs it. Not everywhere.

For repeated grids, use intrinsic layout first: `auto-fit` or `auto-fill`, sensible minimum card widths, flexible tracks. **A track that can shrink does not make its contents usable.** [web.dev CSS Grid](https://web.dev/learn/css/grid)

## 3. Panel presentation follows the task

Putting every panel in a drawer saves space but can make analysis worse. Ask:

**Does the person need this panel and the main content at the same time?**

Fluent separates inline drawers, which allow side-by-side reference, from overlays, which cover content. It also treats reflow and re-architecting as layout moves, not just resizing. [Fluent layout](https://fluent2.microsoft.design/layout), [Fluent drawer](https://fluent2.microsoft.design/components/web/react/core/drawer/usage)

| Presentation | Use it when |
| --- | --- |
| **Inline panel** | They keep referring to a tree, list, or supporting detail while working |
| **Collapsible panel** | It helps navigation but is not needed all the time. Keep an obvious way back |
| **Overlay panel** | A short pick or setting that does not need the covered content |
| **Focused page or view** | Longer work, or too narrow for side-by-side to help |

- Picking a different meter can happen in a temporary selection panel
- Comparing readings keeps the values visible together
- A long configuration task becomes a page, not a crowded drawer

For narrow list and detail, picking an item opens its detail with a clear way back. Keep the previous selection, open branches, and list position.

**Do not assume stacking the whole tree above the chart is best.** It keeps the content but can push the main task far below navigation.

## 4. Cut secondary demands, not essential context

Progressive disclosure puts common tasks first and keeps the rest findable. It needs to know task frequency and importance. "Hide whatever does not fit" is not a priority. [NN/g progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/)

Usually protect:

- The selected site, meter, or scope
- The date range and meaningful filters
- The main task action
- Important warnings and data-quality notes

Less-used display settings, advanced filters, and secondary actions can move into labelled disclosures.

Keep an active-filter summary visible when the filter controls are closed. Otherwise the layout shrinks and the data gets harder to read.

Do not turn important actions into unlabelled icons. Compact spacing helps, but it does not replace a structural change. WCAG 2.2 AA asks for a 24 × 24 CSS px target or a listed exception such as spacing. It does not require 44px everywhere. [WCAG 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## 5. Charts stay meaningful, not just small

A chart that fits its box can still be unreadable.

Responsive-visualisation research picks a design using **element size, overlap, and aspect ratio**, not only viewport width. That matters when the amount of data changes. It is a method, not proof that one adaptation helps Astral. [Responsive vis breakpoints](https://responsive-vis.github.io/breakpoints/)

| Pressure | Possible adaptation |
| --- | --- |
| Axis labels collide | Fewer tick labels. Keep the whole period and a way to read exact values |
| Legend eats the plot | Move or wrap it. Keep series identifiable and accessible |
| Several charts get too narrow | Stack them. Keep comparable scales where comparison needs them |
| Plot gets too short | Cut surrounding chrome or offer a focused chart view. Do not keep compressing |
| Too many series to tell apart | Offer series selection or another view that fits the task |

**Fewer axis labels is not less data.** Never quietly change the date range, aggregate away peaks, hide missing readings, or drop comparison series to make a chart fit.

Highcharts and ECharts show width-based legend and axis rules and container-driven resizing. Use them as behaviour references. Astral already has the resize machinery. Do not replace its charts. [Highcharts responsive](https://www.highcharts.com/docs/chart-concepts/responsive), [ECharts chart size](https://echarts.apache.org/handbook/en/concepts/chart-size/)

## 6. Keep table comparison. Do not turn every table into cards

Cards suit browsing single records. They are often worse than a table for comparing readings, costs, dates, or statuses across rows.

Keep tables legible, keep row and column context, show scroll cues, and let people control what shows. Written for mobile, but it holds for narrow desktop windows too. [NN/g mobile tables](https://www.nngroup.com/articles/mobile-tables/)

- Give columns sensible minimum widths. Do not force everything into view
- Sideways scroll stays inside the table region
- A sticky identifier column can help. Do not freeze so many that nothing is left
- Keep headers tied to their data, and visible where useful
- Offer task-based column presets or a column chooser
- Move supplementary fields into details. Never hide fields the comparison needs

Flexible columns can share spare space with fixed or minimum-width ones. They must not keep overriding someone's manual resize. [AG Grid column sizing](https://www.ag-grid.com/javascript-data-grid/column-sizing/)

**The table may scroll sideways. The page around it may not need sideways scroll to reach normal controls and explanations.**

## 7. Short windows and continuity

Width is not enough. A wide window can have little working height after navigation, headings, tabs, filters, and sticky actions.

Specify short-height behaviour next to narrow-width behaviour:

- Cut decorative and repeated header space before the task area
- Do not make every toolbar and summary sticky
- Let labels and messages make a piece taller. Do not clip them
- Give scrolling one deliberate owner. No competing scrollers for the same content
- Dialog content and actions stay reachable when text grows
- Keep the two-step modal rule. Longer tasks become pages

Sticky content must not fully hide a focused control (WCAG 2.2 AA 2.4.11). Aim higher: keep the whole focused control visible. [WCAG focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

Across any transition, keep the selected scope, filters, open branches, unsaved inputs, table setup, and meaningful chart state. Keep focus on the same control. If that control is removed, move focus to its logical equivalent.

**Resizing changes presentation. It does not restart the task.**

## Responsive contract

Write one per major piece before designing its transitions.

| Field | Example |
| --- | --- |
| Task | Compare a meter's current and previous-period readings |
| Essential information | Meter identity, periods, units, series, data-quality markers |
| Minimum working size | Set from real content and interactions |
| Adaptations | Wrap controls. Move the legend. Collapse supporting navigation |
| Allowed overflow | A clearly bounded chart or table region, where needed |
| State to keep | Selected meter, periods, filters, comparison state |
| Acceptance | The comparison still makes sense. Controls stay reachable |

## How to check

The five sizes in [viewport-targets.md](viewport-targets.md) are **test scenarios, not proven breakpoints or hardware requirements**.

The WCAG two-dimensional exception belongs to the content that needs it, like some tables and charts. Not the whole app. Text at 200% must keep content and function. [WCAG reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [WCAG resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

- Resize continuously, not only at the five sizes
- Check just above and just below each transition
- Include open panels, long names, loading and error states, keyboard use, and browser zoom
- Judge by real tasks: find a meter, read a chart, compare records, apply filters, finish a form. Not screenshots alone
