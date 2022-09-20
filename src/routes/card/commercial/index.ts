import { Router } from "express"
import { getList, getCurrentCard } from "../../../controllers/card/commercial"
const router = Router()

router.get("/list", getList)
router.get("/card/:id", getCurrentCard)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/api/server", create)

// router.delete("/api/server/:id", remove)

export const commercial = router
