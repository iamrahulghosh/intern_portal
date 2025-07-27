import OfferLetter from "../models/offerLetter.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import CustomError from "../utils/ErrorHandler.js";
import Response from "../utils/ResponseHandler.js";

const insertOfferLetter = AsyncHandler(async (req, res) => {
    const {email, offerLetter} = req.body

    const response = await OfferLetter.create({
        email: email,
        offerLetter: offerLetter
    })

    return res
    .status(200)
    .json(
        new Response(200, response, "Offer Letter added successfully!")
    )
})

export {
    insertOfferLetter
}