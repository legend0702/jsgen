"use strict";

var	path = require('path'),
	fs = require('fs'),
	utils = require('./utils'),
    pathUtils = {};

module.exports = pathUtils;

utils.extend(pathUtils,{
	//give a relativePath to return absolut-path
	getRealPath:function(relativePath){
		return fs.realpathSync(relativePath);
		//return path.resolve(path.dirname(module.filename),path.normalize(relativePath));
	},
	//judge a path is absolut-path
	isRealPath:function(judgePath){
		var fsChar = judgePath.charAt(0);
		//linux
		var result = ('\\'==fsChar||'/'==fsChar);
		//windows
		if(!result&&judgePath.length>2){
			var secChar = judgePath.charAt(1)+judgePath.charAt(2);
			result = (':\\'==secChar||':/'==secChar);
		}
		return result;
	},
	//find fold which one has package
	getRootPath:function(){
		var fields = fs.readdirSync(path.dirname(module.filename));
		utils.each(fields,function(i,name){
			console.log(name);
		});
        return;
	},
	//find absolut-path by filename in this application
	//if more than one,just return first
	findFilePath:function(filename){
		var filePath = null;
		var nowdir = path.dirname(module.filename);
		utils.each(fs.readdirSync(nowdir),function(i,name){
			if(filename==name){
			 	filePath = path.resolve(nowdir,name);
			 	return false;
			}
		})
	},
	//find absolut-path by filename in this application
	//only find out-dir fold
	findFilePathOutside:function(rootPath,filename){
		var filepath = null;
		var nowPath = rootPath;
		fs.readdir(rootPath,function(err,filenames){
			if(err)console.log(err);
		});
	},
	//find absolut-path by filename in this application
	//only find out-dir fold
	findFilePathInside:function(rootPath,filename){

	}
});
