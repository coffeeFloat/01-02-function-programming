// 函子 概念描述

class Container {
  static of (value) {
    return new Container(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    // return new Container(fn(this._value));
    return Container.of(fn(this._value));
  }
}

const c = Container.of(5)
            .map(x => x * 2)
            .map(x => x * x);
console.log(c);