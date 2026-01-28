// const express = require("express");
import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/ConnectDB.js";
import cors from "cors"
import path from "path"

dotenv.config()


connectDB()

//mongodb + srv://treek:pokemon1@cluster0.zee7avz.mongodb.net/?appName=Cluster0

const app = express();


app.use(express.json())
app.use(cors())
app.get("/products", async (req, res) => {

    const product = req.body

})

app.get("/", (req, res) => {

    res.send("Server is ready")
})


const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`listening on the ${PORT}`)
})
