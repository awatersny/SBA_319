import Team from "../models/team.mjs";

export async function getAllTeams(req, res){
  try {
    const teams = await Team.find()
    res.status(200).json([teams, {route: "teams"}])
  } catch (error) {
    console.error(error)
  }
}