import { allWorkers, saveWorker } from "../services/workerService.js"

export const addNewWorker = async (req, res) => {
    try {
        const worker = req.body // Validierung fehlt
        const addResult = await saveWorker(worker)
        console.log(addResult)
        res.status(200).json({ state: true })
    } catch (error) {
        res.status(500).send('addNewWorker failed')
        console.log(error)
    }
}


export const getAllWorkers = async (req, res) => {
    try {
        const workers = await allWorkers()
        res.status(200).json(workers)
    } catch (error) {
        res.status(500).send('getAllWorkers failed')
        console.log(error)
    }
}