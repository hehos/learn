"use strict";

/**
 * Created by hehui on 2016/10/17.
 */
var pipe = function () {
    return function (value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function get(pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }
                funcStack.push(window[fnName]);
                return oproxy;
            }
        });

        return oproxy;
    };
}();

var double = function double(n) {
    return n * 2;
};
var pow = function pow(n) {
    return n * n;
};
var reverseInt = function reverseInt(n) {
    return n.toString().split("").reverse().join("") | 0;
};

pipe(3).double.pow.reverseInt.get; // 63
//# sourceMappingURL=proxyGetPipe.js.map