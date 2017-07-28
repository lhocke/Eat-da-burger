"use strict"
var connection = require('./connection.js')

var orm = {
    insertOne: function(table, col, burger, cb) {
        
        var col = col.toString()
        // var burger=burger.toString()
        // var table = table.toString()
        console.log(table, col, burger)
        connection.query("INSERT INTO ?? (" + col +") VALUES ( ? );", [table, burger], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, eaten, burgerId, cb) {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [table, eaten, burgerId], function(err, res) {
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