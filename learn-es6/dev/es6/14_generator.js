'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(longRunningTask);

/**
 * Created by hehui on 2016/11/3.
 */

// ！！！！ 这个例子不能运行  ！！！！！！

function gen() {
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    return _context.abrupt('return', 'DONE');

                case 1:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function wrapper() {
    var genObj = gen();
    return genObj.next();
}

wrapper();

function Gen() {
    return _defineProperty({
        next: function next() {}
    }, Symbol.iterator, function () {
        return this;
    });
}

function longRunningTask(value1) {
    var value2, value3, value4, value5;
    return regeneratorRuntime.wrap(function longRunningTask$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return step1(value1);

                case 3:
                    value2 = _context2.sent;
                    _context2.next = 6;
                    return step2(value2);

                case 6:
                    value3 = _context2.sent;
                    _context2.next = 9;
                    return step3(value3);

                case 9:
                    value4 = _context2.sent;
                    _context2.next = 12;
                    return step4(value4);

                case 12:
                    value5 = _context2.sent;
                    _context2.next = 17;
                    break;

                case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2['catch'](0);

                case 17:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this, [[0, 15]]);
}

scheduler(longRunningTask(initialValue));

function scheduler(task) {
    var taskObj = task.next(task.value);
    // 如果Generator函数未结束，就继续调用
    if (!taskObj.done) {
        task.value = taskObj.value;
        scheduler(task);
    }
}

var p1 = new Promise(function (resolve, reject) {
    // setTimeout(() => reject(new Error('fail')), 3000)
    reject(new Error('fail'));
});
console.log('p1' + p1);

var p2 = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve(p1), 1000)
    resolve(p1);
});
console.log('p2' + p2);
p2.then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});

// 多个通知
var p1 = new Promise(function (resolve, reject) {
    return resolve(33);
});

p1.then(function (val) {
    return console.log('a' + val);
});
p1.then(function (val) {
    return console.log('b' + val);
});
//# sourceMappingURL=14_generator.js.map