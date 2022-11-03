import { getDB } from "../util/db.js"

export const saveWorker = async (worker) => {
    // connection and access to database
    const db = await getDB()
    // result from inserting data to the collection
    const saveResult = await db.collection('workers').insertOne(worker)
    return saveResult
}
// Abzug von 2 Geld einbauen
// Wie? im Backend oder im Frontend?


export const allWorkers = async () => {
    // connection and access to database
    const db = await getDB()
    // result from finds in collection, put into an array
    const workersResult = await db.collection('workers').find().toArray()
    return workersResult
}

export const getWorkersNum = async () => {
    // connection and access to database
    const db = await getDB()
    // result from count in collection
    const numResult = await db.collection('workers').countDocuments()
    console.log(numResult)
    return numResult
}