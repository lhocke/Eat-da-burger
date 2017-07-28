"use strict"
var connection = require('./connection.js')

var orm = {
    insertOne: function(table, col, burger, cb) {
        var column = col.toString()
        connection.query("INSERT INTO ?? (?) VALUES( ? )", [table, column, burger], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, burgerId, eaten, cb) {
        connection.query("UPDATE ?? SET devoured = ? WHERE id = ?", [table, eaten, burgerId], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    selectAll: function(table, cb){
        connection.query("SELECT * from ??", [table], function(err, res) {
            if (err) throw err;
            // console.log(res)
            cb(res);
        })
    }
}

module.exports = orm;