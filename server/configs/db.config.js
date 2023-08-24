var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var dbURL = process.env.MONGODB_URI;

module.exports = {
    mongodb: mongodb,
    MongoClient: MongoClient,
    dbURL: dbURL
};