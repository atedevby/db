//@ts-nocheck
import { Router } from "express"
import {
  getList,
  getPageNews,
  setPageNews,
  deletePageNews,
} from "../../controllers/events"
const router = Router()

router.get("/list", getList)
router.get("/pageNews/:id", getPageNews)
router.post("/post", setPageNews)
router.post("/delete/:id", deletePageNews)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/api/server", create)

// router.delete("/api/server/:id", remove)

export const events = router
