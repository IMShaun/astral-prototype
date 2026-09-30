# Research scripts

These checks never manufacture missing evidence. If a value is absent, they fail.

| Script | Purpose |
| --- | --- |
| `validate-quotes.py` | Confirm a quote exists verbatim in a source file |
| `validate-evidence.py` | Check `docs/research/inventory.yml` and insight frontmatter |
| `calculate-experience-score.py` | Target-normalised Experience Score from a complete metrics file |

```
python3 .cursor/skills/ux-research/scripts/validate-quotes.py --source SESSION.md --quote 'exact words'
python3 .cursor/skills/ux-research/scripts/validate-evidence.py
python3 .cursor/skills/ux-research/scripts/calculate-experience-score.py metrics.json
```

JSON manifests and `--source` / `--quote` use the standard library only.

Do not add packages without approval. Do not generate plans or decks from scripts in version one. The agent writes those from templates after **Build plan**.

Plan and presentation builders stay unused until brand templates exist. They must not fill empty participant or metric fields.
