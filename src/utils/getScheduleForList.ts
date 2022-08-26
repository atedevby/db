import { database } from "../db"

interface IList {
  id: number
  schedule: { day: string; time: string }[]
}

export const getScheduleForList = async (list: IList[]): Promise<IList[]> => {
  const sch: { id: number; schedule: { day: string; time: string }[] }[] = []
  for (let i = 0; i < list.length; i++) {
    try {
      const res = await database("business_card_service_list_schedule").where({
        service_list_id: list[i].id,
      })
      sch.push({
        id: list[i].id,
        schedule: res,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return sch
}
