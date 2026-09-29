// NFL Market Dashboard V0.6.5.0 — intelligence layer
const VERSION='dcc-ai-worker-v0.6.5.0-intelligence';
const MODEL='@cf/google/gemma-4-26b-a4b-it',PROMPT_VERSION='dcc-chief-analyst-cf-v5.0';
const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type, X-DCC-Secret','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Access-Control-Max-Age':'86400','Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'};
const json=(x,status=200)=>new Response(JSON.stringify(x),{status,headers:cors});
const clean=(s,n=500)=>String(s??'').replace(/[\r\n\t]+/g,' ').replace(/\s+/g,' ').trim().slice(0,n);
function modelText(x){
 if(typeof x==='string')return x;
 // Cloudflare Workers AI synchronous text generation returns {response:string, usage:{...}}.
 if(typeof x?.response==='string')return x.response;
 // Defensive compatibility for wrapped REST/OpenAI-compatible response shapes.
 if(typeof x?.result?.response==='string')return x.result.response;
 if(typeof x?.choices?.[0]?.message?.content==='string')return x.choices[0].message.content;
 if(typeof x?.choices?.[0]?.text==='string')return x.choices[0].text;
 if(typeof x?.output_text==='string')return x.output_text;
 if(Array.isArray(x?.response))return x.response.map(y=>typeof y==='string'?y:(y?.text||y?.content||'')).join('\n');
 return '';
}
function responseShape(x){
 try{
  if(x==null)return 'null';
  if(typeof x!=='object')return typeof x;
  const keys=Object.keys(x).slice(0,12);
  const types=keys.map(k=>`${k}:${Array.isArray(x[k])?'array':typeof x[k]}`);
  return types.join(', ')||'object:no-enumerable-keys';
 }catch{return 'uninspectable'}
}
const pass=(id,why='No valid AI row returned.')=>({gameId:String(id),decision:'PASS',marketType:'spread',side:'home',confidence:0,fairLine:'',edge:'',reasons:[],risks:[why],explanation:'PASS — '+why,_fallback:true});
function parseLineProtocol(raw,s){
 const games=new Map(s.games.map(g=>[String(g.id),g])),candidates=new Map();
 let text=String(raw??'').replace(/<think>[\s\S]*?<\/think>/gi,'').replace(/```[\s\S]*?```/g,m=>m.replace(/```(?:text|txt)?/gi,'').replace(/```/g,''));
 for(const original of text.split(/\r?\n/)){
  let line=original.trim().replace(/^[-*]\s*/,'').replace(/^\|/,'').replace(/\|$/,''); if(!line||!line.includes('|'))continue;
  const p=line.split('|').map(x=>x.trim()); if(p.length<5)continue;
  const id=String(p[0]).replace(/^GAME[_\s-]*/i,'').trim(); if(!games.has(id))continue;
  const decision=String(p[1]).toUpperCase(),market=String(p[2]).toUpperCase(),side=String(p[3]).toUpperCase();
  const confidence=Number(String(p[4]).replace(/[^0-9.]/g,''));
  if(!['BET','LEAN','PASS'].includes(decision)||!Number.isFinite(confidence))continue;
  const na=v=>['N/A','NA','NONE','-',''].includes(String(v??'').trim().toUpperCase());
  let marketType,normalizedSide;
  if(decision==='PASS'){
   if(confidence!==0)continue;
   if(!(na(market)||['SPREAD','TOTAL'].includes(market)))continue;
   marketType=market==='TOTAL'?'total':'spread';
   const allowed=marketType==='spread'?['HOME','AWAY']:['OVER','UNDER'];
   if(!(na(side)||allowed.includes(side)))continue;
   normalizedSide=allowed.includes(side)?side.toLowerCase():(marketType==='spread'?'home':'over');
  }else{
   if(!['SPREAD','TOTAL'].includes(market))continue;
   marketType=market.toLowerCase();
   const allowed=marketType==='spread'?['HOME','AWAY']:['OVER','UNDER'];
   if(!allowed.includes(side))continue;
   normalizedSide=side.toLowerCase();
  }
  const normField=v=>na(v)?'':clean(v,80);
  const row={gameId:id,decision,marketType,side:normalizedSide,_fallback:false,confidence:decision==='PASS'?0:Math.max(0,Math.min(100,confidence)),fairLine:normField(p[5]),edge:normField(p[6]),reasons:normField(p[7])?[clean(p[7],150)]:[],risks:normField(p[8])?[normField(p[8])]:[],explanation:normField(p[9])||normField(p[7])||'The supplied market data does not establish an edge.'};
  const rank={BET:3,LEAN:2,PASS:1},prev=candidates.get(id); if(!prev||rank[row.decision]>rank[prev.decision]||(rank[row.decision]===rank[prev.decision]&&row.confidence>prev.confidence))candidates.set(id,row);
 }
 return s.games.map(g=>candidates.get(String(g.id))||pass(g.id,'AI output row was missing or malformed.'));
}
function buildAnalysis(raw,s){
 const bets=parseLineProtocol(raw,s),usable=bets.filter(b=>!b._fallback).length;
 return{model:MODEL,provider:'Cloudflare Workers AI',promptVersion:PROMPT_VERSION,reviewedAt:new Date().toISOString(),
 slateSummary:`Workers AI line review completed; ${usable}/${s.games.length} rows parsed with a scored decision.`,
 audit:'DraftKings market verification remains deterministic in the dashboard.',
 challenge:'Exactly one normalized decision is retained per game; malformed or missing rows are forced to PASS.',sources:[],bets,validated:usable===s.games.length};
}
export default{async fetch(req,env){const id=crypto.randomUUID().slice(0,8),url=new URL(req.url);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 if(env.AI_SHARED_SECRET&&(req.headers.get('X-DCC-Secret')||'')!==env.AI_SHARED_SECRET)return json({error:'Unauthorized',stage:'auth',requestId:id},401);
 if(req.method==='GET'){
  if(url.searchParams.get('diagnostic')==='1'){if(!env.AI)return json({ok:false,version:VERSION,stage:'binding',requestId:id,message:'Workers AI binding AI is missing.'},500);try{const t=Date.now(),r=await env.AI.run(MODEL,{messages:[{role:'user',content:'Reply with exactly OK.'}],max_tokens:8,temperature:0});return json({ok:true,version:VERSION,provider:'Cloudflare Workers AI',model:MODEL,stage:'inference',inferenceMs:Date.now()-t,requestId:id,message:'Zero-cost Workers AI connectivity test passed.',sample:clean(modelText(r),80),responseShape:responseShape(r)})}catch(e){return json({ok:false,version:VERSION,stage:'inference',requestId:id,message:clean(e?.message||e,500),zeroCost:true,paidFallback:false},503)}}
  return json({ok:true,version:VERSION,provider:'Cloudflare Workers AI',model:MODEL,aiBindingConfigured:!!env.AI,contract:'one-row-per-game-v2',zeroCost:true,paidFallback:false});
 }
 if(req.method!=='POST')return json({error:'POST only',stage:'routing',requestId:id},405);
 let b;try{b=JSON.parse(await req.text())}catch{return json({error:'Invalid JSON',stage:'request',requestId:id},400)}
 if(b?.action==='post_probe')return json({ok:true,stage:'post_reached',requestId:id,version:VERSION,message:'Browser POST route reached Worker.'});
 if(!env.AI)return json({error:'Workers AI binding missing',stage:'binding',requestId:id},500);
 const s=b?.snapshot;if(!s?.games?.length)return json({error:'Snapshot is missing games',stage:'request',requestId:id},400);
 if(s.games.length>4)return json({error:'Batch too large',stage:'request',requestId:id,message:'AI stabilization contract accepts at most 4 games per batch.'},413);
 const compact={season:s.season,week:s.week,games:s.games.map(g=>({id:String(g.id),away:g.away,home:g.home,market:g.market,opening:g.opening,consensus:g.consensus,movement:g.movement||null,teamContext:g.teamContext||null,contextMeta:g.contextMeta||null}))};
 const system=`You are a conservative NFL market second-opinion analyst. Use ONLY the supplied snapshot. DraftKings is the only actionable sportsbook. Spreads and totals only.
Never claim or infer injuries, weather, projections, matchup facts, opening-line movement, sources, or prices not explicitly supplied.
You MAY use teamContext when supplied. It contains descriptive results from up to three PRIOR completed regular-season weeks: games, record, average points for/against, average scoring margin, and rest days. Treat it as a small-sample descriptive signal, not a projection or proof of team quality.
You MAY use movement only when it is non-null and derived from prior local DraftKings snapshots. Null movement or null opening means unavailable, not zero.
A null opening value means opening data is unavailable. Current market equal to consensus is not evidence of an edge by itself. A BET should require multiple supplied signals that coherently support the same side; otherwise prefer LEAN or PASS.
PASS freely. If supplied fields do not establish a defensible edge, PASS and state that the supplied market data does not establish an edge.
OUTPUT CONTRACT: Return exactly ONE line for EACH supplied GAME_ID and nothing else. Never return both SPREAD and TOTAL for the same game. Choose the single strongest SPREAD or TOTAL angle, or PASS.
GAME_ID | DECISION | MARKET | SIDE | CONFIDENCE | FAIR_LINE | EDGE | REASON | RISK | EXPLANATION
DECISION: BET, LEAN, PASS. MARKET: SPREAD or TOTAL. SIDE: HOME/AWAY for spread; OVER/UNDER for total. CONFIDENCE: integer 0-100; PASS must be 0. For PASS, MARKET, SIDE, FAIR_LINE, EDGE, REASON, RISK, and EXPLANATION may be N/A; GAME_ID, PASS, and confidence 0 are sufficient.
Do not use JSON, markdown, headings, or commentary.`;
 try{
  const t=Date.now(),r=await env.AI.run(MODEL,{messages:[{role:'system',content:system},{role:'user',content:'Review these games without forcing bets:\n'+JSON.stringify(compact)}],temperature:0,max_completion_tokens:520,chat_template_kwargs:{enable_thinking:false}});
  const inferenceMs=Date.now()-t,raw=modelText(r),a=buildAnalysis(raw,s);
  return json({analysis:a,meta:{requestId:id,stage:'contract_complete',contract:'one-row-per-game-v2',inferenceMs,provider:'Cloudflare Workers AI',model:MODEL,zeroCost:true,paidFallback:false,batchIndex:Number(b.batchIndex)||0,batchCount:Number(b.batchCount)||1,candidateCount:s.games.length,parsedCount:a.bets.filter(x=>!x._fallback).length,responseShape:responseShape(r),rawSample:clean(raw,1200)}});
 }catch(e){return json({error:'Workers AI analysis unavailable',stage:'inference',requestId:id,message:clean(e?.message||e,500),zeroCost:true,paidFallback:false},503)}
}};
