import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Courier extends Model {}

Courier.init({
  name: DataTypes.STRING,
  capacity: DataTypes.INTEGER
}, { sequelize, modelName: "courier" });
