/**
 * Created by hehui on 2016/7/2.
 */


var vm1 = new Vue({
    el: demo1,
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    }
})

vm1.$watch('firstName', function (val) {
    alert('firstName update')
    this.fullName = val + ' ' + this.lastName
})

vm1.$watch('lastName', function (val) {
    alert('lastName update')
    this.fullName = this.firstName + ' ' + val
})


var vm2 = new Vue({
    el: demo2,
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})

var vm3 = new Vue({
    el: demo3,
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                console.log('调用set方法设置属性');
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})