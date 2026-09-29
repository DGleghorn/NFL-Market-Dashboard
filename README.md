# NFL Market Dashboard V0.6.3.8 — Data Integrity Diagnostics
- Prevents decimal odds such as 1.9 from being interpreted as NFL opening totals.
- Missing opening lines remain null.
- Removes unsupported live-web-research wording from the Workers AI prompt.
- Adds a clearly labeled raw Workers AI response panel separate from the prompt preview.
- Captures up to 1,200 sanitized characters of actual model output per batch.
- Leaves the V0.6.3.7 parser, DraftKings verification, transport, batching, and zero-cost architecture unchanged.
- Fallback rows remain excluded from AI readiness and Best Bets.
