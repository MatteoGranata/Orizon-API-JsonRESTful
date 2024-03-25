import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)