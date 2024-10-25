const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  halteMasuk: { type: String, required: true },
  halteKeluar: { type: String },
  waktuMasuk: { type: Date, required: true },
  waktuKeluar: { type: Date },
  status: {
    type: String,
    enum: ["ongoing", "completed"],
    default: "ongoing",
  },
});

module.exports = mongoose.model("Billing", billingSchema);
