import { Router } from "express"
import { getSum } from "../../controllers/donate"
const router = Router()

router.get("/sum", getSum)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/api/server", create)

// router.delete("/api/server/:id", remove)

export const donate = router
