// @ts-nocheck
import { mfc } from "../../db"
// import { getInfoForCardBusiness } from "../../utils/business/getInfoForCardBusiness"
// import { getListForCardBusiness } from "../../utils/business/getListForCardBusiness"
// import { getTableForCardBusiness } from "../../utils/business/getTableForCardBusiness"

export const getList = async (req: any, res: any) => {
  //   const sqlGet = "SELECT * FROM news"
  //   mfc.query(sqlGet, (error: any, result: any) => {
  //     res.send(result)
  //   })
  try {
    const news = await mfc("news")

    res.status(200).json({
      news,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      news: [],
    })
  }
}

export const setPageNews = async (req: any, res: any) => {
  const { title, date, description, url_for_image, password,tag } = req.body
  try {
    if (password === "admin") {
      const result = await mfc("news").insert({
        title: title,
        date: date,
        description: description,
        url_for_image: url_for_image,
        tag: tag
      })
      res.status(200).json({
        result,
      })
    } else {
      res.status(500).json({
        error: true,
        message: "Неверный пароль",
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: true,
      message: "Внутреняя ошибка",
    })
  }
}

export const deletePageNews = async (req: any, res: any) => {
  const { id } = req.params
  try {
    if (password === "admin250819") {
      await mfc("news").delete({
        id,
      })
      res.status(200).json({
        error: true,
        message: "Новость удалена",
      })
    } else {
      res.status(500).json({
        error: true,
        message: "Неверный пароль",
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: true,
      message: "Внутреняя ошибка",
    })
  }

  //   const sqlInsert =
  //     "INSERT INTO `news` (`id`, `title`, `date`, `description`, `url_for_image`) VALUES (NULL, ?, ?, ?, ?)"
  //   mfc.query(
  //     sqlInsert,
  //     [title, date, description, url_for_image],
  //     (error: any, result: any) => {
  //       if (error) {
  //         console.log(error)
  //       } else {
  //         res.send(result)
  //       }
  //     }
  //   )
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
