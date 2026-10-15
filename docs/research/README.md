# Research memory

Living record of what the organisation has **learned**. Planning, coding, and synthesis happen in `/ux-research`. This folder stores the evidence trail.

The method lives in `.cursor/skills/ux-research/`. Invoke `/ux-research` to review what we know. It does not start a study until you say **Build plan**.

## Layout

| Path | Role |
| --- | --- |
| `inventory.yml` | Index of studies. Empty until a real study exists. |
| `studies/` | Plans, sessions, transcripts, notes |
| `plans/` | Plan templates and the presentation templates record as PDF. Shown on the Work Desk under Research, Projects |
| `insights/` | Insights with provenance, updated across rounds |
| `archetypes/` | Behavioural archetypes |
| `journeys/` | Journey evidence |
| `experience/` | KEI taxonomy (`how`, `structure`, `cuts`) and named scores (`keis`). Scores stay empty until measured |
| `reports/` | Reports, deck outlines, and the example usability report PDF. Shown under Research, Reporting |

Do not invent studies, quotes, personas, or scores to fill these folders.

Walk findings on the Work Desk stay in `data/board.json` Research. Each insight names its `source` (today all are `team`), which shows as a tag. Research has six tabs on the desk: Strategy (the default), Projects, Insights, Analytics, Reporting, and Documents. Analytics shows the Key Experience Indicators. Insights holds the findings. Projects lists every piece of research in `research.plans`, filtered by `activity`: discovery (quick walkthroughs, sit-ins, and look-arounds to learn a system), usability, architecture, or workshopping. Nothing picked shows everything. Templates set `template: true`. Each card still shows doing, planned, or done. A study with a `task` follows that task, so ticking it on Today marks the study done. Each insight names its `study`, which lists it on that study's page. Reporting lists `research.reports`. It reads markdown in `reports/` in place and shows a PDF `file` in a viewer. Set `example: true` to tag a report as an Example. The example usability report and the presentation templates record are built from `assets/brand/deck/`. Strategy lists `research.moves`, which are suggested next activities. Each one reads as one sentence: "Since you know `know`, I would suggest `run` with `with` so we can better understand `learn`." Each move lists the `insights` it rests on, has an `activity`, and can name a `group` and a `guide` template. Moves rank by their strongest insight: severity first, then score, then evidence. The top open move is "Your next move". Add to Projects turns a move into a planned project and links it through `project`. The tab also lists activity types with no research yet, and the user groups' open questions that no move covers. They are named problems from talks. They are not copied here unless a study backs them.

## Documents

Every PDF made for the research shows under Research, Documents. The tab gathers it from the board, so a file is never listed twice:

- A project's documents, in `documents` on its entry in `research.plans`. Each has `id`, `n`, `title`, `status`, `date`, `summary`, `file`, `pages`, and `format`. They also show on the project page.
- A project's own PDF `file`. A template's PDF shows as a Template.
- A report whose `file` is a PDF.
- `research.documents`, for a PDF that belongs to no project. Give it `id`, `title`, `kind`, `date`, `summary`, `file`, `pages`, and `format`. Add `study` to file it under a project, or `report` to link a report.

When you make a document, such as a plan, script, one-pager, or deck, save the PDF under `docs/research/` and add it to the board in one of these places. If it came from a project, put it on that project. Otherwise put it in `research.documents`.

Pattern decisions stay in `docs/ux/`.
