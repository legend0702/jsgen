var path = require('path');
var fs = require('fs');
var vm = require('vm');
var util = require('util');

//create a now sandbox-Context
var gbContext = vm.createContext({
	console       : console
});
//load LIBS
var LIBS =[
	'../lib/utils.js'
];

//eachLoad
LIBS.forEach(function(filePath){
	vmContextLoad(gbContext,filePath,'1');
});

vm.runInContext('console.log(new Date())', gbContext);
console.log(util.inspect(gbContext));
vmContextLoad(gbContext,'../lib/utils.js','1');
vm.runInContext('console.error(new Date())', gbContext);
console.log(util.inspect(gbContext));

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