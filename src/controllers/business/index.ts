import express from "express"
import { database } from "../../db"
import { getInfoForCardBusiness } from "../../utils/business/getInfoForCardBusiness"
import { getListForCardBusiness } from "../../utils/business/getListForCardBusiness"
import { getTableForCardBusiness } from "../../utils/business/getTableForCardBusiness"

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

router.get("/card/:id", async (req, res) => {
  try {
    const [
      main = [],
      services = [],
      list = [],
      table = [],
      info = [],
      gallery = [],
    ] = await Promise.all([
      database("business_card_main").where({
        id: req.params.id,
      }),
      database("business_card_service").where({
        business_id: req.params.id,
      }),
      database("business_card_service_list").where({
        service_id: req.params.id,
      }),
      database("business_card_service_table").where({
        service_id: req.params.id,
      }),
      database("business_card_info").where({
        business_id: req.params.id,
      }),
      database("business_card_gallery_list").where({
        business_card_gallery_id: req.params.id,
      }),
    ])

    if (main.length) {
      const serviceList = await getListForCardBusiness(list)
      const serviceTable = await getTableForCardBusiness(table)
      const information = await getInfoForCardBusiness(info)

      const business = main[0]
      business.services = services[0]
      business.services.serviceList = serviceList
      business.services.serviceTable = serviceTable
      business.information = information
      business.gallery = gallery

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

router.post("/card", async (req, res) => {
  try {
    const business: any = await database("business_card_main").insert({
      enabled: req.body.main.enabled,
      title: req.body.main.title,
      descr: req.body.main.descr,
      url_for_banner: req.body.main.url_for_banner,
      name: req.body.main.name,
    })
    const id = req.body.mainId
    const [services = [], list = []] =
      // table = [], info = [], gallery = []
      await Promise.all([
        database("business_card_service").insert({
          business_id: id,
          name: req.body.main.services.name,
        }),
        database("business_card_service_list").where({
          service_id: id,
          enabled: req.body.main.services.list.enabled,
          title: req.body.main.services.list.title,
          price: req.body.main.services.list.price,
          descr: req.body.main.services.list.descr,
          name: req.body.main.services.list.name,
        }),
        // database("business_card_service_table").where({
        //   service_id: id,
        // }),
        // database("business_card_info").where({
        //   business_id: id,
        // }),
        // database("business_card_gallery_list").where({
        //   business_card_gallery_id: id,
        // }),
      ])
    business.services = services
    business.servicesList = list

    res.status(200).json({
      id: id,
      success: true,
      message: "Карточка добавлена",
      business,
    })
  } catch (err) {
    console.error(err)

    res.status(500).json({
      error: true,
      message: "Внутренняя ошибка",
    })
  }
})

export const business = router
