webpackJsonp([4,10],[
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by hehui on 2016/9/18.
	 */
	'use strict';
	
	var arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};
	
	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
	
	// ES6的写法 
	var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

/***/ }
]);
//# sourceMappingURL=5_array.js.map