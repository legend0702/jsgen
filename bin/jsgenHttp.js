"use strict";

var http = require('http');
// var nodetime = require('nodetime');
// nodetime.profile({
//     accountKey: '4a02bd7b3ad10d45aca1dc207c63496ca56fbba9', 
//     appName: 'jsgen'
// });

http.createServer(function(req,rsp){
	rsp.writeHead(200,{'Context-Type':'text-plain'});
	rsp.end('hello World\n');
}).listen(9090);