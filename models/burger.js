var orm = require('../config/orm.js');

var burger ={
    all: function(cb) {
        orm.all("burgers", function(res) {
        	cb(res);
        })
    },
    newSandwich: function(cols, vals, cb) {
    	orm.newSandwich("burgers", cols, vals, function(res) {
    		cb(res);
    	});
    },
    eatSandwich: function(burgerId, eaten, cb) {
    	orm.eatSandwich("burgers", burgerId, eaten, function(res) {
    		cb(res);
    	});
    }
};

module.exports = burger;