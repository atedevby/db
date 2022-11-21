import Resumes from "../../models/ResumesModel"

export const getResumes = async (req: any, res: any) => {
  try {
    const response = await Resumes.findAll()
    res.status(200).json(response)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const getResumesById = async (req: any, res: any) => {
  try {
    const response = await Resumes.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const createResumes = async (req: any, res: any) => {
  try {
    await Resumes.create(req.body)
    res.status(201).json({ msg: "Резюме создано" })
  } catch (error: any) {
    console.log(error.message)
  }
}

export const updateResumes = async (req: any, res: any) => {
  try {
    await Resumes.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Резюме обновлено" })
  } catch (error: any) {
    console.log(error.message)
  }
}

export const deleteResumes = async (req: any, res: any) => {
  try {
    await Resumes.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: "Резюме удалено" })
  } catch (error: any) {
    console.log(error.message)
  }
}
