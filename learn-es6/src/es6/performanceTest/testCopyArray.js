/**
 * Created by hehui on 2016/11/21.
 */

const items = [];
let itemsCopy1 = [];
let itemsCopy2 = [];
let i;

for (i = 0; i < 10000000; i++) {
    items[i] = 1;
}
const len = items.length;

let time1 = new Date().getTime();
for (i = 0; i < len; i++) {
    itemsCopy1[i] = items[i];
}
let time2 = new Date().getTime();
console.log(time2 - time1);

// good
let time3 = new Date().getTime();
itemsCopy2 = [...items];
let time4 = new Date().getTime();
console.log(time4 - time3);