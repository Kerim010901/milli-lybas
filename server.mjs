import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('.',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.ttf':'font/ttf'};
const port=Number(process.env.PORT || 3000);
const server=http.createServer(async(req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
 try {
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const relative=pathname==='/'?'index.html':pathname.slice(1);
  if(!['index.html','style.css','app.js','catalog.js','exhibits.js','export.js'].includes(relative) && !/^(assets|vendor)\/[a-zA-Z0-9_.-]+$/.test(relative)){res.writeHead(404);res.end('Not found');return;}
  const file=path.resolve(root,relative);
  const info=await stat(file);
  if(!info.isFile())throw new Error('Not a file');
  res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff'});
  res.end(req.method==='HEAD'?undefined:await readFile(file));
 }catch{res.writeHead(404);res.end('Not found');}
});
server.listen(port,'127.0.0.1',()=>console.log('Local: http://localhost:'+port));
