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
- Give repeated elements the same size on every page that shows them, so they sit in the same place when people move between pages. Every summary card has a badge row (`--summary-mark`, 36px), so every card is 117px on Alerts, Reports, and Downloads. See [Summary cards](foundation.summary-cards.md).
- Reserve space with `min-height`, not `height` or `max-height`. Content that needs more room, such as a label that wraps on a narrow screen, must still grow the element instead of overflowing or being clipped.
- When something is taken out of a pane, such as a removed period row, nothing above it moves. A pane scrolled to the bottom keeps the lost height as bottom padding and gives it back only as it scrolls out of view (`protoScrollHold`, used by every render for `.astral-pane-body` and the stage).
- Treat a picker or choice that swaps the view below it, such as Settings for or the source cards (Follow the site, Set for this meter), as a control under this rule. Every element the views share must sit at the same left and top in every view.
- Fix the column widths of a table that switches content under tabs, with `table-layout: fixed` and a `colgroup`. The period tables do this, so From, To and Status stay put on every day, whatever each day holds.
- Show read-only and editable states of the same content with the same markup, and turn the controls off. A meter that follows the site shows the period table with disabled inputs and a disabled Add a period, so its header, rows and foot match the editor.
- When one view has a part the others do not, give every view the same part with its own choices. In Site settings, the site and every meter have a source cards panel in the same grid. The site has one card (Set for this site) and a meter two, so each card keeps its width and place. In Attributes the site has one card, Set for this site, so the fields start at the same place.
- Put an action that changes how the times are set in the head of the times panel, top right, opposite the panel heading. In Site settings, Use a preset and Stop using preset sit there for the site and every meter, so the button keeps its place when the mode changes. Use a preset opens a modal in two steps. First it asks for A full week or One day. Then it lists the saved presets of that kind. For One day, Continue opens a third step that shows the chosen day and Days checkboxes, so one preset can go on several days at once. The day open in the table starts ticked, and Use preset stays off until at least one day is ticked. Each preset shows on one line, with time running left to right from 00:00 to 24:00. Each day is one rounded bar framed by a hairline, and its periods join inside it with no gaps, filled like the status badges in the key. A week is seven small 20px squares with no day labels, and Saturday and Sunday sit together on a shaded tray to mark the weekend. A day is one taller bar with times below. The status key appears once above the list, and the times are screen reader text. The list also holds sample weeks and days after the user's own. Use preset copies the times into the section, and the user can still change them. Save preset sits to its left in every view as the secondary button, and the preset action is primary. It asks for A full week or One day and a name, then adds the preset to Your presets in the week and day selects.

### Don't

- Let a page action, notice, or count above the tabs push them down on one tab only.
- Let an optional part, such as an icon badge, change the height of one variant of a shared element. Reserve its space in every variant.
- Fix equal heights with `height`, `max-height`, or `overflow: hidden`. That trades a jump for clipped text or broken framing.
- Bold the selected tab if that makes it wider and moves the tabs to its right.
- Swap a control between two places, such as a header on one tab and a toolbar on another.
- Show a loading skeleton with a different height from the loaded state above a control.
- Swap an editable table for a plainer read-only table with fewer columns, shorter rows or no foot. The rows below shift on every switch.
- Add a panel in one view only, such as source cards that appear once a meter is picked. It pushes everything under it down.

## Accessibility

Supports WCAG 3.2.3 Consistent navigation, and people using magnification, a pointer with tremor, or switch access, who rely on targets staying where they were.

## Product surfaces using it

- Alerts > Activity, Settings, History. The tabs measured 29, 177 on all three after the fix. Before it, they dropped 4px on Settings.
- Reports > Reports, Downloads. 29, 177 on both.
- Summary cards on Alerts (Activity, Settings, History), Reports, and Downloads. All 117px since every card got a badge (commit `6e29f8f`). Before the first fix, cards with a type badge were 122px and the rest 110px.
- Site settings > Operational hours, Time of use and Attributes, Settings for the site, a meter that follows it, and a meter set on its own. Day tabs 190, table head 248, first row 288 and Add a period 432 in every view (commit `2044e20`). Before it, the table dropped 149px when a meter was picked, and a following meter had shorter rows and no Add a period.
- Site settings with source cards. Picker 61, cards 192 and body 362 for the site and a meter in every source. In Attributes, picker 151, cards 282 and fields 431 for the site and a meter.

## Known limitations

Pane tabs, tree items, and Work Desk stat strips have not been measured against this rule.

In Attributes on Site settings, the site view has group tabs and the full site form, while a meter shows only its rates. The content differs, but the panels start at the same place.

## Evidence

- User correction on 6 October 2026: switching tabs should never move them, so it does not feel like the control is running away (commit `b60b8f6`).
- User correction on 6 October 2026: filter cards keep the same height across pages, without causing overflow or framing problems (commit `431b040`). A wrapped label grew the card to 134px with no overflow.
- User correction, repeated: switching Settings for between the site and a meter made the schedule jump, and this rule had been asked for before (commit `2044e20`).
- User correction, repeated: the From column jumped between Saturday and Sunday because the period tables sized columns to their content (commit `7d9a422`). Every day now measures 272, 175, 175, 298, 52.

## Related patterns / decisions

- [Heading spacing](foundation.heading-spacing.md)