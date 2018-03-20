'use strict';

/**
 * Created by hehui on 2016/10/18.
 */

var dom = new Proxy({}, {
    get: function get(target, property) {
        return function () {
            var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var el = document.createElement(property);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(attrs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var prop = _step.value;

                    el.setAttribute(prop, attrs[prop]);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                children[_key - 1] = arguments[_key];
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var child = _step2.value;

                    if (typeof child === 'string') {
                        child = document.createTextNode(child);
                    }
                    el.appendChild(child);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return el;
        };
    }
});

var el = dom.div({ title: '测试利用get拦截，实现一个生成各种DOM节点的通用函数dom', class: 'proxyGetCreateDom' }, 'Hello, my name is ', dom.a({ href: '//example.com' }, 'Mark'), // <a href="//example.com">Mark</a>
'. I like:', dom.ul({}, // <ul><li></li> <li></li> <li></li></ul>
dom.li({}, 'The web'), // <li>The web</li>
dom.li({}, 'Food'), // <li>Food</li>
dom.li({}, '…actually that\'s it') // <li>…actually that's it</li>
));

document.body.appendChild(el);
//# sourceMappingURL=proxyGetCreateDom.js.map