# Accessibility and privacy

## Accessibility

Target WCAG 2.2-aware copy. Copy cannot finish accessibility on its own.

- Provide a clear visible label for every input.
- Labels describe purpose, not only field type. Prefer Company name over Name when both exist.
- Placeholder text is not the only label.
- Give format or constraint instructions when needed.
- Identify errors in text. Suggest a correction when it is known.
- Errors never depend only on colour, iconography or position.
- Status and success copy convey the result in text.
- Refer to controls by their actual labels. Do not say the button on the right.
- Icon-only actions need an accessible name. Recommend a visible label where discoverability needs one.
- Disabled controls stay Infra Grey, not a faded colour. Disabled Save changes waits until they change a line.

Coordinate writing with implementation. Visible labels must be associated with their controls. The accessible name of a text-labelled control must contain its visible label. Dynamic status messages that do not receive focus need appropriate programmatic roles or properties; a visible toast alone is not enough.

Keep error messages and summaries consistent, associate errors with the relevant input, and retain entered information where supported. Do not claim those behaviours have been implemented because the recommended wording mentions them.

### Relevant WCAG 2.2 criteria

| Criterion | Writing and implementation implication |
| --- | --- |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) | Explain the purpose and any necessary format or constraint for user input |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) | Identify the affected input and describe the error in text |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html) | Provide known corrections unless doing so would jeopardize security or the purpose of the content |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html) | Include the visible text label in the accessible name |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) | Make applicable dynamic status messages available to assistive technology without requiring focus |

These are selected criteria, not a complete conformance checklist. W3C's Understanding documents explain the criteria. [Cognitive accessibility guidance on clear words](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o3p01-clear-words/) additionally supports common vocabulary and explanations for unfamiliar terms; it is not a separate WCAG conformance requirement.

Error shape:

1. What happened, or what information needs attention.
2. How to recover, when known.
3. What happened to work or a transaction, when relevant and confirmed.

Do not blame the user. Preserve the terminology used in the field label.

Distinguish correctable input errors from service failures, permission or eligibility restrictions, partial completion and uncertain outcomes. A restriction is not necessarily a mistake. Do not disclose sensitive account information to make an authentication error more specific.

For uncertain outcomes, name the uncertainty and supported status-check path. A timeout does not establish failure. Never claim saved, not saved, not charged, reversible or unchanged without product evidence. Do not suggest repeating a potentially completed payment or submission without a safe recovery path.

## Privacy

The skill can improve privacy copy. It must not determine the lawful basis or declare copy GDPR compliant.

- Do not call an interaction consent unless the product or legal context says consent is the lawful basis.
- Do not write By continuing, you agree… as a shortcut for optional consent.
- Do not invent processing purposes, retention periods, recipients, security claims or lawful bases.
- For optional consent, describe the purpose and action specifically and provide a genuine refusal path.
- If necessary facts are missing, output `LEGAL REVIEW REQUIRED: <missing fact>` instead of fabricating reassuring copy.

Safer when facts are supplied:

Allow Acme Energy to view Scottish Water data until 30 September 2027

Not:

Give third-party consent

Describe the access relationship. Do not infer the lawful basis. Third-party access and expiry dates are product concepts. Broker / TPI on that link is Viewer.

## Genuine choice

- Use neutral acceptance and refusal labels. No confirmshaming.
- Explain material costs, recipients, access scope and consequences before commitment, not only after the action or in optional help.
- Do not fabricate urgency, scarcity, recurring-charge terms, cancellation rules or a refusal path.
- Necessary friction can support informed decisions. A faster journey or higher conversion is not automatically a better experience.
- Keep product confirmation, legal review, accessibility review and comprehension research separate. None substitutes for the others.
