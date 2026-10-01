# Degenerate’s Advisor — V0.8.7 Turf Production UI

Production UI/branding release built directly from validated V0.8.6 Analysis Consistency.

## What changed
- Renamed the app to **Degenerate’s Advisor**.
- Introduced a restrained grass/turf visual system with cream decision cards and green/gold status accents.
- Simplified Today navigation and user-facing labels: Today’s Card, Leans, Watch List, Stay Off, The Read.
- Increased Decision Card hierarchy and reduced mobile density.
- Kept PASS/Stay Off visually quiet and developer diagnostics behind Developer Mode.
- Updated PWA metadata, cache fingerprint, and mobile theme color.

## Model policy
No intentional NFL, CFB, PGA, classification, threshold, pricing, settlement, or ledger logic changes were made in this release. Model constants remain frozen from V0.8.6.

# Degenerate’s Advisor V0.8.7 — Analysis Consistency

Production UI refinement built directly from V0.8.5.

- NFL model remains frozen (`football-077-frozen`).
- CFB model remains frozen (`cfb-080-opponent-adjusted-v1`).
- PGA historical-strength shadow engine remains unchanged (`pga-084-historical-strength-shadow-v1`).
- Visible NFL/CFB cards now use casual language consistently: `Our number`, `points of room`, and `current gap` replace internal edge/threshold jargon.
- LEAN cards describe the better-number requirement without exposing threshold mechanics.
- PGA event tables use a plain-language `Recent read` column while preserving the same historical-strength calculation underneath.
- Developer diagnostics retain model/audit detail.
- PGA remains fail-closed: no verified DraftKings golf market means no actionable golf wager.
