import { Router } from "express"
import { getDonate, updateDonateInformation } from "../../controllers/donate"
const router = Router()

router.get("/getDonate", getDonate)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/post", updateDonateInformation)
router.put("/update/:id", updateDonateInformation)

// router.delete("/api/server/:id", remove)

export const donate = router
