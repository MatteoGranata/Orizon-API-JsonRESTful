import mongoose from "mongoose"
import { Order } from "../models/order.js"

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('users')
            .populate('products')
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getOrderByID = async (req, res) => {
    const { id } = req.params
    try {
        const order = await Order.findById(id)
            .populate('users')
            .populate('products')
        res.status(200).json(order)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getOrdersByDate = async (req, res) => {
    const { date } = req.params
    let params = {}

    try {
        if (date) {
            const formattedDate = new Date(date);
            formattedDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for avoid writing too specific information

            params.createdAt = {
                $gte: formattedDate,
                $lt: new Date(formattedDate.getTime() + 86400000), // Add one day
            };
        }
        const orders = await Order.find(params)
            .populate('users')
            .populate('products')
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
export const getOrdersByProducts = async (req, res) => {
    const { product } = req.params
    let params = {}
    try { //Check if the 'product' parameter exists
        if (product) {
            params.products = { $eq: product }; // Filter orders where includes the specified 'product' Id
        }
        const orders = await Order.find(params)
            .populate('users')
            .populate('products')
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const addOrder = async (req, res) => {
    const order = req.body
    const newOrder = new Order(order)
    try {
        await newOrder.save()
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateOrder = async (req, res) => {
    const { id } = req.params
    const data = { ...req.body }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `id not compliant with mongo` })
    try {
        const user = await Order.findByIdAndUpdate(id, data, { new: true })
            .populate('users')
            .populate('products')
        res.status(200).json({ data: user, message: `Order with ID:${id} updated successfully!` })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const deleteOrder = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `id not compliant with mongo` })
    try {
        await Order.findByIdAndDelete(id)
        res.status(200).json({ message: `Order whit id:${id} successfully deleted!` })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}