# Degenerate’s Advisor v0.8.16 — Prop Worker Integration

## What changed
- The existing Cloudflare AI Worker now also exposes `GET /nfl-props`.
- The dashboard defaults its NFL prop endpoint to the existing Worker URL + `/nfl-props`; no second Worker URL is required.
- The Worker requests DraftKings-only NFL props from a provider adapter, limited to supported full-game markets and max age 900 seconds.
- Provider matchups are mapped to the ESPN game IDs used by the dashboard.
- Both OVER and UNDER can coexist at the same line/price; v8.15's side-blind dedupe bug is fixed.
- Shadow edge math is now side-aware (OVER = projection-line; UNDER = line-projection).
- Official NFL/CFB game models remain frozen. Props remain SHADOW-only.

## Required one-time setup
The bundled Worker expects a Cloudflare secret named `PROP_API_KEY`. The default adapter targets ParlayAPI's NFL props endpoint. Create your own provider key and store it as a Worker secret; never put it in the GitHub Pages frontend.

If the secret is missing, `/nfl-props` returns a clear configuration error while game markets and AI remain unaffected.
