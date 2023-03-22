let dotenv = require('dotenv').config()
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + '/public'))

absolutePath = __dirname + '/views/index.html'



app.get('/', function(req, res) {
    res.sendFile(absolutePath)
})


app.get('/json', function(req, res) {
    const message = (process.env.MESSAGE_STYLE === "uppercase" )? "HELLO JSON" : "hello json";
    res.json({
        "message": message
})
})



 module.exports = app;
