import { mfc } from "../../db"
// import { getInfoForCardBusiness } from "../../utils/business/getInfoForCardBusiness"
// import { getListForCardBusiness } from "../../utils/business/getListForCardBusiness"
// import { getTableForCardBusiness } from "../../utils/business/getTableForCardBusiness"

export const getList = async (req: any, res: any) => {
  try {
    const players = await mfc("players")

    res.status(200).json({
      players,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      players: [],
    })
  }
}

export const getPlayer = async (req: any, res: any) => {
  try {
    const player = await mfc("players").where({
      id: req.params.id,
    })

    res.status(200).json({
      player,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      players: [],
    })
  }
}
