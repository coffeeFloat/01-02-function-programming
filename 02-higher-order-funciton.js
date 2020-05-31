// 函数作为返回值

// 函数只会被执行一次
function once(fn) {
  let done = false;
  if (!done) {
    done = true;
    return function () {
      return fn.apply(this, arguments);
    };
  }
} 

// 使用方式：返回一个只会被执行一次的函数
const pay = once(function(money) {
  console.log(`花了 ${money} RMB`);
});

pay(5);
pay(5);
pay(5);