import { Router } from "express"
import { getList, getPlayer } from "../../controllers/players"
const router = Router()

router.get("/list", getList)
router.get("/player/:id", getPlayer)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/api/server", create)

// router.delete("/api/server/:id", remove)

export const players = router
