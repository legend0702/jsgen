//"use strict";

//var utils = require('../lib/utils');
//var info = require('../lib/info');

var async = require('async');
var fs = require('fs');
var paths = ['path1','path2','path3'];

fs.readFile('G:/Nodejs/study/jsgen/package.json',function(err,data){
//	console.log(err);	
//	console.log(data.length);
	
});

function count(path,callback){
	//callback(null,path);
	process.nextTick(function(){
		callback(null,path);
	});
};

async.map(paths,count,function claer(err,results){
	console.log(results);
});

count('a',console.log);
count('b',console.log);
console.log('c');

// var factorial = function(key,value,obj){
// 	console.log(factorial.caller);
// 	console.log(arguments.callee);
// 	console.log(arguments.length);
// 	console.log(arguments.callee.length);
// };


// var bindhandler = {
// 	'value' : 5
// };

//factorial.cell.bind(bindhandler)();

//console.log(factorial.cell.caller);
// console.log(factorial.length);
// factorial();
//console.log(factorial(1,2,3,4,5));