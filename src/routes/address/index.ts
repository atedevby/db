import { Router } from "express"
import { getAddress } from "../../controllers/address"
const router = Router()

router.get("/get-address", getAddress)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/post", updateDonateInformation)
// router.put("/updateSum/:id", updateDonateSum)
// router.put("/updateDescription/:id", updateDonateDescription)
// router.put("/updateBanner/:id", updateDonateBanner)

// router.delete("/api/server/:id", remove)

export const address = router
