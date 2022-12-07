import { Sequelize } from "sequelize"
import { daks } from "../db/index"
import EntrepreneurInfoAddressModel from "./EntrepreneurInfoAddressModel"
import EntrepreneurInfoDateModel from "./EntrepreneurInfoDateModel"
import EntrepreneurInfoPhoneModel from "./EntrepreneurInfoPhoneModel"
import EntrepreneurInfoSocialModel from "./EntrepreneurInfoSocialModel"

const { DataTypes }: any = Sequelize

const EntrepreneurInfoModel = daks.define(
  "entrepreneur_info",
  {
    title: DataTypes.STRING,
    descr: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

EntrepreneurInfoModel.hasMany(EntrepreneurInfoPhoneModel)
EntrepreneurInfoModel.hasMany(EntrepreneurInfoDateModel)
EntrepreneurInfoModel.hasMany(EntrepreneurInfoAddressModel)
EntrepreneurInfoModel.hasMany(EntrepreneurInfoSocialModel)

export default EntrepreneurInfoModel
;(async () => {
  await daks.sync()
})()
