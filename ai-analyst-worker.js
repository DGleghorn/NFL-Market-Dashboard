// NFL Market Dashboard V0.6.3.9 — Workers AI extraction fix
const VERSION='dcc-ai-worker-v0.6.3.9-extraction-fix';
const MODEL='@cf/google/gemma-4-26b-a4b-it',PROMPT_VERSION='dcc-chief-analyst-cf-v3.6';
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
 const games=new Map(s.games.map(g=>[String(g.id),g])),found=new Map();
 let text=String(raw??'').replace(/<think>[\s\S]*?<\/think>/gi,'').replace(/```[\s\S]*?```/g,m=>m.replace(/```(?:text|txt)?/gi,'').replace(/```/g,''));
 for(const original of text.split(/\r?\n/)){
  let line=original.trim().replace(/^[-*]\s*/,''); if(!line||!line.includes('|'))continue;
  const p=line.split('|').map(x=>x.trim()); if(p.length<5)continue;
  const id=String(p[0]).replace(/^GAME[_\s-]*/i,'').trim(); if(!games.has(id))continue;
  const decision=String(p[1]).toUpperCase(); const market=String(p[2]).toUpperCase(); const side=String(p[3]).toUpperCase();
  const confidence=Number(String(p[4]).replace(/[^0-9.]/g,'')); 
  if(!['BET','LEAN','PASS'].includes(decision)||!['SPREAD','TOTAL'].includes(market)||!Number.isFinite(confidence))continue;
  const marketType=market.toLowerCase(),allowed=marketType==='spread'?['HOME','AWAY']:['OVER','UNDER'];
  if(!allowed.includes(side))continue;
  found.set(id,{gameId:id,decision,marketType,side:side.toLowerCase(),_fallback:false,confidence:Math.max(0,Math.min(100,confidence)),fairLine:clean(p[5]||'',40),edge:clean(p[6]||'',80),reasons:p[7]?[clean(p[7],150)]:[],risks:p[8]?[clean(p[8],150)]:[],explanation:clean(p[9]||p[7]||`${decision} from Workers AI line review.`,300)});
 }
 return s.games.map(g=>found.get(String(g.id))||pass(g.id,'AI output row was missing or malformed.'));
}
function buildAnalysis(raw,s){
 const bets=parseLineProtocol(raw,s),usable=bets.filter(b=>!b._fallback).length;
 return{model:MODEL,provider:'Cloudflare Workers AI',promptVersion:PROMPT_VERSION,reviewedAt:new Date().toISOString(),
 slateSummary:`Workers AI line review completed; ${usable}/${s.games.length} rows parsed with a scored decision.`,
 audit:'DraftKings market verification remains deterministic in the dashboard.',
 challenge:'Malformed or missing AI rows are forced to PASS.',sources:[],bets,validated:true};
}
export default{async fetch(req,env){const id=crypto.randomUUID().slice(0,8),url=new URL(req.url);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 if(env.AI_SHARED_SECRET&&(req.headers.get('X-DCC-Secret')||'')!==env.AI_SHARED_SECRET)return json({error:'Unauthorized',stage:'auth',requestId:id},401);
 if(req.method==='GET'){
  if(url.searchParams.get('diagnostic')==='1'){if(!env.AI)return json({ok:false,version:VERSION,stage:'binding',requestId:id,message:'Workers AI binding AI is missing.'},500);try{const t=Date.now(),r=await env.AI.run(MODEL,{messages:[{role:'user',content:'Reply with exactly OK.'}],max_tokens:8,temperature:0});return json({ok:true,version:VERSION,provider:'Cloudflare Workers AI',model:MODEL,stage:'inference',inferenceMs:Date.now()-t,requestId:id,message:'Zero-cost Workers AI connectivity test passed.',sample:clean(modelText(r),80),responseShape:responseShape(r)})}catch(e){return json({ok:false,version:VERSION,stage:'inference',requestId:id,message:clean(e?.message||e,500),zeroCost:true,paidFallback:false},503)}}
  return json({ok:true,version:VERSION,provider:'Cloudflare Workers AI',model:MODEL,aiBindingConfigured:!!env.AI,contract:'line-v1',zeroCost:true,paidFallback:false});
 }
 if(req.method!=='POST')return json({error:'POST only',stage:'routing',requestId:id},405);
 let b;try{b=JSON.parse(await req.text())}catch{return json({error:'Invalid JSON',stage:'request',requestId:id},400)}
 if(b?.action==='post_probe')return json({ok:true,stage:'post_reached',requestId:id,version:VERSION,message:'Browser POST route reached Worker.'});
 if(!env.AI)return json({error:'Workers AI binding missing',stage:'binding',requestId:id},500);
 const s=b?.snapshot;if(!s?.games?.length)return json({error:'Snapshot is missing games',stage:'request',requestId:id},400);
 if(s.games.length>4)return json({error:'Batch too large',stage:'request',requestId:id,message:'V0.6.3.4 accepts at most 4 games per AI batch.'},413);
 const compact={season:s.season,week:s.week,games:s.games.map(g=>({id:String(g.id),away:g.away,home:g.home,market:g.market,opening:g.opening,consensus:g.consensus}))};
 const system=`You are a conservative NFL market second-opinion analyst. Supplied market numbers are authoritative. DraftKings is the only actionable sportsbook. Spreads and totals only. Never invent injuries, weather, stats, sources, lines, or prices. PASS freely.
OUTPUT CONTRACT: Return exactly ONE line for EACH supplied game and nothing else.
Each line must be:
GAME_ID | DECISION | MARKET | SIDE | CONFIDENCE | FAIR_LINE | EDGE | REASON | RISK | EXPLANATION
DECISION is BET, LEAN, or PASS.
MARKET is SPREAD or TOTAL.
SIDE for SPREAD is HOME or AWAY. SIDE for TOTAL is OVER or UNDER.
CONFIDENCE is integer 0-100.
Do not use JSON. Do not use markdown. Do not add headings or commentary.`;
 try{
  const t=Date.now(),r=await env.AI.run(MODEL,{messages:[{role:'system',content:system},{role:'user',content:'Review these games without forcing bets:\n'+JSON.stringify(compact)}],temperature:0,max_completion_tokens:520,chat_template_kwargs:{enable_thinking:false}});
  const inferenceMs=Date.now()-t,raw=modelText(r),a=buildAnalysis(raw,s);
  return json({analysis:a,meta:{requestId:id,stage:'contract_complete',contract:'line-v1',inferenceMs,provider:'Cloudflare Workers AI',model:MODEL,zeroCost:true,paidFallback:false,batchIndex:Number(b.batchIndex)||0,batchCount:Number(b.batchCount)||1,candidateCount:s.games.length,parsedCount:a.bets.filter(x=>!x._fallback).length,responseShape:responseShape(r),rawSample:clean(raw,1200)}});
 }catch(e){return json({error:'Workers AI analysis unavailable',stage:'inference',requestId:id,message:clean(e?.message||e,500),zeroCost:true,paidFallback:false},503)}
}};
