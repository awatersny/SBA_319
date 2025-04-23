import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded())
app.use(express.json())

mongoose.connect(`${process.env.ATLAS_URI}/SBA_319`)

mongoose.connection.once("open", () => {
  console.log(`Connected to ${mongoose.connection.name} database.`)
})

app.use("/", (req, res) => {
  res.send({message: "Welcome to the API"})
})

app.listen(PORT, () => {
  console.log(`Server is open at localhost:${PORT}.`)
})