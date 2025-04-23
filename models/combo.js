import mongoose from "mongoose"

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

const comboSchema = new mongoose.Schema(
  {
    stage: {
      type: String,
      enum: stages,
      required: true
    },
    mode: {
      type: String,
      enum: modes,
      required: true
    },
    callouts: {
      type: String
    }
  }
)

const Combo = mongoose.model("Combo", comboSchema)

export default Combo