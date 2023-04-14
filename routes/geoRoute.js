const express = require("express");
const router = express.Router();
require("dotenv").config();
const { postGeo} = require("../controllers/geoController");
router.post("/", postGeo);
module.exports = router;