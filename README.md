# D.I.L.D.O. v0.8.50.1.1 — NBA Layout + Sample Diagnostics

Seven-file GitHub Pages deployment. Upload all seven extracted files to the root of `NFL-Market-Dashboard`.

Changes since v0.8.49:
- Fix overlapping mobile navigation: header and sport selector now scroll naturally instead of obscuring content.
- Remove forced scroll-to-NBA-panel behavior when switching sports.
- Show per-team same-season completed-game sample counts and the specific reason a projection is withheld.
- Clearly label the limited 10-day-back/6-day-forward NBA research window; this is **not** full-season history.
- Preserve NBA MARKET / OUR NUMBER / DECISION cards, season isolation, model math, DraftKings-only labeling, and SHADOW / NO BET status.
- Update version, service-worker cache, and PWA manifest references.

NBA research limitations: no prior-season historical database, injuries, confirmed lineups, or possession-level pace/efficiency. NBA bets remain excluded from the official Betslip. The ESPN feed and mobile browser require live testing.

All eight protected football/PGA model functions are byte-identical to v0.8.49. Cloudflare Worker file unchanged.

### v0.8.50.1
- Removed sticky positioning from topbar and sport selector using final cascade overrides.
- Added NBA research evidence confidence (%) to game cards when projections exist. Not a win probability. Missing projections show unavailable rather than fabricated percentages.
- No changes to NBA projection calculations or NFL/CFB betting math.
