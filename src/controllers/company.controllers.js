const CompanyServices = require("../services/company.services");

const createCompany = async (req,res) => {
  try {
    const { id, ...newCompany } = req.body;
    const result = await CompanyServices.create(newCompany);
    res.status(201).json(result);
  }catch (error){
    console.log(error);
    res.status(400).json(error);    
  }
}

const updateCompany = async (req,res) => {
  try {
    const {id} = req.params;
    const { id: _id, ...updateCompany} = req.body;
    const companyUpdate = await CompanyServices.update(id,updateCompany);
    res.status(204).send(companyUpdate);
  } catch (error) {
     res.status(400).json(error); 
  }
}

const getCompanyById = async (req,res) => {
  try {
    const {id} = req.params;
    const company = await CompanyServices.get(id);
    res.status(200).send(company);
  } catch (error) {
     res.status(400).json(error); 
  }
}

const getCompanies = async (req,res) => {
  try {
    const companies = await CompanyServices.get();
    res.status(200).send(companies);
  } catch (error) {
     res.status(400).json(error); 
  }
}

const agregarProducts = async (req,res) => {
  try {
    const {id} = req.params;
    const {productsId} = req.body;
    const companyProducts = productsId.map( productId => {
      return {  
        productId: productId.id,
        companyId: Number(id)
      }
    });
    const companies = await CompanyServices.addProducts(companyProducts);
    res.status(200).send(companies);
  } catch (error) {
    console.log(error);
    res.status(400).json(error); 
  }
}

module.exports = {
  createCompany,
  updateCompany,
  getCompanyById,
  getCompanies,
  agregarProducts
};