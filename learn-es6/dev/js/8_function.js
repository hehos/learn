webpackJsonp([8,24],[
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by hehui on 2016/9/18.
	 */
	'use strict';
	
	function push(array) {
	    for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        items[_key - 1] = arguments[_key];
	    }
	
	    items.forEach(function (item) {
	        array.push(item);
	        console.log(item);
	    });
	}
	
	var a = [];
	push(a, 1, 2, 3);
	
	var arr1 = [0, 1, 2];
	var arr2 = [3, 4, 5];
	Array.prototype.push.apply(arr1, arr2);
	
	var pipeline = function pipeline() {
	    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        funcs[_key2] = arguments[_key2];
	    }
	
	    return function (val) {
	        return funcs.reduce(function (a, b) {
	            return b(a);
	        }, val);
	    };
	};
	
	// const pipeline = (...funcs) => {
	//     return function (val) {
	//         return funcs.reduce((a, b) => b(a), val);
	//     }
	// }
	
	
	var plus1 = function plus1(a) {
	    return a + 1;
	};
	var mult2 = function mult2(a) {
	    return a * 2;
	};
	var addThenMult = pipeline(plus1, mult2);
	
	addThenMult(5);
	// 12
	
	// 函数绑定
	var bindObj = { name: '张三', age: 22 };
	var userInfo = function userInfo() {
	    console.log(this.name + "：" + this.age);
	};
	// bindObj::userInfo();   // 貌似不支持

/***/ }
]);
//# sourceMappingURL=8_function.js.map