/**
 * Created by hehui on 2015/12/24.
 */

// *********************************
// 使用组件

// ================
// 注册

// 定义
var MyComponent = Vue.extend({
    template: '<div>A custom component!</div>'
})

// 注册
Vue.component('my-component', MyComponent);


// ================
// 局部注册

var Child = Vue.extend({
    template: '<div>child component</div>'
})

var Parent = Vue.extend({
    template: '<div>parent component</div>' +
        '<child-component></child-component>' +
        '<child-component2></child-component2>',
    components: {
        // <child-component> 只能用在父组件模板内
        'child-component': Child,
        'child-component2': {
            template: '<div>child component2</div>'
        }
    }
})
// 注册
Vue.component('parent-component', Parent);


// ================
// 注册语法糖

Vue.component('my-component2', {
    template: '<div>注册语法糖的内容</div>'
});


// *********************************
// Props
Vue.component('child', {
    // 声明 props
    props: ['msg', 'myMessage', 'dynProp'],
    // prop 可以用在模板内
    // 可以用 `this.msg` 设置
    template: '<span>{{ msg }} {{ myMessage }} {{ dynProp }}</span>'
})

new Vue({
    el: '#component',
    data: {
        parentMsg: 'aaaaa'
    }
})




// *********************************
// 父子组件通信

// 注册子组件
// 将当前消息派发出去
Vue.component('child2', {
    template: '#child-template',
    data: function () {
        return { msg: 'hello' }
    },
    methods: {
        notify: function () {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg)
                this.msg = ''
            }
        }
    }
})

// 初始化父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
    el: '#events-example',
    data: {
        messages: [],
        messages2: []
    },
    // 在创建实例时 `events` 选项简单地调用 `$on`
    events: {
        'child-msg': function (msg) {
            // 事件回调内的 `this` 自动绑定到注册它的实例上
            this.messages.push(msg);
            // 让输入框重新获取焦点
            this.$el.querySelector('input').focus();
        }
    },

    // 使用 v-on 绑定自定义事件
    methods: {
        handleIt: function(msg) {
            // 事件回调内的 `this` 自动绑定到注册它的实例上
            this.messages2.push(msg);
            // 让输入框重新获取焦点
            this.$el.querySelectorAll('input')[1].focus();
        }
    }
})
