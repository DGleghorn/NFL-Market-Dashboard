# Degenerate’s Advisor v0.8.32 — Production Release Candidate

Production-hardening release built from v0.8.31 after an end-to-end audit of sport ownership, CFB classification, AI finalization, Props failure handling, navigation/refresh state, Betslip eligibility, caching, Worker deployment, and release metadata.

## Resolved in v0.8.32
- Model calculations now require an explicit sport; they no longer inherit mutable UI sport state.
- AI prompt/batch fair-number context is calculated from the payload sport.
- Public wager explanation text uses the payload sport rather than the currently selected tab.
- Props feed/cache ownership requires an explicit payload sport.
- Removed the redundant browser-level second Props Worker request. The Worker remains responsible for bundled + per-market provider recovery, while the dashboard circuit breaker handles outages.
- Preserved v0.8.31 bounded AI finalization: missing AI rows become deterministic-only context after one bounded batch retry.
- Preserved v0.8.30 sport/page/generation ownership and stale-response rejection.
- Preserved v0.8.29 Props circuit breaker and clean degraded UI.

## CFB audit conclusion
The prior 6 PLAY / 3 LEAN / 4 WATCH / 3 STAY OFF screen that appeared under CFB was cross-sport leakage: the visible card contained an NFL matchup (DET @ CAR). After state isolation, the CFB slate consistently produces its own classification. v0.8.32 does not lower thresholds or manufacture additional wagers.

## External dependency
Live NFL/CFB Props remain dependent on the third-party provider. The provider returned HTTP 500 during deployed testing. v0.8.32 handles that failure safely and quickly, but cannot make an unavailable upstream service return data.
