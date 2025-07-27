import mongoose from "mongoose";
import DBName from "../temp.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`)
        console.log(connectionInstance?.connection?.host)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB