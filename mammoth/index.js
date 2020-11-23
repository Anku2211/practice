var fs = require('fs-extra');
const image = require('./wordhtml.txt');

fs.readFile('./wordhtml.txt', function (err, data) {
  if (err) {
    console.log(err);
  }
  data = data.toString();
  data = data.replace(/[^:/]\w+(?=;|,)/[0], '');
  fs.writeFile('output/output.txt', data, function () {
    console.log(data);
  });
});
