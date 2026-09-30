#!/usr/bin/env python3
"""Validate research repository metadata. Does not invent missing studies.

Checks docs/research/inventory.yml and insight Markdown frontmatter.
Uses only the standard library. Exit 1 on schema problems.
Exit 0 if the inventory is missing or studies is empty.

Usage:
  python3 validate-evidence.py
  python3 validate-evidence.py --root /path/to/repo
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

INSIGHT_STATUSES = {
    "emerging",
    "supported",
    "strong",
    "mixed",
    "superseded",
    "stale",
}
STUDY_STATUSES = {"planned", "in-progress", "complete", "cancelled"}


def simple_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 3)
    if end == -1:
        return {}
    block = text[3:end]
    meta: dict[str, str] = {}
    for raw in block.splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or line.startswith("-"):
            continue
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        meta[key.strip()] = value.strip().strip("\"'")
    return meta


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parents[4],
    )
    args = parser.parse_args()
    research = args.root / "docs" / "research"
    inventory_path = research / "inventory.yml"
    errors: list[str] = []

    study_count = 0
    if inventory_path.is_file():
        raw = inventory_path.read_text(encoding="utf-8")
        if re.search(r"^studies:\s*\[\]\s*$", raw, re.M):
            study_count = 0
        elif re.search(r"^studies:\s*$", raw, re.M):
            study_count = len(re.findall(r"^  - id:", raw, re.M))
            for match in re.finditer(
                r"^  - id:\s*(\S+).*?(?=^  - id:|\Z)", raw, re.M | re.S
            ):
                block = match.group(0)
                if not re.search(r"^    name:", block, re.M):
                    errors.append(f"study {match.group(1)} missing name")
                status = re.search(r"^    status:\s*(\S+)", block, re.M)
                if not status:
                    errors.append(f"study {match.group(1)} missing status")
                elif status.group(1) not in STUDY_STATUSES:
                    errors.append(f"study {match.group(1)} bad status {status.group(1)!r}")
        else:
            errors.append("inventory.yml: expected a studies list")
    else:
        print("OK no inventory yet")
        return 0

    insight_dir = research / "insights"
    if insight_dir.is_dir():
        for path in sorted(insight_dir.glob("*.md")):
            if path.name.lower() == "readme.md":
                continue
            text = path.read_text(encoding="utf-8")
            meta = simple_frontmatter(text)
            if not meta.get("id"):
                errors.append(f"{path.name}: missing id")
            status = meta.get("status")
            if status and status not in INSIGHT_STATUSES:
                errors.append(f"{path.name}: bad status {status!r}")
            body = text.split("---", 2)[-1] if text.startswith("---") else text
            quoted = re.findall(r"“([^”]+)”|\"([^\"]+)\"", body)
            if quoted and not re.search(r"P\d+", body, re.I):
                errors.append(f"{path.name}: quotes present without participant id")

    if errors:
        for err in errors:
            print(err, file=sys.stderr)
        return 1
    print(f"OK {study_count} stud(ies)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
