import Vacancies from "../../models/VacanciesModel"

export const getVacancies = async (req: any, res: any) => {
  try {
    const response = await Vacancies.findAll()
    res.status(200).json(response)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const getVacanciesById = async (req: any, res: any) => {
  try {
    const response = await Vacancies.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const createVacancies = async (req: any, res: any) => {
  try {
    await Vacancies.create(req.body)
    res.status(201).json({ msg: "Вакансия создана" })
  } catch (error:any) {
    console.log(error.message)
  }
}

export const updateVacancies = async (req: any, res: any) => {
  try {
    await Vacancies.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Вакансия обновлена" })
  } catch (error:any) {
    console.log(error.message)
  }
}

export const deleteVacancies = async (req: any, res: any) => {
  try {
    await Vacancies.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Вакансия удалена" })
  } catch (error:any) {
    console.log(error.message)
  }
}
