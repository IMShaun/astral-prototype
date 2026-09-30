#!/usr/bin/env python3
"""Build a single HTML file of the prototype-only desk for StatiCrypt."""
from __future__ import annotations

import base64
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "share-dist"
LOGO = "assets/imserv-logomark.svg"


def data_uri(path: Path, mime: str) -> str:
    raw = path.read_bytes()
    b64 = base64.b64encode(raw).decode("ascii")
    return f"data:{mime};base64,{b64}"


def slim_board() -> dict:
    empty = {
        "headline": "Astral prototype",
        "situation": "This share is the live Astral walk. The briefing desk stays on your machine.",
        "can": [
            "Open a screen and walk the estate.",
            "Change company type from the preview bar.",
            "Leave. This copy does not save to a file.",
        ],
        "cannot": [
            "See the morning board on this link.",
            "Change the live product from this page.",
            "Invite people or restore a tool here.",
        ],
        "next": [
            "Pick a company type.",
            "Open Portfolio.",
            "Send notes back to Shaun.",
        ],
        "know": [],
        "today": [],
        "done": [],
        "groups": [],
        "access": [],
    }
    return {
        "updated": "2026-09-07",
        "activeTeam": "imserv",
        "activeSection": "prototype",
        "teams": [
            {"id": "imserv", "name": "IMSERV"},
            {"id": "off-axis", "name": "Off Axis"},
            {"id": "stagerise", "name": "Stagerise"},
        ],
        "access": {"company": [], "people": []},
        "boards": {
            "imserv": dict(empty),
            "off-axis": dict(empty),
            "stagerise": dict(empty),
        },
    }


def main() -> None:
    OUT.mkdir(exist_ok=True)
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    ui = (ROOT / "astral-ui.js").read_text(encoding="utf-8")
    proto = (ROOT / "prototype.js").read_text(encoding="utf-8")
    app = (ROOT / "app.js").read_text(encoding="utf-8")
    systems = json.loads((ROOT / "data" / "design-systems.json").read_text(encoding="utf-8"))
    logo_uri = data_uri(ROOT / LOGO, "image/svg+xml")
    proto = proto.replace(f'"{LOGO}"', f'"{logo_uri}"')
    proto = proto.replace(f"'{LOGO}'", f"'{logo_uri}'")

    fonts = {
        "/assets/fonts/Roobert-Regular.otf": ROOT / "assets/fonts/Roobert-Regular.otf",
        "/assets/fonts/Roobert-Medium.otf": ROOT / "assets/fonts/Roobert-Medium.otf",
        "/assets/fonts/Roobert-SemiBold.otf": ROOT / "assets/fonts/Roobert-SemiBold.otf",
    }
    for url, path in fonts.items():
        if path.exists():
            css = css.replace(url, data_uri(path, "font/otf"))

    boot = {
        "board": slim_board(),
        "systems": systems,
    }
    boot_js = (
        "window.WORK_DESK_SHARE=true;"
        "window.WORK_DESK_BOOT=" + json.dumps(boot, ensure_ascii=False) + ";"
    )

    html = html.replace("<title>Work Desk</title>", "<title>Astral</title>", 1)
    html = html.replace("<body>", f'<body class="is-share"><script>{boot_js}</script>', 1)
    html = html.replace(
        "<script>window.WORK_DESK_SHARE=true;</script>",
        f"<script>{boot_js}</script>",
        1,
    )
    html = re.sub(
        r'<link rel="stylesheet" href="styles\.css[^"]*" />',
        lambda _: "<style>\n" + css + "\n</style>",
        html,
        count=1,
    )
    html = re.sub(
        r'<script src="astral-ui\.js[^"]*"></script>\s*<script src="prototype\.js[^"]*"></script>',
        lambda _: "<script>\n" + ui + "\n</script>\n<script>\n" + proto + "\n</script>",
        html,
        count=1,
    )
    html = re.sub(
        r'<script src="app\.js[^"]*"></script>',
        lambda _: "<script>\n" + app + "\n</script>",
        html,
        count=1,
    )

    dest = OUT / "plain.html"
    dest.write_text(html, encoding="utf-8")
    print(dest)


if __name__ == "__main__":
    main()
