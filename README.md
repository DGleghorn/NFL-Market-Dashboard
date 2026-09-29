# AI Market Terminal — V0.7.6 Runtime + Decision Integrity

Built from the last known-good V0.7.3 production baseline.

## Release purpose
- Restores the stable V0.7.3 runtime path; none of the V0.7.4/V0.7.5 startup-regression code was used as the baseline.
- Makes official football classification deterministic from the verified DraftKings snapshot + pregame team context.
- Workers AI supplies explanation/risk context but cannot promote a wager into TAKE.
- Adds a decision fingerprint so identical market/context inputs produce the same auditable recommendation identity; market/context changes produce a new fingerprint.
- Applies sample-size shrinkage to the recent-scoring fair estimate before measuring edge, reducing overreaction to small early-season samples.
- Keeps immutable TAKE history and 1-unit settlement.
- Performance ROI uses actual units risked. Average American odds is replaced by average entry implied probability.
- CLV is intentionally left unavailable unless a verified pre-kickoff DraftKings close exists; postgame market data is never mislabeled as closing CLV.
- PGA remains fail-closed.

## Decision tiers
TAKE: deterministic edge >= required edge.
LEAN: deterministic edge >= 50% of required edge.
WATCH: positive deterministic edge below LEAN threshold.
PASS: no positive verified deterministic edge or no usable verified market/model input.

The AI analyst can explain or challenge the deterministic output, but does not own the official tier.

See VALIDATION.txt for sandbox test results and limitations.
