// folktale库的基本使用：

const { compose, curry } = require('folktale/core/lambda');
const _ = require('lodash');

// 接收两个参数 第一个为函数的参数长度，第二个为函数
const fn = curry(2, (x, y) => x + y);

console.log(fn(1, 3)); // 4
console.log(fn(1)(3)); // 4

const fn2 = compose(_.toUpper, _.first);
console.log(fn2(['one', 'two'])); // ONE