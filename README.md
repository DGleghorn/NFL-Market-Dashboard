# NFL Market Dashboard V0.6.3.3 — AI Parser Hardened

Targeted parser hotfix based on V0.6.3.2.

- Preserves the proven iPhone POST probe and 4-game Workers AI batching.
- Accepts multiple Workers AI text-response shapes.
- Removes code fences and hidden `<think>` blocks before parsing.
- Extracts the first balanced JSON object instead of relying on first/last braces.
- Repairs common smart-quote and trailing-comma JSON defects.
- Attempts a final `bets` array recovery when surrounding prose is malformed.
- Incomplete per-game model output still normalizes safely to PASS.
- Parse failures return a short sanitized sample plus request ID for diagnosis.
- DraftKings remains the only actionable sportsbook.
- Cloudflare Workers AI only; no OpenAI or paid fallback.

Upload all seven files to the GitHub repository root and commit to main.
