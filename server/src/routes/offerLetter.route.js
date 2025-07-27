import { Router } from "express";
import { insertOfferLetter } from "../controllers/offerLetter.controller.js";
import verifyAuth from "../middlewares/auth.middleware.js";


const router = Router()

router.use(verifyAuth)
router.route("/insert").post(insertOfferLetter)

export default router