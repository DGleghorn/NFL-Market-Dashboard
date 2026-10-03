# Degenerate’s Advisor v0.8.28 — Prop Provider Recovery

Built from v0.8.27 after live diagnostics proved both NFL and CFB prop failures originated at the upstream provider (`provider_http`, provider HTTP 500).

Changes:
- NFL and CFB still use independent provider sport paths.
- Worker tries the normal bundled DraftKings prop request first.
- If the provider returns a 5xx, the Worker retries each supported market independently.
- Healthy individual markets are recovered even if another market is causing the provider failure.
- If every individual market also fails, the dashboard reports the failure without fabricating prop data.
- Provider internal JSON/support text is no longer dumped into the user-facing card.
- Props now treats the global active NFL/CFB sport as authoritative and rejects mismatched stale payload rendering.
- v0.8.27 diagnostics, v0.8.26 navigation isolation, and cached-first refresh remain.

No recommendation mathematics changed.
