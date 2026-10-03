# Degenerate’s Advisor v0.8.25 — Instant Switching, CFB Props & Fast Refresh

Built from validated v0.8.24.

Performance / freshness:
- Sport switching renders the in-memory snapshot immediately, then checks IndexedDB and refreshes only when stale.
- Smart freshness: 2 minutes near kickoff/recent live windows; 10 minutes otherwise.
- Visible-app freshness check every 60 seconds plus immediate check when returning to the app.
- Per-sport request deduplication prevents duplicate refreshes.
- Game markets render before the prop request completes; props no longer block the main card.
- Existing AI analysis remains downstream of the usable deterministic market card.

Props:
- Props workspace now supports NFL and CFB.
- Separate sport-scoped prop caches prevent NFL/CFB contamination.
- CFB Worker route `/cfb-props` uses the provider's NCAAF sport path and ESPN college-football game mapping.
- Same DraftKings-only, paired-side, freshness, TAKE/LEAN/MARKET LEAN/AVOID safeguards as NFL.
- Provider availability is not fabricated: if the deployed provider returns no supported CFB props, the UI reports that state.
- SHADOW props remain excluded from Betslip.

Decision logic:
- v0.8.24 CFB calibration and transparency retained unchanged.
- NFL model remains `football-077-frozen`.
- PGA shadow model retained unchanged.
