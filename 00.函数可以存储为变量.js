const obj  = {
  a(params) {return View.index(params)},
};

// 等价于
const obj  = {
  a: View.index,
};

// 理由 两个函数输入相同、输出相同 所以是同一个函数