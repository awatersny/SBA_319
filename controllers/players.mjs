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
          splashTag: "1981",
          role: "frontline"
        },
        {
          name: "ToriiStars",
          splashTag: "1123",
          role: "midline"
        },
        {
          name: "Sasu",
          splashTag: "1542",
          role: "anchor",
        },
        {
          name: "Mobes",
          splashTag: "2478",
          role: "support"
        },
        {
          name: "DeepEnd",
          splashTag: "1157",
          role: "frontline"
        },
        {
          name: "Vipman21",
          splashTag: "3189",
          role: "slayer"
        },
        {
          name: "Vicvillon",
          splashTag: "1493",
          role: "slayer"
        },
        {
          name: "CoZ.zy",
          splashTag: "2169",
          role: "frontline"
        },
        {
          name: "Grey",
          splashTag: "7111",
          role: "support"
        },
        {
          name: "Red",
          splashTag: "9771",
          role: "midline"
        }
      ])
    }
    res.redirect('/api/players')
  } catch (error) {
    console.error(error)
  }
}

export async function createNewPlayer(req, res) {
  try {
    const players = await Player.find()
    if(req.body.name.length > 10) {
      res.json({msg: "Name should be no more than 10 characters long."})
    } 
    else if(req.body.splashTag.length > 5) {
      res.json({msg: "Splash tag should be no more than 5 characters long."})
    }
    else if(!players.find(player => player.splashTag == req.body.splashTag)) {
      const player = await Player.create({
        name: req.body.name,
        splashTag: req.body.splashTag,
        role: req.body.role,
        hasTeam: false,
        team: null
      })
      res.json(player)
    }
    else res.json({msg: "Splash tag in use"})
  } catch (error) {
    console.error(error)
  }
}

// I don't want users to override the hasTeam and team properites
export async function editPlayer(req, res) {
  try {
    const players = await Player.find()
    const thisPlayer = await Player.findById(req.params.id)
    if(!players.find(player => player.splashTag == req.body.splashTag) 
      || thisPlayer.splashTag == req.body.splashTag) {
      if(req.body.name) {
        if(req.body.name.length > 10) {
          res.json({msg: "Name should be no more than 10 characters long."})
        }
        else thisPlayer.name = req.body.name
      }
      if(req.body.splashTag) {
        if(req.body.splashTag.length > 5) {
          res.json({msg: "Splash tag should be no more than 5 characters long."})
        }
        else thisPlayer.splashTag = req.body.splashTag
      }
      thisPlayer.role = req.body.role ? req.body.role : thisPlayer.role
      thisPlayer.save()
      res.json(thisPlayer)
    }
    else res.json({msg: "Splash tag in use"})
  } catch (error) {
    console.error(error)
  }
}

export async function removePlayer(req, res) {
  try {
    await Player.findByIdAndDelete(req.params.id)
    res.json({deleted: `Player Id ${req.params.id}`})
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