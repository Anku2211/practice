const _ = require("underscore")
let list = [1, 2, 3, 4, 5, 6];
var evens = _.filter(list, function(num){ 
  
  console.log((num % 2) == 0)
  return num % 2 == 0; 
});

console.log(evens)