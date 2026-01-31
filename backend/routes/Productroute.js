import express from 'express'
import mongoose from "mongoose"
import Product from '../models/ProductSchema.js'

const router = express.Router()

// GET all products
router.get("/", async (req, res) => {
    try {
        const getAllProducts = await Product.find().sort({ created: -1 })
        res.status(200).json({
            success: true,
            message: 'Successfully grabbed all products',
            data: getAllProducts
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Database error',
            error: err.message
        })
    }
})

// CREATE product
router.post("/", async (req, res) => {
    const product = req.body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please fill out all fields" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success: true, message: "Product created successfully", data: newProduct })
    } catch (err) {
        console.error("Error in create product:", err.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
})

// UPDATE product
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const update = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid Product ID" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, update, { new: true, runValidators: true })

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" })
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" })
    }
})

// DELETE product
router.delete("/:id", async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid Product ID" })
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id)

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" })
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: deletedProduct
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" })
    }
})

export default router
