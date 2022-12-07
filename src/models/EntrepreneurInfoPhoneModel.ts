import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const EntrepreneurInfoPhoneModel = daks.define(
  "entrepreneur_info_phone",
  {
    operator: DataTypes.STRING,
    number: DataTypes.STRING,
    descr: DataTypes.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default EntrepreneurInfoPhoneModel
;(async () => {
  await daks.sync()
})()
