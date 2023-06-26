const { Router } = require("express");
const {createCompany, updateCompany, getCompanyById, getCompanies, agregarProducts} = require("../controllers/company.controllers");
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post("/api/v1/company", /* [validarJWT],  */createCompany);
router.post("/api/v1/company/:id", /* [validarJWT],  */agregarProducts);
router.put("/api/v1/company/:id", updateCompany);
router.get("/api/v1/companies/", getCompanies);
router.get("/api/v1/company/:id", getCompanyById);

module.exports = router;