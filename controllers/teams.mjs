import Team from "../models/team.mjs"
import Player from "../models/player.mjs"
import { json } from "express"

export async function getAllTeams(req, res){
  try {
    const teams = await Team.find()
    if(teams.length) res.status(200).json(teams)
    else res.status(200).json({route: "teams"})
  } catch (error) {
    console.error(error)
  }
}

export async function createTeam(req, res) {
  const teams = await Team.find()
  try {
    if(!teams.find(team => team.name == req.body.name)) {
      const team = await Team.create({
        name: req.body.name,
        members: []
      })
      res.json(team)
    }
    else res.json({msg: "Team name taken"})
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
    const members = await Player.find({team: req.params.id})
    // for(let i = 0; i < team.players.length; i++) {
    //   members.push(await Player.findById(team.players[i]))
    // } 
    // console.log(await Player.find({team: req.params.id}))
    res.status(200).json(members)
  } catch (error) {
    console.error(error)
  }
}

export async function addMemberTo(req, res) {
  try {
    const team = await Team.findById(req.params.id)
    const player = await Player.findById(req.body.id)
    if(!player.hasTeam && team.players.length < 5) {
      player.hasTeam = true
      player.team = team._id
      player.save()
      team.players.push(player)
      team.save()
    }
    res.json(team)
  } catch (error) {
    console.error(error)
  }
} 

export async function removeMemberFrom(req, res) {
  try {
    const team = await Team.findById(req.params.id)
    const player = await Player.findById(req.params.playerId)
    const idx = team.players.indexOf(player.id)
    if(idx > -1) {
      player.hasTeam = false
      player.team = null
      player.save()
      team.players.splice(idx, 1)
      team.save()
    }
    res.json(team)
  } catch (error) {
    console.error(error)
  }
}