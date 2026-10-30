import { chromium, webkit } from 'playwright';

const base = 'http://127.0.0.1:8765';
const pages = [
  {path:'/index.html', name:'store'},
  {path:'/investors.html', name:'investors'},
  {path:'/policies.html', name:'customer-care'}
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
            viewport:window.innerWidth,
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
        if (geometry.document>geometry.viewport+3){
          console.error(prefix+' OVERFLOW '+JSON.stringify(geometry));
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
          await page.locator('#vision').scrollIntoViewIfNeeded();
          await page.screenshot({path:'mobile-captures/'+engineName+'-'+viewport.width+'-vision.png'});
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
        console.log(prefix+': '+geometry.document+'px content / '+geometry.viewport+'px viewport');
      }
      await context.close();
    }
  }finally{await browser.close();}
}
if(failed)process.exitCode=1;
