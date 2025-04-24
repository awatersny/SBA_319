import Player from "../models/player.mjs";

export async function getAllPlayers(req, res){
  try {
    const players = await Player.find()
    res.status(200).json([players, {route: "players"}])
  } catch (error) {
    console.error(error)
  }
}