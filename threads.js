let fs = require('fs');

module.exports.myReadShort = fs.createReadStream(__dirname+"/index.html","utf-8");//__dirname - путь к текущей директории
module.exports.myWriteShort = fs.createWriteStream(__dirname+"/ex1.txt"); 

