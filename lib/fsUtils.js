"use strict";

var module,fs,utils,
	fsUtils={};

if(module){
	fs = require('fs');
	utils = require('./utils');
	module.exports = fsUtils;
};

utils.extend(fsUtils,{
	//copy a file from stc to dst
	copy : function (src,dst){
		fs.createReadStream(src).pipe(fs.createWriteStream(dst));
	},
	//copy a file from stc to dst sync	
	copySync : function (src, dst) {
    	fs.writeFileSync(dst, fs.readFileSync(src));
	},
	//to delete encoding-header
	bufferToString : function (buffer,encoding){
		if(buffer&&buffer.length>3){
			if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
			    buffer = buffer.slice(3);
			}
		}
		return buffer.toString(encoding||'utf-8');
	},
	//read a file async by options 
	readText : function(filePath,options,callback){
		if(!utils.isFunction(callback)){
			callback = options;
			options = null;
		}
		options = utils.defOptions(options,{'encoding':'utf-8'});
		var bufs = [];
		try{
			var rs = fs.createReadStream(filePath,options);
			rs.on('data',function(chunk){
				bufs.push(chunk);
			});
			rs.on('end',function(){
				callback(null,fsUtils.bufferToString(Buffer.concat(bufs),options['encoding']));
			});
		}catch(err){
			callback(err);
		}
	},
	//read a file by options default:{encoding:'utf-8'}
	readTextSync : function (filePath,options) {
		options = utils.defOptions(options,{'encoding':'utf-8'});
		return this.bufferToString(fs.readFileSync(filePath),options['encoding']);
	},
	//read a fileText to Json
	readJson : function(filePath,options,callback){
		if(!utils.isFunction(callback)){
			callback = options;
			options = null;
		}
		this.readText(filePath,options,function(err,data){
			if (err) callback(err);
			callback(null,JSON.parse(data));
		})
	},
	//read a fileText to Json sync
	readJsonSync : function(filePath,options){
		return JSON.parse(this.readTextSync(filePath,options));
	}
});