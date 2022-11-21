import express from "express"
import {
  getVacancies,
  getVacanciesById,
  createVacancies,
  updateVacancies,
  deleteVacancies,
} from "../../controllers/vacancies"

const router = express.Router()

router.get("/vacancies", getVacancies)
router.get("/vacancies/:id", getVacanciesById)
router.post("/vacancies", createVacancies)
router.put("/vacancies/:id", updateVacancies)
router.delete("/vacancies/:id", deleteVacancies)

export default router
