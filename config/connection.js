// dependencies
    // mysql
var mysql = require("mysql");

// create db connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

module.exports = connection;