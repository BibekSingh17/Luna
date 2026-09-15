import express from 'express'
import morgan from 'morgan'
import { createPod } from './kubernetes/pod.js'
import { createService } from './kubernetes/service.js'

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

app.post("/api/sandbox/start", (req, res) => {

})

export default app
