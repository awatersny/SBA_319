import express from "express"
const router = express.Router()

router.get("/api", (req, res) => {
  res.redirect("/")
})

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    calloutsRenderedAt: "/callouts",
    links: [
      {
        href: "/api/plavers",
        rel: "players",
        type: "GET"
      },
      {
        href: "/api/teams",
        rel: "teams",
        type: "GET"
      },
      {
        href: "/api/mapmodes",
        rel: "mapmodes",
        type: "GET"
      }
    ]
  })
})

export default router