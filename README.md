# NFL Market Dashboard V0.5.1 — AI Analyst Worker

Deploy `openai-analyst-worker.js` as a server-side worker. Keep `OPENAI_API_KEY` and optional `AI_SHARED_SECRET` as server secrets; never put them in GitHub Pages.

The frontend sends a market snapshot and receives structured BET/LEAN/PASS decisions. V0.5.1 additionally records every qualifying AI decision locally, supports postgame settlement, and exports the ledger/training dataset.

## Required secrets
- `OPENAI_API_KEY`
- Optional: `AI_SHARED_SECRET`

## Frontend setup
Set **AI analyst endpoint** to the worker URL. If `AI_SHARED_SECRET` is configured, enter the same value in **AI shared secret**.

## Important
The worker does not store the user's betting ledger. The ledger is stored locally in the dashboard's browser IndexedDB/localStorage. Use **Export Ledger** and **Export Training Data** to create durable backups.
