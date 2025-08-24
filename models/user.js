import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createadAt: {
        type: Date,
        default: Date.now()
    }
})


export default mongoose.model("User", userSchema)