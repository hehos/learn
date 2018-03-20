/**
 * Created by hehui on 2016/9/8.
 */
'use strict';

// ==================
// 数组的解构赋值

var foo = 1,
    bar = 2,
    baz = 3;

console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

var _ref = ["foo", "bar", "baz"],
    third = _ref[2];

console.log(third); // "baz"

var _ref2 = [1, 2, 3],
    x = _ref2[0],
    y = _ref2[2];

console.log(x); // 1
console.log(y); // 3

var head = 1,
    tail = [2, 3, 4];

console.log(head); // 1
console.log(tail); // [2, 3, 4]

var _ref3 = ['a'],
    x2 = _ref3[0],
    y2 = _ref3[1],
    z2 = _ref3.slice(2);

console.log(x2); // "a"
console.log(y2); // undefined
console.log(z2); // []

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

var _ref4 = [],
    _ref4$ = _ref4[0],
    foo3 = _ref4$ === undefined ? true : _ref4$;

console.log(foo3); // true
var _ref5 = ['a'],
    x3 = _ref5[0],
    _ref5$ = _ref5[1],
    y3 = _ref5$ === undefined ? 'b' : _ref5$;

console.log(x3 + ',' + y3); // a,b
var x4 = 'a',
    _undefined = undefined,
    y4 = _undefined === undefined ? 'b' : _undefined;

console.log(x4 + ',' + y4); // a,b
var x5 = 'a',
    _ref6 = null,
    y5 = _ref6 === undefined ? 'b' : _ref6;

console.log(x5 + ',' + y5); // a,null

// 默认值可以是一个表达式
function func1() {
  console.log('默认值可以是一个表达式');
}
var _ = 1,
    x6 = _ === undefined ? func1() : _; // 默认的函数不会执行。
// 等价于 ======>
// let x6;
// if ([1][0] === undefined) {
//     x6 = func1();
// } else {
//     x6 = [1][0];
// }

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

var _ref7 = [],
    _ref7$ = _ref7[0],
    xx1 = _ref7$ === undefined ? 1 : _ref7$,
    _ref7$2 = _ref7[1],
    yy1 = _ref7$2 === undefined ? xx1 : _ref7$2;

console.log(xx1 + ',' + yy1); // 1,1
var _ref8 = [2],
    _ref8$ = _ref8[0],
    xx2 = _ref8$ === undefined ? 1 : _ref8$,
    _ref8$2 = _ref8[1],
    yy2 = _ref8$2 === undefined ? xx2 : _ref8$2;

console.log(xx2 + ',' + yy2); // 2,2
var _2 = 1,
    xx3 = _2 === undefined ? 1 : _2,
    _3 = 2,
    yy3 = _3 === undefined ? xx3 : _3;

console.log(xx3 + ',' + yy3); // 1,2
var _ref9 = [],
    _ref9$ = _ref9[0],
    xx4 = _ref9$ === undefined ? yy4 : _ref9$,
    _ref9$2 = _ref9[1],
    yy4 = _ref9$2 === undefined ? 1 : _ref9$2;
// 支持es6原生语法的解析器会报错：Uncaught ReferenceError: bar is not defined

console.log(xx4 + ',' + yy4); // undefined,1
//# sourceMappingURL=3_arrayDeconstructionAssignment.js.map