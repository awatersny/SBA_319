import Team from "../models/team.mjs"
import Player from "../models/player.mjs"

export async function getAllTeams(req, res){
  try {
    const teams = await Team.find()
    if(teams.length) res.status(200).json(teams)
    else res.status(200).json({route: "teams"})
  } catch (error) {
    console.error(error)
  }
}

export async function getAllPlayers(req, res){
  try {
    const players = await Player.find()
    if(players.length === 0) res.status(200).json({route: "players"})
    else res.status(200).json(players)
  } catch (error) {
    console.error(error)
  }
}

export async function generateTeam(req, res) {
  try {
    const teams = await Team.find()
    if(!teams.length){
      await Team.create([
        {
          name: "Spicy Kensa Alliance",
          members: []
        }
      ])
    }
    res.redirect('/api/teams')
  } catch (error) {
    console.error(error)
  }
}

export async function getTeam(req, res) {
  try {
    const team = await Team.findById(req.params.id)
    res.status(200).json(team)
  } catch (error) {
    console.error(error)
  }
}

export async function getMembersOf(req, res) {
  try {
    const team = await Team.findById(req.params.id)
    res.status(200).json(team.players)
  } catch (error) {
    console.error(error)
  }
}

export async function addMemberTo(req, res) {
  try {
    const team = await Team.findById(req.params.id)
    const player = await Player.findById(req.body.id)
    if(!player.hasTeam) {
      player.hasTeam = true
      player.save()
      team.players.push(player)
      team.save()
    }
    res.json(team)
  } catch (error) {
    console.error(error)
  }
}