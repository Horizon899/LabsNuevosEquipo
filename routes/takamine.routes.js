const express = require("express");
const router = express.Router();
const controller = require("../controllers/takamine.controller")
router.get("/takamine", controller.main_page)


module.exports = router