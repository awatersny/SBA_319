import mongoose from "mongoose"

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    splashTag: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      enum: ["slayer", "skirmisher", "support", "anchor", "frontline", "midline"],
      required: true
    },
    hasTeam: {
      type: Boolean,
      default: false
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      default: null
    }
  }
)
const Player = mongoose.model("Player", playerSchema)

export default Player