import mongoose, { Schema } from "mongoose";

const offerLetterSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    offerLetter: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

const OfferLetter = mongoose.model("OfferLetters", offerLetterSchema)

export default OfferLetter