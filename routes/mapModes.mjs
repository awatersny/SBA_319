import express from "express"
import mongoose from "mongoose"
import MapMode from "../models/mapMode.mjs"
const router = express.Router()

const stages = [
  'Hagglefish Market', 'Scorch Gorge', 'MakoMart',
  'Flounder Heights', 'Humpback Pump Track', 'Brinewater Springs',
  "Um'ami Ruins", "Museum d'Alfonsino", 'Crableg Capital',
  'Inkblot Art Academy', 'Eeltail Alley', 'Manta Maria',
  'Hammerhead Bridge', 'Sturgeon Shipyard', 'Undertow Spillway',
  'Marlin Airport', 'Shipshape Cargo Co.', 'Mincemeat Metalworks',
  'Barnacle & Dime', 'Bluefin Depot', 'Mahi-Mahi Resort',
  'Wahoo World', 'Robo ROM-en', 'Lemuria Hub'
]

const modes = [
  'Tower Control', 'Rainmaker', 'Clam Blitz', 'Splat Zones', 'Turf War'
]

const combos = []

stages.forEach(stage => {
  modes.forEach(mode => {
    const combo = {}
    combo.stage = stage
    combo.mode = mode
    combos.push(combo)
  })
})

router.get("/", async (req, res) => {
  try {
    const mapModes = await MapMode.find()
    res.json(mapModes)
  } catch (error) {
    console.error(error)
  }
})

router.get('/seed', async (req, res)=>{
  try {
    await MapMode.create(combos)
    res.redirect('/api/mapModes')
  } catch (error) {
    console.error(error)
  }
})

export default router