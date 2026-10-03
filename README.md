# Degenerate’s Advisor v0.8.26 — Navigation & Live-State Reliability

Built from v0.8.25 after real-device acceptance testing exposed stale sport state and a hidden Props workspace.

Fixes:
- Removes the legacy NFL-only `hidden` behavior that suppressed Props for CFB.
- Bottom navigation is independent from sport navigation; switching NFL/CFB preserves the open Today/Games/Props/Betslip/More page.
- Switching sports immediately renders that sport’s own memory state, or clears the old sport with an explicit loading state. Previous-sport cards are not intentionally retained under the new header.
- Fresh market and prop results re-render the page currently on screen.
- Props explicitly shows NFL/CFB loading, provider-empty, or provider-error states instead of a blank page.
- Robust `/nfl-props` ↔ `/cfb-props` URL construction replaces the fragile v0.8.25 string replacement.
- CFB props route uses ParlayAPI sport key `americanfootball_ncaaf` and ESPN college-football mapping.
- Request deduplication, cached-first loading, and smart refresh from v0.8.25 remain.

Recommendation math is unchanged from v0.8.25/v0.8.24.
