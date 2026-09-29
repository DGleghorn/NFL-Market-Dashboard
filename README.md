# AI Market Terminal V0.7.1 — CFB Production Hardening

Build: `071-CF-20260929`

This release hardens the working V0.7.0 multi-sport foundation without redesigning the validated mobile UI.

## Changes
- CFB DraftKings coverage now identifies the exact matchup(s) without a verified DK market.
- Action-card CFB reasons use plain football language; raw analyst detail remains available under analysis/developer views.
- Playable thresholds are conservatively normalized to sportsbook half-points.
- College team/market abbreviation parsing accepts 2–6 alphanumeric aliases.
- Worker/dashboard analyst contract advanced to `dcc-chief-analyst-cf-v6.1`.
- NFL behavior and PGA fail-closed foundation are preserved.

## Deployment
Upload the eight release files in this ZIP to the GitHub repository root, replacing the existing versions. Keep V0.7.0 available as the rollback package until the production iPhone smoke test passes.

See `VALIDATION.txt` for the sandbox release gate.
