/**
 * Created by hehui on 2016/12/8.
 */

// 模块 m1 改变了形参 exports 的引用！
var m1 = require('./m1');
// 因为 模块 m1 改变了形参 exports 的引用！
// m1();  // 这里会报错：TypeError: m1 is not a function

// 迂回的方式不会改变了形参 exports 的引用！
var m2 = require('./m2');
m2();

// 一般的写法
var m3 = require('./m3');
m3.f1();