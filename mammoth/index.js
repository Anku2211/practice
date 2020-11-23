var fs = require('fs-extra');
var base64Img = require('base64-img');
// fs.readFile('./wordhtml.txt', function (err, data) {
//   if (err) {
//     console.log(err);
//   }
//   data = data.toString();
//   data = data.replace(/[^:/]\w+(?=;|,)/ [0], '');
//   fs.writeFile('output/output.txt', data, function () {
//     console.log(data);
//   });
// });

const data = fs.readFileSync('./wordhtml.txt', {
  encoding: 'utf-8'
});
var filepath = base64Img.imgSync(data, './output/', 'test');

console.log(filepath);