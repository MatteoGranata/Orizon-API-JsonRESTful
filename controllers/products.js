import mongoose from "mongoose"
import { Product } from "../models/product.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getProductByID = async (req, res) => {
    const {id} = req.params
    try {
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const addProduct = async (req, res) => {
    const product = req.body
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const updateProduct = async (req, res) => {
    const { id } = req.params
    const data = { ...req.body }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `id not compliant with mongo` })
    try {
        const product = await Product.findByIdAndUpdate(id, data, { new: true })
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const deleteProduct = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `id not compliant with mongo` })
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ message: `product with id:${id} successfully deleted` })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}