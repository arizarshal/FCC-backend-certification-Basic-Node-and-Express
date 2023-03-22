let dotenv = require('dotenv').config()
let express = require('express');
let app = express();



// Exercise 7:
app.use((request, response, next) => {
    console.log(request.method + " " + request.path + " - " + request.ip);
    next();
  });

// Exercise 4
app.use("/public", express.static(__dirname + '/public'))

// Exercise 3
absolutePath = __dirname + '/views/index.html'


// Exercise 2, 3:
app.get('/', function(req, res) {
    res.sendFile(absolutePath)
})

// Exercise 5:
app.get("/json", (req, res)=>{
    // Exercise 6
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"})
      } else {
        res.json({"message": "Hello json"})
      }
})


// Exercise 8
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
 module.exports = app;
