// NFL Market Dashboard V0.5.0 — secure AI analyst endpoint
// Deploy this file as a Cloudflare Worker (or adapt it to your preferred serverless runtime).
// Required Worker secret: OPENAI_API_KEY
// Optional Worker secret: AI_SHARED_SECRET
// Frontend sends { snapshot, model, webResearch, confidenceFloor, instructions }.

const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    model: { type: "string" },
    reviewedAt: { type: "string" },
    slateSummary: { type: "string" },
    audit: { type: "string" },
    challenge: { type: "string" },
    sources: { type: "array", items: { type: "object", additionalProperties: false, properties: { title: { type: "string" }, url: { type: "string" } }, required: ["title","url"] } },
    bets: { type: "array", items: { type: "object", additionalProperties: false, properties: {
      gameId: { type: "string" }, decision: { type: "string", enum: ["BET","LEAN","PASS"] }, market: { type: "string" }, selection: { type: "string" },
      confidence: { type: "number" }, fairLine: { type: "string" }, edge: { type: "string" }, book: { type: "string" }, price: { type: "string" },
      reasons: { type: "array", items: { type: "string" } }, risks: { type: "array", items: { type: "string" } }, explanation: { type: "string" }
    }, required: ["gameId","decision","market","selection","confidence","fairLine","edge","book","price","reasons","risks","explanation"] } }
  },
  required: ["model","reviewedAt","slateSummary","audit","challenge","sources","bets"]
};

function cors(origin){return {'Access-Control-Allow-Origin':origin||'*','Access-Control-Allow-Headers':'Content-Type, Authorization, X-DCC-Secret','Access-Control-Allow-Methods':'POST, OPTIONS','Content-Type':'application/json'}}
function cleanText(v){return typeof v==='string'?v:''}

export default {
  async fetch(request, env) {
    const origin=request.headers.get('Origin')||'*';
    if(request.method==='OPTIONS')return new Response('',{status:204,headers:cors(origin)});
    if(request.method!=='POST')return new Response(JSON.stringify({error:'POST only'}),{status:405,headers:cors(origin)});
    if(env.AI_SHARED_SECRET){const got=request.headers.get('X-DCC-Secret')||'';if(got!==env.AI_SHARED_SECRET)return new Response(JSON.stringify({error:'Unauthorized'}),{status:401,headers:cors(origin)})}
    if(!env.OPENAI_API_KEY)return new Response(JSON.stringify({error:'OPENAI_API_KEY is not configured on the server'}),{status:500,headers:cors(origin)});
    let body;try{body=await request.json()}catch{return new Response(JSON.stringify({error:'Invalid JSON'}),{status:400,headers:cors(origin)})}
    const snapshot=body?.snapshot;if(!snapshot?.games?.length)return new Response(JSON.stringify({error:'Snapshot is missing games'}),{status:400,headers:cors(origin)})

    const system=`You are the Chief Analyst for a personal NFL betting-market terminal. Your job is to analyze NFL spreads and totals using the supplied market snapshot plus current web research when available.\n\nNON-NEGOTIABLE RULES:\n1. Never invent a line, price, injury, weather report, statistic, or source.\n2. Treat the supplied sportsbook snapshot as the source of truth for current market numbers.\n3. Use web research for current context when useful; prefer primary/reputable sources.\n4. Spreads and totals only. No player props.\n5. Challenge your own first impression. Look for reasons NOT to bet.\n6. BET requires a meaningful edge at the actual available price and enough evidence. LEAN is interesting but not strong enough for a full bet. PASS is always acceptable.\n7. Confidence 0-100 reflects evidence quality and price quality, not certainty of outcome.\n8. Review the entire slate before selecting Best Bets. Do not force a number of bets.\n9. Explain the key reasons and the biggest risks.\n10. Return every game in bets, including PASS decisions.\n11. If the market is efficient or information is uncertain, PASS.\n12. Do not use betting language to imply certainty or guaranteed profit.`;
    const user=`Review this NFL slate. Compare the current market to opening numbers, book agreement, movement, and current context. Identify the strongest opportunities only after attempting to disprove them.\n\nSnapshot JSON:\n${JSON.stringify(snapshot)}\n\nReturn structured output exactly matching the supplied schema.`;
    const input=[{role:'system',content:system},{role:'user',content:user}];
    const requestBody={model:body.model||'gpt-5.6-sol',reasoning:{effort:'high'},tools:body.webResearch!==false?[{type:'web_search',search_context_size:'low'}]:[],input,text:{format:{type:'json_schema',name:'nfl_market_analysis',strict:true,schema}}};
    const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Authorization':`Bearer ${env.OPENAI_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify(requestBody)});
    const raw=await r.text();if(!r.ok)return new Response(JSON.stringify({error:`OpenAI HTTP ${r.status}`,detail:raw.slice(0,1000)}),{status:502,headers:cors(origin)});
    let response;try{response=JSON.parse(raw)}catch{return new Response(JSON.stringify({error:'OpenAI returned invalid JSON'}),{status:502,headers:cors(origin)})}
    const text=response.output_text;if(!text)return new Response(JSON.stringify({error:'OpenAI response contained no output_text'}),{status:502,headers:cors(origin)})
    let analysis;try{analysis=JSON.parse(text)}catch{return new Response(JSON.stringify({error:'OpenAI structured output could not be parsed'}),{status:502,headers:cors(origin)})}
    analysis.model=body.model||analysis.model||'gpt-5.6-sol';analysis.reviewedAt=new Date().toISOString();analysis.validated=true;
    return new Response(JSON.stringify({analysis}),{status:200,headers:cors(origin)});
  }
};
