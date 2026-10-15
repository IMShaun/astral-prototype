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

## Questions for discovery

- Who checks bills today, and with what? Is Bill Checker used, or is it done in a spreadsheet?
- Do people make their own site groups? Is that analysis, or access? The product model keeps Group as access scope. Sub-groups for analysis may need another name.
- Which comparison statistics do people use, and for what decision?
- Do customers still need register reads on screen, or only in a file?
- How do customers ask for MPAN changes and get help today?
