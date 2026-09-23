(() => {
  const CRC_TABLE = (() => {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i += 1) {
      let crc = i;
      for (let bit = 0; bit < 8; bit += 1) {
        crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
      }
      table[i] = crc >>> 0;
    }
    return table;
  })();

  const ROOT = "astral-react";
  const ASSET_PATHS = {
    "Roobert-Regular.otf": "src/theme/fonts/Roobert-Regular.otf",
    "Roobert-Medium.otf": "src/theme/fonts/Roobert-Medium.otf",
    "Roobert-SemiBold.otf": "src/theme/fonts/Roobert-SemiBold.otf",
    "imserv-logomark.svg": "src/assets/imserv-logomark.svg",
    "auth-texture.png": "src/assets/auth-texture.png",
  };

  function crc32(bytes) {
    let crc = ~0;
    for (let i = 0; i < bytes.length; i += 1) {
      crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    }
    return ~crc >>> 0;
  }

  function u16(value) {
    const out = new Uint8Array(2);
    out[0] = value & 0xff;
    out[1] = (value >>> 8) & 0xff;
    return out;
  }

  function u32(value) {
    const out = new Uint8Array(4);
    out[0] = value & 0xff;
    out[1] = (value >>> 8) & 0xff;
    out[2] = (value >>> 16) & 0xff;
    out[3] = (value >>> 24) & 0xff;
    return out;
  }

  function concat(parts) {
    const size = parts.reduce((sum, part) => sum + part.length, 0);
    const out = new Uint8Array(size);
    let offset = 0;
    parts.forEach((part) => {
      out.set(part, offset);
      offset += part.length;
    });
    return out;
  }

  function utf8(text) {
    return new TextEncoder().encode(String(text || ""));
  }

  function dosStamp(date) {
    const year = Math.max(date.getFullYear(), 1980);
    const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
    const dosTime =
      (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
    return { date: dosDate, time: dosTime };
  }

  function zipStore(files) {
    const now = dosStamp(new Date());
    const locals = [];
    const centrals = [];
    let offset = 0;
    files.forEach((file) => {
      const name = utf8(file.name);
      const data = file.bytes;
      const crc = crc32(data);
      const local = concat([
        u32(0x04034b50),
        u16(20),
        u16(0x0800),
        u16(0),
        u16(now.time),
        u16(now.date),
        u32(crc),
        u32(data.length),
        u32(data.length),
        u16(name.length),
        u16(0),
        name,
        data,
      ]);
      const central = concat([
        u32(0x02014b50),
        u16(20),
        u16(20),
        u16(0x0800),
        u16(0),
        u16(now.time),
        u16(now.date),
        u32(crc),
        u32(data.length),
        u32(data.length),
        u16(name.length),
        u16(0),
        u16(0),
        u16(0),
        u16(0),
        u32(0),
        u32(offset),
        name,
      ]);
      locals.push(local);
      centrals.push(central);
      offset += local.length;
    });
    const centralDir = concat(centrals);
    const end = concat([
      u32(0x06054b50),
      u16(0),
      u16(0),
      u16(files.length),
      u16(files.length),
      u32(centralDir.length),
      u32(offset),
      u16(0),
    ]);
    return concat([...locals, centralDir, end]);
  }

  function fromDataUri(href) {
    const comma = href.indexOf(",");
    if (comma < 0) return new Uint8Array();
    const meta = href.slice(0, comma);
    const body = href.slice(comma + 1);
    if (meta.includes(";base64")) {
      const binary = atob(body);
      const out = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
      return out;
    }
    return utf8(decodeURIComponent(body));
  }

  async function bytesFromHref(href) {
    if (!href) return new Uint8Array();
    if (href.startsWith("data:")) return fromDataUri(href);
    const response = await fetch(href);
    if (!response.ok) throw new Error("Could not read " + href);
    return new Uint8Array(await response.arrayBuffer());
  }

  function componentPath(item) {
    const named = String(item.file || "")
      .replace(/^\.\//, "")
      .replace(/^\//, "");
    if (named) return named;
    const stem = String(item.react || item.name || "Component").replace(/\s+/g, "");
    return `src/components/${stem}.tsx`;
  }

  function snippetModule(path, snippet) {
    const body = String(snippet || "").trim();
    return (
      `/* ${path}\n` +
      "   Pass data through props. Do not fetch inside the component.\n\n" +
      `${body}\n` +
      "*/\n"
    );
  }

  function normalizeParts(parts) {
    if (!parts || typeof parts !== "object") {
      return { components: true, tokens: true, prototype: true };
    }
    return {
      components: Boolean(parts.components),
      tokens: Boolean(parts.tokens),
      prototype: Boolean(parts.prototype),
    };
  }

  function importOnce(data, parts) {
    const lines = [];
    if (parts.tokens) {
      lines.push('import { theme } from "./theme/astral";');
      lines.push('import "./theme/tokens.css";');
    }
    if (parts.components) lines.push('import "./theme/components.css";');
    if (parts.prototype) lines.push('import { App } from "./prototype/App";');
    if (lines.length) return lines.join("\n");
    return String(data.reactStart || "").trim();
  }

  function readme(data, parts) {
    const lines = ["# Astral React starter", "", "Put these files in the product repo.", ""];
    if (parts.tokens) {
      lines.push(
        "## Tokens",
        "",
        "- src/theme/tokens.css",
        "- src/theme/astral.ts",
        "- src/theme/fonts for Roobert Regular, Medium, and Semibold",
        "",
        "Aptos is the fallback if a Roobert weight is missing.",
        ""
      );
    }
    if (parts.components) {
      lines.push(
        "## Components",
        "",
        "- src/theme/components.css",
        "",
        "Icon.tsx is the full file. Other component files hold the snippet for that piece. Copy the snippet into the named file. Pass data through props. Do not fetch inside the component.",
        ""
      );
    }
    if (parts.prototype) {
      lines.push(
        "## Prototype",
        "",
        "src/prototype is a React start for the live screens. Flow is Main product, Onboarding, Sign-up, Sign in, Password recovery, and Invite link. Pass flow on App. Do not store a password or a code.",
        "",
        "- src/assets/imserv-logomark.svg is the default organisation mark.",
        "- src/assets/auth-texture.png is the grid overlay on Infra Grey for sign in, sign-up, and password recovery.",
        ""
      );
    }
    lines.push(
      "## Import once",
      "",
      "```ts",
      importOnce(data, parts),
      "```",
      "",
      "## Look",
      "",
      "Filled primary buttons use white type. Do not put cyan type on white. Quiet outlines are 1px Infra Grey B. Focus is a 2px black edge. Disabled is Infra Grey, not a faded colour. State uses the named status variables.",
      ""
    );
    return lines.join("\n");
  }

  function indexTs(parts) {
    const lines = [];
    if (parts.tokens) lines.push('export { theme, typeStyles } from "./theme/astral";');
    if (parts.components) lines.push('export { Icon } from "./components/Icon";');
    if (parts.prototype) lines.push('export { App } from "./prototype/App";');
    lines.push("");
    return lines.join("\n");
  }

  function prototypeFiles() {
    return [
      {
        name: "src/prototype/App.tsx",
        text: [
          'import type { ReactNode } from "react";',
          'import { InviteLink } from "./screens/InviteLink";',
          'import { MainProduct } from "./screens/MainProduct";',
          'import { Onboarding } from "./screens/Onboarding";',
          'import { PasswordRecovery } from "./screens/PasswordRecovery";',
          'import { SignIn } from "./screens/SignIn";',
          'import { SignUp } from "./screens/SignUp";',
          "",
          "export type FlowId =",
          '  | "main"',
          '  | "onboarding"',
          '  | "sign-up"',
          '  | "sign-in"',
          '  | "password-recovery"',
          '  | "invite";',
          "",
          "const SCREENS: Record<FlowId, () => ReactNode> = {",
          "  main: () => <MainProduct />,",
          "  onboarding: () => <Onboarding />,",
          '  "sign-up": () => <SignUp />,',
          '  "sign-in": () => <SignIn />,',
          '  "password-recovery": () => <PasswordRecovery />,',
          "  invite: () => <InviteLink />,",
          "};",
          "",
          "export function App({ flow = \"main\" }: { flow?: FlowId }) {",
          "  const Screen = SCREENS[flow] || SCREENS.main;",
          "  return Screen();",
          "}",
          "",
        ].join("\n"),
      },
      {
        name: "src/prototype/AuthCard.tsx",
        text: [
          'import type { ReactNode } from "react";',
          "",
          'const mark = new URL("../assets/imserv-logomark.svg", import.meta.url).href;',
          "",
          "export function AuthCard({",
          "  title,",
          "  lead,",
          "  children,",
          "}: {",
          "  title: string;",
          "  lead?: string;",
          "  children: ReactNode;",
          "}) {",
          "  return (",
          '    <div className="astral-app is-auth">',
          '      <div className="astral-auth-page">',
          '        <img src={mark} alt="IMSERV" />',
          '        <section className="astral-card astral-auth">',
          '          <div className="astral-auth-copy">',
          "            <h1>{title}</h1>",
          '            {lead ? <p className="astral-muted">{lead}</p> : null}',
          "          </div>",
          "          {children}",
          "        </section>",
          "      </div>",
          "    </div>",
          "  );",
          "}",
          "",
        ].join("\n"),
      },
      {
        name: "src/prototype/screens/MainProduct.tsx",
        text: [
          "export function MainProduct() {",
          "  return (",
          '    <div className="astral-app">',
          "      <header>",
          "        <p>IMSERV</p>",
          '        <nav aria-label="Product">',
          "          <a href=\"#home\">Home</a>",
          "          <a href=\"#portfolio\">Portfolio</a>",
          "          <a href=\"#finance\">Finance</a>",
          "          <a href=\"#alerts\">Alerts</a>",
          "          <a href=\"#queries\">Queries</a>",
          "          <a href=\"#reports\">Reports</a>",
          "        </nav>",
          "      </header>",
          "      <main>",
          "        <h1>Home</h1>",
          "        <p>Start here. See if the estate is healthy, then open a site that needs a look.</p>",
          "      </main>",
          "    </div>",
          "  );",
          "}",
          "",
        ].join("\n"),
      },
      {
        name: "src/prototype/screens/SignIn.tsx",
        text: [
          'import { useMemo, useState, type FormEvent } from "react";',
          'import { AuthCard } from "../AuthCard";',
          "",
          "export function SignIn() {",
          '  const [email, setEmail] = useState("");',
          '  const [password, setPassword] = useState("");',
          "  const can = useMemo(() => Boolean(email && password), [email, password]);",
          "",
          "  function onSubmit(event: FormEvent) {",
          "    event.preventDefault();",
          "  }",
          "",
          "  return (",
          '    <AuthCard title="Sign in">',
          '      <form onSubmit={onSubmit}>',
          '        <label className="astral-field">',
          "          <span>Email address</span>",
          "          <input",
          '            type="email"',
          '            name="email"',
          '            autoComplete="username"',
          "            value={email}",
          "            onChange={(event) => setEmail(event.target.value)}",
          "          />",
          "        </label>",
          '        <label className="astral-field">',
          "          <span>Password</span>",
          "          <input",
          '            type="password"',
          '            name="password"',
          '            autoComplete="current-password"',
          "            value={password}",
          "            onChange={(event) => setPassword(event.target.value)}",
          "          />",
          "        </label>",
          '        <p className="astral-auth-links">',
          '          <button type="button" className="astral-text">',
          "            Forgot password?",
          "          </button>",
          "        </p>",
          '        <div className="astral-actions">',
          '          <button type="submit" className="astral-btn" disabled={!can}>',
          "            Sign in",
          "          </button>",
          "        </div>",
          "      </form>",
          '      <p className="astral-auth-links">',
          "        <span>Don't have an account?</span>",
          '        <button type="button" className="astral-text">',
          "          Sign-up",
          "        </button>",
          "      </p>",
          "    </AuthCard>",
          "  );",
          "}",
          "",
        ].join("\n"),
      },
      {
        name: "src/prototype/screens/SignUp.tsx",
        text: [
          'import { useMemo, useState, type FormEvent } from "react";',
          'import { AuthCard } from "../AuthCard";',
          "",
          "export function SignUp() {",
          '  const [name, setName] = useState("");',
          '  const [email, setEmail] = useState("");',
          '  const [company, setCompany] = useState("");',
          '  const [password, setPassword] = useState("");',
          "  const can = useMemo(",
          "    () => Boolean(name && email && company && password),",
          "    [name, email, company, password]",
          "  );",
          "",
          "  function onSubmit(event: FormEvent) {",
          "    event.preventDefault();",
          "  }",
          "",
          "  return (",
          '    <AuthCard title="Sign-up">',
          '      <form onSubmit={onSubmit}>',
          '        <label className="astral-field">',
          "          <span>Name</span>",
          '          <input name="name" autoComplete="name" maxLength={80} value={name} onChange={(event) => setName(event.target.value)} />',
          "        </label>",
          '        <label className="astral-field">',
          "          <span>Email address</span>",
          '          <input type="email" name="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />',
          "        </label>",
          '        <label className="astral-field">',
          "          <span>Company</span>",
          '          <input name="company" autoComplete="organization" maxLength={80} value={company} onChange={(event) => setCompany(event.target.value)} />',
          "        </label>",
          '        <label className="astral-field">',
          "          <span>Password</span>",
          '          <input type="password" name="password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} />',
          "        </label>",
          '        <div className="astral-actions">',
          '          <button type="submit" className="astral-btn" disabled={!can}>',
          "            Sign-up",
          "          </button>",
          "        </div>",
          "      </form>",
          "    </AuthCard>",
          "  );",
          "}",
          "",
        ].join("\n"),
      },
      {
        name: "src/prototype/screens/PasswordRecovery.tsx",
        text: [
          'import { useMemo, useState, type FormEvent } from "react";',
          'import { AuthCard } from "../AuthCard";',
          "",
          'type Step = "email" | "code" | "reset" | "done";',
          "",
          "export function PasswordRecovery() {",
          '  const [step, setStep] = useState<Step>("email");',
          '  const [email, setEmail] = useState("");',
          '  const [code, setCode] = useState("");',
          '  const [password, setPassword] = useState("");',
          '  const [confirm, setConfirm] = useState("");',
          "  const canEmail = useMemo(() => /.+@.+\..+/.test(email), [email]);",
          "  const canCode = code.replace(/\\D/g, \"\").length === 6;",
          "  const match = Boolean(password) && password === confirm;",
          "",
          "  function onSubmit(event: FormEvent) {",
          "    event.preventDefault();",
          '    if (step === "email" && canEmail) setStep("code");',
          '    if (step === "code" && canCode) setStep("reset");',
          '    if (step === "reset" && match) setStep("done");',
          "  }",
          "",
          '  if (step === "done") {',
          "    return (",
          '      <AuthCard title="Password updated" lead="Your password has been reset.">',
          '        <div className="astral-actions">',
          '          <button type="button" className="astral-btn">',
          "            Sign in",
          "          </button>",
          "        </div>",
          "      </AuthCard>",
          "    );",
          "  }",
          "",
          '  if (step === "reset") {',
          "    return (",
          '      <AuthCard title="Create a new password">',
          '        <form onSubmit={onSubmit}>',
          '          <label className="astral-field">',
          "            <span>New password</span>",
          '            <input type="password" name="password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} />',
          "          </label>",
          '          <label className="astral-field">',
          "            <span>Confirm password</span>",
          '            <input type="password" name="confirm" autoComplete="new-password" value={confirm} onChange={(event) => setConfirm(event.target.value)} />',
          "          </label>",
          "          <p className={match ? undefined : \"astral-muted\"}>Passwords match</p>",
          '          <div className="astral-actions">',
          '            <button type="submit" className="astral-btn" disabled={!match}>',
          "              Reset password",
          "            </button>",
          "          </div>",
          "        </form>",
          "      </AuthCard>",
          "    );",
          "  }",
          "",
          '  if (step === "code") {',
          "    return (",
          '      <AuthCard title="Check your email" lead={email ? `If an account exists for ${email}, a code was sent.` : "If an account exists, a code was sent."}>',
          '        <form onSubmit={onSubmit}>',
          '          <label className="astral-field">',
          "            <span>Code</span>",
          '            <input inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} onChange={(event) => setCode(event.target.value)} />',
          "          </label>",
          '          <div className="astral-actions">',
          '            <button type="submit" className="astral-btn" disabled={!canCode}>',
          "              Verify",
          "            </button>",
          "          </div>",
          "        </form>",
          '        <p className="astral-auth-links">',
          "          <span>Didn't get it?</span>",
          '          <button type="button" className="astral-text">',
          "            Resend email",
          "          </button>",
          "        </p>",
          "      </AuthCard>",
          "    );",
          "  }",
          "",
          "  return (",
          '    <AuthCard title="Reset your password" lead="Enter the email address linked to your account.">',
          '      <form onSubmit={onSubmit}>',
          '        <label className="astral-field">',
          "          <span>Email address</span>",
          '          <input type="email" name="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />',
          "        </label>",
          '        <div className="astral-actions">',
          '          <button type="submit" className="astral-btn" disabled={!canEmail}>',
          "            Send reset link",
          "          </button>",
          "        </div>",
          "      </form>",
          "    </AuthCard>",
          "  );",
          "}",
          "",
        ].join("\n"),
      },
      {
        name: "src/prototype/screens/Onboarding.tsx",
        text: [
          'import { useMemo, useState, type FormEvent } from "react";',
          'import { AuthCard } from "../AuthCard";',
          "",
          "export function Onboarding() {",
          '  const [name, setName] = useState("");',
          '  const [title, setTitle] = useState("");',
          "  const can = useMemo(() => Boolean(name), [name]);",
          "",
          "  function onSubmit(event: FormEvent) {",
          "    event.preventDefault();",
          "  }",
          "",
          "  return (",
          '    <AuthCard title="Onboarding">',
          '      <div className="astral-card astral-profile-mark">',
          "        <p>Upload picture</p>",
          "      </div>",
          '      <form onSubmit={onSubmit}>',
          '        <label className="astral-field">',
          "          <span>Name</span>",
          '          <input name="name" autoComplete="name" maxLength={80} value={name} onChange={(event) => setName(event.target.value)} />',
          "        </label>",
          '        <label className="astral-field">',
          "          <span>Discipline</span>",
          '          <button type="button" className="astral-select-btn">',
          "            Pick a discipline",
          "          </button>",
          "        </label>",
          '        <label className="astral-field">',
          "          <span>Job title</span>",
          '          <input name="title" autoComplete="organization-title" maxLength={80} value={title} onChange={(event) => setTitle(event.target.value)} />',
          "        </label>",
          '        <p className="astral-muted">Contact still waits.</p>',
          '        <div className="astral-actions">',
          '          <button type="submit" className="astral-btn" disabled={!can}>',
          "            Save changes",
          "          </button>",
          "        </div>",
          "      </form>",
          "    </AuthCard>",
          "  );",
          "}",
          "",
        ].join("\n"),
      },
      {
        name: "src/prototype/screens/InviteLink.tsx",
        text: [
          'import { useState } from "react";',
          'import { AuthCard } from "../AuthCard";',
          "",
          'type Step = "invited" | "review" | "create" | "done";',
          "",
          "export function InviteLink() {",
          '  const [step, setStep] = useState<Step>("invited");',
          "",
          '  if (step === "done") {',
          "    return (",
          '      <AuthCard title="You\'re in" lead="You\'ve joined the team.">',
          '        <div className="astral-actions">',
          '          <button type="button" className="astral-btn">',
          "            Go to the team",
          "          </button>",
          "        </div>",
          "      </AuthCard>",
          "    );",
          "  }",
          "",
          '  if (step === "create") {',
          "    return (",
          '      <AuthCard title="Create your account">',
          '        <form onSubmit={(event) => { event.preventDefault(); setStep("done"); }}>',
          '          <label className="astral-field">',
          "            <span>First name</span>",
          '            <input name="first" autoComplete="given-name" />',
          "          </label>",
          '          <label className="astral-field">',
          "            <span>Last name</span>",
          '            <input name="last" autoComplete="family-name" />',
          "          </label>",
          '          <label className="astral-field">',
          "            <span>Create password</span>",
          '            <input type="password" name="password" autoComplete="new-password" />',
          "          </label>",
          '          <div className="astral-actions">',
          '            <button type="submit" className="astral-btn">',
          "              Create your account",
          "            </button>",
          "          </div>",
          "        </form>",
          "      </AuthCard>",
          "    );",
          "  }",
          "",
          '  if (step === "review") {',
          "    return (",
          '      <AuthCard title="Review the invite">',
          '        <div className="astral-actions">',
          '          <button type="button" className="astral-btn" onClick={() => setStep("create")}>',
          "            Accept invite",
          "          </button>",
          "        </div>",
          '        <p className="astral-auth-links">',
          "          <span>Already have an account?</span>",
          '          <button type="button" className="astral-text">',
          "            Sign in",
          "          </button>",
          "        </p>",
          "      </AuthCard>",
          "    );",
          "  }",
          "",
          "  return (",
          '    <AuthCard title="You\'ve been invited">',
          '      <div className="astral-actions">',
          '        <button type="button" className="astral-btn" onClick={() => setStep("review")}>',
          "          Join the team",
          "        </button>",
          "      </div>",
          "    </AuthCard>",
          "  );",
          "}",
          "",
        ].join("\n"),
      },
    ];
  }

  function textFile(name, text) {
    return { name: `${ROOT}/${name}`, bytes: utf8(text) };
  }

  function isFont(name) {
    return String(name || "").startsWith("Roobert-");
  }

  function isPrototypeAsset(name) {
    return name === "imserv-logomark.svg" || name === "auth-texture.png";
  }

  async function packFiles(data, parts) {
    const picked = normalizeParts(parts);
    if (!picked.components && !picked.tokens && !picked.prototype) {
      throw new Error("empty");
    }
    const files = [textFile("README.md", readme(data, picked)), textFile("src/index.ts", indexTs(picked))];
    if (picked.tokens) {
      files.push(textFile("src/theme/tokens.css", data.tokensCss || ""));
      files.push(textFile("src/theme/astral.ts", data.themeTs || ""));
    }
    if (picked.components) {
      files.push(textFile("src/theme/components.css", data.lookCss || ""));
      (data.components || []).forEach((item) => {
        const path = componentPath(item);
        const body = item.source ? String(item.source) : snippetModule(path, item.snippet);
        files.push(textFile(path, body));
      });
    }
    if (picked.prototype) {
      prototypeFiles().forEach((file) => files.push(textFile(file.name, file.text)));
    }
    for (const file of data.files || []) {
      const name = file.name || "";
      const wantFont = picked.tokens && isFont(name);
      const wantAsset = picked.prototype && isPrototypeAsset(name);
      if (!wantFont && !wantAsset) continue;
      const rel = ASSET_PATHS[name] || `src/assets/${name}`;
      files.push({ name: `${ROOT}/${rel}`, bytes: await bytesFromHref(file.href) });
    }
    return files.filter((file) => file.bytes && file.bytes.length);
  }

  function saveBlob(bytes, filename) {
    const blob = new Blob([bytes], { type: "application/zip" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  function packLabel(button) {
    return button && button.querySelector("[data-lib-pack-label]");
  }

  async function download(data, button, parts) {
    const label = packLabel(button);
    const previous = label ? label.textContent : "";
    if (button) button.disabled = true;
    if (label) label.textContent = "Downloading";
    try {
      const files = await packFiles(data, parts);
      if (!files.length) throw new Error("empty");
      saveBlob(zipStore(files), "astral-react.zip");
      if (label) label.textContent = "Downloaded";
      window.setTimeout(() => {
        if (label) label.textContent = previous || "Download";
        if (button) button.disabled = false;
      }, 1200);
    } catch (error) {
      if (label) label.textContent = previous || "Download";
      if (button) button.disabled = false;
      throw error;
    }
  }

  function downloadLook(data, button) {
    const previous = button ? button.textContent : "";
    if (button) button.disabled = true;
    if (button) button.textContent = "Downloading";
    try {
      const files = [
        { name: "tokens.css", bytes: utf8(data.tokensCss || "") },
        { name: "components.css", bytes: utf8(data.lookCss || "") },
      ].filter((file) => file.bytes && file.bytes.length);
      if (!files.length) throw new Error("empty");
      saveBlob(zipStore(files), "astral-look.zip");
      if (button) button.textContent = "Downloaded";
      window.setTimeout(() => {
        if (button) {
          button.textContent = previous || "Download the look files";
          button.disabled = false;
        }
      }, 1200);
    } catch (error) {
      if (button) {
        button.textContent = previous || "Download the look files";
        button.disabled = false;
      }
      throw error;
    }
  }

  const api = { packFiles, zipStore, download, downloadLook };
  if (typeof module === "object" && module.exports) module.exports = api;
  const root = typeof window !== "undefined" ? window : globalThis;
  root.AstralLibPack = api;
})();
