const { Router } = require("express");
const {getMarketShareProductByRegion, createMarketShareProductByRegion} = require("../controllers/marketshare.controller");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/api/v1/market-share/", createMarketShareProductByRegion);
router.get("/api/v1/market-share/:company/:product", getMarketShareProductByRegion);

module.exports = router;