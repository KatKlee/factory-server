import { saveMachine } from "../services/machineService.js"

export const addNewMachine = async (req, res) => {
    const machine = req.body
    console.log(req.body) // Validierung?
    const addResult = await saveMachine(machine)
    console.log(addResult)
    res.status(200).json({ state: true })
}