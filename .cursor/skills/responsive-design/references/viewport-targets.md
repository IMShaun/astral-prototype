# Viewport targets

Provisional planning targets. Not measured audience numbers.

## Screen, resolution, and viewport are different

Physical size is inches. Resolution is device pixels. The browser viewport is the CSS pixels the page actually gets. Design against the viewport.

Windows scaling changes the logical screen at 100% browser zoom:

| Physical resolution | Display scaling | Approximate logical screen, before browser and OS chrome |
| --- | --- | --- |
| 1920 × 1080 | 100% | 1920 × 1080 |
| 1920 × 1080 | 125% | 1536 × 864 |
| 1920 × 1080 | 150% | 1280 × 720 |
| 1920 × 1200 | 150% | 1280 × 800 |

Then tabs, the address bar, bookmarks, the taskbar, side panels, and a non-maximised window take more. Browser zoom takes more again.

A 1920 × 1080 laptop at 150% leaves about 1280 × 720 of screen. After browser chrome and the taskbar, roughly 1280 × 600 to 640 is left for the page. That is why the baseline is 1280 × 640.

Microsoft lets people change scaling apart from resolution. Many laptops ship at 125% or 150%.

## The five sizes

| Viewport | Role | Pass when |
| --- | --- | --- |
| 1440 × 800 | Main design canvas | Comfortable layout. Useful data density. Design here first |
| 1280 × 640 | Small-desktop baseline | Every core task completes. No clipped control. No page-wide sideways scroll. Modal footers reachable |
| 1024 × 600 | Compact window | Side panels collapse or stack. Filters and primary actions still reachable. Navigation still names destinations |
| 1920 × 900 | Larger workspace | Extra width goes to the chart or table. Reading text keeps a sensible line length |
| 320 CSS px wide | Reflow | Non-exempt content reflows to one column with no loss of information or function |

1280 × 640 allows for a 1280-wide logical screen with less height left. It does not mean the dashboard fits above the fold. Vertical scroll is fine.

## Zoom and text

- Browser zoom 200% at 1280 wide gives a 640 CSS px viewport. It must still work.
- 400% zoom at 1280 wide is the 320 CSS px reflow check.
- Text spacing (WCAG 1.4.12): line height 1.5, paragraph spacing 2×, letter spacing 0.12em, word spacing 0.16em. Nothing clips.

## WCAG reflow

WCAG 2.2 SC 1.4.10 Reflow. At 320 CSS px wide, content reflows with no two-dimensional scroll, except content that needs it, like data tables, maps, and graphs. The exception covers the table. It does not cover the navigation, filters, forms, or instructions around it.

## How to check

1. Set the viewport size in the browser or in Playwright (`page.setViewportSize`). Not the window size.
2. Confirm with `window.innerWidth` and `window.innerHeight`.
3. Do the core task at each size. Do not just look at the first paint.
4. Open every modal and drawer on that screen. Scroll to its footer.
5. Check for page-wide sideways scroll: `document.documentElement.scrollWidth > window.innerWidth`.
6. Repeat at 1280 × 640 with 200% zoom, then the 320 wide reflow.

Record which sizes were checked. Do not claim a size you did not run.
