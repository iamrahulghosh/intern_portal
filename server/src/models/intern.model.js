import mongoose, { Schema } from "mongoose";
import JWT from "jsonwebtoken"

const internSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    mobile: {
        type: Number,
        required: true,
        trim: true,
    }
}, { timestamps: true })

internSchema.methods.generateToken = function(){
    return JWT.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRY
        }
    )
}

const Intern = mongoose.model("Interns", internSchema)

export default Intern