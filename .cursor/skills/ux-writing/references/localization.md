# Localization

Design every string for translation. Locale for source copy is en-GB-oxendict.

| Consideration | Skill rule | QA check |
| --- | --- | --- |
| Idioms or slang | Do not use by default | Would a literal translation make sense? |
| Cultural references | Prefer culturally neutral examples | Review names, metaphors, imagery and humour |
| Acronyms | Spell out first use unless demonstrably established | Translator receives expansion and context |
| String concatenation | Generate complete semantic messages | No "You have " + count + " reports" |
| Variables | Use named placeholders | Provide a translator comment for each variable |
| Pluralization | Use localization plural rules | Test zero, one, other and locale-specific categories |
| Dates | Store a structured date. Format by locale | Do not bake 09/10/26 into translated prose |
| Numbers or currency | Format using locale-aware APIs | Test decimal, grouping and currency placement |
| Names or addresses | Do not assume Western ordering or structure | Test target-market formats |
| Expansion | Design for wrapping and longer translations | Run pseudolocalization |
| RTL | Support explicit direction and mirrored layouts where appropriate | Test Arabic or Hebrew-style UI direction |
| Spatial language | Avoid left, right or above when a label works | Instructions survive mirrored layouts |

Do not reuse one source string for different meanings.
Externalize user-facing strings.
Do not reverse an English string to fake RTL.
Prefer named placeholders such as `{company}` and `{date}`, not `%s` or `{0}`, in skill output.

CSV from this walk stays UTC. Local time waits as a preference, a table option, or a report setting. Daylight saving can show the same local clock twice. Keep both rows. Do not write that as a baked clock in a translated sentence.
