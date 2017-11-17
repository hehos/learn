/**
 * Created by hehui on 2016/6/3.
 */

// AMD模块的写法


define(function () {
    var add = function (x, y) {
        return x + y;
    };
    return {
        add: add
    };
});