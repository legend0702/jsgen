"use strict";

/**
	主要对判断类型方法进行检测
*/

var utils = require('../lib/utils');

var str = new String();
var bool = true;
var number = new Number();
var date = new Date();
var regExp = /[abc]/;
var func = function(){};

//用内置的方法
console.log(typeof str);
console.log(typeof bool);
console.log(typeof number);
console.log(typeof date);
console.log(typeof regExp);
console.log(typeof func);
console.log(typeof []);
console.log(typeof {});

//用工具类
console.log(utils.type(str));
console.log(utils.type(bool));
console.log(utils.type(number));
console.log(utils.type(date));
console.log(utils.type(regExp));
console.log(utils.type(func));
console.log(utils.type([]));
console.log(utils.type({}));