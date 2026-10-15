# D.I.L.D.O. v0.8.47.1 — NBA Schedule Hotfix

Upload all seven files to the ROOT of NFL-Market-Dashboard GitHub Pages repository.

Fixes ESPN NBA schedule HTTP 400 from unsupported multi-day date-range requests by querying individual dates. Limits concurrency to two requests, caches successful results daily, and shows a partial-feed warning when some dates fail. Seven requests per day maximum during the normal daily refresh; manual refresh can issue seven more. NBA remains SHADOW; no NBA picks or props. No Cloudflare Worker change.

Validation: JavaScript syntax, package integrity, and protected betting-function equality checked. Live ESPN response and iOS behavior not verified.
