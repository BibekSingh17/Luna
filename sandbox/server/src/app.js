import express from 'express'
import morgan from 'morgan'
import { createPod } from './kubernetes/pod.js'
import { createService } from './kubernetes/service.js'
import {v7 as uuid} from 'uuid'


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extends: true}))


app.get('/api/sandbox/health', (req, res) => {
    res.status(200)
    .json({
        message : 'sandbox health api is running'
    })
})

app.post("/api/sandbox/start", async (req, res) => {

    const sandoxId = uuid()

    await Promise.all([
        createPod(sandoxId),
        createService(sandoxId)
    ])

    return res.status(201)
    .json({
        message : 'sandbox environment created successfully',
        sandoxId,
        previewUrl: `http://${sandoxId}.localhost`
    })
})

export default app
