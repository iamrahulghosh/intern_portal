import dotenv from "dotenv"
import connectDB from "./database/db.connect.js"
import app from "./app.js"

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() => {
    console.log("Database connected successfully!")

    app.listen(process.env.PORT_NUMBER || 4000, () => {
        console.log(`Server is listining on port: ${process.env.PORT_NUMBER || 4000}`)
        console.log(`Server URL: http://localhost:${process.env.PORT_NUMBER || 4000}`)
    })
})
.catch(error => {
    console.error(error)
    process.exit(1)
})