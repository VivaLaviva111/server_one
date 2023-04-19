const express = require("express");
const router = express.Router();
require("dotenv").config();
const { postContact} = require("../controllers/contactController");
router.post("/", postContact);
module.exports = router;