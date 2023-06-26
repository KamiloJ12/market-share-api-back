const { Router } = require("express");
const {createProduct, getProductsById, getProducts} = require("../controllers/product.controllers");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/api/v1/product", createProduct);
router.get("/api/v1/products/", getProducts);
router.get("/api/v1/product/:id", getProductsById);

module.exports = router;