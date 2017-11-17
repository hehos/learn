/**
 * Created by hehui on 2016/9/18.
 */
'use strict'


function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
        console.log(item);
    });
}

var a = [];
push(a, 1, 2, 3);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

const pipeline = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val);


// const pipeline = (...funcs) => {
//     return function (val) {
//         return funcs.reduce((a, b) => b(a), val);
//     }
// }


const plus1 = a => a + 1; 
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

addThenMult(5);
// 12
 
// 函数绑定
let bindObj = { name: '张三', age: 22 };
var userInfo = function () {
    console.log(this.name + "：" + this.age);
}
// bindObj::userInfo();   // 貌似不支持