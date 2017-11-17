/**
 * Created by hehui on 2016/9/8.
 */
'use strict'

// ==================
// 解构赋值 --> 圆括号问题

// 全部报错
// var [(var1)] = [1];
// var {var2: (var3)} = {};
// var ({var4: var5}) = {};
// var {(var6: var7)} = {};
// var {(var8): var9} = {};
//
// var { var10: ({ var11: var12 }) } = { var10: { var11: 2 } };
let b;
[(b)] = [3]; // 正确
let d;
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
console.log(b + ',' + d + ',' + parseInt.prop);   