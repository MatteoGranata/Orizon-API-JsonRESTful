import { User } from "../models/user.js"
import mongoose from "mongoose"

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find() //Retrieve all users using User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getUserByID = async (req, res) => {
    const {id} = req.params // Retrieve the user ID from the request
    try {
        const user = await User.findById(id)  // Find the user with the corresponding ID
        res.status(200).json(user) // If found, submit a success response (status 200) with the user
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const addUser = async (req, res) => {
    const user = req.body //Retrieve the new user data from the request
    const newUser = new User(user) 
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const updateUser = async (req, res) => {
     // Retrieves the ID of the user to be updated and the updated data
    const { id } = req.params
    const data = { ...req.body }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `id not compliant with mongo` }) //Verify that the ID is valid for a Mongoose ObjectId
    try {
        const user = await User.findByIdAndUpdate(id, data, { new: true }) // Find the user and update its data
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params //Retrieve the user ID from the request
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `id not compliant with mongo` })
    try {
        await User.findByIdAndDelete(id) // Delete user
        res.status(200).json({ message: `user with id:${id} successfully deleted` })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}