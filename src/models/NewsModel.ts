import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const News = daks.define(
  "news",
  {
    cities_id: DataTypes.NUMBER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    banner: DataTypes.STRING,
    created: DataTypes.STRING,
    tags: DataTypes.NUMBER,
    author: DataTypes.STRING,
    time_for_reading: DataTypes.STRING,
    slider_id: DataTypes.NUMBER,
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default News
;(async () => {
  await daks.sync()
})()
