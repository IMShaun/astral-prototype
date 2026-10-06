# Modal steps

When one choice in a pop-up needs many more fields than the others, those fields move to a second step. The pop-up keeps its width. It slides to the new step, and the person can go back.

## User problem / goal

Make the common choice quick, and keep a pop-up short enough to scan, without hiding the fields that one choice needs.

## When to use

- One option in a pop-up needs its own set of fields, and the other options need almost none. For example, Export > Source data needs dates, a format and More options, while Chart data, Image and PDF need nothing.
- Use no more than 2 steps. If a task needs more, it is a page, not a pop-up.

## When not to use

- Every option needs about the same fields. Show them on one step, below the choice.
- Only 1 or 2 extra fields are needed. Show them below the choice.
- The extra fields are optional settings. Put them in a "More options" disclosure instead.

## Canonical behaviour

### Do

- Advance with an explicit primary button. When the step 2 option is selected, the step 1 primary button reads "Continue". Other options keep their final action ("Export") on step 1, so they are still 2 clicks.
- Give step 2 a Back icon button before the title (`protoModalHead(..., backAttr)`), like the Back icon on detail pages. Keep "Cancel" in the footer and the Close icon in the head, so both steps close the same way.
- Give step 2 a title that names the choice. For example, "Export source data".
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
- Put three or more steps in a pop-up, or add a step that holds only one or two fields.
- Animate the width, or slide on every render.

## Accessibility

The step change is caused by an explicit button press, so there is no context change on input (WCAG 3.2.2). Focus moves to the new step's heading, and the dialog stays labelled by it. The Back icon has the accessible name "Back". Motion respects `prefers-reduced-motion` (WCAG 2.3.3).

## Product surfaces using it

- Export pop-up: Source data (commit `740f5dd`)

## Known limitations

- A repeat Source data export is 3 clicks (icon, Continue, Export), not 2, because the pop-up opens at step 1.
- There is no step count ("Step 2 of 2"). With only 2 steps, the title and the Back icon are clear enough.

## Evidence

- User request on 6 October 2026: "when source data is selected, since more data is needed … animate the modal to the next step … allowing people to go back".
- Verified in the preview: Continue, slide forwards and back, title focus, Back focus, errors on step 2, dates kept, Esc from step 2, the width stays 576px, and Chart data and the People and Usage tables are unchanged.

## Related patterns / decisions

- [Stable controls](foundation.stable-controls.md)
- [Date fields](foundation.date-fields.md)
