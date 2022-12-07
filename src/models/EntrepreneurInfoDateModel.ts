import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const EntrepreneurInfoDateModel = daks.define(
  "entrepreneur_info_date",
  {
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    descr: DataTypes.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default EntrepreneurInfoDateModel
;(async () => {
  await daks.sync()
})()
