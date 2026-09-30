---
id: UXDR-2026-09-18-library-check
status: accepted
date: 2026-09-18
title: Code-first library check, suggestions not deletions
---

# Code-first library check

## Context

A methods brief named an end-to-end pipeline across code, Figma, and Storybook. This desk already has a named library and live builders. Figma MCP waits. There is no Storybook. Agents were still painting one-off Back marks and card stacks with no gap.

## Evidence

Inspected `astral-ui.js`, `data/design-systems.json` components, `prototype.js`, `app.js`, and the Skills Back control. UX Patterns already inspects first and waits for Yes. The brief said combine signals and require human review.

## Options

1. Inventory code against the named library. Flag drift. Wait for Yes before a fix. Figma, Storybook, and visual CI wait.
2. Connect Figma and run a full extract now.
3. Auto-open pull requests that delete suspected duplicates.

## Decision

Option 1. Run `node .cursor/skills/ux-patterns/scripts/check-library.mjs`. Suggestions, not deletions.

## Rationale

The desk can already list builders and named pieces. Figma extract needs a connect they have not asked for. Auto-delete fails the brief's own risk note on false positives.

## Consequences

Easier: one command after a paint. Skills Back and card stack have a check.

Harder: hex on the graph and desk `.status` still need a human to read the exception.

## Rejected alternative

Auto-deleting duplicates, or treating Figma as in until they ask to connect it.

## Review when

They ask to connect Figma, add Storybook, or run visual snapshots in CI.
