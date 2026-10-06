---
id: UXDR-2026-10-06-mixed-groups-neutral
status: accepted
date: 2026-10-06
title: Mixed groups use a neutral badge
---

# Mixed groups use a neutral badge

## Context

Every type has a coloured mark, shown on its tag, summary card, filter item and pill. The "all" cards used the brand teal, and Resolved as (Fixed, Expected, Duplicate) had green, blue and pink marks. But these groups hold a mix of alert, report or download types.

## Evidence

User feedback on 6 October 2026, pointing at the History Fixed card: the items in each category could be a mix of alert types, so grey or the secondary colour is better.

## Options

1. Neutral grey for every mixed group: the "all" cards and Resolved as.
2. Brand teal for every mixed group.
3. Grey for Resolved as, brand teal for the "all" cards.

## Decision

Option 1, chosen by the user. Mixed marks (`all`, `open`, `resolved`, `fixed`, `expected`, `duplicate`) use `--color-background-subtle` with #525252 for the icon and text. They keep their icons. The rule lives in [Type tags](../patterns/foundation.type-tags.md) and [Summary cards](../patterns/foundation.summary-cards.md).

## Rationale

Colour on a card says "this is one type". A mixed group in colour suggests a type that may not be there, and teal can look like a selected state. Grey keeps the icon's meaning without that claim.

## Consequences

Easier: colour always means one type, on every page.

Harder: a new group must be sorted as one type or mixed before it gets a mark.

## Rejected alternative

Brand teal for the "all" cards, which also clashed with the brand-coloured selected state.

## Review when

A grouping is added that always holds one type, or users cannot tell Resolved as states apart without colour.
