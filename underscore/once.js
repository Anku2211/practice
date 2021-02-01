const _ = require('underscore');
var a = 10;
function add() {
  a = a + 10;
}
var initialize = _.once(add);
console.log(a);
initialize();
console.log(a);

initialize();
console.log(a);
