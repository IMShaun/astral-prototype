#!/usr/bin/env python3
"""Build a single HTML file of the Astral library for StatiCrypt."""
from __future__ import annotations

import base64
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "library-site"
OUT = ROOT / "share-dist" / "library"
IDENT = re.compile(r"^[A-Za-z_][A-Za-z0-9_]*$")


def data_uri(path: Path, mime: str) -> str:
    raw = path.read_bytes()
    b64 = base64.b64encode(raw).decode("ascii")
    return f"data:{mime};base64,{b64}"


DESK_ROOT_SKIP = {
    "--paper",
    "--ink",
    "--muted",
    "--line",
    "--surface",
    "--mark",
    "--mark-soft",
    "--warn",
    "--warn-soft",
    "--next",
    "--next-soft",
    "--shadow",
    "--radius",
    "--side",
    "--pad",
    "--font",
}


def prototype_product_root() -> dict[str, str]:
    """Live Astral tokens from the prototype :root. Desk aliases stay off this list."""
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    match = re.search(r":root\s*\{(.*?)\n\}", css, re.S)
    if not match:
        return {}
    values: dict[str, str] = {}
    for line in match.group(1).splitlines():
        line = line.strip()
        if not line.startswith("--"):
            continue
        name, _, raw = line.partition(":")
        css_var = name.strip()
        if css_var in DESK_ROOT_SKIP:
            continue
        values[css_var] = raw.strip().rstrip(";")
    return values


def resolve_value(tokens: dict[str, dict], token: dict | None, seen: set[str] | None = None) -> str:
    if not token:
        return ""
    seen = seen or set()
    token_id = token.get("id") or ""
    if token_id in seen:
        return ""
    seen.add(token_id)
    value = token.get("value") or ""
    if value:
        return value
    alias = token.get("alias")
    if alias:
        return resolve_value(tokens, tokens.get(alias), seen)
    return ""


def token_kind(token: dict) -> str:
    token_id = token.get("id") or ""
    css = token.get("cssVar") or ""
    group = (token.get("group") or "").lower()
    ttype = token.get("type") or ""
    if ttype == "color" or ".color." in token_id or css.startswith("--color-"):
        return "colour"
    if "radius" in token_id or css.startswith("--radius") or group == "radius":
        return "shape"
    if (
        ttype in {"fontFamily", "fontWeight", "number"}
        or ".font." in token_id
        or css.startswith("--font")
        or group in {"font", "type size", "ui"}
    ):
        return "type"
    return "space"


def nest(root: dict, path: str, value: str) -> None:
    parts = [part for part in path.split(".") if part]
    if parts and parts[0] == "theme":
        parts = parts[1:]
    if not parts:
        return
    cursor = root
    for part in parts[:-1]:
        next_node = cursor.get(part)
        if not isinstance(next_node, dict):
            next_node = {}
            cursor[part] = next_node
        cursor = next_node
    cursor[parts[-1]] = value


def ts_key(key: str) -> str:
    if IDENT.match(key):
        return key
    return json.dumps(str(key), ensure_ascii=False)


def emit_ts(value, indent: int = 0) -> str:
    pad = "  " * indent
    if isinstance(value, dict):
        if not value:
            return "{}"
        lines = ["{"]
        items = list(value.items())
        for index, (key, child) in enumerate(items):
            comma = "," if index < len(items) - 1 else ""
            lines.append(f"{pad}  {ts_key(str(key))}: {emit_ts(child, indent + 1)}{comma}")
        lines.append(f"{pad}}}")
        return "\n".join(lines)
    return json.dumps(value, ensure_ascii=False)


FONT_FACE = """@font-face {
  font-family: Roobert;
  src: url("./fonts/Roobert-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url("./fonts/Roobert-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url("./fonts/Roobert-SemiBold.otf") format("opentype");
  font-weight: 600 700;
  font-style: normal;
  font-display: swap;
}

"""

LOOK_KEEP = (
    ".astral-btn",
    ".astral-ghost",
    ".astral-text",
    ".astral-icon-btn",
    ".astral-icon-tip",
    ".astral-tip-host",
    ".astral-avatar",
    ".astral-field",
    ".astral-select",
    ".astral-switch",
    ".astral-state",
    ".astral-flow",
    ".astral-card",
    ".astral-count",
    ".astral-filter",
    ".astral-tabs",
    ".astral-modal",
    ".astral-banner",
    ".astral-meter-pill",
    ".astral-empty",
    ".astral-tag",
    ".astral-list",
    ".astral-tree",
    ".astral-group",
    ".astral-table",
    ".astral-sort",
    ".astral-actions",
    ".astral-account",
    ".astral-nav",
    ".astral-links",
    ".astral-link",
    ".astral-brand",
    ".astral-logo",
    ".astral-org-logo",
    ".astral-notice",
    ".astral-chip",
    ".astral-rail",
    ".astral-person",
    ".astral-slide-pill",
    ".astral-muted",
)

LOOK_SKIP = (
    ".astral-app",
    ".astral-stage",
    ".astral-fullscreen",
    ".astral-proto",
    ".astral-gallery",
    ".astral-thumb",
    ".astral-user-group",
    ".astral-lens",
    ".ds-preview",
)

JSX_ATTR = {
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "fill-rule": "fillRule",
    "clip-path": "clipPath",
    "clip-rule": "clipRule",
    "stroke-miterlimit": "strokeMiterLimit",
}


def tokens_css(rows: list[dict], styles: list[dict]) -> str:
    live = prototype_product_root()
    lines = [
        "/* Astral tokens. Put this in src/theme/tokens.css and import it once. */",
        "/* These variables match the live product :root. */",
        "/* Drop Roobert Regular, Medium, and Semibold in src/theme/fonts. Aptos is the fallback. */",
        FONT_FACE.rstrip(),
        ":root {",
    ]
    emitted: set[str] = set()
    for css_var, value in live.items():
        if not value:
            continue
        lines.append(f"  {css_var}: {value};")
        emitted.add(css_var)
    for row in rows:
        css_var = row.get("cssVar") or ""
        value = row.get("value") or ""
        if not css_var or not value or css_var in emitted:
            continue
        if not css_var.startswith("--font-"):
            continue
        lines.append(f"  {css_var}: {value};")
        emitted.add(css_var)
    lines.append("}")
    if styles:
        lines.append("")
        lines.append("/* Named type styles. Use the class or copy the vars into the React piece. */")
        for style in styles:
            class_name = style["className"]
            lines.append(f".{class_name} {{")
            lines.append(f"  font-family: {style['fontFamilyVar']};")
            lines.append(f"  font-size: {style['fontSizeVar']};")
            lines.append(f"  font-weight: {style['fontWeightVar']};")
            lines.append(f"  line-height: {style['lineHeightVar']};")
            lines.append(f"  letter-spacing: {style['letterSpacingVar']};")
            lines.append("}")
            lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def theme_ts(tree: dict, styles: list[dict]) -> str:
    style_obj = {
        style["id"].split(".", 1)[-1].replace(".", "-"): {
            "fontFamily": style["fontFamilyVar"],
            "fontSize": style["fontSizeVar"],
            "fontWeight": style["fontWeightVar"],
            "lineHeight": style["lineHeightVar"],
            "letterSpacing": style["letterSpacingVar"],
        }
        for style in styles
    }
    return (
        "export const theme = "
        + emit_ts(tree)
        + " as const;\n\nexport const typeStyles = "
        + emit_ts(style_obj)
        + " as const;\n"
    )


def work_facing(value):
    """Strip desk-only notes so the shared library stays work-facing."""
    if isinstance(value, dict):
        return {key: work_facing(child) for key, child in value.items()}
    if isinstance(value, list):
        return [work_facing(child) for child in value]
    if not isinstance(value, str):
        return value
    if value.startswith("data:"):
        return value
    text = value
    swaps = (
        ("Shaun Leishman", "Alex Hart"),
        ("shaun@imserv.com", "alex@imserv.com"),
        ("High Street", "Crewe depot"),
        ("this walk is a temporary user", "Temporary logins are in use"),
        ("This walk is a temporary user", "Temporary logins are in use"),
        ("in this walk", ""),
        ("In this walk", ""),
        ("Prototype preview bar", "product"),
        ("Prototype tab", "portal"),
        ("town hall chrome", "product nav"),
        ("on the walk", "in the product"),
        ("Base Gallery", ""),
        ("Gallery still measures", "The live shell uses"),
        ("Do not invent", "Do not add"),
        ("Do not copy Uber icons.", ""),
        ("Do not copy Uber colour.", ""),
        ("live prototype", "live product"),
    )
    for old, new in swaps:
        text = text.replace(old, new)
    text = re.sub(r"[^.]*\bUber\b[^.]*\.", "", text, flags=re.I)
    text = re.sub(r"\bUber\b", "", text, flags=re.I)
    text = re.sub(r"  +", " ", text)
    text = re.sub(r" \.", ".", text)
    return text.strip()


def css_blocks(css: str) -> list[str]:
    text = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    parts: list[str] = []
    buf: list[str] = []
    depth = 0
    for ch in text:
        buf.append(ch)
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                block = "".join(buf).strip()
                if block:
                    parts.append(block)
                buf = []
    return parts


def look_css() -> str:
    blocks = []
    for block in css_blocks((ROOT / "styles.css").read_text(encoding="utf-8")):
        sel = block.split("{", 1)[0]
        if any(skip in sel for skip in LOOK_SKIP):
            continue
        if any(keep in sel for keep in LOOK_KEEP):
            blocks.append(block)
    return (
        "/* Astral look. Put this in src/theme/components.css and import it after tokens.css. */\n"
        + "\n\n".join(blocks)
        + "\n"
    )


def load_icons() -> dict:
    return json.loads((SITE / "icons.json").read_text(encoding="utf-8"))


def to_jsx(inner: str) -> str:
    text = inner
    for old, new in JSX_ATTR.items():
        text = text.replace(old, new)
    roots = re.findall(r"<[^>]+/>|<[^>]+>.*?</[^>]+>", text)
    if len(roots) > 1:
        return "<>" + text + "</>"
    return text


def icon_tsx(icons: dict) -> str:
    lines = [
        'import type { SVGProps } from "react";',
        "",
        "const ICONS = {",
    ]
    names = list(icons.keys())
    for index, name in enumerate(names):
        item = icons[name]
        jsx = to_jsx(item["inner"])
        comma = "," if index < len(names) - 1 else ""
        lines.append(f"  {name}: {{")
        lines.append(f'    viewBox: "{item["viewBox"]}",')
        lines.append(f"    node: {jsx},")
        lines.append(f"  }}{comma}")
    lines.extend(
        [
            "} as const;",
            "",
            "export type IconName = keyof typeof ICONS;",
            "",
            "const COLOURS = {",
            '  primary: "var(--color-text-primary)",',
            '  inverse: "var(--color-text-inverse)",',
            '  cyan: "var(--color-brand-primary)",',
            '  muted: "var(--color-text-muted)",',
            "} as const;",
            "",
            "type Props = {",
            "  name: IconName;",
            "  size?: 16 | 18 | 24;",
            "  colour?: keyof typeof COLOURS;",
            "} & SVGProps<SVGSVGElement>;",
            "",
            "export function Icon({ name, size = 18, colour = \"primary\", ...rest }: Props) {",
            "  const mark = ICONS[name];",
            "  if (!mark) return null;",
            "  return (",
            "    <svg",
            "      viewBox={mark.viewBox}",
            "      width={size}",
            "      height={size}",
            "      aria-hidden=\"true\"",
            "      focusable=\"false\"",
            "      style={{ color: COLOURS[colour] }}",
            "      {...rest}",
            "    >",
            "      {mark.node}",
            "    </svg>",
            "  );",
            "}",
            "",
        ]
    )
    return "\n".join(lines)


def pack_file(path: Path, mime: str, name: str, note: str) -> dict | None:
    if not path.exists():
        return None
    return {
        "id": name,
        "name": name,
        "note": note,
        "href": data_uri(path, mime),
    }


def build_lib() -> dict:
    systems = json.loads((ROOT / "data" / "design-systems.json").read_text(encoding="utf-8"))
    imserv = systems["systems"]["imserv"]
    raw_tokens = imserv.get("tokens") or []
    by_id = {token["id"]: token for token in raw_tokens if token.get("id")}
    live = prototype_product_root()
    keep = set(live)
    for style in (imserv.get("styles") or {}).get("text") or []:
        for key in ("fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing"):
            token = by_id.get(style.get(key) or "") or {}
            css_var = token.get("cssVar") or ""
            if css_var:
                keep.add(css_var)
    rows = []
    tree: dict = {}
    for token in raw_tokens:
        css_var = token.get("cssVar") or ""
        if css_var and css_var not in keep:
            continue
        theme = token.get("theme") or ""
        value = live.get(css_var) or resolve_value(by_id, token)
        row = {
            "id": token.get("id") or "",
            "name": token.get("name") or "",
            "kind": token_kind(token),
            "cssVar": css_var,
            "theme": theme,
            "value": value,
            "status": token.get("status") or "",
        }
        rows.append(row)
        if theme and value:
            nest(tree, theme, value)
    styles = []
    for style in (imserv.get("styles") or {}).get("text") or []:
        def var_for(token_id: str) -> str:
            token = by_id.get(token_id) or {}
            return token.get("cssVar") or ""

        def value_for(token_id: str) -> str:
            return resolve_value(by_id, by_id.get(token_id))

        class_name = "astral-type-" + str(style.get("id") or "").replace("text.", "").replace(".", "-")
        styles.append(
            {
                "id": style.get("id") or "",
                "name": style.get("name") or "",
                "className": class_name,
                "fontFamilyVar": f"var({var_for(style.get('fontFamily') or '')})" if var_for(style.get("fontFamily") or "") else "",
                "fontSizeVar": f"var({var_for(style.get('fontSize') or '')})" if var_for(style.get("fontSize") or "") else "",
                "fontWeightVar": f"var({var_for(style.get('fontWeight') or '')})" if var_for(style.get("fontWeight") or "") else "",
                "lineHeightVar": f"var({var_for(style.get('lineHeight') or '')})" if var_for(style.get("lineHeight") or "") else "",
                "letterSpacingVar": f"var({var_for(style.get('letterSpacing') or '')})" if var_for(style.get("letterSpacing") or "") else "",
                "fontSize": value_for(style.get("fontSize") or ""),
                "fontWeight": value_for(style.get("fontWeight") or ""),
                "sample": style.get("name") or "",
            }
        )
    components = []
    icons = load_icons()
    icon_source = icon_tsx(icons)
    for item in imserv.get("components") or []:
        row = {
            "id": item.get("id") or "",
            "name": item.get("name") or "",
            "react": item.get("react") or item.get("name") or "",
            "file": item.get("file") or "",
            "summary": work_facing(item.get("summary") or ""),
            "usage": work_facing(item.get("usage") or ""),
            "variants": item.get("variants") or [],
            "states": item.get("states") or [],
            "tokens": item.get("tokens") or [],
            "props": work_facing(item.get("props") or []),
            "snippet": work_facing(item.get("snippet") or ""),
            "family": item.get("family") or "core",
        }
        if row["id"] == "icon":
            row["source"] = icon_source
            row["sourceName"] = "Icon.tsx"
        components.append(row)
    token_index = {row["id"]: row for row in rows}
    css = tokens_css(rows, styles)
    ts = theme_ts(tree, styles)
    access = imserv.get("access") or {}
    files = [
        pack_file(
            ROOT / "assets/fonts/Roobert-Regular.otf",
            "font/otf",
            "Roobert-Regular.otf",
            "Put this in src/theme/fonts.",
        ),
        pack_file(
            ROOT / "assets/fonts/Roobert-Medium.otf",
            "font/otf",
            "Roobert-Medium.otf",
            "Put this in src/theme/fonts.",
        ),
        pack_file(
            ROOT / "assets/fonts/Roobert-SemiBold.otf",
            "font/otf",
            "Roobert-SemiBold.otf",
            "Put this in src/theme/fonts.",
        ),
        pack_file(
            ROOT / "assets/imserv-logomark.svg",
            "image/svg+xml",
            "imserv-logomark.svg",
            "Default organisation mark on Settings.",
        ),
        pack_file(
            ROOT / "assets/auth-texture.png",
            "image/png",
            "auth-texture.png",
            "Grid overlay on Infra Grey for sign in, sign-up, and password recovery.",
        ),
    ]
    features_path = SITE / "features.json"
    features = (
        json.loads(features_path.read_text(encoding="utf-8"))
        if features_path.exists()
        else {"lead": "", "items": []}
    )
    def shot_uri(rel):
        shot = SITE / rel if rel else None
        if not shot or not shot.exists():
            return None
        mime = "image/png"
        if shot.suffix.lower() in {".jpg", ".jpeg"}:
            mime = "image/jpeg"
        elif shot.suffix.lower() == ".webp":
            mime = "image/webp"
        return data_uri(shot, mime)

    # Frames repeat across walks, so each image is inlined once and looked up by path.
    media = {}

    def keep(rel):
        if rel and rel not in media:
            uri = shot_uri(rel)
            if uri:
                media[rel] = uri

    for feature in features.get("items") or []:
        for story in feature.get("stories") or []:
            for stage in story.get("stages") or []:
                keep(stage.get("image") or "")
                for step in stage.get("walk") or []:
                    keep(step.get("image") or "")
            for item in story.get("criteria") or []:
                for step in item.get("walk") or []:
                    keep(step.get("image") or "")
    features["media"] = media

    return {
        "product": "Astral",
        "lead": (
            "Copy these files into the product repo. They are the Astral look for React."
        ),
        "features": work_facing(features),
        "tokens": rows,
        "tokenIndex": token_index,
        "styles": styles,
        "components": components,
        "icons": {name: item["inner"] for name, item in icons.items()},
        "files": [item for item in files if item],
        "access": work_facing(
            {
                "lead": access.get("lead") or "",
                "layers": access.get("layers") or [],
            }
        ),
        "tokensCss": css,
        "themeTs": ts,
        "lookCss": look_css(),
        "reactStart": (
            "import { theme } from \"./theme/astral\";\n"
            "import \"./theme/tokens.css\";\n"
            "import \"./theme/components.css\";\n"
        ),
    }


def inline_fonts(css: str) -> str:
    fonts = {
        "/assets/fonts/Roobert-Regular.otf": ROOT / "assets/fonts/Roobert-Regular.otf",
        "/assets/fonts/Roobert-Medium.otf": ROOT / "assets/fonts/Roobert-Medium.otf",
        "/assets/fonts/Roobert-SemiBold.otf": ROOT / "assets/fonts/Roobert-SemiBold.otf",
    }
    for url, path in fonts.items():
        if path.exists():
            css = css.replace(url, data_uri(path, "font/otf"))
    return css


def main() -> None:
    lib = build_lib()
    payload = json.dumps(lib, ensure_ascii=False).replace("<", "\\u003c")
    data_js = (
        "window.ASTRAL_PROTOTYPE_HREF = "
        + json.dumps("https://imshaun.github.io/astral-prototype/")
        + ";\nwindow.ASTRAL_LIB = "
        + payload
        + ";\n"
    )
    (SITE / "astral-lib.js").write_text(data_js, encoding="utf-8")

    html = (SITE / "index.html").read_text(encoding="utf-8")
    css = inline_fonts((ROOT / "styles.css").read_text(encoding="utf-8"))
    css += "\n" + (SITE / "library.css").read_text(encoding="utf-8")
    app_js = (SITE / "library.js").read_text(encoding="utf-8")

    html = re.sub(
        r'<link rel="stylesheet" href="\.\./styles\.css(?:\?[^"]*)?" />\s*',
        "",
        html,
        count=1,
    )
    html = re.sub(
        r'<link rel="stylesheet" href="library\.css(?:\?[^"]*)?" />',
        lambda _: "<style>\n" + css + "\n</style>",
        html,
        count=1,
    )
    ui_js = (ROOT / "astral-ui.js").read_text(encoding="utf-8")
    pack_js = (SITE / "library-pack.js").read_text(encoding="utf-8")
    html = re.sub(
        r'<script src="\.\./astral-ui\.js(?:\?[^"]*)?"></script>\s*<script src="astral-lib\.js(?:\?[^"]*)?"></script>\s*<script src="library-pack\.js(?:\?[^"]*)?"></script>\s*<script src="library\.js(?:\?[^"]*)?"></script>',
        lambda _: (
            "<script>\n"
            + ui_js
            + "\n</script>\n<script>\n"
            + data_js
            + "\n</script>\n<script>\n"
            + pack_js
            + "\n</script>\n<script>\n"
            + app_js
            + "\n</script>"
        ),
        html,
        count=1,
    )

    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / "plain.html"
    dest.write_text(html, encoding="utf-8")
    print(dest)


if __name__ == "__main__":
    main()
