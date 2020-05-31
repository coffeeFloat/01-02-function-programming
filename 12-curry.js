// 模拟实现curry函数

function curry(func) {
  // 返回一个函数 
  //当实参小于形参时，该函数返回一个继续接受剩余参数的函数
  // 反之 返回个直接可以执行的函数
  return function curried(...args) {
    if (args.length < func.length) {
      // 当实参小于形参时 返回一个继续接收剩余参数的函数
      // 继而 继续判断 当实参小于形参时。。。。  反之。。。。
      // 所以应采用递归
      return function () {
        return curried(...args.concat(Array.from(arguments)));
      }
    } else {
      return func(...args);
    }
  }
}

function getSum (a, b, c) {
  return a + b + c;
}

const curried = curry(getSum);
console.log(curried(1, 3, 5));
console.log(curried(1, 3)(5));
console.log(curried(1)(3, 5));