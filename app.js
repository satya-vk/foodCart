//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs');
app.get("/",function(req,res){
  var day = new Date();
  var day1 = day.getDay();
  var obj = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var day2 = "";
  if(day1==6||day1==0){
    day2 = obj[day1];
  }
  else{
    day2 = obj[day1];
  }
  res.render("list",{kindOfday:day2});
});
app.listen(3000,function(){
  console.log("server is started");
});
