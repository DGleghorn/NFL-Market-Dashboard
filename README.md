# NFL Market Dashboard V0.6.4.1 — PASS Parser Hotfix

Narrow hotfix on V0.6.4.0:
- Accepts `N/A` side/fair-line/edge/risk fields for PASS rows.
- PASS confidence is normalized to 0.
- BET/LEAN still require HOME/AWAY for spreads and OVER/UNDER for totals.
- Keeps exactly one normalized decision per game.
- Leaves Workers AI extraction, model, batching, DraftKings verification, evidence discipline, and opening-line normalization unchanged.
- Fallback rows remain excluded from AI readiness and Best Bets.
