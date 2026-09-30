---
id: UXDR-2026-09-18-native-overflow
status: accepted
date: 2026-09-18
title: Native overflow for Astral scroll regions
---

# Native overflow for Astral scroll regions

## Context

Panes, tables, modals, Reports, and the tree already used CSS overflow. Tabs hid the bar inside the pill. Keyboard reach on a region with no tab stop was missing. Nested chaining was only on some owners.

## Evidence

Inspected `styles.css` overflow, `prototype.js` pane and table markup, and platform plus WCAG guidance distilled in `.cursor/skills/ux-patterns/references/scrollbars.md`.

## Options

1. Native CSS overflow, contain nested regions, bind `tabindex="0"` only when a region overflows and has no tab stop.
2. Custom styled thumbs (cyan, thin, always visible).
3. A JavaScript scrollbar widget.

## Decision

Option 1. Keep the Tabs hide as the named exception. Do not restyle thumbs. Reports wrap instead of scrolling sideways.

## Rationale

Native bars carry keyboard, pointer, and platform behaviour. Custom widgets fail those. Cyan thumbs on white fail contrast. Tabs already have buttons, so a track in the pill is noise.

## Consequences

Easier: one owner per view, keyboard into empty overflow, nested panes stay put.

Harder: cannot paint a branded thumb without a new decision.

## Rejected alternative

Custom or CSS-coloured scrollbars for brand match.

## Review condition

Reopen if a talk names a persistent branded bar, or if a content pane must hide overflow and still stay keyboard-reachable another way.
