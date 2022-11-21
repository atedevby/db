import express from "express"
import {
  getResumes,
  getResumesById,
  createResumes,
  updateResumes,
  deleteResumes,
} from "../../controllers/resumes"

const router = express.Router()

router.get("/resumes", getResumes)
router.get("/resumes/:id", getResumesById)
router.post("/resumes", createResumes)
router.put("/resumes/:id", updateResumes)
router.delete("/resumes/:id", deleteResumes)

export default router
