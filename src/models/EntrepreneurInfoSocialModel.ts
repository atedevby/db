import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const EntrepreneurInfoSocialModel = daks.define(
  "entrepreneur_info_social",
  {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    icon: DataTypes.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default EntrepreneurInfoSocialModel
;(async () => {
  await daks.sync()
})()
