import { daksDB } from "../../../db"
// import { getInfoForCardBusiness } from "../../utils/business/getInfoForCardBusiness"
// import { getListForCardBusiness } from "../../utils/business/getListForCardBusiness"
// import { getTableForCardBusiness } from "../../utils/business/getTableForCardBusiness"

export const getList = async (req:any, res:any) => {
    try {
        const commercial = await daksDB("cards_business")
    
        res.status(200).json({
            commercial,
        })
      } catch (err) {
        console.log(err)
    
        res.status(200).json({
            commercial: [],
        })
      }
}

export const setCurrentCard = async (req:any, res:any) => {
    try {
        const commercial: any = await daksDB("cards_business").insert({
            enabled: req.body.main.enabled,
            title: req.body.main.title,
            descr: req.body.main.descr,
            url_for_banner: req.body.main.url_for_banner,
            name: req.body.main.name,
          })
    
        res.status(200).json({
            commercial,
        })
      } catch (err) {
        console.log(err)
    
        res.status(200).json({
            commercial: [],
        })
      }
}


