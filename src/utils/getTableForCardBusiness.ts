import { database } from "../db"

// interface ITable {
//   id: number
//   schedule: { day: string; time: string }[]
// }

export const getTableForCardBusiness = async (table: any): Promise<any> => {
  const arr: { id: number; schedule: { day: string; time: string }[] }[] | any =
    []
  for (let i = 0; i < table.length; i += 1) {
    try {
      const content = await database(
        "business_card_service_table_content"
      ).where({
        service_table_id: table[i].id,
      })
      const descr = await database("business_card_service_table_descr").where(
        {
          service_table_id: table[i].id,
        }
      )
      arr.push({
        id: table[i].id,
        content: content,
        descr: descr,
      })
    } catch (error) {
      console.log(error)
    }
  }
  const result = table.map((item: any) => {
    return {
      ...item,
      content: arr[item.id - 1].content,
      descr: arr[item.id - 1].descr,
    }
  })
  return result
}
