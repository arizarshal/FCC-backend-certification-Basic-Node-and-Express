// const path = require('path')
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + '/public'))

absolutePath = __dirname + '/views/index.html'



app.get('/', function(req, res) {
    res.sendFile(absolutePath)
})

// console.log('Hello world')





 module.exports = app;
