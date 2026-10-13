# Branded research plan PDFs

A4 plan PDFs in the IMSERV usability-test-plan style. One overview, then one per activity.

| File | Role |
| --- | --- |
| `plan.css` | Template styles. Fonts load from `assets/fonts/`. |
| `customer-discovery.js` | `window.PLAN`: plan content only. Do not add findings or names the plan has not got. |
| `activity.html?a=<id>` | Renders one activity, or `?a=overview`. |
| `build.js` | Prints every page to `docs/research/plans/customer-discovery/`. |

## Build

Serve the repo root, then run:

```powershell
node assets/brand/plan/build.js http://127.0.0.1:5192
```

It needs `playwright-core` and Microsoft Edge. If you change activity page counts, update `pages` on the matching `activities[]` item in `data/board.json`.

Consent wording is a neutral draft for legal review. Template photos need a brand-owner check before external use.
