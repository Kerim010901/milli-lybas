import { entries } from './catalog.js';
import { anatomy, stitches, occasionStories } from './exhibits.js';

const copy = {
  "anatomyNav": [
    "Lybas bölekleri",
    "Dress details"
  ],
  "anatomyTitle": [
    "Milli lybasy öwren",
    "Explore traditional dress"
  ],
  "anatomyIntro": [
    "Suratdaky belgini saýlap, lybasyň ýa-da şaý-sepiň arhiw ýazgysyny açyň.",
    "Select a marker to open the related garment or jewelry entry."
  ],
  "stitchTitle": [
    "Keşde nusgalary",
    "Embroidery collection"
  ],
  "stitchIntro": [
    "Nusgany açyp, keşdäni ýakynlaşdyryň we studiýadaky utgaşmaňyza goşuň.",
    "Open an original example to zoom in or use it in your design."
  ],
  "stitchChoice": [
    "Keşde nusgasy",
    "Embroidery reference"
  ],
  "stitchHead": [
    "Baş örtügi",
    "Headwear"
  ],
  "stitchEdge": [
    "Ýaka we gyra",
    "Neckline and edge"
  ],
  "stitchCuff": [
    "Ýeň",
    "Sleeve"
  ],
  "zoomIn": [
    "Suraty ýakynlaşdyr",
    "Zoom in"
  ],
  "zoomOut": [
    "Suraty kiçelt",
    "Zoom out"
  ],
  "useStitch": [
    "Studiýada ulan",
    "Use in the studio"
  ],
  "occasionsNav": [
    "Toý we dabaralar",
    "Weddings and ceremonies"
  ],
  "occasionsIntro": [
    "Toý fotosuratlary we muzeý nusgalary arkaly lybaslaryň aýratyn böleklerini öwreniň.",
    "Explore the pieces that make up traditional attire through wedding photographs and museum objects."
  ],
  "useOccasion": [
    "Studiýada utgaşma düz",
    "Style this occasion"
  ],
  "designCard": [
    "Lybas taslamasynyň kartasy",
    "Costume design sheet"
  ],
  "pdf": [
    "PDF ýükläp al ↓",
    "Download PDF ↓"
  ],
  "pdfBusy": [
    "PDF taýýarlanýar…",
    "Preparing the PDF…"
  ],
  "pdfFailed": [
    "PDF taýýarlanmady. Täzeden synanyşyň.",
    "The PDF could not be prepared. Try again."
  ],
  "pdfFooter": [
    "Lybaslaryň we keşdeleriň çeşmelerini kartadaky salgylardan açyp bilersiňiz.",
    "The links above open the archive and image sources."
  ],
  "skip": [
    "Mazmuna geç",
    "Skip to content"
  ],
  "archive": [
    "Arhiw",
    "Archive"
  ],
  "jewelry": [
    "Şaý-sepler",
    "Jewelry"
  ],
  "needlework": [
    "Keşde",
    "Embroidery"
  ],
  "studio": [
    "Studiýa",
    "Studio"
  ],
  "heroLabel": [
    "Türkmen milli lybaslarynyň arhiwi",
    "Archive of Turkmen national dress"
  ],
  "heroTitle": [
    "Ýüpden<br>kümüşe.",
    "Thread &<br>silver."
  ],
  "heroBody": [
    "Keteni köýneklerden kümüş şaý-seplere çenli. Asyl nusgalar bilen tanyşyň we öz lybas utgaşmaňyzy düzüň.",
    "From keteni silk dresses to silver ornaments. Explore original pieces and put together your own costume concept."
  ],
  "browse": [
    "Arhiwe seret",
    "Browse the archive"
  ],
  "start": [
    "Studiýa geç",
    "Open the studio"
  ],
  "heroCredit": [
    "Gulzar Nurlyyeva · Wikimedia Commons ↗",
    "Gulzar Nurlyyeva · Wikimedia Commons ↗"
  ],
  "archiveLabel": [
    "Lybas we zergärçilik",
    "Dress and silverwork"
  ],
  "archiveTitle": [
    "Milli lybas arhiwi",
    "The costume archive"
  ],
  "allEntries": [
    "Ähli nusgalary gör",
    "View all entries"
  ],
  "showLess": [
    "Saýlanan nusgalar",
    "Featured entries"
  ],
  "heritageLabel": [
    "Keşde sungaty",
    "The art of embroidery"
  ],
  "heritageTitle": [
    "Asyl nusgalar",
    "Original needlework"
  ],
  "heritageText": [
    "Ýakada, ýeňde we başgapda görünýän keşdeler türkmen lybasynyň möhüm bölegidir. Türkmen keşdeçilik sungaty 2022-nji ýylda UNESCO-nyň maddy däl medeni mirasynyň sanawyna girizildi.",
    "Embroidery on collars, sleeves and headwear is central to Turkmen dress. UNESCO inscribed Turkmen-style needlework on its Intangible Cultural Heritage list in 2022."
  ],
  "patternCredit": [
    "Çogadaky keşde, The Met ↗",
    "Embroidery on a choga, The Met ↗"
  ],
  "seeStitch": [
    "Keşde nusgalaryna seret",
    "Explore the embroidery archive"
  ],
  "studioLabel": [
    "Lybas taslamasy",
    "Costume design"
  ],
  "studioTitle": [
    "Dizaýn studiýasy",
    "Design studio"
  ],
  "studioBody": [
    "Çäräni, reňki we arhiwden lybas, keşde hem-de şaý-sep nusgalaryny saýlap, öz taslama kartaňyzy düzüň.",
    "Choose an occasion, palette, and actual archive pieces to create your own costume design sheet."
  ],
  "occasion": [
    "Çäre",
    "Occasion"
  ],
  "garment": [
    "Lybas",
    "Garment"
  ],
  "tone": [
    "Reňk äheňi",
    "Palette"
  ],
  "ornament": [
    "Şaý-sep",
    "Jewelry"
  ],
  "recommend": [
    "Taslama kartasyny düz",
    "Create design sheet"
  ],
  "method": [
    "Taslama nähili düzülýär?",
    "How is the design sheet created?"
  ],
  "methodText": [
    "Karta saýlan lybasyňyzy, keşdäňizi we şaý-sepiňizi birleşdirýär. Bu el bilen saýlamak guralydyr; AI modeli ulanylmaýar.",
    "The sheet combines your chosen garment, embroidery and jewelry. The occasion and palette describe your concept; they do not recolor the original photographs. Selections are manual."
  ],
  "stateMuseum": [
    "Döwlet muzeýi ↗",
    "State Museum of Turkmenistan ↗"
  ],
  "backTop": [
    "Ýokaryk ↑",
    "Back to top ↑"
  ],
  "all": [
    "Hemmesi",
    "All"
  ],
  "women": [
    "Zenan lybasy",
    "Womenswear"
  ],
  "men": [
    "Erkek lybasy",
    "Menswear"
  ],
  "head": [
    "Başgap",
    "Headwear"
  ],
  "jewel": [
    "Şaý-sepler",
    "Jewelry"
  ],
  "stitch": [
    "Keşde",
    "Embroidery"
  ],
  "search": [
    "Gözleg",
    "Search"
  ],
  "placeholder": [
    "Nusga gözle",
    "Find an entry"
  ],
  "noMatches": [
    "Gözlege laýyk nusga tapylmady.",
    "No entries match your search."
  ],
  "photoSource": [
    "Suratyň çeşmesi",
    "Image source"
  ],
  "source": [
    "Çeşmäni aç ↗",
    "Open the source ↗"
  ],
  "illustration": [
    "Fotosurat we ygtyýarnama",
    "Photograph and license"
  ],
  "crop": [
    "Surat ölçegi üýtgedildi ýa-da ýakynlaşdyryldy.",
    "Image resized or cropped."
  ],
  "close": [
    "Ýap",
    "Close"
  ],
  "starter": [
    "Saýlawlaryňyzy giriziň",
    "Make your selections"
  ],
  "ready": [
    "Saýlanan utgaşma",
    "Your selected combination"
  ],
  "save": [
    "Utgaşmany ýatda sakla",
    "Save combination"
  ],
  "saved": [
    "Ýatda saklananlar",
    "Saved combinations"
  ],
  "export": [
    "Tekst faýlyny al ↓",
    "Download as text ↓"
  ],
  "remove": [
    "Aýyr",
    "Remove"
  ],
  "stored": [
    "Utgaşma şu brauzerde saklandy.",
    "Combination saved in this browser."
  ],
  "failed": [
    "Brauzerde ýatda saklamak başartmady.",
    "This browser could not save the combination."
  ],
  "note": [
    "Bu dizaýn pikiri. Nusgalaryň taryhy maglumatlaryny aýratyn kartalarda görüp bilersiňiz.",
    "This is a styling concept. Open the individual entries for their historical context."
  ],
  "count": [
    "nusga",
    "entries"
  ]
};
const options = {
 occasion:{wedding:['To\u00fd','Wedding'],ceremony:['Dabara','Ceremony'],daily:['G\u00fcndelik','Everyday']},
 garment:Object.fromEntries(entries.filter(entry => ['women','men','head'].includes(entry.category)).map(entry => [entry.id,entry.title])),
 tone:{red:['Gyzyl we gyzgylt','Warm reds'],gold:['Sary we altynsow','Amber and gold'],dark:['Go\u00fdy \u00e4he\u0148','Deep tones']},
 'stitch-choice':Object.fromEntries(stitches.map(([id]) => [id,entries.find(entry => entry.id === id).title])),
 ornament:{none:['\u015ea\u00fd-sepsiz','No jewelry'],...Object.fromEntries(entries.filter(entry => entry.category === 'jewel').map(entry => [entry.id,entry.title]))}
};
const byId = new Map(entries.map(entry => [entry.id,entry]));
const $ = selector => document.querySelector(selector);
const storage = {
 read(key,fallback) {try {return JSON.parse(localStorage.getItem(key)) ?? fallback;} catch {return fallback;}},
 write(key,value) {try {localStorage.setItem(key,JSON.stringify(value));return true;} catch {return false;}}
};
let lang = storage.read('yg-lang',0) === 1 ? 1 : 0;
let saved = storage.read('yg-saved',[]);
if (!Array.isArray(saved)) saved = [];
saved = saved.filter(row => row && Array.isArray(row.entries) && row.entries.every(id => byId.has(id)) && row.values)
 .map(row=>({...row,values:{...row.values}}))
 .filter(row=>Object.keys(options).every(key=>Object.hasOwn(options[key],row.values[key])))
 .map(row => ({...row, values:Object.fromEntries(Object.keys(options).map(key=>[key,row.values[key]]))}));
let category = 'all';
let showAll = false;
let result;
let currentDetail;
let selectedAnatomy=0;
let selectedPlacement='all';
const tr = key => copy[key][lang];
const localized = words => words[lang];
const title = entry => localized(entry.title);
const normalize = value => value.toLocaleLowerCase('tk').normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/ň/g,'n').trim();
const make = (tag,className,content) => {
 const node = document.createElement(tag);
 if (className) node.className = className;
 if (content) node.textContent = content;
 return node;
};
function link(text,href) {
 const node = make('a','',text); node.href=href; node.target='_blank'; node.rel='noreferrer'; return node;
}
function card(entry) {
 const classes = ['card', ...(entry.image ? ['yellow','choga','tumar','bilezik2','necklace','gulyaka','asyk','dagdan','gosh','halka','eginlik'].includes(entry.image) ? ['object'] : [] : ['text'])].join(' ');
 const button = make('button',classes);
 button.type = 'button';
 button.dataset.entry = entry.id;
 const fig = make('figure');
 if (entry.image) {
   const img = make('img');img.src = 'assets/'+entry.image+'.webp';img.alt='';img.loading='lazy';fig.append(img);
 } else {
   const letter = make('span','',title(entry)[0]);letter.setAttribute('aria-hidden','true');fig.append(letter);
 }
 button.append(fig,make('h3','',title(entry)),make('span','meta',tr(entry.category)));
 return button;
}
function renderArchive() {
 const query = normalize($('#search').value);
 const categories = ['all','women','men','head','jewel','stitch'];
 const focused = document.activeElement?.dataset.filter;
 $('#filters').replaceChildren(...categories.map(key => {
   const button=make('button','',tr(key));button.type='button';button.dataset.filter=key;
   button.setAttribute('aria-pressed',String(category===key));
   return button;
 }));
 if (focused) $('#filters').querySelector('[data-filter="'+focused+'"]')?.focus();
 const matched = entries.filter(entry => (category==='all'||category===entry.category) && (!query||normalize([...entry.title,...entry.body].join(' ')).includes(query)));
 if (query) matched.sort((a,b) => Number(b.title.some(name => normalize(name).includes(query))) - Number(a.title.some(name => normalize(name).includes(query))));
 const visible = category==='all'&&!query&&!showAll ? matched.slice(0,4) : matched;
 $('#grid').replaceChildren(...(visible.length ? visible.map(card) : [make('p','empty',tr('noMatches'))]));
 $('#count').textContent = (visible.length===matched.length ? String(visible.length) : visible.length+' / '+matched.length) + ' ' + tr('count');
 $('#all-toggle').textContent = showAll && category==='all' && !query ? tr('showLess') : tr('allEntries');
}
function renderDetail() {
 const entry = currentDetail;
 const layout = make('div','detail-layout'+(entry.image?'':' no-img'));
 if(entry.image) {
   const figure=make('figure');const photo=make('img');photo.src='assets/'+entry.image+'.webp';photo.alt=title(entry);figure.append(photo);layout.append(figure);
 }
 const body=make('div','detail-text');
 const heading=make('h2','',title(entry));heading.id='detail-title';
 body.append(make('span','eyebrow',tr(entry.category)),heading,make('p','',localized(entry.body)));
 const source=link(tr('source'),entry.source);source.className='arrow-link';
 const actions=make('div','detail-actions');actions.append(source);
 if(entry.category==='stitch') {
   const photo=layout.querySelector('img');
   photo.classList.add('zoom-image');
   const zoom=action('zoomIn',()=>{
     const on=layout.classList.toggle('is-zoomed');
     zoom.textContent=tr(on?'zoomOut':'zoomIn');
     zoom.setAttribute('aria-pressed',String(on));
   });
   zoom.setAttribute('aria-pressed','false');
   photo.addEventListener('click',()=>zoom.click());
   actions.append(zoom,action('useStitch',()=>startDesign({'stitch-choice':entry.id})));
 }
 body.append(actions);
 if(entry.credit) {
   const [url,name,licenseUrl,license] = entry.credit;
   const credit=make('p','credit');
   credit.append(tr(licenseUrl?'illustration':'photoSource')+' · ',link(name,url));
   if(licenseUrl) credit.append(' · ',link(license,licenseUrl),' · '+tr('crop'));
   body.append(credit);
 }
 layout.append(body);$('#detail-body').replaceChildren(layout);
}
function getValues() {
 return Object.fromEntries(Object.keys(options).map(key=>[key,$('#'+key).value]));
}
function composeDesign(values) {
 const selected = [values.garment, values['stitch-choice']];
 if (values.ornament !== 'none') selected.push(values.ornament);
 if (!selected.every(id => byId.has(id))) throw new Error('Select existing archive entries.');
 return {values,entries:[...new Set(selected)]};
}
const description = row => [localized(options.occasion[row.values.occasion]),localized(options.tone[row.values.tone])].join(' · ');
function action(label,handler) {
 const node=make('button','arrow-link',tr(label));node.type='button';node.addEventListener('click',handler);return node;
}
function download(row) {
 const text=[tr('ready'),description(row),'',...row.entries.map(id=>{
   const entry=byId.get(id);return [title(entry),localized(entry.body),entry.source].filter(Boolean).join('\n');
 })].join('\n\n');
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
 const a=make('a');a.href=url;a.download='yup-we-gumus-lybas.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function saveResult() {
 const row={...result,id:crypto.randomUUID()};
 const existing=saved.find(item=>JSON.stringify(item.values)===JSON.stringify(row.values));
 const next=existing?saved:[row,...saved].slice(0,30);
 if (storage.write('yg-saved',next)) {
   saved=next;renderSaved();$('#result-status').textContent=tr('stored');
 } else $('#result-status').textContent=tr('failed');
}
function renderStudio() {
 for(const [key,values] of Object.entries(options)) {
   const select=$('#'+key);const previous=select.value;
   select.replaceChildren(...Object.entries(values).map(([id,labels])=>{const node=make('option','',localized(labels));node.value=id;return node;}));
   if(Object.hasOwn(values,previous))select.value=previous;
 }
 const pane=$('#studio-result');
 if(!result) {
   const img=make('img');img.src='assets/tulip.webp';img.alt='';img.loading='lazy';
   pane.replaceChildren(make('h3','',tr('starter')),img);
   return;
 }
 const items=make('div','result-items');items.append(...result.entries.map(id=>card(byId.get(id))));
 const actions=make('div','result-actions');
 actions.append(action('save',saveResult),action('pdf',()=>downloadPdf(result)),action('export',()=>download(result)));
 const status=make('p','result-status');status.id='result-status';status.setAttribute('role','status');
 pane.replaceChildren(make('span','eyebrow',tr('ready')),make('h3','',description(result)),make('p','',tr('note')),items,actions,status);
}
function renderSaved() {
 const target=$('#saved');
 target.replaceChildren();
 if(!saved.length)return;
 target.append(make('h3','',tr('saved')));
 for(const row of saved) {
   const entry=make('div','saved-entry');const buttons=make('div','saved-actions');
   buttons.append(action('pdf',()=>downloadPdf(row)),action('export',()=>download(row)),action('remove',()=>{
     const next=saved.filter(item=>item.id!==row.id);
     if(storage.write('yg-saved',next)){saved=next;renderSaved();}
   }));
   entry.append(make('span','',row.entries.map(id=>title(byId.get(id))).join(' · ')),buttons);
   target.append(entry);
 }
}
let pdfInProgress=false;
async function downloadPdf(row) {
 if(pdfInProgress) return;
 pdfInProgress=true;
 const status=$('#pdf-status');
 status.textContent=tr('pdfBusy');
 try {
   const {createDesignPdf}=await import('./export.js');
   const bytes=await createDesignPdf({
     title:tr('designCard'),subtitle:description(row),source:tr('source').replace(' ↗',''),
     footer:tr('pdfFooter'),language:lang?'en':'tk',
     items:row.entries.map(id=>{
       const entry=byId.get(id);
       return {role:tr(entry.category), title:title(entry),description:localized(entry.body),image:entry.image,
         source:entry.source,credit:entry.credit ? {url:entry.credit[0],label:[entry.credit[1],entry.credit[3]].filter(Boolean).join(' · ')} : null};
     })
   });
   const url=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'}));
   const anchor=make('a');anchor.href=url;anchor.download='yup-we-gumus-lybas-kartasy.pdf';anchor.click();
   setTimeout(()=>URL.revokeObjectURL(url),10000);
   status.textContent='';
 } catch (error) {
   console.error('Design sheet export',error);
   status.textContent=tr('pdfFailed');
 } finally {
   pdfInProgress=false;
 }
}
function archiveButton(entryId,label,className='arrow-link') {
 const button=make('button',className,label);
 button.type='button';button.dataset.entry=entryId;return button;
}
function creditLine(entry) {
 const container=make('div','photo-credit');
 if(entry.credit) {
   const [url,name,licenseUrl,license]=entry.credit;
   container.append(link(name,url));
   if(licenseUrl) container.append(' · ',link(license,licenseUrl));
 }
 return container;
}
function choices(target,items,active,select) {
 target.replaceChildren(...items.map(([key,label])=>{
   const button=make('button','',label);
   button.type='button';
   button.setAttribute('aria-pressed',String(key===active));
   button.addEventListener('click',()=>{
     select(key);
     target.querySelector('[aria-pressed=true]')?.focus();
   });
   return button;
 }));
}
function renderAnatomy() {
 const exhibit=anatomy[selectedAnatomy];
 const photo=$('#anatomy-photo');
 photo.src='assets/'+exhibit.photo+'.webp';
 photo.alt=localized(exhibit.label);
 photo.width=exhibit.width;photo.height=exhibit.height;
 choices($('#anatomy-tabs'),anatomy.map((item,index)=>[index,localized(item.label)]),selectedAnatomy,index=>{
   selectedAnatomy=index;renderAnatomy();
 });
 const points=exhibit.points.map(([x,y,id,label],index)=>{
   const pin=archiveButton(id,String(index+1),'pin');
   pin.setAttribute('aria-label',localized(label));
   pin.style.setProperty('--x',x+'%');pin.style.setProperty('--y',y+'%');
   const item=make('li');
   const open=archiveButton(id,'','');
   open.append(make('span','pin-key',String(index+1)),make('span','',localized(label)));
   item.append(open);
   return {pin,item};
 });
 $('#anatomy-points').replaceChildren(...points.map(point=>point.pin));
 $('#anatomy-key').replaceChildren(...points.map(point=>point.item));
 $('#anatomy-credit').replaceChildren(creditLine(byId.get(exhibit.id)));
}
function renderStitches() {
 const placements={all:'all',edge:'stitchEdge',cuff:'stitchCuff',head:'stitchHead'};
 choices($('#stitch-filters'),Object.entries(placements).map(([key,label])=>[key,tr(label)]),selectedPlacement,key=>{
   selectedPlacement=key;renderStitches();
 });
 $('#stitch-grid').replaceChildren(...stitches.filter(([,placement])=>selectedPlacement==='all'||placement===selectedPlacement).map(([id,placement])=>{
   const tile=card(byId.get(id));
   tile.querySelector('.meta').textContent=tr(placements[placement]);
   return tile;
 }));
}
function startDesign(settings) {
 if($('#detail').open) $('#detail').close();
 for(const [key,value] of Object.entries(settings)) {
   if(Object.hasOwn(options[key] ?? {},value)) $('#'+key).value=value;
 }
 result=composeDesign(getValues());renderStudio();
 location.hash='studio';
 $('#studio').scrollIntoView();
 $('#studio-form button[type=submit]').focus({preventScroll:true});
}
function renderExhibits() {
 renderAnatomy();renderStitches();
 $('#occasion-stories').replaceChildren(...occasionStories.map(story=>{
   const entry=byId.get(story.id), article=make('article','occasion-story');
   const figure=make('figure'),photo=make('img');
   photo.src='assets/'+entry.image+'.webp';photo.alt=title(entry);photo.loading='lazy';figure.append(photo);
   const items=make('div','item-links');
   items.append(...story.links.map(id=>archiveButton(id,title(byId.get(id)))));
   const start=action('useOccasion',()=>startDesign({occasion:story.occasion,garment:story.id,...(story.stitch ? {'stitch-choice':story.stitch} : {})}));
   start.className='button dark';
   article.append(figure,make('span','eyebrow',localized(story.kind)),make('h3','',localized(story.title)),make('p','',localized(story.text)),items,creditLine(entry),start);
   return article;
 }));
}
function renderLanguage() {
 document.documentElement.lang=lang?'en':'tk';
 document.title=lang?'Ýüp & Kümüş — Turkmen national dress':'Ýüp & Kümüş — Türkmen milli lybaslary';
 document.querySelectorAll('[data-t]').forEach(el=>{
   if(el.dataset.t==='heroTitle')el.innerHTML=tr(el.dataset.t);
   else el.textContent=tr(el.dataset.t);
 });
 $('#lang').textContent=lang?'TM':'EN';
 $('#lang').setAttribute('aria-label',lang?'Türkmen diline geç':'Switch to English');
 $('#search').setAttribute('aria-label',tr('search'));$('#search').placeholder=tr('placeholder');
 $('#search-toggle').setAttribute('aria-label',tr('search'));
 $('#detail .close').setAttribute('aria-label',tr('close'));
 $('#filters').setAttribute('aria-label',lang?'Categories':'Bölümler');
 $('.nav').setAttribute('aria-label',lang?'Main navigation':'Esasy menýu');
 $('footer nav').setAttribute('aria-label',lang?'Sources':'Çeşmeler');
 renderArchive();renderExhibits();renderStudio();renderSaved();$('#pdf-status').textContent='';if(currentDetail)renderDetail();
}

document.addEventListener('click', event => {
 const entry=event.target.closest('[data-entry]');
 if(entry){
   currentDetail=byId.get(entry.dataset.entry);renderDetail();if(!$('#detail').open)$('#detail').showModal();else $('#detail .close').focus();return;
 }
 const filter=event.target.closest('[data-filter], [data-cat]');
 if(filter){
   category=filter.dataset.filter ?? filter.dataset.cat;
   if(filter.dataset.cat)$('#search').value='';
   showAll=false;renderArchive();
 }
});
$('#lang').addEventListener('click',()=>{lang=1-lang;storage.write('yg-lang',lang);renderLanguage();});
$('#all-toggle').addEventListener('click',()=>{
 showAll=!(showAll&&category==='all'&&!$('#search').value.trim());
 category='all';$('#search').value='';renderArchive();
});
$('#search').addEventListener('input',renderArchive);
$('#search-toggle').addEventListener('click',()=>{
 category='all';renderArchive();$('#search').focus({preventScroll:true});$('#archive').scrollIntoView();
});
$('#studio-form').addEventListener('submit',event=>{event.preventDefault();result=composeDesign(getValues());renderStudio();});
$('#detail .close').addEventListener('click',()=>$('#detail').close());
$('#detail').addEventListener('click',event=>{if(event.target===$('#detail'))$('#detail').close();});
$('#detail').addEventListener('close',()=>{currentDetail=undefined;});
renderLanguage();
