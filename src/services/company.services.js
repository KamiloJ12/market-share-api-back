const Company = require("../models/company.models");
const CompanyProduct = require("../models/company_products");
const Product = require("../models/product.models");

class CompanyServices {
  static async create(newCompany) {
    try {
      const companyCreated = await Company.create(newCompany);
      return companyCreated;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updateCompany){
    try {
      const companyUpdate = await Company.update(updateCompany, {
        where: {id},
      });
      return companyUpdate;
    } catch (error) {
        throw error;
    }
  }

  static async get(id){
    try {
      if(id){
        const getCompany = await Company.findOne({
          where: { id: id },
          include: Product
        });
        return getCompany;
      }
      return await Company.findAll();
    } catch (error) {
        console.log(error);
        throw error;
    }
  }

  static async addProducts(company_products) {
    try {
      const companyProduct = await CompanyProduct.bulkCreate(company_products);
      return companyProduct;
    } catch (error) {
        throw error;
    }
  }

}

module.exports = CompanyServices;