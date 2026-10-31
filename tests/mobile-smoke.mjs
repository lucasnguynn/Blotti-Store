import { chromium, webkit } from 'playwright';

const base = 'http://127.0.0.1:8765';
const pages = [
  {path:'/index.html', name:'store'},
  {path:'/investors.html', name:'investors'},
  {path:'/policies.html', name:'customer-care'},
  {path:'/checkout.html', name:'checkout'}
];
const sizes = [
  {width:320,height:700},
  {width:375,height:812},
  {width:390,height:844},
  {width:768,height:1024}
];
let failed = false;
for (const [engineName, engine] of [['webkit',webkit],['chromium',chromium]]) {
  const browser = await engine.launch({headless:true});
  try {
    for (const viewport of sizes) {
      const context=await browser.newContext({viewport,deviceScaleFactor:2,isMobile:viewport.width<=390,hasTouch:viewport.width<=390});
      await context.addInitScript(()=>{
        if(location.pathname.endsWith('/checkout.html')){
          localStorage.setItem('blotti-cart-v1',JSON.stringify([
            {id:'little-cloud',size:'70',qty:2},
            {id:'peach-petal',size:'60',qty:1}
          ]));
        }
      });
      const page=await context.newPage();
      const errors=[];
      page.on('pageerror',error=>errors.push(error.message));
      for (const item of pages) {
        await page.goto(base+item.path,{waitUntil:'domcontentloaded',timeout:45000});
        await page.waitForTimeout(200);
        const geometry=await page.evaluate(()=>{
          const heading=document.querySelector('.inv-vision-layout h2');
          const marker=document.querySelector('.inv-vision-band');
          const bounding=heading?.getBoundingClientRect();
          return {
            layoutViewport:window.innerWidth,
            visualViewport:window.visualViewport?.width,
            document:document.documentElement.scrollWidth,
            body:document.body.scrollWidth,
            starContent:marker?getComputedStyle(marker,'::before').content:null,
            headingWidth:heading?.scrollWidth,
            headingClient:heading?.clientWidth,
            headingBounds:bounding?{left:bounding.left,right:bounding.right}:null,
            navLabel:document.querySelector('.main-nav')?.textContent?.includes('For Investors')
          };
        });
        const prefix=engineName+'/'+viewport.width+'/'+item.name;
        // Compare with the configured physical CSS viewport, NOT window.innerWidth.
        // On mobile Chromium a min-content overflow can silently enlarge innerWidth
        // (e.g. a 375px device becomes a 504px layout viewport), hiding the bug.
        if (Math.max(geometry.document, geometry.body, geometry.layoutViewport)>viewport.width+3){
          const offenders=await page.evaluate((expectedWidth)=>{
            return Array.from(document.querySelectorAll('body *'))
              .map(node=>{
                const rect=node.getBoundingClientRect();
                const style=getComputedStyle(node);
                return {
                  element:node.tagName.toLowerCase()+(node.id?'#'+node.id:'')+
                    (typeof node.className==='string'&&node.className?
                      '.'+node.className.trim().split(/\s+/).slice(0,2).join('.'):''),
                  right:Math.round(rect.right),
                  width:Math.round(rect.width),
                  minWidth:style.minWidth,
                  overflowX:style.overflowX
                };
              })
              .filter(x=>x.width>expectedWidth+2||x.right>expectedWidth+5)
              .sort((a,b)=>b.width-a.width).slice(0,12);
          },viewport.width);
          console.error(prefix+' OVERFLOW '+JSON.stringify({expected:viewport.width,...geometry,offenders}));
          if(item.name==='customer-care'){
            await page.screenshot({path:'mobile-captures/'+engineName+'-'+viewport.width+'-care-failure.png',fullPage:true});
          }
          failed=true;
        }
        if (errors.length){
          console.error(prefix+' JS ERRORS '+errors.join(' | '));
          failed=true;
          errors.length=0;
        }
        if(item.name==='investors'){
          if(geometry.starContent!=='none'&&geometry.starContent!=='""'){
            console.error(prefix+' A star pseudo-element unexpectedly has glyph content: '+geometry.starContent);
            failed=true;
          }
          if(geometry.headingWidth>geometry.headingClient+3){
            console.error(prefix+' VISION HEADING OVERFLOWS '+JSON.stringify(geometry));
            failed=true;
          }
          if(viewport.width<400){
            const toggle=page.locator('#invMenuToggle');
            await toggle.click();
            if((await toggle.getAttribute('aria-expanded'))!=='true'||!(await page.locator('#investorNav').evaluate(n=>n.classList.contains('open')))){
              console.error(prefix+' Mobile investor menu did not open');
              failed=true;
            }
            await toggle.click();
          }
          const team=page.locator('.inv-person-card');
          if(await team.count()!==7){
            console.error(prefix+' Expected seven member cards, found '+await team.count());
            failed=true;
          }
          await page.locator('#team').scrollIntoViewIfNeeded();
          await page.screenshot({path:'mobile-captures/'+engineName+'-'+viewport.width+'-team.png'});
          const filmButton=page.locator('#investorFilmPlay');
          await filmButton.click();
          const player=page.locator('#investorFilmFrame iframe');
          if(await player.count()!==1 || !(await player.getAttribute('src')).includes('1brvMZ4LMBH9ObX5ex9AN4tygYYxp3LxK/preview')){
            console.error(prefix+' Drive video did not load after pressing play');
            failed=true;
          }
          await page.locator('#vision').scrollIntoViewIfNeeded();
          await page.screenshot({path:'mobile-captures/'+engineName+'-'+viewport.width+'-vision.png'});
        }
        if(item.name==='checkout'){
          const total=page.locator('#checkoutTotal');
          if((await total.textContent()).replace(/[^0-9]/g,'')!=='1157000'){
            console.error(prefix+' Wrong checkout subtotal for saved cart: '+await total.textContent());
            failed=true;
          }
          await page.locator('[name="fullName"]').fill('Test Customer');
          await page.locator('[name="phone"]').fill('0901234567');
          await page.locator('[name="email"]').fill('test@example.com');
          await page.locator('[name="province"]').fill('Ho Chi Minh City');
          await page.locator('[name="district"]').fill('Ward 1');
          await page.locator('[name="street"]').fill('123 Sample Street');
          await page.locator('#continueToPayment').click();
          if(await page.locator('#paymentPanel').isHidden()){
            console.error(prefix+' Checkout did not advance to QR payment');
            failed=true;
          }
          const ref=await page.locator('#checkoutPayReference').textContent();
          if(!/^BLT[0-9]{6}[A-Z0-9]{6}$/.test(ref||'')){
            console.error(prefix+' Invalid transaction reference: '+ref);
            failed=true;
          }
          const image=page.locator('#checkoutQR');
          await image.evaluate(img=>img.decode());
          if(!(await image.evaluate(img=>img.naturalWidth>500))){
            console.error(prefix+' User-provided VietQR asset not loaded');
            failed=true;
          }
          await page.locator('[data-copy="amount"]').click();
          try{
            await page.waitForFunction(()=>/(Copied|unavailable)/i.test(
              document.querySelector('#checkoutCopyStatus')?.textContent||''
            ),null,{timeout:2500});
          }catch{
            console.error(prefix+' Copy amount produced no feedback');
            failed=true;
          }
          await page.locator('[data-copy="reference"]').click();
          try{
            await page.waitForFunction(()=>/(Copied|unavailable)/i.test(
              document.querySelector('#checkoutCopyStatus')?.textContent||''
            ),null,{timeout:2500});
          }catch{
            console.error(prefix+' Copy reference did not respond');
            failed=true;
          }
          await page.locator('#checkoutTransferReported').click();
          if(await page.locator('#pendingPanel').isHidden() || !(await page.locator('#pendingReference').textContent()).includes(ref)){
            console.error(prefix+' Pending-verification receipt was not shown');
            failed=true;
          }
          await page.screenshot({path:'mobile-captures/'+engineName+'-'+viewport.width+'-checkout.png'});
        }
        if(item.name==='store'){
          if(!geometry.navLabel){console.error(prefix+' For Investors link missing');failed=true;}
          const count=await page.locator('.product-card').count();
          if(count<9){console.error(prefix+' Only '+count+' products rendered');failed=true;}
          if(viewport.width<400){
            const toggle=page.locator('#menuToggle');
            await toggle.click();
            if((await toggle.getAttribute('aria-expanded'))!=='true'){console.error(prefix+' Mobile store menu did not open');failed=true;}
            await toggle.click();
          }
        }
        console.log(prefix+': '+geometry.document+'px content / '+viewport.width+'px expected viewport');
      }
      await context.close();
    }
  }finally{await browser.close();}
}
if(failed)process.exitCode=1;
