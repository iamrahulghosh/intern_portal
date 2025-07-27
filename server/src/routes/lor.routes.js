import { Router } from "express";
import { insertLor } from "../controllers/lor.controller.js";
import verifyAuth from "../middlewares/auth.middleware.js";


const router = Router()

router.use(verifyAuth)
router.route("/insert").post(insertLor)

export default router