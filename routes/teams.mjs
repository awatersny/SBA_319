import express from "express"
import * as teamCtrl from "../controllers/teams.mjs"
const router = express.Router()

router.get("/", teamCtrl.getAllTeams)
router.get("/seed", teamCtrl.generateTeams)
router.post("/", teamCtrl.createTeam)
router.get("/:id", teamCtrl.getTeam)
router.delete("/:id", teamCtrl.removeTeam)
router.get("/:id/members", teamCtrl.getMembersOf)
router.patch("/:id/members", teamCtrl.addMemberTo)
router.delete("/:id/members/:playerId", teamCtrl.removeMemberFrom)

export default router