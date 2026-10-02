# Degenerate’s Advisor v0.8.17 — ParlayAPI Response Mapping Fix

Targeted production fix for the live NFL prop Worker. The official game-market models remain frozen.

The Worker now maps ParlayAPI's documented flat prop rows (`player`, `market_key`, `line`, `over_price`, `under_price`, `home_team`, `away_team`, `canonical_event_id`, `snapshot_time`/`last_update`, `age_seconds`), keeps only DraftKings full-game supported markets, maps the fixture to the dashboard ESPN game ID, and reports rejection counts by gate.

Props remain SHADOW-only and cannot enter official Best Bets.
