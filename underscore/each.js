const _ = require('underscore');
function alert(item, index, list) {
  console.log(item);
  console.log(index);
  // console.log(list);

  console.log('Hello');
}
// let list = [1, 2, 3, 4, 5];
// let newList = _.each(list, alert);
// console.log(newList);

var newList = _.each({ one: 1, two: 2, three: 3 }, alert);
console.log(newList);
