/**
 * Created by hehui on 2016/9/8.
 */
'use strict';

// ==================
// 对象的解构赋值

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _foo$bar = { foo: "aaa", bar: "bbb" },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;

console.log(foo + ',' + bar); // aaa,bbb

var _foo2$bar = { foo2: "aaa", bar2: "bbb" },
    baz = _foo2$bar.baz;

console.log(baz); // undefined

var _foo3$bar = { foo3: 'aaa', bar3: 'bbb' },
    baz2 = _foo3$bar.foo3;
// 报错：Uncaught ReferenceError: foo3 is not defined。此时foo3是模式，不会被匹配
// console.log(foo3 + ',' +baz2);

console.log(baz2);

var insetType = {
    insetK: ['Hello', { insetK2: 'World' }]
};

var _insetType$insetK = _slicedToArray(insetType.insetK, 2),
    ele = _insetType$insetK[0],
    insetK2 = _insetType$insetK[1].insetK2;
// 报错：Uncaught ReferenceError: foo3 is not defined。此时 insetK 是模式，不会被匹配
// console.log(insetK + ',' + ele + ',' + insetK2); // aaa,bbb


console.log(ele + ',' + insetK2); // Hello,World

// 数组进行对象属性的结构
var arr1 = [1, 2, 3];
var first = arr1[0],
    last = arr1[arr1.length - 1]; // 方括号这种写法，属于“属性名表达式”

console.log(first + ',' + last); // 1,3

// 数值和布尔值的解构赋值
var _ = 123,
    strintVar = _.toString;

console.log(strintVar === Number.prototype.toString); // true
var _true = true,
    booleVar = _true.toString;

console.log(booleVar === Boolean.prototype.toString); // true


function funcPara(_ref) {
    var x = _ref.x,
        y = _ref.y,
        z = _ref.z;

    return x + y + z;
}
funcPara({ z: 3, y: 2, x: 1 });

var funcPara2 = function funcPara2(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        z = _ref2.z;
    return x + y + z;
};
funcPara2({ z: 3, y: 2, x: 1 });
//# sourceMappingURL=3_objectDeconstructionAssignment-2.js.map