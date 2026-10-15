# SP Dataserve help guide against the Astral prototype, desk fold

Folded on 15 Oct 2026. Not a study. The source is the SP Dataserve customer help guide, read against the Astral prototype (`prototype.js`) as it stands today.

The guide shows what the legacy service lets customers do. It does not show what customers use or need. Treat each gap as a question for customer discovery, not as a requirement. Parity is not the goal.

## What is missing or partial

Priority is a desk view, to test in discovery.

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

## Data options checked in Astral

From the Dataserve Data Download and Profile options, checked on 15 Oct 2026.

| Dataserve option | Graph | Download | Status |
| --- | --- | --- | --- |
| Organisation, Group | Portfolio tree (all sites, group, site, meter). IMSERV admin picks a company in Companies | Follows the graph | Covered |
| Commodity | Utility filter | Report Utility. Source data follows the graph | Covered |
| Interval | Yes | Chart data, Source data, Reports | Covered |
| Cumulative | No | Reports, Meter reads (register) | Download only |
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

Taken from the Dataserve guide, its Features page, and the data options. This is what the legacy service lets people do, to test in discovery.

**Find the data**

1. Pick an organisation, group, site, or meter, with search and multi-select
2. Filter by utility
3. Pick any date range, and widen or narrow it from either end
4. Know the data is in UTC, and why BST days look an hour out

**Read the data**

5. See half-hourly data as a graph or a table
6. Switch between kWh and kW, and choose decimal places
7. See every measurement quantity (AI, AE, RI, RE), alone or together
8. See cumulative register reads, and the reads sent to the supplier
9. See time-of-use bands, with totals for each band such as day and night
10. See a summary with total, highest, lowest, load factor, power factor, and maximum demand in kVA
11. Tell actual readings from estimated and missing ones

**Compare**

12. Compare periods, such as year on year or month on month
13. Compare half-hours day by day, for up to 8 days
14. Compare sites over the same or different dates, with summary statistics
15. Drill from a long range into one day

**Group**

16. Make their own sub-groups of sites and use them everywhere

**Report and download**

17. Download many meters over long ranges, in a format they choose
18. Choose what goes in the file: quality flags, direction, kW, MSID, consolidation by MPAN, and site details
19. Run a consumption report per MPAN, with day and night units and estimated and missing periods
20. Run a carbon report by month or year to date, for the group and per MPAN
21. Fit long ranges into a spreadsheet
22. Save, copy, or print a chart

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
| C7 | Register reads on screen, and reads sent to the supplier | 8 | Partial, download only |
| C8 | Option to leave quality flags out of a download | 18 | Missing |
| C9 | Consolidate by MPAN, and include MSID | 18 | Missing |
| C10 | Site address, postcode, and site ID in downloads | 18 | Missing |
| C11 | Consumption report per MPAN with day and night units | 19 | Partial |
| C12 | Carbon report by month or year to date | 20 | Partial |
| C13 | Compare statistics table | 14 | Missing |
| C14 | Compare different sites over different dates | 14 | Missing |
| C15 | Load factor and maximum kVA in the summary | 10 | Partial |
| C16 | Their own sub-groups of sites | 16 | Missing |
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

## Missing for IMSERV admin

IMSERV admin has Companies (pick a company and see as them), Servicing, Inbox, Users, Usage, and Reports. These are the jobs behind the customer gaps.

| ID | Missing | Unblocks | Status |
| --- | --- | --- | --- |
| A1 | Set up a company's tariffs and switch on Bill Checker | C17 | Missing |
| A2 | Add and remove MPANs for a company, from a customer or account manager request | C19 | Missing |
| A3 | Raise a query against a site and record each step the customer sees | C18 | To confirm. Inbox handles customer tickets |
| A4 | Post service notices to all customers or chosen companies | C20 | Missing |
| A5 | Hold MSIDs and more than one meter per MPAN | C9 | Missing |
| A6 | Keep site address, postcode, and site ID so they reach downloads | C10 | Partial. Sample addresses only |
| A7 | Turn on reactive and export channels per meter, so RE and RI can show | C1, C2, C4 | Missing |
| A8 | Keep help content and contact details, and receive feedback in Inbox | C19, C21 | Missing |
## Questions for discovery

- Who checks bills today, and with what? Is Bill Checker used, or is it done in a spreadsheet?
- Do people make their own site groups? Is that analysis, or access? The product model keeps Group as access scope. Sub-groups for analysis may need another name.
- Which comparison statistics do people use, and for what decision?
- Do customers still need register reads on screen, or only in a file?
- How do customers ask for MPAN changes and get help today?
