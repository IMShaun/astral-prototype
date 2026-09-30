# Desk notes

Facts from building Astral in this Figma file. Use them so updates stay structured. They do not replace [component-construction.md](component-construction.md).

## Collections and modes

- Primitives `VariableCollectionId:7:2`, mode Value `7:0`.
- Semantic `VariableCollectionId:7:3`, mode Light `7:1`.
- Pages without Light mode resolve semantic aliases to the dummy paint. Use white dummies going forward.
- After `setTextStyleIdAsync`, do not write `fontName` or `paints` on that text. Colour stays on the node through variables, not on the text style.

## Colour

- Apply colour with variables. Do not recreate paint styles as the way to apply colour.
- Status hues exist as primitive red, green, and yellow, then semantic success, warning, danger, and info.
- `700` is for type on white and for fills with white type. `subtle` is a wash under black type.
- Info aliases Extra Cyan 2. Do not put cyan type on white.

## Construction that already failed once

- `COMPONENT_SET.layoutMode = NONE` stacked variants and ignored positions. Use `HORIZONTAL` with wrap, padding, and gap, like Button.
- Focus as `DROP_SHADOW` painted a black blob. Match CSS with nested frames: black ring (pad 2) > white gap (pad 2) > field.
- Shared TEXT properties are set-wide. Empty Input must unbind Value. Focus Empty clears characters. Filled binds Value.
- A filled value with `layoutAlign` absolute and height wrap collapsed to a sliver. Use fill width and an explicit text height.
- Select Open now has the live listbox. The face stays 36px (`size/control-sm`), same as Default, Hover, Disabled, and the Input pill. The menu is absolute, 8px below the face, so Open does not grow the field. Menu pad 8, radius 16 (`radius/lg`), 1px border, 4px gap. Selected row uses subtle. Longer options grow the menu to the right. This instance lists Total consumption and Individual consumption. Five-row scroll still waits on a longer list.
- Live shell fields and buttons are 36px, radius `var(--radius-button)` 999. JSON `radius.control` 8px is not the live field. Button Medium now matches 36px.
- Heading/M letter-spacing is `-0.03em` in JSON. Figma still 0 because Roobert cannot load through MCP.
- Search has no leading magnifying glass. Filled uses close. Live clear SVG is 10px on a 24px hit. Figma Icon Size 16 is unmatched until they name a 10 size.
- Select uses Icon Size 16 with Icon/Chevron. Open rotates it 180. Do not nest a separate Select chevron atom.
- Graph Previous and Next are Icon button, Size 18, Icon/Previous and Icon/Next. Pagination is that pair. Date picker nests Pagination next to Select. Do not draw a second arrow control.
- The checkbox is Control Kind=Checkbox. 16px, radius 2, 1px Infra Grey B. On is black with Icon/Tick Size 16 Inverse. Filter overlays and multi Select instance that mark. Do not keep a second Tick set. Live `.astral-check` is the same 16px box with a CSS tick.
- Icon button SVG is 18px. State and Flow marks are 16px.
- Icon glyphs sit on a 24 canvas. Outline the stroke into a fill so Size 16 and 18 scale the weight. Bind the fill to the icon colour variable. Do not leave a 2px stroke on the glyph.
- Nav link Current is white at 18% (`rgba(255,255,255,0.176)`). Hover is white at 8%. Bind `color/gray/0` and set paint opacity. Do not use solid `color/on-nav` as the fill. Type on those states stays `color/on-nav`. Do not use Infra Grey C on the bar.
- Notifications sits to the left of ME. Plain Icon button, Icon/Notice Size 18 Inverse. Count Filter 18px cyan, top -4 right -4. Gap 4px. No outline on the black bar.
- Empty copy must be the live placeholder. `name@company.com`, `Search site or meter`, `Search people`, `Search downloads`, `dd/mm/yyyy`, `Comment`, `Pick a discipline`. Not Type here.
- Select labels use Body/M 16 / 24, same as live inherit.

## MCP writes

- `figma.createText` is forbidden. Use `$fig.text` or existing text nodes.
- Roobert load fails. Inter, then layout and characters, then `setTextStyleIdAsync`.
- `figma.notify` throws. Do not call it.
- Colours are 0–1, not 0–255.
- Rehydrate variables with `$fig.getVar` or `getVariableByIdAsync` in the same call that binds them. Handles do not survive across calls.
- `setCurrentPageAsync` once per script. Split multi-page work.

## Ledger

`/tmp/design-system-state-astral-YYYYMMDD.json`. Read it at the start of a Figma pass. Write ids after each create. Log unmatched tokens and variants there.

Name mapping lives in [code-to-figma.md](code-to-figma.md).
