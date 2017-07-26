var connection = require('./connection.js')

var orm = {
    newSandwich: function(table, col, burger, cb) {
        var column = col.toString()
        connection.query("INSERT INTO ??( ? ) VALUES( ? )", [burger], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    eatSandwich: function(table, burgerId, eaten, cb) {
        connection.query("UPDATE ?? SET devored = ? WHERE id = ?", [table, eaten, burgerId], function(err, res) {
            if (err) throw err;
            cb(res)
        });
    },
    all: function(table, cb){
        connection.query("SELECT ALL from")
    }
}

module.exports = orm;