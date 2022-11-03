import { ObjectId } from "mongodb"
import { getDB } from "../util/db.js"

export const getFactoryData = async () => {
    // connection and access to database
    const db = await getDB()
    // result from finds in collection, put into an array
    const dataResult = await db.collection('factory').find().toArray()
    return dataResult
}

export const saveUpdate = async (update) => {
    // connection and access to database
    const db = await getDB()
    // result from inserting data to the collection
    // const saveResult = await db.collection('factory').updateOne({ _id: new ObjectId(id) }, { $set: update })
}