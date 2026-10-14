# Astral viewport targets, desk research

Desk research, 6 Oct 2026. Not a study. No participants. General web data, not Astral users.

## Recommendation

Design the full desktop experience to work comfortably in a browser viewport of **1280 × 640 CSS pixels**, with **1440 × 800** as the main design canvas. Larger monitors should improve the experience. They should not be required to complete core tasks.

This is a provisional design recommendation, not an established industry minimum. There is no screen-size dataset for energy managers, brokers, utility analysts, or finance users. Astral's research identifies those audiences and their tasks. It does not record their devices or browser sizes.

## What the research tells us

### 1. Smaller desktop resolutions still matter

[Statcounter UK desktop, September 2026](https://gs.statcounter.com/screen-resolution-stats/desktop/united-kingdom):

| Reported screen resolution | Share of observed desktop page views |
| --- | --- |
| 1920 × 1080 | 35.59% |
| 1536 × 864 | 9.66% |
| 1280 × 720 | 4.52% |
| 1366 × 768 | 3.71% |
| 1440 × 900 | 3.56% |
| 2560 × 1440 | 3.54% |

Selected rows, not the full distribution. Statcounter [groups laptops with desktops and counts page views, not unique workers](https://gs.statcounter.com/faq). General UK web use, not Astral's sector. Recent data can be revised.

It supports testing smaller desktop sizes. It cannot say what share of Astral users a layout fits.

### 2. A full-HD screen is not a full-HD workspace

At 100% browser zoom, Windows display scaling changes the logical screen:

| Physical resolution | Display scaling | Approximate logical screen, before browser and OS chrome |
| --- | --- | --- |
| 1920 × 1080 | 100% | 1920 × 1080 |
| 1920 × 1080 | 125% | 1536 × 864 |
| 1920 × 1080 | 150% | 1280 × 720 |
| 1920 × 1200 | 150% | 1280 × 800 |

Tabs, the address bar, the taskbar, side panels, and window size take more. Browser zoom can take more again. [Microsoft supports changing scaling apart from resolution](https://support.microsoft.com/en-us/windows/hardware/display-graphics/change-your-screen-resolution-and-layout-in-windows). Design against the actual browser viewport, [`window.innerWidth` and `window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth).

Do not assume someone with a 1920 × 1080 display sees a 1920 × 1080 application.

### 3. There is no useful minimum in inches

A small laptop and a large monitor can expose the same browser size. Someone may use Astral beside Excel or a document. The UK [display-screen workstation requirements](https://www.legislation.gov.uk/uksi/1992/2792/schedule) ask for readable characters, suitable equipment, and software adapted to the task. They set no monitor size or resolution.

Laptop-only is the conservative case to plan for.

## Design and check sizes

Planning targets, not measured audience numbers.

| Browser viewport | Purpose | Expected behaviour |
| --- | --- | --- |
| 1440 × 800 | Main design canvas | Comfortable desktop layout with useful data density |
| 1280 × 640 | Small-desktop baseline | Core tasks usable. No clipped controls. No page-wide sideways scroll |
| 1024 × 600 | Compact window | Panels collapse or stack. Filters and actions stay reachable |
| 1920 × 900 | Larger workspace | More chart or table space, without stretching text |
| 320 CSS px wide | Accessibility reflow | Non-exempt content reflows without losing information or function |

1280 × 640 allows for a 1280-wide logical screen with less height. It does not mean the dashboard fits above the fold. Vertical scrolling is fine.

Also check browser zoom and text enlargement. [WCAG Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) allows two-dimensional scroll for content that needs it, like data tables. That does not cover the navigation, forms, or instructions around it.

## What this means for Astral screens

| Area | Priority |
| --- | --- |
| Portfolio and graphs | Keep scope, date range, units, and the main analysis visible. Collapse secondary panels instead of squeezing the graph between permanent sidebars |
| Tables | Lead with decision-critical columns. Keep unavoidable sideways scroll inside the table |
| Filters | Keep active filters identifiable. Move less-used options into an accessible panel |
| Reports and documents | Keep name, status, and actions. Stack metadata before reducing text |
| Modals and forms | Fit the height. Content scrolls. Actions stay reachable. No fixed-height dialog that clips its footer |
| Navigation | Compact or collapsible where needed. Destinations stay understandable |
| Typography | Cut decorative spacing and spare panels before making labels, instructions, or data harder to read |

## How to confirm with real users

The missing evidence is working viewport size during real tasks, not monitor ownership.

- In customer research, capture browser dimensions while people use their normal setup.
- Cover energy, finance, broker or data, and internal admin tasks.
- Watch whether Astral sits beside spreadsheets or documents, and which panels people need at the same time.
- If analytics are available, use privacy-reviewed, aggregated viewport sizes. Look at width and height together.
- Do not infer physical hardware from viewport numbers.

Until that evidence exists, 1280 × 640 is the small-desktop baseline, with compact and accessible behaviour below it. It is not a hard minimum that blocks smaller windows.

## Where this lives

- Skill: `.cursor/skills/responsive-design/` (`/responsive-design`)
- Pattern: `docs/ux/patterns/foundation.responsive-viewport.md`
- Decision: `docs/ux/decisions/2026-10-06-viewport-targets.md` (proposed)
- Desk: Patterns, Responsive viewport. Skills, Responsive design.
