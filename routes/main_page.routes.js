const express = require("express");
const router = express.Router();
const controller = require("../controllers/main_page.controller")
router.get("/", controller.main_page)

router.get("/strat_amarilla", controller.strat_amarilla);

router.get("/gibson", controller.gibson);

router.get("/login", controller.login);

router.get("/takamine", controller.takamine);

router.get("/guitarras", controller.getAllGuitarras);

router.get("/guitarras/:guitarraId", controller.getGuitarraById);


module.exports = router
