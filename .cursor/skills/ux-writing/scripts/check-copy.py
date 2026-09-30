#!/usr/bin/env python3
"""Lint UX copy. Flags length, glossary clashes and discouraged phrases.

This is a linter, not a judgement that copy is good. Pass one string per
line on stdin, or paths as arguments. Lines starting with # are ignored.

Exit 0 if only warnings, or if clean. Exit 1 on usage errors.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
TERM_PATH = Path(__file__).resolve().parents[1] / "references" / "terminology.md"

FLAG = [
    r"\butilize\b",
    r"\bcommence\b",
    r"\bin order to\b",
    r"\bplease note\b",
    r"\bsimply\b",
    r"\bobviously\b",
    r"\beasily\b",
    r"\boops\b",
    r"\bforbidden\b",
    r"\billegal\b",
    r"something went wrong",
    r"\bclick here\b",
    r"gdpr compliant",
    r"by continuing, you agree",
]

AMERICAN = [
    (r"\bcolor\b", "colour"),
    (r"\bbehavior\b", "behaviour"),
    (r"\bcenter\b", "centre"),
    (r"\blicense\b", "licence"),
    (r"\borganise\b", "organize"),
    (r"\borganisation\b", "organization"),
    (r"\blocalisation\b", "localization"),
]

DISALLOWED_HINTS = [
    (r"\btenant\b", "Company"),
    (r"\bend customer\b", "Customer"),
    (r"\bthird-party user\b", "Broker / TPI"),
    (r"\backnowledged\b", "Unread or Resolved"),
    (r"\blast period\b", "this year against last year"),
]

BUDGETS = {
    "cta": 24,
    "nav": 24,
    "label": 32,
    "title": 48,
    "tooltip": 100,
    "help": 140,
    "toast": 100,
    "error": 160,
    "empty-title": 40,
    "empty-body": 140,
    "card-sub": 80,
    "onboarding-title": 48,
    "onboarding-body": 160,
}


def load_canonical() -> list[str]:
    terms: list[str] = []
    if not TERM_PATH.exists():
        return terms
    for line in TERM_PATH.read_text(encoding="utf-8").splitlines():
        if not line.startswith("| ") or line.startswith("| Canonical") or line.startswith("| ---"):
            continue
        cell = line.split("|")[1].strip()
        if cell and cell != "Canonical":
            terms.append(cell)
    return terms


def lint(text: str, kind: str | None) -> list[str]:
    warnings: list[str] = []
    lower = text.lower()
    for pattern in FLAG:
        if re.search(pattern, lower):
            warnings.append(f"flagged phrase matching /{pattern}/")
    if "color:" in lower or "--color" in lower or "css" in lower:
        pass
    else:
        for pattern, prefer in AMERICAN:
            if re.search(pattern, lower) and prefer not in lower:
                warnings.append(f"en-GB-oxendict: prefer {prefer}")
    for pattern, prefer in DISALLOWED_HINTS:
        if re.search(pattern, lower):
            warnings.append(f"glossary: prefer {prefer}")
    if kind and kind in BUDGETS:
        limit = BUDGETS[kind]
        if len(text) > limit:
            warnings.append(f"length {len(text)} over {kind} budget {limit}")
    if re.search(r"[;:—]| - ", text) and kind in {
        "cta",
        "nav",
        "label",
        "title",
        "toast",
        "empty-title",
        "card-sub",
    }:
        warnings.append("Astral UI copy avoids colons, semicolons and em dashes")
    if kind == "card-sub":
        stripped = text.lstrip()
        if stripped and stripped[0].isalpha() and not stripped[0].isupper():
            warnings.append("card subtext starts with a capital letter")
    return warnings


def main() -> int:
    parser = argparse.ArgumentParser(description="Lint Astral UX copy strings.")
    parser.add_argument("paths", nargs="*", help="Text files, one string per line")
    parser.add_argument(
        "--kind",
        help="Budget key: cta, label, title, help, error, card-sub, ...",
    )
    parser.add_argument("--text", action="append", default=[], help="A string to lint")
    args = parser.parse_args()
    items: list[str] = list(args.text)
    if args.paths:
        for path in args.paths:
            for line in Path(path).read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if line and not line.startswith("#"):
                    items.append(line)
    if not items and not sys.stdin.isatty():
        for line in sys.stdin:
            line = line.strip()
            if line and not line.startswith("#"):
                items.append(line)
    if not items:
        print("Pass --text, a file, or stdin.", file=sys.stderr)
        return 1
    any_warn = False
    for item in items:
        warns = lint(item, args.kind)
        if warns:
            any_warn = True
            print(item)
            for warn in warns:
                print(f"  - {warn}")
        else:
            print(f"ok\t{item}")
    canonical = load_canonical()
    if canonical and not args.paths:
        print(f"# glossary loaded {len(canonical)} canonical terms from terminology.md")
    return 0 if True else int(any_warn)


if __name__ == "__main__":
    raise SystemExit(main())
