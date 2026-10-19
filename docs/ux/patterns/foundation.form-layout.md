# Form layout

Every field in one form uses the same label layout, and the spacing tells people which label owns which control.

## User problem / goal

Scan a form from top to bottom without working out which label goes with which control, or where one section ends and the next begins.

## When to use

Any form, pop-up or disclosure that holds fields, radio groups or read-only values next to editable ones. For example, Export > Source data, the Reports editor and the settings forms.

## When not to use

- A read-only summary with no editable fields, such as the Dates and Format facts on Export step 1. A two-column `dl` (label left, value right) is fine there, because every row is the same kind.

## Canonical behaviour

### Do

- Stack every label above its control: `.astral-field` with the label `span` first, or a `fieldset` with a `legend`.
- When a step exists to collect a value, show its fields straight away. Do not hide them behind a read-only value and "Change" (Export > Source data shows Data from and Data to, filled with the graph's dates).
- Outside such a step, a read-only value with an action is a stacked field too: label above, then the value and the text button in one bordered row, styled like the Settings colour rows (`.astral-brand-row`: 1px strong border, 12px radius, 12px 16px padding, 60px minimum height). The value fills the left and the action sits on the right.
- Centre the value and the text button on that line (`align-items: center`). The button is 36px tall for the target size, so baseline or top alignment leaves the text higher than the button label.
- Space the levels in this order, smallest first:

| Gap | Size |
| --- | --- |
| Label or legend to its control | 4px (the `legend` margin) to 8px (the `.astral-field` gap) |
| Disclosure head to its first section | 8px |
| One field or section to the next | 16px, the same as `.astral-modal-body` |

- Centre a checkbox or radio on the first line of its label, the heading, not on the label and hint together. When there is a hint, top-align the row (`align-items: flex-start`) and give the 16px box `margin-top: calc((1lh - 16px) / 2)`. When there is only a label, `align-items: center` does the same job.
- Choice cards (`.astral-report-type`) whose names explain themselves show the name only. Drop the hint, so every card in the set is the same size. The Date range cards (Exact dates, Common range, Custom range) need no hint, because the fields below them show what each one does.
- Keep every choice card name on one line. If a name wraps, widen the pop-up rather than shorten the name. The cards share `grid-auto-rows: 1fr`, so one wrapped name makes every card taller. The Export pop-up is 40rem wide (`.astral-export-pick`) so Common range fits beside the other two.
- Give a disclosure body (`{modifier}-body` from `protoAccordion`) its own grid and gap. It has no spacing of its own, so sections inside it touch.
- When a form has many settings that most people keep, show them first as a review of name and value rows, and put the fields on stages (see [Modal steps](foundation.modal-steps.md)). Export > Source data does this.
- Keep the choices that change what the file holds or how it reads on the review, never behind a fold. Interval, Values, Totals for, Electricity units, Time zone and Data quality each have a row.
- Group optional extra columns under a legend that says what they add, such as "Extra columns" for quality flags and source IDs. Do not call it "More options".
- Show a set of checkbox cards that explain themselves, such as Include quality flags and Include source IDs, with the name only. Put them side by side on the same 2 columns as the field pairs above (`.astral-export-extras`), so they line up and sit 16px apart, like the pairs.
- When a choice group sits among plain labels, give it a plain label too (`protoRangeFieldsHtml` `label`). Export's date cards are labelled Dates, not "How do you want to set the dates?".
- Measure the rendered gaps in the browser after the change.

### Don't

- Mix side labels (a 6rem label column) and stacked labels in one form. The left edges of the labels and the controls stop lining up.
- Put a heading as close to the section above as to its own content, or closer. A 0px gap between sections with 4px under each legend makes each heading look like it belongs to the section above.
- Let a text button decide the line height of the value next to it without centring them.
- Nudge a checkbox or radio with a fixed pixel margin, such as `margin-top: 2px`. It was 2px high on a 24px line and drifts further when the text size changes.
- Add a hint to a choice card that only repeats its name, such as "Pick a start and end date" under Exact dates. The cards grew to 149px tall for 2 words each.
- Let a choice card name wrap onto a second line. Common range wrapped by a few pixels at 36rem, and the 1fr rows made all 3 cards 82px instead of 58px.
- Hide a choice that changes what the file holds behind a closed fold that does not say what it holds. Interval, Values and Show data as sat in More options, so people exported half-hourly values for each meter point without seeing they could change it.
- Centre the box on the whole label and hint block. With a hint, the box falls between the heading and the hint and belongs to neither.
- Stack full-width checkbox cards with a hint under each, 16px apart, below a legend 4px above them. Extra columns was 194px tall, and each card looked further from the next than from its heading.

## Accessibility

Stacked labels keep the label and the control together when the text is enlarged or the pop-up is narrow (WCAG 1.4.10 Reflow). Proximity groups each label with its control, which supports WCAG 1.3.1 Info and relationships alongside the `fieldset`, `legend` and `label` markup.

## Product surfaces using it

- Export pop-up, Source data: the review rows and the Data and dates, and Values and file stages (19 October 2026)
- Date range choice cards in Reports and Export, name only (commit `44e3e9a`)
- Follow site or Set for this meter only choice cards in Site settings and a meter's own settings, with a short hint
- Checkbox rows with a hint: the Reports consent row and multi-select options with a note
- Checkbox cards with the name only: Include quality flags and Include source IDs in Export (side by side under Extra columns) and Include quality flags in the Reports editor (19 October 2026)

## Known limitations

- Only the Export pop-up has been checked. Reports editor sections and settings forms have not been audited.
- Legends use a 4px margin and `.astral-field` uses an 8px gap. Both are within the label range, but they are not yet one token.

## Evidence

- User correction on 6 October 2026: "Can you sort the alignment issues here" on the Source data Dates row. The label sat in a side column, while Format was stacked, and the date sat above the centre of "Change".
- User correction on 6 October 2026: "You might as well just show the to and from fields" on the read-only Source data dates. Step 2 exists for the dates, so the Change step was an extra click.
- User correction on 6 October 2026: "Headings should be more closely spaced than gaps between other sections or content" on More options. The sections were 0px apart, with 4px under each legend.
- User correction on 6 October 2026: "take out the sub text so they can all be the same size" on the Date range cards, then "Make the modal wider so it can allow the common range to fit on one line". Measured after: 3 cards at 189 by 58px, each name on 1 line.
- User correction on 6 October 2026: "Checkboxes and radio buttons in these circumstances need to be centre aligned with the text on the right (heading)" on "Include source IDs". The box centre sat 2px above the centre of the label line.
- UX patterns and UX writing review on 19 October 2026, approved by the user: "make it obvious to the user that they have important filters and options to choose" without showing everything at once. The Data extract report already showed Interval and Values openly, while Export hid them in More options.
- User feedback on 19 October 2026: "the user has to scroll and open accordions to actually see the important stuff". The sections became a review with Customise stages.
- User correction on 19 October 2026: "Spacing between cards is weird and remove the sub text" on Extra columns. Measured after: 2 cards at 283 by 50px, side by side, lined up with the Electricity units and Format columns, each box centred on its label.

## Related patterns / decisions

- [Heading spacing](foundation.heading-spacing.md)
- [Modal steps](foundation.modal-steps.md)
- [Date fields](foundation.date-fields.md)
