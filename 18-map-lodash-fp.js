// map方法在lodash 以及 lodash/fp中的区别

const _ = require('lodash');
const fp = require('lodash/fp');

console.log(_.map(['23', '12', '44'], parseInt));

console.log(fp.map(parseInt, ['23', '12', '44']));

// 两个模块中方法参数中接收的参数是不一样的 需要注意