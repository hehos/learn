/**
 * Created by hehui on 2016/9/6.
 */
'use strict'

// ================
// var 定义的变量会有变量提升，而let定义的只是在块级作用域内（｛｝）
var ary1 = [];
for (var i1 = 0; i1 < 10; i1++) {
    ary1[i1] = function () {
        console.log(i1);
    };
    var innerVar1 = 88;
}
ary1[6](); // 10
console.log(innerVar1);

var ary2 = [];
for (let i2 = 0; i2 < 10; i2++) {
    ary2[i2] = function () {
        console.log(i2);
    };
}
ary2[6](); // 6


// ================
// 使用let定义的变量，不能先使用，后定义。
console.log(foo); // 输出undefined
// 支持es6原生语法的解析器会报错：Uncaught ReferenceError: bar is not defined
console.log(bar); // undefined

var foo = 2;
let bar = 2;


// ================
// let 重复定义变量会报错。
let abc = 10;
// let abc = 2; // 会报错： Duplicate declaration（重复声明错误）


// ================
// var具有变量提升，会覆盖外层定义的同名变量，且在if不成立的语句中，自动被复制 undefined
var tmp1 = new Date();
var tmp1;
console.log(tmp1); // 输出时间
function f1() {
    console.log(tmp1); // undefined
    if (false) {
        var tmp1 = "hello world";  // 会存在变量的提升
    }
}
f1(); // undefined // 变量提升导致的原因。

let tmp2 = new Date();
function f2() {
    console.log(tmp2); // 时间
    if (false) {
        let tmp2 = "hello world";
    }
}
f2();

// =================
// var 定于i的变量会存在泄漏到全局作用域中的风险。
var src1 = 'hello';
for (var i3 = 0; i3 < src1.length; i3++) {
    console.log(src1[i3]);
}
console.log(i3); // 5   // i3泄露成了全局变量。


// ==================
// 函数声明原本具备函数提升的现象。但是放在判断语句里不能提升，
// 且在严格模式下会报错：xxx is not defined 　
// ##### 推荐使用 函数表达式
function f3() { console.log('I am outside!'); }
(function () {
    if (true) {  // 如果为false，将会报错：f3 is not a function
        // 重复声明一次函数f3
        var f3 = function() { console.log('I am inside!'); } // 推荐方式
        // function f3() { console.log('I am inside!'); }
    }
    f3(); // I am inside!
})();

// =======================================
// const
const PI = 3.1415;

const foo2 = {};
foo2.prop1 = 123; 
console.log(foo2.prop1);  // 123

// foo2 = {}; // TypeError: "foo" is read-only

const ary3 = [];
ary3.push('Hello'); // 可执行
console.log(ary3.length); // 1

const foo3 = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
// foo3.prop = 123;  // 报错：Uncaught TypeError: Can't add property prop, object is not extensible
console.log(foo3.prop1); // 非严格模式没有效果，结果为：undefined


// =======================
// 全局对象属性，全局变量
var globalVar = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
console.log(window.globalVar); // 1

let globalLet = 1;
console.log(window.globalLet); // undefined
