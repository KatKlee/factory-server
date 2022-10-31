import { getDB } from "../util/db.js"

export const saveMachine = async (machine) => {
    const db = await getDB()
    const saveResult = await db.collection('machines').insertOne(machine)
    return saveResult
}