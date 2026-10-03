# Research memory

Living record of what the organisation has **learned**. Planning, coding, and synthesis happen in `/ux-research`. This folder stores the evidence trail.

The method lives in `.cursor/skills/ux-research/`. Invoke `/ux-research` to review what we know. It does not start a study until you say **Build plan**.

## Layout

| Path | Role |
| --- | --- |
| `inventory.yml` | Index of studies. Empty until a real study exists. |
| `studies/` | Plans, sessions, transcripts, notes |
| `plans/` | Plan templates as PDF. Shown on the Work Desk under Research, Planning |
| `insights/` | Insights with provenance, updated across rounds |
| `archetypes/` | Behavioural archetypes |
| `journeys/` | Journey evidence |
| `experience/` | KEI taxonomy (`how`, `structure`, `cuts`) and named scores (`keis`). Scores stay empty until measured |
| `reports/` | Reports and deck outlines |

Do not invent studies, quotes, personas, or scores to fill these folders.

Walk findings on the Work Desk stay in `data/board.json` Research. Each insight names its `source` (today all are `team`), which shows as a tag. Research has three tabs on the desk. Insights holds the findings. Planning lists every piece of research in `research.plans`, filtered by `activity`: usability, architecture, or workshopping. Templates set `template: true`. Each card still shows doing, planned, or done. A study with a `task` follows that task, so ticking it on Today marks the study done. Each insight names its `study`, which lists it on that study's page. Reporting lists `research.reports` and reads the markdown in `reports/` in place. They are named problems from talks. They are not copied here unless a study backs them.

Pattern decisions stay in `docs/ux/`.
