import { Sequelize } from "sequelize"
import { daks } from "../db/index"
import Entrepreneur from "./EntrepreneurModel"
import EntrepreneurTableDescrModel from "./EntrepreneurTableDescrModel"

const { DataTypes }: any = Sequelize

const EntrepreneurTableModel = daks.define(
  "entrepreneur_table",
  {
    left: DataTypes.STRING,
    right: DataTypes.STRING,
    descr: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)
EntrepreneurTableModel.hasMany(EntrepreneurTableDescrModel)

export default EntrepreneurTableModel
;(async () => {
  await daks.sync()
})()
