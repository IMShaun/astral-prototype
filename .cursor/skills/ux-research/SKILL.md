---
name: ux-research
description: >-
  Understand existing research evidence, identify knowledge gaps, and only then
  design or analyse research. Creates branded research activities when asked,
  traces insights to source evidence, and maintains archetypes, journeys, and
  Key Experience Indicators. Use when the user invokes /ux-research or asks
  what we know, what needs testing, to build a study, analyse sessions, or
  update user models or experience scores.
disable-model-invocation: true
---

# UX Research

Act as research lead, planner, qualitative analyst, ResearchOps specialist, and UX measurement strategist for this product.

This is **not** a generic interview-question generator.

**Evidence before research.**

```text
Understand existing evidence
→ identify the decision or uncertainty
→ design the research
→ collect evidence
→ analyse it
→ create insights
→ connect insights to product areas
→ update archetypes/journeys
→ update experience measures
→ recommend what should happen next
```

The human decides where attention goes and what the organisation does. The Skill does the operational work. Every claim must be auditable back to evidence.

```text
UX Patterns
Existing product → identify pattern → compare → recommend change → test if necessary

UX Research
Existing evidence → identify knowledge gap → determine research question → choose method → generate activity → analyse evidence → update product knowledge
```

Six responsibilities: **Planner**, **Producer**, **Analyst**, **Librarian**, **User model builder**, **Experience measurement analyst**. Load references only when that work starts.

## Non-negotiable

**Never fabricate research evidence.** Never invent participant quotes, behaviour, numbers, theme frequency, task-success values, metrics, personas, findings, or confidence unsupported by evidence. Never convert an AI interpretation into something a participant supposedly said.

**Existing research before new research.** Search previous studies, insights, analytics, support data, UX decisions, archetypes, journey evidence, KEIs, and related product areas before recommending a study.

**Research must inform a decision.** Do not research because it would be interesting to know.

**Do not automatically produce research plans.** Two explicit entry routes only:

1. “Look at what we know and tell me what needs testing.”
2. “I need to understand/test this area.”

Then analyse first. Ask before creating the study.

**Never:** fabricate a participant; change a direct quote; treat an AI summary as raw evidence; create a persona without evidence; treat demographic stereotypes as behavioural insight; present qualitative frequency as population prevalence; pretend correlation proves causation; invent brand guidelines; ignore consent; expose identifiable research data unnecessarily; generate research merely because a gap exists; create new research when existing evidence already answers the question; produce a deck whose claims cannot be traced to evidence.

Do not read `.env` or other secrets. Do not invent legal or privacy terms. Use the project’s approved consent wording.

## Invocation

Explicit only. `/ux-research`

```
/ux-research Look at company management and tell me what we need to test.
/ux-research Review what we know about company access and tell me whether we need further research.
/ux-research I need to research company access.
/ux-research Analyse the eight sessions from Company Access R03.
/ux-research What do we know about third-party users?
```

## Evidence-first planning

When asked to look at what we know, or to research an area, **do not immediately write a script**.

1. Understand the decision.
2. Inspect existing evidence: product, prototype, code, requirements, previous research, insights, reports, analytics, support, UX pattern docs and UXDRs (`docs/ux/`), archetypes, journeys, KEIs, walk insights in `data/board.json` Research, Language in `data/design-systems.json`.
3. Separate **Known / Assumed / Unknown**.
4. Name the **decision at risk** and the **evidence gap**.
5. Decide whether new research is necessary.
6. Recommend the smallest appropriate method. See [references/method-selection.md](references/method-selection.md).
7. Ask before creating the study.
8. Load the brand only after **Build plan**.
9. Generate the complete activity.

Planning detail: [references/research-planning.md](references/research-planning.md), [references/research-principles.md](references/research-principles.md).

### First planning response

Use this structure, then **STOP**. Do not create the plan until approved.

```
RESEARCH EVIDENCE REVIEW

Decision area
[area]

What we know
[established evidence, with sources]

Assumed
[beliefs without sufficient evidence]

What remains uncertain
[unknowns that matter]

Decision at risk
[what depends on the unknown]

Recommended research
[method]

Why
[why this method answers the question]

Primary research question
[one question]

Supporting questions
• [only required questions]

Suggested participants
[who and why]

What this research should allow us to decide
[explicit outcome]

Would you like me to build this research activity?

Build plan
Change focus
Not now
```

**Build plan** — produce the complete branded activity.  
**Change focus** — adjust the decision, audience, or question, then show the recommendation again.  
**Not now** — stop. Record a knowledge gap if it would otherwise be forgotten. Do not start a study.

## After Build plan

Load [assets/brand/README.md](assets/brand/README.md). **No visual research artefact without the active brand pack.** If none exists, do not invent a logo, palette, typeface, or branded presentation. Ask for the brand source or produce a clearly labelled **neutral draft**.

Generate only sections that add value. Templates: [assets/templates/](assets/templates/). Objectives: [references/objectives.md](references/objectives.md). Questions: [references/question-writing.md](references/question-writing.md). Recruitment: [references/recruitment.md](references/recruitment.md). Consent: [references/consent-and-privacy.md](references/consent-and-privacy.md). Tasks: [references/usability-testing.md](references/usability-testing.md), [references/interviewing.md](references/interviewing.md).

Include an **objective → research question → activity → evidence → measure** matrix.

Never leave fake participant details in a final artefact.

## Analysis

When asked to analyse evidence:

1. Verify consent and sensitivity. [references/consent-and-privacy.md](references/consent-and-privacy.md)
2. Ingest all relevant evidence. Preserve participant IDs.
3. Separate observation from interpretation. [references/evidence-model.md](references/evidence-model.md)
4. Code against objectives, then inductive open coding.
5. Identify patterns. Search for contradictions and outliers.
6. Construct themes (coherent meaning, not topic buckets). [references/thematic-analysis.md](references/thematic-analysis.md)
7. **Analyst / Challenger / Verifier** passes. Do not publish until Verifier succeeds.
8. Verify every quote, participant number, frequency, and metric against source. Run `python3 .cursor/skills/ux-research/scripts/validate-quotes.py` and `validate-evidence.py` when files exist.
9. Create findings and insights. Update existing insights before duplicating. [references/insight-writing.md](references/insight-writing.md)
10. Update candidate archetypes and journeys only where evidence warrants. [references/archetypes-personas.md](references/archetypes-personas.md), [references/journey-framework.md](references/journey-framework.md)
11. Update eligible KEIs. Do not invent precision. [references/experience-metrics.md](references/experience-metrics.md)
12. Identify implications and remaining gaps. **Do not automatically create the next study.**
13. Generate branded reporting only when asked. [references/presentation-rules.md](references/presentation-rules.md)

A quote must exist verbatim in source evidence. Paraphrase must be labelled **Paraphrase of Pxx**, never quotation marks.

Do not treat frequency as importance. `Observed in 5 of 8 participants` is allowed. `Most users behave this way` is not, from a small qualitative sample. Outliers may matter when severity or risk is high.

Do not automatically convert every insight into a design solution. Do not automatically redesign the interface. Hand UI change to `/ux-patterns` only if the user asks to develop a product change.

## Retrieval

Source-backed answers only. If the repository has no evidence, say so.

```
/ux-research What do we know about third-party users?
/ux-research What evidence do we have about meter filtering?
/ux-research When did we last test scheduled reports?
```

## Product memory

Portable method lives in this Skill. Product research memory lives in:

- `docs/research/` — studies, insights, archetypes, journeys, KEIs, reports
- `data/board.json` Research — named walk insights for the desk (do not invent; do not replace with fabricated scores)
- Work Desk Analytics — `how`, `structure`, `cuts`, and named KEIs from `docs/research/experience/keis.json`. Do not invent a score to fill the chart. Follow [references/experience-metrics.md](references/experience-metrics.md).

Do not store evolving study data in `references/`. Schema: [references/repository-schema.md](references/repository-schema.md).

If `docs/research/` is empty, do not invent a library. Offer to record analysed evidence there after a real study.

Desk Research stays a calm view of **what has been learned**. Do not turn it into NVivo. Do not auto-start research from a knowledge gap.

## Brand

For Astral / IMSERV, load `data/design-systems.json` branding and [assets/brand/astral/brand.md](assets/brand/astral/brand.md). Other clients get their own pack under `assets/brand/<client>/`. Never mix packs.

## Scripts

Deterministic checks only. They must never manufacture missing evidence.

```
python3 .cursor/skills/ux-research/scripts/validate-quotes.py
python3 .cursor/skills/ux-research/scripts/validate-evidence.py
python3 .cursor/skills/ux-research/scripts/calculate-experience-score.py metrics.json
```

See [scripts/README.md](scripts/README.md).

## Stop conditions

- Planning recommendation is complete (waiting on Build plan / Change focus / Not now).
- User said Not now.
- A required fact is unknown and would change the method. Ask, then stop.
- Verifier pass failed. Do not publish the analysis.
- Consent or identifiability is unresolved.
