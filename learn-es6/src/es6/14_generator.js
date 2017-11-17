/**
 * Created by hehui on 2016/11/3.
 */

// ！！！！ 这个例子不能运行  ！！！！！！

function* gen() {
    return 'DONE';
}

function wrapper() {
    var genObj = gen();
    return genObj.next();
}

wrapper();


function Gen() {
    return {
        next: function () {

        },
        [Symbol.iterator]: function () {
            return this;
        }
    }
}

function* longRunningTask(value1) {
    try {
        var value2 = yield step1(value1);
        var value3 = yield step2(value2);
        var value4 = yield step3(value3);
        var value5 = yield step4(value4);
        // Do something with value4
    } catch (e) {
        // Handle any error from step1 through step4
    }
}

scheduler(longRunningTask(initialValue));

function scheduler(task) {
    var taskObj = task.next(task.value);
    // 如果Generator函数未结束，就继续调用
    if (!taskObj.done) {
        task.value = taskObj.value
        scheduler(task);
    }
}


var p1 = new Promise(function (resolve, reject) {
    // setTimeout(() => reject(new Error('fail')), 3000)
    reject(new Error('fail'))
})
console.log('p1' + p1);

var p2 = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve(p1), 1000)
    resolve(p1)
})
console.log('p2' + p2);
p2
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })

// 多个通知
var p1 = new Promise((resolve, reject) => resolve(33));

p1.then(val => console.log('a' + val));
p1.then(val => console.log('b' + val));