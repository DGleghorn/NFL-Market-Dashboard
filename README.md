# V0.5.0 AI Analyst endpoint

The GitHub Pages app cannot safely hold an OpenAI API key. This worker is a server-side template for the AI layer. Deploy it to a serverless runtime such as Cloudflare Workers, set `OPENAI_API_KEY`, and optionally set `AI_SHARED_SECRET`.

## Contract
POST JSON from the dashboard to the worker. The dashboard sends the market snapshot, requested model, and AI rules. The worker calls the OpenAI Responses API with structured output and optional hosted web search, then returns `{ "analysis": ... }`.

## Cloudflare outline
1. Create a Worker.
2. Paste `openai-analyst-worker.js`.
3. Add Worker secret `OPENAI_API_KEY`.
4. Optionally add `AI_SHARED_SECRET`.
5. Put the Worker URL into Dashboard → Settings → AI analyst endpoint.
6. Pull the slate.

Do not put the OpenAI API key into GitHub Pages, localStorage, or frontend JavaScript.
