import express from "express"
import {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from "../../controllers/news"

const router = express.Router()

router.get("/news", getNews)
router.get("/news/:id", getNewsById)
router.post("/news", createNews)
router.put("/news/:id", updateNews)
router.delete("/news/:id", deleteNews)

export default router