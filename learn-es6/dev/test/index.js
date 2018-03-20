'use strict';

var _Person = require('../entity/Person.js');

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 用webpack编译打包有错，错误原因好像是：需要import的模块  不能同时作为入口文件
// import Person from './Person.js';

var p = new _Person2.default('张三', 20); /**
                                         * Created by hehui on 2016/9/6.
                                         */

document.write(p.say());
//# sourceMappingURL=index.js.map