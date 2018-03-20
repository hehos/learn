'use strict';

var _obj, _obj3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by hehui on 2016/9/22.
 */

var foo = 'bar';
var baz = { foo: foo };

function f(x, y) {
    return { x: x, y: y };
}

var o1 = {
    method1: function method1() {
        return "Hello!";
    }
};

var func1 = function func1() {
    return 'hello';
};
var o2 = {
    func1: func1
};

// var obj1 = {
//     * m(){
//         yield 'hello world';
//     }
// };

var propKey = 'foo';
var obj2 = (_obj = {}, _defineProperty(_obj, propKey, true), _defineProperty(_obj, 'a' + 'bc', 123), _obj);

var obj3 = _defineProperty({}, 'h' + 'ello', function () {
    return 'hi';
});

var person = {
    sayName: function sayName() {
        console.log(this.name);
    },

    get firstName() {
        return "Nicholas";
    }
};

console.log(person.sayName.name); // "sayName"
console.log(person.firstName.name); // "get firstName"

var key1 = Symbol('description');
var key2 = Symbol();
var obj4 = (_obj3 = {}, _defineProperty(_obj3, key1, function () {}), _defineProperty(_obj3, key2, function () {}), _obj3);
obj4[key1].name; // "[description]"
obj4[key2].name; // ""

Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
Object.is({}, {});
//# sourceMappingURL=9_object.js.map