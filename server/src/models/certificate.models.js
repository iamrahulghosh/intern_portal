import mongoose, { Schema } from "mongoose";

const certificateSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    certificate: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

const Certificate = mongoose.model("Certificates", certificateSchema)

export default Certificate