/**
 * 测试自定义模块的 路径分析和文件定位。
 * 路径分析会存在多种情况：
 */


// 1，分析扩展名找到文件。
require('innerModuleFile');

/**
 * 2, 文件扩展名找不到对应的文件；
 * node找到了标识符对应的目录（包括有扩展名的目录，如：dir.js），
 * 会将目录做为包处理
 */
//
// 2.1，扩展名的目录
require('innerDir.js');

// 2.2, 正常的目录：通过package.json的main属性定位文件
require('innerDir');
require('outerDir2');

// 2.3, 正常的目录：main属性制定文件名错误或者没有package.json。则定位index.js
require('outerDir');

