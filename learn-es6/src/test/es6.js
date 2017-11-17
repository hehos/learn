/**
 * Created by hehui on 2016/9/1.
 */

console.log((x => x * 2)(1));
class Calc {
    constructor(){
        console.log('Calc constructor');
    }
    add(a, b){
        return a + b;
    }
}

var c = new Calc();
console.log(c.add(4,5));