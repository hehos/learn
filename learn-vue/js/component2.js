Vue.component('child', {
    template: '#test-slot-template'
})

Vue.component('child2', {
    template: '#test-slot-template2'
})

Vue.component('child3', {
    template: '#test-slot-template3'
})

new Vue({
    el: '#test-slot',
    data: {

    }
});


var synComponent = new Vue({
    el: '#synComponent',
    data: {
        currentView: 'home'
    },
    components: {
        home: { template: '<div>home</div>' },
        posts: {
            template: '<div>posts</div>',
            activate: function (done) {
                console.log(88);
                done(); // 需要这个回调函数才能更新模板
            }
        },
        archive: { template: '<div>archive</div>' }
    }
})

// =====================
// 杂项

Vue.component('sundry1', {
    props: ['item', 'index'],
    template: '#sundry-template1'
})

new Vue({
    el: '#sundry',
    data: {
        items: [
            {
                name: 'zhangshan',
                age: 20
            },{
                name: 'lishi',
                age: 22
            }
        ]
    }
});