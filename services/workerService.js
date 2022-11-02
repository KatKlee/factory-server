export const saveWorker = async (worker) => {
    // connection and access to database
    const db = await getDB()
    // result from inserting data to the collection
    const saveResult = await db.collection('workers').insertOne(worker)
    return saveResult
}


export const allWorkers = async () => {
    // connection and access to database
    const db = await getDB()
    // result from finds in collection, put into an array
    const workersResult = await db.collection('workers').find().toArray()
    return workersResult
}