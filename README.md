# AI Market Terminal — V0.8.0 CFB Opponent Intelligence

Production deployment package for GitHub Pages + the existing zero-cost Cloudflare Workers AI path.

## Major change
CFB now uses a season-to-date opponent graph built from completed ESPN games. Spread ratings use capped scoring margins, home-field normalization, iterative opponent adjustment, and small-sample shrinkage before being blended back toward the verified DraftKings market.

## Model identities
- NFL: `football-077-frozen` — unchanged from V0.7.9.
- CFB: `cfb-080-opponent-adjusted-v1` — new in V0.8.0.
- PGA: shadow/fail-closed; no fabricated recommendations.

Upload all eight files to the repository root. Keep the existing Cloudflare AI binding/deployment configuration.
