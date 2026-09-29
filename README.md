# NFL Market Dashboard V0.6.3.4 — Deterministic AI Contract

This release removes strict JSON generation from the AI model.

- Preserves V0.6.3.2/3 iPhone POST probe and 4-game batching.
- Workers AI returns a simple pipe-delimited line per game.
- The Worker deterministically constructs the JSON consumed by the dashboard.
- Missing or malformed AI rows become PASS instead of failing the slate.
- DraftKings remains the only actionable sportsbook and final market verification stays deterministic.
- Cloudflare Workers AI only; no OpenAI or paid fallback.
- Worker metadata includes parsed row count and a short sanitized raw sample for diagnostics.

Upload all seven files to the GitHub repository root and commit to main.
