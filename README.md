# AI Market Terminal — V0.7.4 Performance Integrity

Production-hardening release derived from the exact V0.7.3 Decision Integrity package.

Key improvements:
- Correct unit-risked ROI and stake-aware settlement.
- Trustworthy CLV policy: only a verified DraftKings observation captured within 6 hours of kickoff can become CLV; postgame ESPN market data is never treated as a close.
- Better Performance metrics and ledger transparency.
- Season-safe immutable TAKE deduplication with compatibility for existing V0.7.3 records.
- NFL key-number-aware PLAY TO / TAKE AT thresholds around 3 and 7.
- NFL and CFB production pipelines remain intact; PGA remains fail-closed.

Deployment: upload all eight files to the GitHub Pages repository root, replacing the previous release. Keep V0.7.3 available as rollback until the iPhone production smoke test passes.

See VALIDATION.txt for the sandbox audit and release gate.
