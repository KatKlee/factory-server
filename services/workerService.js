import { checkCredit, decreaseCredit } from "../util/buying.js"
import { getDB } from "../util/db.js"

const PRICE = 2

export const saveWorker = async (worker) => {
    if (await checkCredit(PRICE)) {
        // connection and access to database
        const db = await getDB()
        // result from inserting data to the collection
        const saveResult = await db.collection('workers').insertOne(worker)
        await decreaseCredit(PRICE)
        return saveResult
    } else {
        throw new Error('no credit')
    }
}


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