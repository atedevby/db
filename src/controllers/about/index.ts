import { daksDB } from "../../db"

export const getAbout = async (req: any, res: any) => {
  try {
    const about = await daksDB("about")

    res.status(200).json({
      about,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      about: [],
    })
  }
}

export const updateAboutDescription = async (req: any, res: any) => {
  try {
    const { description } = req.body
    const id = req.params.id
    const about = await daksDB("about").update({
      description: description,
      id: id,
    })

    res.status(200).json({
      id: about,
      message: "Успешно обновлено!",
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      about: [],
    })
  }
}

export const updateAboutRatingTitle = async (req: any, res: any) => {
  try {
    const { ratingTitle } = req.body
    const id = req.params.id
    const about = await daksDB("about").update({
      rating_title: ratingTitle,
      id: id,
    })

    res.status(200).json({
      id: about,
      message: "Успешно обновлено!",
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      about: [],
    })
  }
}

export const updateAboutRatingList = async (req: any, res: any) => {
  try {
    const { description, link, idElement } = req.body
    const id = req.params.id
    const testId = await daksDB("about")
    // .update({
    //   description: description,
    //   link: link,
    //   about_id: 1,
    //   id: idElement
    // })
    console.log(testId)
    const about = await daksDB("about_rating").update({
      description: description,
      link: link,
      about_id: 1
    })

    res.status(200).json({
      id: about,
      message: "Успешно обновлено!",
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      about: [],
    })
  }
}
