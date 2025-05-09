import express from "express"
import * as mapModesCtrl from "../controllers/mapModes.mjs"

const router = express.Router()

router.get("/", mapModesCtrl.getAllMapModes)
router.get('/seed', mapModesCtrl.generateMapModes)
router.get("/:id", mapModesCtrl.getMapMode)

export default router