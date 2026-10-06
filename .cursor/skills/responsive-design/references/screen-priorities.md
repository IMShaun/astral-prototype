# What to keep on each kind of screen

When space runs out, keep the task. Drop decoration first.

## Order of cuts

1. Decorative spacing and oversized padding
2. Secondary panels. Collapse them behind a button
3. Supporting metadata. Stack it under the name
4. Less-used filters. Move them into an accessible panel
5. Never first: labels, instructions, data, or the primary action

## By area

| Area | Keep | How |
| --- | --- | --- |
| **Portfolio and graphs** | Selected scope, date range, units, and the main analysis | Make secondary panels collapsible. Do not squeeze the graph between permanent sidebars |
| **Tables** | Decision-critical columns | Put them first. Unavoidable sideways scroll stays inside the table, not the page |
| **Filters** | Which filters are on | Keep active filters visible. Move less-used options into a panel when space is short |
| **Reports and documents** | Name, status, and actions | Stack supporting metadata before making text smaller |
| **Modals and forms** | The fields and the footer actions | Fit the available height. Body scrolls. Footer stays reachable. No fixed-height dialog that clips its footer |
| **Navigation** | Clear destinations | Compact or collapsible when needed. Names stay understandable |
| **Typography** | Readable labels, instructions, and data | Cut spacing and spare panels before reducing text |

## Common breaks to look for

- A side rail plus a filter pane plus a breakdown leaves the graph a sliver at 1280
- `min-width` on a table wrapper forces the whole page sideways
- A modal with `height` instead of `max-height` hides Save below 640 tall
- A sticky header plus sticky filters eat half of a 640 tall viewport
- Tabs or pills that overflow with no visible way to the hidden ones
- Long reading text stretching across 1920

Scroll owners follow `.cursor/skills/ux-patterns/references/scrollbars.md`. One native scroll owner per view.
