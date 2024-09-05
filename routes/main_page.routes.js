const express = require("express");
const router = express.Router();
const controller =require("../public/controllers/main_page.controller")
router.get("/", controller.main_page)

module.exports = router
