var express = require('express');
var router = express.Router();
var convertapi = require('convertapi')('eLH1ZL1XCpw5xaZz');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // var data = fs.readFileSync();
  // console.log("Synchronous read: " + data.toString());
  res.render('index', { title: 'Express' });
//   var data = fs.readFileSync(req.body.);
// console.log("Synchronous read: " + data.toString());


});
router.post('/', function(req, res, next) {
  // var data = fs.readFileSync();
  // console.log("Synchronous read: " + data.toString());
  // res.render('index', { title: 'Express' });
//   var data = fs.readFileSync(req.body.);
// console.log("Synchronous read: " + data.toString());
console.log(req.body)
convertapi.convert('txt', {
    File: req.body['stuff']
}, 'pdf').then(function(result) {
  var data
  console.log(result.response)
  console.log(result.response.Files[0].Url)
  res.send(result.response.Files[0].Url)
//   try {
//     data = fs.readFileSync(files, 'utf8');
// } catch(e) {
//     console.log('Error:', e.stack);
// }
// console.log(data.toString());    
// res.send(data.toString())
    // console.log("Synchronous read: " + data.toString());
    
});




});


module.exports = router;
