import { Router } from "express"
import {
  getList,
  setCurrentCard,
  getCurrentCard,
} from "../../../controllers/card/commercial"
const router = Router()

router.get("/list", getList)
router.get("/card/:id", getCurrentCard)
router.post("/card/:id", setCurrentCard)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/api/server", create)

// router.delete("/api/server/:id", remove)

export const commercial = router
