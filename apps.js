//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var Items = ['Buy Foods','Cook Foods','Eat Foods'];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');
app.get("/",function(req,res){
  var day = new Date();
  var options = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
  };
  console.log(day.toLocaleDateString("en-US",options))
  res.render("lists",{kindOfday:day,newItem:Items});
});
app.post("/",function(req,res){
  var item = req.body.item;
  Items.push(item);
  console.log(Items);
  res.redirect("/");
})
app.listen(process.env.PORT||3000,function(){
  console.log("server is started");
});
