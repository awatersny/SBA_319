import mongoose from "mongoose"
import Player from "./player.mjs"

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    players: [{
      type: Player,
      required: true
    }],
    sendou_profile: {
      type: String
    }
  }
)

const Team = mongoose.model("Team", teamSchema)

export default Team