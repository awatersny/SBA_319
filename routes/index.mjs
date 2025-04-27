import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    title: "Splatoon Team Organizer API",
    apiLinks: "/api",
    calloutsRenderedAt: "/callouts",
    renderedCalloutsById: "/callouts/:id"
  })
})

router.get("/api", (req, res) => {
  res.json({
    links: [
      {
        href: "/players",
        rel: "players",
        type: "GET"
      },
      {
        href: "/players/:id",
        rel: "players",
        type: "GET"
      },
      {
        href: "/teams",
        rel: "teams",
        type: "GET"
      },
      {
        href: "/teams/:id",
        rel: "team",
        type: "GET"
      },
      {
        href: "/teams/:id/members",
        rel: "team.players",
        type: "GET"
      },
      {
        href: "/teams/:id/members/:playerId",
        rel: "team.players",
        type: "GET"
      },
      {
        href: "/mapmodes",
        rel: "mapmodes",
        type: "GET"
      },
      {
        href: "/mapmodes/:id",
        rel: "mapmodes",
        type: "GET"
      },
      {
        href: "/players",
        rel: "players",
        type: "POST",
        body: {
          "name": "String max 10 chars",
          "splashTag": "String max 5 chars",
          "role": ["slayer", "skirmisher", "support", "anchor", "frontline", "midline"],
        }
      },
      {
        href: "/teams",
        rel: "teams",
        type: "POST",
        body: {
          "name": "Team name"
        }
      },
      {
        href: "/teams/:id/members",
        rel: "team.players",
        type: "POST",
        body: {
          "player": "Player ObjectId"
        }
      },
      {
        href: "/players/:id",
        rel: "players",
        type: "PUT"
      },
      {
        href: "/teams/:id",
        rel: "team.name",
        type: "PATCH"
      },
      {
        href: "/players/:id",
        rel: "players",
        type: "DELETE"
      },
      {
        href: "/teams/:id",
        rel: "team",
        type: "DELETE"
      },
      {
        href: "/teams/:id/members/:playerId",
        rel: "team.players",
        type: "DELETE"
      }
    ],
    seedLinks: [
      {
        href: "/teams/seed",
        rel: "teams",
        type: "GET"
      },
      {
        href: "/players/seed",
        rel: "players",
        type: "GET"
      },
      {
        href: "/mapmodes/seed",
        rel: "mapmodes",
        type: "GET"
      }
    ]
  })
})

export default router