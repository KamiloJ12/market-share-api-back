const Prodruct = require("../models/product.models");
const MarketShare = require("../models/marketShare.models");

class ProductServices {
  static async create (newProduct) {
    try {
      const result = await Prodruct.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductById (id) {
    try {
      if(id) {
        return await Prodruct.findByPk(id);
      }
      return await Prodruct.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getMarketShareByProductAndByRegion(producto_id, region_id) {
    try {
      const result = await MarketShare.findAll({
        where: {
          productId: producto_id,
          regionId: region_id
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = ProductServices;