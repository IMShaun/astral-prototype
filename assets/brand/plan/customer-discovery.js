// Content for the customer discovery documents: the proposal, the interview plan and script, and the survey plan and script.
// Source: docs/research/studies/2026-10-13-customer-discovery-plan.md.
// Plan facts come only from that file. Script wording, timings, and survey questions are drafts built from its
// objectives, questions, and rules, for review. Placeholders in [brackets] are filled before the pilot or after approval.
// Strings are HTML. Rendered by document.html, printed by build.js.
window.PLAN = {
  study: "STUDY-2026-10-13-customer-discovery",
  title: "Astral customer discovery",
  date: "October 2026",
  owner: "Shaun Leishman",
  team: "UX, IMSERV",
  status: "Draft for review",
  folio: "Internal · Draft for review · STUDY-2026-10-13-customer-discovery",
  primary:
    "How do IMSERV customers do their energy-data work today, and which differences in that work should change how Astral is designed and prioritised?",

  documents: [
    {
      id: "proposal",
      n: 1,
      title: "Research proposal",
      cover: "Research<br>proposal",
      file: "01-proposal.pdf",
      summary: "Why the work is needed, what we want to achieve, and what we propose to do about it.",
    },
    {
      id: "interview",
      n: 2,
      title: "Interview plan and script",
      cover: "Interview<br>plan and<br>script",
      file: "02-interview-plan-and-script.pdf",
      summary: "How the discovery interviews run, who takes part, and the script, with every question tied to an objective.",
    },
    {
      id: "survey",
      n: 3,
      title: "Survey plan and script",
      cover: "Survey<br>plan and<br>script",
      file: "03-survey-plan-and-script.pdf",
      summary: "How the survey is built, piloted, and analysed, and the draft questions with their routing, each tied to an objective.",
    },
  ],

  outputs: [
    { label: "BEHAVIOURAL ARCHETYPES", text: "How people actually work, what they need, and what changes the design." },
    { label: "CUSTOMER JOURNEYS", text: "Evidence-backed. What happens today, including work outside Astral." },
    { label: "PRIORITISED UX DECISIONS", text: "Each one traceable to evidence, and ready for the BA team to turn into stories." },
  ],

  objectives: [
    { n: 1, verb: "Understand", text: "how customers do their energy-data work today, from trigger to finished outcome, including spreadsheets, email, and other tools.", question: "What triggers the work, and what does finished look like?", activity: "Discovery interviews, walkthroughs", evidence: "Episode accounts, artefacts", measure: "Journey stages covered per scenario" },
    { n: 2, verb: "Identify", text: "recurring behavioural patterns that need different design priorities or trade-offs.", question: "Which patterns recur across organisations, roles, and scales?", activity: "Interviews, analysis", evidence: "Coded episodes across participants and organisations", measure: "Patterns observed in n of N participants and organisations" },
    { n: 3, verb: "Understand", text: "what people check before they trust and share a figure or a report.", question: "What do people check before relying on a figure?", activity: "Interviews, walkthroughs, survey", evidence: "Described and shown checks. Reported frequency", measure: "Reported frequency among respondents" },
    { n: 4, verb: "Identify", text: "who does, approves, and receives the work, and where handoffs and waiting happen.", question: "Who contributes, approves, or acts?", activity: "Interviews, walkthroughs", evidence: "Handoffs, correspondence", measure: "Handoffs per journey. Waiting points" },
    { n: 5, verb: "Determine", text: "where problems come from the service, process, or data rather than the interface.", question: "Where does it slow down, and why?", activity: "Walkthroughs, support evidence, blueprint", evidence: "Breakdowns traced to cause", measure: "Problems classed interface, process, or data" },
    { n: 6, verb: "Gauge", text: "how often the activities, checks, and problems we ask about happen across a wider group of respondents.", question: "How often do these happen?", activity: "Survey", evidence: "Responses", measure: "Share of respondents, by people and by organisation" },
  ],

  supporting: [
    "What triggers the work, and what does finished look like?",
    "What do people check before they rely on a figure or share a report?",
    "Where does work leave Astral or DataVision, and why?",
    "Who contributes, approves, or acts, and what information do they need?",
    "Where does the work slow down, and what happens when it goes wrong?",
    "Which patterns recur across organisations, roles, and scales?",
  ],

  asks: [
    "<b>Review this plan</b> and agree or change the scope, the decisions it supports, and the provisional timeline.",
    "<b>Agree the first research decisions with Clive.</b> Which journeys matter most and what is out of scope.",
    "<b>Name an access coordinator.</b> Someone who can introduce us to customers and book sessions.",
    "<b>Access to the people who do the work.</b> Not only senior account contacts.",
    "<b>Access to Clive and Emily Haddon's existing customer interview notes.</b> So we build on them, not repeat them.",
    "<b>A privacy and data-protection owner.</b> To agree recording, transcription, storage, and any AI processing before the first session.",
    "<b>An approved survey tool.</b> SurveyMonkey or Microsoft Forms, cleared for customer answers.",
  ],

  decisions: [
    "Which customer tasks and journeys Astral should prioritise for version one and after.",
    "Which behavioural differences need different designs, defaults, or trade-offs.",
    "Where problems sit in the service and process, not the interface. So we do not try to fix ownership or data quality with screen copy.",
    "What the BA team should specify next, with evidence behind each story.",
  ],

  known: [
    { text: "Clive and Emily Haddon did a dozen or more customer interviews. The notes sit with Clive", source: "Work Desk notes, 4 Sep 2026", limit: "We have not seen the notes. We do not know who was interviewed or what was asked" },
    { text: "British Gas and Scottish Water asked to take part in the beta", source: "Work Desk notes, 4 Sep 2026", limit: "A route to customers. Not a sample" },
    { text: "Customers want to see their own estate, know meters are working, get invoices and reports, and follow problems. Export is more common than looking at graphs", source: "Max Lake, DataVision walk, 4 Sep 2026", limit: "Internal account of customer behaviour. Not observed with customers" },
    { text: "People pick sites and meters, compare them, then export a file. They do not browse the whole portfolio", source: "Max Lake, 4 Sep 2026", limit: "As above" },
    { text: "Company types are Customer, Broker / TPI, Supplier, and Platform admin. A Customer has Energy, Finance, Asset, and Data working hats", source: "IMSERV customer base, desk research, 12 Sep 2026", limit: "Public-page desk research. Not a study" },
    { text: "Access has three separate parts: what the company bought, the person's role, and which sites and documents they can see", source: "Astral product model, 22 Sep 2026", limit: "From the handoff transcript. The role matrix is still open" },
    { text: "Large customers narrow from the whole portfolio, to a region, to sites, to one MPAN. One customer has about 8,000 MPANs", source: "As above", limit: "Named in a talk. Not observed" },
  ],

  assumed: [
    "The Energy, Finance, Asset, and Data hats describe how people work. They are a useful recruitment start. They may not be four archetypes.",
    "Customers mostly use Astral for reporting. Reporting may mean pulling data that is finished somewhere else.",
    "The people a senior contact introduces us to are the people who do the day-to-day work.",
    "Problems people raise about the portal are interface problems. Some may be service, process, or data-quality problems.",
  ],

  unknown: [
    "Who actually logs in today and who just receives a file.",
    "What starts the work, what people check before they trust a figure, and where the work leaves the portal.",
    "Who does the work, who approves it, and who receives the result.",
    "Which behaviour patterns recur across organisations and roles.",
    "How often those patterns happen across a wider set of customers.",
    "Where the journey breaks down, and whether the cause is the interface or the service behind it.",
  ],

  risks: {
    senior: { risk: "Introductions only reach senior contacts", effect: "We hear about the work, not from the people doing it", fix: "Ask for practitioners by the activity they do. Track who does what in the screener" },
    orgs: { risk: "Participants come from one or two organisations", effect: "Shared local process looks like a pattern", fix: "Track organisation coverage. Recruit across several" },
    slow: { risk: "Recruitment or privacy approval is slow", effect: "The timeline moves", fix: "Agree both before week 1. Hold one or two reserve participants" },
    tight: { risk: "Four weeks leaves no slack", effect: "One late approval or several no-shows moves the whole plan", fix: "Start only when everything in Before week 1 is done. Keep day 5 of week 2 for catch-ups. Agree with the manager what can slip first" },
    rushed: { risk: "Analysis and reporting get a week each", effect: "Archetypes and journeys are less tested than they would be with more time", fix: "Present archetypes and journeys as provisional. Name what needs more evidence" },
    response: { risk: "The survey is open for only 8 working days", effect: "Fewer responses, mostly from engaged customers", fix: "Send it from a sender customers know. Send one reminder. Report respondents, not customers" },
    early: { risk: "The survey runs before the interviews can shape it", effect: "It measures our assumptions, or uses words customers do not", fix: "Build answer options from scoping and existing notes. Pilot with target users. Keep a “Something else” answer and read it" },
    fatigue: { risk: "Four interviews a day, three days running, tires the researchers", effect: "Later sessions get thinner probing and notes", fix: "One moderator and one notetaker. Gaps between sessions. Write up notes the same day" },
    notes: { risk: "Existing interview notes are not available", effect: "We repeat work, or miss context", fix: "Ask Clive early. Record what they cover" },
    survey: { risk: "The survey reaches only engaged customers", effect: "Patterns look more common than they are", fix: "Report respondents, not customers. Name the sampling limits" },
    screens: { risk: "Prototype screens steer discovery", effect: "We confirm our own design", fix: "No screens in this study. Test design changes in a follow-on study" },
    archetypes: { risk: "Archetypes are expected before evidence exists", effect: "A persona deck without support", fix: "Agree upfront that archetypes emerge from the interviews and survey" },
    twelve: { risk: "Twelve interviews leave gaps in a multi-role audience", effect: "Three per group shows differences between groups, not everything about each group", fix: "Recruit across several organisations. Name the gaps in the report, and propose extra sessions where they matter" },
  },

  consent: [
    "Informed consent for every participant before the session",
    "Recording, transcription, storage, retention, and any AI processing agreed with IMSERV's privacy and data-protection owner before the first session",
    "Approved storage with restricted access. Raw recordings and transcripts stay restricted",
    "Customer documents shown in walkthroughs are redacted or not kept, as agreed",
    "Participants are P01, P02 in analysis. Removing names alone may not anonymise a distinctive business account",
    "Quotes in shared outputs only with consent for anonymised quotation",
    "No consent wording is sent until it is approved. The current wording is a neutral draft",
  ],

  ai: {
    can: "Copilot can help organise approved material, suggest candidate patterns, and keep evidence links up to date. Only within what the privacy owner approves.",
    not: "It will <b>not</b> invent quotes, build archetypes from job titles, or treat simulated customers as evidence.",
  },

  ba: [
    "Early themes from the interview days are shared with the BA team, marked provisional",
    "Stories link back to the need and evidence behind them",
    "The BA team (Claire and others) can add open story questions to the script before the interview days",
  ],

  // Week positions are in working days: 0.2 is one day. Stages 2 to 5 run side by side in week 1, and stages 6 and 7 in week 2.
  timelineNote:
    "A tight plan to agree, not a commitment. Four weeks from the start of week 1 to presenting the findings. It only works if the approvals and introductions are in place before week 1.",
  overall: { weeks: "4 weeks", text: "From the start of week 1 to presenting the findings, once the approvals and introductions are in place." },
  followOn: "Testing proposed design changes with customers is a possible follow-on study. It is not part of this proposal.",
  before: [
    "The plan is approved by the manager and Clive",
    "An access coordinator is named, and introductions to all four user groups are asked for",
    "The privacy owner has signed off consent, recording, transcription, storage, and the survey tool",
    "Clive and Emily's interview notes are shared",
    "Researcher and notetaker diaries are clear for week 2",
  ],

  phases: [
    { title: "Week 1:<br>prepare", lede: "Agree the scope, then recruit and get ready for the interviews and the survey side by side.", stages: [1, 2, 3, 4, 5] },
    { title: "Weeks 2 to 4:<br>run, then report", lede: "Interviews in week 2 with the survey open alongside. Analysis in week 3. The report and presentation in week 4.", stages: [6, 7, 8, 9, 10] },
  ],

  stages: [
    { n: 1, title: "Agree scope and decisions", short: "Scope and decisions", duration: "Days 1 and 2 of week 1", weeks: [0, 0.4], depends: "Time with Clive and the manager. Existing interview notes shared before week 1", purpose: "Confirm what the research must help decide, the priority journeys, the four user groups, and what is out of scope.", output: "Research questions, priority journeys, user groups, exclusions, and an existing-evidence summary", doc: "proposal" },
    { n: 2, title: "Recruit for the interviews", short: "Interview recruitment", duration: "Week 1", weeks: [0, 1], depends: "Access coordinator named, and introductions asked for before week 1", purpose: "Screen and book 12 people who do the work, 3 from each of four user groups, into the interview days in week 2.", output: "Screener, tracker, 12 bookings, and one or two reserves", doc: "interview" },
    { n: 3, title: "Prepare the interviews", short: "Interview prep", duration: "Days 2 to 5 of week 1, alongside recruitment", weeks: [0.2, 1], depends: "Privacy sign-off for recording and transcription before week 1", purpose: "Finish the interview script, set up and test recording and transcription, and brief the notetaker.", output: "Final script, approved consent, tested recording, briefed notetaker", doc: "interview" },
    { n: 4, title: "Prepare the survey", short: "Survey prep", duration: "Days 2 to 4 of week 1", weeks: [0.2, 0.8], depends: "An approved survey tool. Privacy sign-off before week 1", purpose: "Build the survey and its routing in SurveyMonkey or Microsoft Forms, pilot it with 2 or 3 target users, and write the invitation and reminder emails.", output: "Piloted survey, invitation email, and reminder email", doc: "survey" },
    { n: 5, title: "Recruit for the survey", short: "Survey recruitment", duration: "Days 3 to 5 of week 1", weeks: [0.4, 1], depends: "Distribution route. Reachable population known", purpose: "Agree who receives the survey and who sends it, and get the distribution list ready.", output: "Distribution list, sender, and response target", doc: "survey" },
    { n: 6, title: "Run the interviews", short: "Interviews", duration: "3 interview days in week 2, 4 a day. Day 5 for catch-ups", weeks: [1, 2], depends: "Bookings. Tested recording", purpose: "One round of 12 interviews. Notes are written up the same day. The last day of the week is kept for no-shows and reserves.", output: "Recordings, transcripts, and session notes", doc: "interview" },
    { n: 7, title: "Run the survey", short: "Survey", duration: "Open for 8 working days, from the start of week 2", weeks: [1, 2.6], depends: "Piloted survey. Distribution list", purpose: "Send the invitation, then leave the survey open. One reminder, and a light check on responses.", output: "Survey responses", doc: "survey" },
    { n: 8, title: "Analyse the data", short: "Analysis", duration: "Week 3", weeks: [2, 3], depends: "Transcripts. The survey closed by the middle of week 3", purpose: "Code the interviews against the objectives, analyse the survey responses when it closes, and compare the two.", output: "Coded evidence, patterns, and contradictions", doc: "proposal" },
    { n: 9, title: "Write the report and UX deliverables", short: "Report", duration: "Days 1 to 4 of week 4", weeks: [3, 3.8], depends: "Analysis", purpose: "Write up the findings, with provisional behavioural archetypes, customer journey maps, and prioritised UX decisions.", output: "Report, archetypes, journey maps, and prioritised UX decisions", doc: "proposal" },
    { n: 10, title: "Present the findings", short: "Presentation", duration: "1 session, on the last day of week 4", weeks: [3.8, 4], depends: "Report. Time with the wider team booked before week 1", purpose: "Present the findings and UX deliverables to the wider team, including the BA team.", output: "Shared findings and agreed next steps", doc: "proposal" },
  ],

  groups: [
    ["Energy managers", "Understand use, spikes, and which sites waste energy", "3"],
    ["Finance users", "Find where spend is highest, why, and where to cut", "3"],
    ["Brokers / TPIs", "Act for one or more customers, with reports, invoices, and energy data", "3"],
    ["Data and asset users", "Get reliable data into another process, or check meter faults are repaired", "3"],
  ],

  // Proposed recruitment criteria, to agree at scoping. Recent activity, not job title, decides the group.
  recruitment: {
    groups: [
      {
        name: "Energy managers",
        who: "Energy, sustainability, or facilities managers responsible for one site or a portfolio.",
        include: [
          "Looked at energy use for their sites",
          "Investigated a spike, unusual reading, or missing data",
          "Compared sites, or reported progress against a target",
        ],
        mix: "One site and multi-site portfolios. Regular and occasional users. More than one sector.",
      },
      {
        name: "Finance users",
        who: "Finance managers, analysts, or accounts staff who handle energy costs and invoices.",
        include: [
          "Checked, queried, or approved an energy invoice",
          "Reported energy spend to someone else",
          "Looked for where costs could be cut",
        ],
        mix: "People who prepare figures and people who approve them. Portal users and people sent files by others.",
      },
      {
        name: "Brokers / TPIs",
        who: "Brokers, consultants, and third-party intermediaries who act for one or more customers.",
        include: [
          "Prepared a report or checked an invoice for a client",
          "Pulled energy data for a client",
          "Managed access for a client, or acted on their behalf",
        ],
        mix: "Small and large client books. Independent and larger firms. More than one type of client.",
      },
      {
        name: "Data and asset users",
        who: "Analysts, metering or asset staff, and people who feed IMSERV data into other systems.",
        include: [
          "Exported or received data for another process, by file or API",
          "Raised or followed up a meter fault",
          "Checked data was complete before using it",
        ],
        mix: "File and API users. Data roles and asset or maintenance roles.",
      },
    ],
    everyone: [
      "Works for an IMSERV customer, or acts for one",
      "Has done at least one of their group's activities in the past three months",
      "Uses IMSERV data or outputs, directly or through someone else",
      "Can join a 60-minute remote session in week 2, and agrees to recording",
    ],
    exclude: [
      "IMSERV staff standing in for customers",
      "People who designed the flows being discussed",
      "Senior contacts who do not do the work themselves, unless they approve it",
      "More than one person per group from the same organisation, where we can avoid it",
    ],
    placing: [
      "Someone who fits two groups goes in the group for the activity they do most",
      "People who rely on someone else for IMSERV data still qualify. How they get it is part of what we learn",
      "Reserves are screened the same way, one or two across the groups",
    ],
    screener: [
      ["Which organisation do you work for? Do you work for it directly, or act for it?", "Customer or intermediary. Organisation coverage"],
      ["In the past three months, which of these have you done with IMSERV data?", "Group, and that they do the work"],
      ["How often do you do the activity you do most?", "Regular or occasional use"],
      ["How do you usually get IMSERV data?", "Portal, files from others, API, or a mix"],
      ["About how many sites, or clients, does your work cover?", "Scale and complexity"],
      ["Is there anything that would help you take part?", "Access needs and support"],
      ["Which of these times in week 2 suit you?", "Booking"],
    ],
    survey: "Everyone in the reachable population who uses IMSERV data or outputs, across all four groups. No quotas. A1 and A2 sort respondents by what they do, and results are reported by group.",
  },

  scenarios: [
    "Getting access and reaching usable data",
    "Investigating a discrepancy through to resolution",
    "Preparing and sharing evidence for a business decision",
  ],

  matrix: [
    ["Activities actually performed", "Investigating data, reconciling figures, reporting, managing access, resolving service issues"],
    ["Frequency and experience", "Regular, occasional, newly onboarded, experienced"],
    ["Scale and complexity", "One site or a portfolio. Simple or several organisational relationships"],
    ["Working relationships", "Direct customer work, or delegated and intermediary work such as Broker / TPI"],
    ["Service experience", "Works well, repeated difficulty, gave up, or relies on someone else"],
    ["Tools and channels", "Portal, spreadsheet, email, API, telephone, and combinations"],
    ["Access needs", "Assistive technology, magnification, digital confidence, other support needs"],
  ],

  joint: [
    ["What makes a report trustworthy enough to share?", "How people explain their checks and concerns", "The actual checking steps and supporting material", "Reported frequency across contexts", "Supported needs, exceptions, and what is still uncertain"],
    ["Where does issue resolution break down?", "Accounts of ownership and waiting", "Handoffs and correspondence", "Reported occurrence and consequences", "Separate interface problems from service-process problems"],
  ],

  chain: ["Evidence", "User need", "Journey problem", "Design hypothesis", "Story and acceptance criteria", "Evaluation"],

  interview: {
    objectives: [1, 2, 3, 4, 5],
    format: "Proposed 60-minute remote sessions. Interview plus a walkthrough of a recent piece of work.",
    rounds: [
      { name: "One round", who: "12 participants, 3 from each of four user groups, across several organisations", aim: "Understand real, recent episodes of work before showing any proposed screens.", output: "Episode-level evidence, journey fragments, candidate behaviours, and any gaps to name in the report.", duration: "3 interview days in week 2, 4 sessions a day" },
    ],
    prep: [
      "Finish the plan and script. Agree it with Clive and the manager",
      "Consent wording approved by the privacy owner",
      "Recording and transcription set up in the approved tool, and tested end to end",
      "A restricted storage folder for recordings, transcripts, and notes",
      "Invites sent with the joining link, what to expect, and the consent information",
      "Notetaker briefed, with a note template for each session",
      "One practice session with a colleague to check timings",
    ],
    day: [
      ["09:30 to 10:30", "Session 1"],
      ["10:30 to 11:00", "Write up notes"],
      ["11:00 to 12:00", "Session 2"],
      ["12:00 to 13:30", "Lunch. Write up notes"],
      ["13:30 to 14:30", "Session 3"],
      ["14:30 to 15:00", "Write up notes"],
      ["15:00 to 16:00", "Session 4"],
      ["After the last session", "Write up notes. Note early themes for the BA team"],
    ],
    parts: [
      {
        id: "A",
        title: "Welcome and consent",
        min: 5,
        aim: "Put the participant at ease and confirm consent before anything is recorded.",
        say: [
          "Thank you for making the time. I'm [name], from the UX team at IMSERV. [Name] is here to take notes.",
          "We're learning how you do your energy-data work today, so we can design Astral around how people really work.",
          "There are no right or wrong answers. We're not testing you, and we won't show you any new designs today.",
          "[Approved consent wording: recording, storage, who sees it, anonymised quotes, and stopping at any time.]",
          "Are you happy to go ahead? Is there anything you'd like to ask before we start?",
        ],
        notes: [
          "Confirm consent to record and, separately, consent to anonymised quotation.",
          "Start recording only after consent is confirmed.",
        ],
        questions: [],
      },
      {
        id: "B",
        title: "Your work",
        min: 5,
        aim: "Understand the person's role and how they reach IMSERV data, so the episode that follows makes sense.",
        questions: [
          { id: "I1", q: "Tell me about your role. What are you responsible for?", probes: ["Who do you work with most?"], obj: [4] },
          { id: "I2", q: "What do you use IMSERV data for?", probes: ["What else?", "How often does that come up?"], obj: [1] },
          { id: "I3", q: "How do you get to that data today?", probes: ["Do you log in yourself, or does someone send it to you?"], obj: [1] },
        ],
      },
      {
        id: "C",
        title: "The last real time",
        min: 20,
        aim: "Follow one real, recent episode from what started it to how it finished. Ask about the last real time, not about features.",
        opener: "Tell me about the last time you needed to investigate a figure that did not look right. What triggered it, and what happened next?",
        alternates: [
          "Tell me about the last time you needed to get access to IMSERV data and reach something you could use.",
          "Tell me about the last time you prepared and shared evidence for a business decision.",
        ],
        notes: ["Use the opener for the priority scenario agreed in stage 1. The starting scenarios are to confirm, not agreed."],
        questions: [
          { id: "I4", area: "Trigger and outcome", q: "What started the work? What had to be achieved?", probes: ["Who asked for it?", "By when?"], obj: [1] },
          { id: "I5", area: "Actual process", q: "What did you do first? What happened after that?", probes: ["And then?", "Why that way?"], obj: [1] },
          { id: "I6", area: "Evidence and trust", q: "What did you check before relying on the result?", probes: ["How did you know it was right?", "What would have made you doubt it?"], obj: [3] },
          { id: "I7", area: "Tools and workarounds", q: "What left the portal? What happened in a spreadsheet or email?", probes: ["Why there?"], obj: [1, 5] },
          { id: "I8", area: "Collaboration", q: "Who contributed, approved, or acted? What information did they need?", probes: ["Did you wait for anyone?", "How long?"], obj: [4] },
          { id: "I9", area: "Difficulty and consequences", q: "Where did it slow down? What happened when it went wrong?", probes: ["What caused that?", "Who could fix it?"], obj: [5] },
          { id: "I10", area: "Completion", q: "How did you know it was finished, not just sent to someone else?", probes: [], obj: [1] },
        ],
      },
      {
        id: "D",
        title: "Walk us through it",
        min: 20,
        aim: "See the tools, checks, workarounds, and handoffs, not just hear about them.",
        say: [
          "If it's appropriate and you're allowed to, could you show me the report, spreadsheet, email, or output from that piece of work? Please hide anything you can't share.",
        ],
        notes: [
          "If nothing can be shown, ask them to describe it step by step. Do not push.",
          "Customer documents are redacted or not kept, as agreed.",
        ],
        observe: [
          "Tools and windows opened",
          "Checks made, and in what order",
          "Copying, re-keying, or reformatting",
          "Handoffs and waiting",
          "Where things went wrong, and what the person did",
        ],
        questions: [
          { id: "I11", q: "Talk me through how you got to this.", probes: [], obj: [1] },
          { id: "I12", q: "Show me what you checked before you shared it.", probes: [], obj: [3] },
          { id: "I13", q: "Which parts came from the portal, and which did you add or change somewhere else?", probes: [], obj: [1, 5] },
          { id: "I14", q: "Who did this go to next, and what did they do with it?", probes: [], obj: [4] },
        ],
      },
      {
        id: "E",
        title: "Wrap up",
        min: 5,
        aim: "Place the episode against the person's usual work, and close.",
        questions: [
          { id: "I15", q: "Is that a typical piece of work for you? How often does something like it happen?", probes: ["What is different when it goes well?"], obj: [2] },
          { id: "I16", q: "Is there anything about this work we should have asked, but didn't?", probes: [], obj: [] },
        ],
        say: [
          "Thank you, that's really helpful. We'll put what you've told us together with other conversations. Nothing is shared with your name on it.",
          "If a question comes up later, would you be happy for us to get in touch for a short follow-up?",
        ],
      },
    ],
    dos: [
      "Ask about the last real time, not about features.",
      "Follow that episode through its tools, decisions, and handoffs.",
      "Ask what happened, then why.",
      "Use neutral probes: “Tell me more”, “What happened next?”",
      "Note observation and interpretation separately.",
    ],
    donts: [
      "Show prototype screens. A prototype steers the conversation towards its own features.",
      "Ask which hat or persona someone is, or what features they would like.",
      "Suggest answers or finish people's sentences.",
      "Explain or defend how the portal should work.",
      "Keep unredacted customer documents.",
    ],
    analysis: [
      "Code against objectives, then open coding.",
      "Separate observation from interpretation.",
      "Look for contradictions and outliers.",
      "Participants are P01, P02 in analysis.",
    ],
    keepGoing: [
      ["CONTEXTS", "Important contexts are still unexplored."],
      ["DIFFERENCES", "New behavioural differences keep appearing."],
      ["CONTRADICTIONS", "Consequential contradictions are unresolved."],
    ],
  },

  survey: {
    objectives: [3, 6],
    duration: "Built in week 1, then open for 8 working days from the start of week 2",
    depends: "Agreed scope. An approved survey tool. Distribution route. Reachable population known",
    steps: [
      { h: "Build from what we know", p: "Answer options come from scoping, Clive and Emily's interview notes, and desk research, in customers' words." },
      { h: "Ask about behaviour", p: "Ask about behaviour, not about which persona someone is." },
      { h: "Pilot, then send", p: "Pilot with target users to check meaning, answer options, routing, and effort." },
      { h: "Analyse with the interviews", p: "The survey shows how often. The interviews show why. Results describe respondents." },
    ],
    prepare: [
      "Build the questions and routing in SurveyMonkey or Microsoft Forms",
      "Test every route in the routes table",
      "Pilot with 2 or 3 target users on day 4. Set the time on the introduction screen",
      "Write the invitation email and one reminder",
      "Privacy owner signs off the tool, the consent wording, and where answers are stored",
    ],
    recruit: [
      "Agree who receives it: the reachable population",
      "Agree who sends it, such as the access coordinator or account managers",
      "Get the distribution list ready",
      "Set the response target",
    ],
    run: [
      "Send the invitation on the first day of week 2",
      "Leave it open. It needs no moderating",
      "Check responses every couple of days",
      "Send one reminder after 4 working days",
      "Close in the middle of week 3",
    ],
    tool: "Check the tool handles the routing before building. B1 and D1 reuse earlier answers. If the tool cannot, B1 becomes one grid question listing every activity, and D1 asks about the activity that takes most time.",
    rules: [
      "A recall period that fits each activity. Monthly reporting and annual processes need different treatment",
      "Include “not applicable” and “don't know”. Keep them apart from missing answers",
      "Wording, options, and order change results",
      "Set the response target only after we know the reachable population, sampling approach, and comparisons needed",
      "Results describe <b>respondents</b> unless the sampling supports wider claims",
      "Report people and customer organisations separately",
      "More responses do not remove recruitment bias",
    ],
    why: [
      "miss activities customers think are important",
      "use words that do not match how people describe their work",
      "force people into categories that do not fit",
      "collect feature wishes instead of explaining needs",
    ],
    intro: "We're the UX team at IMSERV. We want to understand how people work with IMSERV energy data, so we can improve Astral. It takes about [time, set after the pilot]. Taking part is voluntary, and you can skip any question. [Approved privacy and consent wording.]",
    end: "Thank you. Your answers help us design Astral around how people really work.",
    sections: [
      {
        id: "Start",
        title: "Introduction and consent",
        who: "Everyone",
        questions: [
          { id: "Q0", q: "Do you agree to take part?", type: "Single choice", options: ["Yes", "No"], logic: "No → end. Nothing is stored.", obj: [] },
        ],
      },
      {
        id: "A",
        title: "Your work with IMSERV data",
        who: "Everyone who agreed",
        questions: [
          { id: "A1", q: "How do you get IMSERV data today?", type: "Select all that apply", options: ["I log in to the IMSERV portal myself", "Someone else sends me files or reports", "It comes through an API or another system", "I don't use IMSERV data", "Don't know"], logic: "“I don't use IMSERV data” and “Don't know” are exclusive. “I don't use IMSERV data” → Section F.", obj: [1, 6] },
          { id: "A2", q: "In the past three months, which of these have you done with IMSERV data?", type: "Select all that apply", options: ["Investigated data that did not look right", "Reconciled figures from different sources", "Prepared or shared a report", "Managed who can see data, sites, or documents", "Raised or followed up a service issue with IMSERV", "<span class=\"ph\">[Other activities named in scoping or existing notes]</span>", "None of these", "Don't know"], logic: "“None of these” and “Don't know” are exclusive → Section F. Choices carry into B1, B2, and C.", obj: [2, 6] },
        ],
      },
      {
        id: "B",
        title: "How often",
        who: "If A2 has an activity",
        questions: [
          { id: "B1", q: "In the past three months, about how often did you <i>[activity from A2]</i>?", type: "Single choice, once per activity chosen in A2", options: ["More than once a week", "About once a week", "About once a month", "Once or twice", "Don't know"], logic: "Repeats for each activity. Check the recall period in the pilot. Annual processes need different treatment.", obj: [6] },
          { id: "B2", q: "Which of these takes most of your time?", type: "Single choice", options: ["<span class=\"ph\">[Activities chosen in A2]</span>", "Don't know"], logic: "Shown only if A2 has two or more activities. Otherwise the one activity carries into D1.", obj: [2] },
        ],
      },
      {
        id: "C",
        title: "Checking before you rely on a figure",
        who: "If A2 includes investigating, reconciling, or reporting",
        questions: [
          { id: "C1", q: "In the past three months, how often have you compared figures from more than one source before sharing a report?", type: "Single choice", options: ["Every time", "Most times", "Sometimes", "Never", "Not applicable, I don't share reports", "Don't know"], logic: "Not applicable and Don't know are coded apart from missing answers.", obj: [3, 6] },
          { id: "C2", q: "Before you rely on a figure from IMSERV, what do you usually check?", type: "Select all that apply", options: ["<span class=\"ph\">[Checks named in existing notes, in customers' words]</span>", "Something else (please say)", "I don't usually check", "Don't know"], logic: "“I don't usually check” and “Don't know” are exclusive. “Something else” → short text.", obj: [3, 6] },
          { id: "C3", q: "By the time you share a figure, how confident are you that it is right?", type: "Single choice", options: ["Very confident", "Fairly confident", "Not very confident", "Not at all confident", "Don't know"], logic: "", obj: [3] },
        ],
      },
      {
        id: "D",
        title: "Where the work goes",
        who: "If A2 has an activity",
        questions: [
          { id: "D1", q: "Thinking about <i>[activity from B2]</i>, where do you usually finish that work?", type: "Single choice", options: ["In the IMSERV portal", "In a spreadsheet", "In another reporting or analysis tool", "In an email", "Somewhere else (please say)", "Don't know"], logic: "Pipes the answer to B2, or the only activity in A2.", obj: [1, 6] },
          { id: "D2", q: "Which of these do you use for that work?", type: "Select all that apply", options: ["IMSERV portal", "Spreadsheet", "Email", "API or data feed", "Telephone", "Something else (please say)"], logic: "", obj: [1] },
          { id: "D3", q: "Who else is involved before that work is finished?", type: "Select all that apply", options: ["No one, I do it on my own", "Someone in my team", "Someone who approves it", "Another team in my organisation", "Someone outside my organisation", "IMSERV", "Don't know"], logic: "“No one” and “Don't know” are exclusive → skip D4.", obj: [4] },
          { id: "D4", q: "In the past three months, how often did that work wait for someone else before it could carry on?", type: "Single choice", options: ["Every time", "Most times", "Sometimes", "Never", "Don't know"], logic: "", obj: [4, 6] },
        ],
      },
      {
        id: "E",
        title: "When things go wrong",
        who: "If A2 has an activity",
        questions: [
          { id: "E1", q: "In the past three months, has a problem with IMSERV data or the service stopped you finishing a piece of work?", type: "Single choice", options: ["Yes", "No", "Don't know"], logic: "No or Don't know → Section F.", obj: [5, 6] },
          { id: "E2", q: "Thinking about the most recent time, what happened?", type: "Open text", options: [], logic: "Researchers code it later as interface, process, or data. Respondents are not asked to classify it.", obj: [5] },
          { id: "E3", q: "How was it resolved?", type: "Single choice", options: ["I sorted it myself", "Someone at IMSERV sorted it", "Someone in my organisation sorted it", "It is not resolved yet", "I gave up", "Don't know"], logic: "", obj: [5] },
          { id: "E4", q: "Has the same kind of problem happened before?", type: "Single choice", options: ["Yes, more than once", "Yes, once", "No, this was the first time", "Don't know"], logic: "", obj: [5, 6] },
        ],
      },
      {
        id: "F",
        title: "About you and your organisation",
        who: "Everyone who agreed",
        questions: [
          { id: "F1", q: "What kind of organisation do you work for?", type: "Single choice", options: ["A customer of IMSERV", "A broker or TPI", "A supplier", "Something else (please say)", "Prefer not to say"], logic: "", obj: [2, 6] },
          { id: "F2", q: "Which organisation do you work for?", type: "Short text, optional", options: [], logic: "Used only to count organisations and report them apart from people. Never reported by name. Storage agreed with the privacy owner.", obj: [6] },
          { id: "F3", q: "About how many sites does your organisation have IMSERV meters on?", type: "Single choice", options: ["1", "2 to 10", "11 to 100", "101 to 1,000", "More than 1,000", "Don't know"], logic: "Check band edges in the pilot.", obj: [2] },
          { id: "F4", q: "How long have you worked with IMSERV data?", type: "Single choice", options: ["Less than 6 months", "6 months to 2 years", "More than 2 years", "Don't know"], logic: "", obj: [2] },
          { id: "F5", q: "Would you be happy to talk to us in a short follow-up conversation?", type: "Single choice", options: ["Yes", "No"], logic: "Yes → contact details on the next screen, stored apart from answers. Used to follow up where results and interviews disagree.", obj: [] },
        ],
      },
    ],
    routes: [
      ["Q0", "No", "End"],
      ["A1", "Only “I don't use IMSERV data”", "Section F"],
      ["A2", "“None of these” or “Don't know”", "Section F"],
      ["B1", "Each activity chosen in A2", "Repeat B1"],
      ["B2", "Fewer than two activities in A2", "Skip B2"],
      ["C", "A2 has no investigating, reconciling, or reporting", "Skip to D"],
      ["D3", "“No one” or “Don't know”", "Skip D4"],
      ["E1", "No or Don't know", "Section F"],
      ["F5", "Yes", "Contact details, then end"],
    ],
  },
};
