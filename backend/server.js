// const express = require("express");
import express from "express";


//mongodb + srv://treek:pokemon1@cluster0.zee7avz.mongodb.net/?appName=Cluster0

const app = express();

app.get("/", (req, res) => {

    res.send("Server is ready")
})


const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`listening on the ${PORT}`)
})
