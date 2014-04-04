//引用lib文件下的utils.js
var utils = require('../lib/utils');
var fs = require('fs');
var path = require('path');
var fsUtils = require('../lib/fsUtils');

//var rs = fs.createReadStream('G:/Nodejs/sql.txt');
//var rs = fs.createReadStream('G:/Nodejs/study/jsgen/package.json');
//var rs2 = fs.readFile(fs.readdirSync('G:/Nodejs/study/jsgen')[4],function(err,data){});

fsUtils.readText('G:/Nodejs/study/jsgen/package.json',function(err,data){
	console.log(data);
})
fsUtils.readJson('G:/Nodejs/study/jsgen/package.json',function(err,data){
	console.log(data['name']);
});

//console.log(fsUtils.readTextSync('G:/Nodejs/study/jsgen/package.json'));
//var json = fsUtils.readJsonSync('G:/Nodejs/study/jsgen/package.json');
//console.log(json['name']);
//console.log(buff.toString());

//调用node.js内置输出对象输出utils的helloWorld方法的执行结果
//console.log(utils.helloWorld());


//fsUtils.copy('G:/Nodejs/study/jsgen/package.json','G:/Nodejs/study/jsgen/package.json');
//fsUtils.readTextSync('G:/Nodejs/study/jsgen/package.json');

