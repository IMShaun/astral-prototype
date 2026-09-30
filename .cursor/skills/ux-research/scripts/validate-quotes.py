#!/usr/bin/env python3
"""Check that claimed quotes exist verbatim in source files.

Never invent or correct a quote. Exit 1 if a quote is missing or altered.

Usage:
  python3 validate-quotes.py --source SESSION.md --quote 'exact words'
  python3 validate-quotes.py quotes.json

JSON:

  {
    "quotes": [
      {"text": "verbatim", "source": "docs/research/studies/r03/p03.md"}
    ]
  }
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


def contains_verbatim(haystack: str, quote: str) -> bool:
    needle = quote.strip()
    if not needle:
        return False
    return needle in haystack


def check_pair(source: Path, quote: str) -> str | None:
    if not source.is_file():
        return f"missing source file: {source}"
    text = source.read_text(encoding="utf-8")
    if not contains_verbatim(text, quote):
        return f"quote not found verbatim in {source}: {quote[:80]!r}"
    return None


def from_json(path: Path) -> list[tuple[Path, str]]:
    data = json.loads(path.read_text(encoding="utf-8"))
    rows = data.get("quotes") or []
    pairs = []
    for i, row in enumerate(rows):
        text = (row or {}).get("text") or ""
        src = (row or {}).get("source") or ""
        if not text or not src:
            sys.exit(f"{path}: quotes[{i}] needs text and source")
        pairs.append((Path(src), text))
    return pairs


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", nargs="?", help="JSON list of quotes")
    parser.add_argument("--source", type=Path)
    parser.add_argument("--quote")
    args = parser.parse_args()

    pairs: list[tuple[Path, str]] = []
    if args.manifest:
        pairs.extend(from_json(Path(args.manifest)))
    if args.source or args.quote:
        if not (args.source and args.quote):
            sys.exit("Provide both --source and --quote")
        pairs.append((args.source, args.quote))
    if not pairs:
        sys.exit("Nothing to check")

    errors = [err for src, quote in pairs if (err := check_pair(src, quote))]
    for err in errors:
        print(err, file=sys.stderr)
    if errors:
        return 1
    print(f"OK {len(pairs)} quote(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
