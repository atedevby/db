import { Sequelize } from "sequelize"
import { daks } from "../db/index"
import EntrepreneurListDateModel from "./EntrepreneurListDateModel"

const { DataTypes }: any = Sequelize

const EntrepreneurList = daks.define(
  "entrepreneur_list",
  {
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

EntrepreneurList.hasMany(EntrepreneurListDateModel)

export default EntrepreneurList
;(async () => {
  await daks.sync()
})()
