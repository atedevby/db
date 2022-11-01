import { daksDB } from "../../db"

export const getSum = async (req: any, res: any) => {
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

export const updateDonateInformation = async (req: any, res: any) => {
  try {
    const { banner, description, sum } = req.body
    const id = req.params.id
    const donate = await daksDB("donate").update({
      banner: banner,
      description: description,
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
