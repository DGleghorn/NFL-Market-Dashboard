# NFL Market Dashboard V0.6.7 — Action Card Polish

Production-safe incremental release built directly from the validated V0.6.6 Production Action Card baseline.

## Changes
- Replaces verbose playable-number text with compact action-card language.
- Totals now show `CURRENT` plus `MAX PLAY` (Over) or `MIN PLAY` (Under).
- Spreads show `CURRENT` plus `PLAY TO`.
- Preserves DraftKings-only actionable verification, deterministic quant gates, AI completion gates, retry behavior, snapshot fallback, ledger, settlement, and four-tab mobile UI.
- Updates dashboard, Worker, manifest, service-worker and cache fingerprints to V0.6.7 / 067-CF.

## Deployment
Upload the files in this ZIP to the GitHub Pages repository root, replacing the prior release files. Deploy the included Worker source/config through the existing Cloudflare-connected repository workflow.

## Release strategy
V0.6.6 remains the rollback baseline. V0.6.7 intentionally avoids the upcoming multi-sport refactor. CFB/PGA will be introduced behind isolated sport modules in later milestones so the stable NFL engine is not destabilized.

See `VALIDATION.txt` for the sandbox release-gate results and limitations.
