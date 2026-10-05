# Astral prototype

Live IMSERV Astral prototype source.

## Walk it in the browser

https://imshaun.github.io/astral-prototype/

That page is password gated. Ask Shaun for the password.

## Run the code

Download this repository. In the folder:

```
python3 server.py 5190
```

Open http://127.0.0.1:5190/

This copy is the prototype and the library. The Work Desk briefing board sits behind it.

## Open the Work Desk

The Work Desk is hidden from people walking the prototype. To open it:

1. Open the prototype. If the preview bar is shut, press Expand.
2. Hold Shift and click the Library tab three times, quickly.

The page reloads as the Work Desk: Today, User groups, Research (with Strategy, Projects, Insights, Analytics, and Reporting as tabs), UI library, Language, Patterns, Prototype, Branding, and Skills. Do the same again from the prototype preview bar to go back. It only lasts for that browser tab.

Desk content lives in `data/board.json`, `data/skills.json`, `data/resources.json`, `data/roadmap.json`, `docs/research`, `docs/ux`, and `assets/brand`. Transcripts wait in `inbox/` and move to `archive/` once tidied. The server never serves `inbox/`, `archive/`, or `.cursor/`.

The password-gated walk on GitHub Pages is built from the live page's board, so the desk there opens empty.

Do not commit passwords.
