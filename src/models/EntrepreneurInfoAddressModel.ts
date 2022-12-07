import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const EntrepreneurInfoAddressModel = daks.define(
  "entrepreneur_info_address",
  {
    address: DataTypes.STRING,
    link: DataTypes.STRING,
    descr: DataTypes.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default EntrepreneurInfoAddressModel
;(async () => {
  await daks.sync()
})()
