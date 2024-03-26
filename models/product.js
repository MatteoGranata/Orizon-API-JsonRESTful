import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name: {
        type: String, //specifies that the field must contain string.
        require: true
    }
}, { timestamps: true }) //Automatically adds two timestamp fields: createdAt and uptadedAt

export const Product = mongoose.model('Product', productSchema)