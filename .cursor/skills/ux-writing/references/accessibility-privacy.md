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

Error shape:

1. What happened, or what information needs attention.
2. How to recover, when known.

Do not blame the user. Preserve the terminology used in the field label.

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
