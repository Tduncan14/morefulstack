import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/ConnectDB.js";

import productRoutes from "./routes/Productroute.js";



dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get(/.*/, (req, res) => {
        res.sendFile(
            path.join(__dirname, "../frontend", "dist", "index.html")
        )
    })
}


app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});