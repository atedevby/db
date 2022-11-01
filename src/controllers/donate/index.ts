import { daksDB } from "../../db"

export const getDonate = async (req: any, res: any) => {
  try {
    const donate = await daksDB("donate")

    res.status(200).json({
      donate,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      donate: [],
    })
  }
}

export const updateDonateDescription = async (req: any, res: any) => {
  try {
    const { description } = req.body
    const id = req.params.id
    const donate = await daksDB("donate").update({
      description: description,
      id: id,
    })

    res.status(200).json({
      donate,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      donate: [],
    })
  }
}

export const updateDonateBanner = async (req: any, res: any) => {
  try {
    const { banner } = req.body
    const id = req.params.id
    const donate = await daksDB("donate").update({
      banner: banner,
      id: id,
    })

    res.status(200).json({
      donate,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      donate: [],
    })
  }
}

export const updateDonateSum = async (req: any, res: any) => {
  try {
    const { sum } = req.body
    const id = req.params.id
    const donate = await daksDB("donate").update({
      sum: sum,
      id: id,
    })

    res.status(200).json({
      donate,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      donate: [],
    })
  }
}
