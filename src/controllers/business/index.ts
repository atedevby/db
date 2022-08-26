import express from "express"
import { database } from "../../db"

const router = express.Router()

router.get("/list", async (req, res) => {
  try {
    const business = await database("business_card_main")

    res.status(200).json({
      business,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      business: [],
    })
  }
})

router.get("/one/:id", async (req, res) => {
  try {
    const [main = [], services = [], list = []] = await Promise.all([
      database("business_card_main").where({
        id: req.params.id,
      }),
      database("business_card_service").where({
        business_id: req.params.id,
      }),
      database("business_card_service_list").where({
        service_id: req.params.id,
      }),
    ])
    const sch: { id: number; schedule: { day: string; time: string }[] }[] = []
    for (let i = 0; i < list.length; i++) {
      try {
        const res = await database("business_card_service_list_schedule").where(
          {
            service_list_id: list[i].id,
          }
        )
        sch.push({
          id: list[i].id,
          schedule: res,
        })
      } catch (error) {
        console.log(error)
      }
    }

    if (main.length) {
      const business = main[0]
      business.services = services[0]
      business.services.serviceList = list.map((item) => {
        return {
          ...item,
          schedule: sch[item.id - 1].schedule,
        }
      })

      res.status(200).json(business)
    } else {
      res
        .status(404)
        .json({ error: true, code: 404, message: "Запись не найдена" })
    }
  } catch (err) {
    console.error(err)

    res.status(500).json({
      error: true,
      code: 500,
      message: "Произошла техническая ошибка",
    })
  }
})

export const business = router
