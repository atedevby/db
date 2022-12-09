import { daksDB } from "../../db"

export const getAddress = async (req: any, res: any) => {
  try {
    const address = await daksDB("address")

    res.status(200).json({
      address,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      address: [],
    })
  }
}
