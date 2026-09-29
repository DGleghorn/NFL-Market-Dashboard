# NFL Market Dashboard V0.6.3.2 — Zero-Cost AI Batch Fix

Production hotfix for iPhone/Safari AI transport reliability.

- $0 architecture: Cloudflare Workers AI only; no OpenAI or paid fallback.
- DraftKings remains the only actionable sportsbook.
- Adds a tiny POST-route probe before inference.
- Sends AI work in batches of at most 4 games.
- Uses text/plain POST bodies to avoid unnecessary CORS preflight on the normal route.
- Caps each AI batch output at 650 tokens.
- Reports transport, timeout, Worker, inference, and parse failures separately.
- Market data remains usable when AI is unavailable.

Upload all files to the GitHub repository root and commit to main. Cloudflare should deploy ai-analyst-worker.js using wrangler.jsonc.
