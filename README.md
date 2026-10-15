# D.I.L.D.O. v0.8.47 — NBA Shadow Foundation

Upload all seven files to the ROOT of NFL-Market-Dashboard GitHub Pages repository.

NBA tab adds upcoming games from ESPN public NBA schedule and only displays odds where ESPN explicitly identifies DraftKings. A missing line is marked Unavailable; no estimates or picks are fabricated. NBA has no model, official bets, or props in this release. A local daily schedule cache limits requests, and Refresh NBA Games fetches on demand. Provider coverage is not guaranteed and should be assessed before building an NBA model. NFL and CFB models are unchanged. The Cloudflare worker file is retained without changes.

Release validation: syntax and protected-function equality; live ESPN/DraftKings and iOS Orion behavior not verified.
