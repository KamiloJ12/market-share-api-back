const { DataTypes } = require ("sequelize");
const db = require("../utils/database");

const Company = db.define("company", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(60),    
  } 
});

module.exports = Company;

