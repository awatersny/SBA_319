import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import mapModes from "./routes/mapModes.mjs"
import players from "./routes/players.mjs"
import teams from "./routes/teams.mjs"
import index from "./routes/index.mjs"
import callouts from "./routes/callouts.mjs"
import error from "./utilities/error.mjs"

dotenv.config()
const app = express()
const PORT = process.env.PORT

mongoose.connect(`${process.env.ATLAS_URI}/SBA_319`)

mongoose.connection.once("open", () => {
  console.log(`Connected to the ${mongoose.connection.name} database.`)
})

app.use(express.static("./assets"))
app.use(express.urlencoded())
app.use(express.json())

app.use((req, res, next) => {
  const time = new Date()
  console.log("-----")
  if(req.url !== "/favicon.ico") {
    console.log(`${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`)
  }
  if(req.body){
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:")
      console.log(req.body)
    }
  }
  next();
});

app.set("views", "./views")
app.set("view engine", "ejs")

app.use("/", index)
app.use("/callouts", callouts)
app.use("/api/mapmodes", mapModes)
app.use("/api/players", players)
app.use("/api/teams", teams)

app.use((req, res, next) => {
  next(error(404, "Oops!  There's nothing here."));
});

app.use((err, req, res, next) => {
  if(req.url !== "/favicon.ico") {
    console.log(`${err.status} Not found.`)
  }
  res.status(err.status || 500);
  res.json({ error: `${err.status} ${err.message}` });
});

app.listen(PORT, () => {
  console.log(`Server is open at localhost:${PORT}.`)
})