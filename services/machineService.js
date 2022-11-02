import { getDB } from "../util/db.js"

export const saveMachine = async (machine) => {
    // connection and access to database
    const db = await getDB()
    // result from inserting data to the collection
    const saveResult = await db.collection('machines').insertOne(machine)
    return saveResult
}

export const allMachines = async () => {
    // connection and access to database
    const db = await getDB()
    // result from finds in collection, put into an array
    const machinesResult = await db.collection('machines').find().toArray()
    return machinesResult
}