# Code to Figma

Second pack for this skill. Use these notes whenever live Astral is translated into the IMSERV Design System file. Keep the words. Overlay desk facts where this product already named a tighter rule.

## On this desk

Live Astral is the source of truth. Code wins. Do not extract Figma back over `astral-ui.js`, `styles.css`, `prototype.js`, or `data/design-systems.json`.

MCP here is Figma’s Model Context Protocol through `use_figma` with `resource:figma-use` and `resource:figma-generate-library`. Never call `get_design_context`. Code Connect waits on an organisation plan. `get_variable_defs` and `get_code_connect_map` are named in this pack. They are not the write path on this desk.

Tokens in Figma are **primitive and semantic variables**. Not paint styles. WEB syntax is `var(--token-name)` from live CSS.

This desk does not run Style Dictionary, Storybook, Chromatic, Percy, Bit, or a Figma Tokens Git sync. Do not invent those pipelines. Inventory, map, transform, and validate with the files we have. Visual check is a Figma screenshot against live CSS and the builder. Construct with [component-construction.md](component-construction.md).

One component per pass. Log unmatched tokens and variants. Do not guess.

## Executive Summary

Synchronising a codebase with Figma requires a systematic two-way design-system workflow that treats the design library and source code as a single source of truth. In practice, this means extracting design tokens and component definitions from code (e.g. CSS/JSX/Swift/Kotlin), mapping them precisely to Figma’s styles and components, and then updating the Figma library so screens and components match the code exactly. We leverage Figma’s Model Context Protocol (MCP) for context (the Figma MCP server reads design components, styles and variables into AI agents). Key steps include: inventorying code and Figma assets; mapping names and patterns (with automated parsing and naming heuristics); applying strict transformation rules (e.g. parsing CSS/JSX to update Figma styles, tokenising values, mapping variants); and validating the sync via visual diffs and automated tests. This report details prerequisites (repo structure, naming conventions, token hierarchies), step-by-step workflows (both manual checks and automated pipelines), transformation rules (naming, token extraction, variant mapping), validation methods (snapshot tests, accessibility audits, visual diffs), and governance practices (CI/CD sync jobs, error reconciliation). We also compare popular tools (Figma API, token plugins, style-dictionary, Storybook, Chromatic, Bit, Cursor, etc.) by tech stack. Finally, we recommend metrics (component usage, token coverage, detachment rates) to quantify design-code alignment.

On this desk the flywheel is one way until they name a Figma-to-code write. Inventory both sides. Map. Transform. Update Figma. Validate. Publish is on the person in Figma.

## MCP (Model Context Protocol) in Context

The Figma MCP (Model Context Protocol) is an open-standard, two-way protocol that lets AI-powered tools access design and code contexts. In essence, an MCP server (e.g. Figma Dev Mode) exposes design data (components, styles, variables) as structured resources and tools, while an MCP client (e.g. an AI agent like Claude Code or Cursor) can query or trigger updates. MCP enables features like get_variable_defs (exporting design tokens as JSON) or get_code_connect_map (mapping Figma components to code). In our workflow, we assume MCP is used to scan the codebase and design: for example, Figma’s Dev Mode can “scan your codebase and output a structured rules file” of token definitions, style hierarchies and naming conventions. These rules guide automated scripts to synchronise Figma with code. Note: If “MCP” was intended to mean “Model–Component–Pattern” (a less common term), we treat it as Figma’s Model Context Protocol based on the above context.

On this desk, scan the codebase with Grep and Read. Scan Figma with `use_figma`. Token names already live in `data/design-systems.json` (`cssVar`, `figma`, `theme`). Do not invent a Dev Mode rules file.

## Prerequisites: Repo & Design System Conventions

Effective syncing starts with well-structured code and design:

**Repository structure:** Components should be organised in a predictable hierarchy (e.g. an atomic structure of Atoms/Molecules/Organisms) with consistent file naming (e.g. PascalCase React components or Swift structs). Each UI component in code ideally lives in its own directory or module. Framework conventions (React, Angular, Vue, SwiftUI, Jetpack Compose, etc.) should be clearly followed. This ensures automated tools (AST parsers or file scanners) can locate components easily.

Astral builders live in `astral-ui.js`. Screens live in `prototype.js`. Look lives in `styles.css`. The catalogue lives in `data/design-systems.json` `components`. Suggested React files are names in that catalogue, not folders they can open.

**Design token architecture:** A shared design token system must be in place. Typically, tokens are layered: primitives (raw values), semantic tokens (aliases like “primaryColor”), and component-specific tokens. Ensure tokens are named meaningfully (e.g. color.primary or font.size.large) and stored in code-accessible formats (JSON, YAML, or CSS variables). If using style-dictionary or a similar tool, maintain a single source (often JSON) for tokens. This allows bi-directional sync: a change in the token should propagate to both code and Figma. Figma Variables or Styles should mirror this structure.

Astral layers are primitive then semantic. Collections are Astral Primitives (Value) and Astral Semantic (Light). CSS variables are `:root` in `styles.css`. JSON is the named catalogue. Live CSS wins if JSON disagrees.

**Naming conventions:** Agree on conventions for naming components and variants. For example, if code uses BEM classes (btn--primary), define how that maps to Figma component names (e.g. “Button / Primary”). This prevents guesswork during mapping. Consistency avoids mismatches: e.g., if code uses disabled:true, Figma should have a “Disabled” variant.

Use the mapping table in this file. Do not guess a third name.

**Design system library:** The Figma file must be a published library or consistent source of components and styles. All teams should use this shared library. Styles (colors, typography, spacing) in Figma must be Figma Styles (and/or Figma Variables) rather than hard-coded in frames. This ensures updates propagate everywhere.

Apply colour with variables. Text styles stay colour-agnostic. Publish after a library change. The agent cannot publish.

**Tokens in Figma:** Prefer using Figma Variables (and Styles) as design tokens. Each token in code should correspond to a Figma Variable or Style. For example, a JSON token `{"primaryColor": "#FF0000"}` should exist as a Figma color variable named primaryColor. Figma’s resource guide notes that when a designer updates a token in Figma, “that change carries the same name that a developer is already using in their code”. This lockstep is the goal.

JSON `figma` is the variable path (`color/status/danger`). JSON `cssVar` is the CSS name (`--color-status-danger`). Keep them in lockstep.

**Assumptions:** The above requires a mature design system setup. If the system isn’t fully tokenised, first invest in defining tokens in both code and Figma (using style-dictionary or Figma Tokens plugin). We assume the repository uses a component-based UI framework (e.g. React with JSX or SwiftUI). Adjust specifics for your stack (e.g. Kotlin and Android XML can parse similarly).

Astral is already tokenised. Do not add Style Dictionary to invent a second token file.

## Step-by-Step Workflow: Inventory & Mapping

1. **Inventory Figma designs:** Use the Figma API (or Dev Mode UI) to list all Figma components, styles, and variables. For example, fetch the Figma file’s styles via the REST API or use a plugin like Figma Tokens to export all tokens. This gives a catalogue of existing Figma assets (component names, variant names, color/typography styles).

   On this desk: `use_figma` on file `3tuSVg2s7OzuSi2LVIi55t`. List local variables and the named component set. Read `/tmp/design-system-state-astral-YYYYMMDD.json`.

2. **Inventory codebase:** Programmatically extract UI components and tokens from the code. This can be automated using AST parsing or regex. For example:
   - **Components:** Use a parser (like Babel for JS/TSX, SwiftSyntax for Swift, or Kotlin parsing tools) to find all exported React components or SwiftUI View structs. List their names and props/variants.
   - **Tokens:** Scan style/token files (JSON, SCSS variables, Tailwind config, etc.) and code for hard-coded style values (hex colors, font sizes, spacing). Use style-dictionary configuration or custom scripts to extract these into a uniform JSON token list.
   - **Naming:** Capture class names or style references that match Figma token names. Ideally, developers used token variables (e.g. color.primary) in code. If not, use heuristics (e.g. any #RRGGBB that matches a known palette).

   On this desk: read the component row in `data/design-systems.json`. Grep the builder in `astral-ui.js`. Grep the live CSS in `styles.css`. Prototype confirms behaviour. JSON notes that disagree with live CSS lose. Hard-coded hex in CSS that already has a token is drift. Log it. Do not invent a token for a one-off.

3. **Map tokens to Figma variables:** Compare code tokens vs Figma variables. If mismatches are found, generate rules or suggestions: e.g. if code has `themeColors.primary = "#112233"`, and Figma lacks a primary color, prepare to create it. If names differ (e.g. code uses “accentBlue” vs Figma “Accent / Blue”), either rename or alias. Keep a mapping dictionary (codeName → FigmaName).

4. **Map components and variants:** Similarly, match code components to Figma components. Ideally CodeConnect (Figma’s integration) was used to link Figma layers to code, so an existing map might be present. Otherwise, use naming conventions: e.g. a React `<Button primary>` likely matches Figma’s “Button / Primary” variant. Document any unmatched code components (these may need new Figma frames/components).

   Code Connect waits. JSON `figma.componentKey` is the published key when it exists. Pages use short names (Search, Select). Variants use `Property=Value`.

5. **Automated heuristics:** To avoid guesswork, apply deterministic rules. For example:
   - **CSS/JSX parsing:** Extract numeric values (px, rem) or hex codes, then match to the nearest Figma variable value.
   - **Naming patterns:** Strip prefixes/suffixes (e.g. BtnPrimary, ButtonPrimary) to compare against Figma component base names.
   - **Variant mapping:** If code props denote state (`size="large"` `disabled={true}`), map to Figma variants (Large, Disabled).
   - **Fallbacks:** If a code style doesn’t exactly match a Figma token, log it as a discrepancy.

   Do not pick the nearest colour by eye. Match the named token. If there is no token, log it and stop or use the named Brand Book hue they asked for.

6. **Generate transformation rules:** Using the above mapping, define rules or scripts. For instance, a rule: “CSS color #FF0000 → Figma Variable color.red-primary”. Write these as config (JSON or YAML) if possible. Tools like style-dictionary can be configured with custom transforms to output a Figma-friendly JSON. The Figma MCP server itself can “generate rules for keeping your design system consistent” automatically; we should validate or supplement these with manual rules.

   The mapping table below is that config for Astral.

## Mapping table (codeName → FigmaName)

| Code | Figma |
| --- | --- |
| `data/design-systems.json` `name` | Page and component set name |
| `id` button, search, select | Button, Search, Select |
| `.astral-btn` | Button |
| `.astral-search` | Search |
| `.astral-select` | Select |
| `kind="primary"` / `.astral-btn` filled Extra Cyan 2 | Kind or Type Primary |
| Secondary / ghost 1px Infra Grey B | Secondary |
| Quiet | Quiet |
| `:hover` / `.is-hover` | State=Hover |
| `:focus` / `:focus-visible` | State=Focus |
| `:disabled` / `[disabled]` | State=Disabled |
| `aria-expanded="true"` / `.astral-select-menu` visible | State=Open |
| Empty value / placeholder visible | Content=Empty |
| Kept value / `.has-value` | Content=Filled |
| `--color-*` | `color/…` variable, same path as JSON `figma` |
| `--space-*` | `space/…` |
| `--radius-button` | `radius/button` (999). Live fields use this, not `radius.control` |
| `--control-height-sm` | 36px. Live shell fields and buttons |
| `--color-background-hover` | `color/background/hover` |
| Focus ring `0 0 0 2px #fff, 0 0 0 4px #000` | Nested frames, not DROP_SHADOW |
| `protoIconMark("close")` | Icon instance, glyph Icon/Close. Measure live px. Search clear glyph is 10px on a 24px hit |
| `protoIconMark("filter")` | Icon/Filter. Icon button SVG 18px |
| `protoIconMark("chevron")` / `.astral-select-chevron` | Icon Size=16, glyph Icon/Chevron. Open rotates 180. Not a Material dropdown |
| `protoIconMark("electricity" \| "gas")` | Meter mark on that row |
| `protoIconMark("incoming" \| "outgoing")` | Flow pill In / Out |
| `protoIconMark("tick" \| "warning")` | State Sending vs Outside threshold, Missing data, Not sending |
| Icon size 16 / 18 / 24 | Icon Size property. 16 State and Flow, 18 Icon button, 24 asset. Glyph strokes outlined to fills so the weight scales |
| `placeholder="…"` | Content=Empty characters. Live string, muted |
| `--font-family-sans` / Roobert | Text style Roobert Medium, Label SemiBold |
| Body M / field copy | Text style Body/M, 16 / 24 |

If a code prop has no Figma property, log it. Do not invent a variant axis.

## Updating Figma: Syncing Components and Tokens

Once mappings are defined, update the Figma design file:

**Tokens/Styles:** Use the Figma Tokens plugin or API to import the new/updated tokens. For example, convert your token JSON into Figma Variable definitions. Some teams use the Figma Tokens plugin which supports W3C token formats (Style Dictionary, etc.). Alternatively, write a script using the Figma REST API: POST to `/files/{file_id}/styles` with updated paint or text style definitions. Each token update in Figma will propagate across any instance that references that style.

On this desk: `figma.variables.createVariable` and `setValueForMode` through `use_figma`. Alias semantic to primitive. Do not POST paint styles as the way to apply colour.

**Components:** For new or changed components, use the Figma API to create or modify components/variants. The Figma REST API allows creating components by copying from existing nodes or uploading vector data. In practice, automated UI component creation is hard, so many teams semi-automate this: e.g. use ScriptX (Figma plugin script) to generate a frame with the right name/variants and fill in stub UI, then adjust manually. If Code Connect is set up, Figma’s “get_code_connect_map” can assist by showing which Figma components map to code components. Update any mismatches manually.

On this desk: construct with `$fig` and [component-construction.md](component-construction.md). One component. Bind variables. No stub UI that disagrees with live CSS.

**Screens:** If the code includes full-page layouts (e.g. from a storybook), you might render them (e.g. export screenshots) and compare to Figma frames. Tools like Storybook’s Chromatic or Jest image snapshots can highlight visual differences. If differences exist, update the Figma frames (manually or via plugin) to match the code.

Prototype screens live in `prototype.js`. Do not invent a Storybook capture. Do not trace a screenshot into frames. Component library first. Full screens wait unless they name a screen to build from Astral components.

## Transformation Rules and Heuristics

To avoid arbitrary guessing when mapping code to design, apply the following rules and checks:

**Token extraction:** Use a known token schema. For example, in CSS/JS, define colors like `--color-primary: #123456;` or in Tailwind `theme.colors.primary`. Extract these into token JSON. In Figma, each token becomes a variable/style with the same name. For unmatched values (e.g. a hardcoded `#FF0000` not in tokens), add it to the token list or flag it.

On this desk, flag unmatched hex. Do not add a Brand Book hue they have not named, except status red, green, and yellow already named for variables.

**Naming conventions:** Enforce patterns. E.g. React component `PrimaryButton.jsx` → Figma component “Button / Primary”. If code uses a variant prop (`<Button size="large" />`), map to Figma variant named “Large” under Button. Keep a config (regex or mapping table) for name conversions (upper/lower case, prefixes, etc.).

**CSS/Inline styles parsing:** Parse style objects or CSS files to capture numeric values. Convert units: e.g. code says `margin: 16px`, apply the Figma spacing token that equals 16px. Libraries like csstree can parse CSS. For React Native or inline styles, inspect JavaScript AST for numeric literals attached to style props.

Grep `styles.css`. Prefer `var(--space-16)` over a raw 16. 1rem on this desk follows the live computed size. Do not invent a pt conversion.

**Variant mapping heuristics:** If Figma uses variants (e.g. a State or Type property), ensure code prop names align. For example, code might use `disabled={true}`, match to Figma variant “Disabled”. Programmatically, treat boolean props as binary variants, enum/string props as variant selectors. If code introduces a new enum value, create a new variant in Figma.

Do not add a variant a talk has not named. Prefer boolean, text, and instance-swap properties over extra variants.

**Naming collisions and duplicates:** If two code tokens map to the same name, the script should detect duplicates. E.g. if both `color.gray-100` and `color.cool-grey` exist, merge or choose one canonical name. Avoid creating multiple Figma tokens for essentially the same value.

Canonical names are the JSON `figma` paths.

**Style merging:** When code has nested style rules (e.g. SCSS variables layered), resolve them to final values before syncing. Figma cannot understand Sass loops or mixins, so all computed values should be flattened into tokens.

Resolve `color-mix` and `var()` to the named token, not a one-off hex, when a token exists. Primary hover is `--color-action-primary-hover`.

**Localization of measurement:** Figma uses abstract units (pt), web uses px/rem. Decide a consistent conversion (e.g. 1rem=16px=12pt) to compare numeric tokens. Likewise, map font families/weights from code to the equivalent Figma style.

Figma layout uses px equal to CSS px. Type uses Roobert text styles. Inter is only the MCP write font. Re-apply the text style last.

**Semantic mapping:** Sometimes semantic tokens (e.g. “error color”) differ from a raw palette. Ensure the Figma usage matches semantic intent. If code switches from a raw color to a token, update Figma to use the token style, not a fixed value.

Input Error helper stays a sentence unless they bind `color/text/danger` or `color/border/danger`.

### Sample token sync

```js
// Extract CSS variables and update Figma via use_figma
const css = readLiveRootVariables('styles.css')
const tokens = parseCSSVariables(css) // e.g. { 'color-status-danger': '#B42318', ... }
for (const [name, value] of Object.entries(tokens)) {
  const figmaName = cssNameToFigmaPath(name) // --color-status-danger → color/status/danger
  let v = findLocalVariable(figmaName)
  if (!v) v = createVariable(figmaName, collection, 'COLOR')
  else if (resolved(v) !== value) setValueForMode(v, value)
}
```

### Variant mapping example

```text
React: <Button kind="secondary" disabled />
CSS:   .astral-btn:disabled
Map:
  Base component "Button"
  Property Kind or Type = Secondary
  Property State = Disabled
Combine to "Kind=Secondary, State=Disabled"
Select open:
  .astral-select-btn[aria-expanded="true"] + .astral-select-menu
  → State=Open, and the listbox must exist
```

By codifying these rules, we minimise magic guessing and ensure every code pattern has a defined transformation into the design model. This consistency is crucial: as Figma’s design token guide warns, having a shared naming keeps the system from fracturing.

## Validation and Testing Strategies

To ensure accuracy and consistency, we recommend multiple validation layers:

**Visual diff testing:** Capture snapshots of UI components or screens from both design and code. For web, use Storybook with Chromatic or Percy to take screenshots of components across browsers. For mobile, use emulator screenshots. Compare these images; any pixel diffs indicate drift. This catches styling mismatches (spacing, colors, typography).

On this desk: screenshot the Figma set. Check height, radius, padding, states, and bindings against live CSS. Then measure:

1. Nested Icon instance size vs the live SVG width and height.
2. Text `fontSize` and line height vs the named style in JSON `styles.text`.
3. `fontName.family` is Roobert. Weight Medium, or SemiBold on Label. Inter leftover fails.
4. Empty characters equal the live placeholder, not generic filler.
5. Nested glyph equals `protoIconMark` for that control. Search has no search glass.

Do not claim Chromatic ran.

**Automated unit/snapshot tests:** In code, use testing frameworks (Jest, XCTest, etc.) to assert key style values or render outputs.

This desk has `node .cursor/skills/ux-patterns/scripts/check-library.mjs` for builder drift. It does not replace the Figma screenshot.

**Design-token audit:** Programmatically compare Figma token values to code tokens. Extract Figma Variables via API and compare JSON to the code’s token file. Flag any tokens that diverge. Similarly, ensure every Figma style has a matching use in code (and vice versa).

**Accessibility checks:** Keep WCAG AA pairings from the Brand Book. Black on white, white on black, cyan on black, and black on cyan. Do not put cyan type on white. Disabled is Infra Grey, not a faded colour. Focus is a 2px black edge.

**Component detachment metrics:** Named in this pack. This desk does not query Library Analytics. Log unmatched components in the state ledger instead.

**Peer review:** Stop after the screenshot. Ask them to check the set and Publish.

Example report: tokens matched, tokens added, mismatches, largest visual gap. Do not invent a Headspace saving.

## Error Handling & Reconciliation

No automation is perfect; plan for exceptions:

- **Logging and alerts:** Log unmapped tokens or components. “Token in code has no match in Figma.” “Figma variant has no live state.”
- **Manual reconciliation:** Surface mismatches in the chat. Do not paint a red outline on the file unless they ask.
- **Conflict resolution:** Code wins. Agree in the report if both sides changed.
- **Fallback defaults:** If a parse fails, skip that rule and log it. Do not break the rest of the pass.
- **Idempotent scripts:** Find by name before create. Running the same pass twice must not duplicate.

## Governance and CI/CD for Sync

Treat design-code sync as part of the development lifecycle: CI parse, update Figma, visual tests, publish.

This desk does not have that pipeline yet. Do not invent GitHub Actions, a staging Figma file, or a service-account token. Each `/figma` pass is the sync job. Authentication is the connected Figma MCP. Publish stays a person.

Record exceptions in [desk-notes.md](desk-notes.md).

## Metrics: Measuring Accuracy and Alignment

Track in the pass report, not as invented dashboards:

- Token coverage: live CSS variables vs Figma colour and number variables
- Component coverage: JSON `components` vs Figma pages
- Variant coverage: live states vs Figma variant options
- Unmatched count this pass
- Whether Publish is still waiting

Do not invent Library Analytics numbers.

## Tooling on this desk

| Named in the pack | On this desk |
| --- | --- |
| Figma MCP / Dev Mode | `use_figma`. Not `get_design_context`. |
| Style Dictionary | Not in the repo. JSON + `styles.css` are the token files. |
| Figma Tokens plugin | Not required. Variables through MCP. |
| AST parsers | Grep and Read. Builders are functions in `astral-ui.js`. |
| Storybook / Chromatic / Percy / Bit | Not in the repo. |
| Cursor | This agent. |
| Zeroheight / DSM | Library site and `data/design-systems.json`. |
| Custom plugin scripts | `use_figma` scripts. `$fig` for creates. |

## Workflow diagram

```text
Code repository                  Figma file
  Extract tokens                   List variables
  Extract components               List components
        \                         /
         Map tokens and variants
         Apply transformation rules
         Update Figma (one component)
         Screenshot vs live CSS
         Icon sizes, type sizes, Roobert
         Placeholder copy and marks
         Accessibility pairings
         Report mismatches
         Ask them to Publish
```

## Conclusion

By rigorously inventorying and mapping code and design tokens/components, applying deterministic transformation rules, and validating with tests and metrics, teams can keep Figma designs aligned with the codebase. Leveraging Figma’s MCP and APIs enables context and partial automation. Governance via CI/CD is named for later. On this desk, live Astral stays the single source of truth, and Figma is the bound copy.

Sources in the pack: Figma documentation and blogs (design tokens, MCP, design system metrics), Style Dictionary guides, and best-practice developer tools and workflows.
