import Player from "../models/player.mjs";

export async function getAllPlayers(req, res){
  try {
    const players = await Player.find()
    if(players.length === 0) res.status(200).json({route: "players"})
    else res.status(200).json(players)
  } catch (error) {
    console.error(error)
  }
}

export async function generatePlayers (req, res) {
  try {
    const players = await Player.find()
    if(!players.length){
      await Player.create([
        {
          name: "Spice",
          splash_tag: "1981",
          role: "Slayer"
        },
        {
          name: "ToriiStars",
          splash_tag: "1123",
          role: "Support"
        },
        {
          name: "Sasu",
          splash_tag: "1542",
          role: "Anchor",
        },
        {
          name: "Mobes",
          splash_tag: "2478",
          role: "Skirmisher"
        }
      ])
    }
    res.redirect('/api/players')
  } catch (error) {
    console.error(error)
  }
}

export async function getPlayer(req, res){
  try {
    const player = await Player.findById(req.params.id)
    res.status(200).json(player)
  } catch (error) {
    console.error(error)
  }
}