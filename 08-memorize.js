// 记忆函数

const _ = require('lodash');

function getcube (num) {
  console.log(num);
  return num * num * num;
}

// 第二次传入相同的参数后不需要再执行函数 直接返回存储结果
function memorize (fn) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    cache[key] = cache[key] || fn.apply(fn, arguments);
    return cache[key];
  }
}

const getCubeMomery = memorize(getcube);

console.log(getCubeMomery(5));
console.log(getCubeMomery(5));
console.log(getCubeMomery(5));
