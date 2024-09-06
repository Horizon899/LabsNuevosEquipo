const express = require("express");
const router = express.Router();
const controller = require("../controllers/gibson.controller")
router.get("/gibson", controller.main_page)


module.exports = router