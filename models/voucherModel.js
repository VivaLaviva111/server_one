const mongoose = require("mongoose");

const voucherSchema = mongoose.Schema(
  {
    voucher: { type: String, required: true ,  unique: true,}
  },
  { timestamps: true }
);

const Voucher = mongoose.model("voucher", voucherSchema);
module.exports = Voucher;
