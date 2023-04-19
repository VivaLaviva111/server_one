const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    contactData: { type: Object, required: true}
  },
  { timestamps: true }
);

const Conatact = mongoose.model("contact", contactSchema);
module.exports = Conatact;
