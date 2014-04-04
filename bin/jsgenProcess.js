"use strict";

var cp = require('child_process');

//console.log(process);

// process.env
// process.config
// process.version
// process.versions
// print process.argv
// process.argv.forEach(function(val, index, array) {
//   console.log(index + ': ' + val);
//   console.log(array);
// });

//返回当前运行的文件目录
//process.cwd()

//切换工作空间
//process.chdir(directory)

//类似队列的插队机制 将func插入到下一个方法运行后运行
//process.nextTick(func);

//console.log(process.pid);
//console.log(process.memoryUsage());
//console.log(process.title);

//('G:/Nodejs/study/jsgen/bin/javaAsync')
//这个返回执行该程序的应用的绝对路径 例如?/?/node.exe
//console.log(process.execPath);

//return what is this app running-args
//该程序的启动参数[]
//console.log(process.execArgv);

//console.log(process.hrtime())

//var cp1 = cp.fork('./jsgenCProcess');
while(true)
{}
console.log(process.pid);
//console.log(cp1.pid);

process.stdin.resume();

process.on('SIGBREAK',function(){
	//console.log(process.pid+':isRunning');
	process.kill(process.pid);
});

process.on('SIGINT',function(){
	console.log('exit');
	process.kill(process.pid);
});




