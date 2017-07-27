var connection = require('./connection.js')

var orm = {
    newSandwich: function(table, col, burger, cb) {
        var column = col.toString()
        connection.query("INSERT INTO ??( ? ) VALUES( ? )", [table, col, burger], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    eatSandwich: function(table, burgerId, eaten, cb) {
        connection.query("UPDATE ?? SET devoured = ? WHERE id = ?", [table, eaten, burgerId], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    all: function(table, cb){
        connection.query("SELECT * from ?? WHERE devoured = false", [table], function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;