import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const EntrepreneurTableDescrModel = daks.define(
  "entrepreneur_table_descr",
  {
    descr: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default EntrepreneurTableDescrModel
;(async () => {
  await daks.sync()
})()
