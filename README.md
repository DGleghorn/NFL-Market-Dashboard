# NFL Market Dashboard V0.6.6 — Production Action Card

Production milestone consolidating the Action Card UX, Matchup Clarity, automatic upcoming-slate selection, deterministic DraftKings/quant verification, and resilient zero-cost Workers AI transport.

## AI reliability changes
- First attempt allows up to 45 seconds per 4-game batch.
- A failed/timed-out batch is retried once with up to 60 seconds.
- Successful batches are preserved while only failed batches retry.
- If a batch still fails, market data remains usable and partial AI output is explicitly non-actionable.
- `Retry AI only` reruns AI against the current DraftKings snapshot without repulling market data.
- Failure state exits ANALYZING and displays MARKET READY / AI RETRY NEEDED.

Expected header: `V0.6.6 · Production Action Card · BUILD 066-CF`
