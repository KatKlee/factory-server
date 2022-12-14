import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { addNewMachine, getAllMachines, getNumberOfMachines } from './controller/machineController.js'
import { getAllFactoryData } from './controller/factoryController.js'
import { addNewWorker, getAllWorkers, getNumberOfWorkers } from './controller/workerController.js'


// set up port to 9898
const PORT = process.env.PORT
// start a new express application
const app = express()

// middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// all my routes
app.get('/', (req, res) => {
    res.status(200).send('Alles OKAY')
})

app.get('/api/factory', getAllFactoryData)
app.post('/api/factory')

app.get('/api/machines', getAllMachines)
app.get('/api/machinesnumber', getNumberOfMachines)
app.post('/api/machines', addNewMachine)

app.get('/api/workers', getAllWorkers)
app.get('/api/workersnumber', getNumberOfWorkers)
app.post('/api/workers', addNewWorker)


// dann werfen wir den Server mal an
app.listen(PORT, () => console.log('Server runs on Port:', PORT))