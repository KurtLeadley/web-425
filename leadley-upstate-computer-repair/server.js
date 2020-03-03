/***********************************
; Title:  app.module.ts
; Author: Kurt Leadley
; Date:   March 2, 2020
; Description: Node and Express boot
***************************************************************/
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017/upstate-computer-repair", function(err, response) {
  if(err) {
    console.log(err);
  } else {
      console.log('Connected to ' + db);
    }
  console.log(mongo.connection.readyState);
});

var app = express();
//app.use(express.static(__dirname, '/', {index: false}));
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var ProductSchema = new Schema({
  item_id: { type: Number   },
  service_name: { type: String },
  price: { type: Number },
},
{
  versionKey: false
});


var model = mongo.model('product', ProductSchema, 'product');
// add or update product
app.post("/api/saveProduct",function(req,res) {
  var mod = new model(req.body);
  if(req.body.mode =="Save")  {
    mod.save(function(err,data){
      if(err) {
         res.send(err);
      }
      else {
          res.send({data:"Record has been Inserted..!!"});
          console.log("updated record!");
      }
    });
  }
  else  {
    model.findByIdAndUpdate(req.body.id, { item_id: req.body.item_id, service_name: req.body.service_name, price: req.body.price},
    function(err,data) {
      if (err) {
        res.send(err);
        console.log("updated record!");
      }
      else {
        res.send({data:"Record has been Updated..!!"});
        req.body.mode =="Save";
      }
    });
  }
});
//  delete product
app.post("/api/deleteProduct",function(req,res){
  model.remove({ _id: req.body.id }, function(err) {
    if(err){
      res.send(err);
    } else {
        res.send({data:"Record has been Deleted..!!"});
      }
  });
})
app.get("/api/getProduct",function(req,res){
  model.find({},function(err,data){
    if(err){
        res.send(err);
    }
    else {
      res.send(data);
    }
  });
});
app.listen(process.env.PORT || 8080, function () {
  console.log('Server Initialized on localhost 8080 or Heroku');
});
