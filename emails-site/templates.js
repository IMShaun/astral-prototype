// Astral emails. Each scenario builds email-safe HTML: tables, inline styles, 600px wide.
// Sample data follows the prototype. Network Rail is the customer. Today is Friday 4 Sep 2026.
(function () {
  const C = {
    ink: "#000000",
    paper: "#ffffff",
    page: "#f4f4f4",
    line: "#dfdfdf",
    muted: "#5c5c5c",
    action: "#028178",
    soft: "#f7f7f7",
  };
  const FONT = "Roobert, Aptos, 'Segoe UI', Helvetica, Arial, sans-serif";
  const LEVEL = {
    High: ["#b42318", "#fee4e2"],
    Medium: ["#b54708", "#fef0c7"],
    Low: ["#028178", "#ddf3f1"],
  };

  const ME = { name: "Sam Taylor", email: "sam.taylor@networkrail.example" };
  const ADMIN = { name: "Jo Bennett", email: "jo.bennett@networkrail.example" };
  const IMSERV = { name: "Priya Shah", team: "IMSERV support" };
  const SENDER = { name: "Astral", email: "notifications@astral.imserv.example" };

  const esc = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  function level(name) {
    const [ink, soft] = LEVEL[name] || [C.ink, C.soft];
    return `<span style="display:inline-block;padding:2px 10px;border-radius:999px;background:${soft};color:${ink};font-size:13px;line-height:20px;font-weight:600;">${esc(
      name
    )}</span>`;
  }

  const para = (text, extra = "") =>
    `<p style="margin:0 0 16px;font-size:16px;line-height:24px;color:${C.ink};${extra}">${esc(text)}</p>`;

  const BLOCKS = {
    text: (b) => para(b.text),
    muted: (b) => para(b.text, `color:${C.muted};font-size:14px;line-height:20px;`),
    code: (b) => `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
        <tr><td align="center" style="padding:20px;border-radius:12px;background:${C.soft};font-family:${FONT};font-size:36px;line-height:44px;letter-spacing:8px;font-weight:600;color:${C.ink};">${esc(
          b.code
        )}</td></tr>
      </table>`,
    facts: (b) => `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border-top:1px solid ${C.line};">
        ${b.rows
          .map(
            ([label, value, html]) => `
          <tr>
            <td valign="top" style="width:38%;padding:12px 16px 12px 0;border-bottom:1px solid ${C.line};font-size:14px;line-height:20px;color:${C.muted};">${esc(
              label
            )}</td>
            <td valign="top" style="padding:12px 0;border-bottom:1px solid ${C.line};font-size:14px;line-height:20px;color:${C.ink};font-weight:500;">${
              html ? value : esc(value)
            }</td>
          </tr>`
          )
          .join("")}
      </table>`,
    quote: (b) => `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
        <tr>
          <td style="width:4px;background:${C.ink};border-radius:4px;"></td>
          <td style="padding:4px 0 4px 16px;">
            <p style="margin:0 0 4px;font-size:14px;line-height:20px;color:${C.muted};">${esc(b.who)}</p>
            <p style="margin:0;font-size:16px;line-height:24px;color:${C.ink};">${esc(b.text)}</p>
          </td>
        </tr>
      </table>`,
    file: (b) => `
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border:1px solid ${C.line};border-radius:12px;">
        <tr>
          <td valign="middle" style="padding:12px 0 12px 16px;">
            <span style="display:inline-block;min-width:36px;padding:4px 6px;border-radius:6px;background:${C.ink};color:${C.paper};font-size:12px;line-height:16px;font-weight:600;text-align:center;">${esc(
              b.kind
            )}</span>
          </td>
          <td valign="middle" style="padding:12px 16px;">
            <p style="margin:0;font-size:14px;line-height:20px;color:${C.ink};font-weight:500;word-break:break-all;">${esc(b.name)}</p>
            <p style="margin:0;font-size:13px;line-height:18px;color:${C.muted};">${esc(b.note)}</p>
          </td>
        </tr>
      </table>`,
    items: (b) => `
      ${b.title ? `<p style="margin:8px 0;font-size:14px;line-height:20px;color:${C.muted};font-weight:600;">${esc(b.title)}</p>` : ""}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border-top:1px solid ${C.line};">
        ${b.rows
          .map(
            (row) => `
          <tr>
            <td valign="top" style="padding:12px 12px 12px 0;border-bottom:1px solid ${C.line};">
              <p style="margin:0;font-size:15px;line-height:22px;color:${C.ink};font-weight:500;">${esc(row.title)}</p>
              <p style="margin:0;font-size:14px;line-height:20px;color:${C.muted};">${esc(row.note)}</p>
            </td>
            <td valign="top" align="right" style="padding:12px 0;border-bottom:1px solid ${C.line};white-space:nowrap;">${
              row.level
                ? level(row.level)
                : `<span style="font-size:14px;line-height:20px;color:${C.muted};">${esc(row.side || "")}</span>`
            }</td>
          </tr>`
          )
          .join("")}
      </table>`,
    stats: (b) => `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border-collapse:separate;border-spacing:0;">
        <tr>
          ${b.rows
            .map(
              ([figure, label], i) => `
            ${i ? `<td style="width:8px;font-size:0;line-height:0;">&nbsp;</td>` : ""}
            <td valign="top" style="padding:16px;border-radius:12px;background:${C.soft};">
              <p style="margin:0;font-size:28px;line-height:34px;color:${C.ink};font-weight:500;">${esc(figure)}</p>
              <p style="margin:0;font-size:14px;line-height:20px;color:${C.muted};">${esc(label)}</p>
            </td>`
            )
            .join("")}
        </tr>
      </table>`,
  };

  function button(label) {
    return `
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 24px;">
        <tr>
          <td style="border-radius:999px;background:${C.action};">
            <a href="#" style="display:inline-block;padding:12px 24px;border-radius:999px;color:#ffffff;font-family:${FONT};font-size:16px;line-height:20px;font-weight:600;text-decoration:none;">${esc(
              label
            )}</a>
          </td>
        </tr>
      </table>`;
  }

  // The whole email. The logo is an absolute URL so a saved copy still finds it.
  function render(s, logo) {
    const body = (s.blocks || []).map((b) => BLOCKS[b.type](b)).join("");
    const eyebrow = s.eyebrow
      ? `<p style="margin:0 0 8px;font-size:14px;line-height:20px;color:${C.muted};font-weight:600;">${esc(s.eyebrow)}</p>`
      : "";
    const manage = s.manage
      ? ` <a href="#" style="color:${C.ink};text-decoration:underline;">Manage email notifications</a>`
      : "";
    return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${esc(s.subject)}</title>
<style>
  @media (max-width: 620px) {
    .em-wrap { width: 100% !important; }
    .em-pad { padding-left: 24px !important; padding-right: 24px !important; }
    .em-title { font-size: 24px !important; line-height: 30px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${C.page};font-family:${FONT};color:${C.ink};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(s.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.page};">
  <tr>
    <td align="center" style="padding:32px 12px;">
      <table role="presentation" class="em-wrap" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:${C.paper};border-radius:16px;overflow:hidden;font-family:${FONT};">
        <tr>
          <td class="em-pad" style="padding:24px 40px;background:#000000;">
            <img src="${esc(logo)}" width="112" height="31" alt="IMSERV" style="display:block;border:0;width:112px;height:31px;">
          </td>
        </tr>
        <tr>
          <td class="em-pad" style="padding:40px 40px 16px;">
            ${eyebrow}
            <h1 class="em-title" style="margin:0 0 16px;font-size:28px;line-height:34px;font-weight:500;color:${C.ink};">${esc(s.title)}</h1>
            ${body}
            ${s.cta ? button(s.cta) : ""}
            ${s.after ? BLOCKS.muted({ text: s.after }) : ""}
          </td>
        </tr>
        <tr>
          <td class="em-pad" style="padding:24px 40px 32px;border-top:1px solid ${C.line};">
            <p style="margin:0 0 8px;font-size:13px;line-height:20px;color:${C.muted};">${esc(s.reason)}${manage}</p>
            <p style="margin:0;font-size:13px;line-height:20px;color:${C.muted};">Sent by Astral from IMSERV.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
  }

  // Plain text twin, for clients that block HTML.
  function text(s) {
    const strip = (v) => String(v).replace(/<[^>]+>/g, "");
    const lines = [s.title, ""];
    (s.blocks || []).forEach((b) => {
      if (b.type === "text" || b.type === "muted") lines.push(b.text, "");
      if (b.type === "code") lines.push(b.code, "");
      if (b.type === "facts") lines.push(...b.rows.map(([k, v]) => `${k}  ${strip(v)}`), "");
      if (b.type === "quote") lines.push(b.who, `"${b.text}"`, "");
      if (b.type === "file") lines.push(`Attached  ${b.name}`, "");
      if (b.type === "items") {
        if (b.title) lines.push(b.title);
        lines.push(...b.rows.map((r) => `- ${r.title}. ${r.note}${r.level ? `. ${r.level}` : ""}`), "");
      }
      if (b.type === "stats") lines.push(b.rows.map(([f, l]) => `${f} ${l}`).join(". "), "");
    });
    if (s.cta) lines.push(`${s.cta}  https://astral.imserv.example`, "");
    if (s.after) lines.push(s.after, "");
    lines.push("---", s.reason);
    if (s.manage) lines.push("Manage email notifications  https://astral.imserv.example/settings/notifications");
    lines.push("Sent by Astral from IMSERV.");
    return lines.join("\n");
  }

  const GROUPS = [
    { id: "account", name: "Account" },
    { id: "alerts", name: "Alerts" },
    { id: "queries", name: "Queries" },
    { id: "reports", name: "Reports" },
    { id: "downloads", name: "Downloads" },
    { id: "summary", name: "Activity summary" },
  ];

  const ACTIVITY = "Activity in my workspace and How often, in Settings › Notifications.";
  const SECURITY = "Always sent. Security emails do not follow Notifications.";

  const SCENARIOS = [
    {
      id: "sign-up-code",
      group: "account",
      name: "Sign-up code",
      summary: "Confirms the email address before an account is made.",
      when: "Someone signs up with this email address, or picks Resend email.",
      who: "The person signing up.",
      control: SECURITY,
      to: ME,
      subject: "Your Astral sign-up code",
      preheader: "Enter it in Astral to finish signing up.",
      title: "Finish signing up",
      blocks: [
        { type: "text", text: "Enter this code in Astral to confirm your email address." },
        { type: "code", code: "482913" },
        { type: "muted", text: "If you did not sign up for Astral, ignore this email. No account is made until the code is entered." },
      ],
      reason: "You got this because someone signed up for Astral with this email address.",
    },
    {
      id: "reset-code",
      group: "account",
      name: "Password reset code",
      summary: "Lets someone who forgot their password make a new one.",
      when: "Someone picks Send reset link and an account exists for the address.",
      who: "The account holder.",
      control: SECURITY,
      to: ME,
      subject: "Your Astral password reset code",
      preheader: "Enter it in Astral to make a new password.",
      title: "Reset your password",
      blocks: [
        { type: "text", text: "Enter this code in Astral to make a new password." },
        { type: "code", code: "735206" },
        { type: "muted", text: "If you did not ask to reset your password, ignore this email. Your password stays the same." },
      ],
      reason: "You got this because someone asked to reset the password for this account.",
    },
    {
      id: "password-changed",
      group: "account",
      name: "Password changed",
      summary: "Tells the account holder straight away, so they can act if it was not them.",
      when: "A password is reset or changed.",
      who: "The account holder.",
      control: SECURITY,
      to: ME,
      subject: "Your Astral password was changed",
      preheader: "If this was not you, reset it now.",
      title: "Your password was changed",
      blocks: [
        { type: "text", text: `The password for ${ME.email} was changed on 4 Sep 2026 at 09.12.` },
        { type: "text", text: "If this was you, there is nothing else to do. If it was not you, reset your password now and tell your Admin." },
      ],
      cta: "Reset password",
      reason: "You got this because the password on your Astral account changed.",
    },
    {
      id: "invite",
      group: "account",
      name: "Invite to a team",
      summary: "The only way into Astral. Names the person who sent it so it is trusted.",
      when: "An Admin or Manager picks Invite users.",
      who: "The person invited. They may not have an account yet.",
      control: "Always sent. The invite is the only way in.",
      to: ME,
      subject: `${ADMIN.name} invited you to Energy management on Astral`,
      preheader: "Accept to see Network Rail data in Astral.",
      title: "Join Energy management",
      blocks: [
        { type: "text", text: `${ADMIN.name} invited you to join Energy management on Network Rail.` },
        {
          type: "facts",
          rows: [
            ["Team", "Energy management"],
            ["Role", "Contributor"],
            ["Email", ME.email],
          ],
        },
      ],
      cta: "Accept invite",
      after: "Only this email address can use the invite. If it has expired, ask an Admin to send another invite.",
      reason: `You got this because ${ADMIN.name} invited ${ME.email} to Astral.`,
    },
    {
      id: "invite-request",
      group: "account",
      name: "New invite request",
      summary: "Tells Admins that someone with an expired invite still wants in.",
      when: "Someone picks Request a new invite on an expired invite.",
      who: "Admins in that company.",
      control: "Always sent to Admins.",
      to: ADMIN,
      subject: `${ME.name} asked for a new invite`,
      preheader: "Their invite to Energy management expired.",
      title: "Send a new invite",
      blocks: [
        { type: "text", text: `${ME.name}'s invite to Energy management has expired. They asked for a new one.` },
        {
          type: "facts",
          rows: [
            ["Team", "Energy management"],
            ["Role", "Contributor"],
            ["Email", ME.email],
          ],
        },
      ],
      cta: "Open Users",
      reason: "You got this because you are an Admin for Network Rail.",
    },
    {
      id: "alert-use",
      group: "alerts",
      name: "Odd use alert",
      summary: "One alert, sent as it happens. Leads with the site and what changed.",
      when: "Astral raises an alert on a site you can see, and How often is Every time.",
      who: "People who can see the site and have Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "High alert at Manchester Traction",
      preheader: "Outgoing demand has been above expected since 16.00 UTC.",
      eyebrow: "Alert",
      title: "Demand 38 percent above expected",
      blocks: [
        { type: "text", text: "Outgoing demand at Manchester Traction has been above expected since 16.00 UTC." },
        {
          type: "facts",
          rows: [
            ["Level", level("High"), true],
            ["Site", "Manchester Traction"],
            ["Meter", "Export, MPAN 1600001234568"],
            ["Started", "4 Sep 2026 at 16.00 UTC"],
          ],
        },
      ],
      cta: "Open alert",
      manage: true,
      reason: "You got this because you can see Manchester Traction and get every alert.",
    },
    {
      id: "alert-missing",
      group: "alerts",
      name: "Missing data alert",
      summary: "Says plainly that a gap is missing data, not zero use.",
      when: "A meter stops sending readings, and How often is Every time.",
      who: "People who can see the site and have Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "Missing data at Crewe depot since 01.00 UTC",
      preheader: "No readings have arrived. This is not zero use.",
      eyebrow: "Alert",
      title: "Missing data at Crewe depot",
      blocks: [
        { type: "text", text: "No readings have arrived since 01.00 UTC. That is missing data, not zero use." },
        {
          type: "facts",
          rows: [
            ["Level", level("High"), true],
            ["Site", "Crewe depot"],
            ["Meter", "Incoming supply, MPAN 1600002234567"],
            ["Missing since", "4 Sep 2026 at 01.00 UTC"],
          ],
        },
      ],
      cta: "Open alert",
      manage: true,
      reason: "You got this because you can see Crewe depot and get every alert.",
    },
    {
      id: "alert-group",
      group: "alerts",
      name: "Several alerts together",
      summary: "Groups alerts that land close together, so people get one email, not many.",
      when: "More than one alert arrives close together, and How often is Every time.",
      who: "People who can see those sites and have Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "3 new alerts across 3 sites",
      preheader: "Crewe depot, York Traction, and Manchester Traction.",
      eyebrow: "Alerts",
      title: "3 new alerts across 3 sites",
      blocks: [
        {
          type: "items",
          rows: [
            { title: "Crewe depot", note: "No readings arriving from 01.00 UTC", level: "High" },
            { title: "York Traction", note: "Overnight use above expected", level: "High" },
            { title: "Manchester Traction", note: "Demand 38 percent above expected", level: "High" },
          ],
        },
      ],
      cta: "Open alerts",
      manage: true,
      reason: "You got this because you can see these sites and get every alert.",
    },
    {
      id: "data-alert",
      group: "alerts",
      name: "Data alert rule met",
      summary: "Sent by a Data alert someone set up in Reports, not by Notifications.",
      when: "A Live Data alert meets its rule.",
      who: "People and emails on that Data alert.",
      control: "The Data alert in Reports. Pause or edit it there.",
      to: ME,
      subject: "Use above portfolio average at 2 sites",
      preheader: "York Traction and Manchester Traction went over the rule on 3 Sep 2026.",
      eyebrow: "Data alert",
      title: "2 sites used 50 percent over the average",
      blocks: [
        { type: "text", text: "The portfolio average is 3,141 kWh a day. These sites went over it on 3 Sep 2026." },
        {
          type: "items",
          rows: [
            { title: "York Traction", note: "4,912 kWh. 56 percent above average", side: "3 Sep 2026" },
            { title: "Manchester Traction", note: "4,730 kWh. 51 percent above average", side: "3 Sep 2026" },
          ],
        },
      ],
      cta: "Open Data alert",
      reason: "You got this because you are on the Data alert Use above portfolio average.",
    },
    {
      id: "query-reply",
      group: "queries",
      name: "Reply on a query",
      summary: "Shows the reply in full, so most people never need to open Astral.",
      when: "Someone replies on a query you raised or replied on.",
      who: "People on the query thread with Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: `${IMSERV.name} replied on Missing hours on the incoming supply`,
      preheader: "We have asked the meter operator to check the comms at Crewe depot.",
      eyebrow: "Query",
      title: "New reply on your query",
      blocks: [
        {
          type: "quote",
          who: `${IMSERV.name}, ${IMSERV.team}`,
          text: "We have asked the meter operator to check the comms at Crewe depot. The missing hours will fill in once readings arrive.",
        },
        {
          type: "facts",
          rows: [
            ["Query", "Missing hours on the incoming supply"],
            ["Site", "Crewe depot"],
            ["Point", "4 Sep 2026 at 01.00 UTC"],
          ],
        },
      ],
      cta: "Reply in Astral",
      manage: true,
      reason: "You got this because you raised this query.",
    },
    {
      id: "query-resolved",
      group: "queries",
      name: "Query resolved",
      summary: "Says how it was resolved and what to do if it is not.",
      when: "A query you raised is resolved as Expected, Fixed, or Duplicate.",
      who: "The person who raised it, and people on the thread with Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "Your query on Euston was resolved as Fixed",
      preheader: "Actual readings are arriving every half hour again.",
      eyebrow: "Query",
      title: "Your query was resolved as Fixed",
      blocks: [
        {
          type: "quote",
          who: `${IMSERV.name}, ${IMSERV.team}`,
          text: "The data logger at Euston was reset. Actual readings are arriving every half hour again.",
        },
        {
          type: "facts",
          rows: [
            ["Resolved as", "Fixed"],
            ["Site", "Euston"],
          ],
        },
      ],
      cta: "Open query",
      after: "If it is not fixed, reply on the query in Astral to open it again.",
      manage: true,
      reason: "You got this because you raised this query.",
    },
    {
      id: "report-sent",
      group: "reports",
      name: "Scheduled report",
      summary: "The report itself. The file is attached when it is small enough.",
      when: "A Live report runs on its schedule.",
      who: "People and emails on the report.",
      control: "The report in Reports. Not Notifications.",
      to: ME,
      subject: "Weekly interval data, 24 Aug to 30 Aug 2026",
      preheader: "Crewe depot and Euston, as CSV.",
      eyebrow: "Report",
      title: "Weekly interval data",
      blocks: [
        { type: "text", text: "Interval data for Crewe depot and Euston, last week, as CSV." },
        { type: "file", kind: "CSV", name: "Weekly interval data_20260831_0600.csv", note: "184 KB" },
        {
          type: "facts",
          rows: [
            ["Period", "24 Aug 2026 to 30 Aug 2026"],
            ["Sites", "Crewe depot, Euston"],
            ["How often", "Weekly, Monday at 06.00 UK time"],
          ],
        },
      ],
      cta: "Open report",
      reason: "You got this because you are on Weekly interval data. Ask an Admin or Manager to take you off.",
    },
    {
      id: "report-big",
      group: "reports",
      name: "Report too big to attach",
      summary: "Points to Downloads when the file is too big for email.",
      when: "A Live report runs and the file is over the attachment limit.",
      who: "People on the report with an Astral account.",
      control: "The report in Reports. Not Notifications.",
      to: ME,
      subject: "Two years of interval data is ready in Downloads",
      preheader: "The file is too big to attach.",
      eyebrow: "Report",
      title: "Two years of interval data is ready",
      blocks: [
        { type: "text", text: "The file is too big to attach, so it is waiting in Downloads." },
        {
          type: "facts",
          rows: [
            ["Period", "1 Sep 2024 to 31 Aug 2026"],
            ["Sites", "All sites"],
            ["Kind", "XLSX"],
            ["Size", "48 MB"],
          ],
        },
      ],
      cta: "Open Downloads",
      reason: "You got this because you are on Two years of interval data.",
    },
    {
      id: "tenant-billing",
      group: "reports",
      name: "Tenant billing to a tenant",
      summary: "Goes outside the company. Names the sender, since the tenant may not know Astral.",
      when: "A Live Tenant billing report runs.",
      who: "Tenant emails on the report. They do not need an Astral account.",
      control: "Tenant billing in Reports.",
      to: { name: "Northgate Retail accounts", email: "accounts@northgate.example" },
      subject: "Your energy costs at Crewe depot for September 2026",
      preheader: "Your share is £1,698, including VAT.",
      eyebrow: "Tenant billing",
      title: "Your energy costs at Crewe depot",
      blocks: [
        { type: "text", text: "Network Rail sends this through Astral. It covers Northgate Retail's share of energy at Crewe depot." },
        {
          type: "facts",
          rows: [
            ["Period", "1 Sep 2026 to 30 Sep 2026"],
            ["Site", "Crewe depot"],
            ["You pay", "£1,698, including VAT at 20 percent"],
          ],
        },
        { type: "file", kind: "CSV", name: "Northgate Retail billing_20260930_0600.csv", note: "12 KB" },
      ],
      reason: "Network Rail sends you this. Ask them to change the address or stop it.",
    },
    {
      id: "report-failed",
      group: "reports",
      name: "Report could not send",
      summary: "Says what failed and what to check, so the next send works.",
      when: "A Live report fails to deliver by email or SFTP.",
      who: "Admins and Managers in the company. They can edit the report.",
      control: "Always sent to Admins and Managers.",
      to: ADMIN,
      subject: "Could not send Monthly DC and DA reads",
      preheader: "The SFTP server did not accept the file.",
      eyebrow: "Report",
      title: "Could not send Monthly DC and DA reads",
      blocks: [
        { type: "text", text: "The SFTP server did not accept the file. Check the server details on the report, then send it again." },
        {
          type: "facts",
          rows: [
            ["Report", "Monthly DC and DA reads"],
            ["Delivery", "sftp.networkrail.example/dcda"],
            ["Tried", "1 Sep 2026 at 06.00 UK time"],
          ],
        },
      ],
      cta: "Open report",
      reason: "You got this because you can edit Monthly DC and DA reads.",
    },
    {
      id: "export-ready",
      group: "downloads",
      name: "Export ready",
      summary: "Only sent when someone leaves before their export finishes.",
      when: "An export finishes after the person who started it has left the page.",
      who: "The person who started it.",
      control: "Always sent to whoever started it.",
      to: ME,
      subject: "Your export is ready",
      preheader: "Crewe depot interval data, as CSV.",
      eyebrow: "Data export",
      title: "Crewe depot interval data is ready",
      blocks: [
        {
          type: "facts",
          rows: [
            ["Name", "Crewe depot interval data"],
            ["Kind", "CSV"],
            ["Created", "4 Sep 2026 at 10.42"],
          ],
        },
      ],
      cta: "Open Downloads",
      reason: "You got this because you started this export.",
    },
    {
      id: "document-added",
      group: "downloads",
      name: "New document",
      summary: "Tells people IMSERV has put a file in Downloads for them.",
      when: "IMSERV adds a document to Downloads for your company.",
      who: "People who can see Downloads and have Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "New NHH dial failures file in Downloads",
      preheader: "NWR_NHH_DIAL_FAIL_20260904_0215.csv",
      eyebrow: "Document",
      title: "New NHH dial failures file",
      blocks: [
        { type: "file", kind: "CSV", name: "NWR_NHH_DIAL_FAIL_20260904_0215.csv", note: "NHH dial failures. Added 4 Sep 2026 at 02.15" },
      ],
      cta: "Open Downloads",
      manage: true,
      reason: "You got this because IMSERV added a file for Network Rail.",
    },
    {
      id: "summary-daily",
      group: "summary",
      name: "Daily summary",
      summary: "One email a day in place of each alert, query, and report.",
      when: "Once a day, when How often is Daily and there was activity.",
      who: "People with Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "Your Astral activity for 3 Sep 2026",
      preheader: "3 alerts, 1 query reply, and 2 reports sent.",
      eyebrow: "Daily summary",
      title: "Yesterday in your workspace",
      blocks: [
        {
          type: "stats",
          rows: [
            ["3", "New alerts"],
            ["1", "Query reply"],
            ["2", "Reports sent"],
          ],
        },
        {
          type: "items",
          title: "Alerts",
          rows: [
            { title: "Manchester Traction", note: "Demand 38 percent above expected", level: "High" },
            { title: "Crewe depot", note: "No readings arriving from 01.00 UTC", level: "High" },
            { title: "Euston", note: "Last actual 48 min ago", level: "Medium" },
          ],
        },
        {
          type: "items",
          title: "Queries",
          rows: [{ title: "Missing hours on the incoming supply", note: `${IMSERV.name} replied`, side: "Crewe depot" }],
        },
        {
          type: "items",
          title: "Reports",
          rows: [
            { title: "Northgate Retail billing", note: "Sent to 1 tenant", side: "CSV" },
            { title: "Harbour Coffee billing", note: "Sent to 1 tenant", side: "CSV" },
          ],
        },
      ],
      cta: "Open Astral",
      manage: true,
      reason: "You get this once a day.",
    },
    {
      id: "summary-weekly",
      group: "summary",
      name: "Weekly summary",
      summary: "The week at a glance, led by the sites that need the most attention.",
      when: "Once a week, when How often is Weekly and there was activity.",
      who: "People with Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "Your Astral activity for 24 Aug to 30 Aug 2026",
      preheader: "11 alerts, 4 query replies, and 6 reports sent.",
      eyebrow: "Weekly summary",
      title: "Last week in your workspace",
      blocks: [
        {
          type: "stats",
          rows: [
            ["11", "New alerts"],
            ["4", "Query replies"],
            ["6", "Reports sent"],
          ],
        },
        {
          type: "items",
          title: "Sites with the most alerts",
          rows: [
            { title: "Crewe depot", note: "5 alerts. 3 still open", level: "High" },
            { title: "Manchester Traction", note: "3 alerts. 1 still open", level: "High" },
            { title: "Euston", note: "3 alerts. All resolved", level: "Medium" },
          ],
        },
      ],
      cta: "Open Astral",
      manage: true,
      reason: "You get this once a week.",
    },
    {
      id: "summary-monthly",
      group: "summary",
      name: "Monthly summary",
      summary: "The month at a glance, with the totals people report on.",
      when: "Once a month, when How often is Monthly and there was activity.",
      who: "People with Activity in my workspace on.",
      control: ACTIVITY,
      to: ME,
      subject: "Your Astral activity for August 2026",
      preheader: "38 alerts, 9 query replies, and 14 reports sent.",
      eyebrow: "Monthly summary",
      title: "August in your workspace",
      blocks: [
        {
          type: "stats",
          rows: [
            ["38", "New alerts"],
            ["9", "Query replies"],
            ["14", "Reports sent"],
          ],
        },
        {
          type: "items",
          title: "Sites with the most alerts",
          rows: [
            { title: "Crewe depot", note: "14 alerts. 3 still open", level: "High" },
            { title: "Manchester Traction", note: "11 alerts. 1 still open", level: "High" },
            { title: "Euston", note: "7 alerts. All resolved", level: "Medium" },
          ],
        },
      ],
      cta: "Open Astral",
      manage: true,
      reason: "You get this once a month.",
    },
  ];

  window.AstralEmails = { GROUPS, SCENARIOS, SENDER, render, text, esc };
})();
