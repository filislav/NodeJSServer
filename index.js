let http = require('http');
let threads = require('./threads');
let fs = require('fs');

const PORT = 3000;
let server = http.createServer((request,responce)=>{
    console.log(`URL стрвницы: ${request.url}`) //отслеживаем в консоли URL
    if(request.url==="/index"||request.url==="/"){
        responce.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        fs.createReadStream(__dirname + "/index.html").pipe(responce);
    }else if(request.url==="/about"){
        responce.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        fs.createReadStream(__dirname + "/about.html").pipe(responce);
    }else if(request.url==="/user"){
        responce.writeHead(200,{"Content-Type":"application/json; charset=utf-8"});
        let user = {name:'slava',age:38,gender:'man'};
        responce.end(JSON.stringify(user));
    }else{
        responce.writeHead(404,{"Content-Type":"text/html; charset=utf-8"});
        fs.createReadStream(__dirname + "/error.html").pipe(responce);
    }
});
server.listen(PORT,"127.0.0.1");
console.log(`Сервер на порту: ${PORT}`);
