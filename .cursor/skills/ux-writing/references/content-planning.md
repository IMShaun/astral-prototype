# Content planning

Plan around a user task and product states, not a list of spaces that need text. ORCA+ supplies semantic context. Evidence, interaction design and verified behaviour determine the content.

Use the full plan for a new or changed flow. For a small wording change, use only the relevant context and checks. Do not create planning documents unless requested; return the tables inline or update the existing artefact.

## Four connected artefacts

| Artefact | Purpose | Minimum content |
| --- | --- | --- |
| Content brief | Establish the problem before drafting | Task, audience context, evidence, product facts, risks and intended outcome |
| Journey-state map | Cover more than the happy path | Steps, triggers, meaningful states, decisions, consequences and supported recovery |
| Copy inventory | Make every content moment reviewable | Stable message ID, location, trigger, content job, fact source, wording, action and owner |
| Content rules | Keep a coherent system | Approved terms, voice and tone, shared patterns, accessibility and localization guidance |

Reuse existing artefacts and rules. Do not invent a parallel glossary or require four separate documents.

## Content brief

| Field | Record |
| --- | --- |
| User task | What the person is trying to achieve, not a feature name |
| Context | Relevant role, capability, scope, prior knowledge and circumstances |
| Evidence | Observed vocabulary, interviews, support issues, search behaviour or supplied research, with sources |
| Product truth | Confirmed behaviour, constraints, persistence, recipients, permissions and consequences, with sources |
| Unknowns | Assumptions and missing facts, explicitly distinguished from evidence |
| Risk | Financial, destructive, access-related, privacy, legal or other consequential decisions |
| Locale and surface | en-GB-oxendict by default, delivery context and relevant layout constraints |
| Intended outcome | What the person should understand or accomplish |
| Success measure | Observable behaviour and team-agreed acceptance criteria, not an invented threshold |
| Ownership | Content owner, relevant product or legal reviewer and review status |

Product documentation and user research answer different questions. Research can establish vocabulary or misunderstanding; it cannot prove the implementation saved a record. An implementation can prove a capability; it cannot prove that people understand its label.

Use `PRODUCT FACT REQUIRED: <missing fact>` when uncertainty changes a consequential recommendation. Use `LEGAL REVIEW REQUIRED: <missing fact>` for legal uncertainty. Draft unaffected content and identify blocked rows instead of inventing facts or blocking the entire task.

## Journey-state coverage

For every meaningful step, record the trigger, ORCA+ scope, what the system knows, what the person needs, and the supported next action. Consider these states; do not add behaviour just to fill the table.

| State | Content question | Guardrail |
| --- | --- | --- |
| First use | What can I do and what do I need? | Introduce only the concepts required for the task |
| Default or edited | What will this action do? | Name the actual action and disclose material consequences before commitment |
| Loading or pending | Did my action register and what is happening? | Do not announce completion or invent an estimated duration |
| Empty collection | Why is there nothing here and how can I begin? | Offer creation only when the person can create |
| No matching results | What did not match and what can I change? | Distinguish filters or search from an empty collection or loading failure |
| Input error | What information needs attention and how can I correct it? | Preserve field terminology and entered information where supported |
| Service failure | What failed and what can I do? | Describe the known failure, not a user mistake; retry only when supported and safe |
| Permission or eligibility restriction | Why is this unavailable and what is a supported alternative? | Do not treat a restriction as an invalid field or infer access from a role name |
| Partial completion | What completed, what did not, and what remains? | Identify scope and prevent duplicate actions |
| Uncertain outcome | Did the operation complete and how can I check? | A timeout is not proof of failure; do not assert saved, not saved or not charged |
| Success | What completed and what happens next? | Confirm only the verified outcome and provide relevant next steps |
| Cancellation or destructive action | What stops or changes, for whom, and can it be reversed? | Do not assume rollback, refunds, permanent deletion or undo |

Include stale data, expiry, interrupted sessions, notifications or AI-generated suggestions when relevant. Mark other states not applicable with a reason. For AI, distinguish a suggestion, a draft, a verified answer and an action already taken.

## One content moment

Assign a content job before choosing words. Common jobs are orienting, explaining, requesting input, supporting a decision, confirming and helping someone recover.

| Inventory field | Question |
| --- | --- |
| Message ID and location | How is this message identified and where is it used? |
| Trigger and state | What causes it to appear? |
| User question and content job | What must it help someone understand or do? |
| Known truth and source | What can the product truthfully say here? |
| Required information | What must be understood before acting? |
| Wording and next action | What is shown and what does the action actually do? |
| Delivery and accessibility | When is it shown, how long does it remain, and how is it available to assistive technology? |
| Localization context | What do the message, placeholders, numbers and scope mean to a translator? |
| Owner, version and review | Who maintains it, and what evidence or decisions support it? |

Use an existing string key when available. A proposed key is a proposal, not proof that it is implemented. Treat length budgets as layout warnings, never a reason to remove necessary information.

## Worked planning example

Example task: add a team inside a known company. The glossary establishes object names, but does not prove the following runtime states or recovery capabilities. Confirm each condition before applying the wording.

| Proposed ID | State and required fact | User question | Draft wording |
| --- | --- | --- | --- |
| team.add.action | Creation is available in the established company scope | What will this do? | Add team |
| team.add.pending | The request is still in progress | Did my action register? | Adding team |
| team.add.complete | Creation and persistence are confirmed | Is the team added? | Team added. |
| team.add.failed | Creation is confirmed unsuccessful and retry is safe | How can I recover? | We could not add the team. Try again. |
| team.add.uncertain | Completion cannot be confirmed and the person can check the team list | Should I repeat the action? | We could not confirm whether the team was added. Check the team list before trying again. |

If the team list cannot be checked, do not ship that recovery instruction. Record the missing recovery path for the product owner. Do not invent a save guarantee, an undo feature or access changes because a template sounds reassuring.

## Review and testing

Review the words inside the interaction. Put constraints next to relevant inputs and material consequences before commitment. If the control needs lengthy operating instructions, investigate the interaction rather than adding more prose.

Use realistic, neutral tasks with representative participants. Do not reveal the answer in the task. Observe behaviour before asking follow-up questions such as:

- What do you expect to happen if you choose this action?
- What does this term mean here?
- What happened, and what would you do next?
- How would you explain the cost, access scope or consequence in your own words?

Do not present these research prompts as questions to the product stakeholder. They are suggestions for a test plan.

Track unaided task completion, comprehension of consequential information, successful recovery, repeated actions or submissions, and related support needs. Preference and satisfaction are useful secondary evidence. Conversion alone does not establish informed choice.

Agree success criteria with the team before comparing alternatives. A small qualitative study can reveal misunderstandings but does not estimate a population-wide success rate. Readability and lint are diagnostics, not proof of understanding. Do not apply historic web-writing improvements as a promised product uplift.

## Proportionate release gate

| Check | Evidence required | When evidence is missing |
| --- | --- | --- |
| Product truth | Consequential claims match confirmed behaviour and scope | Block affected claims and identify the fact or decision required |
| State coverage | Relevant states, supported recovery and known outcomes are mapped | Identify gaps; do not manufacture capabilities |
| Writing quality | Terms, tone, instructions, consequences and length warnings reviewed in context | Revise wording or escalate the interaction problem |
| Accessibility and localization | Relevant implementation checks and translation context reviewed | Mark implementation or language QA not checked; do not imply compliance |
| User understanding | Proportionate comprehension or task evidence for the risk | Provide a test plan; do not label untested copy proven |
| Maintenance | Owner, version, review status and monitoring route identified | Record ownership or monitoring as an open decision |

An existing low-risk label change can use a lightweight review and relevant existing evidence. Payments, deletion, permissions, privacy and other high-stakes decisions need stronger product confirmation and comprehension evidence. No invented universal sample size or readability score is a release gate.

Report checked, needs confirmation and not checked separately. If the required evidence is unavailable, deliver a recommendation with open decisions, not a claim that the release gate passed.

Publish only when relevant review is complete. Monitor outcomes and return to the right problem: wording, interaction, missing user evidence or missing product facts. Do not send every issue back to a copy rewrite.

## Research basis

These sources inform the planning method; they do not override Astral terminology or establish Astral capabilities.

| Source | What it supports | Evidence boundary |
| --- | --- | --- |
| [GOV.UK writing for user interfaces](https://www.gov.uk/service-manual/design/writing-for-user-interfaces) | Task language, short direct content, and fixing an interaction before explaining it | Service guidance and conventions, not a universal brand voice |
| [GOV.UK error messages](https://design-system.service.gov.uk/components/error-message/) | Specific recovery, field terminology and retaining entered information | Component guidance; confirm actual behaviour and supported recovery |
| [NN/g how people read online](https://www.nngroup.com/articles/how-people-read-online/) | Scanning, front-loading and the influence of task and motivation | Eyetracking findings, not proof that nobody reads or a conversion forecast |
| [NN/g testing content](https://www.nngroup.com/articles/testing-content-websites/) | Representative participants, realistic tasks and comprehension follow-up | Research-method guidance; preference alone does not establish understanding |
| [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Applicable accessibility success criteria | Implementation-dependent conformance; copy review alone cannot establish it |
| [Unicode message formatting](https://unicode-org.github.io/icu/userguide/format_parse/messages/) | Complete messages, named variables and locale-aware plural handling | Internationalization guidance, not translation-quality evidence |
| [CMA online choice architecture evidence review](https://www.gov.uk/government/publications/online-choice-architecture-how-digital-design-can-harm-competition-and-consumers/evidence-review-of-online-choice-architecture-and-consumer-and-competition-harm) | Genuine choice, deceptive pressure and the distinction between helpful and harmful friction | Evidence synthesis, not a determination of legal validity for a particular flow |
| [Microsoft human-AI interaction guidelines](https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/) | Accurate expectations, uncertainty, correction and consequences in AI interactions | Design guidance, not proof of a particular model's accuracy |
