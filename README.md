# Degenerate’s Advisor v0.8.23 — Prop Backend Recovery

Targeted recovery release for the v0.8.22 HTTP 502 path.

The Worker now distinguishes binding, provider network, provider HTTP, provider JSON/shape, game-map degradation, and unhandled Worker failures. A temporary ESPN matchup-map failure no longer destroys the provider fetch/diagnostics. Empty prop arrays are never treated as a last-known-good cache.

v0.8.22 coverage diagnostics, v0.8.21 retry/cache reliability, Props/Betslip navigation, and all frozen game models are preserved.


## Prop card language refinement
Prop cards now use TAKE / LEAN / AVOID language. TAKE is reserved for independently verified SHADOW STRONG model edges. Market pricing alone can create LEAN or AVOID, never TAKE. Raw no-vig percentages are replaced on-card by a brief plain-language explanation.
