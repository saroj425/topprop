const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  country_name: { type: String, required: true },
  isactive: { type: String, enum: ["YES", "NO"], default: "YES" }
});
module.exports = mongoose.model("Country", countrySchema);
