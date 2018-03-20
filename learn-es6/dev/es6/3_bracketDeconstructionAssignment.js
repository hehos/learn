/**
 * Created by hehui on 2016/9/8.
 */
'use strict';

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

var b = void 0;
// 正确
b = 3;
var d = void 0;
// 正确
var _ref = {};
d = _ref.p;
// 正确
var _ref2 = [3];
parseInt.prop = _ref2[0];
console.log(b + ',' + d + ',' + parseInt.prop);
//# sourceMappingURL=3_bracketDeconstructionAssignment.js.map