const ProductServices = require("../services/product.services");

const createProduct = async (req,res) => {
  try {
    const {id, ...newProduct} = req.body;
    const product = await ProductServices.create(newProduct);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
}

const getProductsById = async (req,res) => {
  try {
    const { id } = req.params;
    const products = await ProductServices.getProductById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
}

const getProducts = async (req,res) => {
  try {
    const products = await ProductServices.getProductById();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
}


module.exports = {
  createProduct,
  getProductsById,
  getProducts
}