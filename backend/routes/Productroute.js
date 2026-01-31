import express from 'express'
import mongoose from "mongoose"
import Product from '../models/ProductSchema.js'


const router = express.Router()



router.get("/", async (req, res) => {

    try {
        const getAllproducts = await Product.find().sort({ created: - 1 })

        res.status(200).json({
            message: 'successfully grabbed all the products',
            data: getAllproducts
        })
    }

    catch (error) {
        res.status(500).json({ message: 'there is an error with the database', error })
    }



})


// update the router

router.put("/:id", async (req, res) => {

    const { id } = req.params

    const update = req.body


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Product Id' })
    }


    try {

        const updateProduct = await Product.findByIdAndUpdate(id, update, { new: true, runValidators: true })
        res.status(200).json({
            message: 'Product has been updated',
            data: updateProduct

        })
    }

    catch (err) {
        res.status(500).json({
            message: 'server issues'
        })

    }
})


router.post("/", async (req, res) => {

    const product = req.body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: "feel out all the fields " })
    }

    const newProduct = new Product(product)


    try {
        await newProduct.save()
        res.status(201).json({ success: true, data: newProduct })
    }
    catch (err) {
        console.error("Error in create product", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }

})

router.get("/", (req, res) => {

    res.send("Server is ready")
})

router.delete("/:id", async (req, res) => {

    const productId = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Invalid ID"
        });
    }


    try {
        const deleteItem = await Product.findByIdAndDelete(productId);

        res.status(200).json({
            message: 'the product was successfuly deleted', deleteItem
        })

    }

    catch (err) {
        res.status(400).json({
            message: 'the item was not successfully deleted',
            err,
        })

    }



})











export default router