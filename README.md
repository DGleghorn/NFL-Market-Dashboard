# NFL Market Dashboard V0.6.3.1 — Zero-Cost AI Hotfix

Drop-in GitHub root deployment. $0 ongoing AI architecture.

## Fixes
- Hardened Safari/iOS POST + CORS behavior.
- Production Worker endpoint is now the default.
- 45-second client timeout with explicit NETWORK/CORS, AI_TIMEOUT, WORKER, and AI_PARSE diagnostics.
- Smaller Workers AI request and response budget to reduce latency/free inference usage.
- Worker request IDs and inference timing.
- No OpenAI dependency and no paid AI fallback.
- DraftKings remains the only actionable sportsbook; deterministic verification remains authoritative.

## Deploy
Upload/replace all files in this package at the GitHub repository root and commit to main. Cloudflare Git deployment uses `wrangler.jsonc` and `ai-analyst-worker.js`.

After Cloudflare succeeds, open `https://nfl-market-dashboard.daltongleghorn03.workers.dev/?diagnostic=1`, then open GitHub Pages and confirm `V0.6.3.1 · Zero-Cost AI Hotfix · BUILD 0631-CF`. Run Pull & Analyze once.
