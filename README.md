# Degenerate’s Advisor v0.8.15 — Live NFL Prop Feed Integration

## Added
- Dedicated optional NFL prop-feed endpoint under More → Advanced connections.
- Feed request includes sport=nfl, season, and week.
- Adapter accepts common JSON envelopes: nflProps, playerProps, props, markets, or data.
- Prop-feed failures are isolated from NFL game markets and AI analysis.
- Real rows are merged into the current NFL snapshot before the existing v8.14 validation pipeline.
- Existing DraftKings-only, freshness, active-status, player/game matching, dedupe, projection, and SHADOW ranking remain enforced.
- CFB/PGA never consume the NFL prop endpoint.

## Important
This release provides the live-feed integration path but does not bundle a third-party sportsbook data service or scrape DraftKings. A legitimate prop provider/Worker URL still has to be configured in the new NFL prop-feed endpoint field. Until then, the UI safely reports that the feed is not configured.

Official NFL/CFB game models remain frozen, and props remain SHADOW-only.
