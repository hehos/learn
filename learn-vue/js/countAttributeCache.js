/**
 * Created by hehui on 2016/8/16.
 */
var vm = new Vue({
    el: '#countAttributeCache',
    data: {
        msg: 'hi'
    },
    computed: {
        example: function () {
            return Date.now() + this.msg;
        }
    }
})

// 关闭计算属性的缓存
var vm2 = new Vue({
    el: '#countAttributeCache2',
    data: {
        msg: 'hi'
    },
    computed: {
        example: {
            cache: false,
            get: function () {
                return Date.now() + this.msg;
            }
        }
    }
})