import { Router } from "express"
import {
  getDonate,
  updateDonateSum,
  updateDonateDescription,
  updateDonateBanner,
} from "../../controllers/donate"
const router = Router()

router.get("/getDonate", getDonate)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/post", updateDonateInformation)
router.put("/updateSum/:id", updateDonateSum)
router.put("/updateDescription/:id", updateDonateDescription)
router.put("/updateBanner/:id", updateDonateBanner)

// router.delete("/api/server/:id", remove)

export const donate = router
