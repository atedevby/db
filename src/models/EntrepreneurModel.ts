import { Sequelize } from "sequelize"
import { daks } from "../db/index"
import EntrepreneurGalleryModel from "./EntrepreneurGalleryModel"
import EntrepreneurInfoModel from "./EntrepreneurInfoModel"
import EntrepreneurList from "./EntrepreneurListModel"
import EntrepreneurTableModel from "./EntrepreneurTableModel"

const { DataTypes }: any = Sequelize

const Entrepreneur = daks.define(
  "entrepreneur",
  {
    city: DataTypes.STRING,
    title: DataTypes.STRING,
    descr: DataTypes.STRING,
    banner_id: DataTypes.STRING,
    banner_url: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    additial: DataTypes.STRING,
    isBanned: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)
Entrepreneur.hasMany(EntrepreneurTableModel)
Entrepreneur.hasMany(EntrepreneurGalleryModel)
Entrepreneur.hasMany(EntrepreneurInfoModel)
Entrepreneur.hasMany(EntrepreneurList)

export default Entrepreneur
;(async () => {
  await daks.sync()
})()
