# Degenerate’s Advisor v0.8.9

Sport State Isolation & Stability release.

## Primary fixes
- Isolates NFL, CFB and PGA runtime state.
- Captures the requested sport at refresh launch.
- Prevents late responses from a previously selected sport from rendering into the active tab.
- Scopes snapshot-history lookup and refresh-failure fallback to the requested sport.
- Adds payload sport-integrity validation.
- Preserves v0.8.8 cached-first/background-refresh performance architecture.
- Keeps NFL, CFB and PGA model versions frozen.

## Audit hardening
- Rapid sport switching no longer blocks on network refreshes.
- Cached sport snapshots remain independently restored.
- Stale in-flight responses may finish/save to their own sport but cannot overwrite another sport's screen.
- Service-worker cache fingerprint bumped for v0.8.9.

Deploy all files in this ZIP to the GitHub Pages repository root.
