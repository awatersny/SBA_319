import express from "express"
import MapMode from "../models/mapMode.mjs"
const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const mapModes = await MapMode.find()
    const options = {
      mapModes: mapModes
    }
    res.render("info", options)
  } catch (error) {
    console.error(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const mapMode = await MapMode.findById(req.params.id)
    const options = {
      mapModes: [mapMode]
    }
    res.render("info", options)
  } catch (error) {
    console.error(error)
  }
})

export default router