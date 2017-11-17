/**
 * Created by hehui on 2016/9/22.
 */

var foo = 'bar';
var baz = {foo};


function f(x, y) {
    return {x, y};
}

var o1 = {
    method1() {
        return "Hello!";
    }
};

var func1 = () => 'hello';
var o2 = {
    func1
};


// var obj1 = {
//     * m(){
//         yield 'hello world';
//     }
// };

let propKey = 'foo';
let obj2 = {
    [propKey]: true,
    ['a' + 'bc']: 123
};

let obj3 = {
    ['h'+'ello']() {
        return 'hi';
    }
};


var person = {
    sayName() {
        console.log(this.name);
    },
    get firstName() {
        return "Nicholas";
    }
};

console.log(person.sayName.name);   // "sayName"
console.log(person.firstName.name); // "get firstName"

const key1 = Symbol('description');
const key2 = Symbol();
let obj4 = {
    [key1]() {},
    [key2]() {},
};
obj4[key1].name // "[description]"
obj4[key2].name // ""

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
Object.is({}, {})