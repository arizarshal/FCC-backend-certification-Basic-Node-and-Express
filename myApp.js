let dotenv = require('dotenv').config()
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + '/public'))

absolutePath = __dirname + '/views/index.html'



app.get('/', function(req, res) {
    res.sendFile(absolutePath)
})


app.get("/json", (req, res) => {
    const mySecret = process.env["MESSAGE_STYLE"];
    if (mySecret === "uppercase") {
      response = "Hello json".toUpperCase();
    } else {
      response = "Hello json";
    }
    res.json({ message: response });
  });


 module.exports = app;
