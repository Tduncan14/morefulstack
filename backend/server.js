// const express = require("express");
import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/ConnectDB.js";
import cors from "cors"
import path from "path"
import Product from "./models/ProductSchema.js";
import ProductRoutes from "./routes/Productroute.js";

dotenv.config()


connectDB()

//mongodb + srv://treek:pokemon1@cluster0.zee7avz.mongodb.net/?appName=Cluster0

const app = express();




app.use(express.json())
app.use(cors())
app.use('/api/products', ProductRoutes)







//  these are apis

const PORT = process.env.PORT || 5000


const __dirname = path.resolve()

if (process.env.NODE_ENV === "production") {
    // Serve static assets
    app.use(express.static(path.join(__dirname, "frontend", "disk")))

    // Serve React index.html for all other routes
    app.get(/.*/, (req, res) => {
        res.sendFile(
            path.join(__dirname, "../frontend", "dist", "index.html")
        )
    })
}

app.listen(5000, () => {
    console.log(`listening on the ${PORT}`)
})
