'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counter = undefined;
exports.even = even;

var _odd = require('./odd');

var counter = exports.counter = 0; /**
                                    * Created by hehui on 2016/11/19.
                                    */
function even(n) {
  exports.counter = counter += 1;
  return n == 0 || (0, _odd.odd)(n - 1);
}
//# sourceMappingURL=even.js.map