// src/models/Delivery.js
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";
import { Courier } from "./courier.js";

export class Delivery extends Model {}

Delivery.init(
  {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "PENDING" // PENDING | ASSIGNED | DONE
    }
  },
  {
    sequelize,
    modelName: "delivery"
  }
);

/* Relations */
Delivery.belongsTo(Courier, {
  foreignKey: "courierId",
  onDelete: "SET NULL"
});

Courier.hasMany(Delivery, {
  foreignKey: "courierId"
});
