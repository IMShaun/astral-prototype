# Experience metrics

The score is the top of a measurement system, **not a magic number**. Call it **Experience Score**. It is an internal product framework, not a universal scientific UX standard.

A **Key Experience Indicator (KEI)** is a quantitative score of a specific, important, and actionable part of using the product. It is not gut feel. Choose one only when it is relevant and the team can act on it. Good KEIs inform decisions, often sit upstream of retention or revenue, and sit next to qualitative insights rather than replacing them.

The Work Desk Analytics page reads `docs/research/experience/keis.json`. `how` is the measurement taxonomy. `keis` are named scores. Do not invent a score, a target, or a trend to fill the chart. Industry benchmarks in this note (NPS, CSAT, SUS, DAU/MAU) are commentary. They are not IMSERV baselines.

## Architecture

```
BUSINESS OUTCOME
What does the organisation need?
↑
PRODUCT OUTCOME
What behaviour indicates success?
↑
KEY EXPERIENCE INDICATORS
What must users experience for that behaviour to happen?
↑
RESEARCH MEASURES
How do we measure those experiences?
↑
QUALITATIVE EVIDENCE
Why are those numbers changing?
```

Start from the desired experience, not from whatever data is lying around.

**KEIs** are product-specific measures of the experiences users must have to achieve important outcomes. Define and govern them here. They are less standardised than HEART, so weights and targets must be documented.

Map each named KEI to a typical metric, a data source, and a method. Pair quantitative capture (surveys, events, logs, support) with qualitative capture (interviews, usability tests, open feedback).

## Kinds

Group a KEI by what it captures.

| Kind | What it captures | Examples |
| --- | --- | --- |
| Behavioral | What people do | Task success, time on task, adoption, DAU/MAU, retention |
| Attitudinal | How people feel | Ease, confidence, CSAT, SUS, CES. Company NPS if used at all |
| Operational | Where the work breaks | Error rate, tickets, wait, first-contact resolution |

Astral is a digital energy product. Prefer digital and service KEIs. Do not copy physical-product lists (durability, return rate, lab sensors) onto the desk unless a study names them.

## Leading and lagging

| Type | Role | Typical KEIs |
| --- | --- | --- |
| Leading | Signals trouble or lift before the business outcome | Task success, time on task, errors, ease, CSAT, SUS, adoption, stickiness |
| Lagging | Shows what already happened | Retention, churn, lifetime value |

A drop in a leading measure can foretell a lagging one. Track both when a study names them. Do not treat a leading dip as a proven revenue loss.

## HEART

Use HEART to check coverage, not to invent nine scores.

- Happiness sits with satisfaction and ease
- Engagement, Adoption, and Retention sit with engagement
- Task success sits with effectiveness and efficiency

Pick three to five critical KEIs and a short secondary list. Do not track everything.

## Families

A coarser grouping for the dashboard, not extra scores.

| Family | Desk dimensions | Role |
| --- | --- | --- |
| Facility | Effectiveness, ease, efficiency, confidence | Can they finish the work, how long, how hard it feels |
| Engagement | Usefulness, engagement | Do they use it, and keep using it |
| Satisfaction | Satisfaction | How they feel after the work |
| Operational | Operational | Errors, tickets, wait |
| Constraint | Accessibility | Failures that a high average cannot cancel |

Do not invent a composite uber-score to hide a drop in one family.

## Hierarchy

Keep a small product-wide set, then area KEIs. Do not flatten everything into one NPS.

**Product-wide.** Adoption, retention, CSAT or SUS, help volume, overall error rate. These are top-line health, not a substitute for task success.

**Area.** Each Astral surface can hold KEIs. Use the product names that exist. Portfolio, Alerts, Queries, Reports, Users, Finance. Alerts and Queries cover faults. Meters sit in Portfolio. Do not invent Faults or Meter Data as extra product areas. Sign in and recovery sit with those flows. Field workers are not a main portal user.

**Primary vs diagnostic.** One primary KEI per area (usually task success). Two to four diagnostics (median time, CES, error or abandon, retries). The primary is the thermometer. Diagnostics explain a drop. A named KEI records `scope` (`product` or `area`), `role` (`primary` or `diagnostic`), and `area` when it is area-level.

Worked examples in method notes (8 rows, 62.5% success) are illustrative only. Do not copy them into `keis.json`.

## Dimensions

Desk Analytics **How we measure** uses these ids. Named KEIs must use one of them. `family` is Facility, Engagement, Satisfaction, Operational, or Constraint.

| Dimension | Kind | Lead | Question | Possible measures |
| --- | --- | --- | --- | --- |
| Effectiveness | Behavioral | Leading | Can users achieve the goal? | Task success, accuracy, error-free completion |
| Ease | Attitudinal | Leading | How easy does it feel? | SEQ, CES |
| Efficiency | Behavioral | Leading | How much effort or time? | Time, steps, rework, assists. Prefer median |
| Confidence | Attitudinal | Leading | Do they understand and feel safe proceeding? | Post-task confidence, hesitation, rechecking |
| Usefulness / fit | Attitudinal | Leading | Does it meet the need? | UMUX-Lite or product-specific items |
| Satisfaction | Attitudinal | Leading | How satisfied? | CSAT, SUS. NPS is too broad for feature UX |
| Engagement | Behavioral | Both | Are they using it over time? | Adoption, frequency, DAU/MAU, retention, churn |
| Operational | Operational | Leading | Where does the work break? | Crash or error rate, tickets, wait, FCR |
| Accessibility | Constraint | Leading | Can they use it? | Failures are constraints. A high average cannot cancel them |

NPS may remain a company metric. Do not put a company NPS number on a feature KEI.

## When in the life of the product

Choose KEIs from the job the product is in. Do not invent a stage IMSERV has not named.

- Early / first use. Activation, onboarding success, time to first value, task success on core flows, first CSAT
- Growth. Engagement, feature adoption, cohort retention, NPS/CSAT for loyalty
- Mature. Retention, churn, support effort, CSAT/NPS over time, CES on friction
- Repositioning. Effort, sentiment, and diagnostics. Intensive qualitative work first

For a digital / SaaS-like product, candidate types (not named measures) include activation, onboarding task success, stickiness, feature adoption, retention, churn, CSAT or SUS, session depth, and support volume. Do not write these into `keis.json` until a study names a measure, a baseline, and a method.

## Task stack vs product stack

Task / feature: success, SEQ, errors / assists, time / steps, confidence.

Module / product: UMUX-Lite, CSAT, HEART behavioural signals.

Business: support contacts, manual processing, conversion, retention, cost where causally relevant.

## How to measure

Quantitative and qualitative both count. A score without a why is incomplete.

| Method | What it is for | Watch |
| --- | --- | --- |
| Surveys | CSAT, NPS, SUS, CES, SEQ | Non-response bias. Use validated items. Check reliability on multi-item scales |
| Events and logs | Adoption, funnels, DAU/MAU, errors | Consistent names. Do not count vanity pageviews as experience |
| Usability tests | Task success, time on task, observed errors, SUS | Same tasks across people. Directional if the sample is small |
| Support and CRM | Wait, resolution, tickets | Operational KEIs. Pair with why the ticket exists |
| Session replay / intercepts | Why a number moved | Triangulate. Do not treat a clip as a score |

Do not pick Mixpanel, GA4, Amplitude, Hotjar, Qualtrics, or FullStory as the Astral stack unless a talk has named a tool. Instrument in whatever the product already uses. Get consent for tracking and surveys.

When events exist, tag them so a later cut can slice without inventing filters. Needed on a task event: area, journey or task, test type, named user role, result, time, error count, timestamp. Account and meter type only when that event is about a customer or a meter. Do not log a password or a recovery code.

A round needs a date, a sample, a method, and a study id. Two comparable rounds make a trend. A five to eight person qualitative round stays directional.

## Formulas

Use these only after a study names the measure. Do not fill targets from industry commentary.

- Task success = users who finished ÷ users who tried
- Time on task = median of successful attempts
- Error rate = errors ÷ attempts
- CSAT = satisfied respondents ÷ total respondents (define the top box)
- NPS = % promoters − % detractors
- Retention = still active at T ÷ started
- Churn = 1 − retention
- CES = mean effort or % low-effort, as documented
- SUS = standard 0–100 scoring
- DAU/MAU = daily unique ÷ monthly unique
- Adoption = users who used the feature ÷ targeted users
- Abandonment = started without a finish ÷ started
- First-contact resolution = resolved on first contact ÷ contacts
- Lostness = (distinct steps ÷ optimal steps) × (extra steps ÷ (total steps − 1)). Needs an optimal path from a usability study. Do not invent R from logs alone.

Normalize before combining. Put rates on 0–1 or 0–100. Reverse time and error so higher always means better. Document the weights. Prefer showing the parts next to any composite.

Report a sample size with every score. For a proportion use a binomial interval (Wilson). For a mean or median time use a t interval when n is small. A five to eight person round stays directional. A band of tens of points means wait for more data. Do not invent a confidence interval to fill a chart.

Lab, live use, survey, and support stay separate scores. Do not mix test types in one KEI.

Commentary often cited elsewhere (SUS average about 68, CSAT often called good above 70%, SaaS NPS often called good around 47, DAU/MAU stickiness often called healthy above 20%) is **not** an IMSERV red line or target. Set red and target from this product's own rounds, or leave them empty.

## Validation and pitfalls

- Audit that events fire on the actions they name
- Do not publish a survey KEI on a handful of replies without calling it directional
- Cross-check a movement with qualitative evidence
- Segment. An average can hide an unhappy group
- Do not mix lab and live in one score
- Do not treat n under 10 as a firm rate
- Avoid vanity metrics that do not change a decision
- Do not teach to the test (speed up a flow by making people less sure)
- Survey timing and who replies will skew attitudinal scores
- Separate product errors from user mistakes

## Experience Score

Always show the headline **and** component scores. An improvement in one area must not hide a regression in another. Only include dimensions relevant to the feature.

```
Metric value
→ compare with agreed red threshold + desired target
→ convert to 0–100 target-attainment
→ apply documented weighting
→ Feature Experience Score
```

Do **not** multiply unrelated metrics (SEQ × completion × NPS).

Weights are visible and version-controlled. Example shapes (document per feature; do not copy blindly):

Permissions-style: Effectiveness 30%, Ease 20%, Confidence 30%, Efficiency 10%, Usefulness 10%.

Repetitive filtering: Effectiveness 25%, Ease 20%, Efficiency 30%, Confidence 10%, Usefulness 15%.

Run `python3 .cursor/skills/ux-research/scripts/calculate-experience-score.py` on a metrics file. The script fails if values or weights are missing. It never invents scores.

## Maturity

| State | Meaning |
| --- | --- |
| No baseline | No suitable measurement |
| Provisional | Directional evidence only (e.g. 4–8 qualitative) |
| Benchmarked | Quantitative baseline exists |
| Tracking | Comparable measurements over time |
| Stale | Last measurement no longer represents current design |

A five-person test may show `Task success 4/5`, `Ease 5.4 / 7`, **Directional only**. It must not announce “UX increased from 72 to 81.”

## Longitudinal and impact

Track baseline, current, absolute and relative change, round, product version, sample, method, date, confidence.

Never claim a UX change **caused** a business movement unless the design permits causal inference. Prefer: **Evidence supports the hypothesis that…**

Design impact record: finding, hypothesis, change, version, validation, KEI before/after, product and business signals, interpretation, causality confidence.

## Governance

1. Align on the outcome, then pick KEIs that are specific, important, and actionable
2. Write the definition, formula, source, and owner before capturing data
3. Name one primary per area and two to four diagnostics. Keep a small product-wide set
4. Instrument events and surveys. Tag area, task, test type, and named role. Test that counts match expected actions
5. Keep one source of truth in `docs/research/experience/keis.json`
6. Review on a cadence. Update KEIs when the product changes. Do not add a vanity chart

Assign an owner per named KEI. UX often owns attitudinal and task measures. Data often owns engagement dashboards. Support often owns operational counts. The desk still does not invent a score to fill a hole.
