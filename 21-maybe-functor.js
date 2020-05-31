// maybe 函子

class Maybe {
  static of (value) {
    return new Maybe(value);
  };

  constructor (value) {
    this._value = value;
  };

  // 当值为null 或者 undefined时，返回一个value为null的Maybe类
  // 反之 返回一个value为经过fn函数处理的Maybe类
  map(fn) {
    // return Maybe.of(fn(this._value));
    return this.isNullOrUndefined() ? Maybe.of(null) : Maybe.of(fn(this._value));
  };

  isNullOrUndefined() {
    return this._value === undefined || this._value === null;
  };
}

// const r = Maybe.of('hello world')
//             .map(x => x.toUpperCase());
// console.log(r);

const r = Maybe.of(null)
            .map(x => x.toUpperCase());
console.log(r);