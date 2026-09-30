# AI Market Terminal V0.8.4 — PGA Historical Strength

Production deployment package for GitHub Pages / Cloudflare Worker.

## Release focus
- NFL model remains frozen: `football-077-frozen`.
- CFB model remains frozen: `cfb-080-opponent-adjusted-v1`.
- PGA remains SHADOW ONLY and non-actionable.
- Adds an 8-week prior-event discovery pass using the free ESPN PGA scoreboard.
- Matches current-field player IDs against prior leaderboards.
- Builds a deterministic recency-weighted finish-percentile strength score (0–100).
- Displays strength label + historical event sample on PGA Events.
- DraftKings PGA verification is still required before any wager can be actionable.

No paid API or paid fallback was added.
