// const express = require("express");
import express from "express";

const app = express();


const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`listening on the ${PORT}`)
})
