const mongoose = require("mongoose");

const geoSchema = mongoose.Schema(
  {
    geoData: { type: Object, required: true}
  },
  { timestamps: true }
);

const Geo = mongoose.model("geo", geoSchema);
module.exports = Geo;
