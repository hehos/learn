/**
 * Created by hehui on 2016/8/25.
 */

// ==================
Vue.filter('reverse', function (value) {
    return value.split('').reverse().join('')
})
new Vue({
    el: '#demo1',
    data: {
        message: 'hello'
    }
})


// ==================
Vue.filter('wrap', function (value, begin, end) {
    return begin + " " + value + " " + end;
})
new Vue({
    el: '#demo2',
    data: {
        message: 'hello'
    }
})

// =================
new Vue({
    el: '#two-way-filter-demo',
    data: {
        money: 123.45
    },
    filters: {
        currencyDisplay: {
            read: function(val) {
                return '$'+val.toFixed(2);
            },
            write: function(val, oldVal) {
                // 匹配非数字和"."字符
                // 注：这里的"."字符没有加转义。
                var number = +val.replace(/[^\d.]/g, '');
                //var number = +val.replace(/[^\d\.]/g, '');
                return isNaN(number) ? 0 : parseFloat(number.toFixed(2));
            }
        }
    }
})

// =================
new Vue({
    el: '#demo3',
    data: {
        msg: '动态参数:',
        userInput: 'hello'
    },
    filters: {
        concat: function(value, input) {
            debugger;
            return value + input;
        }
    }
})