---
name: figma
description: >-
  Translates the live Astral library and prototype into the IMSERV Design System
  Figma file with reusable, token-bound components. Use when the user invokes
  /figma, asks to update Figma from the library or prototype, to construct or
  rebuild a Figma component, to bind variables, or to keep the Figma file
  accurate as Astral changes.
---

# Figma

Keep the IMSERV Design System file in step with live Astral. The coded library and prototype are the source of truth. Figma is the shared, token-bound copy designers use.

```text
Inventory code and Figma
→ map tokens and variants
→ transform with the name table
→ tokens and variables first
→ construct one component
→ bind variables
→ screenshot against live CSS
→ measure icons, type size, font, placeholder copy, placeholder marks
→ log mismatches
→ wait for Publish
```

Load [references/code-to-figma.md](references/code-to-figma.md) before a sync pass. Load [references/component-construction.md](references/component-construction.md) before creating or rebuilding a component. Load [references/desk-notes.md](references/desk-notes.md) before any Figma MCP write.

Do not invent a screenshot trace, html-to-figma plugin, Storybook, or CI job this desk does not run.

## When to use

- `/figma`
- Update Figma from the library or prototype
- Add, rebuild, or bind a component, variant, or variable
- Colour, type, or spacing tokens in Figma

Do not use this skill to invent product behaviour, extra screens, or Brand Book hues. Product facts come from talks, `data/design-systems.json`, `astral-ui.js`, `prototype.js`, and `styles.css`. For reusable interaction recipes, use `.cursor/skills/ux-patterns/` (`/ux-patterns`) first. For labels, use `.cursor/skills/ux-writing/` (`/ux-writing`).

## File

| Fact | Value |
| --- | --- |
| File | IMSERV Design System |
| Key | `3tuSVg2s7OzuSi2LVIi55t` |
| Primitives | Astral Primitives, mode Value `7:0` |
| Semantic | Astral Semantic, mode Light `7:1` |
| Colour application | Primitive and semantic **variables**. Not paint styles. |
| Source of truth | Live Astral. Not Figma extract. Not Uber. Not Base Gallery. |

Every page that uses semantic colour needs Light mode `7:1`. Dummy paints are white `{r:1,g:1,b:1}`. Black dummy paints resolve as black when the page has no Light mode.

Publish is on the person in Figma. The agent cannot publish. Code Connect waits on an organisation plan.

## MCP

Load `resource:figma-use` and `resource:figma-generate-library` on every `use_figma` call.

Never run two `use_figma` calls at the same time. Page context resets each call. `setCurrentPageAsync` at most once per script. Return created ids. Write them to `/tmp/design-system-state-astral-YYYYMMDD.json`. Find by name before create. Do not duplicate.

`$fig` for node creates. Do not call `figma.createText`. Roobert cannot load through MCP. Set Inter first, write characters and layout, then `setTextStyleIdAsync` last. Never call `get_design_context`.

## Workflow

Copy this checklist and track it.

```
- [ ] I0 Inventory live Astral (JSON, CSS, builder)
- [ ] I0 Capture live icon name and px, text style, font, placeholder string, placeholder mark
- [ ] I0 Inventory Figma (variables, set, variants, nested Icon sizes, text styles, Empty copy)
- [ ] M1 Map tokens cssVar → figma path
- [ ] M1 Map states and props → variant properties
- [ ] T1 Apply the mapping table. Log unmatched
- [ ] P1 Create missing variables. Alias semantic to primitive
- [ ] P2 Page and docs exist (one page per component)
- [ ] P3 Construct or rebuild one unmatched or drifted component
- [ ] P3 Bind fills, strokes, padding, radius, and type to variables
- [ ] P3 Set Empty copy and nested Icon from the live control, not generic filler
- [ ] V1 Screenshot vs live height, radius, padding, states
- [ ] V1 Measure icon sizes, type sizes, font family and weight
- [ ] V1 Check placeholder text and placeholder icons are contextual
- [ ] V1 Report matched, added, mismatched
- [ ] Ask them to Publish
```

**I0 Inventory.** Read `data/design-systems.json` for the component, tokens, and states. Grep the live builder in `astral-ui.js` and the CSS in `styles.css`. Prototype screens in `prototype.js` confirm behaviour. List Figma variables and the matching set. Write down the live placeholder string, the live `protoIconMark` name, the rendered SVG width and height, and the text style that control uses. JSON notes that disagree with live CSS lose. If Figma already matches the map, stop. Do not rebuild for taste.

**M1 Map.** Use the codeName → FigmaName table in [references/code-to-figma.md](references/code-to-figma.md). `disabled` is State=Disabled. Focus is State=Focus. Empty and Filled are Content. Open is State=Open and needs the live listbox. `--color-*` maps to `color/…`. `--radius-button` is the live field radius.

**T1 Transform.** Deterministic only. Named token, not nearest hex. Boolean props are binary variants. Enum props are variant values. Unmatched items go in the report. Code wins a conflict.

**P1 Tokens.** Variables before components. Alias semantic to primitive. Scopes are specific, never `ALL_SCOPES`. Primitive colours must be appliable (`FRAME_FILL`, `SHAPE_FILL`, `TEXT_FILL`, `STROKE_COLOR`). Semantic scopes match the job. WEB code syntax is `var(--token-name)` from the live CSS. Do not bake colour into text styles.

**P2 Pages.** One page per component. Cover, Getting Started, Foundations, then component pages. Docs sit on the page, left of the set. Do not let docs overlap the component.

**P3 Construct.** Follow [references/component-construction.md](references/component-construction.md). Atoms first. Auto Layout. Hug the parent. Fill or hug children as the live control does. Variant properties are separate axes (State, Size, Content), not one combined Style. Prefer boolean, text, and instance-swap properties over extra variants. Nest shared atoms. Limit hidden layers. Component sets use horizontal wrap, not `layoutMode NONE`. Focus is nested frames that match the live ring, not a drop shadow. Empty copy and nested marks come from the live control. Bind a Roobert text style.

Build one component per pass. Finish it before the next.

**V1 Validate.** Screenshot the set. Variant count matches live states. Bindings are variables, not leftover hex. Contrast still meets AA from the Brand Book. Then run the content and measure check below. Fail the pass if any of those five miss. Report token coverage and unmatched items for this pass. Then stop and tell them to Publish.

## Content and measure check

Do this on every component, not only fields. Read live CSS and the builder first. Measure the Figma node. Do not guess from a screenshot.

**Icon sizes.** Live Icon is 16, 18, or 24 from one 24 canvas. Nested marks instance the Icon set. Do not nest a raw `Icon/` glyph or a one-off chevron. 16 on State, Flow, Select, Tree row, and Send. 18 inside Icon button. 24 for the asset. Search clear is a 24px hit with Icon Size 16. Log a px that is not 16, 18, or 24. Do not invent a Size=10 Icon variant. Do not leave a 24 mark in an 18 slot.

**Icon strokes.** Draw on the 24 canvas, then outline the stroke so the mark is a fill. A live 2px stroke stays 2px when Size is 16 or 18, so the weight does not scale. Outlined strokes scale with the instance. Bind the fill to the icon colour variable. More and Star are fills already. Do not leave a stroke weight on a new glyph.

**Typography sizes.** Bind a named text style. Display 48, Heading L 32, Heading M 24, Heading S 20, Body L 18, Body M 16, Body S 14, Label 12, Caption 12. Field and button copy is Body/M 16 / 24 unless live CSS says otherwise. Measure `fontSize` and line height on the node. A leftover 13, 15, or 17 is drift.

**Typographic font.** Roobert. Medium for headlines and body. Semibold for Label. Skip Regular as the default UI weight. Aptos only if Roobert is missing on a machine. Figma styles stay Roobert. Inter is only the MCP write font. After layout, `setTextStyleIdAsync` last. A text node still on Inter, Aptos, or Regular fails the check.

**Placeholder text.** Empty copy must say what to enter, from the live control. Muted. Focus clears it. Filled is a kept value, not the hint. Take the string from the builder, `prototype.js`, the JSON snippet, or a Language entry. Sentence case. en-GB-oxendict. For new lines, use `/ux-writing`. Do not invent Type here, Search…, Placeholder, or lorem. Do not store a password. Named live hints: Input email `name@company.com`. Tree Search `Search site or meter`. Users `Search people`. Downloads `Search downloads`. Date `dd/mm/yyyy`. Comment `Comment`. Select shows a real option or a named pick such as `Pick a discipline`.

**Placeholder icons.** The mark must be the live `protoIconMark` for that control. Search has no leading magnifying glass. Filled Search uses close. Select uses the chevron. Filter uses filter. State uses tick for Sending and warning for Outside threshold, Missing data, and Not sending. Meter rows use electricity, gas, or water. Incoming and Outgoing use those marks. Waiting uses the tag hover. Do not drop a decorative icon into Empty. Do not copy Lucide, Material, or Uber glyphs. Tree still waits.

## Do not

- Invent Storybook, Chromatic, Style Dictionary, or a CI sync this desk does not run
- Copy Uber, Material, Carbon, or Base Gallery as Astral
- Extract Figma back over live Astral
- Parallelize `use_figma`
- Paint Input Error red unless they ask. Error is a sentence unless they bind `color/text/danger` or `color/border/danger`
- Put cyan type on white
- Fade a disabled control. Disabled is Infra Grey
- Use Infra Grey C on the black nav
- Add a component, screen, or token a talk has not named
- Leave Inter, Aptos, or Regular on a text node after a Roobert style bind
- Use Type here, Search…, Placeholder, or lorem as Empty copy
- Put a magnifying glass on Search, or any mark the live `protoIconMark` does not use
- Nest a raw `Icon/` glyph, Select chevron, or inline vector where the Icon set should sit
- Leave a live stroke on an Icon glyph. Outline it so the weight scales

## After a change

Record new variable, page, and component ids in the state ledger. Note what still waits. Do not claim Publish happened.
