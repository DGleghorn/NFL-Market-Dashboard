D.I.L.D.O. v0.8.84 — Evidence Pipeline / Model Health
Research-only; NOT approved for real-money wagering recommendations.

Deploy the seven files at the root of the GitHub Pages repository. Confirm v0.8.84.

New:
- Future NBA research ledger rows require a valid season classification from the game, stored in the projection snapshot at capture time. Missing or contradictory season classification prevents new capture. Existing rows are not rewritten.
- NFL/CFB coverage capture reports last attempt in session storage: SAVED, SAVE_FAILED, or NO_NEW_ELIGIBLE_PREGAME_ROWS. The capture report is diagnostic and not an independently verified pregame audit.
- More > Evidence Pipeline shows collection health and JSON export; legacy integrity report remains, with long record IDs moved to its export.
- Known older panels grouped under Advanced audits and exports where IDs match. All existing controls remain in DOM.
- Model and settlement functions unchanged. No historical version, season, or sportsbook prices fabricated.

Known limitations: 14 old NBA scored records still lack season metadata; 12 old legacy records still lack model version; football qualifying journal may be empty; independent DraftKings prices, holdout, and live iPhone tests remain unverified.
