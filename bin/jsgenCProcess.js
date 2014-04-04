"use strict";

process.stdin.resume();

process.on('SIGBREAK',function(){
	console.log(process.pid+':isRunning');
});
