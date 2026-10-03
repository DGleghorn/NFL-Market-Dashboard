# Degenerate’s Advisor v0.8.29 — Production Hardening / Production Candidate 2

Built from v0.8.28 after live iPhone testing confirmed the shared prop provider was returning HTTP 500 for both NFL and CFB and exposed a remaining cross-sport summary race.

## Production hardening
- Every rendered market/AI summary is owned by its sport. A delayed NFL response cannot update a CFB view and vice versa.
- The shared summary banner is regenerated from the currently rendered sport on every render, including cached sport switches.
- AI prompt sport identity comes from the payload rather than mutable global UI state.
- Props has a per-sport 5-minute circuit breaker after confirmed provider 5xx failures.
- During the cooldown, a fresh last-known-good prop cache is used when available; otherwise Props enters a clean unavailable state.
- Healthy prop responses automatically close that sport’s circuit.
- Main Props UI no longer exposes provider HTTP/stage jargon. Engineering details remain in More → Diagnostics.
- v0.8.28 bundled-request + individual-market recovery remains available when the circuit is closed.
- Smart refresh, request deduplication, page isolation, and NFL/CFB Props synchronization remain.

## Frozen recommendation logic
No recommendation mathematics changed. v0.8.24 CFB calibration, the frozen NFL model, PGA shadow model, playable-line logic, settlement logic, and game-only Betslip eligibility are unchanged.
