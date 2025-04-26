import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    calloutsRenderedAt: "/callouts",
    renderedCalloutsById: "/callouts/:id",
    apiLinks: [
      {
        href: "/api/players",
        rel: "players",
        type: "GET"
      },
      {
        href: "/api/players",
        rel: "players",
        type: "POST"
      },
      {
        href: "/api/players/:id",
        rel: "players",
        type: "GET"
      },
      {
        href: "/api/players/:id",
        rel: "players",
        type: "PUT"
      },
      {
        href: "/api/players/:id",
        rel: "players",
        type: "DELETE"
      },
      {
        href: "/api/teams",
        rel: "teams",
        type: "GET"
      },
      {
        href: "/api/teams",
        rel: "teams",
        type: "POST"
      },
      {
        href: "/api/teams/:id",
        rel: "team",
        type: "GET"
      },
      {
        href: "/api/teams/:id",
        rel: "team.name",
        type: "PATCH"
      },
      {
        href: "/api/teams/:id",
        rel: "team",
        type: "DELETE"
      },
      {
        href: "/api/teams/:id/members",
        rel: "team.players",
        type: "GET"
      },
      {
        href: "/api/teams/:id/members",
        rel: "team.players",
        type: "POST"
      },
      {
        href: "/api/teams/:id/members/:playerId",
        rel: "team.players",
        type: "GET"
      },
      {
        href: "/api/teams/:id/members/:playerId",
        rel: "team.players",
        type: "DELETE"
      },
      {
        href: "/api/mapmodes",
        rel: "mapmodes",
        type: "GET"
      }
    ],
    seedLinks: [
      {
        href: "/api/teams/seed",
        rel: "teams",
        type: "GET"
      },
      {
        href: "/api/players/seed",
        rel: "players",
        type: "GET"
      },
      {
        href: "/api/mapmodes/seed",
        rel: "mapmodes",
        type: "GET"
      }
    ]
  })
})

router.get("/api", (req, res) => {
  res.redirect("/")
})

export default router