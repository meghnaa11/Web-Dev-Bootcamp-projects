const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//body parser works with express 
//urlencoded helps parse values from the code
//extended true: allows up to post nested values
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// for dealing with the form data that is posted on the client side - num1 and num2 values
app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Result: " + result);
});

app.listen("3000", function() {
    console.log("Server started at port 3000");
});