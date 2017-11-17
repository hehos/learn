
var vm1 = new Vue({
    el: demo1,
    data: {
        isA: true,
        isB: true
    }
})

var vm2 = new Vue({
    el: '#demo2',
    data: {
        classObject: {
            'class-a': false,
            'class-b': true
        }
    }
})

var vm3 = new Vue({
    el: '#demo3',
    data: {
        'class-a': true,
        'class-b': true
    },
    computed: {
        classObject: function () {
            return this;
        }
    }
})


var vm4 = new Vue({
    el: '#demo4',
    data: {
        classA: 'class-a',
        classB: 'class-b'
    }
})

var vm5 = new Vue({
    el: '#demo5',
    data: {
        classA: 'class-a',
        classB: 'class-b',
        classC: 'class-c',
        isB: true,
        isC: true
    }
})

var bindStyle1 = new Vue({
    el: '#bindStyle1',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
})

var bindStyle2 = new Vue({
    el: '#bindStyle2',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})
