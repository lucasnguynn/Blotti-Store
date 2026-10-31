'use strict';
/* Blotti checkout preview. Client-side only: no payment gateway, order submission,
   inventory reservation, transfer validation or server-side storage. */
const CATALOG = Object.freeze({
 'little-cloud':{name:'Little Cloud Bodysuit',price:399000,image:'assets/blotti-sku-cream.webp?v=20261031'},
 'peach-petal':{name:'Blush Moon Bodysuit',price:359000,image:'assets/blotti-sku-pink.webp?v=20261031'},
 'sage-snuggle':{name:'Sage Dream Bodysuit',price:429000,image:'assets/blotti-sleep-green.webp'},
 'sky-day':{name:'Sky Blue ActivePlay Set',price:449000,image:'assets/blotti-play-blue.webp'},
 'lilac-lullaby':{name:'Pink Dream Bodysuit',price:329000,image:'assets/blotti-sleep-pink.webp'},
 'sunny-morning':{name:'Cream Day Play Set',price:419000,image:'assets/blotti-play-cream.webp'},
 'mum-mini':{name:'Blush Pocket Play Set',price:449000,image:'assets/blotti-play-pink.webp'},
 'welcome-little':{name:'Welcome Little One Gift Edit',price:399000,image:'assets/blotti-packaging.webp'},
 'duck-splash':{name:'Little Duck Stripe Bodysuit',price:389000,image:'assets/blotti-splash.webp'}
});
const $ = selector => document.querySelector(selector);
const fmt = n => new Intl.NumberFormat('vi-VN').format(n);
const money = n => fmt(n) + ' ₫';
function readCart(){
 let saved;
 try{saved=JSON.parse(localStorage.getItem('blotti-cart-v1')||'[]');}catch{return []}
 if(!Array.isArray(saved))return [];
 return saved
  .filter(item=>item&&Object.prototype.hasOwnProperty.call(CATALOG,item.id)&&
   Number.isInteger(item.qty)&&item.qty>=1&&item.qty<=99&&
   typeof item.size==='string'&&/^(50|60|70|80|90|100)$/.test(item.size))
  .map(item=>({id:item.id,size:item.size,qty:item.qty}));
}
const cart=readCart();
const subtotal=cart.reduce((n,item)=>n+CATALOG[item.id].price*item.qty,0);
const quantity=cart.reduce((n,item)=>n+item.qty,0);
let checkoutInfo=null;
let reference=null;
function addText(parent,tag,text,className){
 const el=document.createElement(tag);
 if(className)el.className=className;
 el.textContent=text;
 parent.append(el);
 return el;
}
function renderSummary(){
 if(cart.length===0){
  $('#checkoutEmpty').hidden=false;
  $('#checkoutContent').hidden=true;
  return;
 }
 $('#checkoutEmpty').hidden=true;
 $('#checkoutContent').hidden=false;
 $('#checkoutItemCount').textContent='('+quantity+')';
 $('#checkoutSubtotal').textContent=money(subtotal);
 $('#checkoutTotal').textContent=money(subtotal);
 const list=$('#checkoutItems');
 const fragment=document.createDocumentFragment();
 for(const item of cart){
  const p=CATALOG[item.id];
  const row=document.createElement('article');row.className='checkout-summary-item';
  const photo=document.createElement('div');photo.className='checkout-summary-photo';
  const img=document.createElement('img');img.src=p.image;img.alt=p.name;img.loading='lazy';photo.append(img);
  const description=document.createElement('div');description.className='checkout-summary-description';
  addText(description,'h3',p.name);
  addText(description,'p','Size '+item.size+' · Qty '+item.qty);
  const price=addText(row,'strong',money(p.price*item.qty),'checkout-summary-price');
  row.replaceChildren(photo,description,price);
  fragment.append(row);
 }
 list.replaceChildren(fragment);
}
function randomReference(){
 const values=new Uint8Array(6);
 if(window.crypto&&crypto.getRandomValues)crypto.getRandomValues(values);
 else for(let i=0;i<values.length;i++) values[i]=Math.floor(Math.random()*256);
 const unique=Array.from(values).map(n=>(n%36).toString(36).toUpperCase()).join('');
 const date=new Date();
 const datePart=String(date.getFullYear()).slice(-2)+String(date.getMonth()+1).padStart(2,'0')+String(date.getDate()).padStart(2,'0');
 return 'BLT'+datePart+unique;
}
function currentFingerprint(){return cart.map(x=>x.id+'/'+x.size+'/'+x.qty).sort().join('|')+'|'+subtotal;}
function getReference(){
 const key='blotti-transfer-session-v1';
 try{
  const cached=JSON.parse(sessionStorage.getItem(key)||'null');
  if(cached&&cached.fingerprint===currentFingerprint()&&/^BLT[0-9]{6}[A-Z0-9]{6}$/.test(cached.code))return cached.code;
 }catch{}
 const code=randomReference();
 try{sessionStorage.setItem(key,JSON.stringify({fingerprint:currentFingerprint(),code}));}catch{}
 return code;
}
function progress(stage){
 $('#progressDelivery').classList.toggle('is-current',stage==='details');
 $('#progressDelivery').classList.toggle('is-done',stage!=='details');
 $('#progressPayment').classList.toggle('is-current',stage!=='details');
}
function showStage(stage){
 $('#deliveryPanel').hidden=stage!=='details';
 $('#paymentPanel').hidden=stage!=='transfer';
 $('#pendingPanel').hidden=stage!=='pending';
 progress(stage);
 const element=stage==='details'?$('#deliveryPanel'):stage==='transfer'?$('#paymentPanel'):$('#pendingPanel');
 element.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
function deliveryDetails(){
 const form=$('#checkoutDeliveryForm');
 const fields=new FormData(form);
 return {
  name:String(fields.get('fullName')||'').trim(),
  phone:String(fields.get('phone')||'').trim(),
  email:String(fields.get('email')||'').trim(),
  province:String(fields.get('province')||'').trim(),
  district:String(fields.get('district')||'').trim(),
  street:String(fields.get('street')||'').trim(),
  note:String(fields.get('note')||'').trim()
 };
}
function prepareTransfer(){
 if(!cart.length)return;
 const form=$('#checkoutDeliveryForm');
 if(!form.reportValidity())return;
 const info=deliveryDetails();
 if(!info.name||!info.phone||!info.province||!info.district||!info.street){form.reportValidity();return;}
 checkoutInfo=info; // intentionally not persisted or sent
 reference=getReference();
 $('#checkoutPayAmount').textContent=fmt(subtotal)+' ₫';
 $('#checkoutPayReference').textContent=reference;
 $('#checkoutCopyStatus').textContent='';
 showStage('transfer');
}
async function copyText(value,status){
 let ok=false;
 if(status)status.textContent='Copying…';
 if(navigator.clipboard&&window.isSecureContext){
  try{await navigator.clipboard.writeText(value);ok=true;}catch{ok=false;}
 }
 // iOS in-app browsers and HTTP sites may deny Clipboard API access.
 // Fall back to the user-gesture-triggered legacy selection method.
 if(!ok){
  let area;
  try{
   area=document.createElement('textarea');
   area.value=value;
   area.setAttribute('readonly','');
   area.style.cssText='position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;z-index:-1';
   document.body.append(area);
   area.focus();area.select();area.setSelectionRange(0,value.length);
   ok=!!document.execCommand('copy');
  }catch{ok=false}
  finally{if(area)area.remove();}
 }
 if(status)status.textContent=ok?'Copied to clipboard.':'Copy unavailable in this browser. Select the displayed text and copy it manually.';
 return ok;
}
function handleCopy(button){
 if(!reference)return;
 const field=button.dataset.copy;
 const value=field==='amount'?String(subtotal):reference;
 copyText(value,$('#checkoutCopyStatus'));
}
function setPending(){
 if(!checkoutInfo||!reference)return;
 $('#pendingReference').textContent=reference;
 $('#pendingAmount').textContent=money(subtotal);
 $('#pendingCopyStatus').textContent='';
 showStage('pending');
}
function copySummary(){
 if(!checkoutInfo||!reference)return;
 const items=cart.map(x=>'- '+CATALOG[x.id].name+' | size '+x.size+' | qty '+x.qty+' | '+money(x.qty*CATALOG[x.id].price)).join('\n');
 const details=[
  'BLOTTI BABYWEAR - TRANSFER REFERENCE',
  'Reference: '+reference,
  'Amount (items only): '+money(subtotal),
  'Transfer status: NOT VERIFIED - no order submitted',
  'Items:',items,
  'Customer: '+checkoutInfo.name,
  'Phone: '+checkoutInfo.phone,
  'Email: '+(checkoutInfo.email||'Not provided'),
  'Address: '+checkoutInfo.street+', '+checkoutInfo.district+', '+checkoutInfo.province,
  'Note: '+(checkoutInfo.note||'None'),
  'Shipping: Not included, confirm separately',
  'This information was created in a browser-only checkout preview.'
 ];
 copyText(details.join('\n'),$('#pendingCopyStatus'));
}
renderSummary();
if(cart.length){
 $('#checkoutDeliveryForm').addEventListener('submit',event=>{event.preventDefault();prepareTransfer();});
 document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',()=>handleCopy(button)));
 $('#checkoutEditDetails').addEventListener('click',()=>showStage('details'));
 $('#checkoutTransferReported').addEventListener('click',setPending);
 $('#copyOrderSummary').addEventListener('click',copySummary);
}
