const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret",
  database: "directory",
});

connection.connect();

module.exports = connection;
