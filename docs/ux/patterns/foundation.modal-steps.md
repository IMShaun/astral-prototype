# Modal steps

When one choice in a pop-up needs many more fields than the others, those fields move to a second step. The pop-up keeps its width. It slides to the new step, and the person can go back.

## User problem / goal

Make the common choice quick, and keep a pop-up short enough to scan, without hiding the fields that one choice needs.

## When to use

- One option in a pop-up needs its own set of fields, and the other options need almost none. For example, Export > Source data needs meter points, dates, values and a format, while Chart data, Image and PDF need nothing.
- The option has many settings, but most people keep the defaults. Give it a review step with Change stages (see below).
- Use no more than 2 stages. If a task needs more, it is a page, not a pop-up.

## When not to use

- Every option needs about the same fields. Show them on one step, below the choice.
- Only 1 or 2 extra fields are needed. Show them below the choice.

## Canonical behaviour

### Do

- Advance with an explicit primary button. When the step 2 option is selected, the step 1 primary button reads "Continue". Other options keep their final action ("Export") on step 1, so they are still 2 clicks.
- Give step 2 a Back icon button before the title (`protoModalHead(..., backAttr)`), like the Back icon on detail pages. Keep "Cancel" in the footer and the Close icon in the head, so both steps close the same way.
- Give step 2 a title that names the choice. For example, "Export source data".

### Review and Change stages

Export > Source data opens on a review, not on the fields. A repeat export is Continue, then Export.

- The review lists every setting as name and value rows, grouped under the stage that sets it: Data and dates, then Values and file (`protoExportReviewHtml`). Each group has a Change text button with the group name for screen readers. Show only the rows that apply, for example no Interval for Display readings.
- Under the groups, show the first 3 rows of the real file (`protoExportPreviewHtml`), built by the same code as the download.
- The footer holds Export and Cancel. Change is the only way into a stage, so there is no Customise button. Leave out the summary sentence, because the rows already say it.
- Change opens one stage. Its Continue and its Back both return to the review.
- Title each stage with its name, with no "Step 1 of 2", because the stages are not walked in order. Name stages by what they hold, not "Options" or "Settings".
- Group the settings that people adjust together. Dates and Interval share a stage. Format sits with Values, because it limits no other setting.
- Keep the summary sentence on the stages, so each change is confirmed as it is made.
- Back on the review goes to step 1.
- Check the dates on Continue from Data and dates, and on Export. A date error on Export opens Data and dates with the error, and Continue then returns to the review.
- Focus moves to Back when a stage opens, and to the Change button that left the review when it returns.
- Slide the body and the title in the direction of travel. Use about 16px and `--motion-slide` with `--ease-slide`, forwards from the right and back from the left. Play it once per step change. Use `is-step-next` or `is-step-back` on `.astral-modal`, and clear the direction in the store straight after the render.
- Turn the slide off for `prefers-reduced-motion`.
- Keep the modal width the same on both steps. Only the height changes.
- On step 2, move focus to the title (`tabindex="-1"`), so screen readers announce the new step. On Back, return focus to the selected option on step 1.
- Keep what the person entered on step 2 when they go back and forward again. Clear errors when the step changes.
- Show the summary line only on the step that has the final action.
- Esc and Cancel close the pop-up from either step. A pop-up opened again starts at step 1, with the last choice remembered.

### Don't

- Move to step 2 when the person selects an option. A radio that changes the context breaks WCAG 3.2.2 On input, and arrow keys would jump people forward while they browse the options.
- Use a text "Back" link in the footer as well as the Back icon. One way back is enough.
- Put three or more stages in a pop-up, or add a stage that holds only one or two fields.
- Add a "Customise export" button that walks every stage. It repeats what Change already does.
- Animate the width, or slide on every render.
- Hide settings behind "More options" or "Advanced". Time zone, data quality and units change how the values read, so they must show on the review even when nobody changes them.
- Use accordions or tabs for a series of settings. People open them one at a time and miss the closed ones, and tabs suggest the order does not matter.

## Accessibility

The step change is caused by an explicit button press, so there is no context change on input (WCAG 3.2.2). Focus moves to the new step's heading, and the dialog stays labelled by it. The Back icon has the accessible name "Back". Motion respects `prefers-reduced-motion` (WCAG 2.3.3).

## Product surfaces using it

- Export pop-up: Source data (commit `740f5dd`), with the review and Change stages from 19 October 2026

## Known limitations

- A repeat Source data export is 3 clicks (icon, Continue, Export), not 2, because the pop-up opens at step 1.
- The review can scroll on a short screen. The preview sits last, so the settings show first.

## Evidence

- User request on 6 October 2026: "when source data is selected, since more data is needed … animate the modal to the next step … allowing people to go back".
- Verified in the preview: Continue, slide forwards and back, title focus, Back focus, errors on step 2, dates kept, Esc from step 2, the width stays 576px, and Chart data and the People and Usage tables are unchanged.
- User decision on 19 October 2026, after research on staged disclosure for exports: "Short path plus Customise as steps inside the pop-up", with the stage names Data and dates, and Values and file. People had to scroll and open accordions to see the settings that matter.
- Verified on 19 October 2026: the review, Customise through both stages, Change and back to the review, Display readings rows, a date error from Export, Export from the review, and the preview matching the file's first 3 rows for every interval and Totals for.
- User correction on 19 October 2026: "Remove" on Customise export. The review footer is Export and Cancel, the stages lost "Step 1 of 2", and Continue and Back on a stage both return to the review.

## Related patterns / decisions

- [Stable controls](foundation.stable-controls.md)
- [Date fields](foundation.date-fields.md)
