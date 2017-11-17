/**
 * Created by hehui on 2016/8/17.
 */

// ================
Vue.directive('demo', {
    bind: function () {
        console.log('demo bound!')
    },
    update: function (value) {
        this.el.innerHTML =
            'name - '       + this.name + '<br>' +
            'expression - ' + this.expression + '<br>' +
            'argument - '   + this.arg + '<br>' +
            'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
            'value - '      + value
    }
})
var demo = new Vue({
    el: '#demo',
    data: {
        msg: 'hello!'
    }
})

// ================
Vue.directive('demo2', function (value) {
    console.log(value.color) // "white"
    console.log(value.text) // "hello!"
    this.el.innerHTML = JSON.stringify(value);
})

var demo2 = new Vue({
    el: '.demo2',
    data: {
        demo2: "demo2"
    }
})

// ================
Vue.directive('demo3', {
    params: ['a'],
    bind: function () {
        console.log(this.params.a) // -> "hi"
        this.el.innerHTML = this.params.a;
    }
})
var demo3 = new Vue({
    el: '#demo3',
    data: {
    }
})

// ================
Vue.directive('demo4', {
    params: ['a'],
    paramWatchers: {
        a: function (val, oldVal) {
            console.log('a changed!')
            console.log('oldVal: ' + oldVal + ' ; newVal:' + val);
        }
    },
    update: function(val) {
        this.el.innerHTML = this.params.a;
        //this.el.innerHTML = val;
    }
})
var demo4 = new Vue({
    el: '#demo4',
    data: {
        someValue: "someValue"
    }
})

// ================
Vue.directive('demo5', {
    deep: true, // 深度更新绑定的对象
    update: function(val) {
        this.el.innerHTML = JSON.stringify(val);
    }
})
var demo5 = new Vue({
    el: '#demo5',
    data: {
        someValue: {
            name: "zhangshan" // name属性值变化，也能更新
        }
    }
})

// ================
Vue.directive('demo6', {
    twoWay: true,
    bind: function () {
        this.handler = function () {
            // 将数据写回 vm
            // 如果指令这样绑定 v-example="a.b.c"
            // 它将用给定值设置 `vm.a.b.c`
            this.set(this.el.value);
            alert(this.vm.someValue); // 输出改变后的值
        }.bind(this)
        this.el.addEventListener('input', this.handler)
    },
    unbind: function () {
        this.el.removeEventListener('input', this.handler)
    }
})
var demo5 = new Vue({
    el: '#demo6',
    data: {
        someValue: 'default'
    }
})