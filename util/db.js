import { MongoClient } from "mongodb"

// URL of my MongoDB Cluster + login
const URL = process.env.MONGODB_URL
// Set up connection to the MongoDB database
const client = new MongoClient(URL)
// database
const DB = process.env.DB_NAME

let db

export const getDB = async () => {
    if (db) return db
    // make connection with the database
    const dbConnection = await client.connect()
    // fill object with data from database
    db = dbConnection.db(DB)
    // return the object
    return db
}


