const async = require('async');
const fs = require('fs');

let files1 = ['./files/1.txt', './files/2.txt', './files/3.txt'];
async.eachSeries(
  files1,
  function (file, callback) {
    fs.readFile(file, 'utf8', (err, data) => {
      console.log(file);
      callback();
    });
  },
  function (err) {
    console.log('all done!');
  }
);
