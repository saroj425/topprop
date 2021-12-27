const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  city_name: { type: String, required: true },
  stateid: { type: Schema.Types.ObjectId, ref: "State" },
  isactive: { type: String, enum: ["YES", "NO"], default: "YES" }
});

module.exports = mongoose.model("City", citySchema);
