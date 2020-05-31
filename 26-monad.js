// monad 函子
// 对IO函子进一步优化 

const fp = require('lodash/fp');

class Io {
  static of (value) {
    return new Io(function() {
      return value;
    });
  }
  constructor (fn) {
    this._value = fn;
  };

  map(fn) {
    return new Io(fp.flowRight(fn, this._value));
  };
  join() { 
    return this._value();
  };
  flatMap(fn) {
    return this.map(fn).join();
  } 
};

// IO函子使用：
// const r = Io.of('hello world').map(str => str.toUpperCase());
// console.log(r._value());

// monad函子使用：
const getStr = function (str) {
  return new Io(function() {
    return str;
  });
}
const upper = str => {
  return new Io(function() {
    return str.toUpperCase();
  });
}

const r2 = getStr('hello world')
            .map(fp.replace(/\s+/g, '-'))
            .flatMap(upper)
            .join();
console.log(r2);