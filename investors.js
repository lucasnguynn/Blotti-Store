'use strict';
/* Blotti concept-stage Investor Briefing. Interactions are client-only. */
const ROADMAP={
'2026':{title:'Validate & Launch',description:'Prioritize a focused MVP: fabric/product trials, fit guidance testing and actual willingness-to-pay evidence before scaling.',labels:['PRODUCT','MARKET','DECISION GATE'],values:['Prototype & test','Paid demand proof','Evidence before volume']},
'2027':{title:'Retain',description:'Build the next-size purchase journey using real fit feedback and growth-profile insights. Focus on repeat behavior and fit outcomes.',labels:['CUSTOMER','DATA','DECISION GATE'],values:['Cohort retention','Improve fit accuracy','Repeat purchase evidence']},
'2028':{title:'Scale',description:'Expand production and acquisition only after product quality, unit economics and first-purchase conversion are repeatable. Introduce selective B2B.',labels:['OPERATIONS','GROWTH','DECISION GATE'],values:['Supplier repeatability','D2C + selective B2B','Sustainable contribution']},
'2029':{title:'Expand',description:'Broaden market coverage, channels and product categories through evidence-backed experiments, not an unproven assortment expansion.',labels:['MARKET','CHANNEL','DECISION GATE'],values:['Validated segments','Selective new products','Profitable expansion']},
'2030':{title:'Defend',description:'Protect differentiation through accumulated fit knowledge, reliable supplier execution and customer trust. Aim for a repeatable product learning system.',labels:['CAPABILITY','RELATIONSHIP','DECISION GATE'],values:['Product know-how','Long-term customer trust','Durable value']},
};
const FINANCIALS={revenue:{label:'revenue',values:[798,1995,3990],max:3990,color:'revenue'},costs:{label:'total costs',values:[657.2,1759,3169],max:3990,color:'costs'},ebit:{label:'EBIT / operating profit',values:[140.8,235.4,820.8],max:3990,color:'ebit'}};
const $=(q,root=document)=>root.querySelector(q),$$=(q,root=document)=>Array.from(root.querySelectorAll(q));
const fmt=v=>v===Math.round(v)?new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(v)+'M':new Intl.NumberFormat('en-US',{maximumFractionDigits:1}).format(v)+'M';
function selectYear(year){const d=ROADMAP[year];if(!d)return;$$('[data-roadmap]').forEach(btn=>{const selected=btn.dataset.roadmap===year;btn.classList.toggle('active',selected);btn.setAttribute('aria-selected',String(selected));btn.tabIndex=selected?0:-1;});$('#roadmapDetail').innerHTML='<div><span class="inv-roadmap-year">'+year+'</span><h3>'+d.title+'</h3><p>'+d.description+'</p></div><div class="inv-roadmap-checks">'+d.labels.map((label,i)=>'<span>'+label+'</span><b>'+d.values[i]+'</b>').join('')+'</div>';}
function selectFinance(metric){const f=FINANCIALS[metric];if(!f)return;$$('[data-fin-metric]').forEach(btn=>{const selected=btn.dataset.finMetric===metric;btn.classList.toggle('selected',selected);btn.setAttribute('aria-pressed',String(selected));});$$('.inv-bar-column').forEach((bar,i)=>{bar.querySelector('.inv-bar-value').textContent=fmt(f.values[i]);bar.querySelector('.inv-bar').style.height=(f.values[i]/f.max*100).toFixed(2)+'%';bar.querySelector('.inv-bar').dataset.metric=metric;});$('#finViz').setAttribute('aria-label','Bar chart showing projected '+f.label+' in millions of VND: Year 1 '+f.values[0]+', Year 2 '+f.values[1]+', Year 3 '+f.values[2]+'. Model assumptions, not actual results.');}
$$('[data-roadmap]').forEach(btn=>{btn.addEventListener('click',()=>selectYear(btn.dataset.roadmap));btn.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const tabs=$$('[data-roadmap]');const i=tabs.indexOf(btn);const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:e.key==='ArrowRight'?(i+1)%tabs.length:(i+tabs.length-1)%tabs.length;const target=tabs[next];selectYear(target.dataset.roadmap);target.focus();});});
$$('[data-fin-metric]').forEach(btn=>btn.addEventListener('click',()=>selectFinance(btn.dataset.finMetric)));
$('#invMenuToggle').addEventListener('click',()=>{const nav=$('#investorNav'),open=nav.classList.toggle('open');$('#invMenuToggle').setAttribute('aria-expanded',String(open));});
$$('#investorNav a').forEach(a=>a.addEventListener('click',()=>{$('#investorNav').classList.remove('open');$('#invMenuToggle').setAttribute('aria-expanded','false');}));
$('#copyEnquiry').addEventListener('click',async()=>{
 const note='Hello Blotti team,\n\nI reviewed your concept-stage investor briefing and would like to discuss the proposed USD 100,000 fundraising plan, commercial validation milestones, financial model assumptions and potential investment terms. Please share your latest approved investor materials and contact details.\n\nKind regards,';
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(note);$('#invActionStatus').textContent='Investor enquiry copied. Paste it into your email client when you have a verified founder contact.';}else{const area=document.createElement('textarea');area.value=note;area.setAttribute('aria-label','Investor enquiry text');area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();const ok=document.execCommand('copy');area.remove();$('#invActionStatus').textContent=ok?'Investor enquiry copied. Paste it into your email client.':'Copying is unavailable in this browser; please use the website text to draft your enquiry.';}}catch{$('#invActionStatus').textContent='Copying is unavailable here. Please draft your enquiry using the briefing details.';}
});
$('#printBrief').addEventListener('click',()=>window.print());
selectFinance('revenue');selectYear('2026');
/* Click-to-load video. No third-party player or network request until activated.
   The file and cover originate from the user's supplied Blotti Drive folder. */
const investorFilmPlay = $('#investorFilmPlay');
if(investorFilmPlay){
  investorFilmPlay.addEventListener('click',()=>{
    const holder=$('#investorFilmFrame');
    if(!holder || holder.querySelector('iframe')) return;
    const player=document.createElement('iframe');
    player.src='https://drive.google.com/file/d/1brvMZ4LMBH9ObX5ex9AN4tygYYxp3LxK/preview';
    player.title='Blotti Babywear team video - Google Drive player';
    player.allow='autoplay; fullscreen; picture-in-picture';
    player.allowFullscreen=true;
    player.referrerPolicy='strict-origin-when-cross-origin';
    player.loading='eager';
    holder.replaceChildren(player);
    holder.classList.add('is-playing');
    const actions=$('#investorFilmActions');
    if(actions) actions.classList.add('is-ready');
    const note=$('.inv-film-inline-note');
    if(note) note.textContent='Google Drive player loaded. On phones, tap “Larger video” for extra room around its controls, or open directly in Drive.';

  });
}

/* Google Drive's preview adds its own native toolbar, which can crowd a
   16:9 iframe on iPhone. Allow an intentionally taller phone viewport
   without changing the original widescreen desktop player. */
const filmExpandButton=$('#investorFilmExpand');
if(filmExpandButton){
  filmExpandButton.addEventListener('click',()=>{
    const holder=$('#investorFilmFrame');
    if(!holder || !holder.classList.contains('is-playing')) return;
    const expanded=holder.classList.toggle('is-expanded');
    filmExpandButton.setAttribute('aria-pressed',String(expanded));
    const label=$('#investorFilmExpandText');
    if(label) label.textContent=expanded?'Compact video':'Larger video';
  });
}
