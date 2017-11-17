/**
 * Created by hehui on 2016/12/15.
 * 从测试结果得出的结论：process.nextTick()中的回调函数数的优先级要高于setImmediate()
 */


setImmediate(function () {
    console.log('setImmediate延迟执行');
});
process.nextTick(function () {
    console.log('nextTick延迟执行');
});
console.log('正常执行');
