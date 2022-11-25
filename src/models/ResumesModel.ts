import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const Resumes = daks.define(
  "resumes",
  {
    city: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    descr: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    sex: DataTypes.STRING,
    phone: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    citizenship: DataTypes.STRING,
    salary: DataTypes.STRING,
    profession: DataTypes.STRING,
    author: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

export default Resumes
;(async () => {
  await daks.sync()
})()
