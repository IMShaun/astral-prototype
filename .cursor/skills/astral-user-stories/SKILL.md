---
name: astral-user-stories
description: Write, split, import and improve Astral user stories, in the prototype Library (library-site/features.json, with Play demos) and in Azure DevOps, from existing stories, prototype requirements or meeting feedback. Use for Library feature stories and their animated demos, concise developer handoffs, FE/BE boundaries, concrete acceptance examples, dependencies, readiness, estimates, media and refinement.
---

# Astral user stories

Build on the current Azure stories and latest explicit refinement decisions.
Later decisions supersede earlier readiness and estimation notes, not the
underlying requirements or history. FE and BE remain separate sibling stories.
The goal is the shortest clear developer handoff, not the shortest word count.

## Library stories and Play demos

Stories start in the prototype Library, then move to Azure. To write or update
Library stories, follow [`references/library-stories.md`](references/library-stories.md)
in full. It covers the feature and story JSON, the writing rules, Open in
prototype steps, the demo capture tool, checks and the report back. It also
has a short starter prompt for someone new. The splitting, estimation and
readiness rules below apply to Library stories too.

## Improve the existing baseline

- Editing this skill or reviewing stories is not permission to change Azure.
  For skill-only or read-only requests, do not update descriptions, criteria,
  Comments, links, fields, estimates or attachments, and do not create work.
- Inspect the current layout across the relevant backlog and read representative
  FE, BE, component and unresolved stories before proposing presentation changes.
  Improve sound existing sentences instead of regenerating every description.
- Retain the familiar User story, In scope, Out of scope, Dependencies and
  readiness, Acceptance criteria and Source/media structure where useful.
  Put the implementation outcome and completion rules before supporting history.
- Give each fact one appropriate home. Do not repeat a delivery-boundary essay
  in both Description and Acceptance Criteria, or append another full
  refinement record whenever a decision changes.
- General meeting instructions, state-management rules and sizing methodology
  belong in this skill, not in a mandatory Before refinement paragraph on every
  card. Keep story-specific decisions/history in Comments or linked references.
  Do not erase existing history or lose unique requirements when simplifying.
- Include only relevant boundaries: do not copy Site settings rules into
  unrelated Alerts work or frontend meeting instructions into backend criteria.
- These are authoring/review checks, not ten new mandatory story sections.
  Omit empty or repetitive sections, not required behavior. Do not use arbitrary
  word counts, scenario limits or a bigger template as a substitute for clarity.

## Inspect before changing

- Read the live story, criteria, comments, estimates, attachments and links.
  Preserve concurrent edits and never reload an unsaved Azure draft.
- Protect agreed Ready work, including cards assigned to any developer. Do not
  further split, reassign, repoint or demote it without explicit authorization
  from the business analyst. When a story update is authorized, clarify its existing boundary
  without silently resetting accepted decisions.
- For cleanup limited to New and unassigned FE stories, require both conditions
  in the live item immediately before writing. Do not include Ready/assigned
  stories, BE work or child Tasks simply because they are related. A pointed
  New story can be clarified without changing its estimate or making it Ready.
- Search the current React hierarchy for existing scope before creating work.
  Do not duplicate Site settings, meter tables, shared APIs or library components.
- Inspect the actual component library, not just the prototype. The implementation
  is in `imserv/AstralTech`, under `apps/Astral.Storybook`.
- Component source is evidence of an implementation, not proof of visual parity,
  release availability or acceptance. Record the revision and remaining checks.
- Read the library's conventions and handover restrictions. At the recorded
  source inspection its table supported sorting and its tooltip a text label;
  recheck the relevant revision rather than treating that snapshot as permanent.
  Extend confirmed gaps instead of assuming either component must be rebuilt.
  Resolve prototype/library discrepancies, including status-tag colour approval,
  before pickup. Do not silently edit checksum-protected vendor files.
- Do not read encrypted prototype content by bypassing its protection. Request
  normal access or record the verification as blocked.

## Structure and ownership

- Use the established Initiative > Epic > Feature > User Story > Task hierarchy.
  New stories normally sit beside related stories, not underneath user stories.
- Begin frontend story titles with `FE -` and backend story titles with `BE -`.
  A frontend story can integrate an agreed API only when that integration is in
  scope. It must not own implementing the API.
- "Table" in an FE story means a tabular UI component, not a database table or
  data-architecture design. Mapping supplied raw data into the UI model is FE
  work; creating backend data contracts/services is separate BE work.
- Keep API contracts, server authorization, persistence and calculations in
  separate BE stories. Keep rendering, interaction, client validation and
  integration in FE stories.
- Where approved, promote existing BE tasks to sibling BE stories, preserving
  IDs, comments and relationships. Validate Azure type changes first. If
  unsupported, ask before replacing or retiring work; do not duplicate silently.
- Child tasks are implementation steps, not a substitute for splitting an
  oversized story. Keep any child task aligned with its parent's revised scope.
- Shared work has one owner. Consumers link to it and estimate only their own
  integration or missing behavior. Do not create another mailer, detector,
  settings-save service or preset-propagation implementation for every screen.
- Connect FE, BE and component increments to the same user outcome or workflow.
  A UI-only increment can be complete within its agreed scope without claiming
  that the end-to-end production capability has shipped. Do not add a duplicate
  aggregate story or estimate just to describe that connection.
- Use native Predecessor/Successor links only for actual pickup prerequisites:
  the consumer lists its prerequisite as a Predecessor. Use Related for contract/
  reuse links. Agreed API contracts can allow FE and BE delivery in parallel;
  related backend work is not automatically a finish-to-start gate.

## Split by a clear deliverable

Do not split merely because a story has many scenarios. Split independent
outcomes or unresolved technical work that prevents a developer understanding
and picking up the story. Apply this to New/Refinement work, not already agreed
Ready cards. Keep the existing card for one outcome and create sibling stories
for the others, with a clear source-scenario/ownership record.

- Look for independently deliverable read versus write operations, distinct
  user actions, and shared component work bundled with screen composition.
  Examples include edit versus delete, history versus restore, comment versus
  resolve, and delivery settings versus preview versus test-email sending.
- Start with an example of usefulness: the smallest meaningful output, user
  segment or data case. Each proposed slice must demonstrate behavior or enable
  a named consumer; a button, layer or implementation step alone is not a reason
  for another story. Preserve the agreed FE/BE separation.
- Different states of one coherent flow are not automatically separate stories.
  Keep validation and relevant role/empty/error states with the owning outcome.
- Reuse existing smaller stories instead of adding an aggregate or duplicating
  estimates. An unclear requirement stays explicitly unresolved; do not invent
  acceptance behavior to make a new split appear ready.
- Separate substantial discovery from implementation. Define the planning
  decision, unanswered question, required evidence/recommendation and an agreed
  time budget. For example, learning enough to agree an upload contract is not
  implementing upload. Do not invent a timebox, approval, estimate or new item
  type; create learning work only when authorized.
- The reviewed comparison-table story reuses the library table, CSS and sorting
  at company/group level, not individual-site or meter level. It maps
  representative raw data without live API hookup and retains site navigation.
  File buttons are non-functional placeholders; Viewer/TPI users see neither
  actions nor Site settings. Tooltip, download/upload and API implementation
  remain separately owned. This is that card's boundary, not a rule for all tables.
- Track prototype/library parity before implementation handover. Capture
  a re-render comparison and sync verified differences into the library; do not
  claim that a source inspection completed this check or reset an agreed
  five-point Ready card because the verification follow-up is still open.
- Build or extend reusable tooltips in the library once. Screen stories consume
  the component. Separate basic text tooltips from richer weekly-hours content.
- Put download/upload implementation in separate scope. Define their distinct
  outcomes. An unclear upload contract remains an explicit blocker, not an
  invitation to invent formats, validation or import semantics.
- Profile-page composition reuses the map and meter-table components. Site
  settings gear/tag navigation remains independent. Show approved existing map
  and tooltip components; do not rebuild them inside the page story.
- Consolidating map/tooltip components into the library is a separate delivery
  dependency. Reuse the approved implementation, exports and Storybook examples.
  Check existing component stories before assigning ownership; consolidation
  must not become a second implementation of those components.
- If an actual map-component gap is confirmed, resolve its provider/tool and
  licensing questions in that library work, not by expanding page composition.
  Existing-component reuse is an assumption until verified, not proof that a
  new provider is needed or that licensing is approved.
- Separate component construction, page composition, API implementation and
  meaningful independent actions when they require different refinement.
  Do not create an epic or feature just to hold a small split.

## Write each story

Use the existing story as the draft and keep the recognizable core:

1. **User story:** Name the actual role/task context, one outcome and why it
   matters. Describe what becomes possible or improves, not just what is built.
   The familiar As a / I want / so that format is useful, not compulsory. For
   service/library work, name the real consumer and capability enabled; do not
   invent a customer role or force a technical purpose into a fake user narrative.
2. **In scope / out of scope:** Use short, concrete bullets for the change,
   reused components and important exclusions. Link the actual owners of
   adjacent work rather than listing everything the system will not do.
   Non-functional placeholders must not be described as working functionality.
3. **Dependencies and readiness:** Include actual prerequisite IDs and the
   component/version, API agreement or product decision needed. State what is
   required and why. Do not repeat the full dependency list elsewhere or copy
   generic FE/BE process explanations into this section.
4. **Acceptance criteria:** Keep the essential rules and named, concrete
   Given/When/Then examples in Azure's Acceptance Criteria field, not duplicated
   in Description. API criteria describe observable service behavior; UI
   interactions/layout belong here only when they are part of the UI requirement.
5. **Source/media:** Keep the relevant source links, ordered visuals and full-size
   GIF links. Label broader or superseded recordings as context, not active scope.

Add Open decisions only for real unanswered questions. Separate confirmed
behavior, assumptions and unknowns, with their readiness impact; do not invent
an owner or deadline. A useful demonstration note can accompany an existing
example instead of becoming another lengthy section.

For a change to an existing interaction, use Where / Now / Change when it
removes ambiguity. Name the page/tab and entry point, describe only verified
current behavior, and identify the intended difference and what is preserved.
Do not manufacture a current-state defect, persona or user-research finding.
Often one scope sentence is enough; these are not three mandatory new sections.

State, owner and points are authoritative in Azure's native fields. Include
brief story-specific estimation assumptions when needed, not a repeated scoring
essay or invented complexity/test-point tables. Preserve agreed metadata and
leave unapproved estimates unset. Comments hold decision history; the current
description should not require reading a meeting transcript to identify scope.

## Frontend interaction contract

A screenshot is one state, not the full interaction. Check the relevant entry
context, action and resulting state: active site/group/date/selection, immediate
versus Apply behavior, and what is retained or discarded on cancel, return or
navigation. State confirmed transitions once, beside their owning outcome.

- Specify relevant data meaning: units, dates/time zones, precision and absent
  values. Unconfigured is not automatically Closed; missing data is not zero.
  Preserve these distinctions without inventing a display or calculation rule.
- Distinguish no records, no search matches, not configured and could not load
  when relevant. Ask about consequential loading, partial-result, failure and
  recovery gaps; do not fill every card with a generic state checklist.
- Sending a request is not proof of saving or delivery. Describe the returned
  success state and any agreed failure feedback, retained input and retry rule.
  If those rules are unknown, record a specific open question rather than
  approving optimistic success, automatic retries or draft loss by assumption.
- Reuse identified shared patterns/contracts and record actual exceptions.
  For accessibility, cover relevant keyboard operation, focus, labels and
  exposed states; for responsiveness, cover the agreed wrapping/scroll region.
  Link shared standards instead of copying them onto every story. Do not invent
  viewport targets, customer hardware, a blanket ban on table scrolling or
  unagreed WCAG acceptance requirements.
- A shared-component change identifies its known consumers and affected
  behavior. Reuse/consolidation is not permission to rebuild other screens.

## Make acceptance and proof clear

- Use stable identifiers such as `AC-01` with behavior-based names. When adopting
  IDs on an existing story, preserve a mapping from its current examples; keep
  existing IDs afterward instead of renumbering on insertion or deletion.
  A presentation cleanup is not permission to discard or merge distinct rules.
- Use short rules for unconditional requirements, Given/When/Then for
  transitions and tables for useful combinations. Do not force all three forms
  into every story or expand one clear rule into several ceremonial examples.
- Give each scenario a short behavior-based name, not just "Scenario 7". Given
  establishes context/input, When states one meaningful event, and Then states
  the observable result. Keep one rule/topic per scenario rather than alternating
  several Given/When/Then workflows inside it.
- Use small representative input/output examples where they resolve ambiguity:
  show expected ordering, displayed values or resulting state. Separate fixture
  data from production rules; do not hardcode prototype names/counts/addresses.
- Include relevant counter-examples and confirmed always/never rules. Check
  roles, site/meter scope, validation, empty states and service failure only as
  relevant to this outcome. Unknown recovery behavior is a question, not an
  excuse to invent confirmation, retry or partial-success semantics.
- For failure/rejection, ask what happens instead: visible/service feedback and
  the state that remains unchanged. Hiding an FE control does not prove BE
  authorization. Keep each check with its actual UI/service owner.
- Reference agreed shared quality standards once, then identify story-specific
  risks or exceptions, such as accessibility, responsiveness, performance or
  trust boundaries. Agree concrete conditions/targets instead of saying "fast"
  or "easy"; do not fabricate thresholds or treat upstream guarantees as proven.
- Keep core acceptance examples separate from exhaustive technical permutations
  and regression checks in linked test material. Preserve all agreed behavior,
  essential boundary examples and source traceability. Do not shorten a story
  by silently deleting criteria or treating important rules as optional QA.
- Ask how completion will be demonstrated: role/consumer, representative input,
  action and expected result. Reuse a core example rather than duplicating a
  click transcript. Label mocks, component proof and live-service evidence
  honestly; mock-only acceptance can complete an explicitly agreed FE increment.
- Verify the intended benefit as well as implementation. Where appropriate,
  seek representative-user feedback on the outcome after delivery, not only
  proof that a component renders. Do not invent a release gate or automatically
  change a story's state.
- Ask whether every criterion could pass while the promised outcome still
  fails: an export needs a produced file, not just an enabled button. Keep story
  acceptance, the team's shared Definition of Done and post-delivery UX outcome
  evaluation distinct. Do not invent a new Done policy or research gate.

## Sentence and developer-handoff check

- Keep a sentence only if it explains the outcome, required behavior, meaningful
  boundary, actual dependency, open decision or necessary evidence. Remove
  duplicate prose and author/process commentary from the active requirements.
- Use one clear idea per sentence and consistent domain terms. Make actor,
  action and result explicit; distinguish UI tables from database tables and
  company/group comparisons from site/meter settings.
- Replace empty benefits such as "complete this focused workflow" with the
  actual purpose, such as inspecting flagged consumption in context. Replace
  "works correctly", "appropriate" or "valid" with an observable rule/example,
  or record the missing definition rather than guessing.
- Cross-check purpose, scope, criteria, captions and linked owners for agreement.
  Check a linked item's current title/scope, not just that its ID exists. Keep
  original scenario numbers in traceability; use clear names/current ordering
  in the developer-facing presentation.
- Could a developer explain what changes, what stays unchanged, how completion
  is shown, what must be available and who owns excluded work without reading
  meeting history? If not, clarify those gaps rather than adding more boilerplate.

## Preserve Astral behavior

Preserve Viewer/TPI restrictions in Site profile/settings stories: hovering tags
can show information, but cannot open Site settings; action/gear/file buttons
are hidden. Keep the meter table read-only. Do not invent TPI permissions for
unrelated Alerts workflows; retain their established role policy.

Settings belong to one site and its meters. Site defaults apply to following
meters, with independent meter overrides; there are no group-level settings or
cross-site attribute inheritance. Operational hours and Time of use have
independent scope. Explicitly shared company presets remain a separate
capability; do not mistake preset propagation for group-level site settings.
Client validation/warnings and save integration are FE; atomic persistence and
server authorization remain BE.

Prototype names, counts, ages and email addresses are fixtures, not production
constants. A mock preview or test-email success message is not a live service.
Do not turn missing product decisions into acceptance requirements.

## Estimation and readiness

- Use traditional developer effort, not AI-assisted speed, as the sizing basis.
  AI acceleration is a separate planning consideration, not a point multiplier
  or an automatic reduction. Do not translate days into points.
- Record explicit estimates supplied or approved by Shaun/Charanjit. Otherwise
  leave points unset; a provisional suggestion is not a committed estimate.
- Preserve approved points on Ready cards. Clear only superseded imported
  estimates on materially split, unrefined work; never erase an agreed estimate
  just because an earlier description said "unestimated." Keep Azure history.
- Remove stale Needs refinement/Unestimated tags from explicitly accepted,
  pointed Ready cards, preserving other tags. Verify the saved tag set as well
  as the state/points; a successful field update alone is not proof of removal.
- Estimate each independently owned FE or BE story once the scope and dependency
  assumptions are understood. Do not also count a mixed parent or copy its
  points to splits.
- Tasks may have optional estimated/remaining hours; they do not receive story
  points. Do not convert those hours into points.
- Test story points, if retained, are separate QA planning information, not a
  second amount to add to delivery velocity.
- Prioritize clear dependency links over false point precision. Contracts can
  support estimates/parallel work before every upstream implementation finishes.
  Keep execution prerequisites visible without automatically demoting an
  explicitly accepted Ready card.
- The business analyst manages New, Refinement and Ready. Mark only explicitly reviewed and
  authorized work Ready/assigned; do not apply that status to every new split.
  The developer owns Resolved and other delivery completion changes.

## Refinement communication

- Put pre-meeting feedback and "not ready for refinement" reasons in the Azure
  story's Comments section, not only Teams or the description.
- State the changed boundary, related owners, unresolved questions and why
  estimation is deferred. Avoid implying the entire team approved unreviewed
  implementation details.
- Shaun and Charanjit lead FE backlog refinement and initial effort estimates.
  Keep FE discussions about UI delivery; consult backend specialists on actual
  service contracts separately rather than expanding an FE story into data
  architecture. Record estimate objections with specific scope/evidence in
  Comments, without reopening already accepted cards automatically.
- Use a short example-led review with product/domain, implementation and
  testing perspectives, synchronously or through Comments. Discuss key rules,
  examples/counter-examples and questions; polished AI-generated prose is not
  evidence of agreement. Do not require the whole team at every discussion.
- Separate agreement on intended behavior from technical design discussions.
  Get targeted QA/BE input where relevant without changing the agreed FE
  refinement leadership or inventing approval from absent people.
- Publish neutral decisions and actionable questions, not personal criticism,
  meeting frustration or unsupported claims of consensus.
- Future refinement invitations should include clickable story links as agenda
  items. Ask developers to review and comment before the meeting.
- Do not send or edit calendar invitations without an identified meeting and
  authorization. Record the process rule when no meeting is supplied.

## Learn from delivery

- Examine recently blocked, expanded or reworked stories while the context is
  fresh. Use actual decisions, missed assumptions and waiting/rework evidence;
  inspect the work, not individual personalities.
- Trial a focused improvement with a clear goal, question and useful measure,
  such as clarification rounds or avoidable blocked time. Agree the review
  point; do not invent owners, dates or numeric targets.
- Assess the result before making an experiment a permanent rule. Retain useful
  changes and stop or adjust those that add ceremony without clarity. Do not
  optimize story counts or point totals as a proxy for developer understanding.
- Keep durable guidance separate from dated examples and project decisions.
  Updating the skill does not authorize retroactive edits to delivered/Ready work.

## Azure presentation and safe updates

- Prototype root: `https://imserv-astral-prototype.pages.imserv.ghe.com/`.
  Library links use `library-site/` and retain the exact story fragment.
  Demo links retain their `open` query parameters. Never replace them with the
  personal IMShaun Pages host or a transient SSO nonce/login redirect.
- Use HTML for Azure rich-text fields, not Markdown pipe tables or `**` markers.
  Tables need visible cell borders and padding; use labelled lists if native
  rendering does not retain a readable table.
- Preserve original screenshot dimensions, GIF aspect ratios, caption order,
  full-size viewing links and attachment bytes. Reuse relevant existing assets.
- When moving scenarios, put each in one active owner. Keep source traceability
  and explain broader legacy recordings instead of leaving contradictory active
  criteria or stale walkthrough claims.
- Validate writes first, revision-guard updates and record returned IDs
  immediately. Resume successful writes after interruptions; never blindly
  recreate stories or repost comments.
- Verify saved fields, active scenario coverage, hierarchy, dependency direction,
  estimates, roles, media, SSO URLs and native rendering. Report blocked checks
  plainly; source inspection is not a substitute for a rendered comparison.
- For feature backlog presentation, group existing FE stories before BE stories
  using native backlog ordering, preserving relative order within each group.
  Keep older unclassified work distinct; do not infer a prefix or change its
  scope. Backlog ordering is not the Child-list sort inside an open feature and
  must not change priority fields, status, estimates or dependency direction.

## Recorded decisions and reading

These are historical context, not defaults for new stories:

- 14 October 2026: reviewed FE estimates were comparison table 5, profile
  composition 3, meter table 3 and settings entry/page/save integration 3.
  Shaun chose the existing Operational hours, Time of use and Attributes
  stories at 3/3/2, assigned to Charanjit and Ready. Their eight points are a
  total, not another aggregate estimate. Preserve these approved decisions.
- The subsequent read-only presentation review covered the 64 imported/refactored
  Site profile and Alerts stories. It retained their common layout as the
  baseline and identified repeated scope/process paragraphs, generic benefits
  and scenario labels as improvement targets. It did not authorize story edits.
- Adapted guidance, in our own words, from the supplied Fifty Quick Ideas books:
  User Stories (outcomes/roles pp. 13, 17, 25; mapping/slicing pp. 52, 135, 142;
  discussion/demo/discovery pp. 89, 97, 108, 112, 150), Tests (examples/structure
  pp. 57, 64, 68, 79, 87; quality/risk pp. 13, 24, 32, 36, 83; business versus
  technical checks pp. 110, 196), and Retrospectives (story review p. 57;
  experiments/learning pp. 168, 171, 191). References use printed page numbers.
- 15 October 2026: supplied FE-writing guidance reinforced concise outcomes,
  proportionate Where / Now / Change, interaction/state contracts, stable
  acceptance IDs and honest mock/integrated proof. Its navigation example,
  failed-save example and proposed viewport checks are illustrations, not
  approved Astral behavior. This supplements the existing baseline and prior
  FE/BE/refinement decisions; it does not replace them with a new template.
