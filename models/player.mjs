import mongoose from "mongoose"

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    splash_tag: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["Slayer", "Skirmisher", "Support", "Anchor"],
      required: true
    },
    sendou_profile: {
      type: String
    }
  }
)

const Player = mongoose.model("Player", playerSchema)

export default Player