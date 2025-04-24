import Team from "../models/team.mjs";
import Player from "../models/team.mjs"

export async function getAllTeams(req, res){
  try {
    const teams = await Team.find()
    if(teams.length) res.status(200).json(teams)
    else res.status(200).json({route: "teams"})
  } catch (error) {
    console.error(error)
  }
}

export async function generateTeams (req, res) {
  try {
    const teams = await Team.find()
    if(!teams.length){
      await Team.create([
        {
          name: "Spicy Kensa Alliance",
          members: [
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
          ]
        }
      ])
    }
    res.redirect('/api/teams')
  } catch (error) {
    console.error(error)
  }
}