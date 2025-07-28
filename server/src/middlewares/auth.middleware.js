import JWT from "jsonwebtoken"
import CustomError from "../utils/ErrorHandler.js"
import AsyncHandler from "../utils/AsyncHandler.js"
import Intrn from "../models/intern.model.js"

const verifyAuth = AsyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '')
    
        if (!token) {
            throw new CustomError(404, 'Unauthorized user token')
        }
    
        const decodedToken = JWT.verify(token, process.env.TOKEN_SECRET);
        const user = await Intrn.findById(decodedToken?._id).select('-password -refreshToken')
    
        if (!user) {
            throw new CustomError(401, 'Invalid user')
        }
    
        req.user = user;
        next();

    } catch (error) {
        throw new CustomError(401, 'Invalid user')
    }
})

export default verifyAuth