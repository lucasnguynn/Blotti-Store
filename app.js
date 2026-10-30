'use strict';
/* Blotti Babywear - interactive static concept storefront. No backend, payment processing or real inventory. */
const PRODUCTS=[
{id:'little-cloud',image:'assets/blotti-sku-cream.webp?v=20261031',name:'Little Cloud Bodysuit',category:'Bodysuits',type:'Everyday essential',price:399000,badge:'Hero piece',color:'#f7ede2',outline:'#b99eaa',bg:'#eddcf0',pattern:'stars',shape:'body',colors:['#f7ede2','#e6bfcf','#c8d9b8'],desc:'Our proposed signature everyday bodysuit with a gentle neckline and fuss-free snap concept. A thoughtful first piece for little wardrobes.',features:['Signature Fabric concept','Snap-front design concept','Everyday comfort'],sizes:['50','60','70','80','90']},
{id:'peach-petal',image:'assets/blotti-sku-pink.webp?v=20261031',name:'Blush Moon Bodysuit',category:'Bodysuits',type:'Soft little favorite',price:359000,badge:'So sweet',color:'#e9a9ac',outline:'#b9788e',bg:'#f9e4df',pattern:'flowers',shape:'body',colors:['#e9a9ac','#f3e3d2','#a5bfa4'],desc:'A blush-toned bodysuit concept with star and moon details, designed for gentle everyday movement.',features:['Easy-dressing concept','Playful printed motif','Fabric checks planned'],sizes:['50','60','70','80','90']},
{id:'sage-snuggle',image:'assets/blotti-sleep-green.webp',name:'Sage Dream Bodysuit',category:'Sleepwear',type:'Dreamtime collection',price:429000,badge:'Bedtime bliss',color:'#a7b79f',outline:'#718a74',bg:'#e8eddd',pattern:'stars',shape:'sleep',colors:['#a7b79f','#d5b7d9','#f8d7bf'],desc:'A cozy one-piece concept for winding down. Proposed gentle construction and easy nighttime changes.',features:['Full-length silhouette','Comfort-focused construction','Wash-stability testing planned'],sizes:['50','60','70','80','90']},
{id:'sky-day',image:'assets/blotti-play-blue.webp',name:'Sky Blue ActivePlay Set',category:'Sets',type:'Playtime pairings',price:449000,badge:'Mix & match',color:'#a7c8ed',outline:'#7d9fc7',bg:'#e4effa',pattern:'dots',shape:'set',colors:['#a7c8ed','#dcb9d9','#eec6b5'],desc:'A powder blue and cream two-piece concept designed for little everyday adventures.',features:['Matching top and shorts','Designed for playful movement','Illustrative first collection'],sizes:['60','70','80','90','100']},
{id:'lilac-lullaby',image:'assets/blotti-sleep-pink.webp',name:'Pink Dream Bodysuit',category:'Bodysuits',type:'DreamySleep collection',price:329000,badge:'Newborn edit',color:'#c8b1de',outline:'#9274ad',bg:'#f0e5f8',pattern:'flowers',shape:'wrap',colors:['#c8b1de','#f4dfca','#c0d5d1'],desc:'A soft pastel bodysuit concept with tiny moon and star details, inspired by Blotti’s DreamySleep collection.',features:['Wrap silhouette','Gentle trim concept','Baby-first details'],sizes:['50','60','70','80']},
{id:'sunny-morning',image:'assets/blotti-play-cream.webp',name:'Cream Day Play Set',category:'Sets',type:'Little adventures',price:419000,badge:'Playful pick',color:'#f4d798',outline:'#c5a365',bg:'#f8edcf',pattern:'dots',shape:'set',colors:['#f4d798','#e5afbb','#9bbda7'],desc:'A cream short-sleeve tee and shorts set inspired by Blotti’s ActivePlay artwork.',features:['Mix-and-match silhouette','Designed for easy movement','Illustrative color palette'],sizes:['60','70','80','90','100']},
{id:'mum-mini',image:'assets/blotti-play-pink.webp',name:'Blush Pocket Play Set',category:'Sets',type:'ActivePlay collection',price:449000,badge:'Playful pick',color:'#d6b1bd',outline:'#a87e8b',bg:'#f5e1e7',pattern:'hearts',shape:'set',colors:['#d6b1bd','#a8bea8','#d9caec'],desc:'A blush pink top and shorts concept for playful, easygoing little adventures.',features:['Matching set concept','Soft everyday styling','Prototype image'],sizes:['60','70','80','90','100']},
{id:'welcome-little',image:'assets/blotti-packaging.webp',name:'Welcome Little One Gift Edit',category:'Gifting',type:'Little gift collection',price:399000,badge:'Gift idea',color:'#b7c5dd',outline:'#8493ac',bg:'#e8e2f6',pattern:'hearts',shape:'bundle',colors:['#b7c5dd','#ebc0d0','#d2d9ae'],desc:'A Blotti-branded illustrated gift packaging concept. Final bundle contents, availability and delivery are not yet established.',features:['Concept gift presentation','Thoughtful color story','No physical inventory'],sizes:['50','60','70','80']},,
{id:'duck-splash',image:'assets/blotti-splash.webp',name:'Little Duck Stripe Bodysuit',category:'Bodysuits',type:'SplashSafe concept edit',price:389000,badge:'Playful stripes',color:'#b9d7fa',outline:'#84a3c8',bg:'#e0ebfb',pattern:'dots',shape:'body',colors:['#b9d7fa','#ffe39b','#f4f2e7'],desc:'A sky-blue striped short-sleeve bodysuit concept, finished with cheerful duck details and blue binding.',features:['Early colorway concept','Short-sleeve construction concept','Testing and sizing not yet validated'],sizes:['50','60','70','80','90']}
];
const SIZE_STEPS=[50,60,70,80,90,100];
const ARTICLE_CONTENT={
fit:{kicker:'THE LITTLE LEARNING CORNER · FIT NOTES',title:'Why age isn’t the whole story of size',body:'<p>Two babies of the same age can have different body proportions. A label based on age can help you start browsing, but it does not replace measurements.</p><h3>Try this instead</h3><ul><li>Measure your baby’s length or height carefully and compare it with the actual garment size chart.</li><li>Consider ease for movement and whether your little one is between sizes.</li><li>Look at the fabric’s stretch, garment construction, and any after-wash measurements.</li></ul><p>Blotti’s planned Learning Fit System connects measurement guidance with feedback from actual garment fit. Our early height-based guidance is a starting point and will be refined using verified product measurements.</p>'},
fabric:{kicker:'THE LITTLE LEARNING CORNER · FABRIC NOTES',title:'What does “wash-tested” really mean?',body:'<p>Textile products can change shape after laundering. A meaningful wash-related claim should tell you what was tested, how it was washed, and what happened afterwards.</p><h3>Useful things to look for</h3><ul><li>Defined domestic washing and drying procedures, such as those described by ISO 6330.</li><li>Dimensional-change assessment, such as ISO 5077.</li><li>A real result with sample identification, test conditions, and the measured change.</li></ul><p>Blotti proposes testing as part of product validation. No actual Blotti lab results have been supplied for this demo.</p>'},
growth:{kicker:'THE LITTLE LEARNING CORNER · PARENT NOTES',title:'A little wardrobe that grows with baby',body:'<p>Because babies grow quickly, we think a capsule wardrobe should start with pieces that can be worn often, paired easily, and sized thoughtfully.</p><h3>Three small ideas</h3><ul><li>Begin with versatile essentials, then expand only when you discover what really works.</li><li>Keep a simple record of favorite fits to make next-size shopping easier.</li><li>Notice how each item holds up after washing, not just how it feels on day one.</li></ul><p>Our proposed Next-Size Purchase Loop is designed to offer useful suggestions when families need them, rather than pushing unnecessary purchases.</p>'}
};
const el=(s,root=document)=>root.querySelector(s);
const els=(s,root=document)=>Array.from(root.querySelectorAll(s));
const icon=(name)=>'<svg class="icon" aria-hidden="true"><use href="#i-'+name+'"/></svg>';
const money=(n)=>new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0}).format(n);
const safeLoad=(key,fallback)=>{try{const raw=JSON.parse(localStorage.getItem(key));return raw??fallback;}catch{return fallback;}};
let state={
  cart:Array.isArray(safeLoad('blotti-cart-v1',[]))?safeLoad('blotti-cart-v1',[]):[],
  wishlist:Array.isArray(safeLoad('blotti-wishlist-v1',[]))?safeLoad('blotti-wishlist-v1',[]):[],
  category:'All',sort:'featured',query:'',size:'70'
};
state.cart=state.cart.filter(x=>x&&PRODUCTS.some(p=>p.id===x.id)&&Number.isInteger(x.qty)&&x.qty>0&&x.qty<=99&&typeof x.size==='string');
state.wishlist=state.wishlist.filter(x=>typeof x==='string'&&PRODUCTS.some(p=>p.id===x));
const persist=()=>{try{localStorage.setItem('blotti-cart-v1',JSON.stringify(state.cart));localStorage.setItem('blotti-wishlist-v1',JSON.stringify(state.wishlist));}catch{}};
const product=(id)=>PRODUCTS.find(p=>p.id===id);
let toastTimer;
function toast(message){const n=el('#toast');n.textContent=message;n.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.classList.remove('visible'),3100);}
function garmentSVG(p){
 const fill=p.color,stroke=p.outline,uid=p.id,emboss='#fffaf2';
 const base=(path)=>'<path d="'+path+'" fill="url(#cloth-'+uid+')" stroke="'+stroke+'" stroke-width="2" stroke-linejoin="round"/>';
 const seam=(path)=>'<path d="'+path+'" fill="none" stroke="'+stroke+'" stroke-width="1.7" opacity=".55" stroke-linecap="round"/>';
 let garment='';
 if(p.shape==='body'){
 garment=base('M111 48 Q150 38 189 48 L211 60 257 101 235 133 208 118 213 228 Q217 251 237 263 L222 312 178 299 151 280 122 299 78 312 63 263 Q84 249 87 228 L92 118 65 133 43 101 89 60Z')+seam('M109 63Q151 82 191 63M92 116L105 127M209 116L194 127M96 248Q151 280 204 248')+'<path d="M112 49Q150 87 188 49" fill="none" stroke="'+emboss+'" stroke-width="7" opacity=".9"/><g fill="'+emboss+'" stroke="'+stroke+'" stroke-width="1"><circle cx="131" cy="287" r="4"/><circle cx="152" cy="281" r="4"/><circle cx="173" cy="287" r="4"/></g>';
 }else if(p.shape==='sleep'){
 garment=base('M112 42Q150 32 188 42L215 56 254 102 235 139 208 119 214 174 218 312 167 312 155 210 145 210 132 312 81 312 86 174 92 119 65 139 46 102 86 56Z')+seam('M112 55Q150 77 188 55M151 85L151 202 162 287M88 175L129 186M214 175L174 186')+'<path d="M113 43Q150 80 187 43" fill="none" stroke="'+emboss+'" stroke-width="7" opacity=".88"/><path d="M153 97v113" stroke="'+emboss+'" stroke-width="4" stroke-dasharray="2 18" stroke-linecap="round"/>';
 }else if(p.shape==='wrap'){
 garment=base('M115 62Q151 44 185 62L207 67 252 106 227 140 205 122 214 267 86 267 95 122 73 140 48 106 92 67Z')+seam('M110 71L191 264M187 73L111 266M86 255h128')+'<path d="M108 69L188 262" stroke="'+emboss+'" stroke-width="6" opacity=".8"/><circle cx="188" cy="225" r="5" fill="'+emboss+'"/><circle cx="111" cy="225" r="5" fill="'+emboss+'"/><path d="M88 265L74 290h152l-14-25" fill="'+fill+'" opacity=".8"/>';
 }else if(p.shape==='bundle'){
 garment='<g transform="translate(-46,16) scale(.78)">'+base('M112 48Q150 38 188 48L209 65 247 102 227 131 205 118 209 241 194 285 151 264 106 285 90 241 95 118 73 131 53 102 91 65Z')+'</g><g transform="translate(93,58) scale(.65)">'+base('M115 62Q150 43 185 62L208 67 253 106 227 140 206 123 213 276 87 276 94 123 73 140 47 106 92 67Z')+'</g><path d="M80 295h140M98 305h104" stroke="'+stroke+'" opacity=".5" stroke-width="3"/>';
 }else{
 garment='<g transform="translate(-17,-8) scale(.77)">'+base('M112 54Q150 43 188 54L210 69 253 106 229 139 206 121 215 222 85 222 94 121 71 139 47 106 90 69Z')+seam('M110 65Q150 86 190 65')+'</g><g transform="translate(78,96) scale(.67)">'+base('M93 58L151 64 208 58 229 232 171 240 150 165 130 240 71 232Z')+seam('M150 75v89')+'</g>';
 }
 const accents= p.pattern==='flowers'?'<g fill="#fff5da" stroke="'+stroke+'" stroke-width="1.1" opacity=".88"><g transform="translate(133 156)"><circle r="12"/><circle cx="-11" cy="-7" r="8"/><circle cx="11" cy="-7" r="8"/><circle cx="0" cy="-15" r="8"/><circle cx="0" cy="4" r="5" fill="#e7a2aa"/></g><g transform="translate(178 204) scale(.65)"><circle r="14"/><circle cx="-12" cy="-7" r="9"/><circle cx="12" cy="-7" r="9"/><circle cx="0" cy="-16" r="9"/></g></g>':p.pattern==='dots'?'<g fill="#fffaf1" opacity=".85"><circle cx="130" cy="142" r="7"/><circle cx="173" cy="166" r="6"/><circle cx="142" cy="210" r="8"/><circle cx="185" cy="239" r="5"/><circle cx="116" cy="243" r="5"/></g>':p.pattern==='hearts'?'<g fill="#fff8f1" opacity=".8"><path d="M134 151c-22-23-43 8 0 35 43-27 22-58 0-35Z"/><path d="M179 216c-14-15-28 6 0 23 28-17 14-38 0-23Z"/></g>':'<g fill="#fffaf3" opacity=".8"><path d="m139 145 5 12 13 2-10 9 3 13-11-7-12 7 3-13-10-9 14-2Z"/><path d="m179 216 3 8 9 1-7 6 2 9-7-5-8 5 2-9-7-6 9-1Z"/><circle cx="118" cy="224" r="4"/><circle cx="185" cy="128" r="4"/></g>';
 return '<svg xmlns="http://www.w3.org/2000/svg" class="product-garment" viewBox="0 0 300 350" role="img" aria-label="Illustration of '+p.name+'"><defs><linearGradient id="cloth-'+uid+'" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="'+fill+'"/><stop offset=".58" stop-color="'+fill+'"/><stop offset="1" stop-color="'+stroke+'" stop-opacity=".52"/></linearGradient></defs><ellipse cx="150" cy="324" rx="85" ry="11" fill="#493445" opacity=".09"/>'+garment+accents+'<text x="151" y="116" font-family="Dancing Script,cursive" text-anchor="middle" fill="'+stroke+'" font-size="18" opacity=".8">Blotti</text></svg>';
}
function photoMarkup(p){return p.image?'<img class="blotti-item-photo" src="'+p.image+'" alt="'+p.name+' concept product image" loading="lazy">':garmentSVG(p);}
function productCard(p){
 const saved=state.wishlist.includes(p.id);
 return '<article class="product-card"><div class="product-media" style="--product-bg:'+p.bg+'" data-quick="'+p.id+'" role="button" tabindex="0" aria-label="View '+p.name+'">'+
 photoMarkup(p)+'<span class="product-badge">'+p.badge+'</span><button class="wishlist-btn '+(saved?'is-saved':'')+'" data-wish="'+p.id+'" aria-label="'+(saved?'Remove '+p.name+' from':'Add '+p.name+' to')+' favorites" aria-pressed="'+saved+'">'+icon('heart')+'</button><button type="button" class="quick-add" data-quick="'+p.id+'">Quick view & add <span>↗</span></button></div>'+
 '<div class="product-details"><span class="product-type">'+p.type+'</span><h3 data-quick="'+p.id+'" role="button" tabindex="0">'+p.name+'</h3><div class="product-price">'+money(p.price)+'</div><div class="product-colors">'+p.colors.map(c=>'<span class="color-dot" style="background:'+c+'"></span>').join('')+'<small>'+p.colors.length+' color stories</small></div></div></article>';
}
function renderProducts(){
 const q=state.query.toLocaleLowerCase().trim();
 let chosen=PRODUCTS.filter(p=>(state.category==='All'||p.category===state.category)&&(!q||[p.name,p.category,p.type,p.desc].join(' ').toLowerCase().includes(q)));
 if(state.sort==='price-asc')chosen.sort((a,b)=>a.price-b.price);
 if(state.sort==='price-desc')chosen.sort((a,b)=>b.price-a.price);
 if(state.sort==='name')chosen.sort((a,b)=>a.name.localeCompare(b.name));
 el('#productGrid').innerHTML=chosen.length?chosen.map(productCard).join(''):'<div class="empty-state"><h3>No little treasures found.</h3><p>Try another word or category.</p><button type="button" class="pill outline" id="emptyReset">Show all products</button></div>';
 el('#productCount').textContent='Showing '+chosen.length+' of '+PRODUCTS.length+' concept pieces';
 els('[data-category]').forEach(btn=>{btn.classList.toggle('active',btn.dataset.category===state.category);btn.setAttribute('aria-pressed',String(btn.dataset.category===state.category));});
}
function countCart(){return state.cart.reduce((sum,item)=>sum+item.qty,0)}
function updateCounters(){const n=countCart();el('#cartCount').textContent=n;el('#drawerCartCount').textContent='('+n+')';el('#wishCount').textContent=state.wishlist.length;el('#wishCount').hidden=!state.wishlist.length;}
function addToCart(id,size,quantity=1){const found=state.cart.find(x=>x.id===id&&x.size===size);if(found)found.qty=Math.min(99,found.qty+quantity);else state.cart.push({id,size,qty:quantity});persist();updateCounters();renderCart();toast('Added to your little bag');}
function toggleWish(id){if(state.wishlist.includes(id))state.wishlist=state.wishlist.filter(x=>x!==id);else state.wishlist.push(id);persist();updateCounters();renderProducts();renderWishlist();toast(state.wishlist.includes(id)?'Saved to favorites':'Removed from favorites');}
function renderCart(){
 const list=el('#cartItems');
 if(!state.cart.length){list.innerHTML='<div class="drawer-empty"><div class="empty-heart">'+icon('heart')+'</div><h3>Nothing in your little bag (yet).</h3><p>Your next tiny favorite is only a click away.</p><button type="button" class="pill outline" data-drawer-shop>Explore the collection '+icon('arrow')+'</button></div>';}
 else list.innerHTML=state.cart.map(item=>{const p=product(item.id);return '<article class="bag-item"><div class="bag-thumb" style="--product-bg:'+p.bg+'">'+photoMarkup(p)+'</div><div class="bag-info"><h3>'+p.name+'</h3><small>Concept size '+item.size+'</small><strong>'+money(p.price*item.qty)+'</strong><div class="bag-actions"><div class="qty-control"><button type="button" data-qty="'+p.id+'" data-size="'+item.size+'" data-delta="-1" aria-label="Decrease quantity">−</button><span>'+item.qty+'</span><button type="button" data-qty="'+p.id+'" data-size="'+item.size+'" data-delta="1" aria-label="Increase quantity">+</button></div><button type="button" class="remove-link" data-remove="'+p.id+'" data-size="'+item.size+'">Remove</button></div></div></article>';}).join('');
 el('#cartSubtotal').textContent=money(state.cart.reduce((sum,x)=>sum+product(x.id).price*x.qty,0));
}
function renderWishlist(){const list=el('#wishlistItems');list.innerHTML=!state.wishlist.length?'<div class="drawer-empty"><div class="empty-heart">'+icon('heart')+'</div><h3>Save what makes you smile.</h3><p>Tap a heart on any piece to keep it here.</p><button type="button" class="pill outline" data-drawer-shop>Shop little favorites '+icon('arrow')+'</button></div>':state.wishlist.map(id=>{const p=product(id);return '<article class="bag-item"><div class="bag-thumb" style="--product-bg:'+p.bg+'">'+photoMarkup(p)+'</div><div class="bag-info"><h3>'+p.name+'</h3><small>'+p.type+'</small><strong>'+money(p.price)+'</strong><div class="bag-actions"><button class="remove-link" data-wish="'+p.id+'">Remove</button><button type="button" class="pill subtle small" data-quick="'+p.id+'">View piece ↗</button></div></div></article>';}).join('');}
let activePanel=null,previousFocus=null,overlayTimer;
function showOverlay(){clearTimeout(overlayTimer);el('#overlay').hidden=false;requestAnimationFrame(()=>el('#overlay').classList.add('visible'));document.body.classList.add('no-scroll');}
function hideOverlay(){el('#overlay').classList.remove('visible');overlayTimer=setTimeout(()=>{if(!activePanel)el('#overlay').hidden=true;},320);document.body.classList.remove('no-scroll');}
function closePanels(){els('.drawer').forEach(d=>{d.classList.remove('open');d.setAttribute('aria-hidden','true')});el('#modal').classList.remove('open');el('#modal').setAttribute('aria-hidden','true');activePanel=null;hideOverlay();if(previousFocus?.isConnected)previousFocus.focus();}
function openDrawer(name){previousFocus=document.activeElement;els('.drawer').forEach(d=>{d.classList.remove('open');d.setAttribute('aria-hidden','true')});const n=el(name==='cart'?'#cartDrawer':'#wishlistDrawer');activePanel=n;showOverlay();n.classList.add('open');n.setAttribute('aria-hidden','false');n.querySelector('[data-close]').focus();}
function openModal(markup){previousFocus=document.activeElement;el('#modalContent').innerHTML=markup;activePanel=el('#modal');showOverlay();el('#modal').classList.add('open');el('#modal').setAttribute('aria-hidden','false');el('#modalClose').focus();}
function showProduct(id){const p=product(id);if(!p)return;state.size=p.sizes.includes(state.size)?state.size:p.sizes[0];openModal('<div class="quick-view"><div class="quick-image" style="--product-bg:'+p.bg+'">'+photoMarkup(p)+'</div><div class="quick-info"><span class="eyebrow">'+p.category.toUpperCase()+' · THE BLOTTI EDIT</span><h2 id="modalTitle">'+p.name+'</h2><div class="modal-price">'+money(p.price)+'</div><p>'+p.desc+'</p><div class="quick-detail">'+p.features.map(x=>'<span>· '+x+'</span>').join('')+'</div><label>Explore a size <span>(cm)</span></label><div class="size-buttons" role="group" aria-label="Choose a size">'+p.sizes.map(s=>'<button type="button" data-size-pick="'+s+'" class="'+(state.size===s?'selected':'')+'" aria-pressed="'+(state.size===s)+'">'+s+'</button>').join('')+'</div><button class="pill dark modal-add" data-add="'+id+'" type="button">Add to my little bag '+icon('bag')+'</button><p class="modal-note">A first look at the Blotti collection. Ordering and final product details will be confirmed at launch.</p><a href="#fit" class="text-link" id="modalFitLink">Need size help? Try Fit Finder ↗</a></div></div>');}
function showArticle(key){const a=ARTICLE_CONTENT[key];if(!a)return;openModal('<article class="article-modal"><span class="eyebrow">'+a.kicker+'</span><h2 id="modalTitle">'+a.title+'</h2>'+a.body+'<button type="button" class="pill outline" data-article-close>Back to Blotti '+icon('arrow')+'</button></article>');}
function setCategory(cat){state.category=cat;state.query='';el('#siteSearch').value='';renderProducts();}
function initFit(){
 const existing=safeLoad('blotti-fit-v1',null);
 if(existing&&typeof existing.height==='number'&&typeof existing.age==='number')toast('Welcome back! Your optional fit profile is saved on this device.');
 el('#fitForm').addEventListener('submit',e=>{
  e.preventDefault();const age=Number(el('#babyAge').value),height=Number(el('#babyHeight').value),weight=el('#babyWeight').value?Number(el('#babyWeight').value):null;
  if(!Number.isFinite(height)||height<40||height>110||!Number.isFinite(age)||age<0||age>36){toast('Please enter an age (0–36 months) and height (40–110 cm).');return;}
  if(weight!==null&&(!Number.isFinite(weight)||weight<1||weight>25)){toast('Please check the optional weight value.');return;}
  const roomy=el('input[name=fitPreference]:checked').value==='roomy';
  const idx=height<=55?0:height<=65?1:height<=75?2:height<=85?3:height<=95?4:5;
  const result=SIZE_STEPS[Math.min(5,idx+(roomy?1:0))];state.size=String(result);
  el('#sizeResult').textContent=result+' cm';
  el('#sizeExplanation').textContent='Based on a height of '+height+' cm'+(roomy?' with extra growing room':'')+', our early guide suggests size '+result+'. Check the final product size chart before ordering; age and weight do not yet change this preliminary recommendation.';
  el('#fitStepOne').hidden=true;el('#fitResult').hidden=false;el('#fitStepLabel').textContent='STEP 2 OF 2';el('#fitWidgetTitle').textContent='A tiny fit, just for them.';el('#fitWidgetSub').textContent='Your illustrative starting point';el('#fitSaved').textContent='';
  el('#fitWidget').scrollIntoView({behavior:'smooth',block:'center'});
 });
 el('#fitRestart').addEventListener('click',()=>{el('#fitStepOne').hidden=false;el('#fitResult').hidden=true;el('#fitStepLabel').textContent='STEP 1 OF 2';el('#fitWidgetTitle').textContent="Let's find their happy fit!";el('#fitWidgetSub').textContent='A few little details help us suggest a starting size.';});
 el('#shopMySize').addEventListener('click',()=>{document.location.hash='shop';toast('Size '+state.size+' cm selected as your starting point. Choose the size on each piece.');});
 el('#saveFitButton').addEventListener('click',()=>{if(!el('#saveFit').checked){toast('Check the consent box to save this profile on your device.');return;}const obj={age:Number(el('#babyAge').value),height:Number(el('#babyHeight').value),weight:el('#babyWeight').value?Number(el('#babyWeight').value):null,size:state.size,created:new Date().toISOString()};try{localStorage.setItem('blotti-fit-v1',JSON.stringify(obj));el('#fitSaved').textContent='Saved locally on this device';}catch{el('#fitSaved').textContent='Local storage is not available in this browser.';}});
}
function initEvents(){
 el('#cartToggle').addEventListener('click',()=>openDrawer('cart'));
 el('#wishToggle').addEventListener('click',()=>{renderWishlist();openDrawer('wish');});
 el('#overlay').addEventListener('click',closePanels);els('[data-close]').forEach(b=>b.addEventListener('click',closePanels));el('#modalClose').addEventListener('click',closePanels);
 el('#checkoutDemo').addEventListener('click',()=>toast('Online ordering is not yet open. Enjoy exploring the Blotti collection.'));
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&activePanel){closePanels();return;}
  if(e.key==='Escape'&&!el('#searchPanel').hidden)el('#searchPanel').hidden=true;
  if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-quick][role="button"]')){e.preventDefault();showProduct(e.target.dataset.quick);}
  if(e.key==='Tab'&&activePanel){const nodes=els('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled])',activePanel).filter(x=>x.getClientRects().length);if(nodes.length){const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}
 });
 el('#menuToggle').addEventListener('click',()=>{const nav=el('#mainNav');const open=nav.classList.toggle('open');el('#menuToggle').setAttribute('aria-expanded',String(open));el('#menuToggle').setAttribute('aria-label',open?'Close menu':'Open menu');});
 els('[data-nav]').forEach(a=>a.addEventListener('click',()=>{el('#mainNav').classList.remove('open');el('#menuToggle').setAttribute('aria-expanded','false');}));
 el('#searchToggle').addEventListener('click',()=>{const n=el('#searchPanel');n.hidden=!n.hidden;if(!n.hidden)el('#siteSearch').focus();});el('#searchClose').addEventListener('click',()=>el('#searchPanel').hidden=true);
 el('#searchForm').addEventListener('submit',e=>{e.preventDefault();state.query=el('#siteSearch').value.trim();state.category='All';renderProducts();el('#searchPanel').hidden=true;document.location.hash='shop';});
 els('[data-category]').forEach(b=>b.addEventListener('click',()=>setCategory(b.dataset.category)));
 els('[data-filter-link]').forEach(a=>a.addEventListener('click',()=>setCategory(a.dataset.filterLink)));
 el('#sortSelect').addEventListener('change',e=>{state.sort=e.target.value;renderProducts();});
 el('#resetFilters').addEventListener('click',()=>{setCategory('All');el('#sortSelect').value='featured';state.sort='featured';renderProducts();});
 document.addEventListener('click',e=>{
  const wish=e.target.closest('[data-wish]');if(wish){e.stopPropagation();toggleWish(wish.dataset.wish);return;}
  const quick=e.target.closest('[data-quick]');if(quick){e.stopPropagation();showProduct(quick.dataset.quick);return;}
  const picker=e.target.closest('[data-size-pick]');if(picker){state.size=picker.dataset.sizePick;els('[data-size-pick]').forEach(btn=>{const selected=btn===picker;btn.classList.toggle('selected',selected);btn.setAttribute('aria-pressed',String(selected));});return;}
  const add=e.target.closest('[data-add]');if(add){addToCart(add.dataset.add,state.size);closePanels();openDrawer('cart');return;}
  const delta=e.target.closest('[data-qty]');if(delta){const item=state.cart.find(x=>x.id===delta.dataset.qty&&x.size===delta.dataset.size);if(item){item.qty+=Number(delta.dataset.delta);if(item.qty<=0)state.cart=state.cart.filter(x=>x!==item);persist();updateCounters();renderCart();}return;}
  const remove=e.target.closest('[data-remove]');if(remove){state.cart=state.cart.filter(x=>!(x.id===remove.dataset.remove&&x.size===remove.dataset.size));persist();updateCounters();renderCart();return;}
  if(e.target.closest('[data-drawer-shop]')){closePanels();document.location.hash='shop';return;}
  if(e.target.closest('[data-article-close]')){closePanels();return;}
  if(e.target.closest('#emptyReset')){setCategory('All');return;}
  if(e.target.closest('#modalFitLink'))closePanels();
  const guide=e.target.closest('[data-guide]');if(guide)showArticle(guide.dataset.guide);
 });

}
function initReveals(){const elsToReveal=els('.reveal');if(!('IntersectionObserver' in window)){elsToReveal.forEach(n=>n.classList.add('in-view'));return;}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}});},{threshold:.12,rootMargin:'0px 0px 40px 0px'});elsToReveal.forEach(n=>observer.observe(n));}
renderProducts();renderCart();renderWishlist();updateCounters();initFit();initEvents();initReveals();