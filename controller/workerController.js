import { allWorkers, getWorkersNum, saveWorker } from "../services/workerService.js"

// add a new worker
export const addNewWorker = async (req, res) => {
    try {
        const worker = req.body // Validierung fehlt
        worker.working = false
        const addResult = await saveWorker(worker)
        console.log(addResult)
        res.status(200).json({ state: true })
    } catch (error) {
        res.status(500).send('addNewWorker failed')
        console.log(error)
    }
}

// get data of all workers
export const getAllWorkers = async (_, res) => {
    try {
        const workers = await allWorkers()
        res.status(200).json(workers)
    } catch (error) {
        res.status(500).send('getAllWorkers failed')
        console.log(error)
    }
}

// get number of workers
export const getNumberOfWorkers = async (req, res) => {
    try {
        const workersNum = await getWorkersNum()
        res.status(200).json(workersNum)
    } catch (error) {
        res.status(500).send('getNumberOfWorkers failed')
        console.log(error)
    }
}
// wie bekomme ich das in die Factory eingespeist?