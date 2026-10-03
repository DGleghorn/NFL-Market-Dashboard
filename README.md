# Degenerate’s Advisor v0.8.24 — CFB Calibration & Transparency

Production-candidate build based on final v0.8.23.

CFB-only model change:
- Keeps existing PLAY/LEAN/WATCH thresholds.
- Reduces the double-conservatism identified in v0.8.23 by increasing the independent-model reliability weight only for CFB.
- Opponent-adjusted CFB samples scale from 42% toward a 60% cap as sample size grows.
- Non-opponent-adjusted fallback remains more conservative, capped at 42%.
- Adds a per-game CFB decision trace: raw fair → reliability → adjusted fair → final edge → exact classification gate.

Preserved:
- NFL model `football-077-frozen`.
- PGA model `pga-084-historical-strength-shadow-v1`.
- v0.8.23 hardened NFL Props pipeline and stale-cache protection.
- Existing CFB PLAY thresholds: 2.5 spread / 3.0 total.
- Betslip eligibility remains TAKE-only; SHADOW props remain excluded.

No target number of CFB bets is enforced. A game still has to clear the same final threshold.
