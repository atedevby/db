import Talons from "../../models/TalonsModel"

export const getTalons = async (req: any, res: any) => {
  try {
    const response = await Talons.findAll()
    res.status(200).json(response)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const getTalonsById = async (req: any, res: any) => {
  try {
    const response = await Talons.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const createTalons = async (req: any, res: any) => {
  try {
    await Talons.create(req.body)
    res.status(201).json({ msg: "Талон создан" })
  } catch (error: any) {
    console.log(error.message)
  }
}

export const updateTalons = async (req: any, res: any) => {
  try {
    await Talons.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Талон обновлен" })
  } catch (error: any) {
    console.log(error.message)
  }
}

export const deleteTalons = async (req: any, res: any) => {
  try {
    await Talons.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Талон удален" })
  } catch (error: any) {
    console.log(error.message)
  }
}
