# Degenerate’s Advisor v0.8.14 — Live NFL Props Data Readiness

Built on v0.8.13 with the official NFL/CFB game-market engine frozen.

## Prop feed hardening
- DraftKings-only prop rows.
- Supported core NFL volume/yardage markets only.
- Requires player ID/name and a matching future NFL game.
- Rejects suspended/unavailable markets.
- Rejects stale prop timestamps older than 15 minutes.
- Rejects timestamps materially in the future.
- Validates OVER/UNDER when a side is supplied.
- Deduplicates identical rows.
- Preserves line, price, side and source timestamp.
- Projects/ranks valid rows in SHADOW only.
- WAITING FOR FEED remains the safe state when the endpoint supplies no prop rows.

## Important
This build does not scrape or fabricate DraftKings player props. The configured market endpoint must supply legitimate DraftKings prop rows. ESPN fallback does not provide them. Props remain excluded from official Best Bets.
