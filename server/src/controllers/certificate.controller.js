import Certificate from "../models/certificate.models.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import CustomError from "../utils/ErrorHandler.js";
import Response from "../utils/ResponseHandler.js";

const insertCertificate = AsyncHandler(async (req, res) => {
    const {email, certificate} = req.body

    const response = await OfferLetter.create({
        email: email,
        certificate: certificate
    })

    return res
    .status(200)
    .json(
        new Response(200, response, "Offer Letter added successfully!")
    )
})

export {
    insertCertificate
}