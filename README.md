# AI Market Terminal — V0.7.9 Model Freeze + History Integrity

Built from the production-smoke-tested V0.7.8 baseline.

## What changed
- NFL decision engine is explicitly **FROZEN** for clean out-of-sample tracking.
- Football model identity is now independent from app/UI version: `football-077-frozen`.
- Official TAKE and research history store the frozen model version.
- Decision fingerprints use the frozen model version, so UI-only releases do not masquerade as model changes.
- CFB remains **BETA** with its conservative market anchoring unchanged.
- PGA is now labeled **SHADOW** but remains fail-closed; no golf picks are fabricated.

## Deployment
Upload all 8 files in this ZIP to the GitHub Pages repository root, replacing the existing files.

See `VALIDATION.txt` for the release gate and limitations.
