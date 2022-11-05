import { getDB } from "./db.js"

export const checkCredit = async (price) => {
    // connection and access to database
    const db = await getDB()
    const factoryData = await db.collection('factory').findOne()
    console.log(factoryData)
    return factoryData.credit >= price
}

export const decreaseCredit = async (price) => {
    // connection and access to database
    const db = await getDB()
    const newCredit = await db.collection('factory').updateOne({}, { '$inc': { 'credit': -price } })
    return newCredit
}