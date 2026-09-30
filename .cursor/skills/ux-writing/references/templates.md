# Templates

Patterns, not strings to paste blindly. Fill ORCA+ first. Examples state the assumed capability.

For each pattern: placeholders, short, long, formal, informal, when to use, what to avoid.

## CTA

Pattern: Add {object}
Short: Add {object}
Long: Add {object} to {parent}
Formal: Create {object}
Informal: Add {object}
When: The user can create that object now.
Avoid: Let’s build a {object}. Continue when the action is known. Add team before the object is team.

## Save CTA

Pattern: Save changes
Short: Save changes
Long: Save {object} changes
Formal: Confirm changes
Informal: Save changes
When: They have edited a form. Disabled until a line changes.
Avoid: Persist. Confirm changes unless confirmation is the action.

## Success

Pattern: {Object} added
Short: {Object} added
Long: {Object} has been added to {parent}.
Formal: {Object} has been added.
Informal: {Object} is ready.
When: The create or save finished.
Avoid: Success!!! Praise with no outcome.

## Validation error

Pattern: Enter {field}.
Short: Enter {field}.
Long: Enter {field} in this format: {example}.
Formal: Enter {field} in this format: {example}.
Informal: Check {field} and try again.
When: A required or formatted field needs attention.
Avoid: Invalid {field}. You forgot. Enter a valid {field} when the constraint is known.

## System error

Pattern: Could not {action}. Try again.
Short: Could not {action}. Try again.
Long: We could not {action}. Your changes have not been saved. Try again.
Formal: {Action} could not be completed. Try again.
Informal: We could not {action}. Try again.
When: The product failed, not the person.
Avoid: Something went wrong. Oops. Error codes the audience does not need.

## Empty state

Pattern: No {objects} yet
Short: No {objects} yet
Long: There are no {objects} in {scope} yet. {next action}.
Formal: No {objects} are available.
Informal: No {objects} yet. Add the first one.
When: The list is empty and adding is allowed.
Avoid: An empty graphic with no text. Add {object} if they cannot add.

## Confirmation or destructive action

Pattern: {Action} {object}?
Short: {Action} {object}?
Long: {consequence}. This cannot be undone.
Formal: Permanently delete {object}
Informal: {Action} {object}?
When: Remove is reversible. Delete is permanent.
Avoid: Kick them out. Playful copy on a destructive act.

## Permission request

Pattern: Allow {actor} to {action} {scope}.
Short: Allow {capability}
Long: Allow {actor} to {action} {scope}.
Formal: Grant {capability}
Informal: Let {actor} {action} {scope}.
When: Actor, action and scope are known. Do not infer consent.
Avoid: Give third-party consent. Give access when scope is missing.

## Onboarding step

Pattern: {Verb} your {object}
Short: {Verb} your {object}
Long: {explanation}. You can change this later.
Formal: Configure {object}
Informal: Set up your {object}
When: One goal per step.
Avoid: A second verify or a sign-in link the flow does not use.

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
