// point free 模式
const fp = require('lodash/fp');

const fn = fp.flowRight(fp.replace(/\s+/g, '-'), fp.toLower);
console.log(fn('HELLO WORLD'));

// 案例：world wild web => W. W. W

// const fn2 = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '));
// 优化
const fn2 = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '));

console.log(fn2('world wild web'));