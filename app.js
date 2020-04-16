var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

// app.set('port', process.env.PORT || 3000);


router.get("/",function(req,res){
  res.render(path + "home.ejs");
});

router.get("/home",function(req,res){
  res.render(path + "home.ejs");
});

router.get("/about",function(req,res){
  res.render(path + "about.ejs");
});

router.get("/resume",function(req,res){
  res.render(path + "resume.ejs");
});

router.get("/contact",function(req,res){
  res.render(path + "contact.ejs");
});

app.use("/",router);

app.use("*",function(req,res){
  res.render(path + "404.ejs");
});

app.listen(port,function(){
  console.log("Live at Port "+ port);
});