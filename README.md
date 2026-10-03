# Degenerate's Advisor v0.8.35 — Production Cleanup + Props Endpoint Recovery

Production release candidate focused exclusively on Props data-source resilience.

## What changed
- ParlayAPI remains the primary DraftKings Props source.
- Optional SportsGameOdds fallback adapter added for NFL and NCAAF when ParlayAPI fails or returns no usable rows.
- Fallback is server-side only and requires a Cloudflare secret named `SGO_API_KEY`.
- Fallback accepts DraftKings only, full-game (`game`) player O/U markets only, and rejects rows older than 15 minutes.
- Existing browser last-known-good Props cache and circuit breaker remain in place.
- Diagnostics now separate Props Worker, primary provider, fallback provider, and DraftKings Props Feed health.
- No game recommendation, AI classification, settlement, PGA, or Props threshold mathematics were changed.

## Deployment
Upload the package to the existing GitHub Pages repository as usual. The existing `PROP_API_KEY` continues to power ParlayAPI.

To activate the secondary provider, create a SportsGameOdds API key and add it to the existing Cloudflare Worker as an encrypted secret named `SGO_API_KEY`. Do not put either API key in GitHub or client-side settings. The fallback remains inactive until that secret exists.

## Important
The fallback provider is optional. Without `SGO_API_KEY`, v0.8.35 still runs safely with ParlayAPI + cache and reports the fallback as not configured. A ParlayAPI HTTP 500 cannot be repaired by client code; live recovery during that outage requires either the fallback secret or a fresh cached feed.


## v0.8.35 additions
- Production Props endpoint is self-healing and no longer inherits stale localStorage URLs outside Developer Mode.
- Worker binding preflight confirms SGO_API_KEY presence without exposing the secret.
- Market Movement removed from normal UI.
- Snapshot display condensed to the single latest snapshot for the active sport.
- Diagnostics distinguish Worker reachability, fallback configuration, active provider, and DK feed health.
