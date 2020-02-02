const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use("/css", express.static("css"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req, res){
    res.send("<h1>ABOUT ME: 22 Years old informatics student in the look for a junior backend position</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1>CONTACT ME: angelmatiasbouin@gmail.com </h1>");
});

app.post("/", function(req, res){

    var w = Number(req.body.weight);
    var h = Number(req.body.height);

    var result = w / Math.pow(h, 2);
    var diagnose = "No diagnose";
    
    if (result < 18.5){
        diagnose = "You are underweight."
    } else if (result > 24.9) {
        diagnose = "You are overweight."
    } else {
        diagnose = "You are in a healthy range!"
    }
    
    res.send("Your bmi is " + Math.round(result * 100) / 100 + ". " + diagnose); //VER
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});