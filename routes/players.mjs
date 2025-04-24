import express from "express"
import * as playerCtrl from "../controllers/players.mjs"
const router = express.Router()

router.get("/", playerCtrl.getAllPlayers)
router.get("/seed", playerCtrl.generatePlayers)
router.get("/:id", playerCtrl.getPlayer)

export default router