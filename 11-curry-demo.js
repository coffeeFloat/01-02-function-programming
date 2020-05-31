// 柯里化应用实例

const _ = require('lodash');

const match = _.curry(function(reg, str) {
  return str.match(reg);
});

const matchSpace = match(/\s+/g);
const matchNumber = match(/\d+/g);

// console.log(matchSpace('Hector Yang'));
// console.log(matchSpace('Hector_Yang'));
// console.log(matchNumber('232rieri'));

// const filter = _.curry(function(func, arr) {
//   return arr.filter(func);
// });
const filter = _.curry((func, arr) => arr.filter(func));

const filterSpace = filter(matchSpace);
console.log(filterSpace(['hello world', 'hello_world']));