# Degenerate’s Advisor v0.8.13 — NFL Prop Pipeline

## Added
- End-to-end NFL prop payload pipeline: ingest → normalize → game/player validation → dedupe → shadow projection → shadow ranking → UI.
- Accepts prop arrays from `nflProps`, `playerProps`, or `props` on the configured market endpoint payload.
- DraftKings-only and supported-market validation from v8.12 remains enforced.
- Displays up to eight strongest shadow rows with line, price, projection and edge.
- Explicit WAITING FOR FEED / NO VALID PROPS / LIVE SHADOW states.
- One automatic AI retry for partial game analysis, then retains the manual Retry AI option.

## Safety
NFL props remain SHADOW and cannot enter official Best Bets. All official game-market model functions remain frozen.

## Data-source limitation
The existing ESPN fallback supplies game schedules/odds, not DraftKings player-prop rows. Live prop cards therefore require the configured market endpoint to include real DraftKings prop rows. The dashboard will say WAITING FOR FEED rather than fabricate props when none are supplied.
