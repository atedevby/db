import { Sequelize } from "sequelize"
import { daks } from "../db/index"

const { DataTypes }: any = Sequelize

const Entrepreneur = daks.define(
  "entrepreneur",
  {
    city: DataTypes.STRING,
    title: DataTypes.STRING,
    banner: DataTypes.STRING,
    descr: DataTypes.STRING,
    list_title: DataTypes.STRING,
    list_price: DataTypes.STRING,
    list_date: DataTypes.STRING,
    list_descr: DataTypes.STRING,
    table_title_left: DataTypes.STRING,
    table_descr_left: DataTypes.STRING,
    table_title_right: DataTypes.STRING,
    table_descr_right: DataTypes.STRING,
    table_descr: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    additial: DataTypes.STRING,
    info_title: DataTypes.STRING,
    info_descr: DataTypes.STRING,
    info_contact_phone_icon: DataTypes.STRING,
    info_contact_phone_number: DataTypes.STRING,
    info_contact_phone_descr: DataTypes.STRING,
    info_contact_date_day: DataTypes.STRING,
    info_contact_date_time: DataTypes.STRING,
    info_contact_date_descr: DataTypes.STRING,
    info_contact_address_title: DataTypes.STRING,
    info_contact_address_link: DataTypes.STRING,
    info_contact_social_instagram: DataTypes.STRING,
    isBanned: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

export default Entrepreneur
;(async () => {
  await daks.sync()
})()
