// 1. Import Express
import express from 'express'
import ProductRouter from './src/features/product/product.routes.js'
import bodyParser from 'body-parser'

// 2. Create Server
const server = express()

server.use(bodyParser.json())

// For all requests related to product, redirect to product routes
// localhost:3200/api/products
server.use("/api/products", ProductRouter)

// 3. Default request handler
server.get("/", (req, res) => {
    res.send("Welcome to Ecommerce APIs")
})

// 4. Specify Port
server.listen(3200, () => {
    console.log("Server is running on 3200.")
})