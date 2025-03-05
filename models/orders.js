const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    vehicle: String,
    pickupLocation: String,
    destination: String,
    status: { type: String, default: "Pending" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
