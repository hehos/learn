/**
 * Created by hehui on 2016/7/29.
 */


var vm = new Vue({
    el: '#example',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            event.preventDefault();
            // 方法内 `this` 指向 vm
            alert('Hello ' + this.name + '!');
            // `event` 是原生 DOM 事件
            alert(event.target.tagName);

        }
    }
})

new Vue({
    el: '#example-2',
    methods: {
        say: function (msg) {
            alert(msg);
        }
    }
})

new Vue({
    el: '#example-3',
    methods: {
        say: function (msg, event) {
            alert(msg);
            alert(event.target.tagName);
            // 访问原生事件对象,并阻止表单提交
            event.preventDefault(); 
        },
        say2: function (msg, event) {
            alert(msg);

            // 参数event不能自动获取事件对象
            alert(event.target.tagName);
            event.preventDefault();
        }
    }
})


new Vue({
    el: '#eventEmbellish',
    methods: {
        stop: function(event) {
            event.stopPropagation();
        },
        prevent: function(event) {
            event.preventDefault();
            alert("prevent");
            return false;
        },
        stopPrevent:function(event) {
            alert(88);
        },
        prevent2: function(event) {
            event.preventDefault();
        },
        capture: function() {
          alert("capture");
        },
        clickEvent: function() {
            alert("clickEvent");
        },
        self: function() {
            alert("self");
        },


        test: function(event) {
            event.preventDefault();
            alert("test");
        }
    }
})

Vue.directive('on').keyCodes.customKey1 = 65;
new Vue({
    el: '#keyEmbellish',
    methods: {
        enter: function() {
            alert("enter");
        },
        tab: function() {
            alert("tab");
        },
        delete: function() {
            alert("delete");
        },
        esc: function() {
            alert("esc");
        },
        space: function() {
            alert("space");
        },
        up: function() {
            alert("up");
        },
        down: function() {
            alert("down");
        },
        left: function() {
            alert("left");
        },
        right: function() {
            alert("right");
        },
        // 支持单字母按键别名。
        a: function(event) {
            alert("a" + event.keyCode);
        },

        // 没生效
        customKey1: function(event) {
            alert('customKey1');
        }
    }
})