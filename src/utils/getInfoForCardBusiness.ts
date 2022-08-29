import { database } from "../db"

// interface IInfo {
//   id: number
// }

export const getInfoForCardBusiness = async (info: any): Promise<any> => {
  const sch: { id: number; schedule: { day: string; time: string }[] }[] | any =
    []
  for (let i = 0; i < info.length; i += 1) {
    try {
      const [
        descr = [],
        contacts = [],
        schedule = [],
        address = [],
        social = [],
      ] = await Promise.all([
        database("business_card_info_descr").where({
          info_id: info[i].id,
        }),
        database("business_card_info_contacts_content").where({
          info_contacts_id: info[i].id,
        }),
        database("business_card_info_schedule_content").where({
          info_schedule_id: info[i].id,
        }),
        database("business_card_info_address_content").where({
          info_address_id: info[i].id,
        }),
        database("business_card_info_social_content").where({
          info_social_id: info[i].id,
        }),
      ])
      sch.push({
        id: info[i].id,
        descr: descr,
        contacts: contacts,
        schedule: schedule,
        address: address,
        social: social,
      })
    } catch (error) {
      console.log(error)
    }
  }
  const result = info.map((item: any) => {
    return {
      ...item,
      descr: sch[item.id - 1].descr,
      contacts: sch[item.id - 1].contacts,
      schedule: sch[item.id - 1].schedule,
      address: sch[item.id - 1].address,
      social: sch[item.id - 1].social,
    }
  })
  return result
}
