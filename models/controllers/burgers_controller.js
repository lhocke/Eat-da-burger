var burger = require('../burger.js');
var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
	});
});

router.post("/", function(req, res) {
	burger.newSandwich("burger_name", req.body.burger_name, function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var eaten = req.params.id;
	burger.eatSandwich({
		eaten, {devoured: req.body.eat}, function() {
			res.redirect("/")
		} 
	})
});

module.exports = router;