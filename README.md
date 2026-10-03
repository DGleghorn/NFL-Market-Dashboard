# Degenerate’s Advisor v0.8.31 — Production Finalization

Built from v0.8.30 after live iPhone testing confirmed sport-state integrity was working but exposed a prolonged 14/16 AI partial-completion state.

## Production finalization
- AI batches still receive one bounded retry inside the existing batch pipeline.
- The redundant second full-slate automatic AI retry has been removed.
- Missing AI rows after the bounded retry are explicitly finalized as AI-context unavailable, never fabricated analysis.
- Deterministic game classification remains authoritative for every game, including rows without AI context.
- Terminal status distinguishes real AI rows from deterministic-only rows (for example, 14/16 AI + 2 deterministic-only).
- A complete AI outage can still finalize the deterministic slate without pretending AI reviewed the games.
- v0.8.30 sport/page/generation ownership remains intact.
- v0.8.29 Props circuit breaker and graceful provider-outage behavior remain intact.
- Diagnostics build fingerprint is corrected for v0.8.31.

## Frozen recommendation logic
No recommendation mathematics changed. `quantFair`, `verifiedQuantEdge`, `deterministicCandidate`, `deterministicClass`, `deterministicSlate`, `playableLine`, `settleRecord`, and `pgaHistoricalStrength` are byte-identical to v0.8.30. The v0.8.24 CFB calibration and frozen NFL/PGA model versions are retained.
