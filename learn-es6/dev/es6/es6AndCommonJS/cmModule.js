"use strict";

//module.js

var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  // counter: counter,
  get counter() {
    return counter;
  },
  incCounter: incCounter
};
//# sourceMappingURL=cmModule.js.map