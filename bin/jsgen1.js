//引用lib文件下的utils.js
var utils = require('../lib/utils');
var fs = require('fs');
var path = require('path');
var fsUtils = require('../lib/fsUtils');

//var rs = fs.createReadStream('G:/Nodejs/sql.txt');
console.log(module.filename);
console.log(path.dirname(module.filename));
//error
console.log(path.resolve(path.dirname(module.filename),fs.readdirSync('G:/Nodejs/study/jsgen')[5]));
//console.log(path.resolve(path.dirname(fs.readdirSync.log(module.filename))));
// fs.readFile(path.resolve(path.dirname(fs.readdirSync(module.filename),fs.readdirSync('G:/Nodejs/study/jsgen')[5])),function(err,data){
// 	console.log(data);
// });

var bufs = []; 
var json = {};

// rs.on('data',function(chunk){
// 	bufs.push(chunk);
// });

//rs.on('end',function(){
	//json = JSON.parse(Buffer.concat(bufs).toString('utf-8'));
	//console.log(json);
	//console.log(json['name']);
//});
//console.log(buff.toString());

//调用node.js内置输出对象输出utils的helloWorld方法的执行结果
//console.log(utils.helloWorld());

//fsUtils.copy('G:/Nodejs/study/jsgen/package.json','G:/Nodejs/study/jsgen/package1.json');
//fsUtils.readTextSync('G:/Nodejs/study/jsgen/package.json');

