# D.I.L.D.O. v0.8.49 — NBA Model Intelligence (SHADOW)

Seven-file GitHub Pages deployment. Upload the contents to the root of NFL-Market-Dashboard.

- NBA research cards use the same MARKET / OUR NUMBER / DECISION structure as other sports.
- Separates preseason, regular season, and playoffs; never pools their scores.
- Opponent-adjusted scoring estimates with shrinkage and conservative minimum sample gates.
- Explicit model-health sample counts and MAE from stored pregame shadow forecasts.
- No NBA official wagers or BetSlip entries. DraftKings prices are displayed only when provider is identified.
- Existing football/PGA model code and Cloudflare Worker are unchanged.

Known limitations: scoreboard history is limited to the sampled date range, so early regular-season games may have no projection. NBA research has no injury, pace, or lineup inputs yet. Browser storage holds shadow forecasts.
