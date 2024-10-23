const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  birthDate: { type: Date, required: true },
  age: { type: Number, required: true },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
