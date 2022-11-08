import { daksDB } from "../../db"
// import { getInfoForCardBusiness } from "../../utils/business/getInfoForCardBusiness"
// import { getListForCardBusiness } from "../../utils/business/getListForCardBusiness"
// import { getTableForCardBusiness } from "../../utils/business/getTableForCardBusiness"

export const getList = async (req: any, res: any) => {
  try {
    const users = await daksDB("users")

    res.status(200).json({
      users,
    })
  } catch (err) {
    console.log(err)

    res.status(200).json({
      users: [],
    })
  }
}

export const addUserInDB = async (req: any, res: any) => {
  try {
    const user: any = await daksDB("users").insert({
      name: req.body.name,
      phone: req.body.phone,
      created: req.body.created,
      signed: req.body.signed,
      role: req.body.role,
      uid: req.body.uid,
      is_agreed_personal_data: req.body.isAgreedPersonalData,
    })
    res.status(200).json({
      success: true,
      message: "Юзер создан",
      user,
    })
  } catch (err) {
    console.log(err)
    res.status(200).json({
      user: [],
    })
  }
}
