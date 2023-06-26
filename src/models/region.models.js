const { DataTypes } = require ("sequelize");
const db = require("../utils/database");

const Region = db.define("region",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(60)
  }
});

module.exports = Region;