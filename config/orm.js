// require db connection
var connection = require("./connection.js");

// search queries
var add = "INSERT INTO ?? (?)";
var del = "DELETE FROM ?? WHERE ? = ?";

var orm = {

    // add a new burger
    addBurger: function(table, val, func){
        connection.query(add, [table, val], function(err, res){
            if(err) throw err;
            func(res);
        });
    },

    // remove burger from list
    deleteBurger: function(table, val1, val2, func){
        connection.query(del, [table, val1, val2], function(err, res){
            if(err) throw err;
            func(res);
        });
    }


};

module.exports = orm;