
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
// res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
// var name = req.params.name;
// res.send("<h1>Hello " + name +"</h1>");
// });
// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });

// var express = require("express");
// var app = express();

// app.use(express.static("../programming3/GameOfLife"));

// app.get("/", function(req, res){
// res.redirect("index.html");
// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });

// const Square = require('./square.js')
// let vd = new Square(6)
// console.log(vd.qarakusi());


let fs = require('fs');
function main(){
fs.writeFile("hello.txt", "Hello world\n", function(err){
console.log("fs.writeFile ended");
});
console.log("fs.writeFile");
}
main();
