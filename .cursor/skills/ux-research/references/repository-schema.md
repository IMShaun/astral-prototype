# Repository schema

Linked objects. Provenance must survive from transcript to deck.

## Entities

Study, research question, participant, session, evidence, observation, code, theme, finding, insight, opportunity, archetype, persona, journey, metric, KEI, report, presentation, decision.

Example chain:

```
Insight → supporting findings → observations → participant evidence → transcript/timecode
```

## On-disk layout

```
docs/research/
  README.md
  inventory.yml
  studies/
  insights/
  archetypes/
  journeys/
  experience/
  reports/
```

Empty until real evidence exists. Do not invent studies to fill the tree.

## Inventory fields (study)

`id`, `name`, `round`, `status` (planned / in-progress / complete / cancelled), `decision`, `method`, `objectives`, `participants`, `prototype`, `plan_ref`, `insight_ids`, `kei_ids`, `date`

## Insight fields

`id`, `statement`, `status` (emerging / supported / strong / mixed / superseded / stale), `first_observed`, `last_validated`, `studies`, `participants`, `evidence_count`, `areas`, `archetypes`, `confidence`, `trend`

## Desk vs repository

| Surface | Holds |
| --- | --- |
| `data/board.json` Research | Named walk insights for the morning desk. Severity as the walk named it. |
| Desk Analytics | `how`, `structure`, `cuts`, and named KEIs from `docs/research/experience/keis.json`. Scores stay empty until a study names one. |
| `docs/research/` | Study-backed evidence, insights with provenance, archetypes, KEIs |
| `docs/ux/` | Pattern inventory and UXDRs |

Do not copy walk insights into `docs/research/` unless a real study backs them. Do not invent desk Critical ratings from analysis confidence.

## Retrieval

Answer with sources. If nothing is stored, say the repository is empty.

Recommended calm desk areas later, if built: Overview, Studies, Insights, Users, Journeys, Experience, Reports. Analytics on the Work Desk is the Experience view. Do not expose coding machinery as top-level tabs. Do not auto-start research from the overview.
