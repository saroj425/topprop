const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  c_name: { type: String, required: true },
  isactive: { type: String, enum: ["YES", "NO"], default: "YES" }
});
module.exports = mongoose.model("Category", categorySchema);
