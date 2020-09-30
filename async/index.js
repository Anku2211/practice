var async = require('async');

// async.series([functionOne, functionTwo, functionThree], function (err, result) {
//   console.log(result);
// });
// function functionOne(callback) {
//   callback(null, 'Result of first function');
// }
// function functionTwo(callback) {
//   callback(null, 'Result of Second function');
// }
// function functionThree(callback) {
//   callback(null, 'Result of third function');
// }

//async.parallel

// var stack = [];

// stack.push(functionOne);
// stack.push(functionTwo);
// stack.push(functionThree);

// async.parallel(stack, function (err, result) {
//   console.log(result);
// });`

//object async.parallel
// var stack = {};

// stack.getUserName = function (callback) {
//   var userName = 'Ankita';
//   callback(null, userName);
// };
// stack.getAge = function (callback) {
//   var age = 25;
//   callback(null, age);
// };
// stack.getGender = function (callback) {
//   var gender = 'female';
//   callback(null, gender);
// };
// async.parallel(stack, function (err, result) {
//   if (err) {
//     console.err(err);
//     return;
//   }
//   console.log(result);
// });

// async auto
// async.auto({
//   initialTask: function (callback) {
//     callback(null, 'Initial Task');
//   },
//   task1: [
//     'initialTask',
//     function (callback, results) {
//       var a = results.initialTask;
//       callback(null, a);
//     },
//   ],
//   task2: [
//     'initialTask',
//     function (callback, results) {
//       var a = results.initialTask;
//       callback(null, a);
//     },
//   ],
//   finalTask: [
//     'task1',
//     'task2',
//     function (callback, results) {
//       var a = results.initialTask;
//       var b = results.task1;
//       var c = results.task2;
//       callback(null, a, b, c);
//     },
//   ],
// });
