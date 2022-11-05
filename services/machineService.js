import { checkCredit, decreaseCredit } from "../util/buying.js"
import { getDB } from "../util/db.js"

const PRICE = 6

export const buyMachine = async (machine) => {
    if (await checkCredit(PRICE)) {
        // connection and access to database
        const db = await getDB()
        // result from inserting data to the collection
        const saveResult = await db.collection('machines').insertOne(machine)
        await decreaseCredit(PRICE)
        return saveResult
    } else {
        throw new Error('no credit')
    }
}

export const allMachines = async () => {
    // connection and access to database
    const db = await getDB()
    // result from finds in collection, put into an array
    const machinesResult = await db.collection('machines').find().toArray()
    return machinesResult
}

export const getMachinesNum = async () => {
    // connection and access to database
    const db = await getDB()
    // result from count in collection
    const numResult = await db.collection('machines').countDocuments()
    console.log(numResult)
    return numResult
}