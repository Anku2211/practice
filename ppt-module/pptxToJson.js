const PPTX2Json = require('pptx2json');
const PPTXCompose = require('pptx-compose');
// import PPTXCompose from 'pptx-compose';
const PPTX2hml = require('pptx2html');
const JSZipUtils = require('jszip-utils');
const json2Html = require('simple-json-to-html-converter');
const pptx2json = new PPTX2Json();
// const pptFile = require('./test.pptx');

(async () => {
  const json = await pptx2json.toJson('./test.pptx');
  console.log(json);
  //   var data_input = json;
  //   data_input = JSON.stringify(data_input);
  //   json2Html('mypage').setJson(data_input);
  //   json2Html('mypage').getHtml(function (html) {
  //     document.write(html);
  //   });
})();
// write pptx to the path
// const composer = new PPTXCompose();

// // // Parses a PPTX file to JSON
// // const pptx = await composer.toJSON(pptFile);

// // // Convert a PPTX file to JSON file
// // composer.toJSON('/test.pptx', {
// //   output: '/output/file.json',
// // });

// (async () => {
//   const pptx = await composer.toJSON(pptFile);

//   // Convert a PPTX file to JSON file
//   composer.toJSON('/test.pptx', {
//     output: '/output/file.json',
//   });
// })();
// pptx to html

// (function pptxToHtml() {
//   // Read the file
//   JSZipUtils.getBinaryContent('./test2.pptx', function (err, content) {
//     if (err) return console.error(err);
//     pptx2html(content).then(function () {
//       console.log('All done');
//     });
//   });
// })();

// json to html
// const composer = new PPTXCompose();

// // Parses a PPTX file to JSON

// // Convert a PPTX file to JSON file
// composer.toJSON('./test2.pptx', {
//   output: './output/file.json',
// });

// (async () => {
//   const pptx = await composer.toJSON('/path/to/my.pptx');
// })();
