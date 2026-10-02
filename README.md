# Degenerate’s Advisor v0.8.18 — Production Binding Diagnostics

Targeted deployment hardening. Betting models remain frozen. NFL props remain SHADOW-only.

The companion Worker adds GET /binding-check, which reports only boolean presence for AI, PROP_API_KEY, and AI_SHARED_SECRET. It never returns secret values. This lets us distinguish a Cloudflare runtime-binding problem from a prop-parser problem safely.
