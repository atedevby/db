import { Router } from "express"
import { setCity, getCities } from "../../controllers/cities"
const router = Router()

router.get("/list", getCities)
router.post("/add", setCity)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/api/server", create)

// router.delete("/api/server/:id", remove)

export const cities = router
