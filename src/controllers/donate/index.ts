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
