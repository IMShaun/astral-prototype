# SP Dataserve help guide against the Astral prototype, desk fold

Folded on 15 Oct 2026. Not a study. The source is the SP Dataserve customer help guide, read against the Astral prototype (`prototype.js`) as it stands today. Re-scored the same day after the MeterPower walk-through with Jack and Lorraine. SP Dataserve is the customer portal in TMA MeterPower.

Parity comes first. Astral must do everything MeterPower does on day one, so no customer loses anything when they move. Wants and wishes come after. Every gap below ships before launch, unless Jack and Lorraine said nobody uses it. Those are marked Confirm first.

## From the MeterPower walk-through with Jack and Lorraine

15 Oct 2026. Jack runs customer setup. Lorraine shared the channel configuration, the user list and the FTP list.

- **Most used.** The consumption report and the generation report.
- **Unused.** Bill Checker is never used, and nobody has asked about it. The carbon report is built in but unused, maybe because customers don't know how to use it. Time of use is rarely used, because most of the portfolio is half-hourly.
- **Channel-level data is the key gap.** Data Vision never had it, so Astral's design missed it. A meter usually has 6 channels across import and export MPANs: AI, AE, RI, RE and unused. Channel numbers vary by meter operator.
- **Export data is critical.** Many customers are contracted only to claim FIT payments. They need D10 reads or monthly interval totals to prove their export.
- **D10.** An industry flow carrying a physical meter reading, used on bills. Some customers want D10 and interval data. Some only have interval data.
- **Downloads.** Data type (interval, cumulative, D10, time of use), all channels or one channel, kWh or kW, actual or estimated, date range, MSID and site address. Some customers use kW for government reporting.
- **Aggregation.** Consolidate by MPAN, aggregate by group, or none. The hierarchy is site, then MPAN, then meter. A site can have several MPANs, and an MPAN several meters.
- **Search and multi-select matter.** Scottish Water has 4 groups of over 1,000 MPANs each.
- **Scheduled delivery.** Reports go by FTP or email, and every scheduled delivery is charged as FTP. Customers can't set up FTP themselves. Some customers on FTP never sign in.
- **Admin setup is manual.** A D3 file creates the meter record. Jack then puts the meter in a group, and groups set which MPANs a user sees. Sub-groups give someone, such as a consultant, only part of a portfolio. There is no limit on users per customer.
- **Switch user is broken** in MeterPower after a TMA update. Astral's see-as-them view covers this.
- **Support.** The Data Provisions and Data Help mailboxes close after the move. Help should route to the new IMSERV customer service model, such as a Tier 3 mailbox or a chatbot. Pippa and Katie Horton are the contacts for moving support and onboarding, including FTP setup.
- **Interviews.** About 50 client interviews are done. Internal interviews are still needed for balance. Infinis is a good customer to interview, as a power user across the IMSERV Europe and Scotland portfolios.

**Dependencies, not design gaps**

- IMSERV systems don't deliver channel-level data today. It needs work after a change of agent. The data source feeding Astral must deliver it before launch. This is a pipeline problem, not only a UI one.
- IMSERV loses MeterPower access through the ScottishPower VPN when the contract ends. Astral must be ready first.
- TMA won't give Shaun admin access, and ScottishPower controls the environment. The admin side can only be learned from Jack and Lorraine.
- Proposed migration rule. Set up everyone on the FTP list. Don't set up anyone who hasn't signed in for 6 months and isn't on the FTP list.
- The PRN workaround for sites where IMSERV isn't the appointed agent won't move to Astral.

## What is missing or partial

Priority here is a first desk view. The priority matrix below replaces it.

| # | Dataserve feature | What the guide describes | Astral prototype today | Status | Priority |
| --- | --- | --- | --- | --- | --- |
| 1 | Bill Checker | Tariffs set up by the help desk, then bills checked against consumption | Finance shows "Invoice list still waits". Unit rates exist on meters and sites. No bill check | Missing | High |
| 2 | Sub-groups | Users create their own groups of MPANs, such as North v South, and use them in every report | Groups come from the account. Teams group people, not sites. No user-made site groups | Missing | High |
| 3 | Compare data summary statistics | Pick sites and dates, then get a table of set measures such as weekday use, weekend demand, max apparent power, lowest power factor, and load factor | Compare puts sites or meters on one graph. No side-by-side statistics table | Missing | High |
| 4 | Compare different sites over different dates | Mode c in Compare data | Compare shares one date range. Compare with is previous period or same period last year, for the whole graph | Missing | Medium |
| 5 | Consumption report | Total use per MPAN for the whole portfolio, split into day and night units, with estimated and missing periods flagged | League tables rank sites. Data health shows completeness. Time of use shows on the graph. No one report with day and night units per MPAN | Partial | High |
| 6 | Carbon emission report | Month or year to date. Group kWh and tonnes of CO2, then per MPAN | Carbon pane, carbon export columns, and league tables by carbon. No monthly or year-to-date carbon report | Partial | Medium |
| 7 | Register readings (AMR) | Cumulative and time-of-use register reads for the 1st of each month, and the reads sent to the supplier for billing | Meter reads export has register, read, and read type. DC and DA report. No on-screen reads, and no view of reads sent to the supplier | Partial | Medium |
| 8 | Load factor and maximum demand in kVA | Shown in the energy summary under the data table | Summary shows total, highest, lowest, and average. Peak kVA is in the Capacity report only. No load factor | Partial | Medium |
| 9 | Change the date range from either end | Add or remove days, weeks, or months at the start or end without the calendar | Arrows step the whole range back or forward. No widening or narrowing from one end | Partial | Low |
| 10 | Half-hourly day-by-day comparison | Up to 8 days, one small graph per day | Average profile and weekday matching. No one-graph-per-day view | Partial | Low |
| 11 | Ask to add or remove MPANs | Customers contact their account manager. The guide gives the route | Site settings import changes settings for sites already there. No request route. Settings shows "Contact still waits" | Missing | Medium |
| 12 | Help and contact | A help page, a data team email, and what to include in a query | No help page. Queries cover data questions from a reading. No route for technical problems or account changes | Missing | Medium |
| 13 | Feedback | Comments and suggestions welcome by email | No feedback route | Missing | Low |
| 14 | Transpose for Excel | Switch rows and columns so long ranges fit a spreadsheet | Export and data extract offer CSV and XLSX, with separators and one row per utility. No rows and columns switch | Missing | Low |
| 15 | Print and copy a chart | Save, copy, and print in the chart window | Export as PNG. No print or copy | Partial | Low |
| 16 | Chart types and colour palettes | Choose a chart type and palette | Bar, Line, and Calendar. One accessible palette by design | Partial | Low. Keep the fixed palette |
| 17 | IMSERV-raised queries and their steps | Queries raised against a site by the data team, with each step to resolve them and a site history | Queries are raised by the customer from a reading and kept as threads with Open, Unread, and Resolved. Not clear if IMSERV-raised queries and their steps appear | Partial | Medium |

## Already covered

- Log on. IMSERV SSO replaces Group, User ID, and password.
- Home page and persistent navigation. Overview and the side menu.
- Profiles. Pick a group, site, or meter. Pick dates. Graph, breakdown table, and step back or forward.
- Group totals. Group scope adds its sites together.
- kW and kWh. Consumption in kWh, Demand in kW.
- Power factor. Its own pane, from incoming electricity meters.
- Drill down. Click into a point and come back.
- Year on year and month on month. Compare with the same period last year or the previous period.
- Data download. Export and Scheduled data extract, with CSV, XLSX, and separators, across many sites.
- Estimated and missing data. Marked on the graph and in exports. Missing data alerts.
- Tooltips. Hover or focus a point for the reading.
- Scheduled delivery. Reports send by email or SFTP on a schedule, and customers set them up themselves. MeterPower needs IMSERV to set up FTP.
- Switch user. IMSERV admin picks a company and sees Astral as they do.
- Sign-in activity. Admin Usage shows sign-ins and the last sign-in for each person, which helps the migration rule.

## Data options checked in Astral

From the Dataserve Data Download and Profile options, checked on 15 Oct 2026.

| Dataserve option | Graph | Download | Status |
| --- | --- | --- | --- |
| Organisation, Group | Portfolio tree (all sites, group, site, meter). IMSERV admin picks a company in Companies | Follows the graph | Covered |
| Commodity | Utility filter | Report Utility. Source data follows the graph | Covered |
| Interval | Yes | Chart data, Source data, Reports | Covered |
| Cumulative | No | Reports, Meter reads (register) | Download only |
| D10 | No | Meter reads has register reads, not named as D10 | Partial. Needs D10 from the data source |
| All channels or one channel | Consumption, Demand, and Power factor views | Reports Channel | Partial. Only AI, AE, and RI exist |
| Time of use | Time-of-use bands on the graph | Chart data has a time_of_use column | Band per half-hour, no totals per band |
| AI and AE | In and Out key | Reports Channel. Source data has no direction column | Partial |
| RI | Power factor view, lagging and leading kVArh, incoming electricity only | Not exportable | Partial |
| RE | None | None | Missing |
| All MQs | None | None | Missing. No single view of AI, AE, RI, and RE |
| kWh and kW | Consumption and Demand views | kWh, plus kVA in Reports. No kW column | Partial |
| All or Actual | Estimated bars shown pale | Quality option on Export and in Reports | Covered |
| Aggregate by Group | Graph totals the selection | Chart data totalled. Reports group by meter, site, or company | Covered |
| Remove AE flags | None | Quality column always included | Missing, small |
| Consolidate by MPAN, Include MSID | None | None | Missing. One meter per MPAN, no MSID |
| Add site details | None | Site name only | Missing. No address, postcode, or site ID |
| From and To, multi-select with search | Date picker and meter filters | Exports the meters on the graph | Covered |

## What a user must be able to do

Taken from the Dataserve guide, its Features page, the data options, and the walk-through with Jack and Lorraine. Astral must let people do all of these on day one, apart from the Confirm first items.

**Find the data**

1. Pick an organisation, group, site, or meter, with search and multi-select
2. Filter by utility
3. Pick any date range, and widen or narrow it from either end
4. Know the data is in UTC, and why BST days look an hour out

**Read the data**

5. See half-hourly data as a graph or a table
6. Switch between kWh and kW, and choose decimal places
7. See every measurement quantity (AI, AE, RI, RE), alone or together
8. See cumulative and D10 register reads, and the reads sent to the supplier
9. See time-of-use bands, with totals for each band such as day and night
10. See a summary with total, highest, lowest, load factor, power factor, and maximum demand in kVA
11. Tell actual readings from estimated and missing ones

**Compare**

12. Compare periods, such as year on year or month on month
13. Compare half-hours day by day, for up to 8 days
14. Compare sites over the same or different dates, with summary statistics
15. Drill from a long range into one day

**Group**

16. Use sub-groups of a company's MPANs, so someone such as a consultant sees only part of the portfolio

**Report and download**

17. Download many meters over long ranges, in a format they choose
18. Choose what goes in the file: quality flags, direction, kW, MSID, consolidation by MPAN, and site details
19. Run a consumption report per MPAN, with day and night units and estimated and missing periods
20. Run a carbon report by month or year to date, for the group and per MPAN
21. Fit long ranges into a spreadsheet
22. Save, copy, or print a chart
27. Run a generation report with monthly export totals per MPAN, to claim FIT payments

**Bills, queries, and help**

23. Check a bill against their tariff
24. See queries raised against their sites, the steps taken, and the history
25. Read service notices
26. Find help and contact details, ask to add or remove MPANs, and send feedback

## Missing for customers

Fix one at a time. Status is against the prototype today.

| ID | Missing | Must-do | Status |
| --- | --- | --- | --- |
| C1 | Reactive export (RE) data | 7 | Missing |
| C2 | One view of AI, AE, RI, and RE together | 7 | Missing |
| C3 | Direction column in Source data | 18 | Missing |
| C4 | Reactive import (RI) in downloads | 7, 18 | Missing |
| C5 | kW column in downloads | 6, 18 | Missing |
| C6 | Totals per time-of-use band, on screen and in downloads | 9 | Partial |
| C7 | D10 register reads on screen and in downloads, and reads sent to the supplier | 8 | Partial, download only |
| C8 | Option to leave quality flags out of a download | 18 | Missing |
| C9 | Consolidate by MPAN, and include MSID | 18 | Missing |
| C10 | Site address, postcode, and site ID in downloads | 18 | Missing |
| C11 | Consumption report per MPAN with day and night units | 19 | Partial |
| C12 | Carbon report by month or year to date | 20 | Partial |
| C13 | Compare statistics table | 14 | Missing |
| C14 | Compare different sites over different dates | 14 | Missing |
| C15 | Load factor and maximum kVA in the summary | 10 | Partial |
| C16 | Sub-groups of a company's MPANs, used for access and in reports | 16 | Missing |
| C17 | Bill Checker | 23 | Missing |
| C18 | IMSERV-raised queries and their steps | 24 | To confirm |
| C19 | Help page and contact route, including asking to add or remove MPANs | 26 | Missing |
| C20 | Service notices. Notifications today are alerts only | 25 | Missing |
| C21 | Feedback route | 26 | Missing |
| C22 | Widen or narrow the date range from one end | 3 | Partial |
| C23 | Day-by-day half-hour comparison | 13 | Partial |
| C24 | Choice of decimal places | 6 | Missing |
| C25 | Rows and columns switch for spreadsheets | 21 | Missing |
| C26 | Print or copy a chart | 22 | Partial, PNG only |
| C27 | Say where times are UTC, and explain BST | 4 | To confirm |
| C28 | Generation report with monthly export totals per MPAN, for FIT claims | 27 | Missing. Export shows on the graph only |

## Missing for IMSERV admin

IMSERV admin has Companies (pick a company and see as them), Servicing, Inbox, Users, Usage, and Reports. These are the jobs behind the customer gaps.

| ID | Missing | Unblocks | Status |
| --- | --- | --- | --- |
| A1 | Set up a company's tariffs and switch on Bill Checker | C17 | Missing |
| A2 | Add and remove MPANs for a company, from a customer or account manager request. Jack does this by hand today | C19 | Missing |
| A3 | Raise a query against a site and record each step the customer sees | C18 | To confirm. Inbox handles customer tickets |
| A4 | Post service notices to all customers or chosen companies | C20 | Missing |
| A5 | Hold MSIDs and more than one meter per MPAN | C9 | Missing |
| A6 | Keep site address, postcode, and site ID so they reach downloads | C10 | Partial. Sample addresses only |
| A7 | Get channel-level data (AI, AE, RI, RE) per meter from the IMSERV data source, mapped from each operator's channel numbers | C1, C2, C4, C7, C28 | Missing. Pipeline dependency |
| A8 | Keep help content and contact details, and receive feedback in Inbox | C19, C21 | Missing |
| A9 | Set up sub-groups of a company's MPANs, and give a user, such as a consultant, only those | C16 | Missing |
## Priority matrix

Re-scored on 15 Oct 2026 after the walk-through with Jack and Lorraine. Parity is the day-one rule, so value and effort set the order of work, not whether something ships.

**Value** is reach + frequency + severity, each scored 1 to 3, so 3 to 9. High value is 7 or more.

- Reach. 3 most of the four user groups. 2 some groups. 1 a few customers
- Frequency. 3 most visits. 2 monthly or with each bill. 1 rarely
- Severity when it is missing. 3 blocks the task, no workaround. 2 a costly workaround. 1 an inconvenience

**Effort.** 1 copy, or a column or option on data we already show. 2 a new view, report, or flow on existing data. 3 a new data model, data source work, or back-office process.

**Admin items** take the value of the customer gaps they unblock. Do the admin item first.

**Confidence.** High when Jack and Lorraine described real use. Medium when they or an internal walk named it. Low otherwise. None of it is customer evidence yet.

| Group | Rule | What to do |
| --- | --- | --- |
| Start now | Day one, effort 3 | Start first. These need data source or data model work and gate launch |
| Quick win | Day one, value 7+, effort 1 or 2 | Do next |
| Fill-in | Day one, value 6 or less, effort 1 or 2 | Do before launch, after the quick wins |
| Confirm first | Jack and Lorraine say it is unused or rarely used | Agree with Clive whether parity needs it |

| Order | ID | Gap | Reach | Freq | Severity | Value | Effort | Group | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | A7 | Channel-level data from the IMSERV data source | 2 | 2 | 3 | 7 | 3 | Start now | High. Named the key gap. Not delivered by IMSERV systems today |
| 2 | C7 | D10 register reads on screen and in downloads | 2 | 2 | 3 | 7 | 3 | Start now | High. FIT claims need D10 or monthly totals |
| 3 | A9 | Set up sub-groups and limit a user to one | 2 | 2 | 3 | 7 | 3 | Start now | Medium. Gives consultants part of a portfolio |
| 4 | C16 | Sub-groups of a company's MPANs | 2 | 2 | 3 | 7 | 3 | Start now | Medium. Access, not the user-made groups the guide suggests |
| 5 | C1 | Reactive export (RE) data | 2 | 2 | 2 | 6 | 3 | Start now | Medium. One of the 6 channels |
| 6 | A5 | MSIDs and more than one meter per MPAN | 2 | 2 | 2 | 6 | 3 | Start now | Medium. Site, then MPAN, then meter |
| 7 | C9 | Consolidate by MPAN, and include MSID | 2 | 2 | 2 | 6 | 3 | Start now | Medium. A download option today |
| 8 | A2 | Add and remove MPANs for a company | 3 | 2 | 3 | 8 | 2 | Quick win | High. All setup is by hand today |
| 9 | C11 | Consumption report per MPAN | 3 | 2 | 3 | 8 | 2 | Quick win | High. One of the two most used reports |
| 10 | C27 | Say where times are UTC, and explain BST | 3 | 3 | 2 | 8 | 1 | Quick win | Medium. Data trust was named in Katie's walk |
| 11 | C28 | Generation report with monthly export totals | 2 | 2 | 3 | 7 | 2 | Quick win | High. Most used, and needed for FIT claims |
| 12 | A8 | Help content, contact details, and feedback in Inbox | 3 | 1 | 3 | 7 | 1 | Quick win | Medium. The old mailboxes close |
| 13 | C19 | Help page and contact route, including MPAN requests | 3 | 1 | 3 | 7 | 1 | Quick win | Medium. Route to the new service model |
| 14 | A6 | Keep site address, postcode, and site ID | 3 | 2 | 2 | 7 | 2 | Quick win | Medium. Site address is a download option |
| 15 | C10 | Site details in downloads | 3 | 2 | 2 | 7 | 2 | Quick win | Medium. Site address is a download option |
| 16 | C2 | All channels or one channel, on screen and in downloads | 2 | 3 | 2 | 7 | 2 | Quick win | Medium. Needs A7 |
| 17 | C22 | Widen or narrow the date range from one end | 3 | 3 | 1 | 7 | 1 | Quick win | Low |
| 18 | A3 | Raise a query against a site, with steps. Confirm first | 3 | 2 | 2 | 7 | 2 | Quick win | Low |
| 19 | C18 | IMSERV-raised queries and their steps. Confirm first | 3 | 2 | 2 | 7 | 2 | Quick win | Low |
| 20 | C3 | Direction column in Source data | 2 | 2 | 2 | 6 | 1 | Fill-in | Medium. Import and export are split |
| 21 | C5 | kW column in downloads | 2 | 2 | 2 | 6 | 1 | Fill-in | Medium. Some use kW for government reporting |
| 22 | A4 | Post service notices | 3 | 1 | 2 | 6 | 2 | Fill-in | Medium. A standard section today |
| 23 | C20 | Service notices | 3 | 1 | 2 | 6 | 2 | Fill-in | Medium. A standard section today |
| 24 | C4 | Reactive import (RI) in downloads | 2 | 2 | 2 | 6 | 2 | Fill-in | Medium. One of the 6 channels |
| 25 | C15 | Load factor and maximum kVA in the summary | 2 | 3 | 1 | 6 | 1 | Fill-in | Low |
| 26 | C13 | Compare statistics table | 2 | 2 | 2 | 6 | 2 | Fill-in | Low |
| 27 | C21 | Feedback route | 3 | 1 | 1 | 5 | 1 | Fill-in | Low |
| 28 | C26 | Print or copy a chart | 2 | 2 | 1 | 5 | 1 | Fill-in | Low |
| 29 | C23 | Day-by-day half-hour comparison | 2 | 2 | 1 | 5 | 2 | Fill-in | Low |
| 30 | C8 | Leave quality flags out of a download | 1 | 2 | 1 | 4 | 1 | Fill-in | Low |
| 31 | C24 | Choice of decimal places | 1 | 2 | 1 | 4 | 1 | Fill-in | Low |
| 32 | C14 | Compare different sites over different dates | 1 | 1 | 2 | 4 | 2 | Fill-in | Low |
| 33 | C25 | Rows and columns switch for spreadsheets | 1 | 1 | 1 | 3 | 1 | Fill-in | Low |
| 34 | C6 | Totals per time-of-use band | 1 | 2 | 1 | 4 | 2 | Confirm first | Medium. Rarely used. Most of the portfolio is half-hourly |
| 35 | C12 | Carbon report by month or year to date | 1 | 1 | 1 | 3 | 2 | Confirm first | Medium. Built in but unused. Astral has a carbon pane already |
| 36 | A1 | Tariffs and switching on Bill Checker | 1 | 1 | 1 | 3 | 3 | Confirm first | Medium. Never used, never asked about |
| 37 | C17 | Bill Checker | 1 | 1 | 1 | 3 | 3 | Confirm first | Medium. Never used, never asked about |

Within a group, order is value, then confidence, then lower effort. Admin items come before the customer gaps they unblock.

### What moved

- Channel-level data, D10 reads, sub-groups, and the MPAN and meter hierarchy moved from Reconsider and Big bet to Start now. Parity needs them, and they take the longest.
- The generation report is new. Jack and Lorraine named it one of the two most used reports.
- Bill Checker, the carbon report, and time-of-use totals moved to Confirm first. Jack and Lorraine say nobody uses them.
- Confidence rose where Jack and Lorraine described real use.

## Follow-ups from the walk-through

- Cross-check MeterPower against the prototype for channel-level data, aggregation options, and report types before the show and tell (Shaun). This analysis is the first pass.
- Book a show and tell with Jack and Lorraine to check the prototype against MeterPower (Shaun).
- Share the D3 sample file and features screenshot (Jack), and the user list, FTP list, and channel configuration on SharePoint (Lorraine) with Anna, Clive, and Shaun.
- Hold a wider requirements session with the Scottish account managers, Emma Stewart and Callum Jessiman. Consider Infinis as a customer to interview.
- Confirm the Astral data pipeline delivers channel-level data at source before go-live.

## Questions for discovery

- Bill Checker is never used. Do customers check bills another way, or not at all? Can it go, or does parity mean it stays?
- Is the carbon report unused because nobody needs it, or because nobody knows how to use it?
- Do FIT customers claim from D10 reads, monthly interval totals, or both?
- Which customers use kW rather than kWh, and for which government reports?
- How are sub-groups used today? Consultants only, or teams inside a customer too?
- Which comparison statistics do people use, and for what decision?
- How do customers ask for MPAN changes and get help today, and how will that work once the mailboxes close?