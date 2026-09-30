# AI Market Terminal V0.8.3 — PGA Form Intelligence

Production package for GitHub Pages + Cloudflare Worker.

## Release focus
- NFL model remains frozen (`football-077-frozen`).
- CFB opponent-adjusted model is now formally frozen for observation (`cfb-080-opponent-adjusted-v1`).
- PGA shadow mode enriches the live event/leaderboard feed with ESPN player round summaries for up to 12 observed leaders.
- PGA observations persist locally across refreshes/events to begin a zero-cost shadow history.
- PGA remains non-actionable: DraftKings golf markets are not verified, no TAKE/LEAN/WATCH/PASS is generated, and nothing enters the betting ledger.

Deploy all 8 files to the repository root.
