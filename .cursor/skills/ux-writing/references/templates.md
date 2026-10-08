# Templates

Patterns, not strings to paste blindly. Fill ORCA+ first. Examples state the assumed capability.

For each pattern: placeholders, short, long, formal, informal, when to use, what to avoid.

Every variant must preserve the same product facts, action, scope and consequence. A short or informal version is not permission to omit a material fact. Read [content-planning.md](content-planning.md) for journey-state coverage. Include only supported states and recovery.

## CTA

Pattern: Add {object}
Short: Add {object}
Long: Add {object} to {parent}
Formal: Add {object}
Informal: Add {object}
When: The user can create that object now.
Avoid: Let’s build a {object}. Continue when it conceals a consequential action. Add team before the object is team. Use Create only if the glossary permits it for this action.

## Save CTA

Pattern: Save changes
Short: Save changes
Long: Save {object} changes
Formal: Save changes
Informal: Save changes
When: They have edited a form. Disabled until a line changes.
Avoid: Persist. Confirm changes unless confirmation is the action.

## Success

Pattern: {Object} added
Short: {Object} added
Long: {Object} has been added to {parent}.
Formal: {Object} has been added.
Informal: {Object} added.
When: Creation and persistence are confirmed. Use Changes saved for a confirmed save. Include what happens next when needed.
Avoid: Success!!! Praise with no outcome. Ready when only creation is confirmed. Confirming success while a request is pending.

## Missing required input

Pattern: Enter {field}.
Short: Enter {field}.
Long: Enter {field}. {necessary instruction}.
Formal: Enter {field}.
Informal: Enter {field}.
When: A required field is empty.
Avoid: Invalid {field}. You forgot. Enter a valid {field} when the constraint is known. Dropping a required format or correction from a variant.

## Format or constraint error

Pattern: {field} must {known constraint}.
Short: Same
Long: {field} must {known constraint}. {additional correction if needed}.
Formal: Same
Informal: Same
When: A supplied value does not meet a known format, range or allowed value. Use an instruction such as Enter {field} in the format {example} when clearer. Keep the constraint in every variant unless it is already explained in associated visible instructions.
Avoid: Invalid input. A short variant that removes the only explanation of the constraint. Invented restrictions.

## System error

Pattern: We could not {action}. {supported recovery}.
Short: Could not {action}. {supported recovery}.
Long: We could not {action}. {verified impact}. {supported recovery}.
Formal: {Action} could not be completed. {supported recovery}.
Informal: We could not {action}. {supported recovery}.
When: Failure is confirmed. Use Try again only when retry is supported and safe. Include saved or unsaved work status only when known.
Avoid: Something went wrong. Oops. Error codes the audience does not need. Repeated payment or submission when completion is uncertain.

## Uncertain outcome

Pattern: We could not confirm whether {outcome}. {supported way to check}.
Short: Could not confirm {outcome}. {supported way to check}.
Long: We could not confirm whether {outcome}. {supported way to check before repeating the action}.
Formal: Same
Informal: Same
When: Completion is unknown, such as a timeout after a submission. Confirm the status-check route exists.
Avoid: Your changes have not been saved. You have not been charged. Try again before checking a potentially completed action. Invented guarantees.

## Loading or pending

Pattern: {Action in progress}
Short: Saving changes
Long: Saving changes to {object}
Formal: Same
Informal: Same
When: The request is still in progress. Describe the actual stage.
Avoid: Changes saved before confirmation. Invented durations. Claiming work continues in the background unless supported.

## Partial completion

Pattern: {confirmed completed scope}. {confirmed incomplete scope}. {supported next action}.
Short: Same, with redundant words removed
Long: Same, with relevant scope details
Formal: Same
Informal: Same
When: Some outcomes are confirmed complete and others are not. Separate failed from unknown outcomes.
Avoid: A blanket success or failure. Asking someone to repeat the whole operation when that could duplicate completed work.

## Empty state

Pattern: No {objects} yet
Short: No {objects} yet
Long: There are no {objects} in {scope} yet. {next action}.
Formal: No {objects} are available.
Informal: No {objects} yet. Add the first one.
When: The collection is confirmed empty. Offer adding only when it is allowed.
Avoid: An empty graphic with no text. Add {object} if they cannot add. Treating a loading failure or filtered list as a new empty collection.

## No matching results

Pattern: No {objects} match {search or filters}.
Short: No matching {objects}
Long: No {objects} match {search or filters}. {supported search or filter adjustment}.
Formal: Same
Informal: Same
When: Search or filtering completed and no results match.
Avoid: No {objects} yet when the collection is not empty. Remove a filter when there is no filter to remove.

## Confirmation or destructive action

Pattern: {Action} {object}?
Short: {Action} {object}?
Long: {verified consequence and scope}. {verified reversibility}.
Formal: {Action} {object}?
Informal: {Action} {object}?
When: Confirm the actual removal or deletion semantics. Name the affected object and scope. Use This cannot be undone only when irreversibility is confirmed.
Avoid: Kick them out. Playful copy on a destructive act. Are you sure with no consequence. Claiming undo, permanent erasure or a refund without product facts.

## Permission request

Pattern: Allow {actor} to {action} {scope}.
Short: Allow {capability}
Long: Allow {actor} to {action} {scope}.
Formal: Grant {capability}
Informal: Let {actor} {action} {scope}.
When: Actor, action, scope and actual capability are known. Explain material consequences before commitment. Do not infer consent.
Avoid: Give third-party consent. Give access when scope is missing. Shame-based refusal labels or a hidden refusal path.

## Access restriction

Pattern: {required capability} is needed to {action} {scope}.
Short: You do not have permission to {action} {object}.
Long: {known restriction}. {supported way to request access or continue}.
Formal: Same
Informal: Same
When: The product confirms the restriction. Name a required role only when the capability map establishes it.
Avoid: Access denied with no explanation. An invented Request access button. Presenting a permission restriction as an invalid field.

## Onboarding step

Pattern: {Verb} your {object}
Short: {Verb} your {object}
Long: {explanation}. {confirmed next step or reversibility if relevant}.
Formal: {Verb} your {object}
Informal: Set up your {object}
When: One goal per step.
Avoid: A second verify or a sign-in link the flow does not use. You can change this later without a supported way to do so.

## Tooltip

Pattern: {Verb or explanation}.
Short: {Verb or explanation}.
Long: {Control} lets you {outcome}.
Formal: {Control} is used to {outcome}.
Informal: Use this to {outcome}.
When: The control is unfamiliar. Wait a second in the live shell.
Avoid: Repeating a visible label. Spatial phrases such as the button on the right.

## Label

Pattern: {Attribute}
Short: {Attribute}
Long: {Object} {attribute} where ambiguity exists
Formal: Same
Informal: Same
When: Always a visible label.
Avoid: Name when Company name is needed. Placeholder as the only label.

## Tag

Pattern: {State} in one to three words
Short: {State}
Long: Same. A tag has no long form.
Formal: Same
Informal: Same
When: A short fact on a row, card or heading, such as Custom, From site or Live. The column heading or the field around it gives the context, so the tag does not repeat it.
Do: Keep the tag to about 15 characters. Put the detail where the user goes next, such as the opened row, the settings or a tip.
Don't: List the parts in the tag, such as Own time of use and unit rates. A long tag crowds the row, wraps on small screens and is slow to scan.
Why: A tag is read at a glance down a column. Short tags line up and compare.
Example: Settings column on the meter list shows Custom or From site. The meter's settings say which parts it sets (commit 3f8d89c).

## Home metric card

Pattern: {figure} / {Supporting line} / Open
Short: {count} / {Object} {state} / Open
Long: {count} / {Object} {state} {window} / Open
Formal: Same
Informal: Same
When: Home hero cards that open Alerts, Portfolio, Finance, Reports, or Data health. The figure is the number. The supporting line names what it is. Open is the CTA.
Avoid: a lowercase first letter on the supporting line. Title case on every word. Putting Open into the supporting line.

Example: 7 / Sites need action today / Open

If the supporting line starts with a number: 2.4 GWh / 3.1 percent below last year / Open

## Help text

Pattern: {Constraint or example}
Short: {Constraint or example}
Long: {Why needed}. {Expected format or example}.
Formal: Same, slightly more neutral
Informal: Direct second person
When: A requirement or consequence is not obvious from the label.
Avoid: JPEG or PNG help under the onboarding picture.

## Access or expiry

Pattern: {Actor} can view {scope} until {date}.
Short: Access ends {date}
Long: {Actor} can view {scope} until {date}.
Formal: Access expires on {date}.
Informal: Access ends {date}.
When: Third-party access or a temporary login with known dates.
Avoid: Give third-party consent. Inventing the date or the lawful basis.

If access has ended: Your access to {company} ended on {date}.

## Role-based examples

Assumed capability is stated. Do not infer it from the name alone.

| Role | Assumed capability | Good copy |
| --- | --- | --- |
| Platform admin, Super admin | Can add a company | Add company |
| Company Admin | Can add a team in this company | Add team |
| Manager | Can add a member in a team | Add member |
| Contributor | Can create a report | Create report |
| Viewer | Can look, cannot edit the report | You do not have permission to edit this report. |
| Broker / TPI | Viewer on the customer link until a date | You can view data for {company} until {date}. |
