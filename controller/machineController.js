import { saveMachine, allMachines } from "../services/machineService.js"

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

export const getAllMachines = async (req, res) => {
    try {
        const machines = await allMachines()
        res.status(200).json(machines)
    } catch (error) {
        res.status(500).send('getAllMachines failed')
        console.log(error)
    }
}