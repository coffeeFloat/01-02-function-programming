// 函数作为参数 

// 模拟数组 filter方法

function filter(arr, fn) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1 , 2, 4 ,6 ,7 ,8];
const r = filter(arr, function(item) {
  return item % 2 === 1;
});

console.log(r);