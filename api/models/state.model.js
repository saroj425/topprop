const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  state_name: { type: String, required: true },
  countryid: { type: Schema.Types.ObjectId, ref: "Country" },
  isactive: { type: String, enum: ["YES", "NO"], default: "YES" }
});
module.exports = mongoose.model("State", stateSchema);
