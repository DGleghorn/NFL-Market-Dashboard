# AI Market Terminal V0.8.2 — PGA Event Intelligence

Production package for GitHub Pages + Cloudflare Worker.

## V0.8.2
- NFL decision model remains frozen (`football-077-frozen`).
- CFB opponent-adjusted model remains unchanged (`cfb-080-opponent-adjusted-v1`).
- PGA shadow pipeline now enriches tournament discovery with the free ESPN leaderboard feed when available.
- PGA Events view shows tournament status, venue/location, observed field count and up to 20 leaderboard/player rows.
- PGA bottom navigation now reliably changes Games → Events with a golf icon.
- PGA remains fail-closed: no TAKE/LEAN/WATCH, no AI wagering, no ledger writes, and no DraftKings substitution.
- $0 operating-cost architecture preserved.

See VALIDATION.txt for release-gate results and limitations.
