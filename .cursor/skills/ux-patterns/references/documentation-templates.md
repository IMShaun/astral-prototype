# Documentation templates

Product memory lives under `docs/ux/`, not in this Skill’s `references/`.

Do not invent a complete pattern library. Fill inventory and docs from inspected product evidence after approval, or when establishing the structure is useful.

Desk Patterns in `data/design-systems.json` remain named recipes from talks. `docs/ux/` is the reusable pattern governance layer. Do not duplicate every desk recipe automatically.

## Inventory (`docs/ux/pattern-inventory.yml`)

Index and map. Individual pattern documents explain behaviour.

```yaml
version: 1
patterns:
  - id: pattern.add-entity
    name: Add entity
    level: pattern
    user_goal: Create a manageable organisational entity
    objects: [company, team, user]
    actions: [add, create, cancel]
    used_in: [Companies, Teams, Users]
    entry_points:
      - Page header primary action
    structure: Trigger → form → validation → create → feedback
    components: [Dialog, TextField, Button, Toast]
    states: [default, loading, error, success]
    permissions: company admin or above
    content_terms: [company, team, Add, Save]
    variants: [invitation, immediate creation]
    exceptions:
      - company creation requires onboarding metadata
    accessibility: focus return, labels, error association
    implementation_refs: []
    evidence: []
    maturity: emerging # emerging | established | deprecated
    health: needs-evidence # healthy | inconsistent | needs-evidence
    last_reviewed: "2026-09-09"
    decision_refs: []
```

Required fields: `id`, `name`, `level`, `user_goal`, `objects`, `actions`, `maturity`, `health`.

## Pattern document (`docs/ux/patterns/<id>.md`)

Include where applicable. Do not force irrelevant sections into simple patterns.

- Pattern name
- Short description
- User problem / goal
- When to use
- When not to use
- Anatomy
- Canonical behaviour
- Interaction sequence
- Default, loading, empty, error, success (when applicable)
- Validation and recovery (for input patterns)
- Accessibility
- Keyboard and focus behaviour (where interactive)
- Responsive behaviour (where relevant)
- Permission differences (where roles affect behaviour)
- UX writing (when the pattern contains UI copy)
- Examples (after implementation)
- Variants (once a legitimate variant exists)
- Anti-patterns (when recurring misuse is observed)
- Product surfaces using it
- Evidence (required for emerging or change proposals)
- Known limitations
- Related UX decision records (link, do not duplicate)

## UX decision record (`docs/ux/decisions/YYYY-MM-DD-short-name.md`)

Record a decision when a future reviewer or Agent would reasonably challenge the same difference again. Do not log every rejected colour suggestion.

Prefer superseding an accepted decision with a new record rather than rewriting its original rationale.

```yaml
---
id: UXDR-2026-09-09-teams-filtering
status: accepted # proposed | accepted | rejected | superseded | deprecated
date: 2026-09-09
pattern: data-table-filtering
scope:
  - teams
decision: keep-exception
review_when:
  - filter-count-changes
  - team-table-redesign
---
```

```markdown
# Keep advanced Team filters behind More filters

## Observation

What was observed.

## Context

Why the decision matters and relevant constraints.

## Evidence

What evidence informed the decision.

## Options

Only include meaningful alternatives.

## Decision

What was chosen.

## Rationale

Why.

## Consequences

What becomes easier, harder, or intentionally different.

## Rejected alternative

Where useful.

## Review condition

What would justify reopening the decision.
```
