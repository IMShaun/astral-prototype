---
id: UXDR-2026-09-18-card-stack
status: accepted
date: 2026-09-18
title: 16px gap between sibling cards
---

# 16px gap between sibling cards

## Context

Desk chrome already named a 16px card stack. New features still painted sibling cards with no gap, or mixed 8px, 12px, and 24px. The Skills detail put Use, When, How it runs, and Uses in one `.board-block` with labelled blocks touching.

## Evidence

Inspected `#skills-list`, `.card-stack`, `.card-grid`, `.board-block`, and `.group-block` in `styles.css`. Compact cards already use 8px inside for title then one line. Folds keep the head flush with the clip.

## Options

1. One stack rule. Sibling cards and labelled blocks in a `.board-block` use `--space-16`. Folds, table rows, and compact title-and-line cards stay as they are.
2. Keep adding one-off margins per feature.
3. Use the 24px panel gap between cards too.

## Decision

Option 1. Check after every paint. If two cards touch, the wrapper is wrong.

## Rationale

The 16px stack already exists. The miss is parents with no gap. A margin per feature makes the next page drift.

## Consequences

Easier: one check. Put cards in a named stack. Give `.board-block` a 16px grid.

Harder: cannot pack labelled blocks flush inside a detail card without a new decision.

## Rejected alternative

One-off `margin-top` on the last block in a feature.

## Review when

A talk names a denser or wider card stack, or a fold needs a gap under the head.
