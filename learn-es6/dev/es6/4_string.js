/**
 * Created by hehui on 2016/9/18.
 */
'use strict';

// ==========================
// padStart()，padEnd()

// '1'.padStart(10, '0') // "0000000001"
// '12'.padStart(10, '0') // "0000000012"
// '123456'.padStart(10, '0') // "0000123456"
//
// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
// 以上语法浏览器暂时不支持

// ==========================
// 模板字符串

// 字符串中嵌入变量

var name = "Bob",
    time = "today";
console.log("Hello " + name + ", how are you " + time + "?");

function fn1() {
  return "Hello World";
}
console.log("foo " + fn1() + " bar");
//# sourceMappingURL=4_string.js.map