// Content for the customer discovery documents: the proposal, the interview plan and script, and the survey plan and script.
// Source: docs/research/studies/2026-10-13-customer-discovery-plan.md.
// Plan facts come only from that file. Script wording, timings, and survey questions are drafts built from its
// objectives, questions, and rules, for review. Placeholders in [brackets] are filled after discovery or approval.
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
    { n: 2, verb: "Identify", text: "recurring behavioural patterns that need different design priorities or trade-offs.", question: "Which patterns recur across organisations, roles, and scales?", activity: "Rounds 1 and 2, integration", evidence: "Coded episodes across participants and organisations", measure: "Patterns observed in n of N participants and organisations" },
    { n: 3, verb: "Understand", text: "what people check before they trust and share a figure or a report.", question: "What do people check before relying on a figure?", activity: "Interviews, walkthroughs, survey", evidence: "Described and shown checks. Reported frequency", measure: "Reported frequency among respondents" },
    { n: 4, verb: "Identify", text: "who does, approves, and receives the work, and where handoffs and waiting happen.", question: "Who contributes, approves, or acts?", activity: "Interviews, walkthroughs", evidence: "Handoffs, correspondence", measure: "Handoffs per journey. Waiting points" },
    { n: 5, verb: "Determine", text: "where problems come from the service, process, or data rather than the interface.", question: "Where does it slow down, and why?", activity: "Walkthroughs, support evidence, blueprint", evidence: "Breakdowns traced to cause", measure: "Problems classed interface, process, or data" },
    { n: 6, verb: "Gauge", text: "how often the patterns from interviews happen across a wider group of respondents.", question: "How often do these patterns happen?", activity: "Survey", evidence: "Responses", measure: "Share of respondents, by people and by organisation" },
    { n: 7, verb: "Evaluate", text: "whether proposed design changes address the needs we find.", question: "Do proposed changes meet the need?", activity: "Design implication testing", evidence: "Observed tasks", measure: "Task success, effort, confidence" },
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
    slow: { risk: "Recruitment or privacy approval is slow", effect: "The timeline moves", fix: "Start both in stage 1. Share early findings from round 1" },
    notes: { risk: "Existing interview notes are not available", effect: "We repeat work, or miss context", fix: "Ask Clive early. Record what they cover" },
    survey: { risk: "The survey reaches only engaged customers", effect: "Patterns look more common than they are", fix: "Report respondents, not customers. Name the sampling limits" },
    screens: { risk: "Prototype screens steer discovery", effect: "We confirm our own design", fix: "No screens until stage 7" },
    archetypes: { risk: "Archetypes are expected before evidence exists", effect: "A persona deck without support", fix: "Agree upfront that archetypes emerge from rounds 1 and 2" },
    twelve: { risk: "Twelve interviews are treated as enough", effect: "A multi-role audience is under-covered", fix: "Plan rounds, not a total. Keep recruiting while important gaps remain" },
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
    "Round 1 findings are shared with the BA team as they emerge, marked provisional",
    "Stories link back to the need and evidence behind them",
    "The BA team (Claire and others) can bring open story questions into round 2",
  ],

  // Week positions are the upper estimates laid end to end (18 weeks). Stage 2 runs alongside stage 1.
  timelineNote:
    "Estimates to agree, not commitments. Bars show the upper estimate for each stage. With overlap, roughly 12 to 18 weeks from agreement to tested implications.",

  stages: [
    { n: 1, title: "Agree scope and decisions", short: "Scope and decisions", duration: "1 to 2 weeks", weeks: [0, 2], depends: "Time with Clive and the manager. Access to existing interview notes", purpose: "Agree what the research must help decide, the priority journeys, and what is out of scope.", doc: "proposal" },
    { n: 2, title: "Set up recruitment", short: "Recruitment", duration: "2 to 3 weeks, alongside stage 1", weeks: [0, 3], depends: "Access coordinator. Privacy owner sign-off", purpose: "Reach the people who actually do the work, across several organisations.", doc: "interview" },
    { n: 3, title: "Discovery round 1", short: "Round 1", duration: "2 to 3 weeks, including analysis", weeks: [3, 6], depends: "Bookings", purpose: "Understand real, recent episodes of work before showing any proposed screens.", doc: "interview" },
    { n: 4, title: "Discovery round 2, targeted", short: "Round 2", duration: "2 to 3 weeks, including analysis", weeks: [6, 9], depends: "Gap recruitment", purpose: "Fill the gaps round 1 found and test our early interpretations.", doc: "interview" },
    { n: 5, title: "Survey pilot and run", short: "Survey", duration: "3 to 4 weeks", weeks: [9, 13], depends: "Distribution route. Reachable population known", purpose: "Gauge how often the patterns from discovery happen across a wider group of respondents.", doc: "survey" },
    { n: 6, title: "Integrate and follow up", short: "Integrate", duration: "About 2 weeks", weeks: [13, 15], depends: "Survey results. Follow-up participants", purpose: "Bring the evidence together, investigate disagreement, and refine archetypes and journeys.", doc: "survey" },
    { n: 7, title: "Test design implications", short: "Test implications", duration: "2 to 3 weeks", weeks: [15, 18], depends: "Priority hypotheses. Prototype ready", purpose: "Check whether proposed changes address the needs we found.", doc: "proposal" },
  ],

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
      { name: "Round 1", who: "6 to 8 participants across several organisations", aim: "Understand real, recent episodes of work before showing any proposed screens.", output: "Episode-level evidence, first journey fragments, candidate behaviours, and recruitment gaps.", duration: "2 to 3 weeks, including analysis" },
      { name: "Round 2, targeted", who: "6 to 8 participants recruited into the gaps", aim: "Fill the gaps round 1 found and test our early interpretations.", output: "Wider coverage, tested interpretations, and provisional archetypes.", duration: "2 to 3 weeks, including analysis" },
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
    duration: "3 to 4 weeks",
    depends: "Discovery rounds 1 and 2. Distribution route. Reachable population known",
    steps: [
      { h: "Build from discovery", p: "Build questions from discovery findings, in customers' own words." },
      { h: "Ask about behaviour", p: "Ask about behaviour, not about which persona someone is." },
      { h: "Pilot", p: "Pilot with target users to check meaning, answer options, and effort." },
      { h: "Run, then analyse", p: "Results describe respondents. Report people and customer organisations separately." },
    ],
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
          { id: "A2", q: "In the past three months, which of these have you done with IMSERV data?", type: "Select all that apply", options: ["Investigated data that did not look right", "Reconciled figures from different sources", "Prepared or shared a report", "Managed who can see data, sites, or documents", "Raised or followed up a service issue with IMSERV", "<span class=\"ph\">[Other activities named in discovery]</span>", "None of these", "Don't know"], logic: "“None of these” and “Don't know” are exclusive → Section F. Choices carry into B1, B2, and C.", obj: [2, 6] },
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
          { id: "C2", q: "Before you rely on a figure from IMSERV, what do you usually check?", type: "Select all that apply", options: ["<span class=\"ph\">[Checks named in discovery, in participants' words]</span>", "Something else (please say)", "I don't usually check", "Don't know"], logic: "“I don't usually check” and “Don't know” are exclusive. “Something else” → short text.", obj: [3, 6] },
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
