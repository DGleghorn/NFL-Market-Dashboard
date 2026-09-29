# AI Market Terminal — V0.7.8 Decision Object Integrity

Built from the deployed V0.7.7 Football Production Certification baseline.

## Release focus
- Deterministic decision object is now the single source of truth for TAKE-card reason, risk, full analysis, edge, and playable threshold.
- Raw Workers AI explanation/risk text can no longer contradict an official TAKE card.
- Playable-number boundaries are conservative half-point boundaries derived from the deterministic fair value and sport/market TAKE threshold.
- NFL/CFB classification thresholds and market anchoring from V0.7.7 are intentionally unchanged.
- PGA remains fail-closed until a verified zero-cost golf data/market pipeline exists.

## Deploy
Upload all 8 files in this ZIP to the GitHub Pages repository root, replacing the prior files. `wrangler.jsonc` and `ai-analyst-worker.js` are the Cloudflare Worker source/config used by the existing deployment workflow.

See `VALIDATION.txt` for the sandbox release-gate results and limitations.
