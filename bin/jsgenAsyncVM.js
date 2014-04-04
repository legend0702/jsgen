//"use strict";

//var utils = require('../lib/utils');
//var info = require('../lib/info');

var async = require('async');

var paths = ['path1','path2','path3'];

var i = 0;

function count(path,callback){
	//console.log(path);
	callback(null,path);
}

async.map(paths,count,function(err,a,b){
	console.log(err);
	console.log(a);
	//console.log(async.map.celler);
//	console.log(this);
});

//console.log(i);

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