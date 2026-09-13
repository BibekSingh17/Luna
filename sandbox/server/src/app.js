import express from 'express'
import morgan from 'morgan'



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

export default app
