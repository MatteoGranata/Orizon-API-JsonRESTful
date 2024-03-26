import mongoose from "mongoose"
import { Order } from "../models/order.js"

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('users') // populates the users details
            .populate('products') // populates the product details
        res.status(200).json(orders) // 200(ok)
    } catch (error) {
        res.status(404).json({ message: error.message }) //handles errors during execution
    }
}
export const getOrderByID = async (req, res) => {
    const { id } = req.params // Get filter parameters from id string
    try {
        const order = await Order.findById(id)
            .populate('users')
            .populate('products')
        res.status(200).json(order) 
    } catch (error) {
        res.status(404).json({ message: error.message }) // 404(not found)
    }
}
export const getOrdersByDate = async (req, res) => {
    const { date } = req.params
    let params = {}

    try { //Check if the 'date' parameter exists
        if (date) {
            const formattedDate = new Date(date);
            formattedDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for avoid writing too specific information

            params.createdAt = { //Build the filter object for the 'createdAt' field
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
    const order = req.body // Retrieve order data from request (req.body)
    const newOrder = new Order(order) // Create a new Order object with the retrieved data
    try {
        await newOrder.save() //Save the new order in the database
        res.status(201).json(newOrder) // 201 (Created) 
    } catch (error) {
        res.status(400).json({ message: error.message }) //400 (Bad Request)
    }
}
export const updateOrder = async (req, res) => {
    const { id } = req.params
    const data = { ...req.body } //Create an object with the data to update
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `id not compliant with mongo` })
    try {
        const user = await Order.findByIdAndUpdate(id, data, { new: true }) //Updates the order in the database with the specified ID and provided data
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
        await Order.findByIdAndDelete(id) // Delete the order from the database with the specified ID
        res.status(200).json({ message: `Order whit id:${id} successfully deleted!` })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}