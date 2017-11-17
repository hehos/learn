/**
 * Created by hehui on 2016/10/18.
 */

const dom = new Proxy({}, {
    get(target, property) {
        return function(attrs = {}, ...children) {
            const el = document.createElement(property);
            for (let prop of Object.keys(attrs)) {
                el.setAttribute(prop, attrs[prop]);
            }
            for (let child of children) {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                el.appendChild(child);
            }
            return el;
        }
    }
});

const el = dom.div({title: '测试利用get拦截，实现一个生成各种DOM节点的通用函数dom', class: 'proxyGetCreateDom'},
    'Hello, my name is ',
    dom.a({href: '//example.com'}, 'Mark'), // <a href="//example.com">Mark</a>
    '. I like:',
    dom.ul({}, // <ul><li></li> <li></li> <li></li></ul>
        dom.li({}, 'The web'), // <li>The web</li>
        dom.li({}, 'Food'), // <li>Food</li>
        dom.li({}, '…actually that\'s it')  // <li>…actually that's it</li>
    )
);


document.body.appendChild(el);

