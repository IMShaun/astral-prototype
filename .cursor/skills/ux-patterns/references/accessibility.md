# Accessibility gate

Accessibility is a constraint, not an evidence vote. Use **WCAG 2.2** as the baseline.

An existing product pattern must **not** be protected if it violates an applicable accessibility requirement. “All our custom tables work this way” does not justify inaccessible keyboard navigation.

Do not mark a pattern **Established** until relevant accessibility requirements have been checked.

## Check where relevant

- Semantic structure
- Names and labels
- Focus order
- Focus visibility
- Focus not being obscured
- Keyboard operation
- Target sizing
- Status and error communication
- Redundant entry
- Alternatives to dragging
- Accessible authentication
- Contrast
- Information not conveyed by colour alone
- Scrollable regions. Native overflow. Keyboard reach if there is no tabbable descendant. Nested regions use `overscroll-behavior: contain`. `scrollbar-gutter: stable` so the bar never sits on a control. Do not hide the bar on a desktop content pane. Details: [scrollbars.md](scrollbars.md).

For complex widgets (dialogs, comboboxes, grids, trees, disclosures), check recognised ARIA Authoring Practices interaction models, not merely visual similarity.

## Data-heavy interfaces

A table that gains interactive cell controls may become a grid and acquire keyboard-management obligations. Distinguish ordinary tables (native table semantics) from interactive grids.

Interactive patterns need semantic and keyboard behaviour, not merely matching look.

## This product

Keep WCAG AA pairings from the IMSERV Brand Book. Black on white, white on black, cyan on black, black on cyan. Do not put cyan type on white. Filled primary buttons use white type. Quiet outlines are 1px Infra Grey B. Focus is a 2px black edge. Disabled controls are Infra Grey, not a faded colour. Status colour still waits. Do not invent a red.

Reuse existing lint, test, and a11y tooling. Do not install new a11y packages without approval.

If an accessibility or safety issue is the highest-priority finding, that is the one insight. Do not bury it behind a consistency recommendation.
