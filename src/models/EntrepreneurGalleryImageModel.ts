import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const EntrepreneurGalleryImageModel = daks.define(
  "entrepreneur_gallery_image",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image_id: DataTypes.STRING,
    image_url: DataTypes.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default EntrepreneurGalleryImageModel
;(async () => {
  await daks.sync()
})()
