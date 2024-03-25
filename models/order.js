import mongoose from "mongoose";
import { Product } from "../models/product.js";
import { User } from "../models/user.js";

const orderSchema = mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: User, //link to the user schema
        require: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, //specifies that the field must contain a unique ID of type MongoDB object.
        ref: Product, //link to the product schema
        require: true,
    }]

}, { timestamps: true })//Automatically adds two timestamp fields: createdAt and uptadedAt

export const Order = mongoose.model('Order', orderSchema)
