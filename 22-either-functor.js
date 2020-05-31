// either 函子 处理错误

class Left {
  static of (value) {
    return new Left(value);
  };
  constructor(value) {
    this._value = value;
  };

  // 直接返回对象
  map(fn) {
    return this;
  }
}

class Right {
  static of (value) {
    return new Right(value);
  };
  constructor(value) {
    this._value = value;
  };

  map(fn) {
    return Right.of(fn(this._value));
  }
}

const parseJson = (str) => {
  try {
    return Right.of(str).map(str => JSON.parse(str));
  } catch(e) {
    return Left.of({error: e.message});
  }
}

// const r = parseJson('{name: yf}');
// console.log(r);

const r = parseJson('{"name": "yf"}');
console.log(r);