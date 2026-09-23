#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse
import base64
import hmac
import json
import os
import sys

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data" / "board.json"
SYSTEMS = ROOT / "data" / "design-systems.json"
BLOCKED_PREFIXES = (
    "/archive",
    "/inbox",
    "/.cursor",
    "/.git",
    "/.env",
)


def env_flag(name, default="0"):
    return os.environ.get(name, default).strip().lower() not in ("", "0", "false", "no")


def share_password():
    return os.environ.get("SHARE_PASSWORD", "")


def share_user():
    return os.environ.get("SHARE_USER", "astral")


def share_on():
    return bool(share_password())


def prototype_only():
    if not share_on():
        return False
    return env_flag("SHARE_PROTOTYPE", "1")


def full_desk():
    return env_flag("WORK_DESK_FULL")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def request_path(self):
        return unquote(urlparse(self.path).path)

    def authorized(self):
        password = share_password()
        if not password:
            return True
        header = self.headers.get("Authorization", "")
        if not header.startswith("Basic "):
            return False
        try:
            decoded = base64.b64decode(header.split(" ", 1)[1]).decode("utf-8")
        except (ValueError, UnicodeDecodeError):
            return False
        user, _, given = decoded.partition(":")
        return hmac.compare_digest(user, share_user()) and hmac.compare_digest(
            given, password
        )

    def send_auth(self):
        body = b"Password needed\n"
        self.send_response(401)
        self.send_header("WWW-Authenticate", 'Basic realm="Astral prototype"')
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def blocked(self):
        path = self.request_path()
        return any(
            path == prefix or path.startswith(prefix + "/")
            for prefix in BLOCKED_PREFIXES
        )

    def send_html(self, html):
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(html)))
        self.end_headers()
        self.wfile.write(html)

    def serve_index(self):
        html = (ROOT / "index.html").read_bytes()
        if prototype_only():
            html = html.replace(
                b"<body>",
                b'<body class="is-share"><script>window.WORK_DESK_SHARE=true;</script>',
                1,
            )
            html = html.replace(
                b"<title>Work Desk</title>",
                b"<title>Astral</title>",
                1,
            )
        elif full_desk():
            html = html.replace(
                b"<body>",
                b'<body class="is-full-desk"><script>window.WORK_DESK_FULL=true;</script>',
                1,
            )
        self.send_html(html)

    def do_GET(self):
        if not self.authorized():
            self.send_auth()
            return
        if self.blocked():
            self.send_error(404, "Not found")
            return
        if self.request_path() in ("/", "/index.html"):
            self.serve_index()
            return
        super().do_GET()

    def do_HEAD(self):
        if not self.authorized():
            self.send_auth()
            return
        if self.blocked():
            self.send_error(404, "Not found")
            return
        super().do_HEAD()

    def do_PUT(self):
        if not self.authorized():
            self.send_auth()
            return
        if share_on():
            self.send_error(403, "Share link is read only")
            return
        path = self.request_path()
        allowed = {
            "/data/board.json": DATA,
            "/data/design-systems.json": SYSTEMS,
        }
        dest = allowed.get(path)
        if dest is None:
            self.send_error(403, "Can only save desk data")
            return
        length = int(self.headers.get("Content-Length", "0"))
        if length > 2_000_000:
            self.send_error(413, "Board is too large")
            return
        raw = self.rfile.read(length)
        try:
            payload = json.loads(raw)
        except json.JSONDecodeError:
            self.send_error(400, "Invalid JSON")
            return
        if not isinstance(payload, dict):
            self.send_error(400, "Board must be an object")
            return
        dest.parent.mkdir(parents=True, exist_ok=True)
        if self.headers.get("X-Work-Desk-Probe") == "1":
            self.send_response(204)
            self.end_headers()
            return
        if dest == DATA and dest.exists():
            try:
                current = json.loads(dest.read_text(encoding="utf-8"))
            except (json.JSONDecodeError, OSError):
                current = {}
            disk_rev = int(current.get("revision") or 0) if isinstance(current, dict) else 0
            incoming_rev = int(payload.get("revision") or 0)
            if incoming_rev <= disk_rev:
                self.send_response(409)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Cache-Control", "no-store")
                body = dest.read_bytes()
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
        dest.write_text(
            json.dumps(payload, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        self.send_response(204)
        self.end_headers()

    def log_message(self, format, *args):
        sys.stderr.write("%s - %s\n" % (self.log_date_time_string(), format % args))


if __name__ == "__main__":
    port = int(os.environ.get("PORT") or (sys.argv[1] if len(sys.argv) > 1 else 5190))
    host = "0.0.0.0" if os.environ.get("PORT") else "127.0.0.1"
    if host != "127.0.0.1" and not share_password():
        sys.exit("Set SHARE_PASSWORD before sharing this desk.")
    httpd = ThreadingHTTPServer((host, port), Handler)
    print(f"Work Desk  http://{host}:{port}/", flush=True)
    httpd.serve_forever()
