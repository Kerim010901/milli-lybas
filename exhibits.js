export const anatomy = [
 {
   id:'koynek', photo:'koynek', width:954, height:1272, label:['Köýnek we şaý-sep','Dress and jewelry'],
   points:[
     [49,10,'koynek',['Köýnegiň ýakasy','Dress neckline']],
     [49,29,'tumar',['Döşdäki tumar','Chest amulet']],
     [88,55,'koynek',['Suratdaky ýeň keşdesi','Sleeve embroidery in the photograph']]
   ]
 },
 {
   id:'don', photo:'telpek', width:1800, height:1604, label:['Don, telpek we guşak','Robe, hat and sash'],
   points:[
     [40,29,'telpek',['Telpek','Sheepskin hat']],
     [58,55,'don',['Don','Robe']],
     [40,50,'don',['Bil guşagy','Waist sash']]
   ]
 }
];

export const stitches = [
 ['tulip','head'],
 ['choga-pattern','edge'],
 ['stitch-cuff','cuff'],
 ['cap-stitch','head']
];

export const occasionStories = [
 {
   id:'gelin', kind:['Toý','Wedding'], title:['Türkmen gelniniň lybasy','Turkmen bridal dress'],
   text:['Toý fotosuratynda gelniň baş örtügi, nagyşly lybasy we şaý-sepleri görünýär. Arhiwdäki kürte we gülýaka ýazgylary toý lybasyna degişli aýratyn bölekleri öwrenmäge kömek edýär.',
     'The wedding photograph shows the bride’s head covering, patterned clothing and jewelry. The kürte and gülýaka entries explain individual pieces associated with bridal dress.'],
   links:['gelin','kurte','gulyaka'], occasion:'wedding'
 },
 {
   id:'chyrpy', kind:['Dabaralyk baş örtügi','Ceremonial head covering'], title:['Keşdeli çyrpy','Embroidered chyrpy'],
   text:['Kliwlend muzeýindäki sary ýüpek çyrpy başyň üstünden atylýan örtügiň nusgasydyr. Onuň ýüzündäki çigildem keşdesini aýratynlykda ýakynlaşdyryp görüň.',
     'This yellow silk chyrpy from the Cleveland Museum of Art is an example of a mantle draped over the head. Open the embroidery entry for a closer view of its tulip motifs.'],
   links:['chyrpy','tulip'], occasion:'ceremony', stitch:'tulip'
 },
 {
   id:'don', kind:['Erkek lybasy','Men’s dress'], title:['Don we telpek','Robe and sheepskin hat'],
   text:['Taryhy fotosuratda iki türkmen erkegi don, guşak we telpek geýipdir. Surat şol bölekleriň bilelikde nähili geýlendigini görkezýär.',
     'This historical photograph shows two Turkmen men wearing robes, sashes and sheepskin hats. It documents how the pieces were worn together.'],
   links:['don','telpek'], occasion:'ceremony'
 }
];
