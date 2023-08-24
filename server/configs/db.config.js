import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const dbURL = "mongodb+srv://abhushit:abhushit@cluster0.hhnwlhw.mongodb.net/?retryWrites=true&w=majority";

export default {
    mongodb,
    MongoClient,
    dbURL
}