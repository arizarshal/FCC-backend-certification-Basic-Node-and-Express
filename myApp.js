const dotenv = require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Exercise 11 - Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}))

// Exercise 7 - Implement a Root-Level Request Logger Middleware
app.use((request, response, next) => {
    console.log(request.method + " " + request.path + " - " + request.ip);
    next();
  });

// Exercise 4 - Serve Static Assets
app.use("/public", express.static(__dirname + '/public'))

// Exercise 3 - Serve an HTML File
absolutePath = __dirname + '/views/index.html'


// Exercise 2, 3:
app.get('/', function(req, res) {
    res.sendFile(absolutePath)
})

// Exercise 5 - Serve JSON on a Specific Route
app.get("/json", (req, res)=>{
    // Exercise 6  - Use the .env File
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"})
      } else {
        res.json({"message": "Hello json"})
      }
})


// Exercise 8- Chain Middleware to Create a Time Server
const time = (req, res, next)=>{
    req.time = new Date().toString()
    next()
}

app.get('/now', time, (req, res) => {
        res.send({
            time: req.time
        })
    }
)

// Exercise 9 - Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {

    res.send({
        echo: req.params.word
    })
})


// Exercise 10 - Get Query Parameter Input from the Client
app.route("/name").get(function(req, res) {
    const  { first: firstName, last: lastName } = req.query;

    res.json({
      name: `${firstName} ${lastName}`
    });
  })
// Exercise 12 - Get Data from POST Requests
    .post((req, res) => {
        const { first: firstName, last: lastName } = req.body

        res.json({
            name: `${firstName} ${lastName}`
        })
    })





 module.exports = app;
