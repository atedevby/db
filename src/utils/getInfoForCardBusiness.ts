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
        id: i + 1,
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
  const result = info.map((item: any, index: number) => {
    return {
      ...item,
      descr: sch[index].descr,
      contacts: sch[index].contacts,
      schedule: sch[index].schedule,
      address: sch[index].address,
      social: sch[index].social,
    }
  })
  return result
}
