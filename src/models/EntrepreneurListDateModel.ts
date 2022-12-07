import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const EntrepreneurListDateModel = daks.define(
  "entrepreneur_list_date",
  {
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default EntrepreneurListDateModel
;(async () => {
  await daks.sync()
})()
