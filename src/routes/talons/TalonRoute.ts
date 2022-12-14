import express from "express"
import {
  getTalons,
  getTalonsById,
  createTalons,
  updateTalons,
  deleteTalons,
} from "../../controllers/talons"

const router = express.Router()

router.get("/talons", getTalons)
router.get("/talons/:id", getTalonsById)
router.post("/talons", createTalons)
router.put("/talons/:id", updateTalons)
router.delete("/talons/:id", deleteTalons)

export default router
