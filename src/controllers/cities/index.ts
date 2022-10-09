import { daksDB } from "../../db"

export const getCities = async (req: any, res: any) => {
  try {
    const cities = await daksDB("cities")

    res.status(200).json({
      cities,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      cities: [],
    })
  }
}

export const setCity = async (req: any, res: any) => {
  try {
    const city = await daksDB("cities").insert({
      id: req.uid,
      name: req.city,
      admin: "user",
    })
    res.status(200).json({
      city,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      city: [],
    })
  }
}
