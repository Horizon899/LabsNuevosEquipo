const express = require("express");
const router = express.Router();
const controller = require("../controllers/strat_amarillo.controller")
router.get("/strat_amarillo", controller.srat_amarillo)


module.exports = router
