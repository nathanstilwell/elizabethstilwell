/*jshint laxcomma: true, asi: true */

var express = require('express')
  , app = express()
  , port = 9000;


app.configure(function () {
  // set public folder
  app.use(express.static(__dirname));
});

app.listen(port);
console.log("Server Running on " + port);