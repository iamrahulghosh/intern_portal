import mongoose, { Schema } from "mongoose";

const lorSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    lor: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

const Lor = mongoose.model("Lors", lorSchema)

export default Lor