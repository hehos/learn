/**
 * Created by hehui on 2016/12/15.
 * 从测试结果得出的结论：process.nextTick()的回调函数保存在一个数组中，setImmediate()的􁍆􀱦
 􀑶结果是保存在链表中。在行为上，process.nextTick()在每轮循环中会将数组中的回调函数全部执行，􀩯
 􁛠而setImmediate()在每轮循环中执行链表中的一个回调函数。
 */
// 加入两个nextTick()的回调函数
process.nextTick(function () {
    console.log('nextTick􁃽􀗿执行1');
});
process.nextTick(function () {
    console.log('nextTick􁃽􀗿执行2');
});
// 加入两个setImmediate()的回调函数
setImmediate(function () {
    console.log('setImmediate􁃽􀗿执行1');
// 进入下次循环
    process.nextTick(function () {
        console.log('强势插入');
    });
});
setImmediate(function () {
    console.log('setImmediate􁃽􀗿执行2');
});
console.log('正常执行');