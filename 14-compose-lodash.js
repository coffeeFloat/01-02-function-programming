// lodash中的组合函数：
const _  = require('lodash');

const reverse = arr => arr.reverse();
const first = arr => arr[0];
const upper = str => str.toUpperCase();

const fn = _.flowRight(upper, first, reverse);
console.log(fn(['one', 'two', 'three']));

const fn2 = _.flow(reverse, first, upper);
console.log(fn2(['one', 'two', 'three']))

