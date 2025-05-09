import express from "express"
import * as playerCtrl from "../controllers/players.mjs"
const router = express.Router()

router.get("/", playerCtrl.getAllPlayers)
router.post("/", playerCtrl.createNewPlayer)
router.get("/seed", playerCtrl.generatePlayers)
router.get("/:id", playerCtrl.getPlayer)
router.put("/:id", playerCtrl.editPlayer)
router.delete("/:id", playerCtrl.removePlayer)

export default router