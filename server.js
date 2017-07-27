"use strict"
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride =require('method-override');

var PORT = process.env.PORT || 7500;

var app = express();
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./models/controllers/burgers_controller.js');

app.use("/", routes);

app.listen(PORT, function() {
	console.log("App listening on port:", PORT)
});