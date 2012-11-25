/*jshint laxcomma: true, asi: true */

var express = require('express')
  , app = express()
  , port = 9999;


app.configure(function () {
  // set public folder
  app.use(express.static(__dirname));
});

app.listen(port);
console.log("\n\n\n");
console.log("                Hello Elizabeth.");
console.log();
console.log("You website is running at http://localhost:" + port);
console.log("When you are finished, come back to this window and");
console.log("press [control + c] to stop the server");
console.log();
console.log("And have a nice day.");
console.log();
console.log("❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤");
console.log();
console.log("Nathan");
