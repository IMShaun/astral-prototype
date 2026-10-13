#!/usr/bin/env python3
"""Build a single HTML file of the prototype and the full Work Desk for StatiCrypt."""
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


def desk_boot() -> dict:
    """The full desk, plus the files its pages would otherwise fetch from the data folder."""

    def read_json(rel: str):
        return json.loads((ROOT / rel).read_text(encoding="utf-8"))

    board = read_json("data/board.json")
    refs: set[str] = set()

    def walk(value) -> None:
        if isinstance(value, dict):
            for item in value.values():
                walk(item)
        elif isinstance(value, list):
            for item in value:
                walk(item)
        elif isinstance(value, str) and re.match(r"^/?docs/research/.+\.(md|pdf)$", value, re.I):
            refs.add(value)

    walk(board)
    reports: dict[str, str] = {}
    files: dict[str, str] = {}
    for ref in sorted(refs):
        path = ROOT / ref.lstrip("/")
        if not path.exists():
            print("missing", ref)
            continue
        if ref.lower().endswith(".md"):
            reports[ref] = path.read_text(encoding="utf-8")
        elif path.stat().st_size <= 5_000_000:
            files[ref] = base64.b64encode(path.read_bytes()).decode("ascii")
        else:
            print("skipped large file", ref)
    return {
        "board": board,
        "systems": read_json("data/design-systems.json"),
        "roadmap": read_json("data/roadmap.json"),
        "skills": read_json("data/skills.json"),
        "resources": read_json("data/resources.json"),
        "experience": read_json("docs/research/experience/keis.json"),
        "reports": reports,
        "files": files,
    }


def main() -> None:
    OUT.mkdir(exist_ok=True)
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    ui = (ROOT / "astral-ui.js").read_text(encoding="utf-8")
    proto = (ROOT / "prototype.js").read_text(encoding="utf-8")
    app = (ROOT / "app.js").read_text(encoding="utf-8")
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

    boot = desk_boot()
    boot_js = (
        "window.WORK_DESK_SHARE=true;"
        "window.WORK_DESK_BOOT=" + json.dumps(boot, ensure_ascii=False).replace("<", "\\u003c") + ";"
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
