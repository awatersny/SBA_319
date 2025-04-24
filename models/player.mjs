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
    hasTeam: {
      type: Boolean,
      default: false,
      required: true
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team"
    }
  }
)

const Player = mongoose.model("Player", playerSchema)

export default Player