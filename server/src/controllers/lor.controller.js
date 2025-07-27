import Lor from "../models/lor.models.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import CustomError from "../utils/ErrorHandler.js";
import Response from "../utils/ResponseHandler.js";

const insertLor = AsyncHandler(async (req, res) => {
    const {email, lor} = req.body

    const response = await Lor.create({
        email: email,
        lor: lor
    })

    return res
    .status(200)
    .json(
        new Response(200, response, "Offer Letter added successfully!")
    )
})

export {
    insertLor
}