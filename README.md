# NFL Market Dashboard V0.6.5.3.1 — Action Card Hotfix

Focused production hotfix for the V0.6.5.3 startup regression.

## Fixed
- Restores missing Action Card runtime helpers that caused the UI to remain at `Waiting for snapshot… / CHECKING`.
- Restores the last valid snapshot immediately on launch, then automatically refreshes the market.
- If refresh fails, keeps the last valid snapshot visible with an explicit error instead of hanging.
- If the current regular-season slate is complete, scans forward to the next available regular-season week.
- Corrects service-worker/cache version references so the hotfix assets are not mixed with V0.6.5.2/V0.6.5.3.

## Preserved
- TAKE / LEAN / WATCH / PASS Action Card UI.
- DraftKings-only actionable bets.
- Deterministic fair-line and minimum-edge verification.
- Pregame and freshness safeguards.
- Workers AI zero-cost architecture.
- Performance, ledger, snapshots, and Developer Mode.

Upload all root files to the GitHub Pages repository, replacing the prior files. The expected header is:

`V0.6.5.3.1 · Action Card Hotfix · BUILD 06531-CF`

See `VALIDATION.txt` for the release gate and environment limitations.
