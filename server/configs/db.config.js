import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const dbURL = process.env.MONGODB_URI;

export default {
    mongodb,
    MongoClient,
    dbURL
}