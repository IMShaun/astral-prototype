# Constructing a component in Figma

First pack for this skill. Use these notes whenever a Figma component is created or rebuilt. Keep the words. Do not swap in another system’s construction method.

## Executive Summary

Figma components form the backbone of a scalable design system. By defining shared styles (colors, typography, spacing) and reusable components early, teams can make one update in the master and have it propagate everywhere. Best practices centre on reusability and single source of truth – for example, creating a living style guide so that all designs draw from the same library. We recommend an atomic approach: start with simple elements (“atoms” like buttons or icons) and compose them into larger components (“molecules” and “organisms”). Use Figma’s features – Auto Layout, constraints, variants and component properties – to make components responsive and flexible. Name and organize components clearly (using pages/frames or slash-hierarchies) so they are easy to find. Throughout development, document usage and accessibility notes (e.g. WCAG contrast) to keep components robust and consistent. Finally, establish workflows for library publishing, versioning (branches), and developer handoff (Dev Mode) to ensure maintainability. The guidelines below detail principles, tools, and concrete workflows for Figma component design.

On this desk, “shared styles (colors)” means **primitive and semantic variables** in Astral Primitives and Astral Semantic. Apply those variables. Do not treat paint styles as the way to apply colour.

## Principles & Goals

**Reusability:** Components and styles should be defined once and reused everywhere. Figma’s components and shared styles allow a single change to update all instances across files. This minimizes duplication and prevents “button drift” over time.

**Scalability:** Build in layers (atoms→molecules→organisms) so adding new interfaces is fast. Focus on the top 20% of components that cover 80% of use cases. Use component variants and properties so one master can handle many states (e.g. sizes, states, theming).

**Maintainability:** Keep a single source of truth. Bundle components, styles and variables in a shared library. Adopt clear naming (forward-slash hierarchies or organized pages) to avoid confusion. Document intended usage and version history so maintainers know why things were built.

**Accessibility:** Integrate accessibility from the start. For each component, ensure sufficient color contrast, focus states, and keyboard targets. For example, Eleken notes that documenting each component with its WCAG contrast ratios helps maintain accessibility by design. Use plugins (Contrast Checkers, A11y Linters) in Figma to validate as you build.

On this desk, keep WCAG AA pairings from the IMSERV Brand Book. Black on white, white on black, cyan on black, and black on cyan. Do not put cyan type on white. Filled primary buttons use white type. Quiet outlines are 1px Infra Grey B. Focus is a 2px black edge. Disabled is Infra Grey, not a faded colour.

**Performance:** Complex libraries can slow Figma. Keep layers count minimal and avoid unnecessary nesting or hidden layers. For example, trimming hidden layers and splitting giant-variant components into simpler ones greatly improved performance in community reports. Optimize vectors and raster assets (use optimized SVGs or compressed images) and limit variant counts per component to what’s needed.

## Figma-Specific Features

**Components & Instances:** Figma components are reusable UI objects (like symbols). Once defined, you can place instances in designs; editing the master component updates all instances. Components can nest other components, enabling a compositional workflow.

**Variants & Component Sets:** A component set groups similar component variants (e.g. different button states) into one object. Use variant properties (such as “Type”, “Size”, “State”) to distinguish variations. Figma recommends separate properties for each aspect (e.g. Type: Primary/Secondary and Size: Small/Large), rather than one combined “Style” property, to allow mix-and-match and easier browsing. Variant grouping keeps libraries tidy and allows switching between modes on instances.

**Component Properties (Boolean, Instance, Text, Slot):** Newer Figma versions let you expose configurable attributes on a component. For example, a boolean property can toggle an icon layer on/off (show/hide). An instance swap property lets a designer choose from predefined alternatives (e.g. swapping an icon within a component). A text property marks text fields as editable. There are also variant properties (if further controlling variant grouping) and slot properties to define flexible “containers” for content. These consolidate all editable parts into one panel so users can quickly adjust a component without digging into nested layers.

**Interactive Components:** Figma supports prototyping interactions inside components. By defining prototype “Change to” actions between variants, you can have, say, a button automatically switch from default→hover→pressed on click, without separate prototype frames. These interactions travel with instances. This reduces prototype complexity (no 32 duplicate frames for checkbox states, for example).

**Auto Layout:** Auto Layout frames respond dynamically as content changes. In practice, build buttons, cards, lists, etc. using Auto Layout so they resize for different text lengths or screen sizes. Figma’s Auto Layout supports horizontal, vertical, or grid flows. Key properties include padding (inside spacing) and gap (between items). Use the Resizing options: typically “Hug contents” on a parent frame (to wrap tightly around its children) and “Fill container” or fixed on children for responsiveness. For example, a button frame can hug its text content so it grows/shrinks as the label changes.

**Constraints:** (In non-Auto Layout frames) set how child layers anchor or scale relative to their parent (left/right/center/static). Constraints ensure components behave predictably when resized. In combination with Auto Layout, constraints help fine-tune complex layouts (e.g. centering an image within a resizable card).

**Nested Components:** Leverage composition by nesting: e.g., use a basic “shape” component (an atom) inside every button component. Updating that shape (color, corner radius) then cascades to all button variants. This enforces consistency without manual updates.

**Styles and Tokens:** Figma Styles are shared design attributes. Create text styles (font-size/line-height), color styles, effect styles (shadows, blurs), and grid styles for layout bases. Name them clearly and hierarchically (e.g. Brand / Primary Blue 500). A design token is essentially a named style used in both design and code. For example, instead of hard-coding “#ff0000”, define “Color / Danger / 500”. Eleken highlights that tokens (for colors, typography, spacing, etc.) should be the very first step: updating a token then updates all components using it.

On this desk, colour tokens are Figma variables (`color/gray/0`, `color/status/danger`), not paint styles. Text styles stay colour-agnostic. Bind type colour with a semantic text variable.

**Plugins & Integrations:** Use Figma plugins to enhance the workflow. For example, Figma Tokens or Tokens Studio plugins help sync design tokens to code. Storybook can document coded components in parallel with Figma designs. Accessibility plugins (contrast checkers) validate components on the fly. Developer Handoff mode shows CSS/React specs for selected components, and can pull global tokens into code.

On this desk, live tokens already live in `data/design-systems.json` and `styles.css`. Code Connect waits on an organisation Figma plan. Do not invent a Storybook for Astral.

## Patterns & Architecture

**Atomic Design:** Break UI into Atoms → Molecules → Organisms. Build small components (atoms: buttons, icons, fields) first, then compose them (molecules: navbars, form rows, cards) and larger layouts (pages, templates). This means any change to a foundation “atom” ripples upward automatically.

**Component-Driven Development:** Design screens by assembling components (often in Storybook for developers and Figma for designers). Test small components in isolation before using them in pages.

**Tokens-First:** Define a token palette before designing components. Eleken advises setting up colors, typography scales, spacing, and grid tokens as the foundation. This way, every component you build will already use the correct “source of truth” values.

**Composition over Inheritance:** Figma has no class inheritance. Instead, use nested components (composition). Rather than making one “base button” and inheriting from it, put a shared base component inside every variant. Avoid deeply duplicative structures (“structure components” with hidden layers) which others have found slow down performance.

**Single Source of Truth:** Keep one or a few shared libraries as the canonical source. A Figma design system file, once published as a library, becomes the reference. (Designers enable the library and pull instances rather than copying UI by hand). As one Q&A points out, a design system “bundles reusable components… color and type styles… all in one connected library”.

On this desk the coded Astral library is the source of truth. The published Figma file is the designer copy of that library.

**Theming:** For light/dark modes or multiple brands, either use component variants (a theme property) or duplicate a library per theme. If using variants, consider separate themes as separate variant properties or even separate component sets.

Astral Semantic has Light only. Do not add Dark unless a talk names it.

**Composition vs. Variants:** As Figma notes, nesting states inside one component works, but sometimes separate components for separate states (e.g. separate disabled button component) can make overrides simpler. Balance complexity: overusing properties and variants can confuse users; sometimes it’s simpler to swap in a different component instance.

```text
Design System Library
  Design Tokens (colors, fonts, spacing)
  Styles (text, effects, grids)
  Components
    Atoms (buttons, inputs, icons)
    Molecules (forms, cards)
    Organisms (navbars, modals)
      Button Base Component
      Icon Set
      Primary Buttons
      Secondary Buttons
      Form Group (uses Atoms)
      Page Header
```

## Practical Workflows

**Library Setup:** Create a Figma file dedicated to the component library. Follow a clear structure: e.g. a “Foundations” page for tokens and styles, then one page per major component group (Buttons, Forms, Navigation, etc.). Within pages, use frames or naming to group sub-types.

This file already exists: IMSERV Design System. Keep Cover, Getting Started, Foundations, then one page per component.

**Naming Conventions:** Use consistent naming for files, pages, and components. For example, prefix style names with categories (Color/, Font/Heading 1) so they appear in grouped menus. For components, you can either use slash-hierarchy (e.g. Buttons/Primary/Default) or physically organize them on pages/frames and give them short names. Figma’s team recommends pages/frames as a more visual method: e.g. a “Buttons” page containing frames “Primary”, “Secondary” with button masters inside.

Prefer pages and frames with short component names, matching the live Astral list (Button, Icon button, Input). Variant names stay `Property=Value, Property=Value`.

**File Structure:** Depending on team size, use single vs multiple library files strategically. A small team may put everything in one “UI Kit” file for simplicity. Larger orgs often split by platform or product area (e.g. separate Desktop and Mobile libraries) so designers only enable what they need.

Astral stays one library file.

**Branching & Versioning:** Use Figma’s version history and branching features. When making big refactors (e.g. renaming, reorganizing the library), do it on a branch then merge to main. Always keep a stable published version. Clearly log changes so consumers can accept updates safely.

**Publishing Libraries:** In Figma’s “Team Library” modal, publish your file as a library. Now any file with enabled library can place instances. Re-publish when masters change, and users will see an update notice. Encourage consumers to keep libraries updated for consistency.

The agent cannot publish. Ask them to Publish after a library change.

**Collaboration:** Work with developers from the start. Use Dev Mode to link Figma components to code components (via Figma’s Code Connect or similar). Comment on designs to capture rationale. Hold periodic review sessions to catch drift.

**Handoff to Developers:** Ensure every component has clear specs: Figma’s Inspect panel will show style names, tokens, and CSS variables. For complex components, consider writing a short spec or using Zeroheight/Notion for documentation (Eleken even documented each component’s anatomy and usage rules for devs). Use real content in examples so developers see border cases.

WEB code syntax on variables is `var(--token-name)` from live CSS. Component `description` holds usage. Shared library copy stays work-facing.

Sample content is the live placeholder and the live mark, not dummy latin. Empty fields use the muted hint from the builder. Nested Icon instances use the `protoIconMark` name and the rendered px from `styles.css`. Bind a Roobert text style. Do not leave Inter on the node.

## Techniques for Flexibility

**Parameterized Properties:** Use component properties extensively. For example, a button component can have boolean props for “with icon” vs “no icon”, a swap property to choose one of several icon variants, and a text prop for the label. This lets a single button component serve many use cases.

**Responsive Resizing:** Combine Auto Layout with proper resizing settings. Set the outer frame to Hug contents so it adapts to children, and set key children (like text or input fields) to either Fill container (expanding) or fixed/min/max as needed. Use layout grids (columns) on parent frames to simulate responsive layouts when needed.

**Constraints & Grids:** If not using Auto Layout, apply constraints (e.g. center, scale) so components behave on different breakpoints. Use grid or column styles to align components across screens.

**Advanced Auto Layout Tricks:** Nest Auto Layout frames to combine vertical and horizontal flows (e.g. a horizontal nav inside a vertical sidebar). Use the “Space Between” auto-spacing to evenly distribute items, or “Center” to block-align.

**Min/Max Sizing:** Auto Layout now allows minimum and maximum width/height. For instance, set a text field to min=200px so it never shrinks too small, or a button to max=300px so it stays compact on wide screens.

**Layout Grids for Spacing:** Create custom grid styles (e.g. 8px baseline grid or a 12-column grid) and attach them as needed. This ensures designers align components consistently.

Astral space is the 4px scale already in primitives. Do not invent a new grid.

**Testing Components:** Prototype them in different contexts. Use instances with variant interactions (as in Interactive Components) to test state changes. Preview on multiple devices (Figma has device frames). Tools like Figma’s built-in contrast checker or plugins can catch accessibility issues early. Use visual diff tools (like Figma plugins or Storybook’s Chromatic) to catch unintended changes.

**Exporting Tokens & Code:** Many teams use plugins (e.g. Figma Tokens, Design Tokens) to export style variables as JSON or CSS custom properties for developers. Map component variants to React/CSS states (e.g. a Figma button “Hover” variant corresponds to :hover state). Use naming conventions that mirror your code (Eleken recommends aligning names with codebase, e.g. adding matching prefixes in style names). For example, a Figma text style named “H1” might export to `--font-size-h1`. Consider tools like Zeroheight or style dictionaries to generate code from Figma.

On this desk, export is the other way. Live CSS and `data/design-systems.json` name the tokens. Figma variables use those names. Do not generate Astral from Figma.

## Trade-offs, Pitfalls & Considerations

**Too Many Variants:** While variants simplify component sets, having hundreds in one set can slow updates. Balance by splitting overly large sets into multiple smaller components if needed.

**Hidden Layers:** Using Figma’s “hidden layer” trick in variants can degrade performance. Many community reports note that removing hidden layers speeds up rendering. Instead, use boolean properties to toggle visibility or create separate variants.

**Complex Nesting:** Deeply nested structure components (a component that purely groups others) can make updates heavy. Testing showed that flattening some nesting (even at cost of more variants) improved speed.

**Accessibility:** Not all Figma teams remember to build accessibility from the start. Treat it as a requirement: define accessible color tokens (with good contrast) and build components with focus/focus-visible states. Perform audits (WCAG) regularly as Eleken suggests.

**Performance Limits:** Very large libraries or files with many large images may cause lag. Keep background images low-res or placeholders. Periodically review file size (Figma’s File menu can show file size and version info).

**Testing & QA:** Design-only QA is often overlooked. Encourage reviewing component behaviour in prototypes and on devices. Some teams use user-testing on components (e.g. ensure a complex multi-select works as expected). Maintain a checklist (below) for final QA before publishing.

**Collaboration:** Large teams can face “design debt” if components aren’t enforced. Use design reviews to ensure new work uses the library. Use Figma’s comment threads or Slack integrations to flag when someone creates a lookalike instead of using the component.

## Approach Comparison

| Approach / Strategy | Description | Pros | Cons |
| --- | --- | --- | --- |
| Single Library File | One Figma file contains all components and styles for the team/product. | Everyone enables only one library. No confusion where assets live. Easy to maintain one source. | As it grows, file can become huge. Designers must sift through irrelevant components. Harder to segment by platform/product. |
| Multiple Libraries | Break up components/styles into logical library files (e.g. Desktop vs Mobile, or by product feature). | Designers enable only relevant libraries, reducing clutter. Scales better for large organizations or multi-product teams. | More files to manage and publish. Harder to track cross-library dependencies. |
| Forward-Slash Naming | Organize components by naming them with “categories”, e.g. Buttons/Primary/Default. | Quick way to auto-group components in menus. Good for small systems or Sketch migrants. | Names can become very long and hard to read. Layers panel may need scrolling. |
| Pages & Frames Organization | Use separate pages and frames in the library file to group component types (e.g. a “Buttons” page with frames for primary/secondary). | Decouples organization from name, allowing shorter names. Frame grouping surfaces related components in instance menu for easy swapping. Also space for notes/docs near components. | Requires more setup time. If migrating from slash-names, needs batch rename or reorganization (but Figma’s batch rename helps). |

Astral uses a **single library file** and **pages and frames**. Short names. One page per component.

## Recommended File Structure

A typical component library file might include pages like:

| Page/Section | Contents | Examples/Notes |
| --- | --- | --- |
| Foundations | Global styles and tokens | Color swatches, text styles, spacing tokens, grid definitions. |
| Assets / Icons | Logos, brand marks, SVG icons | Master icon components (each icon is a component). |
| Components – Buttons | Button masters and variants | Frames for “Primary”, “Secondary” buttons; masters like Primary/Default, Primary/Hover, etc. |
| Components – Forms | Inputs, selects, checkboxes, etc. | Each input field as a component; toggles with states. |
| Components – Navigation | Menus, headers, sidebars | Responsive nav bars, dropdowns, tab lists. |
| Components – Data | Tables, charts, cards, lists | Composite components with repeated patterns. |
| Patterns / Templates | Common screen layouts or combos | E.g. a form layout that uses form components, or page templates. |
| Documentation / Notes | Usage guidelines | Text blocks or sticky notes describing do’s/don’ts for teams (visible only in library file). |

Note: Organize similarly across Library files. If multiple libraries exist, ensure consistent page names (e.g. all libraries have a “Foundations” page).

Match pages to live Astral component names. Do not invent a Patterns / Templates page of product screens a talk has not named.

## Checklist for Building Components

1. **Identify Reusable Elements:** Look through existing designs/screens. List repeating UI elements (buttons, cards, icons, etc.). Plan atomic components around these patterns. On this desk, start from `data/design-systems.json` components and the live builders, not from a guessed list.
2. **Define Styles & Tokens:** Create color swatches and text styles for every brand/color. Define a spacing scale and grid tokens. Name styles clearly (e.g. Color / Primary / 500). On this desk, create or update **variables** first, then Foundations swatches bound to those variables.
3. **Build Base Components (Atoms):** Create the simplest components first (e.g. button shape, input box). Use Auto Layout frames so they resize with content.
4. **Nest and Compose:** Place atoms inside larger components. For example, nest the button “shape” in every button variant component. This way one change to the base updates all dependent components.
5. **Create Variants for States/Sizes:** For each component that changes (button hover/active, input states, size variants), use the Variant feature. Group related variants into a component set with clear property names. E.g. add State: Default / Hover / Disabled, or Size: Small / Medium / Large.
6. **Apply Component Properties:** Instead of adding every variation as a separate variant, use boolean/text/instance-swap properties where appropriate. For instance, toggle an icon layer on/off with a boolean prop, or allow swapping an avatar image. This reduces variant count and clarifies customizable parts.
7. **Set Constraints & Layout:** Ensure each component’s children have sensible resizing (hug/fill/fixed) and constraints so the component adapts when resized or in different layouts. Test by stretching and shrinking. Use layout grids for consistent alignment.
8. **Name Components Systematically:** Use a clear, hierarchical naming scheme. If using slashes, follow a pattern (Category/Subcategory/Variant). If using pages, give pages and frames descriptive names (e.g. Page “Cards”, frame “Product Card”). Include variant names (Default, Hover, etc.) in the names.
9. **Add Descriptions:** For each component (and important style), add a description. Explain intended usage (when to use Primary vs Secondary buttons, etc.). This helps users pick the right asset.
10. **Test Interactions:** If prototyping, set up interactive components for key UI (e.g. button hover). Preview the prototype to ensure states work without extra effort.
11. **Review Accessibility:** Check each component for color contrast, font legibility, and sufficient hit area. Use Figma’s accessibility plugins to verify WCAG compliance. Ensure keyboard focus states are represented.
12. **Organize & Publish:** Organize the library file pages (e.g. Foundations, Buttons, Forms) and ensure all masters are grouped. Publish the library. In consuming files, replace any one-off elements with instances from the library.
13. **Document & Share:** Prepare a quick guide or publish documentation (e.g. on Zeroheight, Notion, or Wiki) showing component usage, token definitions, and coding equivalents. Enable Dev Mode or use tools like Tokens Studio for developers to pull token values and code snippets. On this desk, the library site and `data/design-systems.json` already hold that guide.
14. **Iterate and Governance:** Regularly gather feedback. Update the library as UI evolves. Version or branch changes carefully and communicate updates. Maintain a change log and encourage team to always use the official components for consistency.

## Building sequence

Use this order. The dated example in the source pack is a sequence, not this desk’s calendar.

1. Research needs and define design tokens (colors, type, spacing).
2. Set up library file and naming conventions.
3. Create atomic components (buttons, inputs, icons) with Auto Layout.
4. Add variants and component properties (states, sizes, toggles).
5. Build composite components (forms, cards, navs) from atoms.
6. Organize pages/frames and document usage.
7. Publish library, collect feedback, and iterate.

## Sources

This report draws on Figma’s official best practices and leading design system resources. For further study, see Figma’s help articles on variants and component properties, as well as open-source UI kits like Material Design 3, IBM Carbon, and community Figma libraries for practical examples.

Those kits are examples of structure. Do not copy their colour, type, or voice into Astral.
