# Brand packs

**No visual research artefact may be generated without loading the active brand pack.**

If no pack exists, do not invent a logo, colour palette, typeface, or branded presentation. Ask for the brand source or produce a clearly labelled **neutral draft**.

```
assets/brand/
  README.md          ← this file
  astral/            ← IMSERV / Astral (this desk)
  <client-id>/       ← independent pack per client. Never mix.
```

Each pack should eventually contain:

| File | Purpose |
| --- | --- |
| `brand.md` | How to load logo, type, colour, spacing, grid, charts, imagery, voice, terminology, headers, confidentiality |
| `research-plan-template` | Plan document structure |
| `presentation-template` | Deck layout, quote treatment, insight slides |

Do not copy one client’s material into another pack.

For Astral, start at [astral/brand.md](astral/brand.md). Load live tokens from `data/design-systems.json` branding. Do not invent Brand Book values.
