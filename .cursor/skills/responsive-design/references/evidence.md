# Evidence and its limits

The 1280 × 640 baseline and 1440 × 800 canvas are a **provisional design recommendation**. They are not an established industry minimum.

There is no screen-size dataset for energy managers, brokers, utility analysts, or finance users. Astral research names those audiences and their tasks. It does not record their devices or browser sizes.

Behaviour guidance (breakpoints, container queries, panels, charts, tables, short windows) and its sources live in [responsive-behaviour.md](responsive-behaviour.md).

## 1. Smaller desktop resolutions still matter

Statcounter, UK desktop screen resolution, September 2026:

| Reported screen resolution | Share of observed desktop page views |
| --- | --- |
| 1920 × 1080 | 35.59% |
| 1536 × 864 | 9.66% |
| 1280 × 720 | 4.52% |
| 1366 × 768 | 3.71% |
| 1440 × 900 | 3.56% |
| 2560 × 1440 | 3.54% |

Source: https://gs.statcounter.com/screen-resolution-stats/desktop/united-kingdom

Limits:

- Selected rows only. Not the whole distribution.
- Statcounter groups laptops with desktops. https://gs.statcounter.com/faq
- It counts page views, not unique workers.
- General UK web use, not Astral's sector.
- Recent months can be revised.

It supports testing smaller desktop sizes. It **cannot** say what share of Astral users a layout fits.

1536 × 864 is a 1920 × 1080 screen at 125%. 1280 × 720 is often 1920 × 1080 at 150%. Both are logical screens, before browser chrome.

## 2. A full-HD screen is not a full-HD workspace

Windows lets people change display scaling apart from resolution. https://support.microsoft.com/en-us/windows/hardware/display-graphics/change-your-screen-resolution-and-layout-in-windows

Measure the real browser viewport with `window.innerWidth` and `window.innerHeight`. https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth

## 3. No useful minimum in inches

A small laptop and a big monitor can expose the same viewport. Someone may also use Astral beside Excel or a document.

UK display-screen equipment rules ask for readable characters, suitable equipment, and software adapted to the task. They do not set a monitor size or resolution. https://www.legislation.gov.uk/uksi/1992/2792/schedule

So plan for a laptop-only setup. Do not assume a large external monitor.

## 4. Reflow

WCAG 2.2 Understanding Reflow allows two-dimensional scroll for content that needs it, like data tables. It does not extend to the navigation, forms, or instructions around it. https://www.w3.org/WAI/WCAG22/Understanding/reflow.html

## How to confirm with real users

The missing evidence is **working viewport size during real tasks**. Not monitor ownership.

- In customer research, capture `window.innerWidth × window.innerHeight` while people use their normal setup.
- Cover energy, finance, broker or data, and internal admin tasks.
- Watch whether Astral sits beside spreadsheets or documents, and which panels people need at the same time.
- If analytics are available, use privacy-reviewed, aggregated viewport sizes. Look at width and height together.
- Do not infer anyone's physical hardware from viewport numbers.

Plan that study with `/ux-research`. Until it reports, 1280 × 640 stays the small-desktop baseline, with compact and accessible behaviour below it. It is not a hard minimum that blocks smaller windows.
