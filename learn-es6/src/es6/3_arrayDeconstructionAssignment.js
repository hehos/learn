/**
 * Created by hehui on 2016/9/8.
 */
'use strict'

// ==================
// 数组的解构赋值
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo) // 1
console.log(bar) // 2
console.log(baz) // 3

let [ , , third] = ["foo", "bar", "baz"];
console.log(third) // "baz"

let [x, , y] = [1, 2, 3];
console.log(x) // 1
console.log(y) // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head) // 1
console.log(tail) // [2, 3, 4]

let [x2, y2, ...z2] = ['a'];
console.log(x2) // "a"
console.log(y2) // undefined
console.log(z2) // []

// 如果等号的右边不是数组，会报错
// 报错：Uncaught TypeError: Invalid attempt to destructure non-iterable instance
// let [foo2_1] = 1;
// let [foo2_2] = false;
// let [foo2_3] = NaN;
// let [foo2_4] = undefined;
// let [foo2_5] = null;
// let [foo2_6] = {};

// 这里看不懂请见：15.Generator函数
// function* fibs() {
//     var a = 0;
//     var b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
//
// var [first, second, third2, fourth, fifth, sixth] = fibs();
// consolo.log(sixth) // 5


// =========================
// 解构赋值允许指定默认值。
// 注意，ES6内部使用严格相等运算符（===）判断一个位置是否有值。所以，
// 如果一个数组成员不严格等于undefined，默认值是不会生效的。

let [foo3 = true] = [];
console.log(foo3); // true
let [x3, y3 = 'b'] = ['a'];
console.log(x3 + ',' + y3); // a,b
let [x4, y4 = 'b'] = ['a', undefined];
console.log(x4 + ',' + y4); // a,b
let [x5, y5 = 'b'] = ['a', null];
console.log(x5 + ',' + y5); // a,null

// 默认值可以是一个表达式
function func1() {
    console.log('默认值可以是一个表达式');
}
let [x6 = func1()] = [1]; // 默认的函数不会执行。
// 等价于 ======>
// let x6;
// if ([1][0] === undefined) {
//     x6 = func1();
// } else {
//     x6 = [1][0];
// }

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
let [xx1 = 1, yy1 = xx1] = [];
console.log(xx1 + ',' + yy1); // 1,1
let [xx2 = 1, yy2 = xx2] = [2];
console.log(xx2 + ',' + yy2); // 2,2
let [xx3 = 1, yy3 = xx3] = [1, 2];
console.log(xx3 + ',' + yy3); // 1,2
let [xx4 = yy4, yy4 = 1] = [];
// 支持es6原生语法的解析器会报错：Uncaught ReferenceError: bar is not defined
console.log(xx4 + ',' + yy4); // undefined,1


