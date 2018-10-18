const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  name: { type: String, required: true },
  productID: String,
  date: { type: Date, default: Date.now }
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;