const { Router } = require("express");
const {login} = require("../controllers/auth.controllers");

const router = Router();

router.post("/api/v1/auth/login", login);;

module.exports = router;