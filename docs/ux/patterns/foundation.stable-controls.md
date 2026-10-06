# Stable controls

Tabs, switches, and other controls people click to move between items never change position when they are used. The control stays still and only the content around it changes.

## User problem / goal

Click through tabs or options without chasing them. If a control moves after a click, the next click misses or lands on the wrong item, and the interface feels like it is running away.

## When to use

Anything people click repeatedly to switch between items:

- Page tabs, such as Alerts > Activity, Settings, History and Reports > Reports, Downloads
- Segmented controls and tab pills in panes
- Tree and list items that switch the detail view
- Summary stat cards used as filters
- Pagination, previous and next

## When not to use

A control may move when the person asks for it, for example by scrolling, resizing the window, or opening a panel on purpose.

## Canonical behaviour

### Do

- Reserve the height of anything above the control that can appear or disappear between states. The page head has `min-height: var(--control-height-sm)` so tabs below do not jump when a tab adds or drops a page action such as "Add an alert".
- Keep the same structure above the control in every state it switches between. If one state has a button and another does not, the slot keeps its size.
- Keep tab widths fixed between states. The selected state must not change the font weight, padding, or border width in a way that changes the width.
- Put content that changes size below the control, not above it.
- Check by clicking every option in turn and measuring each control's position in the browser. Every option should report the same left and top.

### Don't

- Let a page action, notice, or count above the tabs push them down on one tab only.
- Bold the selected tab if that makes it wider and moves the tabs to its right.
- Swap a control between two places, such as a header on one tab and a toolbar on another.
- Show a loading skeleton with a different height from the loaded state above a control.

## Accessibility

Supports WCAG 3.2.3 Consistent navigation, and people using magnification, a pointer with tremor, or switch access, who rely on targets staying where they were.

## Product surfaces using it

- Alerts > Activity, Settings, History. The tabs measured 29, 177 on all three after the fix. Before it, they dropped 4px on Settings.
- Reports > Reports, Downloads. 29, 177 on both.

## Known limitations

Only page tabs have been measured. Pane tabs, tree items, and stat cards have not been audited against this rule.

## Evidence

User correction on 6 October 2026: switching tabs should never move them, so it does not feel like the control is running away (commit `b60b8f6`).

## Related patterns / decisions

- [Heading spacing](foundation.heading-spacing.md)