import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const Vacancies = daks.define(
  "vacancies",
  {
    city: DataTypes.STRING,
    title: DataTypes.STRING,
    descr: DataTypes.STRING,
    responsibilities: DataTypes.STRING,
    requirements: DataTypes.STRING,
    terms: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    name_organization: DataTypes.STRING,
    address: DataTypes.STRING,
    salary: DataTypes.STRING,
    experience: DataTypes.STRING,
    author: DataTypes.STRING,
    phone: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default Vacancies
;(async () => {
  await daks.sync()
})()
