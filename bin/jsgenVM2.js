var path = require('path');
var fs = require('fs');
var vm = require('vm');
var util = require('util');
var utils = require('../lib/utils');

//create a now sandbox-Context
var gbContext = vm.createContext({
	console       : console,
	fs : fs,
	util : util,
	utils : utils,
	Buffer : Buffer
});
//load LIBS
var LIBS =[
	'../lib/utils.js',
	'../lib/fsUtils.js'
];

//eachLoad
LIBS.forEach(function(filePath){
	vmContextLoad(gbContext,filePath);
});
vm.runInContext('function helloWorld(){console.log(\'helloWorld\')}',gbContext);
vm.runInContext('helloWorld()', gbContext);
vm.runInContext('fsUtils.readJson(\'G:/Nodejs/study/jsgen/package.json\',function(err,data){console.log(data[\'name\'])})',gbContext);	
vm.runInContext('console.log(fsUtils.readJsonSync(\'G:/Nodejs/study/jsgen/package.json\')[\'bin\'])',gbContext);
//console.log(util.inspect(gbContext));

//load a SCRIPT to context
function vmContextLoad(context,filePath,options){
	try {
		filePath = path.resolve(path.dirname(module.filename), filePath);
		var code = fs.readFileSync(filePath, "utf8");
		vm.runInContext(code,context,options);
	} catch(ex) {
        // XXX: in case of a syntax error, the message is kinda
        // useless. (no location information).
        console.error("ERROR in file: " + filePath + " / " + ex);
        process.exit(1);
	}
}