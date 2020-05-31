// 组合函数中的调试
const _ = require('lodash');
// 将字符串 WELCOME TO CHINA 转化成小写 并用 - 连接

// 1.split 
const split = _.curry((sep, str) => str.split(sep));

// 2.map
const map = _.curry((fn, arr) => arr.map(fn));

// 3.join
const join = _.curry((sep, arr) => arr.join(sep));

// 调试方法
const debug = _.curry((tag, val) => {
  console.log(tag, val);
  return val;
});

const fn = _.flowRight(join('-'), debug('map之后'), map(_.toLower), debug('split之后'), split(' '));

console.log(fn('WELCOME TO CHINA'));