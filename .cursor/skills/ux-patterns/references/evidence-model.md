# Evidence and priority

Label evidence type and confidence separately. Do not conflate “a design system does this” with “research proves this.”

## Evidence classes

| Class | Meaning | Weight |
| --- | --- | --- |
| **Standard / constraint** | Applicable WCAG, security, legal, or safety requirement | Highest |
| **Direct product evidence** | User research, analytics, support data, observed task failure | Very high |
| **Established product pattern** | Repeated internal pattern with successful use | High |
| **Research evidence** | Relevant usability or HCI evidence | High, context-sensitive |
| **Convention** | Repeated reputable design-system or platform practice | Medium |
| **Product hypothesis** | Plausible improvement requiring testing | Low–medium |
| **Preference** | Mainly aesthetic or subjective | Lowest |

Never describe convention or preference as research proof. Never invent user research, analytics, requirements, or motivations. Mark unsupported rationale as **Product hypothesis**. Never present it as observation.

A recommendation can have strong external evidence and **medium** confidence because applicability to this product has not been observed.

## Confidence

How confidently the recommendation applies **to this product**:

- **High** — direct product evidence and/or a binding accessibility constraint, with comparable contexts
- **Medium** — strong internal pattern plus credible external evidence, but no direct user evidence
- **Low** — plausible hypothesis, incomplete product context, or primarily conventional support

## Priority (ordinal)

Recommend only one finding. Do not invent a decimal UX score.

| Priority | Type of finding |
| --- | --- |
| **Critical** | Accessibility blocker, unsafe action, or high-risk data loss |
| **High** | Repeated high-cost errors or serious task failure |
| **Medium** | Frequent workflow friction across important or reused patterns |
| **Normal** | Unexplained inconsistency with meaningful learning or efficiency cost |
| **Low** | Cosmetic inconsistency or subjective preference |

Within a tier, rank by user reach, task frequency, severity, reuse leverage, evidence confidence, and implementation effort.

Discard every candidate except the top recommendation from the visible response.

## External sources (supporting only)

Use after product inspection:

- WCAG 2.2 / WAI Authoring Practices
- Nielsen Norman usability principles (heuristics, not laws)
- GOV.UK Design System (start with what exists; useful, unique, evidenced)
- Material Design, Microsoft Fluent, Apple HIG
- IBM Carbon (components ≠ patterns; variants by dataset and workflow)
- Atlassian Design System (components first, then customise, then primitives, then custom)
- Shopify admin conventions
- Salesforce enterprise data interaction
- Relevant HCI evidence, treated as emerging unless it matches this context

Do not blindly transplant another design system’s visual style.
