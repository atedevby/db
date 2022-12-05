import express from "express"
import {
  getEntrepreneur,
  getEntrepreneurById,
  createEntrepreneur,
  updateEntrepreneur,
  deleteEntrepreneur,
} from "../../controllers/entrepreneur"

const router = express.Router()

router.get("/entrepreneur", getEntrepreneur)
router.get("/entrepreneur/:id", getEntrepreneurById)
router.post("/entrepreneur", createEntrepreneur)
router.put("/entrepreneur/:id", updateEntrepreneur)
router.delete("/entrepreneur/:id", deleteEntrepreneur)

export default router

