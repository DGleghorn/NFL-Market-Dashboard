# AI Market Terminal V0.7.0 — Multi-Sport Foundation

Build: **070-CF**

## What changed
- Added sport selector: **NFL / CFB / PGA**.
- NFL V0.6.7 behavior is preserved as the production baseline inside the multi-sport shell.
- CFB BETA adds ESPN college-football slate retrieval, DraftKings market verification, prior-game context, quant verification, Workers AI analysis, and TAKE / LEAN / WATCH / PASS Action Cards.
- PGA foundation is visible but intentionally non-actionable until a verified zero-cost data pipeline is ready.
- Sport selection persists across launches.
- Snapshots and ledger/performance views are isolated by sport; legacy records remain NFL.
- Retains the cleaner CURRENT / MAX PLAY / MIN PLAY / PLAY TO presentation.

## Deploy
Upload all files in this ZIP to the GitHub repository root, replacing the prior deployment files. GitHub/Cloudflare should deploy from the same existing configuration.

## First smoke test
1. Confirm header reads `V0.7.0 · Multi-Sport Foundation · BUILD 070-CF`.
2. Confirm NFL still loads and behaves like V0.6.7.
3. Tap CFB and allow the first college-football pull/AI run to finish.
4. Confirm the CFB slate is labeled BETA and only DraftKings-verified numbers can become TAKE.
5. Tap PGA and confirm it shows the guarded foundation state with no fabricated picks.
6. Switch back to NFL and confirm the NFL snapshot/performance view is restored separately.

See `VALIDATION.txt` for the sandbox release gate and external-test caveats.
