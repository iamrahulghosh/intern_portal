import { Router } from "express";
import { insertCertificate } from "../controllers/certificate.controller.js";
import verifyAuth from "../middlewares/auth.middleware.js";


const router = Router()

router.use(verifyAuth)
router.route("/insert").post(insertCertificate)

export default router