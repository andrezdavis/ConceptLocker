var express = require("express");
var router = express.Router();
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

var db;

router.get("/", function (req, res, next) {
  db = admin.firestore();
  //console.log(req.body);
  db.collection("sampleData")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.data());
      });
    })
    .catch((err) => console.log(err));
  res.send("Success! Data printed from firestore in server console!");
});

router.post("/", function (req, res, next) {
    res.send("Printing data page ");
  });

module.exports = router;
