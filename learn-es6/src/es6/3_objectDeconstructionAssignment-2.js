/**
 * Created by hehui on 2016/9/8.
 */
'use strict'

// ==================
// 对象的解构赋值

var { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo + ',' + bar); // aaa,bbb

var { baz } = { foo2: "aaa", bar2: "bbb" };
console.log(baz); // undefined

var { foo3: baz2 } = { foo3: 'aaa', bar3: 'bbb' };
// 报错：Uncaught ReferenceError: foo3 is not defined。此时foo3是模式，不会被匹配
// console.log(foo3 + ',' +baz2);
console.log(baz2);

var insetType = {
    insetK: [
        'Hello',
        { insetK2: 'World' }
    ]
};
var { insetK: [ele, { insetK2 }] } = insetType;
// 报错：Uncaught ReferenceError: foo3 is not defined。此时 insetK 是模式，不会被匹配
// console.log(insetK + ',' + ele + ',' + insetK2); // aaa,bbb
console.log(ele + ',' + insetK2); // Hello,World

// 数组进行对象属性的结构
var arr1 = [1, 2, 3];
var {0 : first, [arr1.length - 1] : last} = arr1; // 方括号这种写法，属于“属性名表达式”
console.log(first + ',' + last); // 1,3

// 数值和布尔值的解构赋值
let {toString: strintVar} = 123;
console.log(strintVar === Number.prototype.toString); // true
let {toString: booleVar} = true;
console.log(booleVar === Boolean.prototype.toString); // true


function funcPara({x, y, z}) {
    return x + y + z;
}
funcPara({z: 3, y: 2, x: 1});

var funcPara2 = ({x, y, z}) => x + y + z;
funcPara2({z: 3, y: 2, x: 1});
