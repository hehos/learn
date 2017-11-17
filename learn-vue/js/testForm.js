/**
 * Created by hehui on 2015/12/17.
 *
 * 这个测试例子得出结论是：表单dom内的数据优先于vue对象的data数据
 */


var testForm1 = new Vue({
    el: '#testForm1',
    data: {
        // dom内的数据优先于 data的数据.
        // 对于select>option value属性值优先于内容
        // 如 <option selected value="c">C</option>，小c值优先于大C
        message: 'Hello Vue.js!',
        // 对于勾选框是逻辑值，
        // 所以模板里面即使value="checkbox" checked了，值还是逻辑值
        checked: false,
        checkedNames: ['Jack'],
        radio: '',
        picked: 'Two',
        selected1: 'b',
        selected2: ['B', 'C'],
        selected3: 'B',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ],


        test: false
    }
})

var vm = new Vue({
    el: '#testForm2',
    data: {
        toggle: true,
        zhang: { name: 'zhangshan', age: 20 },
        li: { name: 'lishi', age: 21 },

        pick: '',
        pickDyn: 'pickDyn',

        selected: 'init'

    }
});

var vm = new Vue({
    el: '#testForm3',
    data: {
        age: 33,
        msg: 'hello vue'
    }
});

