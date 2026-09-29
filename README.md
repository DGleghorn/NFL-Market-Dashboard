# AI Market Terminal — V0.7.7 Football Production Certification

Built from the last known-good V0.7.3 production baseline.

## Release purpose
- Restores the stable V0.7.3 runtime path; none of the V0.7.4/V0.7.5 startup-regression code was used as the baseline.
- Makes official football classification deterministic from the verified DraftKings snapshot + pregame team context.
- Workers AI supplies explanation/risk context but cannot promote a wager into TAKE.
- Adds a decision fingerprint so identical market/context inputs produce the same auditable recommendation identity; market/context changes produce a new fingerprint.
- Tightens football guardrails: NFL uses stronger minimum edges than 7.6, while CFB is deliberately more market-anchored and requires larger edges because the free context is not yet opponent-strength adjusted.
- Adds a noise floor: tiny positive model differences now remain PASS instead of forcing every game into WATCH/LEAN/TAKE.
- Prevents invalid Workers AI edge-math diagnostics from leaking into user-facing TAKE risk text.
- Rewords the healthy-state banner to distinguish AI context review from the deterministic official classifications.
- Keeps immutable TAKE history and 1-unit settlement.
- Performance ROI uses actual units risked. Average American odds is replaced by average entry implied probability.
- CLV is intentionally left unavailable unless a verified pre-kickoff DraftKings close exists; postgame market data is never mislabeled as closing CLV.
- PGA remains fail-closed.

## Decision tiers
TAKE: deterministic edge >= required edge.
LEAN: deterministic edge >= 60% of required edge.
WATCH: deterministic edge >= 30% of required edge.
PASS: below the noise floor, or no usable verified market/model input.

The AI analyst can explain or challenge the deterministic output, but does not own the official tier.

See VALIDATION.txt for sandbox test results and limitations.
