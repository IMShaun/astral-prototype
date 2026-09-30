# Taxonomy

A **component is not a pattern**. Dialog, TextField, and Button are components. Invite a user is a pattern or flow composed from them.

| Layer | Definition | Energy-platform example |
| --- | --- | --- |
| **Foundation** | A low-level rule or design decision used throughout the interface. | Spacing, typography, colour tokens, focus treatment, content principles, date format, native overflow |
| **Component** | A reusable interface building block with bounded behaviour. | Button, checkbox, text field, modal, toast, table, combobox |
| **Pattern** | A reusable arrangement of components and rules that solves a recurring user problem. | Add entity, assign company access, filter a dataset, select meters, confirm an irreversible action |
| **Flow** | A particular sequence through one or more patterns that completes a task. | Add company → assign admin → configure access → confirmation |
| **Journey** | The broader user goal that may involve multiple flows, time periods, roles, or channels. | Onboard a new customer and make their energy data available to authorised users |

## ORCA as a structural lens

Use Object-Oriented UX ORCA to model product structure and find comparable tasks. Do **not** describe ORCA as a UX-writing style framework. Copy rules live in `.cursor/skills/ux-writing/` and [ux-writing.md](ux-writing.md).

| Letter | Meaning | Use here |
| --- | --- | --- |
| **O** Objects | Domain things | Company, Team, Site, MPAN, Meter, Report, User |
| **R** Relationships | How objects connect | belongs to, has access to |
| **C** Calls-to-Action | Principal verbs | Add, Assign, Export, Remove |
| **A** Attributes | Object metadata that matters to the task | name, role, expiry, channel |

Canonical objects and CTAs also stabilise terminology. If the object is Company, do not casually switch among Company, Organisation, Customer account, and Client unless those concepts actually differ.

## Product context to discover, not assume

This desk’s product is Astral, an enterprise energy-data platform. It may contain companies, teams, users, customers, third-party users, brokers / TPIs, permissions, company access, sites, portfolios, MPANs, meters, meter channels, energy data, graphs, reports, exports, scheduled reports, faults, jobs, notifications, filters, large data tables, and bulk actions.

Users may have access to multiple companies. Some portfolios may contain thousands of meters. Workflows may differ by role, permissions, dataset scale, or data source.

Do not assume any difference is incorrect until those contextual differences have been checked.

Stack, framework, Storybook, Figma, analytics, and a11y tooling are unspecified until discovered. In this repository, inspect `prototype.js`, `library-site/`, `data/design-systems.json`, and existing skills before assuming a product-repo stack.

## Maturity vs health

Track them separately.

**Maturity**

- **Emerging** — identified or newly introduced; needs validation across more than one context
- **Established** — reusable, documented, verified, and intentionally adopted
- **Deprecated** — should not be used for new work and has a migration target

**Health**

- **Healthy** — implementations substantially match documented behaviour
- **Inconsistent** — equivalent implementations have unexplained divergence
- **Needs evidence** — it is unclear whether the existing behaviour is effective

An established pattern can become inconsistent. An experimental one can be well implemented.
