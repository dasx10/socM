const fs=require('fs');
const PORT = process.env.PORT||80;
require('http').createServer((q,s)=>{
    s.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    q.url=='/'?s.end(fs.readFileSync('index.html')):s.end(fs.readFileSync(q.url.split('/')[1]));
}).listen(PORT);