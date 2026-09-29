# NFL Market Dashboard V0.6.4.4 — Production

Built cleanly from the validated V0.6.4.2 baseline.

Fix:
- Removes the V0.6.4.3 startup regression. That build referenced an undefined `APP` object in `renderStatus`, which could stop initial snapshot rendering.

Preserved:
- Validated 16/16 Workers AI parser path.
- DraftKings-only actionable markets.
- Strict BET/LEAN validation and genuine PASS normalization.
- Fallback rows excluded from AI readiness and Best Bets.
- Evidence-disciplined Workers AI prompt and zero-cost architecture.
- Correct opening-line normalization.

Production Best Bet safeguards:
- BET decision only.
- Configured confidence threshold.
- Verified DraftKings market.
- Game must be pre-kickoff.
- Snapshot must be no older than 30 minutes.

The freshness/kickoff checks run only in the recommendation-rendering path where the complete snapshot is already in scope; they cannot block initial snapshot loading.
