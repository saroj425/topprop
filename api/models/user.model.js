const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, default: null },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  usertype: {
    type:String,
    enum: ["user", "vendor"],
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
    default: "other"
  },
  about: { type: Array, default: null },
  password: { type: String, required: true },
  profilepic: { type: String, default: "img/author/img1.jpg" },
  mobile: { type: String, default: null },
  accept_terms: { type: String, default: null },
  created_ts: { type: String, default: Date.now },
  updated_ts: { type: String, default: null }
});

module.exports = mongoose.model("User", userSchema);
