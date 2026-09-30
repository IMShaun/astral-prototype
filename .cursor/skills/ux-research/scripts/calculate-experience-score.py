#!/usr/bin/env python3
"""Compute a Feature Experience Score from documented metrics (JSON).

Does not invent values, weights, thresholds, or maturity. Missing fields fail.

Each dimension needs value, red, target, weight, higher_is_better.
Weights must sum to 1 (±0.001).

Target-attainment is 0 at the red threshold and 100 at the target.
Values past the target cap at 100. Values on the wrong side of red are 0.

Usage:
  python3 calculate-experience-score.py metrics.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

REQUIRED = ("value", "red", "target", "weight", "higher_is_better")


def attainment(value: float, red: float, target: float, higher: bool) -> float:
    if target == red:
        raise ValueError("target and red must differ")
    if higher:
        if value <= red:
            return 0.0
        if value >= target:
            return 100.0
        return 100.0 * (value - red) / (target - red)
    if value >= red:
        return 0.0
    if value <= target:
        return 100.0
    return 100.0 * (red - value) / (red - target)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("metrics", type=Path)
    args = parser.parse_args()
    if not args.metrics.is_file():
        sys.exit(f"missing file: {args.metrics}")

    try:
        data = json.loads(args.metrics.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        sys.exit(f"invalid JSON: {exc}")

    dims = data.get("dimensions")
    if not isinstance(dims, dict) or not dims:
        sys.exit("dimensions object is required")

    maturity = data.get("maturity")
    if not maturity:
        sys.exit(
            "maturity is required (no-baseline | provisional | benchmarked | tracking | stale)"
        )

    components = {}
    weight_sum = 0.0
    try:
        for name, spec in dims.items():
            if not isinstance(spec, dict):
                sys.exit(f"{name}: object required")
            missing = [k for k in REQUIRED if k not in spec]
            if missing:
                sys.exit(f"{name}: missing {', '.join(missing)}")
            score = attainment(
                float(spec["value"]),
                float(spec["red"]),
                float(spec["target"]),
                bool(spec["higher_is_better"]),
            )
            components[name] = round(score, 1)
            weight_sum += float(spec["weight"])
        if abs(weight_sum - 1.0) > 0.001:
            sys.exit(f"weights must sum to 1, got {weight_sum}")
        overall = sum(
            components[name] * float(spec["weight"]) for name, spec in dims.items()
        )
    except (TypeError, ValueError) as exc:
        sys.exit(str(exc))

    result = {
        "feature": data.get("feature"),
        "maturity": maturity,
        "experience_score": round(overall, 1),
        "components": components,
    }
    if maturity in {"no-baseline", "provisional"}:
        result["precision"] = "directional-only"
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
