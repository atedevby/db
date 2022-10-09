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
  const {
    title,
    date,
    description,
    url_for_image,
    password,
    tag,
    nine_image,
    nine_number,
    nine_name,
    enabled,
    eleven_name,
    eleven_number,
    eleven_image,
    ten_image,
    ten_name,
    ten_number,
    eighth_image,
    eighth_name,
    eighth_number,
    seven_image,
    seven_name,
    seven_number,
    six_image,
    six_name,
    six_number,
    five_image,
    five_name,
    five_number,
    four_image,
    four_name,
    four_number,
    three_image,
    three_name,
    three_number,
    two_image,
    two_name,
    two_number,
    one_image,
    one_name,
    one_number,
    spare,
  } = req.body
  try {
    if (enabled === 1) {
      if (password === "admin") {
        const result = await mfc("news").insert({
          title: title,
          date: date,
          description: description,
          url_for_image: url_for_image,
          tag: tag,
          eleven_name: eleven_name,
          eleven_number: eleven_number,
          eleven_image: eleven_image,
          ten_image: ten_image,
          ten_name: ten_name,
          ten_number: ten_number,
          nine_image: nine_image,
          nine_number: nine_number,
          nine_name: nine_name,
          eighth_image: eighth_image,
          eighth_name: eighth_name,
          eighth_number: eighth_number,
          seven_image: seven_image,
          seven_name: seven_name,
          seven_number: seven_number,
          six_image: six_image,
          six_name: six_name,
          six_number: six_number,
          five_image: five_image,
          five_name: five_name,
          five_number: five_number,
          four_image: four_image,
          four_name: four_name,
          four_number: four_number,
          three_image: three_image,
          three_name: three_name,
          three_number: three_number,
          two_image: two_image,
          two_name: two_name,
          two_number: two_number,
          one_image: one_image,
          one_name: one_name,
          one_number: one_number,
          spare: spare,
          enabled: enabled,
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
    } else {
      if (password === "admin") {
        const result = await mfc("news").insert({
          title: title,
          date: date,
          description: description,
          url_for_image: url_for_image,
          tag: tag,
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
