var util = require('util');

function Person() {
  this.name = 'byvoid';
  
  this.toString = function() {
    return this.name;
  };
  this.myMethod = function (val) {
    return val;
  }
}

var obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
