const Company = require("./company.models");
const Product = require("./product.models");
const Region = require("./region.models");
const MarketShare = require("./marketShare.models");
const CompanyProduct = require("./company_products");

const initModels = () => {

  Company.belongsToMany(Product, { through: CompanyProduct, foreignKey: 'companyId' });
  Product.belongsToMany(Company, { through: CompanyProduct, foreignKey: 'productId' });

  /* Region.hasMany(MarketShare, {foreignKey: "regionId"});
  MarketShare.belongsTo(Region, {foreignKey: "regionId"}); */

  CompanyProduct.hasMany(MarketShare, {foreignKey: "companyProductId"});
  MarketShare.belongsTo(CompanyProduct, {foreignKey: "companyProductId"});
  
};

module.exports = initModels;
