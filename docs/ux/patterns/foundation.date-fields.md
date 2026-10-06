# Date fields

Every place that asks for a single date for a data file uses the same control: a typed date (dd/mm/yyyy) with a calendar that opens below it. The labels, the calendar and the error wording are the same everywhere.

## User problem / goal

Choose the dates for a data file quickly, whether by typing them or by picking them on a calendar, without learning a different control on each page.

## When to use

- Reports > Date range > Exact dates ("Data from", "Data to") and Schedule ("First send on")
- Export > Source data, step 2 ("Data from", "Data to", filled with the graph's dates)
- Any new field that asks for a single day for data

## When not to use

- The graph's date picker (`protoDateControl`). It sets a range for viewing with presets and a two-month calendar. That is a different task.
- Renewal dates on company settings. They are an admin record, not a data range, and keep the plain typed field.

## Canonical behaviour

### Do

- Render with `protoReportDayCalHtml(value, label, field, error)`. Register the field in `PROTO_REPORT_DATES` with its input name and store key, and add `export: true` (or a new gate in `protoDayCalAllowed`) when it is not a report field.
- Label a data range "Data from" and "Data to".
- Open the calendar when the person clicks or tabs into the field. Typing still works while it is open, and the calendar follows the typed month.
- Disable future days for data ranges. Only "First send on" allows the future.
- After a pick, close the calendar and put focus back on the field without reopening it (`protoFocusDayCalInput`).
- Check the dates when the person submits, not while typing. Show the error under the field, link it with `aria-describedby`, set `aria-invalid`, and move focus to the first bad field without opening its calendar.
- Name the field in the error: "Enter a Data from date.", "Enter Data from as dd/mm/yyyy.", "Data from must be today or earlier.", "Data to must be the same as or after Data from."
- In a pop-up, Esc closes an open calendar first. A second Esc closes the pop-up.

### Don't

- Build a second date input for a new page. Reuse this one so the calendar, masking and errors stay in step.
- Use bare "From" and "To" labels for a data range. They do not say what the dates apply to.
- Open the calendar when the code moves focus to the field, for example after "Change", a pick, or an error. Only the person's own click or Tab should open it.
- Let Esc close the whole pop-up while a calendar is open inside it.

## Accessibility

The input has `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls` for its calendar, and the calendar is a labelled dialog. Errors use `role="alert"` and `aria-describedby`. Supports WCAG 3.3.1 Error identification, 3.3.3 Error suggestion and 3.2.1 On focus (no surprise context change when focus is moved by the code).

## Product surfaces using it

- Reports editor: Exact dates and First send on
- Export pop-up: Source data dates (commit `7875e05`)

## Known limitations

- The 62-day prototype limit (`PROTO_REPORT_FILE_DAYS`) is applied silently to Source data. A product rule and a message are still needed.
- The calendar's store keys (`prototypeReportCal*`) still carry the Reports name.

## Evidence

- UX patterns review of the Export pop-up on 6 October 2026. Source data used plain From and To fields while Reports used this control for the same task. The user approved reuse.
- Verified in the preview: typing, calendar pick, future days disabled, errors linked and announced, Esc order, and Reports Exact dates unchanged. The pick no longer reopens the calendar in Reports either.

## Related patterns / decisions

- [Stable controls](foundation.stable-controls.md)
