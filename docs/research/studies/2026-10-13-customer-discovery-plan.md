---
id: STUDY-2026-10-13-customer-discovery
title: Astral customer discovery
subtitle: Behavioural archetypes, customer journeys, and prioritised UX decisions
status: draft for review
owner: Shaun Leishman, UX
date: 2026-10-13
---

# Astral customer discovery

Behavioural archetypes, customer journeys, and prioritised UX decisions.

Draft for review. 13 October 2026. Shaun Leishman, UX.

Neutral draft. There is no approved IMSERV research-plan template yet. Internal. Not for participants.

## Summary

We want to run a research-led discovery with IMSERV customers. It should produce three things:

- **Behavioural archetypes.** How people actually work, what they need, and what changes the design.
- **Evidence-backed customer journeys.** What happens today, including work outside Astral.
- **A prioritised set of UX decisions.** Each one traceable to evidence, and ready for the BA team to turn into stories.

The method is a connected sequence: review what we already have, interview and observe, find provisional patterns, survey those patterns, follow up on contradictions, then test what it means for the design.

Clive has offered to help unlock customer access. He has **not** agreed a research plan, scope, or sample size. This plan is the proposal for that conversation.

Everything here is a proposed approach. It is grounded in UX and mixed-methods guidance. **None of it is a finding about IMSERV customers yet.**

## What we are asking for

1. **Review this plan** and agree or change the scope, the decisions it supports, and the provisional timeline.
2. **Agree the first research decisions with Clive.** Which journeys matter most and what is out of scope.
3. **Name an access coordinator.** Someone who can introduce us to customers and book sessions.
4. **Access to the people who do the work.** Not only senior account contacts.
5. **Access to Clive and Emily Haddon's existing customer interview notes.** So we build on them, not repeat them.
6. **A privacy and data-protection owner.** To agree recording, transcription, storage, and any AI processing before the first session.

## Decision to inform

- Which customer tasks and journeys Astral should prioritise for version one and after.
- Which behavioural differences need different designs, defaults, or trade-offs.
- Where problems sit in the service and process, not the interface. So we do not try to fix ownership or data quality with screen copy.
- What the BA team should specify next, with evidence behind each story.

## What we already know

| Evidence | Source | Limit |
| --- | --- | --- |
| Clive and Emily Haddon did a dozen or more customer interviews. The notes sit with Clive | Work Desk notes, 4 Sep 2026 | We have not seen the notes. We do not know who was interviewed or what was asked |
| British Gas and Scottish Water asked to take part in the beta | Work Desk notes, 4 Sep 2026 | A route to customers. Not a sample |
| Customers want to see their own estate, know meters are working, get invoices and reports, and follow problems. Export is more common than looking at graphs | Max Lake, DataVision walk, 4 Sep 2026 | Internal account of customer behaviour. Not observed with customers |
| People pick sites and meters, compare them, then export a file. They do not browse the whole portfolio | Max Lake, 4 Sep 2026 | As above |
| Company types are Customer, Broker / TPI, Supplier, and Platform admin. A Customer has Energy, Finance, Asset, and Data working hats | `docs/research/reports/2026-09-12-imserv-customer-base.md` | Public-page desk research. Not a study |
| Access has three separate parts: what the company bought, the person's role, and which sites and documents they can see | `docs/research/reports/2026-09-22-astral-product-model.md` | From the handoff transcript. The role matrix is still open |
| Large customers narrow from the whole portfolio, to a region, to sites, to one MPAN. One customer has about 8,000 MPANs | As above | Named in a talk. Not observed |

The research repository (`docs/research/`) has no studies, insights, archetypes, or experience scores yet.

## Assumed

These are beliefs we have not tested with customers:

- The Energy, Finance, Asset, and Data hats describe how people work. They are a useful recruitment start. They may not be four archetypes.
- Customers mostly use Astral for reporting. Reporting may mean pulling data that is finished somewhere else.
- The people a senior contact introduces us to are the people who do the day-to-day work.
- Problems people raise about the portal are interface problems. Some may be service, process, or data-quality problems.

## What we do not know

- Who actually logs in today and who just receives a file.
- What starts the work, what people check before they trust a figure, and where the work leaves the portal.
- Who does the work, who approves it, and who receives the result.
- Which behaviour patterns recur across organisations and roles.
- How often those patterns happen across a wider set of customers.
- Where the journey breaks down, and whether the cause is the interface or the service behind it.

## Objectives

1. **Understand** how customers do their energy-data work today, from trigger to finished outcome, including spreadsheets, email, and other tools.
2. **Identify** recurring behavioural patterns that need different design priorities or trade-offs.
3. **Understand** what people check before they trust and share a figure or a report.
4. **Identify** who does, approves, and receives the work, and where handoffs and waiting happen.
5. **Determine** where problems come from the service, process, or data rather than the interface.
6. **Gauge** how often the patterns from interviews happen across a wider group of respondents.
7. **Evaluate** whether proposed design changes address the needs we find.

## Research questions

**Primary**

How do IMSERV customers do their energy-data work today, and which differences in that work should change how Astral is designed and prioritised?

**Supporting**

- What triggers the work, and what does finished look like?
- What do people check before they rely on a figure or share a report?
- Where does work leave Astral or DataVision, and why?
- Who contributes, approves, or acts, and what information do they need?
- Where does the work slow down, and what happens when it goes wrong?
- Which patterns recur across organisations, roles, and scales?

## Method

### Approach

An **exploratory sequential mixed-methods** discovery. Qualitative research comes first. It sets the concepts and language that the survey then measures.

**Review existing evidence → interview and observe → find provisional patterns → survey those patterns → follow up on contradictions → refine archetypes and journeys → test design implications.**

The methods are connected, not just collected. Interviews build the survey. Survey results guide follow-up recruitment. Both are compared in one analysis. ([Fetters, Curry and Creswell](https://pmc.ncbi.nlm.nih.gov/articles/PMC4097839/))

### Why not start with the survey

A survey written before discovery measures our own assumptions. It may:

- miss activities customers think are important
- use words that do not match how people describe their work
- force people into categories that do not fit
- collect feature wishes instead of explaining needs

A **short screener** is still used for recruitment. That is different from the main survey.

If IMSERV already has a strong survey or usage dataset, we use it to choose who to interview. We do not collect it again.

### Evidence beyond what people say

Interviews and surveys rely on what people remember and choose to report. Calling the result behavioural does not make it observed behaviour. What people say and what they do answer different questions. ([NN/g, choosing methods](https://www.nngroup.com/articles/which-ux-research-methods/))

| Activity | What it tells us | Limit |
| --- | --- | --- |
| **Existing evidence review** | What Clive and Emily's interviews, support cases, and usage data already show | Collected for other purposes. May not cover our questions |
| **Discovery interviews** | Goals, reasoning, responsibilities, and remembered episodes | Recall and wanting to look good |
| **Work walkthroughs or observation** | Tools, checks, workarounds, and handoffs | A reconstruction is not the same as watching normal work |
| **Survey** | Reported frequency and variation among respondents | Sampling and wording shape the answers |
| **Usage and support evidence, where available** | Recorded activity and recurring service problems | Logs do not explain why. Support cases over-represent problems |
| **Design implication testing** | Whether proposed changes address the needs | Comes after discovery, not before |

### Behavioural archetypes, not decorative personas

Well-researched personas already hold behavioural information. Personas and archetypes present the same insights. The difference is whether they are given a fictional name and biography. ([NN/g, personas vs archetypes](https://www.nngroup.com/articles/personas-archetypes/))

Proposed framing for Clive:

> We will define research-backed behavioural profiles and customer journeys. The profiles do the job of personas, without fictional biographies.

We keep these dimensions separate, so a job title is not mistaken for a behaviour:

| Dimension | What it tells us | How we use it |
| --- | --- | --- |
| Organisation and customer context | Whose relationship this is, its scale and complexity | Recruitment and journey variations |
| Role and responsibility | Who does, approves, or receives the work | Accountability and handoffs |
| Behavioural archetype | Recurring strategies, motivations, and needs | Design priorities and trade-offs |
| Task and situation | What someone is trying to do now | Journey and interaction design |
| Entitlement, role, and access scope | What they can see or do | Explicit access rules, not inferred from an archetype |
| Access needs and working environment | What helps or blocks taking part and using Astral | Inclusive research and design |

**Archetypes come from recurring patterns. They are not job titles with a new label.**

## Research activities

### Activity 1. Agree scope and decisions

**Purpose.** Agree what the research must help decide, the priority journeys, and what is out of scope.

**What happens.**

- Session with Clive and the manager to agree the decisions and exclusions
- Agree two or three priority scenarios to follow in depth
- Agree how findings reach the BA team
- Review Clive and Emily Haddon's customer interview notes, DataVision walk notes, and any support or usage data
- Record what those sources already answer, so we do not ask again

**Possible starting scenarios.** To confirm, not agreed:

- Getting access and reaching usable data
- Investigating a discrepancy through to resolution
- Preparing and sharing evidence for a business decision

**Output.** Agreed research questions, priority journeys, exclusions, and an existing-evidence summary.

### Activity 2. Set up recruitment

**Purpose.** Reach the people who actually do the work, across several organisations.

**What happens.**

- Named access coordinator for customer introductions
- Short behavioural screener
- Recruitment matrix and tracker. Participant coverage and organisation coverage
- Consent, recording, storage, and AI-processing approach agreed with the privacy owner
- First sessions booked

In business services, separate the **buyer, administrator, practitioner, approver, and recipient of outputs**. A senior contact may not do the everyday work.

Account managers and internal experts help with recruitment and service context. They do not stand in for customer practitioners. ([GOV.UK, finding participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants))

**Recruitment matrix**

| Dimension | Examples |
| --- | --- |
| Activities actually performed | Investigating data, reconciling figures, reporting, managing access, resolving service issues |
| Frequency and experience | Regular, occasional, newly onboarded, experienced |
| Scale and complexity | One site or a portfolio. Simple or several organisational relationships |
| Working relationships | Direct customer work, or delegated and intermediary work such as Broker / TPI |
| Service experience | Works well, repeated difficulty, gave up, or relies on someone else |
| Tools and channels | Portal, spreadsheet, email, API, telephone, and combinations |
| Access needs | Assistive technology, magnification, digital confidence, other support needs |

We will not try to fill every combination. We prioritise contrasts likely to change a design decision, then recruit into gaps as findings emerge.

Energy, Finance, Asset, and Data hats are a starting point for screening. They are not the archetypes.

**Exclusions.** IMSERV staff standing in for customers. People who designed the flows being discussed.

**Output.** Access coordinator, screener, matrix, consent approach, and first bookings.

### Activity 3. Discovery round 1

**Purpose.** Understand real, recent episodes of work before showing any proposed screens.

**Format.** Proposed 60-minute remote sessions. Interview plus a walkthrough of a recent piece of work. 6 to 8 participants across several organisations.

**How the session runs.** We ask about the last real time, not about features:

> Tell me about the last time you needed to investigate a figure that did not look right. What triggered it, and what happened next?

Then we follow that episode through its tools, decisions, and handoffs.

| Area | Discovery questions |
| --- | --- |
| Trigger and outcome | What started the work? What had to be achieved? |
| Actual process | What did you do first? What happened after that? |
| Evidence and trust | What did you check before relying on the result? |
| Tools and workarounds | What left the portal? What happened in a spreadsheet or email? |
| Collaboration | Who contributed, approved, or acted? What information did they need? |
| Difficulty and consequences | Where did it slow down? What happened when it went wrong? |
| Completion | How did you know it was finished, not just sent to someone else? |

Where it is appropriate and authorised, participants show a redacted report, spreadsheet, email chain, or output.

**We do not show prototype screens in discovery.** A prototype steers the conversation towards its own features. ([GOV.UK, interviews](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews), [contextual research](https://www.gov.uk/service-manual/user-research/contextual-research-and-observation))

**Analysis.** Code against objectives, then open coding. Separate observation from interpretation. Look for contradictions and outliers.

**Output.** Episode-level evidence, first journey fragments, candidate behaviours, and recruitment gaps.

### Activity 4. Discovery round 2, targeted

**Purpose.** Fill the gaps round 1 found and test our early interpretations.

**Format.** As round 1. 6 to 8 participants recruited into the gaps.

**Output.** Wider coverage, tested interpretations, and provisional archetypes.

**When to keep recruiting.** When important contexts are still unexplored, new behavioural differences keep appearing, or consequential contradictions are unresolved. A rare, high-impact need is not dropped because it appeared once.

### Activity 5. Survey

**Purpose.** Gauge how often the patterns from discovery happen across a wider group of respondents.

**What happens.**

- Build questions from discovery findings, in customers' own words
- Ask about behaviour, not about which persona someone is
- Pilot with target users to check meaning, answer options, and effort
- Run, then analyse

| Ask this | Not this |
| --- | --- |
| In the past three months, how often have you compared figures from more than one source before sharing a report? | Are you an evidence-led analyst? |

**Rules.**

- A recall period that fits each activity. Monthly reporting and annual processes need different treatment
- Include "not applicable" and "don't know". Keep them apart from missing answers
- Wording, options, and order change results. ([Pew, questionnaire design](https://www.pewresearch.org/writing-survey-questions/))
- Set the response target only after we know the reachable population, sampling approach, and comparisons needed
- Results describe **respondents** unless the sampling supports wider claims. ([Pew, nonprobability surveys](https://www.pewresearch.org/methods/2018/08/06/video-explainer-what-are-nonprobability-surveys/))
- Report people and customer organisations separately
- More responses do not remove recruitment bias

**Output.** Reported patterns across respondents, with sampling limits stated.

### Activity 6. Integrate and follow up

**Purpose.** Bring the evidence together, investigate disagreement, and refine archetypes and journeys.

Triangulation does not mean three sources agreed, so it is true. Sources can share a bias. Interviewing and surveying the same customer champions adds detail, not independent coverage.

**Joint evidence table**

| Research question | Interview | Walkthrough or artefact | Survey | Interpretation and next action |
| --- | --- | --- | --- | --- |
| What makes a report trustworthy enough to share? | How people explain their checks and concerns | The actual checking steps and supporting material | Reported frequency across contexts | Supported needs, exceptions, and what is still uncertain |
| Where does issue resolution break down? | Accounts of ownership and waiting | Handoffs and correspondence | Reported occurrence and consequences | Separate interface problems from service-process problems |

Each relationship is marked **supporting, complementary, conflicting, or insufficient**. Disagreement is investigated, not smoothed away.

For example, someone may say they use the portal for reporting. A walkthrough may show the final report is built elsewhere. That is not dishonest. Reporting may mean getting the starting data.

Short follow-up sessions are used where contradictions matter.

**Output.** Refined archetypes, journeys, a service blueprint where needed, contradictions, and priorities.

### Activity 7. Test design implications

**Purpose.** Check whether proposed changes address the needs we found.

**What happens.**

- Turn priority problems into design hypotheses
- Test with customers who match the relevant archetypes
- Record task success, effort, and confidence where they serve an objective

**Output.** Evidence about which changes work, which do not, and what to try next.

## What the research produces

### Behavioural archetypes

Each archetype describes:

- recurring goals and situations
- working strategies and information needs
- constraints, handoffs, and difficulties
- design implications
- supporting evidence and known exceptions

We do not decide the number in advance. We keep a separate archetype only when its differences lead to different priorities or trade-offs.

Some things may be **working modes, not archetypes**. Investigating, reporting, and administering may be activities the same people do.

The test for every archetype:

> Would this profile change how we design, prioritise, or evaluate a real task?

If not, it is a nice summary, not a design tool.

### Customer journeys

- Start with the **current experience**, including work outside Astral. Do not map proposed screens and call it a discovered journey.
- Agree a high-level map of the wider IMSERV relationship, then go deep on two or three priority scenarios.
- Each detailed journey captures actor, trigger, intended outcome, stages, actions, information needs, channels, handoffs, waiting, exceptions, and evidence of completion.
- Keep one primary viewpoint. Use linked journeys where another person's experience is materially different. ([GOV.UK, experience maps](https://www.gov.uk/service-manual/user-research/creating-an-experience-map))
- For cross-department issues, add a **service blueprint** of the internal processes behind the journey. ([NN/g, service blueprints](https://www.nngroup.com/articles/service-blueprints-definition/))
- **Current state and future proposals stay visibly separate.**

### Prioritised UX decisions

Each decision follows one chain, so it stays traceable into BA work. ([GOV.UK, user needs and stories](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs))

**Evidence → user need → journey problem → design hypothesis → story and acceptance criteria → evaluation.**

Observation, interpretation, and recommendation stay separate, with links back to the evidence.

## Provisional timeline

**These are estimates to agree, not commitments.** They depend most on how quickly recruitment and privacy approval happen. Stages overlap where they can.

| Stage | Provisional duration | Depends on | Output |
| --- | --- | --- | --- |
| 1. Agree scope and decisions | 1 to 2 weeks | Time with Clive and the manager. Access to existing interview notes | Research questions, priority journeys, exclusions, evidence summary |
| 2. Set up recruitment | 2 to 3 weeks, alongside stage 1 | Access coordinator. Privacy owner sign-off | Screener, matrix, consent approach, first bookings |
| 3. Discovery round 1 | 2 to 3 weeks, including analysis | Bookings | Episode evidence, journey fragments, gaps |
| 4. Discovery round 2 | 2 to 3 weeks, including analysis | Gap recruitment | Wider coverage, provisional archetypes |
| 5. Survey pilot and run | 3 to 4 weeks | Distribution route. Reachable population known | Reported patterns, with sampling limits |
| 6. Integrate and follow up | About 2 weeks | Survey results. Follow-up participants | Refined archetypes, journeys, blueprint, priorities |
| 7. Test design implications | 2 to 3 weeks | Priority hypotheses. Prototype ready | Evidence on proposed changes |

With overlap, roughly **12 to 18 weeks** from agreement to tested implications. Early findings reach the BA team from round 1, not only at the end.

## Working alongside the BA team

This is a small discovery track that feeds the BA work while it builds the wider picture. It does not have to finish before anything else can be specified.

- Round 1 findings are shared with the BA team as they emerge, marked provisional
- Stories link back to the need and evidence behind them
- The BA team (Claire and others) can bring open story questions into round 2

## Consent, privacy, and data

- Informed consent for every participant before the session
- Recording, transcription, storage, retention, and any AI processing agreed with IMSERV's privacy and data-protection owner before the first session ([GOV.UK, research data](https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy))
- Approved storage with restricted access. Raw recordings and transcripts stay restricted
- Customer documents shown in walkthroughs are redacted or not kept, as agreed
- Participants are P01, P02 in analysis. Removing names alone may not anonymise a distinctive business account
- Quotes in shared outputs only with consent for anonymised quotation
- No consent wording is sent until it is approved. The current wording is a neutral draft

## How AI is used

Copilot can help organise approved material, suggest candidate patterns, and keep evidence links up to date. Only within what the privacy owner approves.

It will **not** invent quotes, build archetypes from job titles, or treat simulated customers as evidence.

## Risks and limits

| Risk | Effect | Mitigation |
| --- | --- | --- |
| Introductions only reach senior contacts | We hear about the work, not from the people doing it | Ask for practitioners by the activity they do. Track who does what in the screener |
| Participants come from one or two organisations | Shared local process looks like a pattern | Track organisation coverage. Recruit across several |
| Recruitment or privacy approval is slow | The timeline moves | Start both in stage 1. Share early findings from round 1 |
| Existing interview notes are not available | We repeat work, or miss context | Ask Clive early. Record what they cover |
| The survey reaches only engaged customers | Patterns look more common than they are | Report respondents, not customers. Name the sampling limits |
| Prototype screens steer discovery | We confirm our own design | No screens until stage 7 |
| Archetypes are expected before evidence exists | A persona deck without support | Agree upfront that archetypes emerge from rounds 1 and 2 |
| Twelve interviews are treated as enough | A multi-role audience is under-covered | Plan rounds, not a total. Keep recruiting while important gaps remain |

On sample size. GOV.UK suggests about 4 to 8 participants per qualitative round, with more rounds as needed. ([GOV.UK, planning research](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service)) A systematic review found saturation often within 9 to 17 interviews, in fairly similar groups with narrow aims. ([Hennink and Kaiser, 2022](https://doi.org/10.1016/j.socscimed.2021.114523)) That does **not** show 12 to 16 interviews are enough for IMSERV's varied, multi-role audience. Two rounds of 6 to 8 is a starting proposal, not a promise of coverage.

## Objective-to-evidence matrix

| Objective | Research question | Activity | Evidence | Measure |
| --- | --- | --- | --- | --- |
| 1. Understand today's work end to end | What triggers the work, and what does finished look like? | Discovery interviews, walkthroughs | Episode accounts, artefacts | Journey stages covered per scenario |
| 2. Identify recurring behaviour patterns | Which patterns recur across organisations, roles, and scales? | Rounds 1 and 2, integration | Coded episodes across participants and organisations | Patterns observed in n of N participants and organisations |
| 3. Understand trust before sharing | What do people check before relying on a figure? | Interviews, walkthroughs, survey | Described and shown checks. Reported frequency | Reported frequency among respondents |
| 4. Identify handoffs and waiting | Who contributes, approves, or acts? | Interviews, walkthroughs | Handoffs, correspondence | Handoffs per journey. Waiting points |
| 5. Separate interface from service problems | Where does it slow down, and why? | Walkthroughs, support evidence, blueprint | Breakdowns traced to cause | Problems classed interface, process, or data |
| 6. Gauge how common patterns are | How often do these patterns happen? | Survey | Responses | Share of respondents, by people and by organisation |
| 7. Evaluate design changes | Do proposed changes meet the need? | Design implication testing | Observed tasks | Task success, effort, confidence |

## Sources

- NN/g. [Personas vs archetypes](https://www.nngroup.com/articles/personas-archetypes/)
- NN/g. [Which UX research methods](https://www.nngroup.com/articles/which-ux-research-methods/)
- NN/g. [Service blueprints](https://www.nngroup.com/articles/service-blueprints-definition/)
- Fetters, Curry and Creswell. [Achieving integration in mixed methods designs](https://pmc.ncbi.nlm.nih.gov/articles/PMC4097839/)
- Hennink and Kaiser, 2022. [Sample sizes for saturation in qualitative research](https://doi.org/10.1016/j.socscimed.2021.114523)
- GOV.UK Service Manual. [Find participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants), [plan research](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service), [in-depth interviews](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews), [contextual research](https://www.gov.uk/service-manual/user-research/contextual-research-and-observation), [experience maps](https://www.gov.uk/service-manual/user-research/creating-an-experience-map), [user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs), [research data and privacy](https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy)
- Pew Research Center. [Writing survey questions](https://www.pewresearch.org/writing-survey-questions/), [nonprobability surveys](https://www.pewresearch.org/methods/2018/08/06/video-explainer-what-are-nonprobability-surveys/)

Internal: `docs/research/reports/2026-09-12-imserv-customer-base.md`, `docs/research/reports/2026-09-22-astral-product-model.md`, Work Desk notes from 4 Sep 2026.
