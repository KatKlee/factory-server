import { getDB } from "../util/db.js"

export const getFactoryData = async () => {
    // connection and access to database
    const db = await getDB()
    // result from finds in collection, put into an array
    const dataResult = await db.collection('factory').find().toArray()
    return dataResult
}