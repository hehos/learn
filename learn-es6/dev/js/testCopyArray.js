webpackJsonp([23,24],[
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Created by hehui on 2016/11/21.
	 */
	
	var items = [];
	var itemsCopy1 = [];
	var itemsCopy2 = [];
	var i = void 0;
	
	for (i = 0; i < 10000000; i++) {
	    items[i] = 1;
	}
	var len = items.length;
	
	var time1 = new Date().getTime();
	for (i = 0; i < len; i++) {
	    itemsCopy1[i] = items[i];
	}
	var time2 = new Date().getTime();
	console.log(time2 - time1);
	
	// good
	var time3 = new Date().getTime();
	itemsCopy2 = [].concat(items);
	var time4 = new Date().getTime();
	console.log(time4 - time3);

/***/ }
]);
//# sourceMappingURL=testCopyArray.js.map