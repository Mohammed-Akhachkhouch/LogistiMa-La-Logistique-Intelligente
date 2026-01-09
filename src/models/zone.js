import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

export class Zone extends Model { }

Zone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    center_lat: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    center_lng: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    max_drivers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    }
  },
  {
    sequelize,
    modelName: "zone",
    tableName: 'zones',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

