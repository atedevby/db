// import express from "express";
// import {database,daksDB} from "../../db";

// const router = express.Router();

// // router.get("/", async (req, res) => {
// //     try {
// //         const posts = await database('news');

// //         res.status(200).json({
// //             posts,
// //         });
// //     } catch (err) {
// //         console.log(err)

// //         res.status(200).json({
// //             posts: [],
// //         });
// //     }
// // });

// // router.post("/", async (req, res) => {
// //     try {
// //       const news: any = await daksDB("news").insert({
// //         enabled: req.body.enabled,
// //         title: req.body.title,
// //         descr: req.body.descr,
// //         url_for_banner: req.body.url_for_banner,
// //         city: req.body.city,
// //         author: req.body.author,
// //         createAt: req.body.createAt
// //       })
// //     //   const id = req.body.mainId
// //     //   const [services = [], list = []] =
// //     //     // table = [], info = [], gallery = []
// //     //     await Promise.all([
// //     //       database("business_card_service").insert({
// //     //         business_id: id,
// //     //         name: req.body.main.services.name,
// //     //       }),
// //     //       database("business_card_service_list").where({
// //     //         service_id: id,
// //     //         enabled: req.body.main.services.list.enabled,
// //     //         title: req.body.main.services.list.title,
// //     //         price: req.body.main.services.list.price,
// //     //         descr: req.body.main.services.list.descr,
// //     //         name: req.body.main.services.list.name,
// //     //       }),
// //     //       // database("business_card_service_table").where({
// //     //       //   service_id: id,
// //     //       // }),
// //     //       // database("business_card_info").where({
// //     //       //   business_id: id,
// //     //       // }),
// //     //       // database("business_card_gallery_list").where({
// //     //       //   business_card_gallery_id: id,
// //     //       // }),
// //     //     ])
// //     //   business.services = services
// //     //   business.servicesList = list

// //       res.status(200).json({
// //         success: true,
// //         message: "Новость добавлена",
// //         news
// //       })
// //     } catch (err) {
// //       console.error(err)

// //       res.status(500).json({
// //         error: true,
// //         message: "Внутренняя ошибка",
// //       })
// //     }
// //   })

// export const news = router;

import News from "../../models/NewsModel"

export const getNews = async (req: any, res: any) => {
  try {
    const response = await News.findAll()
    console.log(response)
    res.status(200).json(response)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const getNewsById = async (req: any, res: any) => {
  try {
    const response = await News.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const createNews = async (req: any, res: any) => {
  try {
    await News.create(req.body)
    res.status(201).json({ msg: "Новость создана" })
  } catch (error:any) {
    console.log(error.message)
  }
}

export const updateNews = async (req: any, res: any) => {
  try {
    await News.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Новость обновлена" })
  } catch (error:any) {
    console.log(error.message)
  }
}

export const deleteNews = async (req: any, res: any) => {
  try {
    await News.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Новость удалена" })
  } catch (error:any) {
    console.log(error.message)
  }
}
