# NFL Market Dashboard V0.6.3.9 — Workers AI Extraction Fix

- Aligns synchronous Gemma 4 calls with current Cloudflare Workers AI documentation.
- Reads the documented `response` text field first.
- Uses `max_completion_tokens` and disables Gemma thinking for the strict line contract.
- Adds non-content response-shape diagnostics when text extraction is empty.
- Preserves the corrected opening-line normalization from V0.6.3.8.
- Preserves DraftKings-only verification, four-game batching, fallback exclusion, and the existing line parser.
- Bumps dashboard/manifest/service-worker build identity to reduce stale PWA cache confusion.
