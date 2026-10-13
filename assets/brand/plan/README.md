# Branded research plan PDFs

A4 research documents in the IMSERV usability-test-plan style. Each project gets three:

1. **Proposal.** Why the work is needed, our goals, and what we propose.
2. **Interview plan and script.** How the sessions run, who takes part, and the script. Every question names its objective.
3. **Survey plan and script.** How the survey is built, piloted, and analysed, and the questions with their routing. Every question names its objective.

| File | Role |
| --- | --- |
| `plan.css` | Template styles. Fonts load from `assets/fonts/`. |
| `customer-discovery.js` | `window.PLAN`: plan content and draft scripts. Do not add findings or names the plan has not got. |
| `document.html?d=<id>` | Renders one document: `proposal`, `interview`, or `survey`. |
| `build.js` | Prints each of `PLAN.documents` to `docs/research/plans/customer-discovery/`. |

## Build

Serve the repo root, then run:

```powershell
node assets/brand/plan/build.js http://127.0.0.1:5192
```

It needs `playwright-core` and Microsoft Edge. If you change page counts, update `pages` on the matching `documents[]` item in `data/board.json`.

Script wording, timings, and survey questions are drafts. Grey answer options are placeholders to fill from discovery. Consent wording is a neutral draft for legal review. Template photos need a brand-owner check before external use.