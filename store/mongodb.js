const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "directory";

client.connect();

module.exports = client.db(dbName);
