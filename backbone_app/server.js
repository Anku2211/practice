// var express = require('express');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/blogroll');

// var Schema = mongoose.Schema;

// var DetailSchema = new Schema({
//   name: String,
//   email: String,
//   contact: String,
// });

// mongoose.model('Detail', DetailSchema);

// var Detail = mongoose.model('Detail');

// var app = express();

// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));

// // ROUTES

// app.get('/api/details', function (req, res) {
//   Detail.find(function (err, docs) {
//     docs.forEach(function (item) {
//       console.log('Received a GET request for _id: ' + item._id);
//     });
//     res.send(docs);
//   });
// });

// app.post('/api/details', function (req, res) {
//   console.log('Received a POST request:');
//   for (var key in req.body) {
//     console.log(key + ': ' + req.body[key]);
//   }
//   var detail = new Detail(req.body);
//   detail.save(function (err, doc) {
//     res.send(doc);
//   });
// });

// app.delete('/api/details/:id', function (req, res) {
//   console.log('Received a DELETE request for _id: ' + req.params.id);
//   Detail.remove({ _id: req.params.id }, function (err, doc) {
//     res.send({ _id: req.params.id });
//   });
// });

// app.put('/api/details/:id', function (req, res) {
//   console.log('Received an UPDATE request for _id: ' + req.params.id);
//   Detail.update({ _id: req.params.id }, req.body, function (err) {
//     res.send({ _id: req.params.id });
//   });
// });

// var port = 7000;

// app.listen(port);
// console.log('server on ' + port);
