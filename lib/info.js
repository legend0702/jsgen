"use strict";

var module,
	info = {};

if(module){
	module.exports = info;
};
//packageKeys
info.package = {'root':'package.json'};

(function(){
	["name","description","version","author","homepage","maintainers","repository","bugs","engines","bin","scripts","browserify","dependencies","devDependencies","readme"].forEach(function(name,index,all){
		info.package[name]=name;
	});
})();