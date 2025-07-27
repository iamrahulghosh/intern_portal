import AsyncHandler from "../utils/AsyncHandler.js";
import Response from "../utils/ResponseHandler.js";
import CustomError from "../utils/ErrorHandler.js";
import Intern from "../models/intern.model.js";
import OfferLetter from "../models/offerLetter.model.js";
import Certificate from "../models/certificate.models.js";
import Lor from "../models/lor.models.js";

const login = AsyncHandler(async (req, res) => {
    const {
        email, mobile
    } = req?.body

    if (!email || !mobile) {
        throw new CustomError(400, "All fields are required!")
    }

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email?.trim()?.toLowerCase())) {
        throw new CustomError(400, "Invalid email!")
    }

    if (mobile?.trim()?.length !== 10) {
        throw new CustomError(400, "Invalid mobile number!")
    }

    const intern = await Intern.findOne({
        email: email?.trim()?.toLowerCase()
    })

    // console.log(intern)

    if (!intern) {
        throw new CustomError(400, "Intern not found!")
    }

    if (Number(intern?.mobile) !== Number(mobile)) {
        throw new CustomError(400, "Mobile number doesn't matching!")
    }

    const token = intern.generateToken()

    const options = {
        "httpOnly": true,
        "secure": true
    }

    return res
    .status(200)
    .cookie("token", token, options)
    .json(
        new Response(200, intern)
    )
})

const fetchCredentials = AsyncHandler(async (req, res) => {
    const user = req.user

    console.log(user)

    const offerLetters = await OfferLetter.find({
        email: user.email
    })

    const certificates = await Certificate.find({
        email: user.email
    })

    const lors = await Lor.find({
        email: user.email
    })

    return res
    .status(200)
    .json(
        new Response(
            200,
            {
                "user": user,
                "offerLetters": offerLetters,
                "certificates": certificates,
                "lors": lors
            },
            "Parks fetched successfully!"
        )
    )
})

const logout = AsyncHandler(async (req, res) => {
    const options = {
        "httpOnly": true,
        "secure": true,
    }

    return res
    .clearCookie("token", options)
    .status(200)
    .json(
        new Response(300, {}, "Logged out successfully!")
    )
})

export {
    login,
    fetchCredentials,
    logout
}