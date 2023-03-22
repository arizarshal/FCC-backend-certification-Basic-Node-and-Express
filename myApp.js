let dotenv = require('dotenv').config()
let express = require('express');
let app = express();



// Exercise 4:
app.use((request, response, next) => {
    console.log(request.method + " " + request.path + " - " + request.ip);
    next();
  });

app.use("/public", express.static(__dirname + '/public'))

absolutePath = __dirname + '/views/index.html'



app.get('/', function(req, res) {
    res.sendFile(absolutePath)
})


app.get("/json", (req, res)=>{
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"})
      } else {
        res.json({"message": "Hello json"})
      }
})


 module.exports = app;
