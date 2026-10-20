# Terminology

Source of truth for Astral product words. Do not invent a synonym for variety. Fold new terms here only when a talk or Language entry names them.

Record each concept as canonical term, definition, allowed variants, disallowed synonyms, role or context notes, and localization note.

| Canonical | Definition | Allowed | Disallowed | Role or context | Localization |
| --- | --- | --- | --- | --- | --- |
| Company | An organisation on the platform. Types you add are Customer, Supplier, or Broker / TPI. | companies | account, tenant, org as the UI label | Platform admin adds companies. Super admin sees companies in the Users tree. On Add a team, Company is a pick when they can see other companies. Otherwise it sits disabled on their company | Keep Company |
| Company type | Who the company is. First access layer | type | role | Not the same as Access | Keep |
| Platform admin | IMSERV staff. Not a company you add | — | Super admin as the type | Super admin is the access on this type | Keep |
| Customer | The organisation whose energy data is managed | — | end customer as the type label, third party as this type | Admin, Manager, Contributor, Viewer. Finance can sit on the navbar | Keep |
| Supplier | An energy supplier | — | treating this as Customer | Admin, Manager, Contributor, Viewer. Finance stays off | Keep |
| Broker / TPI | A company you add. They act for one or more customers | TPI with Broker on the type list | third-party user, Broker alone on the type list, Third party as this type | Access is Viewer. Do not infer Viewer from the word broker without the capability map | Keep the slash form on the type list |
| Third party | A relationship on the link to a customer | third-party access | a company type next to Customer, Supplier, Broker / TPI | Access on that link is Viewer. Who they can see and when it ends | Hyphenate third-party as a modifier |
| Letter of authority | What links a Broker / TPI to a customer, and for how long | — | LOA as a label until a screen names the short form | They must not see data outside that period | Spell out |
| Access | Role inside a company. Super admin, Admin, Manager, Contributor, Viewer | role when the column is Role | permission user group as this layer, mixing this with entitlement or data scope | Super admin only on Platform admin. Broker / TPI only gets Viewer | Keep |
| Super admin | Access on Platform admin. Visibility on everything | — | Super admin as a company type | Users and Settings. Group people into teams. Log in as user sits on the person | Keep |
| Product entitlement | What the company bought. Version one is documents only or full Astral | documents only, full Astral | permissions as this layer, letting the customer pick the tier in version one | Sold services decide. Later a contract may grant the function | Keep as the concept. Not a screen label yet |
| Admin | Can do and see everything in their company | company admin in skill notes | putting Admin on Broker / TPI | Customer and Supplier. Invite including Admin | Keep |
| Manager | Works and adds people | — | Invite Admin | Customer and Supplier. Users. Not Settings | Keep |
| Contributor | Works in the product | — | Add people | Raise a query, resolve | Keep |
| Viewer | Looks | — | — | Customer, Broker / TPI, Supplier. Cannot invite, raise a query, resolve, run a report, or change Settings | Keep |
| Team | People grouped inside a company | — | permission user group, Group on the tree | Add a team, left of Invite users. Team name and company. Pick people in Select. Search people sits in that list. Who they work with, not which data they see | Keep |
| My Documents | Files IMSERV produced elsewhere and placed for the customer | — | Downloads, Reports, Export | Documents-only logins may arrive here. The screen still waits | Keep |
| Data provision | The business service that gives customers data and report outputs | data-provision report in notes | treating this as a scheduled report or an Export | Historically email or file transfer. Some files land in My Documents | Keep |
| Member | A person in a team | people, person on details | user as the field label if Member is on the screen | Add member inside a team | Keep User on the Users page |
| Users | Invite and list for a company | — | Astral as a person on this list | Super admin, Admin, Manager | Keep |
| Login | Permanent or temporary. A label, not a pick | — | Login as website chrome | Temporary only sees data between the contract dates | Keep Sign in on the auth screen |
| Expiry | How long is left on the contract | years, months, days in the pill | a red fill | Super admin, Admin, and Manager can see it. Admin and Super admin can Renew | Keep |
| Renew | Opens Renew access from Expiry | — | Grant access, Extend | Admin and Super admin. Manager looks | Keep |
| Renew access | Upload a PDF and enter the start and the end as dd/mm/yyyy | Start, End | Grant access | They type from the left. They can only see data between those dates. Do not store the file, only the name | Keep |
| Upload contract | The file control on Renew access | A PDF, Use a PDF | letter of authority as this control | PDF only | Keep |
| Replace file | Swap the PDF on Expiry, next to the download | Use a PDF | Change file, Re-upload | Admin and Super admin. Dates stay. Manager looks | Keep |
| Sign in | Email and password to enter the product | — | Login, Book a call | Auth flow | Keep |
| Sign-up | Name, email, and company, then a code, then Onboarding | — | Already have an account on that screen | Auth flow | Keep the hyphen |
| Report | A named Clockwork email from Reports. Live, Waiting, or Custom. IMSERV Super admin sets them up. | — | Excel, using Export as this object, Add a custom report on the customer side, Run this report | Live is People are sent this report. The card shows how long is left until the next send. Months if a month or more. Weeks if a week or more. Days if under a week. Waiting is This report is not in yet. You cannot run it. Custom is a name only. You cannot run it yet. Customer Admin and Manager edit Clockwork email. Settings is the cog. It sits on the report card, and next to Download on a Report in Downloads. People, Occurrence, and Starts on sit there. Occurrence is Weekly, Monthly, or Quarterly. Starts on is dd/mm/yyyy. Files sit on Downloads. | Keep |
| UTC | Graph interval time | 00.00 UTC | GMT, a UTC or BST pick on the graph, BST as the default, local time as a graph control | The date sits next to the title, then UTC. It is a label, not a control. Local time waits as a preference, a table option, or a report setting. Daylight saving can show the same local clock twice. Keep both rows | Keep |
| Local time | Clock time on a table, report, or preference | — | putting it on the graph, deleting a duplicated local clock, renaming a row at the cutover | Graph stays UTC. Later it can sit as a preference, a table option, or a report setting. Daylight saving can show the same local clock twice. Keep both rows | Later |


| Download | Get a ready file from Downloads | — | using Download as the name of Report, a ghost Downloads button on Reports, My Documents | Status Complete sits in Tag. Type is Report or Data export. Report is cyan. Data export is black. Customer Admin and Manager get Settings on a Report, next to Download. Same Clockwork email as Reports. Reports and Downloads sit as Tabs under the Reports title. View downloads opens Downloads. Keep My Documents off this pile | Keep |
| Query | A thread on a graph point | comment is a line on the thread | ticket | Title is Query. If Astral sent the first alert, the title is Alert. Resolve is Expected, Fixed, or Duplicate. Add tag sits on the reading card. Analyse sits left of Add tag and drills into that period | Keep |
| Tag | A name they attach to a graph reading | Shift as a walk example | Peak, On peak, Out of hours, a pink fill, Untitled group, Tags in Settings, a list of every reading with that tag, a tagged report | Add tag. Overlay uses Search, Current tags, Recent tags, and the Switch. Colour is assigned when they create the name. That name keeps the colour. The tag stays on that reading. Peak is Time of use, not a tag. Groups still wait. Do not put tags in Settings. Do not pick a tag to list every reading. Reports on tagged data wait. Viewer cannot add a tag | Keep |
| Alert | Outside threshold, Missing data, or Not sending. Attention | — | Acknowledged on the card, using the Estimated mark, calling an Astral alert a Query | Unread or Resolved. If Astral sent the first alert, the pin title is Alert. Version one stays simple | Keep |
| Estimated | A guessed reading. Confidence | — | using the Alert mark | Not an actual reading | Keep |
| Incoming | Energy into the site | In on pills | import as the site language | Import stays the stored channel | Keep Incoming on the site |
| Outgoing | Energy out of the site | Out on pills | export as the site language | Export stays the stored channel | Keep Outgoing on the site |
| Site | A place under a group | What they can see on the person | inventing ownership on Network Rail, treating tenanted retail as a named estate, Sites or Sites they can see as the person field | Euston retail and Birmingham retail exist only to test Filter. Admin and Manager pick What they can see on the person and on Invite users. Groups or sites. Search. Ticks | Keep |
| Group | Named set of sites in the tree. Membership can also decide which sites, MPANs, reports, and documents a person sees | — | Tenanted retail as a named Network Rail estate, Team as this object, Folder | All sits at the top of the tree. An MPAN can sit in more than one group. Permission user groups stay in admin. A site sits in one group for now. Overlap is to investigate. No sub groups. Access is by group or site, not by feature | Keep |
| Meter | Electricity, Gas, or Water | MPAN, MPRN on electricity and gas. Water uses the meter name. | a SPID. Units in the Filter label | In and Out sit on the row. Water is off until they tick it. Water consumption is m³. Cost is £. Carbon is kgCO2e. Gas is a flame. Water is a drop. Settings is a cog | Keep |
| Show as | The unit on a meter's Readings table | kWh, kW, kVA. The face reads Show as kWh | Unit as this control, converting reactive channels | Electricity only. Gas and water stay in their own unit. kW and kVA change the active energy channels. Reactive stays kVArh, as Export source data does. Table data carries it | Keep |
| Layout | How a meter's Readings table is laid out | Channels across, Half-hours across | Transpose, Pivot | Channels across is a row for each time. Half-hours across is a row for each day, with a Channel pick. It shows up to 62 days. Table data carries it | Keep |
| Maximum demand | The highest half-hour in kVA for the dates | At 11.30 UTC on 4 Sep 2026 | MD, Peak as this figure | Sits with Highest demand in kW, Average demand, and Load factor on the Readings Summary. From the incoming MPAN | Keep |
| Load factor | Average demand divided by highest demand | A percentage | LF | On the Readings Summary | Keep |
| Hours | When the site is trading or working. Pane Filter ticks cut the graph and Breakdown with Time of use | Operational, Non-operational, Closed | Opening hours as the field name. Calling Non-operational Closed. Splitting Peak from the operating state | Operational is actively trading. Non-operational is people may be there, preparing or maintaining, not trading. Closed is shut, no normal activity. Graph and Breakdown use Operational · Peak through Closed · Off-peak. Out of hours on an Operational day is Non-operational. Sunday on a weekday depot is Closed. Filter Time of use stays On peak and Off peak | Keep |
| State | Meter health pill | Sending, Outside threshold, Missing data, Not sending | status colour as a generic badge, Tag for health, StatusBadge as a product file | Outside threshold, Missing data, and Not sending have a warning. Sending has a tick. There is no StatusBadge file | Keep |
| Finance | Navbar for a Customer who needs highest spend | — | Energy as this navbar item | Off for Platform admin, Broker / TPI, and Supplier | Keep |
| Highest spend | The Finance table | Top 5. Incoming last 24 hours. | listing the whole estate | Dummy sites stay off. Hero is still the single highest | Keep |
| Consumption | Use graph on a group or a site | Incoming and outgoing when both sit together. Total consumption. Individual consumption | Interval as the tab. Mixing m³ with kWh on one axis. Opening on a wall of everything | Unit follows the meter. Electricity and gas are kWh. Water is m³. They cannot share this graph. This combination cannot be shown. View water consumption. View electricity & gas consumption. Total consumption is how much the group used. Individual consumption is which sites or meters made that usage. Total is the first view. Individual, Hours, Breakdown, and Analyse add detail | Keep |
| Cost | Spend graph on a group or a site | £ on the axis | Spend as the tab, showing £0 when the tariff is missing | Same window as Consumption. Rates on Site profile feed the walk numbers. Water uses £. Without a rate, say cost is unavailable | Keep |
| Carbon | Carbon graph on a group or a site | kgCO2e on the axis | Emissions or CO2 as the tab | Same window as Consumption. Walk numbers. Water uses the 2026 supply and wastewater factors, combined on the graph | Keep |
| Discipline | Energy, Finance, Asset, Data | — | using these as platform roles or company types | Profile and Onboarding | Keep |

## CTA objects

Name the object in the CTA when the surrounding UI does not already make it obvious.

| Role or context | Good copy | Why |
| --- | --- | --- |
| Super admin or Platform admin | Add company | The object is Company |
| Company Admin | Add team | Company context is already established |
| Team manager | Add member | Acts inside a team |
| Contributor | Raise a query | Names the available action if that is what they can do |
| Viewer | You do not have permission to edit this report. | Explains the limit without blame |
| Broker / TPI | You can view data for {company} until {date}. | Relationship, scope and expiry |
| Multi-company user | Company access | Better than duplicating the person by company |
| Export | Export, then PDF or CSV | Distinct from Report |
| Expired access | Your access to {company} ended on {date}. | What changed and where |
| Permission | Allow {user} to view {scope} | Actor, capability and scope |

Do not infer capabilities from the role name alone.
