/**
 * Created by hehui on 2016/7/30.
 */



var vm = new Vue({
    el: '#transition1',
    data: {
        show: true,
        show2: true,
        show3: true,
        show4: false,
        ok: false,
        ok2: false,
        transitionName: 'expand',
        list: [
            {text: '渐近过渡0'},
            {text: '渐近过渡1'},
            {text: '渐近过渡2'},
            {text: '渐近过渡3'}
        ]
    }
});

// v-if起作用， v-show不起作用
Vue.transition('expand', {

    beforeEnter: function (el) {
        console.log('beforeEnter');
        el.textContent = 'beforeEnter'
    },
    enter: function (el) {
        console.log('enter');
        el.textContent = 'enter'
    },
    afterEnter: function (el) {
        console.log('afterEnter');
        el.textContent = 'afterEnter'
    },
    enterCancelled: function (el) {
        // handle cancellation
    },

    beforeLeave: function (el) {
        console.log('beforeLeave');
        el.textContent = 'beforeLeave'
    },
    leave: function (el) {
        console.log('leave');
        el.textContent = 'leave'
    },
    afterLeave: function (el) {
        console.log('afterLeave');
        el.textContent = 'afterLeave'
    },
    leaveCancelled: function (el) {
        // handle cancellation
    }
})

// 自定义过滤类名
Vue.transition('bounce', {
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutRight'
})

// 显式声明 CSS 过渡类型
Vue.transition('bounce2', {
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutRight',
    // 你需要显式地声明你希望 Vue 处理的动画类型
    // (animation 或是 transition)：
    type: 'animation',
    afterEnter: function (el) {
        alert('afterEnter');
    },
    leave: function (el) {
        alert('leave');
    }
})

Vue.transition('fade', {
    css: false,
    enter: function (el, done) {
        // 元素已被插入 DOM
        // 在动画结束后调用 done
        $(el)
            .css('opacity', 0)
            .animate({ opacity: 1 }, 1000, done)
    },
    enterCancelled: function (el) {
        $(el).stop()
    },
    leave: function (el, done) {
        // 与 enter 相同
        $(el).animate({ opacity: 0 }, 1000, done)
    },
    leaveCancelled: function (el) {
        $(el).stop()
    }
})

Vue.transition('stagger', {
    stagger: function (index) {
        // 每个过渡项目增加 100ms 延时
        // 但是最大延时限制为 300ms
        return Math.min(300, index * 50);
    }
})

new Vue({
    el: '#demo',
    data: {
        query: '',
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    }
})