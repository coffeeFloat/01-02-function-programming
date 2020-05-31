// 模拟lodash组合函数 flowRight

const reverse = arr => arr.reverse();
const first = arr => arr[0];
const upper = str => str.toUpperCase();

// ES5
function compose(...args) {
  return function(value) {
    return args.reverse().reduce(function(res, fn) {
      return fn(res);
    }, value);
  }
}

//ES6
const compose = (...args) => (value) => args.reverse().reduce((res, fn) => fn(res), value);

const fn = compose(upper, first, reverse);
console.log(fn(['one', 'two', 'three']));