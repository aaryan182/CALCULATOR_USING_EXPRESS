const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req,res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let ans = num1 + num2;

    res.send("<h2>Your answer is : </h2> " + ans);
})

app.listen(3000, function () {
    console.log("server is running at port 3000");
})