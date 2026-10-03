# Presentation deck

HTML rebuild of the IMSERV presentation templates (Titles, Dividers, Graphics, Imagery & Tables, Imagery & Text, Tables, Text Heavy). Slides are 1920 × 1080.

| File | Role |
| --- | --- |
| `deck.css` | Slide frame, type, colour, cards, severity marks, screenshot highlights |
| `deck.js` | Shared helpers: slide shell, `shot()` with numbered highlights, severity badges |
| `layouts.js` | One builder for each template page (`window.DeckLayouts`) |
| `templates.js` | The guideline record: every page, what it is for, when to use it, when not to |
| `report.js` | Example usability testing report built from the layouts |
| `presentation-templates.html`, `usability-report.html` | Pages that render each deck |
| `screens/`, `photos/`, `img/`, `logo/` | Screenshots, photography, illustrations, wordmarks |
| `build.js` | Prints both decks to PDF |

## Usability report

`report.js` keeps the content at the top: `STUDY`, `TASKS`, the findings `F`, `FINDING_SLIDES`, `TOP5` and `TEAM`. Each finding has a severity (`positive`, `low`, `medium`, `high`, `critical`), a short title, where it was found, how it affected people, why to fix it, the fix, and a highlight box `hl` in screenshot pixels. Put one to three findings on each finding slide.

## Build the PDFs

Serve the repo root on port 5190, then run:

```
node assets/brand/deck/build.js
```

It needs `playwright-core` and Microsoft Edge. It writes `docs/research/reports/usability-report-example.pdf` (Research, Reporting) and `docs/research/plans/presentation-templates.pdf` (Research, Projects).
