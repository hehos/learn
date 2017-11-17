#执行命令
### 配置文件.babelrc
ES2015转码规则
```
$ npm install --save-dev babel-preset-es2015
```

react转码规则
```
$ npm install --save-dev babel-preset-react
```

ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
```
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```
然后，将这些规则加入.babelrc。
```
  {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }
```

### 命令行转码babel-cli
Babel提供babel-cli工具，用于命令行转码。

**全局安装**
```
$ npm install --save-dev babel-cli
```
**基本用法如下。**
```
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```
**局部安装（项目中安装）**
```
$ npm install --save-dev babel-cl
```
然后，改写package.json。
```json
{
  // ...
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d dist",
    "dev": "babel src -d dev -s"
  }
}
```
执行下面的命令，编译：
```
$ npm run build
```
### babel-node  
babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。
它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。

它不用单独安装，而是随babel-cli一起安装。然后，执行babel-node就进入REPL环境。
```
$ babel-node
> (x => x * 2)(1)
2
```
babel-node也可以安装在项目中。
```
```
