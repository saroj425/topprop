const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  subcatname: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  isactive: { type: String, enum: ["YES", "NO"], default: "YES" }
});
module.exports = mongoose.model("SubCategory", subcategorySchema);
