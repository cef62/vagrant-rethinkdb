var express = require("express");
var r = require("rethinkdb");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello Rethink!");
});

// your code here

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("* Running on " + host + ":" + port + "/");
});
