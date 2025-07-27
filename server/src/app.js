import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: [ "GET", "POST", "PUT", "PATCH", "DELETE" ],
    credentials: true
}))

app.use(cookieParser())

app.use(express.json({
    limit: "100kb"
}))

app.use(express.urlencoded({
    limit: "100kb",
    extended: true
}))

app.use(express.static("public/"))



import internRoute from "./routes/intern.routes.js"
import offerLetterRoute from "./routes/offerLetter.route.js"
import certificateRoute from "./routes/certificate.routes.js"
import lorRoute from "./routes/lor.routes.js"

app.use("/api/v1/intern", internRoute)
app.use("/api/v1/offerLetter", offerLetterRoute)
app.use("/api/v1/certificate", certificateRoute)
app.use("/api/v1/lor", lorRoute)

export default app