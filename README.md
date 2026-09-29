# AI Market Terminal — V0.7.2 Multi-Sport Production Polish

Production-polish release built directly from the V0.7.1 CFB Production Hardening baseline.

## Highlights
- CFB graduated from Beta in the production UI.
- User-facing NFL/CFB recommendation reasons are sanitized to plain football language; internal quantFair remains available only to the analysis engine.
- Performance adds Overall / NFL / CFB views while preserving sport-tagged ledger records.
- Existing NFL and CFB DraftKings-only, quant, freshness, completed-game, AI-completeness, retry, snapshot and ledger safeguards are retained.
- PGA remains fail-closed / SOON until its free data pipeline passes integrity validation.

Deploy all files in this ZIP to the GitHub Pages repository root, replacing the previous release. Keep V0.7.1 available as rollback until the real iPhone/GitHub/Cloudflare smoke test passes.
