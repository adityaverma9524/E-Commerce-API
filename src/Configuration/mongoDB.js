import { MongoClient } from "mongodb";

let client;
export  const connectToMongoDB = () => {
    const url = process.env.DB_URL;
    MongoClient.connect(url).then(clientInstance => {
        client = clientInstance;
        console.log("MongoDB is connected.");
    }).catch(err => {
        console.log(err);
    })
}

export const getDB = () => {
    return client.db();
}

export default connectToMongoDB;