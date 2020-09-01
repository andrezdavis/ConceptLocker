var express = require("express");
var router = express.Router();
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://progassignment.firebaseio.com",
});
var db;
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("setupAPI page");
});

router.post("/", function (req, res, next) {
  db = admin.firestore();
  console.log(req.body);
  db.collection("sampleData")
    .add(req.body)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  res.send("Success! Data submitted to firestore!");
});
module.exports = router;
