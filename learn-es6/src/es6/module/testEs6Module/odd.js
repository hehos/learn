/**
 * Created by hehui on 2016/11/19.
 */
import { even } from './even';
export function odd(n) {
    return n != 0 && even(n - 1);
}


// good
const a = 'foobar';
const b = `foo${a}bar`;
const c = 'foobar';
const d = `foz${b}baz`;


const ab = {};
var start1 = new Date().getTime();
let i1 = 0;
while (true) {
    if(i1++ > 10000000) {
        break;
    } else {
        ab.attr1 = 1;
    }
}
var end1 = new Date().getTime();
console.log(end1 - start1);


const bb = {};
var start2 = new Date().getTime();
let i2 = 0;
while (true) {
    if(i2++ > 10000000) {
        break;
    } else {
        bb.attr1 = 1;
    }
}
var end2 = new Date().getTime();
console.log(end2 - start2);

// microsoft yahei,simsun