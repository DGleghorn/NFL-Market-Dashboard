# Degenerate’s Advisor v0.8.27 — CFB Props Backend Recovery + State Sync

Built from v0.8.26 after live iPhone testing isolated CFB Props to an HTTP 502.

Changes:
- Preserves structured Worker error JSON instead of collapsing every failure to `HTTP 502`.
- CFB Props now surfaces the backend failure stage (binding, provider_fetch, provider_http, provider_parse, provider_shape, worker_unhandled) and provider status when available.
- Worker error responses include the provider sport and requested markets without exposing credentials.
- Props NFL/CFB selector and global NFL/CFB selector are synchronized in both directions.
- Removes the duplicated full prop error message.
- Retains v0.8.26 navigation/live-state fixes, cached-first rendering, request deduplication, and smart refresh.

No recommendation mathematics changed.
