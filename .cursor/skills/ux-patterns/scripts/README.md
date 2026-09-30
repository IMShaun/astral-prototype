# Optional scanners

Run a script. Do not treat this folder as prose.

```
node .cursor/skills/ux-patterns/scripts/check-library.mjs
```

`--json` prints the same inventory as JSON.

The library check lists named pieces, builders, and drift. It does not delete a duplicate. Details: [../references/library-check.md](../references/library-check.md).

Possible later scripts, only after the Skill discovers a repeatable analysis

- Figma extract, when they ask to connect Figma
- Storybook export
- visual snapshot CI
- terminology consistency scanner
- pattern-doc link checker

Do not introduce new packages without approval.
