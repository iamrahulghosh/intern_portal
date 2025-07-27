import { Router } from "express";
import { login, fetchCredentials, logout } from "../controllers/intern.controllers.js";
import verifyAuth from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/login").post(login)

router.use(verifyAuth)
router.route("/parks").get(fetchCredentials)
router.route("/logout").get(logout)

export default router