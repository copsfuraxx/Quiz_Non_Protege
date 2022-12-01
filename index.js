var path = require('path')
const bodyParser = require('body-parser')
global.error = null
global.ObjectId = require('mongodb').ObjectID;
const express = require("express"), app = express()

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const MongoClient = require("mongodb").MongoClient
var db = null

MongoClient.connect("mongodb://localhost:27017/quiz", { useUnifiedTopology: true }, function(err, client){
        //(err) ? console.log(err) : global.db = client.db("mamoto")
  if(err) 
  {
    console.log(err)
  }
  else
  {
    global.db = client.db("quiz")
  }
})

global.bcrypt = require('bcryptjs');

app.use('/', require('./routes/router'));

const port = 3000

app.listen(port, function() {
	console.log("running on port " + port)
})
