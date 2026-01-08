const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Zone = sequelize.define('Zone', {
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
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'zones',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Zone;
