const _ = require('underscore');
var log = _.bind(console.log, console);
console.log('Hello Everyone');
_.delay(log, 2000, 'logging after 2 sec');
// var func = function greeting(){
//   console.log("Hello Everyone");

// }
