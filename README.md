# NFL Market Dashboard — V0.6.1 Production Foundation

Current production candidate. Upload the root runtime files to GitHub Pages and deploy `backend/openai-analyst-worker.js` as a Cloudflare Worker.

## P0 fixes included
- Secure AI endpoint health check (`GET`) and in-app **Test AI Connection** button.
- AI can choose only game + market type + side. The frontend deterministically selects and verifies the DraftKings line/price from the supplied market snapshot; other books are context only.
- Best Bets now contains only verified `BET` decisions at/above the configured confidence floor. `LEAN` is never promoted as a Best Bet.
- Structured wagers; settlement no longer guesses the away team when parsing fails.
- Market snapshots and AI analyses are no longer saved as duplicate market snapshots.
- Service-worker cache bumped to V0.6.1 and old caches are removed on activation.
- Diagnostics no longer make the misleading local-storage secret-name claim.

## P1 foundation included
- Ledger records app/model/prompt/schema versions, immutable pregame snapshot context, exact book/line/price and structured market side.
- Training export separates **pre-game features** from **post-game labels** to reduce outcome leakage.
- CLV field is calculated when a closing market is available at settlement. For rigorous CLV, continue collecting pre-kickoff snapshots; the last valid pre-kickoff snapshot should be treated as the canonical close in a future server-backed release.
- Confidence-bucket performance remains available.

## AI setup
1. Deploy `backend/openai-analyst-worker.js` to Cloudflare Workers.
2. Add Worker secret `OPENAI_API_KEY`.
3. Optional: add `AI_SHARED_SECRET` and enter the same value in dashboard Settings.
4. Copy the Worker URL into **Settings → AI analyst endpoint**.
5. Tap **Test AI Connection**. It should show CONNECTED and confirm the OpenAI key is configured.
6. Tap **Save & Pull** / **Pull & Analyze**.

Do not place an OpenAI API key in GitHub Pages or any client-side file.

## Canonical repo runtime
Keep: `index.html`, `manifest.json`, `sw.js`, `icon.png`, `README.md`, `backend/`.
Remove legacy V0.2 runtime files such as `app.js` and `styles.css` after V0.6 is deployed; V0.6 does not reference them.


## DraftKings-only execution
V0.6.1 treats DraftKings as the only actionable sportsbook. AI recommendations are promoted only when a verified DraftKings line/price exists. Other sportsbook data may remain in the snapshot solely for market-consensus context. Ledger and CLV records use DraftKings.


## iPhone flat deployment
All six files in this package belong in the repository root. Expected dashboard marker: V0.6.1. Actionable sportsbook: DraftKings only.
