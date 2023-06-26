const { DataTypes } = require ("sequelize");
const db = require("../utils/database");

const CompanyProduct = db.define("company_product",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id",
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "company_id",
  }
});

module.exports = CompanyProduct;