# Pattern detection

Discovery before recommendation. Semantic task similarity before implementation similarity.

A modal named MeterPicker and a table checkbox may solve the same task with different code. Two Dialog instances may support fundamentally different tasks.

## Task signature

```
Goal:
Actor:
Object:
Action:
Risk:
Frequency:
Result:
Context:
Data scale:
Reversibility:
Permissions:
```

Mark unknowns as unknown. Do not fill gaps from generic SaaS convention.

## Task similarity fingerprint

| Dimension | Question |
| --- | --- |
| Goal | Are users trying to accomplish the same outcome? |
| Object | Are they acting on the same class of object? |
| Actor | Are permissions and expertise comparable? |
| Context | Are they in a comparable workflow? |
| Data | Are scale and data complexity similar? |
| Risk | Are consequences and reversibility similar? |
| Frequency | Is one a frequent expert task and the other occasional? |
| Device | Are interaction constraints comparable? |

## Pattern fingerprint

| Dimension | Examples of divergence |
| --- | --- |
| Entry point | page CTA vs row action vs overflow |
| Container | inline vs modal vs drawer vs full page |
| Selection | checkbox vs combobox vs dedicated picker |
| Sequence | one stage vs wizard |
| Primary action | placement, naming, enabled behaviour |
| Validation | on submit vs premature inline validation |
| Feedback | toast vs inline status vs none |
| Error recovery | preserve state vs discard state |
| Destructive protection | undo vs confirmation |
| Loading | skeleton vs spinner vs blocked page |
| Navigation | return path, breadcrumbs, back behaviour |
| Accessibility | focus, keyboard, semantics |
| Content | nouns, verbs, terminology |
| Responsive behaviour | same / adaptive / different interaction |

## Internal triage heuristic

Use only to find candidates. Do not show these numbers as scientific evidence. Tune after real product reviews.

```
Task Similarity
  user goal        0–3
  object/action    0–2
  actor/context    0–1
  data constraints 0–1
  risk             0–2
  frequency/device 0–1
                  ----
                  0–10

Pattern Divergence
  entry point      0/1
  container        0/1
  controls         0/1
  steps            0/1
  validation       0/1
  feedback         0/1
  recovery         0/1
  accessibility    0/1
  language         0/1
  responsive       0/1
                  ----
                  0–10
```

Starting rule: Task Similarity ≥ 7 and Pattern Divergence ≥ 3 creates an **inconsistency candidate**, not a finding.

## Four gates

```
Candidate divergence
      ↓
Is it required by accessibility/safety?
      ↓ no
Does a UXDR explain the difference?
      ↓ no
Is there a meaningful contextual difference?
      ↓ no
Is there evidence that convergence improves the task?
      ↓ yes
Candidate improvement
```

Then keep only the top recommendation for the visible response.

## Optional deterministic scans

Reuse project tooling. Do not install new packages without approval.

- Component usage: where Dialog, Drawer, Table, Toast, Checkbox are used
- Token consistency: raw spacing, colour, or type instead of tokens
- Card stack: sibling cards with no gap, or a one-off margin instead of a 16px stack. Details: [spacing.md](spacing.md)
- Library drift: a custom control when a named Astral piece exists. Run the library check. Details: [library-check.md](library-check.md)
- UX vocabulary: Company / Customer / Organisation for the same object
- Action vocabulary: Add vs Create, Remove vs Delete, Save vs Update
- State coverage: loading, empty, error, success on analogous flows
- Form patterns: label, helper, validation, required
- Table behaviour: search, sort, filter, pagination, selection, bulk actions
- Accessibility: existing lint, tests, roles, keyboard tests

In this desk, start with `prototype.js`, `library-site/`, and `data/design-systems.json` Patterns and Language.

## Analogous-task search

Before designing a target such as Add company, search for Add team, Add user, Add site, Add meter, Create report, Invite user. Search by user task and object or action semantics, not just component names.
