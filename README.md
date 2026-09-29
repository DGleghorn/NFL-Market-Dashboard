# NFL Market Dashboard V0.6.5.0 — Intelligence Layer

Built from the validated V0.6.4.4 production baseline.

New deterministic intelligence:
- Pulls up to three prior completed regular-season weeks from ESPN's public scoreboard.
- Computes each team's games, W-L-T, average points for, average points against, average scoring margin, last game, and rest days.
- Supplies that context to Workers AI as descriptive evidence, explicitly not as a projection.
- Supplies genuine local DraftKings snapshot movement when available.
- Injuries and weather remain explicitly unavailable unless a reliable source is added later; the AI is forbidden to invent them.
- Game Detail exposes the intelligence packet so recommendations are auditable.

Preserved:
- DraftKings-only actionable sportsbook.
- 16/16 validated line-protocol parser and PASS normalization.
- Strict BET/LEAN validation, fallback exclusion, pre-kickoff and <=30-minute Best Bet safeguards.
- Persistent local snapshots/ledger/CLV architecture.
- Zero-cost Workers AI with no paid fallback.
