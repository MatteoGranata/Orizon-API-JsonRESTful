import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
}, { timestamps: true })

export const Product = mongoose.model('Product', productSchema)