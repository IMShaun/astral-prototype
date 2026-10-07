---
name: responsive-design
description: >-
  Design and check Astral screens against real browser viewports, not monitor
  sizes. 1440 × 800 is the main canvas. 1280 × 640 is the small-desktop
  baseline. Design responsive behaviours, not smaller desktops. Use when the
  user invokes /responsive-design, or asks about screen size, viewport, laptop,
  display scaling, zoom, reflow, breakpoints, container queries, panels or
  drawers, a squeezed graph, a crushed table, a clipped modal, a short window,
  or whether a screen works on a small window.
---

# Responsive design

Astral works comfortably in a **1280 × 640** browser viewport. **1440 × 800** is the main design canvas. A bigger monitor makes Astral better. It is never needed to finish a core task.

This is a **provisional design target**, not an industry minimum. No one has measured the browser size of energy managers, brokers, utility analysts, or finance users yet. Say so whenever you quote the numbers.

## Non-negotiable

- Design against the **browser viewport** (`window.innerWidth`, `window.innerHeight`). Not the monitor. Not the screen resolution.
- Do not assume a 1920 × 1080 screen gives a 1920 × 1080 app. Windows scaling at 125% or 150% shrinks it. Tabs, the address bar, the taskbar, and side panels shrink it again.
- Do not set a minimum in inches. A small laptop and a big monitor can show the same viewport.
- Plan for laptop only. Do not assume a second monitor.
- People may put Astral next to Excel or a document. Half a screen is a real window.
- Vertical scrolling is fine. The whole dashboard does not need to fit above the fold.
- No page-wide sideways scrolling at 1280 or wider. A data table may scroll sideways inside itself. Navigation, forms, and instructions may not.
- Cut decorative spacing and spare panels before you shrink labels, instructions, or data.
- Do not block a smaller window. Below 1280, collapse or stack. Do not show a "screen too small" wall.
- Do not invent audience device numbers. Statcounter is general UK web traffic, not Astral users.

## Behaviour, not a smaller desktop

Keep the main task readable. Change how navigation, panels, controls, charts, and tables are shown as space runs out. Full rules, sources, and what Astral already has: [references/responsive-behaviour.md](references/responsive-behaviour.md).

- **Shell first.** Fix the shell and split-pane transitions before fonts, spacing, or control sizes.
- **Breakpoints come from content.** Set a minimum working size per piece. Transition when the main task would drop below it. The chart's available width matters, not the monitor.
- **Two levels.** Viewport queries for the shell. Intrinsic layout and container queries for pieces.
- **Panels follow the task.** Inline if needed side by side. Collapsible if occasional. Overlay for a short pick. A focused page for longer work.
- **Keep context.** Scope, date range, active filters, the main action, and data-quality warnings stay visible.
- **Charts keep meaning.** Fewer labels is fine. Never quietly change the range, drop peaks, hide gaps, or remove series.
- **Tables stay tables.** Do not turn comparison tables into cards. Sideways scroll stays inside the table.
- **Short windows count.** Not everything sticky. Sticky content never hides the focused control.
- **Resizing never restarts the task.** Keep selection, filters, open branches, inputs, table setup, chart state, and focus.

The research behind this has not been reproduced in a live viewport audit yet. Check before you claim a break.

## The five sizes

| Browser viewport | Role | What must hold |
| --- | --- | --- |
| **1440 × 800** | Main design canvas | Comfortable desktop layout with useful data density |
| **1280 × 640** | Small-desktop baseline | Core tasks work. No clipped controls. No page-wide sideways scroll |
| **1024 × 600** | Compact window | Panels collapse or stack. Filters and actions stay reachable |
| **1920 × 900** | Larger workspace | More chart or table space. Text does not stretch into long lines |
| **320 CSS px wide** | Accessibility reflow | Content reflows without losing information or functionality (WCAG 1.4.10) |

These are **test scenarios, not proven breakpoints or hardware requirements**. Also resize continuously and check just above and below each transition.

Also check browser zoom at 200% and text spacing. Details and the scaling table: [references/viewport-targets.md](references/viewport-targets.md).

## Invocation

Explicit: `/responsive-design`

```
/responsive-design Check Portfolio at the five sizes.
/responsive-design Will this modal clip at 1280 × 640?
/responsive-design Review Reports for small laptops.
/responsive-design Plan how to measure real viewports in research.
```

Also load this skill when painting a new Astral screen, panel, table, or modal. Check it at the five sizes before calling it done.

## How it runs

1. **Name the task.** Which screen, which core task, which audience. Mark unknowns as unknown.
2. **Write the responsive contract.** Task, essential information, minimum working size, adaptations, allowed overflow, state to keep, acceptance. Template in [references/responsive-behaviour.md](references/responsive-behaviour.md).
3. **Read the screen.** `prototype.js`, `styles.css`, and `astral-ui.js`. Find the layout owner, sidebars, fixed heights, `min-width`, media and container queries, `ResizeObserver` fits, and the scroll owner. Overflow follows `.cursor/skills/ux-patterns/references/scrollbars.md`.
4. **Check each size in the browser.** Set the viewport, not the window. Do the core task at each size. Then resize slowly through each transition, with panels open and long names. Do not claim a size was checked unless it was.
5. **Report per size.** What holds, what breaks, and where. Note any state lost on resize. Use the area rules in [references/screen-priorities.md](references/screen-priorities.md).
6. **Recommend one fix first.** Order: core task blocked, then state or focus lost on resize, then clipped control or footer, then page-wide sideways scroll, then squeezed main analysis, then spacing. Prefer a structural change (panel presentation, shell transition) over shrinking. One at a time, like `/ux-patterns`.
7. **Wait for Yes before editing.** Then change only that, reuse Astral pieces and tokens, and re-check all five sizes.
8. **Record it.** A reusable rule goes in `docs/ux/patterns/foundation.responsive-viewport.md`. A keep-or-change choice gets a UXDR in `docs/ux/decisions/`.

## Report shape

```
Screen and task

[One line.]

1440 × 800
1280 × 640
1024 × 600
1920 × 900
320 wide

[Holds / Breaks, and where. One line each.]

Transitions

[Where it changes, and what is kept or lost.]

Fix first

[One change.]

Why

[What the user can now do.]

Confidence

High / Medium / Low

Would you like to make this change?

Yes
No
Explore further
```

## Evidence

The targets are a planning choice from general data. The sources, their limits, and how to confirm with real users are in [references/evidence.md](references/evidence.md).

Until research measures real working viewports, 1280 × 640 stays the baseline. Change it only when that evidence names a different size. Record that in a new UXDR.

## Use other skills

- Layout drift, reuse, and one-change reviews: `.cursor/skills/ux-patterns/`
- Measuring real viewports in a study: `.cursor/skills/ux-research/`. Plan waits for **Build plan**.
- Copy that has to shorten at small sizes: `.cursor/skills/ux-writing/`

## Stop conditions

- The report is done and the question is asked.
- The user said No.
- A size could not be checked. Say which and why. Do not guess.
- The fix needs audience data we do not have. Say so and point to `/ux-research`.
