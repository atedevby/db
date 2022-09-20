import { daksDB } from "../../db"
// import { getInfoForCardBusiness } from "../../utils/business/getInfoForCardBusiness"
// import { getListForCardBusiness } from "../../utils/business/getListForCardBusiness"
// import { getTableForCardBusiness } from "../../utils/business/getTableForCardBusiness"

export const getList = async (req:any, res:any) => {
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
