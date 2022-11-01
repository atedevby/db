import { Router } from "express"
import { getSum, updateDonateInformation } from "../../controllers/donate"
const router = Router()

router.get("/sum", getSum)

// router.get("/card/commercial/:id", getCurrentCard)

// router.post("/post", updateDonateInformation)
router.put("/update/:id", updateDonateInformation)

// router.delete("/api/server/:id", remove)

export const donate = router
