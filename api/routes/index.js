var express = require('express');
var router = express.Router();
var convertapi = require('convertapi')('eLH1ZL1XCpw5xaZz');
var fs = require('fs');
var https = require('https')
const path = require('path')
/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function remove(str) { 
  return str.replace(/[\r\n]+/gm, "   " ); 
} 

router.post('/', function(req, res, next) {

convertapi.convert('txt', {
    File: req.body.uri
}, 'pdf').then(function(result) {
  console.log(result.response)
  console.log(result.response.Files[0].Url)
  let text = ""
  https.get(result.response.Files[0].Url).on('response', function (response) {
    response.on('data', function (chunk) {
          text += chunk
        })
    response.on('close', function() {
      text = remove(text)
      res.send({'filename': req.body.uri.substring(req.body.uri.lastIndexOf("/") + 1), 'text': text})
    })
      });
  
  });
});



module.exports = router;
