import { Router } from "express"
import {
  getAbout,
  updateAboutDescription,
  updateAboutRatingTitle,
  updateAboutRatingList
} from "../../controllers/about"
const router = Router()

router.get("/get-about", getAbout)
router.put("/update-about-description/:id", updateAboutDescription)
router.put("/update-about-rating-title/:id", updateAboutRatingTitle)
router.put("/update-about-rating-list/:id", updateAboutRatingList)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/post", updateDonateInformation)
// router.put("/updateSum/:id", updateDonateSum)
// router.put("/updateDescription/:id", updateDonateDescription)
// router.put("/updateBanner/:id", updateDonateBanner)

// router.delete("/api/server/:id", remove)

export const about = router
