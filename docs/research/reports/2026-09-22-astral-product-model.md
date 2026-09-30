# Astral product model, desk fold

Named picture from the handoff transcript, folded on 22 Sep 2026. Not a study. Not a quote store. Unsettled rules stay questions.

Astral is not DataVision rebuilt in React. It is becoming the place an IMSERV customer goes to work with energy data and outputs. Visualisation, portfolio, documents, permissions, and later contract-driven access sit together.

## Three kinds of access

Keep these apart. Do not design one blob called permissions.

Product entitlement is what the company bought. Version one is documents only or full Astral. The customer does not pick this. The sold services do.

User role is what that person can do. Admin, Manager, Contributor, Viewer. Super admin stays on Platform admin.

Access scope is which sites, MPANs, reports, and documents they can see. Group membership can carry that.

A full Astral Viewer on a North Scotland group is not the same as a documents-only Admin on a Finance group.

The exact Admin, Manager, and Viewer matrix is still open. Ask Anthony.

## Team and Group

A Team is who they work with. Finance, Billing, Sales, Brokers, Operations. Users already groups people into teams.

A Group is what they can access. Sites, MPANs, reports, documents. An MPAN can sit in more than one group. People in the group inherit that set.

They might later link, for example a Finance team joining a Finance reports group. Do not treat them as the same thing now. The final model is still open. Ask Max and Anthony.

Permission user groups stay in admin. Do not mix that screen with a Team on Users, or with a Group on the tree.

## Two customer experiences

Documents only may see My Documents, notifications, and profile. No portfolio, graphs, or alerts.

Full Astral gets Portfolio, consumption, cost, carbon, alerts, reports, documents, site profiles, and the rest of the energy walk.

The shell cannot assume every login gets the same nav. Hide Portfolio from a documents-only login. Self-serve upgrades wait.

## Contracts later

The intended path is CRM contract, then service entitlement, then Astral function. Checking sold services would grant documents only, full visualisation, or later a finer pack.

Do not design a huge entitlement-management UI that Super admin ticks by hand if the contract will do that work.

The desk already has this. Astral should create records when a sold contract includes visualisation.

## DataVision

It is the behaviour library, not the design template. Ask what capability sits in the screen. Then keep it, redesign it, simplify it, or drop it on purpose. Do not lose a DataVision capability by accident.

Meter serials, job visit history, and deeper meter profile wait. Ask whether a feature is existing capability, version one, or later.

## Four file kinds

Scheduled report. Astral generates it on a clock. Type, schedule, people, and who can see it.

My Documents. Files IMSERV produced elsewhere and placed for the customer. Safer than email or file transfer. Not the same pile as Downloads.

Export. The person makes CSV or PDF from the view they are on. Processing, then Download.

Data provision report. The business service behind those outputs. Some of them land in My Documents.

Do not call all of them Reports or Downloads.

## Hierarchy

Company, then Portfolio, then Group, then Site, then MPAN, then Meter, then channel. The old drill is company, site, MPAN, meter. Scotland may need deeper meter and channel. Verify that before treating it as a rule.

Groups are not folders. They can gate sites, MPANs, reports, documents, and who sees them. Custom groups still wait.

## Portfolio

A large customer will not browse thousands of MPANs. They ask how the portfolio is doing, then a region, then which sites, then this MPAN. Max wants that narrowing. The walk already starts at All, then group, then site.

Named scale. About 8,000 MPANs on a customer. About 45,000 on internal access. Do not load every MPAN, draw thousands of series, or show thousands of ticks.

## Site profile and cost

The meter says kWh. Context sits on Site profile. Hours, time of use, people, occupancy, floor area, and rates. That is an input into analytics, not extra metadata.

Tariff may not come from the meter. Without a rate, do not show £0. Say cost is unavailable until they add tariff information.

## Estimated and Alert

Estimated is a guessed reading. Confidence. Alert is odd use, missing data, or not sending. Attention. Do not use the same pattern.

Version one alerts stay simple. High and low from the system. Customer-set statistical thresholds wait.

## Who to ask

Clive. Direction and a demo people can touch.

Emily Haddon. What customers have already seen.

Max. DataVision behaviour, domain, and holes in a story.

James. Architecture and whether a design can sit on the current structure. Capture him before he leaves.

Keegan. Turning an agreed walk into build.

Anthony. Multi-tenancy and user-access stories.

Anna. Who should look next, backlog, and people. That is what she is doing, not a title.

## Design process

Design, customer check, domain and technical check, stories, developer briefing, build, next module. Emily and Max sign Portfolio. Stories written before the walk are not sacred. Story, technical fact, customer need, and the walk have to meet.

## Still open

The Admin, Manager, and Viewer matrix.

The Scotland meter and channel rule.

The final Teams versus Groups model.

How far entitlement automation goes in version one.

## Skeleton

Contract, then entitlement, then company type, then role, then groups, then portfolio from group to site to MPAN to meter, then consumption, cost, carbon, alerts, and profiles. Scheduled reports, My Documents, and Exports sit beside that. Site profile, tariffs, and meter data make the numbers mean something.
