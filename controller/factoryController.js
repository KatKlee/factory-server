import { getFactoryData } from "../services/factoryService.js"

export const getAllFactoryData = async (req, res) => {
    try {
        const factoryData = await getFactoryData()
        res.status(200).json(factoryData)
    } catch (error) {
        res.status(500).send('getAllFactoryData failed')
        console.log(error)
    }
}