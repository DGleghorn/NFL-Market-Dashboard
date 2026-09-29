# NFL Market Dashboard V0.6.5.1 — Intelligence Integrity

Built from V0.6.5.0 after the real 14/16 Intelligence Layer run.

Fixes:
- Raises first-pass response headroom and forces concise one-row-per-game output.
- Deterministically maps a returned team abbreviation (for example BUF/KC) to HOME/AWAY when it exactly matches the supplied game.
- If a batch still omits rows, the Worker retries only the missing GAME_IDs once.
- Defines FAIR_LINE for the selected wager side and verifies EDGE math deterministically.
- Actionable rows with missing/inconsistent fair-line math are safely normalized to PASS; they can never become Best Bets.
- Preserves DraftKings-only verification, 30-minute freshness, pre-kickoff gating, PASS handling, prior-game intelligence, and zero-cost Workers AI architecture.
