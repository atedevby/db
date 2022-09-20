import { Router } from "express"
import { getList } from "../../controllers/users"
const router = Router()

router.get("/list", getList)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/api/server", create)

// router.delete("/api/server/:id", remove)

export const users = router
