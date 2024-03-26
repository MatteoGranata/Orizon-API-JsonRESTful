import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String, //specifies that the field must contain string.
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
}, { timestamps: true }) //Automatically adds two timestamp fields: createdAt and uptadedAt

export const User = mongoose.model('User', userSchema)