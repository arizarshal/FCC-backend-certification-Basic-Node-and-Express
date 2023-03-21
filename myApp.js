// const path = require('path')
let express = require('express');
let app = express();


absolutePath = __dirname + '/views/index.html'

app.use("/public", express.static(__dirname + '/public'))


app.get('/public', function(req, res) {
    res.sendFile(absolutePath)
})

// console.log('Hello world')





 module.exports = app;
