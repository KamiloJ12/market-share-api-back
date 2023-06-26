const MarketShareService = require("../services/markeshare.services");

const getMarketShareProductByRegion = async (req,res) => {
  try {
    const { product, company } = req.params;
    console.log({ product, company });
    const products = await MarketShareService.getMarketShareByProduct(product, company);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

const createMarketShareProductByRegion = async (req,res) => {
    try {
      const marketShare = req.body;
      const products = await MarketShareService.create(marketShare);
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json(error);
    }
  }

module.exports = {
  getMarketShareProductByRegion,
  createMarketShareProductByRegion
}