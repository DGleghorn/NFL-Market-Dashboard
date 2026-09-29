# NFL Market Dashboard V0.6.3 — Zero-Cost AI

Production target: $0 ongoing operating cost for a single-user dashboard.

## Deploy to GitHub
Upload/replace these files in the repository root:
- index.html
- manifest.json
- sw.js
- icon.png
- ai-analyst-worker.js
- wrangler.jsonc
- README.md

Delete the old `openai-analyst-worker.js` after the new deployment is confirmed. The new Wrangler config points to `ai-analyst-worker.js`.

## Cloudflare
Git integration should deploy automatically from `main`. `wrangler.jsonc` creates the Workers AI binding named `AI`; no OpenAI API key is required.

Worker model: `@cf/google/gemma-4-26b-a4b-it`.
There is no paid-provider fallback. If Workers AI's free allowance/capacity is unavailable, the Worker returns an error and the dashboard continues with market data without manufacturing AI bets.

## Test
1. Wait for Cloudflare deployment success.
2. Open `https://nfl-market-dashboard.daltongleghorn03.workers.dev/?diagnostic=1`.
3. Expect `ok:true`, `provider:"Cloudflare Workers AI"`, and `zeroCost`/no-paid-fallback metadata.
4. Open the GitHub Pages dashboard, confirm V0.6.3 / BUILD 063-CF.
5. Settings: keep the same Worker endpoint. Test AI Connection, then Pull & Analyze.

DraftKings remains the only actionable sportsbook. AI never selects or fabricates the final executable line/price; client-side deterministic verification remains authoritative.
