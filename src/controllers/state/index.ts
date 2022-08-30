import express from "express"
import { database } from "../../db"
import { getInfoForCardState } from "../../utils/state/getInfoForCardState"
import { getListForCardState } from "../../utils/state/getListForCardState"

const router = express.Router()

router.get("/list", async (req, res) => {
  try {
    const state = await database("state_card_main")

    res.status(200).json({
      state,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      state: [],
    })
  }
})

router.get("/card/:id", async (req, res) => {
  try {
    const [main = [], services = [], list = [], info = []] = await Promise.all([
      database("state_card_main").where({
        id: req.params.id,
      }),
      database("state_card_service").where({
        state_card_main_id: req.params.id,
      }),
      database("state_card_service_list").where({
        state_card_service_id: req.params.id,
      }),
      // database("business_card_service_table").where({
      //   service_id: req.params.id,
      // }),
      database("state_card_info").where({
        state_card_main_id: req.params.id,
      }),
    ])

    if (main.length) {
      // const serviceTable = await getTableForCardBusiness(table)
      const information = await getInfoForCardState(info)

      const state = main[0]
      state.services = services[0]
      state.services.serviceList = list
      // business.services.serviceTable = serviceTable
      state.information = information

      res.status(200).json(state)
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

export const state = router
