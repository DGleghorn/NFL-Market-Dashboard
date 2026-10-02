# Degenerate’s Advisor v0.8.21 — Prop Feed Reliability

Targeted reliability release. Healthy NFL prop responses are cached per season/week. A failed live request gets one controlled retry. If both live attempts fail, the last-known-good prop feed is rendered instead of blanking the Props workspace.

Game markets and AI remain isolated. Props remain SHADOW-only. The v0.8.20 navigation/Betslip workspace is preserved. Official game-model functions remain frozen.
