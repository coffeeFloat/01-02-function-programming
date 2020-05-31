const fp = require('lodash/fp');

// 示例
const split = fp.split(' ');
console.log(split('hello world'));

// 应用
const fn = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '));
console.log(fn('WELCOME TO CHINA'));