import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

const port = process.env.port || 3000
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`server running port:${port}`)
        })
    })
    .catch(error => console.error(error))