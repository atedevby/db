// @ts-nocheck
import { mfc } from "../../db"
// import { getInfoForCardBusiness } from "../../utils/business/getInfoForCardBusiness"
// import { getListForCardBusiness } from "../../utils/business/getListForCardBusiness"
// import { getTableForCardBusiness } from "../../utils/business/getTableForCardBusiness"

export const getList = async (req: any, res: any) => {
  const sqlGet = "SELECT * FROM news"
  mfc.query(sqlGet, (error: any, result: any) => {
    res.send(result)
  })
  //   try {
  //     const news = await mfc("news")

  //     res.status(200).json({
  //         news,
  //     })
  //   } catch (err) {
  //     console.log(err)

  //     res.status(200).json({
  //         news: [],
  //     })
  //   }
}

export const setPageNews = async (req: any, res: any) => {
  const { title, date, description, url_for_image } = req.body
  const sqlInsert =
    "SELECT INTO news (title,date,description, url_for_image) VALUES (?,?,?,?)"
  mfc.query(
    sqlInsert,
    [title, date, description, url_for_image],
    (error: any, result: any) => {
      if (error) {
        console.log(error)
      }
    }
  )
  //   try {
  //     const news = await mfc("news")

  //     res.status(200).json({
  //         news,
  //     })
  //   } catch (err) {
  //     console.log(err)

  //     res.status(200).json({
  //         news: [],
  //     })
  //   }
}

export const getPageNews = async (req: any, res: any) => {
  try {
    const pageNews = await mfc("news").where({
      id: req.params.id,
    })

    res.status(200).json({
      pageNews,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      pageNews: [],
    })
  }
}
