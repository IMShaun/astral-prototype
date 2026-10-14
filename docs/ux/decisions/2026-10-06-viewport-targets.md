---
id: UXDR-2026-10-06-viewport-targets
status: proposed
date: 2026-10-06
title: Viewport targets for Astral desktop
---

# Viewport targets for Astral desktop

## Context

Astral screens were designed without a named viewport. Energy, finance, broker, and admin users may work on laptops with Windows scaling, or with Astral beside Excel. Astral research names those audiences and tasks. It does not record their devices or browser sizes.

## Evidence

Desk research, not a study. Statcounter UK desktop resolutions for September 2026 show 1920 × 1080 at 35.59%, 1536 × 864 at 9.66%, and 1280 × 720 at 4.52%. That is page views across general UK web use, with laptops and desktops grouped. Windows scaling at 150% turns 1920 × 1080 into about 1280 × 720 before browser chrome. WCAG 2.2 Reflow sets the 320 CSS px check. Full write-up: `docs/research/reports/2026-10-06-astral-viewport-targets.md`.

## Options

1. Design at 1440 × 800. Hold core tasks at 1280 × 640. Collapse or stack at 1024 × 600. Use extra space at 1920 × 900. Reflow at 320 wide.
2. Design at 1920 × 1080 and treat smaller as degraded.
3. Set a hard minimum and block smaller windows.

## Decision

Option 1, as a provisional target.

## Rationale

A full-HD screen is often not a full-HD workspace. Laptop-only is the conservative case. Larger monitors should improve Astral, not be required. Blocking smaller windows fails reflow and people who work in half a screen.

## Consequences

Easier: one named baseline to design and test against. Graph, table, and modal rules follow from it.

Harder: dense screens like Portfolio need collapsible secondary panels. Every new screen needs a five-size check.

## Rejected alternative

Design for 1920 × 1080 only. Rejected because scaling, browser chrome, and side-by-side windows shrink the real viewport.

## Review condition

Reopen when customer research or privacy-reviewed analytics report real working viewport sizes during Astral tasks. Then accept, adjust, or supersede this record.
