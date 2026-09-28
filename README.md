# NFL Market Dashboard — V0.6.2 DraftKings Hardened

Production-hardening release for the iPhone-first NFL Market Dashboard.

## Canonical build
- App version: **0.6.2**
- Build fingerprint: **062-DK-20260928**
- Actionable sportsbook: **DraftKings only**

## Key fixes
- DraftKings is the authoritative actionable spread/total shown by the app.
- Other books may be retained only as consensus/context.
- Missing opening lines remain unavailable; null/empty values are never coerced to `0.0`.
- Movement requires two real DraftKings observations. No prior observation = no movement value.
- Best Bets require a validated AI response and a verified DraftKings market.
- Stronger cache busting and visible build fingerprint diagnostics.
- Structured bet settlement and historical ledger remain enabled.

## iPhone deployment
Upload all six files in this package to the repository root, replacing files with matching names. The old `app.js` and `styles.css` are not used by this build and may remain temporarily.

After GitHub Pages deploys, the header must show:
**V0.6.2 · DraftKings Hardened · BUILD 062-DK**

Diagnostics must show **Build fingerprint PASS**.

## AI
The frontend intentionally contains no OpenAI API key. `openai-analyst-worker.js` must be deployed as a secure server-side Worker and its URL entered in Settings before AI Best Bets can run.
