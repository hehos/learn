/**
 * Created by hehui on 2016/11/3.
 */


const arr = ['red', 'green', 'blue'];
let iterator  = arr[Symbol.iterator]();

iterator.next();

for(let v of arr) {
    console.log(v); // red green blue
}

for(let v of iterator) {
    console.log(v); // red green blue
}