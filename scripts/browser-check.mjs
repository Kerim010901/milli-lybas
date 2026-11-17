import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url));
const qa=path.join(root,'.qa');fs.mkdirSync(qa,{recursive:true});
for(const name of ['yup-we-gumus-lybas.txt','yup-we-gumus-lybas-kartasy.pdf']) {const file=path.join(qa,name);if(fs.existsSync(file))fs.unlinkSync(file);}
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'yup-kumus-browser-'));
const chromePath=process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const host=spawn(process.execPath,['server.mjs'],{cwd:root,env:{...process.env,PORT:'3107'},stdio:'pipe'});
let chrome;
let socket;
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function until(fn,message,timeout=15000){const end=Date.now()+timeout;while(Date.now()<end){if(await fn())return;await pause(100);}throw Error(message);}
const problems=[];
try {
 await until(async()=>{try{return (await fetch('http://localhost:3107')).ok;}catch{return false;}},'Local server did not start');
 chrome=spawn(chromePath,['--headless=new','--no-first-run','--no-default-browser-check','--disable-background-networking','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:['ignore','ignore','pipe']});
 let output='';chrome.stderr.on('data',chunk=>{output+=chunk;});
 await until(()=>/DevTools listening on ws:\/\/127\.0\.0\.1:\d+/.test(output),'Chrome debugging endpoint unavailable');
 const endpoint=output.match(/DevTools listening on (ws:\/\/127\.0\.0\.1:(\d+)[^\s]+)/);
 const targets=await (await fetch('http://127.0.0.1:'+endpoint[2]+'/json/list')).json();
 const target=targets.find(t=>t.type==='page');
 socket=new WebSocket(target.webSocketDebuggerUrl);
 await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
 let seq=0;const pending=new Map();
 socket.onmessage=event=>{const message=JSON.parse(event.data);if(message.id){const task=pending.get(message.id);if(task){pending.delete(message.id);message.error?task.reject(Error(JSON.stringify(message.error))):task.resolve(message.result);}}else if(message.method==='Runtime.exceptionThrown')problems.push(message.params.exceptionDetails.exception?.description||message.params.exceptionDetails.text);};
 const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
 const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true,userGesture:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
 const click=selector=>evaluate('document.querySelector('+JSON.stringify(selector)+').click()');
 const input=(selector,value)=>evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});e.value=${JSON.stringify(value)};e.dispatchEvent(new Event('input',{bubbles:true}));})()`);
 const value=(selector,value)=>evaluate(`document.querySelector(${JSON.stringify(selector)}).value=${JSON.stringify(value)}`);
 await send('Runtime.enable');await send('Page.enable');
 await send('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:qa});
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
 await send('Page.navigate',{url:'http://localhost:3107'});
 await until(()=>evaluate("document.querySelectorAll('#grid .card').length===4"),'Initial archive did not render');
 assert.equal(await evaluate("document.querySelector('#studio-title').textContent"),'Diza\u00fdn studi\u00fdasy');
 assert.equal(await evaluate("document.querySelector('#studio-form').textContent.includes('?')"),false);
 await evaluate("document.querySelectorAll('img').forEach(image=>image.loading='eager')");
 await until(()=>evaluate("[...document.images].every(image=>image.complete&&image.naturalWidth>0)"),'Images failed to load');
 const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(qa,'desktop.png'),Buffer.from(shot.data,'base64'));
 await click('#all-toggle');assert.equal(await evaluate("document.querySelectorAll('#grid .card').length"),23);
 await click('[data-filter="jewel"]');assert.equal(await evaluate("document.querySelectorAll('#grid .card').length"),9);
 await click('[data-filter="all"]');await input('#search','koynek');assert.ok(await evaluate("document.querySelectorAll('#grid .card').length>0"));
 await input('#search','zzzz-no-match');assert.equal(await evaluate("document.querySelectorAll('#grid .card').length"),0);
 await input('#search','');await click('#lang');assert.equal(await evaluate('document.documentElement.lang'),'en');
 await click('#grid .card');assert.equal(await evaluate("document.querySelector('#detail').open"),true);await click('#detail .close');
 await click('#anatomy-tabs button:last-child');assert.ok((await evaluate("document.querySelector('#anatomy-photo').src")).endsWith('telpek.webp'));
 await click('#anatomy-points .pin');assert.equal(await evaluate("document.querySelector('#detail').open"),true);await click('#detail .close');
 await click('#stitch-filters button:nth-child(3)');assert.equal(await evaluate("document.querySelectorAll('#stitch-grid .card').length"),1);
 await click('#stitch-grid .card');await click('#detail .detail-actions button');assert.equal(await evaluate("document.querySelector('.detail-layout').classList.contains('is-zoomed')"),true);await click('#detail .close');
 await value('#garment','don');await value('#stitch-choice','stitch-cuff');await value('#ornament','tumar');await click('#studio-form button[type="submit"]');
 assert.deepEqual(await evaluate("[...document.querySelectorAll('#studio-result .card')].map(e=>e.dataset.entry)"),['don','stitch-cuff','tumar']);
 await click('#studio-result .result-actions button:first-child');assert.equal(await evaluate("document.querySelectorAll('#saved .saved-entry').length"),1);
 await click('#studio-result .result-actions button:first-child');assert.equal(await evaluate("document.querySelectorAll('#saved .saved-entry').length"),1);
 await click('#lang');assert.equal(await evaluate("document.querySelector('#garment').value"),'don');assert.equal(await evaluate("document.querySelector('#studio-title').textContent"),'Diza\u00fdn studi\u00fdasy');
 await click('#studio-result .result-actions button:nth-child(3)');
 await until(()=>fs.existsSync(path.join(qa,'yup-we-gumus-lybas.txt')),'Text download failed');
 await click('#studio-result .result-actions button:nth-child(2)');
 await until(()=>fs.existsSync(path.join(qa,'yup-we-gumus-lybas-kartasy.pdf')),'PDF download failed: '+await evaluate("document.querySelector('#pdf-status').textContent"),30000);
 assert.ok(fs.readFileSync(path.join(qa,'yup-we-gumus-lybas-kartasy.pdf')).subarray(0,5).equals(Buffer.from('%PDF-')));
 await send('Page.reload');await until(()=>evaluate("document.querySelectorAll('#saved .saved-entry').length===1"),'Saved design did not persist');
 await click('#saved .saved-actions button:last-child');assert.equal(await evaluate("document.querySelectorAll('#saved .saved-entry').length"),0);
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 await evaluate('window.scrollTo(0,0)');await pause(300);
 assert.ok(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'Mobile page has horizontal overflow');
 const mobile=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(qa,'mobile.png'),Buffer.from(mobile.data,'base64'));
 for(const width of [320,375,560,768,820,821,1024,1440]){await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<600});assert.ok(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'Horizontal overflow at '+width+'px');}
 assert.ok(await evaluate("(()=>{const cards=[...document.querySelectorAll('#grid .card figure')];return Math.abs(cards[0].getBoundingClientRect().top-cards[1].getBoundingClientRect().top)<1;})()"),'Archive image tops are misaligned');
 for(const view of [{width:1440,height:1000,mobile:false,name:'desktop'},{width:390,height:844,mobile:true,name:'mobile'}]) {
  await send('Emulation.setDeviceMetricsOverride',{width:view.width,height:view.height,deviceScaleFactor:1,mobile:view.mobile});
  for(const section of ['archive','studio']) {
   await evaluate("document.documentElement.style.scrollBehavior='auto';document.querySelector('#"+section+"').scrollIntoView({behavior:'instant'})");
   await pause(200);
   const screenshot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
   fs.writeFileSync(path.join(qa,view.name+'-'+section+'.png'),Buffer.from(screenshot.data,'base64'));
  }
 }
 assert.deepEqual(problems,[],'Browser runtime errors');
 console.log('PASS: real Chrome rendering, all images, translations, archive/search/filter, details, anatomy, embroidery zoom, explicit studio selections, save/deduplicate/persist/remove, text and PDF downloads, and responsive overflow checks.');
 console.log('Screenshots and actual exported files: '+qa);
} finally {
 if(socket)socket.close();if(chrome)chrome.kill();host.kill();
}