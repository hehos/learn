webpackJsonp([20,24],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.odd = odd;
	
	var _even = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./even\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function odd(n) {
	    return n != 0 && (0, _even.even)(n - 1);
	}
	
	// good
	/**
	 * Created by hehui on 2016/11/19.
	 */
	var a = 'foobar';
	var b = 'foo' + a + 'bar';
	var c = 'foobar';
	var d = 'foz' + b + 'baz';
	
	var ab = {};
	var start1 = new Date().getTime();
	var i1 = 0;
	while (true) {
	    if (i1++ > 10000000) {
	        break;
	    } else {
	        ab.attr1 = 1;
	    }
	}
	var end1 = new Date().getTime();
	console.log(end1 - start1);
	
	var bb = {};
	var start2 = new Date().getTime();
	var i2 = 0;
	while (true) {
	    if (i2++ > 10000000) {
	        break;
	    } else {
	        bb.attr1 = 1;
	    }
	}
	var end2 = new Date().getTime();
	console.log(end2 - start2);
	
	// microsoft yahei,simsun

/***/ }
]);
//# sourceMappingURL=odd.js.map