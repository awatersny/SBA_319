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
  'Tower Control', 'Rainmaker', 'Clam Blitz', 'Splat Zones'
]

const mapModeSchema = new mongoose.Schema(
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
    callout: {
      type: String,
      required: true
    }
  }
)

const MapMode = mongoose.model("MapMode", mapModeSchema)

export default MapMode