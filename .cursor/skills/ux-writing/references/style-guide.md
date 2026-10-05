# Style guide

en-GB-oxendict. British English with Oxford spelling. Product glossary outranks this file.

## Voice

| Dimension | Default | More formal | More informal |
| --- | --- | --- | --- |
| Clarity | Direct | Direct | Direct |
| Vocabulary | Everyday | Everyday, slightly more neutral | Everyday |
| Personality | Calm | Restrained | Warm |
| Humour | None | None | Normally none |
| Contractions | Avoid by default for global copy | Avoid | Allow selectively after testing |
| Technical jargon | Only established user terminology | Same | Same |
| CTA | Verb + object where useful | Same | Same |

Serious, destructive, privacy or permission copy stays on the default, not the informal.

Keep the voice stable but adapt tone to the task, risk and circumstances. Choose vocabulary from evidence, not demographic stereotypes. Short, friendly and conversational are not synonyms for clear.

Clarity, conciseness and consistency are useful checks, not a complete quality model. Accuracy, necessary context, accessibility, consequences and recovery outrank brevity or personality. Design for scanning with descriptive headings and useful information first, without assuming nobody reads.

| Situation | Neutral | More formal | More informal | Do not use |
| --- | --- | --- | --- | --- |
| Create team | Add team | Add team | Add team | Let’s build a team! |
| Saved | Changes saved | Changes have been saved | Saved | Success!!! |
| Missing name | Enter a team name | Enter the team name | Add a team name | Oops! You forgot the name |
| Remove member | Remove member? | Confirm member removal | Remove member? | Kick them out? |
| Permission | Allow access to reports | Grant report access | Let this user view reports | Give access when scope is ambiguous |
| Failure | Could not export data. Try again. | The export could not be completed. Try again. | We could not export the data. Try again. | Something went wrong :( |

Confirm changes only replaces Save changes when confirmation is the action.
The failure examples assume confirmed failure and a safe, supported retry. For uncertain outcomes, use the separate pattern in [templates.md](templates.md). Tone variants must not change capability, scope or outcome.

## Spelling

Prefer organize, organization, localization, prioritize.
Prefer colour, behaviour, centre, licence.
Prefer analyse, analysis.

Do not Americanize colour or behaviour. Do not write organize as organise.

## Case and punctuation

Sentence case on titles, labels, buttons, tabs and banners.
Full stops in Astral product UI, not colons, semicolons or em dashes.
Question marks only on genuine questions, such as Remove member?

On Home metric cards, the supporting line under the figure starts with a capital letter. Sentence case, not title case. Prefer Sites need action today, not sites need action today or Sites Need Action Today. If the line starts with a number or symbol, leave the following word in sentence case: 3.1 percent below last year. Open stays on its own row.

## Preferred words

| Prefer | Usually avoid | Reason |
| --- | --- | --- |
| use | utilize | Shorter |
| start | commence | More familiar |
| help | assist | More familiar |
| about | approximately | Unless mathematical precision matters |
| add | create/add a new | Avoid unnecessary words |
| change | modify | Unless modify is established terminology |
| remove | delete | Distinguish reversible removal from permanent deletion |
| choose | make a selection | Direct |
| save | persist | User language |
| try again | retry operation | Plain language |
| need | are required to | Shorter where meaning is administrative |
| can | may be able to | More direct for genuine possibility |

Use Delete only when the action is permanent. Use Remove when they can put it back.

## Flag or rewrite

utilize, commence, in order to, please note, simply, obviously, easily, just, oops, forbidden, illegal.

Do not ship Something went wrong with no recovery.
Do not ship Click here when the action can be named.
Do not ship Enter a valid {field} when the constraint is known. Prefer Enter an email address in the format name@example.com.

invalid can sit in technical diagnostics. Do not blame the person in user-facing errors.

Continue and Next are acceptable for progress through a clearly explained flow. They must not conceal payment, publication, submission, access changes or deletion. Explain the actual consequence before commitment.

Do not force positive language when the truth is uncertain. Confirm only known outcomes. A clear fallback can acknowledge an unknown cause without inventing one, but must include the supported next step when available.

## Length budgets

Warn. Do not silently cut.
Remove unnecessary wording, not information required to decide or recover. Explain a budget overrun and recommend layout changes when a shorter version would lose meaning.

| Component | Preferred budget | Guidance |
| --- | --- | --- |
| CTA or button | 1–3 words, ≤24 characters | Verb first. Name the action |
| Navigation or tab | 1–3 words, ≤24 characters | Use the established object name |
| Field label | 1–5 words, ≤32 characters | Name the information asked for |
| Modal title | ≤48 characters | State the task or consequence |
| Tooltip | 1 sentence, ≤100 characters | Explain unfamiliar behaviour, not obvious UI |
| Help text | 1 sentence, ≤140 characters | Explain a requirement or consequence |
| Success or toast | ≤100 characters | Confirm the outcome. Omit redundant praise |
| Inline error | ≤160 characters | Problem and recovery |
| Home card subtext | 1 sentence, ≤80 characters | First letter capital. Sentence case, not title case |
| Card line | 1 sentence, ≤120 characters | The one fact that helps someone pick the card. See Card lines |
| Empty-state title | ≤40 characters | Describe the state |
| Empty-state body | ≤140 characters | Explain the next meaningful action |
| Onboarding title | ≤48 characters | One goal |
| Onboarding body | ≤160 characters | One idea or action |

Translation can grow. Design for wrap. Recommend pseudolocalization rather than truncating source.

## Card lines

The card line is the text under a card title. It goes on every card that stands for something you can open, such as a component, user group, tool, insight, project, report, move, or term.

- Say the one fact that helps someone pick this card: what it is for, who it is, or what they find inside.
- Write one sentence of 120 characters or fewer. Aim for 40 or more. A shorter line is fine if it is specific. Home card subtext keeps its 80.
- Do not repeat the title.
- Leave specs (px, colours, tokens, states), steps, history, and who said it for the detail page.
- Name something specific. Do not write various, things, information about, manage, allows you to, helps you, and more, or etc.
- Use sentence case and end with a full stop.
- If the source text is longer, add a short `card` field. The detail page keeps the full text. A Language term uses what to say, or else the first sentence of its note.
- The Work Desk warns in the console when a card line is over 120 characters. It does not cut the text.

Blocks that are the page content, such as a guide panel or the React handover, are not card lines. Use the help text budget there.

## Library and work-facing copy

The Astral library is for people putting files into the product repo. Keep it work-facing. No Uber, no Base Gallery, no desk names. A component file is a suggested name in the product repo, not a folder they can open.

Icon-only actions need an accessible name. Recommend a visible label where people would miss the control.
