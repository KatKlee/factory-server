import { getFactoryData } from "../services/factoryService.js"

export const getAllFactoryData = async (_, res) => {
    try {
        const factoryData = await getFactoryData()
        res.status(200).json(factoryData)
    } catch (error) {
        res.status(500).send('getAllFactoryData failed')
        console.log(error)
    }
}

export const updateFactoryData = async (req, res) => {
    try {
        // const update = await getNumberOfMachines()
        // const updateResult = await saveUpdate(update)
        // console.log(updateResult)
        // res.status(200).json({ state: true })
    } catch (error) {
        res.status(500).send('updateFactoryData failed')
        console.log(error)
    }
}