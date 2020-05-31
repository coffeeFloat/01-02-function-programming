const _ = require('lodash');

const arr = [1 , 3, 5 ,7, 8];
_.each(arr, (value, index) => {
  console.log(value, index);
});