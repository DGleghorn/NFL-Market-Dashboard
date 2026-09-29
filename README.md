# NFL Market Dashboard V0.6.3.6 — AI Decision Integrity

This release preserves the working V0.6.3.5 market/transport/Workers-AI architecture and fixes decision accounting.

- Fallback PASS rows are explicitly marked and are never counted as genuine model decisions.
- AI status is READY only when every game has a genuinely parsed model row.
- Partial model output displays PARTIAL rather than READY.
- Best Bets remain disabled unless the full AI response is genuinely usable.
- AI tab shows parsed/total, fallback count, and per-batch diagnostics including sanitized raw samples.
- Batch summaries no longer repeat boilerplate four times.
- DraftKings remains the only actionable sportsbook.
- Cloudflare Workers AI only; no OpenAI or paid fallback.

Upload all seven files to the GitHub repository root and commit to main.
