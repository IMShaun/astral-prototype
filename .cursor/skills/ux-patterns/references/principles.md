# Principles

## Product evidence before invention

Study how this product already solves the task. Recommend from that. Do not start with another design system’s screens.

## Reuse → Improve → Adopt → Invent

| Stage | Question | Outcome |
| --- | --- | --- |
| **Reuse** | Does the product already solve this same user problem successfully under similar conditions? | Reuse that pattern and its components. |
| **Improve** | Does an existing pattern solve it, but the shared pattern has a material problem? | Improve the common pattern rather than fork it. |
| **Adopt** | Is there no suitable internal pattern, but a recognised external solution fits the task and constraints? | Adapt the external pattern using this product’s foundations and components. |
| **Invent** | Do internal and external patterns fail to address a validated product-specific need? | Propose a new pattern, initially **Emerging**, requiring evidence. |

## Consistency of user meaning before visual form

Two screens should normally converge when they represent the **same user intent under materially similar conditions**. They may diverge when data shape, risk, permissions, frequency, reversibility, device, or task complexity genuinely differ.

Consistency is not sameness. A modal is appropriate only when the interruption matches the task. A table may fit flat data while a hierarchy needs different semantics. Immediate filters can fit cheap, frequent criteria. Batch filters can fit costly or multi-criteria retrieval.

Before recommending convergence, ask internally:

- Are these genuinely the same user goal?
- Is the dataset equally complex?
- Is one action riskier or irreversible?
- Do the actors have different expertise or permissions?
- Is one task much more frequent?
- Is one interaction cross-site or cross-company?
- Does one operate on a hierarchy rather than flat data?
- Is there an intentional UX decision?
- Would making them identical actually make one task worse?

If a material contextual difference explains the variation, do not classify it as a problem merely for consistency.

## Precedence

**Accessibility / safety constraint → validated product need → established internal pattern → appropriate external convention → hypothesis → preference**

An internally consistent pattern does not get protected merely because it is consistent if it fails an applicable WCAG requirement. Native overflow and keyboard reach on a scroll region beat a custom scrollbar that matches the rest of the UI. Details: [scrollbars.md](scrollbars.md). Sibling cards use 16px. If they touch, the wrapper is wrong. Details: [spacing.md](spacing.md).

Do not invoke a respected design system as authority when that system was designed for a different context. External patterns are evidence, not laws. Nielsen Norman heuristics are broad rules of thumb. GOV.UK contribution practice starts with existing implementations. Atlassian’s composition sequence (system components, then customisation, then primitives and tokens, then custom UI) is the closest analogue to Reuse → Improve → Adopt → Invent.

## Why patterns work

Repeated interaction structures let people transfer previous learning. Shared solutions encode interaction, accessibility, language, responsive behaviour, and implementation once. That leverage must not become “all similar-looking screens should be identical.”

## Failure modes to guard against

- Consistency bias: every difference treated as a defect
- Design-system authority bias: “Material does X” as sufficient justification
- Visual-only analysis: missing validation, loading, keyboard, permissions
- Code-only analysis: same component assumed to mean same UX
- Accessibility inheritance: protecting an inaccessible repeated pattern
- Hallucinated user need: inventing why users behave a certain way
- False numerical precision: scores presented as science
- Audit dumping: many issues, none acted on
- Uncontrolled editing: changing UI during analysis
- Decision-log ossification: an old No forever
- Documentation drift: docs no longer match implementation
- Premature abstraction: one isolated solution becomes canonical
- Preference masquerading as research
- Prototype scope creep after approval
