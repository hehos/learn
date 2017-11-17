/**
 * Created by hehui on 2016/9/14.
 */

var person = {
    sayName() {
        console.log(this.name);
    },
    get firstName() {
        return "Nicholas";
    }
};

console.log(person.sayName.name); // "sayName"
console.log(person.firstName.name); // "get firstName"