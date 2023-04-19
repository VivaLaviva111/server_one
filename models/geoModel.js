const mongoose = require("mongoose");

const geoSchema = mongoose.Schema(
  {
    geoData: { type: Object}
  },
  { timestamps: true }
);

const Geo = mongoose.model("geo", geoSchema);
module.exports = Geo;
