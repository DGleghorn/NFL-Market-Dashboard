# D.I.L.D.O. v0.8.48 — NBA SHADOW Research Engine

Upload the seven files in this ZIP to the root of **NFL-Market-Dashboard** GitHub Pages.

NBA research now uses up to 10 preceding calendar days of ESPN final scores to compute a deliberately simple, sample-shrunk team scoring baseline. It displays experimental score/total estimates only where enough completed games exist. **It is not a pace-adjusted or injury-adjusted model and does not produce NBA picks or bets.** Future games are stored in a local immutable shadow ledger and graded when final scores are subsequently retrieved; MAE is displayed only for settled forecasts. ESPN odds are shown only when DraftKings is explicitly named. Daily cache limits repeated API calls; manual Refresh NBA Games fetches new data (up to 17 daily ESPN scoreboard requests). Partial failures are reported.

NFL/CFB frozen model math, PGA SHADOW, official Betslip and Cloudflare Worker are unchanged. Live ESPN availability, Orion performance, and NBA forecasting quality require real-world validation.
