# NFL Market Dashboard — iPhone V0.2

## What this version is
An iPhone-first, static PWA. No Python server or computer is required after it is published.

## Important limitation
The current Best Bets engine uses transparent demo/model values. It is a UI/architecture build, not a finished predictive NFL model and not betting advice. The next build should connect live odds, historical line snapshots, sportsbook comparison, injuries/weather and the real projection model.

## Deploy with GitHub Pages from iPhone
1. Download and unzip this folder.
2. Open GitHub in Safari and create a new repository, for example `nfl-market-dashboard`.
3. Open the repository and choose Add file → Upload files.
4. Upload `index.html`, `app.js`, `styles.css`, and `manifest.json` from the folder. Upload them at the repository's top level.
5. Commit the files.
6. In the repository, open Settings → Pages.
7. Under Build and deployment, choose Deploy from a branch. Choose `main` and `/ (root)`, then Save.
8. Wait a minute or two for GitHub Pages to publish.
9. Open the Pages URL in Safari.
10. Tap Share → Add to Home Screen. Turn on Open as Web App if shown, then Add.

## Private-use note
GitHub Pages is public if the repository/site is public. This V0.2 should not be used with secret API keys in a public site. The API-key field is only a placeholder for the next architecture. For live data, use a server-side proxy/backend or another secure credential approach.
