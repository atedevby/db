import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const Talons = daks.define(
  "talons",
  {
    number: DataTypes.STRING,
    date: DataTypes.STRING,
    name: DataTypes.STRING,
    cabinet: DataTypes.STRING,
    first: DataTypes.STRING,
    second: DataTypes.STRING,
    third: DataTypes.STRING,
    street: DataTypes.STRING,
    flat: DataTypes.STRING,
    house: DataTypes.STRING,
    frame: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

export default Talons
;(async () => {
  await daks.sync()
})()
