const MarketShare = require("../models/marketShare.models");
const Company = require("../models/company.models");
const Product = require("../models/product.models");
const CompanyProduct = require("../models/company_products");
const { Op } = require("sequelize");

class MarketShareServices {
  static async getMarketShareByProduct(product_id, company_id) {
    try {
      const result = await MarketShare.findAll({
        include: [
          {
            model: CompanyProduct,
            where: { 
              [Op.and]: [
                { productId: product_id },
                { companyId: company_id }
              ] 
            }
          }
        ]
      });
      
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async create(newMarketShare) {
    try {
      const result = await MarketShare.create(newMarketShare);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MarketShareServices;