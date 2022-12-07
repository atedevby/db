import { Sequelize } from "sequelize"
import { daks } from "../db/index"
import EntrepreneurGalleryImageModel from "./EntrepreneurGalleryImageModel"

const { DataTypes }: any = Sequelize

const EntrepreneurGalleryModel = daks.define(
  "entrepreneur_gallery",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

EntrepreneurGalleryModel.hasMany(EntrepreneurGalleryImageModel)

export default EntrepreneurGalleryModel
;(async () => {
  await daks.sync()
})()
