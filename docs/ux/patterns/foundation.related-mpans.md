# Related MPANs

An electricity meter point says which way it flows and which MPAN it is paired with. An import MPAN and its export MPAN on the same supply are a pair. The pair works both ways.

## User problem / goal

See that an incoming and an outgoing MPAN belong to one supply, and open the other one, without leaving the list. TMA stores this as related MPANs (gap H6).

## When to use

Any list or detail that shows an electricity meter point and where the direction tells the user something:

- Admin, Companies, a company, Meters
- Portfolio, Meter points fold on a site that exports
- Compare meter points list at meter level, when one of the meter points exports
- Site profile, Meters table
- The meter view sentence
- Downloads with Include meter IDs on: MPAN type and Related MPAN columns

## When not to use

- Lists where no meter point exports. Every row would say In and No related MPAN, which tells the user nothing.
- Grouped totals. A total for a site or group has no single MPAN.
- The Site profile summary card. It keeps its four settings rows. The Meters table below it already shows the pair, so the card would repeat it.

## Anatomy

- **Direction**: a flow pill, In or Out, with its arrow. Gas and water are In.
- **Related MPAN**: the partner's MPAN as a link, then the partner's flow pill.
- Without a partner, muted words say why:
  - No related MPAN: an electricity meter point with no pair
  - Not recorded: a meter point added with no data yet
  - Does not apply: gas and water, which have no MPAN
- In a file, MPAN type keeps TMA's stored words, Import and Export.

## Canonical behaviour

### Do

- Take pairs only from the recorded list. Two MPANs on one site are not a pair just because one exports.
- Make the partner a link when the user can see its site. Otherwise show it as plain text.
- Name the link by its direction, such as "Open outgoing MPAN 1600001234568".
- Light the partner's row in the same list when the user points at or tabs to either row.
- Use the same words on every surface and in files.

### Don't

- Leave Related MPAN blank. Say why there is none.
- Use Import and Export on screen. Users read In and Out on the graphs, so the list matches them.
- Add the columns to a list where no meter point exports.
- Repeat the pair in a summary that sits above a table already showing it.

### Why

The pair is one supply, so a user checking export against import needs to find the other half at once. One set of words everywhere stops a file and a screen disagreeing.

## Accessibility

The link has its own accessible name with the direction and the MPAN. The highlight follows focus as well as the pointer. The pill has text, so colour and arrow are not the only signal.

## Product surfaces using it

Admin company Meters. Portfolio Meter points fold. Compare meter points list. Site profile Meters table. Meter view. Data downloads and register reads.

## Evidence

- TMA gap H6, related import and export MPANs, approved as planned by the user on 2026-10-20.
- UX polish on 2026-10-20: the Site profile column is headed Direction, and gas and water show In on Admin Meters.
- User correction on 2026-10-20: the Site profile summary card had too much going on. Direction and Related MPAN came out of it, back to its four rows, as the Meters table below shows them.

## Related patterns / decisions

- [Complete lists](foundation.complete-lists.md)
- [Table in a fold](foundation.table-in-fold.md)
