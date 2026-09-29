# NFL Market Dashboard V0.6.3.7 — Partial AI Diagnostics

Evidence-gathering production hotfix based directly on V0.6.3.6.

- Does not change the market pull, DraftKings verification, POST transport, Workers AI model, batching, or line parser.
- PARTIAL AI responses are now visible in the AI Analyst tab instead of being hidden behind the validated-response gate.
- Shows genuine parsed count and fallback count.
- Opens per-batch diagnostics automatically.
- Shows each batch's inference time, stage, candidate count, parsed count, and sanitized raw model sample.
- Fallback PASS rows remain excluded from AI readiness and Best Bets.
- Zero-cost Cloudflare Workers AI only; no paid fallback.

Upload all seven files to the GitHub repository root and commit to main. Run Pull & Analyze once after deployment; use the visible raw samples to make the next parser change evidence-based.
