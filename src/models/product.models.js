const { DataTypes } = require ("sequelize");
const db = require("../utils/database");

const Product = db.define("product",{
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
    type: DataTypes.TEXT
  }
});

module.exports = Product;