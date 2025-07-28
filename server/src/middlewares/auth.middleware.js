import JWT from "jsonwebtoken"
import CustomError from "../utils/ErrorHandler.js"
import AsyncHandler from "../utils/AsyncHandler.js"
import Intrn from "../models/intern.model.js"

const verifyAuth = AsyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '')
    
        if (!token) {
            return res
            .status(401)
            .json(
                new CustomError(401, "Unauthorised User!")
            )
        }
    
        const decodedToken = JWT.verify(token, process.env.TOKEN_SECRET);
        const user = await Intrn.findById(decodedToken?._id).select('-password -refreshToken')
    
        if (!user) {
            return res
            .status(401)
            .json(
                new CustomError(401, "Invallid User!")
            )
        }
    
        req.user = user;
        next();

    } catch (error) {
        return res
            .status(401)
            .json(
                new CustomError(401, "Invalid User!")
            )
    }
})

export default verifyAuth