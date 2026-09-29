# NFL Market Dashboard V0.6.4.2 — PASS Normalization

Narrow parser hotfix based on the observed V0.6.4.1 Gemma output.

- Accepts `GAME_ID | PASS | N/A | N/A | 0 | ...` as a genuine PASS.
- PASS requires a known game ID, decision PASS, and confidence exactly 0.
- MARKET/SIDE and optional analysis fields may be N/A for PASS.
- BET/LEAN remain strict: SPREAD/TOTAL required, with HOME/AWAY or OVER/UNDER as appropriate.
- Workers AI extraction, model, evidence discipline, batching, DraftKings verification, opening-line normalization, and fallback protection are unchanged.
