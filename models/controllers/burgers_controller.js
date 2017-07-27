"use strict"
var burger = require('../burger.js');
var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject)
	});
});

router.post("/", function(req, res) {
	burger.insertOne("burger_name", req.body.burger_name, function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var eaten = req.params.id;
	burger.updateOne(
		eaten, {devoured: req.body.eat}, function() {
			res.redirect("/")
		})
})

module.exports = router;