// Task 处理异步任务
const fs = require('fs');
const { task } = require('folktale/concurrency/task');
const { split, find, flowRight } = require('lodash/fp');

function readFile (filename) {
  return task(resolver => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) resolver.reject(err);
      resolver.resolve(data);
    });
  });
}

readFile('package.json')
  // .map(split('\n'))
  // .map(find(x => x.includes('version')))
  .map(flowRight(find(x => x.includes('version')), split('\n')))
  .run()
  .listen({
    onRejected: err => {
      console.log(err);
    },
    onResolved: value => {
      console.log(value);
    }
  })