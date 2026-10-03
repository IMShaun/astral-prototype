# Experience measures

KEIs and Experience Scores with maturity. Empty until measured. A small qualitative round is directional only.

The Analytics tab under Research on the Work Desk reads `keis.json`.

- `how` is the measurement taxonomy (families, kinds, leading or lagging). It can sit while `keis` is empty.
- `structure` is product-wide vs area, and primary vs diagnostic.
- `cuts` is how a later slice works (area, task, test type, named role, time).
- `keis` are named scores. Do not invent a score, a target, or a trend to fill the chart.

Each named KEI needs `id`, `team`, `name`, `feature`, `question`, `dimension`, `maturity`, `unit`, `higherIsBetter`, `red`, `target`, `note`, `from`, and `rounds`.

Optional fields when a study names them: `scope` (`product` or `area`), `role` (`primary` or `diagnostic`), `area` (an Astral surface such as `portfolio`, `alerts`, `queries`, `reports`, `users`, or `finance`).

`dimension` must be one of the `how` ids: `effectiveness`, `ease`, `efficiency`, `confidence`, `usefulness`, `satisfaction`, `engagement`, `operational`, `accessibility`.

`maturity` is `no-baseline`, `provisional`, `benchmarked`, `tracking`, or `stale`.

A round needs `id`, `label`, `date`, `value`, `sample`, `method`, `study`, and `directional`. Two comparable rounds make a trend. Provisional rounds stay directional. They do not announce a precise lift. Report the sample. Do not invent a confidence band.

Method lives in `.cursor/skills/ux-research/references/experience-metrics.md`. A KEI is a score of something specific, important, and actionable. Lab, live, survey, and support stay separate. Industry benchmarks are not IMSERV targets.
