import express from "express" // express: for building the web application
import mongoSanitize from "express-mongo-sanitize" // mongoSanitize: for data sanitization against MongoDB injection attacks
import mongoose from "mongoose" // mongoose: for interacting with MongoDB database
import cors from "cors" // cors: for enabling Cross-Origin Resource Sharing (CORS)
import dotenv from "dotenv" // dotenv: for loading environment variables from a .env file

// Import routes for different functionalities
import userRoutes from './routs/users.js'
import productRoutes from './routs/products.js'
import orderRoutes from './routs/orders.js'

const port = process.env.port || 3000 // Define the port to listen on (default: 3000)
dotenv.config()

const app = express()

app.use(mongoSanitize());
app.use(express.json()) // Parsing JSON data in request body
app.use(cors())

// Define routes for different functionalities
app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

mongoose.connect(process.env.CONNECTION_URL) // Connect to the MongoDB database using the connection URL from environment variable
    .then(() => {
        app.listen(port, () => {
            console.log(`server running port:${port}`)
        })
    })
    .catch(error => console.error(error)) //  Handle connection errors