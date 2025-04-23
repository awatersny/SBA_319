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
  'Tower Control', 'Rainmaker', 'Clam Blitz', 'Splat Zones'
]

const combos = []

stages.forEach(stage => {
  modes.forEach(mode => {
    const img = stage.replaceAll(" ", "_")
    const combo = {}
    combo.stage = stage
    combo.mode = mode
    if(stage !== "Mahi-Mahi Resort"){
      combo.callout = `/${img}.png`
    } else {
      const imgMode = mode.replaceAll(" ", "_")
      combo.callout = `/${img}_${imgMode}.png`
    }
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
    res.redirect('/api/mapmodes')
  } catch (error) {
    console.error(error)
  }
})

export default router