let dotenv = require('dotenv').config()
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + '/public'))

absolutePath = __dirname + '/views/index.html'

const logger = function(req, res, next) {
    console.log(req.method, req.path,'-', req.ip)
    next()
}

app.use(logger)


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
