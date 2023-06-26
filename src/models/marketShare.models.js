const { DataTypes } = require ("sequelize");
const db = require("../utils/database");

const MarketShare = db.define("market_share",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  companyProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "company_product_id",
  },
  fecha: {
    type: DataTypes.DATE
  },
  venta: {
    type:DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = MarketShare;