import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import mapModes from "./routes/mapModes.mjs"

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.static("./assets"))
app.use(express.urlencoded())
app.use(express.json())

mongoose.connect(`${process.env.ATLAS_URI}/SBA_319`)

mongoose.connection.once("open", () => {
  console.log(`Connected to the ${mongoose.connection.name} database.`)
})

app.use("/api/mapmodes", mapModes)

app.use("/", (req, res) => {
  res.send({message: "Welcome to the API"})
})

app.listen(PORT, () => {
  console.log(`Server is open at localhost:${PORT}.`)
})