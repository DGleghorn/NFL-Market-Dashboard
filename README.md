# AI Market Terminal V0.8.1 — PGA Shadow Data Foundation

Production package for GitHub Pages + Cloudflare Worker.

## V0.8.1
- NFL decision engine remains frozen (`football-077-frozen`).
- CFB opponent-adjusted engine remains frozen at the V0.8.0 formula (`cfb-080-opponent-adjusted-v1`).
- Adds a $0-cost PGA shadow tournament-discovery layer using ESPN's public PGA scoreboard feed.
- PGA Events can display detected tournament status, venue, observed field/leaderboard rows, and observed leaders when supplied by the feed.
- PGA remains strictly non-actionable: no TAKE/LEAN/WATCH/PASS recommendations, no AI betting analysis, no ledger writes, and no fabricated DraftKings markets.
- Adds PGA model/data identity `pga-081-shadow-data-v1` for future shadow-history compatibility.
- CFB short-card wording now correctly identifies opponent-adjusted results.

Deploy all 8 files to the repository root. Keep the existing Cloudflare Workers AI binding.
