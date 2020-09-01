var express = require("express");
var router = express.Router();
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://progassignment.firebaseio.com",
});

/* GET home page. */
router.get("/", function (req, res, next) {
  const db = admin.firestore();
  console.log(req.body);
  res.send("Sending data to firebase");
});

module.exports = router;
