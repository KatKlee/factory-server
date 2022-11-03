import { saveMachine, allMachines, getMachinesNum } from "../services/machineService.js"

export const addNewMachine = async (req, res) => {
    try {
        const machine = req.body // Validierung?
        console.log(req.body)
        const addResult = await saveMachine(machine)
        console.log(addResult)
        res.status(200).json({ state: true })
    } catch (error) {
        res.status(500).send('addNewMachine failed')
        console.log(error)
    }
}

export const getAllMachines = async (_, res) => {
    try {
        const machines = await allMachines()
        res.status(200).json(machines)
    } catch (error) {
        res.status(500).send('getAllMachines failed')
        console.log(error)
    }
}

// get number of machines
export const getNumberOfMachines = async (_, res) => {
    try {
        const machinesNum = await getMachinesNum()
        res.status(200).json(machinesNum)
    } catch (error) {
        res.status(500).send('getNumberOfMachines failed')
        console.log(error)
    }
}
