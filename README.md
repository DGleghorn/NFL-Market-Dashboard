D.I.L.D.O. v0.8.60 — NBA Season-Specific Model Health + Football Audit Continuity

Upload the seven files in this ZIP to the root of the NFL-Market-Dashboard GitHub Pages repository.

Changes:
- NBA model-health report now displays forecast MAE separately for REGULAR, PRESEASON and PLAYOFFS, avoiding the misleading appearance that preseason validation establishes regular-season accuracy.
- Explicit zero-regular-season validation notice and improved cold-start explanation.
- NBA forecast settlement additionally verifies matching teams and season type; protects against cross-season or mismatched score records.
- Saved NBA snapshots explicitly label their DK markets as not current-verified.
- Football recommendation coverage journal and audit retained.
- NFL/CFB model calculations and all eight protected functions unchanged. NBA remains SHADOW / NO BET.

Limitations: Does not import prior-year regular-season statistics, establish a validated betting edge, or guarantee data-provider availability. Live iPhone, ESPN, and DraftKings integrations were not exercised in sandbox.
