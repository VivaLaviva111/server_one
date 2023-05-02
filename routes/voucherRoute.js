const express = require("express");
const router = express.Router();
require("dotenv").config();
const { postVoucher,checkVoucher} = require("../controllers/voucherController");


router.post("/check", checkVoucher);
router.post("/", postVoucher);


module.exports = router;