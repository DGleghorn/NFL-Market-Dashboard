# D.I.L.D.O. v0.8.52 — NBA Rolling Historical Archive

## Release scope
- Retains verified completed NBA game results in a compact local archive across daily refreshes; no additional provider requests.
- Restricts NBA opponent-adjusted research to the active NBA season year AND game type (preseason, regular season, playoffs). No cross-year or cross-stage mixing.
- Adds archive count and active-season sample count to NBA Model Health. Confidence percentages continue to represent research evidence quality, not win probability.
- Preserves existing Market / Our Number / Decision cards, navigation fix, NBA SHADOW / NO BET, NFL/CFB frozen model logic, and PGA SHADOW.
- Aligns release labels, service-worker cache and manifest version to 0.8.52.

## Important limitations
- Archive begins accumulating from the games actually fetched on this device; it is not an instant full-season historical database. Clearing browser storage removes it.
- Schedule data may be incomplete. NBA projections do not include confirmed injuries, lineups, or pace-adjusted possession statistics.
- NBA never enters official Betslip. Existing DraftKings markets may be stale; verify directly with the sportsbook.
- Live provider and iPhone/Orion end-to-end behavior must be validated after deployment.

## Deploy
Extract all seven files and upload to the root of `DGleghorn/NFL-Market-Dashboard` on GitHub. Refresh the page and confirm `V0.8.52`.
