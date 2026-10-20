# Row actions

A table row that the user can change has a More button at its end. It opens a small menu with the row's actions, such as Edit and Delete. On a screen with a pointer, the button shows when the user points at or tabs into the row.

## User problem / goal

Change or remove one row without opening it, and without a column of buttons on every row. TMA lets ops end or remove a meter point on a company (gap H8).

## When to use

A table where each row has its own actions and the row itself does something else, or nothing:

- Admin, Companies, a company, Meters: Edit and Delete
- Settings, Users: the user actions
- Settings, Presets: the preset actions

## When not to use

- A row with one action. Make the row, or a single button, do it.
- Actions on many rows at once. Use a toolbar above the table.
- Touch screens. The button always shows, as there is no pointer to reveal it.

## Anatomy

- **More button**: three dots at the end of the row, named "More for" and the row's name.
- **Menu**: a small panel under the button with one button per action.
- **Row light**: the row takes the hover colour while the user points at it, tabs into it or has its menu open.

## Canonical behaviour

### Do

- Hide the More button until the user points at or tabs into the row. Keep it showing while its menu is open.
- Keep the menu inside the page. It floats above the next rows and is not cut off by the table.
- Stop a click on the button or menu from opening the row.
- Close the menu on Escape or a click outside, and put focus back on the More button.
- Use Edit for a change the record keeps, such as a new site or an end date. Use Delete only to remove a row added in error.

### Don't

- Hide the button on a touch screen.
- Put more than a few actions in the menu.
- Delete a record that has history when the user means it has ended. Point them to Edit and an end date.

### Why

A column of buttons on every row is noise. The button shows when the user is on the row, so the actions are there when needed. Ending a meter point keeps its history, which TMA needs. Deleting takes it off the list for good.

## Ending a meter point

- Edit has Site and End date. End date is the last day the meter point is with the company. Blank means it is staying.
- A future end date shows "Ends" and the date under the state.
- On or after the end date the state is Ended. The row stays on the list, and the State filter has Ended.
- Each change goes in the company Log.

## Accessibility

The More button has its own name with the row's name. It shows on focus as well as hover. The menu buttons are real buttons. Escape closes the menu and the modals and returns focus to where the user was.

## Product surfaces using it

Admin company Meters. Settings Users. Settings Presets.

## Evidence

- TMA gap H8 on 2026-10-20: the user asked for a hover state on a meter row, with a More menu holding Edit and Delete. Edit covers the site and an end date.

## Related patterns / decisions

- [Date fields](foundation.date-fields.md)
- [Related MPANs](foundation.related-mpans.md)
- [Stable controls](foundation.stable-controls.md)
