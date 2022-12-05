import Entrepreneur from "../../models/EntrepreneurModel"

export const getEntrepreneur = async (req: any, res: any) => {
  try {
    const response = await Entrepreneur.findAll()
    res.status(200).json(response)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const getEntrepreneurById = async (req: any, res: any) => {
  try {
    const response = await Entrepreneur.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const createEntrepreneur = async (req: any, res: any) => {
  try {
    await Entrepreneur.create(req.body)
    res.status(201).json({ msg: "Бизнес создан" })
  } catch (error:any) {
    console.log(error.message)
  }
}

export const updateEntrepreneur = async (req: any, res: any) => {
  try {
    await Entrepreneur.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Бизнес обновлен" })
  } catch (error:any) {
    console.log(error.message)
  }
}

export const deleteEntrepreneur = async (req: any, res: any) => {
  try {
    await Entrepreneur.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Бизнес удален" })
  } catch (error:any) {
    console.log(error.message)
  }
}
