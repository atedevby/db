import express from "express";
import {database,daksDB} from "../../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const posts = await database('news');

        res.status(200).json({
            posts,
        });
    } catch (err) {
        console.log(err)

        res.status(200).json({
            posts: [],
        });
    }
});

router.post("/news", async (req, res) => {
    try {
      const news: any = await daksDB("news").insert({
        enabled: req.body.enabled,
        title: req.body.title,
        descr: req.body.descr,
        url_for_banner: req.body.url_for_banner,
        city: req.body.city,
        author: req.body.author,
        createAt: req.body.createAt
      })
    //   const id = req.body.mainId
    //   const [services = [], list = []] =
    //     // table = [], info = [], gallery = []
    //     await Promise.all([
    //       database("business_card_service").insert({
    //         business_id: id,
    //         name: req.body.main.services.name,
    //       }),
    //       database("business_card_service_list").where({
    //         service_id: id,
    //         enabled: req.body.main.services.list.enabled,
    //         title: req.body.main.services.list.title,
    //         price: req.body.main.services.list.price,
    //         descr: req.body.main.services.list.descr,
    //         name: req.body.main.services.list.name,
    //       }),
    //       // database("business_card_service_table").where({
    //       //   service_id: id,
    //       // }),
    //       // database("business_card_info").where({
    //       //   business_id: id,
    //       // }),
    //       // database("business_card_gallery_list").where({
    //       //   business_card_gallery_id: id,
    //       // }),
    //     ])
    //   business.services = services
    //   business.servicesList = list
  
      res.status(200).json({
        success: true,
        message: "Карточка добавлена",
        news
      })
    } catch (err) {
      console.error(err)
  
      res.status(500).json({
        error: true,
        message: "Внутренняя ошибка",
      })
    }
  })

export const news = router;