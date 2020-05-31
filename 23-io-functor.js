// IO 函子

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
  }
};

// 使用：
const r = Io.of('hello world').map(str => str.toUpperCase());
console.log(r._value());