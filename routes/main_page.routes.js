const express = require("express");
const router = express.Router();
const controller =require("../controllers/main_page.controller")
router.get("/", controller.main_page)

router.get("/strat_amarilla", controller.strat_amarilla);



module.exports = router
