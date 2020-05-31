// lodash中的curry方法

const _ = require('lodash');

function getSum (a, b, c) {
  return a + b + c;
}

const curryGetSum = _.curry(getSum);

console.log(curryGetSum(1, 2, 3));
console.log(curryGetSum(1)(2, 3));
console.log(curryGetSum(1, 2)(3));