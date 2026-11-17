const vendor = new URL('./vendor/', import.meta.url);
let libraries;
function script(file) {
 return new Promise((resolve,reject)=>{
   const element=document.createElement('script');
   element.src=new URL(file,vendor);
   element.onload=resolve;
   element.onerror=()=>{element.remove();reject(new Error(file));};
   document.head.append(element);
 });
}
function loadLibraries() {
 libraries ??= Promise.all([
   globalThis.PDFLib || script('pdf-lib.min.js'),
   globalThis.fontkit || script('fontkit.umd.min.js'),
   fetch(new URL('DejaVuSans.ttf',vendor)).then(response=>{
     if(!response.ok) throw new Error('PDF font');
     return response.arrayBuffer();
   })
 ]).catch(error=>{libraries=undefined;throw error;});
 return libraries;
}
async function imageBytes(name) {
 const response=await fetch(new URL('./assets/'+name+'.webp',import.meta.url));
 if(!response.ok) throw new Error(name);
 const photo=await createImageBitmap(await response.blob());
 try {
   const factor=Math.min(1,760/Math.max(photo.width,photo.height));
   const canvas=document.createElement('canvas');
   canvas.width=Math.round(photo.width*factor);
   canvas.height=Math.round(photo.height*factor);
   canvas.getContext('2d').drawImage(photo,0,0,canvas.width,canvas.height);
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',.87));
   if(!blob) throw new Error(name);
   return blob.arrayBuffer();
 } finally {
   photo.close();
 }
}
export async function createDesignPdf(sheet) {
 const defaults=await loadLibraries();
 const { PDFDocument, rgb, PDFName, PDFString }=globalThis.PDFLib;
 const pdf=await PDFDocument.create();
 pdf.registerFontkit(globalThis.fontkit);
 const font=await pdf.embedFont(defaults[2],{subset:true});
 const page=pdf.addPage([595.28,841.89]);
 const ink=rgb(.13,.10,.09), muted=rgb(.36,.30,.27), line=rgb(.82,.77,.71);
 const accent=rgb(.30,.13,.09), paper=rgb(.975,.955,.925);
 const photos=await Promise.all(sheet.items.map(async item=>item.image ? pdf.embedJpg(await imageBytes(item.image)) : null));
 const annotations=[];
 function lineAt(top) {
   page.drawLine({start:{x:42,y:top},end:{x:553,y:top},thickness:.65,color:line});
 }
 function write(value,x,y,size,color=ink,maxWidth=510) {
   let fit=size;
   while(font.widthOfTextAtSize(value,fit)>maxWidth && fit>5) fit-=.25;
   page.drawText(value,{x,y,font,size:fit,color});
   return {width:font.widthOfTextAtSize(value,fit),size:fit};
 }
 function wrapped(value,x,y,size,maxWidth,color) {
   let current='';
   for(const word of value.split(/\s+/)) {
     const next=current ? current+' '+word : word;
     if(current && font.widthOfTextAtSize(next,size)>maxWidth) {
       write(current,x,y,size,color,maxWidth);
       y-=15;
       current=word;
     } else current=next;
   }
   if(current) write(current,x,y,size,color,maxWidth);
 }
 function addLink(label,uri,y) {
   const {width,size}=write(label,220,y,9,accent,327);
   annotations.push(pdf.context.register(pdf.context.obj({
     Type:'Annot', Subtype:'Link', Rect:[220,y-2,220+width,y+size+2], Border:[0,0,0],
     A:{S:'URI',URI:PDFString.of(uri)}
   })));
 }
 page.drawRectangle({x:0,y:0,width:595.28,height:841.89,color:paper});
 write('ÝÜP & KÜMÜŞ',42,795,13,accent);
 write(sheet.title,42,744,31);
 write(sheet.subtitle,42,716,12,muted);
 lineAt(690);
 for(const [index,item] of sheet.items.entries()) {
   const top=673-index*193;
   const photo=photos[index];
   if(photo) {
     const factor=Math.min(157/photo.width,151/photo.height);
     const width=photo.width*factor,height=photo.height*factor;
     page.drawImage(photo,{x:42+(157-width)/2,y:top-151+(151-height)/2,width,height});
   }
   write(item.role,220,top-14,10,muted,327);
   write(item.title,220,top-41,20,ink,327);
   wrapped(item.description,220,top-62,9,327,muted);
   addLink(sheet.source,item.source,top-143);
   if(item.credit) {
     addLink(item.credit.label,item.credit.url,top-161);
   }
   lineAt(top-176);
 }
 if(annotations.length) page.node.set(PDFName.of('Annots'),pdf.context.obj(annotations));
 write(sheet.footer,42,46,9,muted);
 pdf.setTitle(sheet.title);
 pdf.setAuthor('Ýüp & Kümüş');
 pdf.setLanguage(sheet.language);
 return pdf.save();
}
