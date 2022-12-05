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
